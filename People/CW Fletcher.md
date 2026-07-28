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

- Sustainability angle discussed: real-time emissions tracking, potentially based on National Grid data - a "Green Virtual Engineer" concept. [[CW Fletcher]] mentioned as a possible connection.
- [[JS]] - Consider [[CW Fletcher]] as a possible connection for the sustainability/emissions angle.
- [[Chris Dungey]] to work on case studies and use cases, including [[CW Fletcher]]

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
