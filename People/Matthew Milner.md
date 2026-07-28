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

- R-R Subs: [[Ian Frearson]], [[Gethyn Longworth]] (Solution Architect IT, R-R Subs, MES, Data, AI, PLM), [[Jonathan Lee]] (R-R digital), [[Matthew Milner]] (Ops Improvement manager, MES deployment), [[Nikita Minhas]] (Digital Manufacturing R-R Subs - new facilities and MES)

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
