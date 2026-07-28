---
aliases:
  - SO
team: University of Sheffield (Social Sciences)
role:
tags:
  - People
last updated: 2026-07-23T00:00:00
---

## Overview

- UoS Social Sciences (SSH) - discussed data skills (Bolster project), "Trustworthy Systems" vs. trust in existing systems, and interdisciplinary funding/bid challenges in [[2026-01-21 AMRC x Social Sciences]].

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
