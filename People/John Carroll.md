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

- Technical collaboration: similar approach to Mini-[[MISSY]] - show [[Siemens]] developers the challenges being faced and get feedback/support. [[John Carroll]] at [[Rolls-Royce|R-R]] (a sort of Steve Carter replacement) is looking at Insights Hub integration at [[Rolls-Royce|R-R]] and could drop into AMRC occasionally to collaborate and give direction on how [[Rolls-Royce|R-R]] will be using IH.
- [[John Carroll]] (Architect for Shop Floor)

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
