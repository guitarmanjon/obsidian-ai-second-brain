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

- [[Mike Wilson]] (VP Sales, Wilcox Associates)
- [[Mike Wilson]] fetched his laptop from the car to demo PC-DMIS, believing it addresses many of the issues/challenges discussed.
- [[Mike Wilson]] - (Ensure [[Dave Jeffers]] visits AMRC to discuss the technical aspects of PC-DMIS)

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
