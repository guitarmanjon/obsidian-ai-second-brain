---
aliases:
  - Andy B
team: External (KTP)
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- KTP (Knowledge Transfer Partnership) contact, external to AMRC. Anything KTP-related referring to "Andy" is him. See [[2023-02-13 Daily Notes]] and [[2024-02-19 Day To Do List]] (contacted re: extension).

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
