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

- [[Prof Andrew Cox]] has developed a 4-hour intro-to-[[AI]] webinar for information professionals - intelligent people who don't understand [[AI]] - delivered as an interactive session rather than one-way.
- [[Rab]] - (E-introduce [[JS]] and [[Prof Andrew Cox]] to continue the conversation about adapting the [[AI]] webinar for manufacturing).

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
