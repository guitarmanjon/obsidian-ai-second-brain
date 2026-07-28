---
aliases:
  - SH-B
  - SB
  - Stephen Bowles
team: AMRC (University of Sheffield)
role:
tags:
  - People
last updated: 2026-07-23T00:00:00
---

## Overview

- Fellow Theme Lead (see [[2026-01-26 Theme Lead Afternoon]]). Works on SSH/Social Sciences collaboration - gave an overview of SSH-related AMRC work including Cymru (human robotics) in [[2026-01-21 AMRC x Social Sciences]]. Also attended the [[2026-03-04 CHESCO Day 1]] visit.
- May appear in notes from before 2026 as "SB" or "Stephen Bowles". Note: "Steve" on its own is NOT used as an alias here since it's too ambiguous with Steve Marr and Steve Bear elsewhere in the vault.

## Notes

- ...

## Interactions

```base
filters:
  and:
    - file.inFolder("Journal")
properties:
  file.name:
    displayName: Title
  note.date:
    displayName: Date
  note.date_from:
    displayName: Date From
  note.date_to:
    displayName: Date To
  note.tags:
    displayName: Tags
views:
  - type: table
    name: Journals
    filters:
      and:
        - file.hasLink(this.file)
    order:
      - file.name
      - date
      - tags
    sort:
      - property: date
        direction: DESC
      - property: date_from
        direction: DESC
    columnSize:
      file.name: 420

```

## See Also

- ...
