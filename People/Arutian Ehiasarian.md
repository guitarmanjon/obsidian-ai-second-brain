---
aliases:
  - Harry Ehiasarian
team: Sheffield Hallam University
role: 
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[Sheffield Hallam University]] ([[Sheffield Hallam University|SHU]]). Works on plasma surface engineering/PVD; usually found alongside James Bradley (University of Liverpool) on EPSRC proposal work ([[AI]]-based [[Digital Twin]] for Sustainable and Responsive Plasma Surface Manufacturing).
- Note: often referred to informally as "Harry" in notes - do not confuse with Harry Burroughes (AMRC).

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
