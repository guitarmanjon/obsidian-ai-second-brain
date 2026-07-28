---
aliases:
  []
team: R&D manager at CSC
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- CSC: [[Frank Ashton]] (Pressure Technologies), [[James Taylor]] (R&D manager at CSC)
- Need to talk to [[James Taylor]] at CSC for the technical details.

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
