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

- [[Anjana Ahuja]] - host, Public Perceptions of AI
- **Public Perceptions of AI** (host [[Anjana Ahuja]]; [[David Leslie]] remote; [[Tracey Brown]] - Sense about Science; [[Tania Duarte]] - We and AI; [[Ben Morrow|Ben]] - DSIT)
- [[Anjana Ahuja]] - host, Turing Strategy Launch

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
