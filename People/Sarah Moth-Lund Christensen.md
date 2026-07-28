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

- [[Sarah Moth-Lund Christensen]] - background in philosophy, applied ethics in responsible tech development
- [[Sarah Moth-Lund Christensen]] - background in philosophy; focus on applied ethics in responsible tech development, machine ethics, and ethics of productivity-monitoring wearables in the workplace. Worth linking up with.
- [[JS]] - Link up with [[Sarah Moth-Lund Christensen]] on machine ethics / responsible tech.

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
