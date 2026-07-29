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

- Introductory call with [[Hemant Mulay]], an Industrial Engineer with 19 years' experience who reached out via the AMRC website interested in collaborative research on [[AI]]/data-driven methods in industrial/production environments.
- [[Hemant Mulay]] is looking for guidance on how to enable more research within his job. Has implemented a digital twin at his organisation (Carbolite). Was previously a design engineer at Tata in India.

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
