---
aliases:
  - Rodrigo
  - Rodrigo Siqueira
team:
role:
tags:
  - People
last updated: 2026-07-25T00:00:00
---

## Overview

- Ex-AMRC colleague. Resourcing/performance concerns discussed (hours charged vs. unclear output); research interests noted as neuroscience. Involved in the MCSSY WP5 deep dive. See [[2023-02-06 Daily Notes]], [[2023-08-08 LL SRDS And Team Updates]], [[2023-12-04 MCSSY WP5 Deep Dive]], [[2023-12-20 SLT Away Day]].

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
