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

- [[Dan Ostling]] (Machining Dynamics Expert)
- [[Dan Ostling]]'s presentation:
- [[Dan Ostling]] sees more involvement around the applications side of development, less so on tech development. What are people doing today (e.g. RR)? What could be improved? Potential for more complex features if needed. Machine data from WFL not possible at present - working with WFL in Spring to enable (is WFL OPC enabled?).

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
