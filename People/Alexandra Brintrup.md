---
aliases:
  []
team: University of Cambridge / Alan Turing Institute
role: Professor
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- Professor, University of Cambridge (ab702@cam.ac.uk). Part of the Turing Institute's Sustainability challenge area.
- Potential collaboration with AMRC (via Inka/knowledge graph work) on supply chain data sources, uncertainty management, and link prediction.

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
