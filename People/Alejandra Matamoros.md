---
aliases:
  []
team: MTC
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- Timescales: wrap-up date for WP4 should be as early as possible to support ISCF. Project plan screenshot shown from [[Alejandra Matamoros]]'s shared screen.
- Funding allocation: [[Alejandra Matamoros]] interested in how funding will be split - [[Gavin Hill]] hadn't really thought about this yet. [[Gavin Hill]] reckons D4 is a 10-page document, roughly 2 weeks' effort.

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
