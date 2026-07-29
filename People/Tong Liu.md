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

- [[Tong Liu]] - Lecturer, pervasive computing
- [[Tong Liu]] presented "The Utility of Lifelong [[AI]] in Industrial Soft Sensing and [[Condition Monitoring]]" (Pervasive Computing Group). Lifelong [[Machine Learning|ML]] aims to mimic human learning more closely - e.g. recognising wheels on a new type of vehicle having only ever seen them on a different vehicle - by building a knowledge base for the [[Machine Learning|ML]] model.

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
