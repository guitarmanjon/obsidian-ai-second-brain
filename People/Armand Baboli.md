---
aliases:
  []
team: INSA Lyon
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[Armand Baboli]] (INSA Lyon) is positioning as coordinator or lead partner, with expertise in supply chain optimisation and scheduling, and Intelligent Prescriptive Analytics Systems; looking for academic and tech partners.
- Note author - (Follow up with [[Armand Baboli]] at armand.baboli@insa-lyon.fr regarding coordinating/joining the consortium)

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
