---
aliases:
  []
team: RR
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- R2B: [[TMcC]]'s (TM) examples suggested new machines to RR Inchinan. [[Andy Collis]] (AC) asked if this was a blank slate or building on existing capability - RR have 4 existing Mazak 730 machines (different controllers), looking to expand with 3 more (only 1 signed up so far, options on the other 2). Machines are being upgraded (software) to allow data capture.

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
