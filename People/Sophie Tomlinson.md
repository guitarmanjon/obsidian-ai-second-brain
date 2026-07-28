---
aliases:
  []
team: AMRC (Grants)
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[Sophie Tomlinson]] asked Giovanni if he's looking to coordinate - he has submitted as coordinator previously, is open to not coordinating this time, and has several other projects where he's being encouraged to coordinate.
- [[JS]] / [[Giovanni Lugaresi]] / [[Sophie Tomlinson]] - Exchange ideas over email and reconvene in 2-3 weeks.

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
