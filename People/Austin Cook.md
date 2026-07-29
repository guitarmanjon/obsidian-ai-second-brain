---
aliases:
  []
team: BAE
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[Stefan Hickox]] (PEL) and [[Austin Cook]] ([[BAE Systems|BAE]]) provided steering to the project: Ti material suggestions, cutting tool costs, digital manufacturing (intelligent factory, in-process verification), alignment of AE data to cutting position (corners, wrap-around); tool wear/breakage of most interest to [[BAE Systems|BAE]].

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
