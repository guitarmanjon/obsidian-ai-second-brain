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

- [[JS]] (AMRC), [[TM]] (AMRC), [[Mino]] (DMG), [[Ralph Riedemann]] (DMG)
- Future collaboration ideas: a "machinability cell" combining a milling tool, lathe and robot (robo2go) as a Celos case study, developed with DMG; [[Ralph Riedemann]] keen to be involved in tendering for machines, noting UK staff aren't always up to date with the latest German/Japanese tech; Celos 2.0 (possibly built on 840D) would offer paperless shop floor functionality.

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
