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

- WANDisco: [[Paul Scott-Murphy]] (CTO, Bay Area), [[David Richards]] (CEO)
- [[David Richards]] (DR): the Digital Meets Manufacturing commission wants a tangible Azure Databricks stack demonstration, showing current best practice. AES have bearing failure data going back to 1968. AMRC Data Cloud to be developed together with AES Seals.
- [[David Richards]] (DR): Databricks and data science credits available to both AES and AMRC, via the Databricks academy.

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
