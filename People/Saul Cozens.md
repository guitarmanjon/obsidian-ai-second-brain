---
aliases:
  - Saul
team: University of Sheffield - Research IT
role:
tags:
  - People
last updated: 2026-07-25T00:00:00
---

## Overview

- Research IT at UoS. Involved in HPC/research computing infrastructure decisions, GPU allocation, and the sensitive-workloads GPU cluster consortium. See [[2025-10-01 CMI and RSE]], [[2025-10-13 CMI - AI and Research Computing]], [[2026-01-08 CMI - AI for E&M Fortnightly]].

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
