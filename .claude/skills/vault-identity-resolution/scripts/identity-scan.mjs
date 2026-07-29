// One authoritative, deduplicated scan of every [[Token]] link across the
// whole vault, cross-referenced against current People/*.md filenames+aliases
// and every other vault filename (Organisations, Areas, Projects, etc.).
// Run from the vault root: node .claude/skills/vault-identity-resolution/scripts/identity-scan.mjs
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
    const aliasBlock = fm[1].match(/aliases:\n((?:\s+-\s+.+\n?)+)/);
    if (aliasBlock) {
      for (const line of aliasBlock[1].split('\n')) {
        const m = line.match(/^\s+-\s+(.+)$/);
        if (m) known.add(m[1].trim());
      }
    }
  }
  return known;
}

const known = new Set();
for (const f of fs.readdirSync(peopleDir)) {
  if (!f.endsWith('.md')) continue;
  const stem = f.replace(/\.md$/, '');
  const content = fs.readFileSync(path.join(peopleDir, f), 'utf8');
  for (const a of aliasesOf(content, stem)) known.add(a.toLowerCase());
}

function collectStems(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    if (entry.isDirectory() && SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectStems(full, out);
    else if (entry.name.endsWith('.md')) out.add(entry.name.replace(/\.md$/, '').toLowerCase());
  }
}
collectStems(VAULT, known);

function stripCodeSpans(text) {
  return text.replace(/`[^`\n]*`/g, '');
}

function collectMdFiles(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    if (entry.isDirectory() && SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectMdFiles(full, out);
    else if (entry.name.endsWith('.md')) out.push(full);
  }
}
const allFiles = [];
collectMdFiles(VAULT, allFiles);

const linkRe = /\[\[([^\]|#]+)(?:\|[^\]]+)?\]\]/g;
// token -> { count, files: Map(file -> Set(lines)) }
const unresolved = new Map();

for (const full of allFiles) {
  const rel = path.relative(VAULT, full);
  const raw = fs.readFileSync(full, 'utf8');
  const content = stripCodeSpans(raw);
  const lines = raw.split('\n');
  let m;
  while ((m = linkRe.exec(content))) {
    const token = m[1].trim();
    if (known.has(token.toLowerCase())) continue;
    if (!unresolved.has(token)) unresolved.set(token, { count: 0, files: new Map() });
    const entry = unresolved.get(token);
    entry.count++;
    if (!entry.files.has(rel)) entry.files.set(rel, new Set());
  }
  for (const [token, entry] of unresolved) {
    if (!entry.files.has(rel)) continue;
    const tre = new RegExp('\\[\\[' + token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(\\||\\]\\])');
    for (let i = 0; i < lines.length; i++) {
      if (tre.test(lines[i])) entry.files.get(rel).add(lines[i].trim());
    }
  }
}

const sorted = [...unresolved.entries()].sort((a, b) => b[1].count - a[1].count || a[0].localeCompare(b[0]));

let md = '# Outstanding identities report (full vault, deduplicated)\n\n';
md += `${sorted.length} unique unresolved token(s) across ${allFiles.length} vault notes, sorted by frequency.\n\n`;
for (const [token, entry] of sorted) {
  md += `## [[${token}]]  (${entry.count} occurrence${entry.count === 1 ? '' : 's'}, ${entry.files.size} file${entry.files.size === 1 ? '' : 's'})\n\n`;
  for (const [file, ctxLines] of entry.files) {
    md += `- **${file}**\n`;
    for (const l of ctxLines) md += `  - ${l}\n`;
  }
  md += '\n';
}
fs.mkdirSync(REPORT_DIR, { recursive: true });
fs.writeFileSync(path.join(REPORT_DIR, 'outstanding-identities.md'), md);

console.log(`${sorted.length} unique unresolved tokens across ${allFiles.length} notes.\n`);
console.log('count  token');
for (const [token, entry] of sorted) {
  console.log(`${String(entry.count).padStart(5)}  ${token}`);
}
console.log(`\nFull context report written to .claude/skills/vault-identity-resolution/reports/outstanding-identities.md`);
