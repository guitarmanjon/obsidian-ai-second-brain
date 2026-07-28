---
aliases:
  - Victor
  - Victor Guang Shi
  - VS
team: AMRC
role: Supply chain lead
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- AMRC, Supply chain lead.
- [[Victor Shi]]: the work could lead to a Fit4Aerospace piece of work - identifying suppliers that could supply aero but don't yet, identifying the skills gap, and upskilling accordingly. Should be attractive to funders given the importance of the aero supply chain.

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
