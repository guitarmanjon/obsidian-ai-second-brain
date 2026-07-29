---
aliases:
  - Donka
  - DN
  - Donka N
team: Rolls-Royce
role: Associate Fellow for Machining (RR); co-leads MISSY machining strand
tags:
  - People
last updated: 2026-07-27T00:00:00
---

## Overview

- [[Rolls-Royce|RR]] Associate Fellow for Machining, co-leading the [[MISSY]] machining strand; focus on closed-loop part conformity validation, sensor/KPV correlation, and Net Zero measurement for machining.

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
