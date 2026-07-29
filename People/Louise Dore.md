---
aliases: []
team: University of Sheffield
role: Research Growth Manager, Social Sciences
tags:
  - People
last updated: 2026-07-25T00:00:00
---

## Overview

- Research Growth Manager for Social Sciences at [[University of Sheffield|UoS]]. Also connected to skills for data and [[AI]], and to AMRC-side fellowship work. See [[2025-10-08 CMI Town Hall]], [[2026-01-06 FLF Internal Interview for LL]], [[2026-01-15 ATR Update]], [[2026-02-09 Chris Dungey]], [[2026-03-10 COM x AMRC]], [[2026-01-21 AMRC x Social Sciences]].

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
