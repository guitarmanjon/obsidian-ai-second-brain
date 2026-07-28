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

- CHESCO - [[Heiko]] (Director, ex R-R, in touch with [[Jamie McGourlay]] + [[Neil Tatman]]), Mark (Proj. lead in Mnf., Materials Science), [[Angelika]] (Mnf. Eng., Powder-based AM), [[Stephan Weiss|Stephan]] (Machining Strategist, Mnf. Eng.), [[Chandra]] (Mnf. Eng., NDT), [[Lam Nguyen]] (Electric motors for aviation), [[Morris Johnston]] (MD, ex R-R with [[Heiko]], ex-Lilium)

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
