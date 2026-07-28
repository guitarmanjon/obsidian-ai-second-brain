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

- On the line: DePuy - [[Katerina Mouliadou]], [[Eymard Gorman]]; Sandvik - [[Jens Nannen]]
- [[Jens Nannen]] - Sales Manager for Digital Machining, Central Europe, supports North Europe (inc. UK). Used to work for Prometec.
- [[Jens Nannen]]: at present, the "plus" side of CoroPlus is available for turning; milling will come soon.

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
