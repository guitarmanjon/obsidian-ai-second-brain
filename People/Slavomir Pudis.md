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

- [[Slavomir Pudis]] (Slavo) - Mondelez, Productivity Lead for MEU business unit, confectionary category, 21 sites
- Original ask from [[Slavomir Pudis]]: hasn't found a business case for predictive M&R so far; interested in condition-based monitoring with forecasting, performance visibility, and material visibility use cases.
- Introductions: [[Bobby Manesh]] (Lead Research Engineer, AI, AMRC Cymru); [[JS]]; [[Slavomir Pudis]] (Productivity Lead, MEU confectionary, 21 sites).

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
