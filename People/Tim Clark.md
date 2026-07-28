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

- SAS IoT Analytics — [[Tim Clark]] (Global IoT Commercial Lead). Internal + external data brings value to analytics ("how does this device perform in its ecosystem?"). Framed as "edge to enterprise" — SAS does analytics, not asset connectivity. Well aware of servitisation of machine tools (possible Full Monty application). Mentioned Neonjay camera, from Adilink (sp?).
- [[Tim Clark]] raised gamification of data dashboards.

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
