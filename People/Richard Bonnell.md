---
aliases:
  - Rich B
  - Rich Bonnell
team: AMRC (TMG)
role: Technical Lead in Cutting Technology, The Machining Group
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- Technical Lead in Cutting Technology, The Machining Group, AMRC.
- Involved in MISSY - WP1 lead (machining and experiment plan), R-R Controls visits, and MISSY replanning/deep dives.

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
