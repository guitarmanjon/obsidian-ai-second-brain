// Living registry + linker for Organisations/Areas/Projects entities mentioned
// in plain text across the vault. Idempotent - safe to re-run any time:
// existing notes are never recreated, and already-linked mentions (anything
// already inside [[...]]) are protected and skipped, so extending the
// registry below and re-running only affects genuinely new ground.
//
// Workflow for adding a new cluster of entities:
//   1. Scope it first (see the vault-entity-linking SKILL.md "Process" section)
//      - grep frequency counts + sample context for false-positive risk -
//      BEFORE adding anything here.
//   2. Append new entries to ORGANISATIONS / AREAS / PROJECTS below. Don't
//      remove or edit past entries except to fix a factual error the user
//      flags - this file is meant to accumulate across sessions.
//   3. Run: node .claude/skills/vault-entity-linking/scripts/build-entities.mjs
//   4. Verify with the integrity checks in the SKILL.md before reporting done.
//
// Run from the vault root - this script uses process.cwd() as the vault path.
import fs from 'fs';
import path from 'path';

const VAULT = process.cwd();
const SKIP_DIRS = new Set(['.git', '.obsidian', '.github', '.claude', '_Templates', '_Attachments']);
const TODAY = new Date().toISOString().slice(0, 10) + 'T00:00:00';

// ---------------------------------------------------------------------------
// ENTITY REGISTRY - append new clusters here, grouped by when they were added.
// `aliases` are additional exact-text patterns (case-sensitive) that should
// also resolve to this entity. `skipLink: true` means: create the note, but
// never mass-link bare mentions of it (use for the vault owner's own
// employer, or anything else so pervasive that linking every mention is
// noise, not signal).
// ---------------------------------------------------------------------------

const ORGANISATIONS = [
  // --- batch 1: core companies/research centres/universities ---
  { name: 'AMRC', aliases: [], type: 'Research Centre', relationship: 'Employer', overview: "Advanced Manufacturing Research Centre, University of Sheffield. Jon's employer.", skipLink: true },
  { name: 'University of Sheffield', aliases: ['UoS'], type: 'University', relationship: 'Parent Institution', overview: "AMRC's parent university." },
  { name: 'Rolls-Royce', aliases: ['RR', 'R-R'], type: 'Company', relationship: 'Customer', overview: 'Major AMRC aerospace customer, multiple ongoing programmes (MISSY, R-R Subs, SMR/Factory of the Future work).' },
  { name: 'Siemens', aliases: [], type: 'Company', relationship: 'Technology Partner', overview: 'Technology partner - [[Siemens Edge]], [[Sinumerik]] controls, and MISSY-related licensing/training.' },
  { name: 'Boeing', aliases: [], type: 'Company', relationship: 'Customer', overview: 'Major AMRC aerospace customer.' },
  { name: 'BAE Systems', aliases: ['BAE'], type: 'Company', relationship: 'Customer', overview: 'Defence-sector AMRC customer (BAE & F35 programmes).' },
  { name: 'Airbus', aliases: [], type: 'Company', relationship: 'Customer', overview: 'Aerospace AMRC customer.' },
  { name: 'GKN', aliases: [], type: 'Company', relationship: 'Customer', overview: 'Aerospace manufacturing customer/partner.' },
  { name: 'DePuy', aliases: [], type: 'Company', relationship: 'Customer', overview: 'Medical devices customer (DePuy Synthes).' },
  { name: 'Collins Aerospace', aliases: ['Collins'], type: 'Company', relationship: 'Customer', overview: 'Aerospace customer, ongoing SoW/collaboration work.' },
  { name: 'Timet', aliases: [], type: 'Company', relationship: 'Customer', overview: 'Titanium Metals Corporation - materials/manufacturing partner.' },
  { name: 'Produmax', aliases: [], type: 'Company', relationship: 'Partner', overview: 'Precision engineering partner company.' },
  { name: 'LISI', aliases: [], type: 'Company', relationship: 'Partner', overview: 'LISI Aerospace - fasteners manufacturer, partner on process development.' },
  { name: 'Kingsbury', aliases: [], type: 'Company', relationship: 'Supplier', overview: 'Machine tools supplier/reseller.' },
  { name: 'Sterling Machine Tools', aliases: [], type: 'Company', relationship: 'Supplier', overview: 'Machine tools supplier.' },
  { name: 'National Instruments', aliases: [], type: 'Company', relationship: 'Supplier', overview: 'Technology/instrumentation supplier.' },
  { name: 'Network Rail', aliases: [], type: 'Company', relationship: 'Customer', overview: 'Rail sector customer/partner.' },
  { name: 'Mondelez', aliases: [], type: 'Company', relationship: 'Customer', overview: 'Food manufacturing customer.' },
  { name: 'SolidstateAI', aliases: [], type: 'Company', relationship: 'Partner', overview: 'AI technology partner company.' },
  { name: 'Smartia', aliases: [], type: 'Company', relationship: 'Partner', overview: 'Technology partner (with IOETEC), digital manufacturing.' },
  { name: 'Novotek', aliases: [], type: 'Company', relationship: 'Partner', overview: 'Automation technology partner (Emerson representative).' },
  { name: 'Konektio', aliases: [], type: 'Company', relationship: 'Partner', overview: 'Technology partner company.' },
  { name: 'XpertRule', aliases: [], type: 'Company', relationship: 'Technology Partner', overview: 'AI software technology partner.' },
  { name: 'Fourjaw', aliases: ['FourJaw'], type: 'Company', relationship: 'Technology Partner', overview: 'Manufacturing analytics software partner (machine monitoring).' },
  { name: 'Amido', aliases: [], type: 'Company', relationship: 'Technology Partner', overview: 'Cloud/digital technology consultancy partner.' },
  { name: 'Razor', aliases: [], type: 'Company', relationship: 'Partner', overview: 'Digital agency partner, works on AMRC Data Cloud/MIP-related projects.' },
  { name: 'Alan Turing Institute', aliases: ['Turing'], type: 'Research Institute', relationship: 'Partner', overview: 'UK national research institute for AI and data science - research partner.' },
  { name: 'IET', aliases: [], type: 'Professional Body', relationship: 'Professional Body', overview: 'Institution of Engineering and Technology.' },
  { name: 'CPI', aliases: [], type: 'Research Centre', relationship: 'Catapult Partner', overview: 'Centre for Process Industries - catapult partner centre.' },
  { name: 'WMG', aliases: [], type: 'Research Centre', relationship: 'Partner', overview: 'Warwick Manufacturing Group - research partner.' },
  { name: 'MTC', aliases: [], type: 'Research Centre', relationship: 'Catapult Partner', overview: 'Manufacturing Technology Centre - fellow High Value Manufacturing Catapult centre.' },
  { name: 'NMIS', aliases: [], type: 'Research Centre', relationship: 'Catapult Partner', overview: 'National Manufacturing Institute Scotland - fellow High Value Manufacturing Catapult centre.' },
  { name: 'AFRC', aliases: [], type: 'Research Centre', relationship: 'Sister Centre', overview: "Advanced Forming Research Centre - AMRC's sister centre (forming/forging)." },
  { name: 'HVMC', aliases: [], type: 'Catapult Network', relationship: 'Umbrella Network', overview: 'High Value Manufacturing Catapult - the umbrella network AMRC belongs to.' },
  { name: 'Nuclear AMRC', aliases: ['NAMRC'], type: 'Research Centre', relationship: 'AMRC Group', overview: "AMRC's nuclear sector group." },
  { name: 'AMRC Cymru', aliases: [], type: 'Research Centre', relationship: 'AMRC Site', overview: "AMRC's site in Wales." },
  { name: 'University of Huddersfield', aliases: ['Huddersfield'], type: 'University', relationship: 'Research Partner', overview: 'Research partner university (MMPS/robotics work with Simon Fletcher).' },
  { name: 'Sheffield Hallam University', aliases: ['Sheffield Hallam', 'SHU'], type: 'University', relationship: 'Research Partner', overview: 'Research partner university.' },
  // --- batch 2: machining/metrology/inspection ---
  { name: 'Renishaw', aliases: [], type: 'Company', relationship: 'Supplier', overview: 'Metrology/probing equipment supplier and technology partner.' },
  // --- batch 3: human/social-science-of-technology thread ---
  { name: 'Made Smarter', aliases: [], type: 'Programme', relationship: 'Partner', overview: 'UK government manufacturing digital adoption programme - skills, engagement, and technology adoption focus.' },
  { name: 'Digital Catapult', aliases: [], type: 'Research Centre', relationship: 'Partner', overview: 'UK-wide catapult for digital technology, part of the Catapult Network.' },
  { name: 'Institute of Work Psychology', aliases: [], type: 'Research Group', relationship: 'Research Partner', overview: 'University of Sheffield Management School research group studying work psychology - directly relevant to the human side of technology adoption.' },
  { name: 'Centre for Decent Work', aliases: [], type: 'Research Group', relationship: 'Research Partner', overview: 'University of Sheffield Management School research group on decent work and the social impact of new technology.' },
  // --- batch 4: linked from the AMI project note ---
  { name: 'KFactory', aliases: [], type: 'Company', relationship: 'Partner', overview: 'Startup platform connecting manufacturing and IT for industrial digitalisation (Core, Analytics, Knowledge, Engineers components); already has "Virtual Engineers" deployed. Targeting grant funding, looking for an industrial partner/tech-provider role.' },
];

const AREAS = [
  // --- batch 1: core tech/data infrastructure ---
  { name: 'Digital Twin', aliases: [], overview: 'Digital representation of physical assets/processes - recurring theme across AMRC digital manufacturing work.' },
  { name: 'Windchill', aliases: [], overview: "PTC's PLM (Product Lifecycle Management) software platform." },
  { name: 'Sinumerik', aliases: [], overview: 'Siemens CNC controller technology used on AMRC machine tools.' },
  { name: 'Siemens Edge', aliases: [], overview: 'Siemens industrial edge computing platform, used for MISSY and shop-floor data capture.' },
  { name: 'MQTT', aliases: [], overview: 'Lightweight messaging protocol used for industrial IoT/shop-floor data.' },
  { name: 'OPC-UA', aliases: [], overview: 'Industrial communication protocol for machine/shop-floor data exchange.' },
  { name: 'IIoT', aliases: [], overview: 'Industrial Internet of Things - sensorising shop-floor equipment and processes.' },
  { name: '5G', aliases: [], overview: 'Private 5G/wireless networking for factory connectivity (Boeing/AMRC work).' },
  { name: 'Databricks', aliases: [], overview: 'Cloud data analytics/lakehouse platform.' },
  { name: 'Azure', aliases: [], overview: "Microsoft's cloud computing platform, used for AMRC data/AI infrastructure." },
  { name: 'Power BI', aliases: ['PowerBI'], overview: "Microsoft's data visualisation/dashboarding tool." },
  { name: 'Digital Thread', aliases: [], overview: "End-to-end digital continuity of product data across its lifecycle." },
  { name: 'ERP', aliases: [], overview: 'Enterprise Resource Planning systems - integration with shop-floor/sensor data.' },
  { name: 'MES', aliases: [], overview: 'Manufacturing Execution Systems - shop-floor data capture and evaluation.' },
  { name: 'PLM', aliases: [], overview: 'Product Lifecycle Management systems and processes.' },
  { name: 'AI', aliases: ['Artificial Intelligence', 'GenAI'], overview: "The core subject area of Jon's work at AMRC - AI strategy/identity, applied AI across manufacturing, and IMG's data-focused workstreams." },
  { name: 'Machine Learning', aliases: ['ML'], overview: 'Applied ML models/ops underpinning AMRC AI work - physics-informed models, classical ML, and MLOps.' },
  { name: 'LLM', aliases: ['LLMs'], overview: 'Large Language Models - use cases explored for business process optimisation, grant writing, and GenAI literacy.' },
  { name: 'Data Science', aliases: [], overview: "AMRC Research's Data Science capability, closely tied to the AI strategy discussion." },
  { name: 'AMRC Data Cloud', aliases: ['Data Cloud'], overview: 'AMRC initiative/platform for research data sharing, alongside Data Connect and related data-sharing frameworks.' },
  { name: 'Data Centric Manufacturing', aliases: ['Data-Centric Manufacturing', 'data-centric manufacturing'], overview: 'Manufacturing approach built around data as a first-class asset - a Technology Team/IMG work stream, tied into the Digital Thread.' },
  { name: 'Secure Data Environment', aliases: ['SDE'], overview: 'Secure data environment / trusted research environment concept for sharing sensitive data across organisations (cross-HVMC data sharing frameworks).' },
  { name: 'Data Safe Haven', aliases: ['DSH'], overview: 'A specific implementation pattern of secure data environment (e.g. UCL/Turing Data Safe Haven services), considered as a model for AMRC data sharing.' },
  // --- batch 2: machining/metrology/inspection ---
  { name: 'On-Machine Inspection', aliases: ['OMI'], overview: 'Inspecting parts/features on the machine tool itself rather than offline - recurring Rolls-Royce workstream (OMI Calls, NC-PerfectPart).' },
  { name: 'Metrology', aliases: [], overview: 'Precision measurement of manufactured parts and features - links closely to On-Machine Inspection and CMM work.' },
  { name: 'Machine Health Monitoring', aliases: ['machine health'], overview: 'Monitoring machine tool condition/health for maintenance and process insight - servitisation and machine-health-as-a-service themes.' },
  { name: 'CMM', aliases: [], overview: 'Coordinate Measuring Machine - offline inspection technology, often compared against On-Machine Inspection results.' },
  { name: 'CAM', aliases: [], overview: 'Computer-Aided Manufacturing - programming/toolpath generation for machining, including CAM-based probing.' },
  { name: 'CNC', aliases: [], overview: 'Computer Numerical Control - machine tool control technology (Sinumerik and others).' },
  { name: 'Probing', aliases: ['probing'], overview: 'On-machine touch/CAM-based probing for part setup and in-process inspection.' },
  { name: 'Process Monitoring', aliases: [], overview: 'In-process monitoring of machining operations for quality/condition insight.' },
  { name: 'Condition Monitoring', aliases: [], overview: 'Monitoring equipment condition for predictive maintenance (PdM) and optimisation.' },
  { name: 'Machinability', aliases: [], overview: 'Machinability libraries/research - how easily a material can be machined, tied to Chris Taylor and CAM work.' },
  { name: 'Toolpath', aliases: [], overview: 'CNC toolpath generation and analysis, including Sinumerik Edge toolpath applications.' },
  { name: 'Vibration', aliases: [], overview: 'Machining vibration - a major cross-site issue tied to chatter and spindle/tool life.' },
  { name: 'Spindle', aliases: [], overview: 'Machine tool spindle - condition and life is a recurring machine-health topic.' },
  { name: 'Chatter', aliases: [], overview: 'Machining chatter - vibration-related instability during cutting, detection tied to spindle speed and tooth-passing frequency.' },
  { name: 'Tool Wear', aliases: [], overview: 'Cutting tool wear - a modelling and condition-monitoring topic.' },
  { name: 'Surface Finish', aliases: [], overview: 'Machined surface finish quality and measurement.' },
  // --- batch 3: human/social-science-of-technology thread ---
  { name: 'Responsible AI', aliases: [], overview: 'Ethical, accountable deployment of AI - dedicated leads, summits, and funding calls recurring across partners.' },
  { name: 'AI Ethics', aliases: ['Ethics', 'Bias'], overview: 'Ethical implications of AI in manufacturing, including bias - EU Horizon proposals (Laurence Brooks), dedicated events (Ethics of AI in Manufacturing, Bias in AI at CMI Townhall).' },
  { name: 'Explainability', aliases: [], overview: 'Making AI model behaviour interpretable/understandable - a Responsible AI concern (Alan Turing Institute work).' },
  { name: 'Human Factors', aliases: [], overview: "Human-centred research into how people interact with and are affected by new technology (Sharan Kaur's £750k programme)." },
  { name: 'Human-in-the-Loop', aliases: ['human in the loop'], overview: 'Keeping people meaningfully involved in AI/automated systems rather than fully removing them from the process.' },
  { name: 'Technology Adoption', aliases: ['Adoption of New Manufacturing Technology'], overview: 'How people and organisations take up new manufacturing technology - occupational psychology angle (Sophie Atterbury), recurring IET TN theme led by Chris Proudfoot.' },
  { name: 'Trust in Data', aliases: [], overview: 'Trust in datasets and how data is used - a recurring concern in data-sharing and digital manufacturing discussions.' },
];

const PROJECTS = [
  { name: 'MISSY', aliases: [], overview: 'Rolls-Royce-funded AMRC research project (Siemens Edge licensing, TRL6 reviews, risk budget) - IMG data-focused workstream.' },
];

// ---------------------------------------------------------------------------
// Everything below is mechanism, not data - shouldn't need editing to add a
// new cluster above.
// ---------------------------------------------------------------------------

function frontmatterOrg(e) {
  const aliasLines = e.aliases.length ? e.aliases.map((a) => `  - ${a}`).join('\n') : '  []';
  return `---\naliases:\n${aliasLines}\ntype: ${e.type}\nrelationship: ${e.relationship}\ntags:\n  - Organisation\nlast updated: ${TODAY}\n---\n\n## Overview\n\n- ${e.overview}\n\n## Notes\n\n- ...\n\n## People\n\n\`\`\`base\nfilters:\n  and:\n    - file.inFolder("People")\nproperties:\n  file.name:\n    displayName: Name\n  note.role:\n    displayName: Role\n  note.team:\n    displayName: Team\nviews:\n  - type: table\n    name: Contacts\n    filters:\n      and:\n        - file.hasLink(this.file)\n    order:\n      - file.name\n      - role\n      - team\n    sort:\n      - property: file.name\n        direction: ASC\n    columnSize:\n      file.name: 420\n\n\`\`\`\n\n## Interactions\n\n\`\`\`base\nfilters:\n  and:\n    - file.inFolder("Journal")\nproperties:\n  file.name:\n    displayName: Title\n  note.date:\n    displayName: Date\n  note.date_from:\n    displayName: Date From\n  note.date_to:\n    displayName: Date To\n  note.tags:\n    displayName: Tags\nviews:\n  - type: table\n    name: Journals\n    filters:\n      and:\n        - file.hasLink(this.file)\n    order:\n      - file.name\n      - date\n      - tags\n    sort:\n      - property: date\n        direction: DESC\n      - property: date_from\n        direction: DESC\n    columnSize:\n      file.name: 420\n\n\`\`\`\n\n## See Also\n\n- ...\n`;
}

function frontmatterArea(e) {
  return `---\nacronym:\ntags:\n  - Area\nlast updated: ${TODAY}\n---\n\n## Overview\n\n> [!info] What is this area and why does it matter?\n\n- ${e.overview}\n\n## Key Concepts\n\n- ...\n\n## Techniques\n\n\`\`\`base\nfilters:\n  and:\n    - file.inFolder("Techniques")\nproperties:\n  file.name:\n    displayName: Title\n  note.tags:\n    displayName: Tags\n  note.last updated:\n    displayName: Last Updated\nviews:\n  - type: table\n    name: Techniques\n    filters:\n      and:\n        - file.hasLink(this.file)\n    order:\n      - file.name\n      - last updated\n      - tags\n    sort:\n      - property: file.name\n        direction: ASC\n    columnSize:\n      file.name: 420\n\n\`\`\`\n\n## Resources\n\n\`\`\`base\nfilters:\n  and:\n    - file.inFolder("Resources")\nproperties:\n  file.name:\n    displayName: Title\n  note.source:\n    displayName: Source\n  note.tags:\n    displayName: Tags\n  note.last updated:\n    displayName: Last Updated\nviews:\n  - type: table\n    name: Resources\n    filters:\n      and:\n        - file.hasLink(this.file)\n    order:\n      - file.name\n      - source\n      - last updated\n      - tags\n    columnSize:\n      file.name: 420\n\n\`\`\`\n\n## See Also\n\n- ...\n`;
}

function frontmatterProject(e) {
  return `---\npriority:\ndate_from:\ndate_to:\ntags:\n  - Project\nlast updated: ${TODAY}\n---\n\n## Objective\n\n- ${e.overview}\n\n## Key Results\n\n- [ ] ...\n\n## Stakeholders\n\n- ...\n\n## Progress\n\n### Current Status\n\n- ...\n\n### Decisions Made\n\n- ...\n\n### Blockers\n\n- ...\n\n## Related Journals\n\n\`\`\`base\nfilters:\n  and:\n    - file.inFolder("Journal")\nproperties:\n  file.name:\n    displayName: Title\n  note.date:\n    displayName: Date\n  note.date_from:\n    displayName: Date From\n  note.date_to:\n    displayName: Date To\n  note.tags:\n    displayName: Tags\nviews:\n  - type: table\n    name: Journals\n    filters:\n      and:\n        - file.hasLink(this.file)\n    order:\n      - file.name\n      - date\n      - tags\n    sort:\n      - property: date\n        direction: DESC\n      - property: date_from\n        direction: DESC\n    columnSize:\n      file.name: 420\n\n\`\`\`\n\n## See Also\n\n- ...\n`;
}

let created = [];
for (const e of ORGANISATIONS) {
  const fp = path.join(VAULT, 'Organisations', `${e.name}.md`);
  if (!fs.existsSync(fp)) { fs.mkdirSync(path.dirname(fp), { recursive: true }); fs.writeFileSync(fp, frontmatterOrg(e), 'utf8'); created.push(fp); }
}
for (const e of AREAS) {
  const fp = path.join(VAULT, 'Areas', `${e.name}.md`);
  if (!fs.existsSync(fp)) { fs.mkdirSync(path.dirname(fp), { recursive: true }); fs.writeFileSync(fp, frontmatterArea(e), 'utf8'); created.push(fp); }
}
for (const e of PROJECTS) {
  const fp = path.join(VAULT, 'Projects', `${e.name}.md`);
  if (!fs.existsSync(fp)) { fs.mkdirSync(path.dirname(fp), { recursive: true }); fs.writeFileSync(fp, frontmatterProject(e), 'utf8'); created.push(fp); }
}
console.log(`Created ${created.length} entity notes.`);
for (const fp of created) console.log(`  + ${path.relative(VAULT, fp)}`);

// ---- Linking pass ----
const patterns = [];
for (const e of ORGANISATIONS) {
  if (e.skipLink) continue;
  patterns.push({ text: e.name, target: e.name });
  for (const a of e.aliases) patterns.push({ text: a, target: e.name });
}
for (const e of AREAS) {
  patterns.push({ text: e.name, target: e.name });
  for (const a of e.aliases) patterns.push({ text: a, target: e.name });
}
for (const e of PROJECTS) {
  patterns.push({ text: e.name, target: e.name });
  for (const a of e.aliases) patterns.push({ text: a, target: e.name });
}
// Longest pattern first, so e.g. "Siemens Edge" (Area) wins over bare
// "Siemens" (Organisation) at the same text position, and "BAE Systems"
// wins over bare "BAE".
patterns.sort((a, b) => b.text.length - a.text.length);

function escapeReg(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
const combinedRe = new RegExp('\\b(' + patterns.map((p) => escapeReg(p.text)).join('|') + ')\\b', 'g');
const patternMap = new Map(patterns.map((p) => [p.text, p.target]));

function collectMdFiles(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue;
    if (e.isDirectory() && SKIP_DIRS.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) collectMdFiles(full, out);
    else if (e.name.endsWith('.md')) out.push(full);
  }
}
const targets = [];
for (const folder of ['Journal', 'People', 'Areas', 'Projects', 'Resources', 'Techniques', 'Organisations']) {
  const full = path.join(VAULT, folder);
  if (fs.existsSync(full)) collectMdFiles(full, targets);
}

function protect(content) {
  const placeholders = [];
  function stash(re, content) {
    return content.replace(re, (m) => {
      placeholders.push(m);
      return ` ${placeholders.length - 1} `;
    });
  }
  // frontmatter block
  content = content.replace(/^---\n[\s\S]*?\n---\n/, (m) => { placeholders.push(m); return ` ${placeholders.length - 1} `; });
  // fenced code blocks
  content = stash(/```[\s\S]*?```/g, content);
  // inline code spans
  content = stash(/`[^`\n]+`/g, content);
  // existing wikilinks
  content = stash(/\[\[[^\]]+\]\]/g, content);
  // markdown [text](url) links
  content = stash(/\[[^\]]*\]\([^)]+\)/g, content);
  return { content, placeholders };
}
function restore(content, placeholders) {
  return content.replace(/ (\d+) /g, (_, i) => placeholders[Number(i)]);
}

let filesTouched = 0;
let totalLinks = 0;
const perEntityCount = new Map();
for (const full of targets) {
  const raw = fs.readFileSync(full, 'utf8');
  const { content: protectedContent, placeholders } = protect(raw);
  let count = 0;
  const linked = protectedContent.replace(combinedRe, (m) => {
    const target = patternMap.get(m);
    count++;
    perEntityCount.set(target, (perEntityCount.get(target) || 0) + 1);
    return m === target ? `[[${target}]]` : `[[${target}|${m}]]`;
  });
  if (count > 0) {
    const restored = restore(linked, placeholders);
    fs.writeFileSync(full, restored, 'utf8');
    filesTouched++;
    totalLinks += count;
  }
}

console.log(`\nLinked ${totalLinks} mentions across ${filesTouched} files.`);
const sorted = [...perEntityCount.entries()].sort((a, b) => b[1] - a[1]);
for (const [name, count] of sorted) console.log(`  ${count}  ${name}`);
