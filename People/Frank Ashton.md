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

- [[Frank Ashton]] - Head of Strategy and Partnerships, parent company Pressure Technologies, ex-Cummins
- At its heart, this is condition monitoring - [[Frank Ashton]] is familiar with condition monitoring from his previous role at Cummins (refuse truck CM).
- [[Ian Williamson]] and [[Frank Ashton]] to start writing the bid in the coming days - defining work packages, who takes the majority of the work, and where funding is coming from.

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
