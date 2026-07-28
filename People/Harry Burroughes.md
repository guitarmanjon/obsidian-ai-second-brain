---
aliases:
  - HB
  - Harry B
team: AMRC (University of Sheffield)
role: Previous Line Manager
tags:
  - People
last updated: 2026-07-27T00:00:00
---

## Overview

- Your previous line manager. Attended [[2026-01-08 AMRC x COM]] and [[2026-01-15 ATR Update]].

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
