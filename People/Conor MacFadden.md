---
aliases:
  - Conor McFadden
team: NMIS
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[NMIS]]. From the digital machining team - developing use cases for data capture, and discussing why capture at certain rates, since application of data defines data rates.
- [[Rab]] - (Link up [[Conor MacFadden]] with the Factory+ team).

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
