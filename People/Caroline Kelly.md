---
aliases:
  - CK
  - Caroline
team: CPI (Centre for Process Industries)
role: Head of Tech Strategy
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- Chemist background, Head of Tech Strategy at CPI (Centre for Process Industries). Only met once. Spoke on where the process industries market is heading, and on sustainability (circular economy, sustainability, digital) for an IET TN session.

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
