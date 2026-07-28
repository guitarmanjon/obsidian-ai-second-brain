---
aliases:
  - JB
team: Rolls-Royce
role: Lead Data Scientist
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- Round table and session speakers noted for follow-up: [[Richard Douglas]] (Technical Project Manager, Rolls-Royce), [[Jonathan Butters]] (Data Scientist, Rolls-Royce), [[Stephen O'Brien]] (Data Scientist, Rolls-Royce), [[Alex Smith]] (Edwards Vacuum), [[Mircea Oprisan]] (Mars), sponsor reps from PEAK and NetApp ([[Russ Segart]]).
- [[Jonathan Butters]] - lead Data Scientist at R-R who worked on this, has Thingworx experience.
- R-R (Rolls-Royce): [[Jonathan Butters]], [[Neil Tatman]] (left at 14:30)

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
