// Generalised "variant-name" sweep: catches near-miss name-format variants of
// already-resolved People (bare first name, "First + surname-initial", extra
// middle initial, fuller legal name, punctuation/spacing alias variant).
// Only auto-applies when there is EXACTLY ONE candidate match vault-wide -
// ambiguous multi-candidate tokens are left untouched on purpose.
// Run from the vault root: node .claude/skills/vault-identity-resolution/scripts/resolve-variants.mjs
import fs from 'fs';
import path from 'path';

const VAULT = process.cwd();
const peopleDir = path.join(VAULT, 'People');
const REPORT_DIR = path.join(VAULT, '.claude/skills/vault-identity-resolution/reports');
const SKIP_DIRS = new Set(['.git', '.obsidian', '.github', '.claude', '_Templates', '_Attachments']);

// Tokens to never auto-resolve, even if they'd otherwise match a single
// candidate - add to this list whenever a real collision is found on a name
// that looks safe on paper. (Rich/Iain were both found ambiguous in this
// vault's history - keep excluded unless a future audit clears them.)
const EXCLUDE_TOKENS = new Set(['Rich', 'Iain']);

function aliasesOf(content, stem) {
  const known = new Set([stem]);
  const fm = content.match(/^---\n([\s\S]*?)\n---/);
  if (fm) {
    const ab = fm[1].match(/aliases:\n((?:\s+-\s+.+\n?)+)/);
    if (ab) for (const line of ab[1].split('\n')) {
      const m = line.match(/^\s+-\s+(.+)$/);
      if (m) known.add(m[1].trim());
    }
  }
  return known;
}
const known = new Set();
const peopleNames = [];
for (const f of fs.readdirSync(peopleDir)) {
  if (!f.endsWith('.md')) continue;
  const stem = f.replace(/\.md$/, '');
  const content = fs.readFileSync(path.join(peopleDir, f), 'utf8');
  const aliases = [...aliasesOf(content, stem)];
  peopleNames.push({ stem, aliases });
  for (const a of aliases) known.add(a.toLowerCase());
}
function collectStems(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue;
    if (e.isDirectory() && SKIP_DIRS.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) collectStems(full, out);
    else if (e.name.endsWith('.md')) out.add(e.name.replace(/\.md$/, '').toLowerCase());
  }
}
collectStems(VAULT, known);

function collectMdFiles(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue;
    if (e.isDirectory() && SKIP_DIRS.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) collectMdFiles(full, out);
    else if (e.name.endsWith('.md')) out.push(full);
  }
}
const allFiles = [];
collectMdFiles(VAULT, allFiles);

function stripCodeSpans(t) { return t.replace(/`[^`\n]*`/g, ''); }
const linkRe = /\[\[([^\]|#]+)(?:\|[^\]]+)?\]\]/g;
const unresolved = new Map(); // token -> Set(absolute file paths)
for (const full of allFiles) {
  const raw = fs.readFileSync(full, 'utf8');
  const content = stripCodeSpans(raw);
  let m;
  while ((m = linkRe.exec(content))) {
    const token = m[1].trim();
    if (known.has(token.toLowerCase())) continue;
    if (!unresolved.has(token)) unresolved.set(token, new Set());
    unresolved.get(token).add(full);
  }
}

function norm(s) { return String(s).toLowerCase().replace(/[^a-z]/g, ''); }

function findMatch(token) {
  const tWords = token.split(/\s+/).filter(Boolean);
  const tNorm = norm(token);
  const matches = [];
  for (const p of peopleNames) {
    const pWords = p.stem.split(/\s+/).filter(Boolean);
    if (tWords.length === 1 && pWords.length >= 2 && norm(tWords[0]) === norm(pWords[0]) && pWords[0].length >= 4) {
      matches.push({ stem: p.stem, kind: 'first-name-only' });
      continue;
    }
    if (tWords.length === 2 && tWords[1].replace(/\./g, '').length <= 2 && pWords.length >= 2) {
      if (norm(tWords[0]) === norm(pWords[0]) && norm(tWords[1])[0] === norm(pWords[pWords.length - 1])[0]) {
        matches.push({ stem: p.stem, kind: 'first+surname-initial' });
        continue;
      }
    }
    if (tWords.length === pWords.length + 1) {
      const tFiltered = tWords.filter((w) => !(w.replace(/\./g, '').length <= 2 && /^[A-Z]/.test(w)));
      if (tFiltered.length === pWords.length && norm(tFiltered.join('')) === norm(pWords.join(''))) {
        matches.push({ stem: p.stem, kind: 'middle-initial' });
        continue;
      }
    }
    if (tWords.length > pWords.length && pWords.length >= 2) {
      const tJoined = tWords.map(norm).join(',');
      if (norm(tWords[0]) === norm(pWords[0]) && tJoined.includes(norm(pWords[pWords.length - 1]))) {
        matches.push({ stem: p.stem, kind: 'fuller-legal-name' });
        continue;
      }
    }
    for (const a of p.aliases) {
      if (a.length >= 2 && norm(a) === tNorm && a !== token) {
        matches.push({ stem: p.stem, kind: 'punctuation-variant' });
      }
    }
  }
  return matches;
}

const HIGH_CONF_KINDS = new Set(['punctuation-variant', 'middle-initial', 'fuller-legal-name', 'first+surname-initial', 'first-name-only']);

const toApply = [];
for (const [token, files] of unresolved) {
  if (EXCLUDE_TOKENS.has(token)) continue;
  const m = findMatch(token);
  if (m.length !== 1) continue; // skip ambiguous - deliberately conservative
  if (!HIGH_CONF_KINDS.has(m[0].kind)) continue;
  toApply.push({ token, target: m[0].stem, kind: m[0].kind, fileCount: files.size });
}

function escapeReg(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

let filesTouched = 0;
const applied = [];
for (const { token, target, kind } of toApply) {
  const tRe = new RegExp('\\[\\[' + escapeReg(token) + '\\]\\]', 'g');
  const tPipeRe = new RegExp('\\[\\[' + escapeReg(token) + '\\|', 'g');
  const testRe = new RegExp('\\[\\[' + escapeReg(token) + '(\\||\\]\\])');
  const files = allFiles.filter((full) => testRe.test(fs.readFileSync(full, 'utf8')));
  for (const full of files) {
    let content = fs.readFileSync(full, 'utf8');
    const updated = content
      .replace(tRe, `[[${target}|${token}]]`)
      .replace(tPipeRe, `[[${target}|`);
    if (updated !== content) {
      fs.writeFileSync(full, updated, 'utf8');
      filesTouched++;
    }
  }
  applied.push({ token, target, kind, files: files.length });
}

console.log(`Applied ${applied.length} token resolutions across ${filesTouched} file writes.`);
for (const a of applied) console.log(` ${a.token} -> ${a.target}  [${a.kind}] (${a.files} file(s))`);

fs.mkdirSync(REPORT_DIR, { recursive: true });
fs.writeFileSync(path.join(REPORT_DIR, 'variant-resolution-report.json'), JSON.stringify(applied, null, 2));
