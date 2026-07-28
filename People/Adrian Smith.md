---
aliases:
  []
team:
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[Adrian Smith]] - Turing Strategy Launch speaker
- **Turing Strategy Launch** ([[Anjana Ahuja]] hosting; [[Doug Gurr]]; [[Adrian Smith]])
- [[Adrian Smith]]: 3 focus points - defence and security, health, and environment (biodiversity and climate); mentioned the Turing university network.

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
