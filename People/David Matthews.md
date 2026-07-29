---
aliases:
  - DM
team: IET / Rolls-Royce
role: IET Manufacturing TN committee member
tags:
  - People
last updated: 2026-07-27T00:00:00
---

## Overview

- [[IET]] Manufacturing Technical Network committee member; leads the Manufacturing Award, aimed at early-career manufacturing engineers/apprentices; also owns the Apprentice Prize event.

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
