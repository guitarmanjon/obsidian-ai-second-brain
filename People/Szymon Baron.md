---
aliases:
  []
team: DePuy
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[Paul Dwyer]]: off-machine is better for getting tool profile (doesn't use CNC time); probing is better for capturing tool wear. UC Dublin work ([[Szymon Baron]]): instrumentation of pallets with embedded sensors, connected to MTConnect for positional data; force feedback used for tool wear monitoring; concerns over commercial use/IP; material hardness may affect how well the system works; Nordmann already running on machine for breakage detection, skipping to sister tool. UCD system can be embedded in tombstones etc.

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
