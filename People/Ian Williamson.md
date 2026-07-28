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

- [[Ian Williamson]] and [[Frank Ashton]] to start writing the bid in the coming days - defining work packages, who takes the majority of the work, and where funding is coming from.
- [[Ian Williamson]] and [[Frank Ashton]] - Start writing the bid in the coming days (define work packages, work split, and funding sources).
- HIVE (HyEnergy link): [[Josh Williamson]], [[Ian Williamson]]

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
