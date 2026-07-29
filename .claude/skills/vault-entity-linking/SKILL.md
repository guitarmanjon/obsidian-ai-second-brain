---
name: vault-entity-linking
description: Link plain-text mentions of organisations, companies, technologies, and research/data topics across this Obsidian vault's Journal into proper Organisations/Areas/Projects notes with [[wikilinks]]. Use when the user asks to link a technology, company, or topic across the vault, wants "tech/org linking" continued, asks what's still unlinked, or names a specific cluster of terms (e.g. "anything on X") they suspect is missing.
---

# Vault Entity Linking

Turns recurring plain-text mentions of companies, technologies, research topics, and internal programmes into proper `Organisations/`, `Areas/`, or `Projects/` notes, then wikilinks every matching mention across the vault. Unlike the People backlog, there's no existing `[[Token]]` markup to scan for here — everything starts as invisible plain text, so the risk profile is different: the danger isn't collision between two known entities, it's **false-positive matches on generic words** (e.g. bare "AMRC" as the vault owner's own employer, or "Edge" as a common word vs. "Siemens Edge" as a specific product).

`Organisations/` is a vault-specific folder (parallel to `People/`, not part of strict PARA) for external companies/institutions. Technologies, protocols, and research topics belong in `Areas/` (the Area template explicitly covers "knowledge domain, technology, or responsibility"). Anything that reads as a genuine time-bound initiative with stakeholders/blockers/TRL-style language (like `Projects/MISSY.md`) belongs in `Projects/` instead of `Areas/` — check the content, not just the acronym shape, before deciding.

## Bundled script

`scripts/build-entities.mjs` — a **living, append-only registry** of every entity linked so far, plus the linker itself. Run from the vault root: `node .claude/skills/vault-entity-linking/scripts/build-entities.mjs`. It is idempotent: re-running it never recreates an existing note, and anything already inside `[[...]]` is protected from being touched again, so extending the registry and re-running only affects genuinely new mentions.

## Process

1. **Scope the cluster before writing any code.** For every candidate term, run a frequency check across `Journal/`:
   ```
   for term in "Term One" "Term Two" ...; do
     c=$(grep -rho "\b$term\b" Journal/ 2>/dev/null | wc -l); echo "$c $term"
   done | sort -rn
   ```
   This sizes the work and tells you which terms are even worth a note (a term with 0-1 mentions rarely deserves one unless the user specifically asked about it by name).
2. **Sample context for anything with real false-positive risk** — short tokens, common English words, or acronyms that could mean something else in this corpus: `grep -rho ".\{20\}\bTerm\b.\{20\}" Journal/ | sort -u | head`. Read enough samples to be confident every match is actually about the entity, not a homonym. Concrete precedents from this vault: "Castings" turned out to be AMRC's own internal casting group, not a company; "Trust" mostly meant "Carbon Trust" (unrelated), with the real signal being the specific phrase "Trust in data"; "RR"/"BAE" needed the longer form checked first so a short alias doesn't swallow part of a longer phrase.
3. **Watch for phrase-vs-substring shadowing.** If a longer phrase like "Siemens Edge" is being added as its own Area, and "Siemens" is separately an Organisation, that's fine — the script sorts all patterns longest-first so the full phrase wins at that position and bare "Siemens" still links correctly everywhere else. But when you add a new alias, sanity-check it doesn't accidentally sit *inside* a phrase that should stay together.
4. **Check whether an earlier batch already bracketed a word your new phrase depends on.** If "AI" was already linked in an earlier run, a new phrase like "Ethics of AI in Manufacturing" will no longer match literally, because the text now reads `Ethics of [[AI]] in Manufacturing`. Pick a pattern that doesn't span across an already-linked term (here, bare "Ethics" instead), or accept that the phrase needs to be added before the shorter term that would fragment it.
5. **Decide on `skipLink`.** If the entity is so pervasive that linking every mention is pure noise rather than navigational signal (the vault owner's own employer is the standing example — 1,300+ bare mentions with zero information value), set `skipLink: true`: still create the note as a hub, but don't mass-link it.
6. **Append the new entries** to the appropriate array in `build-entities.mjs` (`ORGANISATIONS`, `AREAS`, or `PROJECTS`), under a new `// --- batch N: <short description> ---` comment. Do not edit or remove past entries except to fix a factual error the user points out.
7. **Run the script.**
8. **Verify before reporting done:**
   ```
   grep -rln '\[\[[^]]*\[\[' Journal/ People/ Organisations/ Areas/ Projects/   # nested-link corruption, expect 0 files
   grep -rln '\[\[[^]]*|[^]]*|[^]]*\]\]' Journal/ People/ Organisations/ Areas/ Projects/   # malformed double-pipe, expect 0 files
   ```
   Then spot-check a handful of actual diffs (`git diff -- Journal/ | grep -A2 -B2 "\[\[NewEntity"`) to confirm the matches read correctly in context, not just that they exist.
9. **Report the per-entity link counts** the script prints, and call out anything genuinely uncertain (an inferred company description, a borderline categorisation, a partial-phrase match that's directionally right but not a perfect fit) rather than presenting everything as equally confident — several notes in this vault were created from journal context alone and are first drafts, not user-confirmed facts, unlike the People work.

## Safety rules

- **Case-sensitive, whole-word matching only.** Don't add a case-insensitive or substring match without checking samples first — this is what keeps "castings" (generic word) separate from "Castings" (if it were a real company) and stops "5G" matching inside "5GHz".
- **Never mass-link the vault owner's own organisation** or anything similarly self-referential and pervasive. Create the note, set `skipLink: true`.
- **A company mistaken for a technology, or vice versa, is a modeling error, not just a misplaced file.** Renishaw looked like it might be a metrology *technique* at first glance but is a company (a supplier); read the actual context ("visit day at Renishaw", "Renishaw be involved") before deciding the folder.
- **Internal organisational units of the vault owner's own employer are out of scope** for `Organisations/` (they're not external entities) — don't create notes for internal teams/groups/divisions unless the user asks for that explicitly.
- **Don't invent facts.** Overview text for a new note should be drawn only from what's actually in the journal context or what the user told you — if the nature of an entity is genuinely unclear from available context, say so in your report rather than writing a confident-sounding guess.

## Reporting

When reporting back, include:
- New Organisation/Area/Project counts for this batch, and the running total.
- Total mentions linked and files touched (the script prints both).
- Any deliberate scope exclusion and why (e.g. "didn't mass-link bare X because...").
- Anything flagged as inferred/unconfirmed that the user should skim and correct if wrong.

## Guidelines

- Scope and risk-check every new cluster before touching the registry — this is what prevents the false-positive failure mode that doesn't exist in the People-resolution skill (there, the risk is collision between two named things; here, it's a match on something that isn't the entity at all).
- Prefer exact multi-word phrases over bare short words whenever the short word alone has any plausible unrelated meaning in everyday English.
- When a term the user asks about turns out to have very little real material behind it, say so plainly rather than padding out a note with speculative content — a small honest cluster is more useful than an inflated one.
- If a request touches on a single very specific existing journal entry (e.g. "build out this idea into a project"), that's an editorial/curatorial task for the user's judgment, not a candidate for the bulk registry-and-linker approach — handle it as a direct, one-off edit instead.
