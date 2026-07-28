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

- None recorded (personal notes following a Dev Academy webinar with [[Kevin Smith]], Made Smarter).
- Key learnings from Made Smarter (per [[Kevin Smith]]): SMEs learn from each other; people and skills matter; Made Smarter runs engagements helping SMEs with first steps, identifying a "digital champion" (www.madesmarter.uk/start-your-digital-manufacturing-journey/).

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
