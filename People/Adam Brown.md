---
aliases:
  - AB
  - Adam
  - Adam B
team: Machining Group, AMRC
role:
tags:
  - People
last updated: 2026-07-27T00:00:00
---

## Overview

- Machining Group. Deep involvement in ATR (data-centric manufacturing, automation, CAM data maturity) - see [[2026-01-15 ATR Update]]. Also flagged as a contact for chip formation work in [[2026-02-25 Paul Hammond - FLAME]].
- Involved in tool-wear monitoring discussions - noted the many factors affecting tool wear and the lack of active monitoring/data.

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
