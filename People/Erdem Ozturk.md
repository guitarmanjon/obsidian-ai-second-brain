---
aliases:
  - Erdem
  - EO
team: Productive Machines (ex-AMRC Machining Group)
role: 
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- Ex-colleague from AMRC Machining Group (Dynamics), now runs his own company, Productive Machines.
- Worked on Digital Twin concepts, referencing Bloom's taxonomy in relation to digital machining/autonomous machines/AI; involved in Sinumerik Edge deployment for simulation/monitoring.

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
