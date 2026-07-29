---
aliases:
  []
team: NAMRC
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[Helen Arthur]] is leading the KTP programme at [[Nuclear AMRC|NAMRC]].
- [[Helen Arthur]]'s rough figure for income to [[Nuclear AMRC|NAMRC]] is £65k per company/KTP per year.

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
