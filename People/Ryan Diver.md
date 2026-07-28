---
aliases:
  - RD
team: AMRC
role: Director for Data
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- Director for Data, AMRC.
- [[Ryan Diver]] - Delmia used with Catia for offline programming of robots; possibly FastServe/FastCurve.
- [[Bob]] asked whether AMRC is settling on one architecture or intends to use multiple, as currently. [[Ben Morgan]]: still exploring, driven by the customer. [[Ryan Diver]]: will always be exploring.

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
