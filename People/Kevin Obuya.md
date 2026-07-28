---
aliases:
  - KO
team: AMRC (ex, has left)
role: 
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- Former colleague, part of Jon's team, has now left. Worked on computer vision and AI projects.
- Covers visual inspection within IMG; represented on the ACP Senior Engineer track discussion.
- Note: NOT to be confused with [[Kevin Kerrigan]] (Head of Composites Centre, AMRC) - "Kev K" is deliberately not an alias here.

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
