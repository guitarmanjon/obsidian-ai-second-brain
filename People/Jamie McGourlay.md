---
aliases:
  - JMc
  - Jamie M
  - Jamie
team: Rolls-Royce
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- Rolls-Royce contact re: MISSY ([[2026-01-08 AMRC x COM]]). Also connected to [[Heiko]] at CHESCO ([[2026-03-04 CHESCO Day 1]]).
- Wants seamless IMG/TMG engagement so AMRC can be referred to as a whole rather than dealing with each group separately.
- Also works with Jon on Rolls-Royce ADG projects.
- Raised total-cost-of-ownership-for-data questions at Rolls-Royce; looking into why the Artis system isn't back on the table for R-R.

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
