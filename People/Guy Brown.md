---
aliases:
  - Guy
  - Guy B
team: University of Sheffield
role:
tags:
  - People
last updated: 2026-07-25T00:00:00
---

## Overview

- University of Sheffield. Referenced re: value of AI across UoS (Halifax connection) and co-prepared a CMI slide for a presentation - see [[2024-01-25 Presentation Prep]]. Also intro'd the Responsible AI Workshop alongside Kirsty McNeil - see [[2023-12-04 Responsible AI Workshop]] (that occurrence used "Guy B" - same inference, not separately confirmed, flag if wrong).

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
