---
aliases:
  - AM
team: RR
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- Setting the scene - [[Richard Foster]] and [[Andy Mantle]] (RR), to give a brief overview of Rolls-Royce's needs across the various business units.
- [[Andy Mantle]] (RR, at desk in Derby?)

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
