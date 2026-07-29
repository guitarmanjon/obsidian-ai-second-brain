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

- [[Bob Naylor]] noted this project uses "shared services" machine tools at [[BAE Systems|BAE]] (equipment shared between teams, "who shouts loudest owns the equipment") - hence asking AMRC to make the parts.

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
