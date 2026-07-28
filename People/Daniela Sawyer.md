---
aliases:
  - Daniela
team: AMRC (University of Sheffield)
role: Senior Theme Lead
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- Fellow Senior Theme Lead (see [[2026-01-26 Theme Lead Afternoon]]).
- Note: "DS" is not a safe alias for her - it also refers to Daniil Smeliov. Resolve "DS" per-instance via pipe-link, never as a blanket alias.

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
