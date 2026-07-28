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
- [[Katerina Mouliadou]] - J&J centre of excellence for manufacturing, manages work with research centres, project management.
- [[Katerina Mouliadou]] - not fussed about where the system is demo'd, sooner rather than later preferred. System available for sale in Q1 after the demo.

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
