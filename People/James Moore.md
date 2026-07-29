---
aliases:
  []
team: AMRC
role: 
tags:
  - People
last updated: 2026-07-27T00:00:00
---

## Overview

- Worked on the JLR project referenced in [[Boeing]] KTP discussions; also involved in [[Siemens]] BFC connectivity work and [[Boeing]] inspection-data discussions.
- PM&C/IMG team member, described as a capable, well-rounded Tech Lead; moved from TMG to IMG. Worked on MP2.3 [[On-Machine Inspection|OMI]] work, robotics/[[PLM]] (Kuka), and data science (Python, HySaaS).

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
