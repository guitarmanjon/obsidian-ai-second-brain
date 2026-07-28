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

- [[Matt Collinson]] (Boeing, involved in COMPASS) talking to [[Chaitanya Krishnakumar|CK]] about analysis work for COMPASS - [[Jon Stammers|JS]] mentioned ongoing work with [[Saul]] around SDE for COMPASS.
- [[Matt Collinson]] - IHSS: discussion on potential challenges, Grafana help; can't use data directly from F+ so post-processing is needed; [[Chaitanya Krishnakumar|CK]] to speak to [[Jon H|JH]] about what already exists; [[Oscar]] from Composites also joined - data is post-processed then sent back to F+, with Composites doing the Grafana work so no data is sent over to Boeing directly.

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
