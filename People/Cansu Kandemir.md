---
aliases:
  - Cansu
team: AMRC (IMG)
role: Technical Fellow, Manufacturing Intelligence
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- IMG colleague, Technical Fellow in Manufacturing Intelligence. Focus areas: DES (Discrete Event Simulation), Supply Chain, Cost modelling, value stream mapping.
- Leads Industrial Engineering-domain work; point of contact for both the [[Boeing]] KTP's DES work and [[Collins Aerospace|Collins]]' value-stream-mapping engagement.

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
