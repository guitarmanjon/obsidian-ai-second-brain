---
aliases:
  - Grace
team: AMRC
role:
tags:
  - People
last updated: 2026-07-25T00:00:00
---

## Overview

- Part of Jon's team. Appears across HVMC strategic projects work, DC&AI catch-ups, bus/travel logistics, and theme-meeting uniform coordination. Also mapped as Data Security theme lead in [[2024-04-17 Theme Lead Meeting]]. See also [[2023-01-30 Daily Notes]], [[2023-02-13 Daily Notes]], [[2023-01-30 Next Gen Call]], [[2023-08-08 DC And AI Catch-Up]], [[2024-03-26 Theme Meeting]].

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
