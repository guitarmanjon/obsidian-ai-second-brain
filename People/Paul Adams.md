---
aliases:
  - PA
team: Rolls-Royce
role:
tags:
  - People
last updated: 2026-07-23T00:00:00
---

## Overview

- [[Rolls-Royce]] contact discussed via [[Rob Poyner]] in [[2026-02-16 Siemens Catch Up]] - feels [[Rolls-Royce|R-R]] doesn't get enough value out of digital/automation projects; [[MISSY]] was raised as a missed opportunity for digital information systems.

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
