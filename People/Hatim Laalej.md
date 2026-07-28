---
aliases:
  - Hatim
  - HL
team: AMRC (PM&C)
role: 
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- PM&C team member; installed sensors at FoF on the WFL machine and leads on data collection there; strong candidate for leading PM&C per an EoI review.
- EPSRC-funded project aligning with MTT's test rig work (3-axis machine tool, accelerated bearing wear testing); encouraged to build up his publication record via the EPSRC project.

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
