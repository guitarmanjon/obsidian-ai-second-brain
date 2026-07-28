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

- Engine demo from [[AMRC North West]]: it's safer to have someone from [[AMRC North West]] drive the demo there, hiring a van and having [[AMRC North West]] pack it. Coordinating couriers at the NEC is very difficult. Still need to ask [[AMRC North West]] what they're thinking, including whether a forklift is needed and whether [[AMRC North West]] are willing to pack, transport, and return the demo.
- [[JS]] - (Talk to [[AMRC North West]] first about the engine demo logistics, before [[Gual]] talks to them directly)

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
