---
aliases:
  - SM
  - Steve Marr
  - Steven Marr
team: AMRC (University of Sheffield)
role:
tags:
  - People
last updated: 2026-07-23T00:00:00
---

## Overview

- Involved in Tekton (raised in [[2026-01-08 AMRC x COM]] as already engaged but facing capacity challenges). Gave an overview of Module 1 digitalisation in [[2026-02-05 R-R SMR - Data and AI]].

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
