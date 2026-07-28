---
aliases:
  - JS
  - Jon
  - Jon S
team: AMRC (University of Sheffield)
role: Theme Lead, Data & AI
tags:
  - People
last updated: 2026-07-23T00:00:00
---

## Overview

- This is you. This note exists so that `[[JS]]` resolves consistently across journal entries where you're referenced by initials, rather than showing as an unresolved link everywhere.

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
