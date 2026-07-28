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

- Lisi: [[Onrej Polak]] (Process Dev Manager), [[Jock Hill]] (General Manager), [[Gerard]] (IT? director), [[Jean-Philippe Grace]] (Fasteners Manager), [[Jim Adamson]] (Local IT services delivery), [[Krzysztof Dec]] (Digitalisation Engineer)
- Smart factory presentation - [[Onrej Polak]] & [[Krzysztof Dec]]:
- [[Krzysztof Dec]]: mapping operator daily tasks on the small diameter (SD) line via a time-and-motion study to inform investment decisions; data capture starting the following week for 16 days, day shift only, using a Google Play app.

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
