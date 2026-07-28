---
aliases:
  - GH
  - Gav
team: AMRC (University of Sheffield)
role:
tags:
  - People
last updated: 2026-07-27T00:00:00
---

## Overview

- Fellow Theme Lead (see [[2026-01-26 Theme Lead Afternoon]]). Also attends ATR-related and CHESCO collaboration discussions - e.g. asked about CHESCO's areas of strength and overlap with AMRC during the [[2026-03-04 CHESCO Day 1]] visit.

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
