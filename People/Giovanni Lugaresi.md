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

- Horizon EU exploratory call with [[Giovanni Lugaresi]] to discuss potential collaboration, focused on the Digital 51 call.
- [[Giovanni Lugaresi]]: Assistant professor at KU Leuven, Belgium, for 2.5 years, mechanical engineering within industrial management and logistics. Works on digital twins for smart manufacturing, production planning and control applications, and circular economy (automated disassembly, electronics focus to retrieve rare-earth metals).

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
