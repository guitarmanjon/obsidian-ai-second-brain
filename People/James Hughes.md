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

- [[James Hughes]] - ([[Kristina]] to stand in as James is unavailable that week)
- Refined AMRC attendee list: NW - [[Siva]] (or [[James Hughes]]); Castings - [[Jack]]; TMG - [[Pete Crawforth]]; IMG - [[JS]], [[AG]]; Cymru - [[Kevin Chan]]; CC - [[Matt Smith]](?); Design - [[Dave King]]; Labs - none.

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
