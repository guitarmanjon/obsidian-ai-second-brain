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

- [[Gail Plush]] asked how long the project is and whether the sensor list is being pared down to a manageable set - project expected to wrap up in December/January, and yes, sensor list paring-down was confirmed (had been omitted from the overview).

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
