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

- Rab's overview: [[Dan Tomlinson]] has been the lead contact for Altair, using tools like FEA-type tools for a design approach group.
- [[RS]] and [[Dan Tomlinson]] met with Altair at Farnborough, and a visit to AMRC was discussed.

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
