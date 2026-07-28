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

- [[Jon Stammers]] (attendee). Hosted by [[Josh D'Addario]]. Panellists: [[Dave Simpson]] (DNV), [[Rachel Hassall]] (DNV), [[Michael Glass]] (SSEN Distribution), [[Jon Thompson]] (Yottar), [[Yiu-Shing Pang]] (UK Power Networks), [[Abbas Mahmood]] (Energy Networks Association).
- Hosted by [[Josh D'Addario]]. [[Dave Simpson]] from DNV - DNV help companies in the energy sector make the most of their data. Example of a good public energy sector dataset - the London Register of Subsurface CO2 Storage. ISO 25012 quoted - "data quality characteristics will be of varying importance and priority to different stakeholders."

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
