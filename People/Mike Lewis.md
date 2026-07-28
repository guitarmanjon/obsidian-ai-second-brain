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

- [[Mike Lewis]] is Digital theme lead — they need resource.
- Mike Lewis / IMG — [[Mike Lewis]] has budget for Maintenance 4.0 work, which could expand to look at machine tools; JS to speak to Mike, with ST potentially able to help.
- [[JS]] - (Speak to [[Mike Lewis]] about Maintenance 4.0 crossover with machine tools)

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
