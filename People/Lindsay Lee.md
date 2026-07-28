---
aliases:
  - LL
  - Lindsay
team: University of Sheffield / AMRC
role: FLF (Future Leaders Fellowship) track
tags:
  - People
last updated: 2026-07-23T00:00:00
---

## Overview

- On the FLF (fellowship) track - subject of the [[2026-01-06 FLF Internal Interview for LL]] panel interview. Also connected to skills for data and AI (raised in [[2026-02-09 Chris Dungey]] and [[2026-03-10 COM x AMRC]]) and to potential fellowship work flagged in [[2026-01-15 ATR Update]]. [[2026-01-21 AMRC x Social Sciences]] discussed putting her in touch with [[Susan Oman]] on skills.

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
