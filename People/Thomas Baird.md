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

- [[Thomas Baird]] - Consultant at City Science (panellist)
- Data access discussion: [[Thomas Baird]] noted many datasets are available to local authorities but are under-utilised because authorities either don't know about them or don't budget for access costs (e.g. Ordnance Survey, satellite imagery). [[Chris Baker]] discussed "data assimilation" - combining datasets depending on availability, e.g. farm field monitoring switching between ground sensors and satellite data if one fails.

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
