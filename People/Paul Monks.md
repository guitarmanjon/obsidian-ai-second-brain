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

- [[Paul Monks]] - Chief Scientific Advisor, DESNZ (keynote; JS also spoke with him during arrival coffee re: [[Nuclear AMRC|NAMRC]], SMR)
- Keynote from [[Paul Monks]]: ongoing challenge of identifying how [[AI]] can maximise decarbonisation; [[AI]] driving clean energy growth.

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
