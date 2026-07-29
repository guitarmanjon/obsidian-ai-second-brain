---
aliases:
  []
team: AMRC / IBM
role: Tech lead for AI
tags:
  - People
last updated: 2026-07-27T00:00:00
---

## Overview

- Tech lead for [[AI]], does a lot of machine vision work and covers [[Machine Learning|ML]] ops; involved in early IBM AC922 hardware/software work.

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
