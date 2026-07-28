---
aliases:
  []
team: Hermle
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[Martin Wener]] requested Prometec contact Hermle directly with PLC requirements.
- Budget: [[Martin Wener]] confirmed budget is available as there will be an associated cost ([[Justin Davies]] agreed); price depends on amount of work involved, likely 4-7k euros (more than likely less than 10k).

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
