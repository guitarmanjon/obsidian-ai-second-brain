---
aliases:
  - Rothman
team: University of Sheffield
role:
tags:
  - People
last updated: 2026-07-25T00:00:00
---

## Overview

- University of Sheffield contact - referenced in relation to a "Resp. AI bid" funding proposal cost breakdown (Hy Subs work package, WP6). See [[2023-04-25 Hy Subs Work Package Cost Breakdown]].

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
