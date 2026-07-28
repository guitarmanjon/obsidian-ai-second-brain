---
aliases:
  []
team: Collins
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[Andy Cambridge]] (Automation lead) and [[Scott Paterson]] (Industrialisation lead) are key partners for AMRC, to be kept informed but not actively involved, ensuring central alignment.
- [[Scott Paterson]]: Industrialisation lead at the Wolverhampton site; shop floor implementation is key, rather than "science projects".

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
