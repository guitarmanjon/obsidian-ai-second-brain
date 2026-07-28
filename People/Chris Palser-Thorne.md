---
aliases:
  []
team: NI
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- Introductions: [[Chris Palser-Thorne]] - account manager for TUoS, local relationship manager for AMRC; [[Matt Bollom]] - offering manager for NI (based in Austin), works with partners on strategy and mutual benefit.
- [[Matt Bollom]] - (Have a conversation with [[Chris Palser-Thorne]] about how the relationship moves forward; plan a visit to AMRC).

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
