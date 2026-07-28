---
aliases:
  []
team: RR
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[Paul Turner|Paul]]: suggested maybe bringing together supply chain with RR to fund work instead of Samulet 4; noted concessions in the supply chain/RR - around 60 people in S&T working on concessions.

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
