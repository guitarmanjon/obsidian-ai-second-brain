---
aliases: []
team: CHESCO
role: Electric motors for aviation
tags:
  - People
last updated: 2026-07-23T00:00:00
---

## Overview

- Leads the "Lopper" electric motor project (collaboration with MD Aircraft, Additive Drives GmbH, BTU + Fraunhofer-Gesellschaft) - see [[2026-03-04 CHESCO Day 1]].

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
