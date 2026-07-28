---
aliases:
  - Kev Kerrigan
  - Kev K
  - KK
team: AMRC
role: Head of Composites Centre
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- Head of Composites Centre, AMRC. Discussed process monitoring in the past, and possibly AI topics.
- Note: NOT to be confused with [[Kevin Obuya]] (ex-AMRC, computer vision/AI) - resolve bare "Kevin" per-instance based on context, don't assume.

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
