---
aliases: []
team: AMRC - Design and Prototype Group
role: Research Manager
tags:
  - People
last updated: 2026-07-25T00:00:00
---

## Overview

- Research Manager in the Design and Prototype Group at the AMRC. Tom was to connect with him regarding the MASS proposal. See [[2025-10-08 CMI Town Hall]].

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
