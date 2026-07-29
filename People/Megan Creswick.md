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

- [[Megan Creswick]] shared [[Rolls-Royce|R-R]]'s list of KPVs for input/comment, including machine kinematics; EPSRC to fund some time in configuring a DAQ device for sensor data capture.
- [[JS]] - (Review and comment on [[Rolls-Royce|R-R]]'s list of KPVs shared by [[Megan Creswick]])

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
