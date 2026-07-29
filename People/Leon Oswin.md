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

- Catch up meeting with [[Rolls-Royce]] contacts [[Neil Tatman]] and [[Leon Oswin]].
- **Connectivity**: well covered in the last project - "tell us more" (AG). What could be the make-up of the data being dealt with? Where can the data go - cloud vs. on-prem? JMc - cloud will be part of the equation, data storage infrastructure *will* change. [[Rolls-Royce|R-R]] data policies on data management and where the data can go. Who will be defining the data requirements, and when? Currently being defined - AG has a tech work programme on Digital, [[Leon Oswin]] leading this area now.

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
