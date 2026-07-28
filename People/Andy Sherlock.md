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

- [[Andy Sherlock]] - Director of Data-Driven Manufacturing, NMIS
- [[Andy Sherlock]] discussed getting NMIS data scientists into local companies for consultancy, working with in-house data types.

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
