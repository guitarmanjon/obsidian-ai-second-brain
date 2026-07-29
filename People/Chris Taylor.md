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

- 1.5 [[Machinability]] of new materials - library and standard test procedures / further develop machinability libraries - [[Chris Taylor]] - £50k. Not yet scoped in detail; [[Adam]] to be closely involved, linking to feature-based work.
- [[JS]]: would be useful to have a list of KPVs that [[Rolls-Royce|RR]] work with - [[Chris Taylor]] might have access; possibly [[Dave Curtis]] for Grinding (though not directly applicable); relevant to Rotatives and Casings.

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
