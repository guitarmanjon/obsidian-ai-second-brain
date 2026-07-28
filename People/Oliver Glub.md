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

- [[Oliver Glub]] - MOM Consultant (Presenter)
- Manufacturing Operations Management ([[Oliver Glub]]) - enriching process planning with real-time actual data to improve predictions; Manufacturing Execution System integrates with other Siemens systems (e.g. Teamcenter); Advanced Planning and Scheduling gives a paperless production planning solution; driven by SIMATIC IT Unified Architecture for connectivity including machine tools; Discrete Manufacturing allows collection of data on why a process stopped, defects, rework, non-conformance, etc.

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
