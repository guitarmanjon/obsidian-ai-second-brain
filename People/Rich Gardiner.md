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

- Not explicitly listed - Team Leader away day; [[Jia]], [[Mark Hulley|Mark]], [[Chris Scraggs|Chris]], [[Rab]] and [[Rich Gardiner]] referenced in discussion.
- [[Rich Gardiner]] has proposed recruitment evenings / days.
- [[Rich Gardiner]] - (Progress recruitment evenings / days proposal).

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
