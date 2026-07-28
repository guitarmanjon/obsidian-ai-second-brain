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

- [[Dave Stoddart]] - Head of Simulation and Verification, Nuclear AMRC
- [[Dave Stoddart]] was a key contact for that NAMRC engagement; to check whether he is coming on 22nd Jan.
- No firm decision recorded. Topics floated: [[Lee Aucott]] speaking on materials/manufacturing challenges, a possible F2050 tour (by 3pm) with a look into COMPASS, and checking whether [[Dave Stoddart]] can attend on 22nd Jan.

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
