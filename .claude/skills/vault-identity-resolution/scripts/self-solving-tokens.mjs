// "Self-solving tokens" sweep: finds unresolved short/initials tokens whose
// initials match an EXISTING People note that is also mentioned (by full
// name, as plain text or a link) somewhere in the same file as the token.
// This is a strong signal but not proof - it only prints candidates, it does
// NOT auto-apply edits. Always spot-check the actual context line before
// resolving (this vault's history has real per-file splits hiding behind an
// otherwise-clean initials match, e.g. SC = Steve Carter in one file and
// Steve Cartwright in another).
// Run from the vault root: node .claude/skills/vault-identity-resolution/scripts/self-solving-tokens.mjs
import fs from 'fs';
import path from 'path';

const VAULT = process.cwd();
const peopleDir = path.join(VAULT, 'People');
const REPORT_DIR = path.join(VAULT, '.claude/skills/vault-identity-resolution/reports');
const SKIP_DIRS = new Set(['.git', '.obsidian', '.github', '.claude', '_Templates', '_Attachments']);

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
    if (!/^[A-Z]{2,4}$/.test(token)) continue; // initials-shaped only
    if (!unresolved.has(token)) unresolved.set(token, new Set());
    unresolved.get(token).add(full);
  }
}

function initialsOf(stem) {
  return stem.split(/\s+/).filter(Boolean).map((w) => w[0].toUpperCase()).join('');
}
const byInitials = new Map();
for (const p of peopleNames) {
  const words = p.stem.split(/\s+/).filter(Boolean);
  if (words.length < 2) continue;
  const init = initialsOf(p.stem);
  if (!byInitials.has(init)) byInitials.set(init, []);
  byInitials.get(init).push(p.stem);
}

const candidates = [];
for (const [token, files] of unresolved) {
  const stemCandidates = byInitials.get(token) || [];
  if (stemCandidates.length === 0) continue;
  for (const stem of stemCandidates) {
    const stemLower = stem.toLowerCase();
    const evidenceFiles = [...files].filter((full) => fs.readFileSync(full, 'utf8').toLowerCase().includes(stemLower));
    if (evidenceFiles.length > 0) {
      candidates.push({ token, stem, evidenceFiles: evidenceFiles.map((f) => path.relative(VAULT, f)), totalFiles: files.size });
    }
  }
}

// Only surface as a strong candidate when exactly one stem has evidence for a token.
const byToken = new Map();
for (const c of candidates) {
  if (!byToken.has(c.token)) byToken.set(c.token, []);
  byToken.get(c.token).push(c);
}

let md = '# Self-solving tokens report\n\n';
md += 'Candidates only - verify each before applying. Grouped by token.\n\n';
let strongCount = 0;
for (const [token, cs] of byToken) {
  const unique = [...new Set(cs.map((c) => c.stem))];
  const label = unique.length === 1 ? 'STRONG (single candidate)' : `AMBIGUOUS (${unique.length} candidates)`;
  if (unique.length === 1) strongCount++;
  md += `## ${token} - ${label}\n\n`;
  for (const c of cs) {
    md += `- -> **${c.stem}**, evidence in: ${c.evidenceFiles.join(', ')} (token appears in ${c.totalFiles} file(s) total)\n`;
  }
  md += '\n';
}
fs.mkdirSync(REPORT_DIR, { recursive: true });
fs.writeFileSync(path.join(REPORT_DIR, 'self-solving-tokens.md'), md);

console.log(`${byToken.size} token(s) with at least one initials-match candidate, ${strongCount} with exactly one (strong).`);
console.log('Full report: .claude/skills/vault-identity-resolution/reports/self-solving-tokens.md');
console.log('This script only reports candidates - it does not edit any files.');
