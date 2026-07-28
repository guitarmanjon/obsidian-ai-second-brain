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

- Phase 2 is a UK AI for Manufacturing Strategy and implementation plan - [[Chris Dungey]] has a paper in draft and will share it. Covers 5 areas: Compute + Architecture; Data (talking to [[Jon Gyre]], including digital and data readiness); Skills ([[Lindsay Lee]]); AI Applications; and Regulation to support innovation.
- [[Jon Gyre]] - (Continue discussion with [[Chris Dungey]] on the data area of the Phase 2 strategy, including digital and data readiness)

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
