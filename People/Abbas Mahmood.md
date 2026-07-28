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
- Panel: [[Rachel Hassall]] (DNV, Data Science and AI lead), [[Michael Glass]] (Data Governance and Information Manager, SSEN Distribution), [[Jon Thompson]] (Chief Product Officer, Yottar), [[Yiu-Shing Pang]] (Data sharing manager, UK Power Networks), [[Abbas Mahmood]] (Head of Data and Digitalisation, Energy Networks Association).

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
