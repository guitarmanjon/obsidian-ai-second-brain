---
name: vault-identity-resolution
description: Resolve unresolved [[Name]] / [[Initials]] wikilinks in this Obsidian vault's People backlog, safely and without creating dangerous blanket-alias collisions between different real people. Use when the user asks to work through unresolved names, link people mentioned in Journal entries, continue the identity-resolution backlog, or asks "who is still unresolved" / "what's left to link".
---

# Vault Identity Resolution

Resolves unresolved `[[Name]]` and `[[Initials]]` links across the vault into proper `People/*.md` notes and per-instance pipe-links, following the methodology that took this vault's backlog from 1,663 to ~435 unresolved tokens across a multi-session effort. The single hardest-won lesson from that work: **short tokens and initials keep turning out to be genuine collisions between two or more real people** — resolving fast and blanket-aliasing is what causes silent data corruption here, not slow-and-careful resolution.

## Bundled scripts

Run these from the vault root (`cd` to the repo root first — they use `process.cwd()` as the vault path).

| Script | Purpose | Mutates files? |
|---|---|---|
| `scripts/identity-scan.mjs` | Deduplicated, frequency-sorted scan of every `[[Token]]` not resolved by an existing filename or alias. Writes a full context report and prints a compact leaderboard. **Always run this first**, and re-run after every batch of edits. | No |
| `scripts/resolve-variants.mjs` | Auto-resolves *unambiguous* near-miss name-format variants of already-existing People notes (bare first name, "First + surname-initial", extra middle initial, fuller legal name, alias punctuation variant) — only when exactly one candidate matches vault-wide. | Yes — but only high-confidence, single-candidate matches |
| `scripts/self-solving-tokens.mjs` | Finds initials-shaped tokens (e.g. `SF`) where an existing Person's initials match *and* their full name also appears somewhere in the same file. Report-only. | No — always spot-check its output before applying |

## Process

1. **Run `identity-scan.mjs`.** Read the printed leaderboard and the full report at `.claude/skills/vault-identity-resolution/reports/outstanding-identities.md`.
2. **Run the two sweep scripts** (`resolve-variants.mjs`, `self-solving-tokens.mjs`) before doing any manual work — they're cheap, safe, high-confidence wins that shrink the backlog without needing the user's input. For `self-solving-tokens.mjs`, read its report and manually verify each "STRONG" candidate's context line actually supports the match before resolving it (edit the relevant files yourself — the script does not apply anything).
3. **For everything else, work the leaderboard from the top** (highest-frequency tokens first), unless the user asks to prioritize differently (e.g. "what am I still likely to recognise" → see the recency framing below).
4. **For each token**, pull every occurrence with context: `grep -rn '\[\[Token' --include="*.md" . | grep -v People/`. Group by file with a one-line excerpt.
5. **Present ambiguous or unfamiliar tokens to the user** rather than guessing from content alone — even when the context looks obvious, real collisions keep appearing in this vault. Do not resolve a token you're inferring from name plausibility alone; match against the *specific content* of any existing candidate note instead.
6. **Resolve via per-file pipe-links** (`[[Full Name|DisplayText]]`), not blanket aliases, unless the user confirms the token is single-referent across the whole vault with no realistic collision risk.
7. **If the token needs a brand-new Person note**, read `_Templates/Template - Person.md` fresh (don't rely on memory of its structure) and create `People/<Full Name>.md` with `aliases` covering the token/variants used, `team`/`role` if known, and a short factual Overview.
8. **Re-run `identity-scan.mjs` after every batch** to confirm the count dropped and that no new collision was introduced (a dropping count with no `grep`-detectable regression is not enough — see the mandatory final check below).
9. **Mandatory final check per token, no exceptions**: `grep -rln '\[\[Token\]\]' --include="*.md" .` **without** excluding `People/`. Auto-created People notes sometimes have raw copied context embedded in their Overview that itself contains *other* unresolved tokens — these don't show up in the normal "exclude People/" search but are counted by the scanner, and a token won't hit zero until they're fixed too. This has bitten this vault's history multiple times; treat it as mandatory, not optional.

## Safety rules

- **Skip `Journal/Daily/*.md` by default.** Unresolved names inside Daily Notes are usually references to already-completed tasks, not worth chasing — don't ask the user about these unless they say otherwise.
- **HR-sensitive content stays out of Person Overviews.** If a token's context includes disciplinary, performance, or other HR-sensitive material, keep that content factual and scoped to the original Journal note only. Never surface it — even paraphrased — in a `People/*.md` Overview. Write something neutral instead ("Ex-colleague, has since left" rather than quoting the incident).
- **Never let a company/organisation name get created as a Person** just because it matches the naming pattern (e.g. "Network Rail" is not a person). If in doubt, check whether it belongs in `Organisations/` instead — see the `vault-entity-linking` skill.
- **When bulk-creating stub Person notes for a batch of unambiguous "Firstname Lastname" tokens**: (a) require the real surname to be present — exclude truncated forms like "Dave C"; (b) fuzzy-check every new candidate against both existing People notes *and* each other, including common first-name variants (Steve/Steven/Stephen, Jon/John/Jonathan, Dave/David) paired with an identical surname — an exact-first-name-only check will miss real duplicates; (c) never auto-populate an Overview by dumping a raw multi-person attendee-list line verbatim — it reads badly and embeds other people's unresolved `[[links]]` inside the new note (which the scanner will then also flag). Leave the Overview minimal/blank instead if there's no specific content to write.
- **A token resolving one way in one file doesn't mean it resolves the same way everywhere.** Several tokens in this vault's history split cleanly per-file based on explicit in-text signals (team, project, company mentioned nearby) — always check before assuming yesterday's resolution for a token applies to today's file.

## Reporting

When reporting back to the user after a resolution pass, include:
- Backlog count before → after (from the scan leaderboard).
- Which tokens were resolved via the automated sweeps vs. manual/user-confirmed resolution.
- Any new collision or ambiguity discovered (e.g. "X turned out to be two different people").
- Anything left deliberately unresolved and why (ambiguous, low-priority historical, user said leave it).

## Guidelines

- Never resolve a token by guessing when two or more existing People notes are plausible — ask.
- Prefer per-instance pipe-links over blanket aliases for anything short (2–4 letters) or a common first name, unless there is strong single-referent evidence.
- A token count "reaching zero" via the scanner is the only reliable signal a batch is actually done — a lower number after edits is not sufficient on its own without the People/-inclusive final grep.
- If the user wants to prioritize by likely relevance rather than raw frequency, break the remaining backlog down by the most recent date any occurrence appears in filenames — tokens with only pre-2023 activity are lower priority than ones with recent activity.
- These scripts assume the vault's People frontmatter uses an `aliases:` YAML list and that internal links use standard `[[Target]]` / `[[Target|Display]]` Obsidian syntax. If either convention changes, update the scripts accordingly before trusting their output.
