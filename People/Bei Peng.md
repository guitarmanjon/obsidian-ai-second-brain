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

- Spreadsheet shared by [[Bei Peng]] with info on COM supervisors, interests etc.
- [[MISSY]] data - showed [[Bei Peng]] the data dictionary, explained what a machining trial is. Can do pattern recognition, part quality, predict optimisation methods. Bei thinks there are lots of opportunities. Has done some similar work with NSG, under NDA, with them reviewing papers/outputs etc. - will share a paper with JS that can be shared with [[Jamie McGourlay|Jamie]]. Bei has a PhD student starting in May, school funded - nationality constraints? Student is Chinese.

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
