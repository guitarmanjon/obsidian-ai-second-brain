---
aliases:
  - Onrej Polak
  - Ondrej
team: LISI / BAIUK
role: Process Dev Manager (LISI)
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[LISI]], Process Dev Manager. Gave updates on [[LISI]]'s work packages, smart factory presentation, and IUK project progress.
- One condition of signing the GOL is that BAIUK won't ask for more money, so [[Ondrej Polak|Ondrej]] is holding off accepting until the Monitoring Officer (MO) has been consulted.
- [[Ondrej Polak|Ondrej]] will look into both the de-scope and additional-funding options, review the impact on BAIUK and the UK supply chain, and prepare a summary of each for presentation to the MO.

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
