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

- [[RP]] has spoken to [[Vicki Scott]]: R-R are working on a requirements document for NAMRC for SMR, with [[Steve Carter|Steve C]] working on this; NAMRC would implement, and R-R would rent the facilities back from them. [[RP]] was instructed by [[Vicki Scott]] to go through [[Steve Carter|Steve C]]. Perceptions of what's going to happen seem to differ between AMRC and R-R. [[Nat]] has shared the same documents with NAMRC as he gave to [[Steve Carter|Steve C]]. [[RP]]'s view: get requirements from R-R, close doors, and let AMRC get on with the work.
- [[RP]] - (Go through [[Steve Carter|Steve C]] per [[Vicki Scott]]'s instruction on SMR requirements)

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
