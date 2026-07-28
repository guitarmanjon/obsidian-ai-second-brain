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

- [[Tace Morgan]] overview of AMRC Sustainability going forward - 11 new Heads of Tech Capability. Catapult 26/27 - Through-life circular manufacturing (Design, Manufacturing, End of life, & Supply Chain) - aligns with the overall Grant Work Programme. Future - a 3-year roadmap developed, a living document, available from Tace. Decarbonisation across AMRC - a 26/27 project, run by NW and Cymru.

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
