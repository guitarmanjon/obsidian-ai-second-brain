---
aliases:
  - Alex G
  - Alex
  - AG
team: AMRC (IMG)
role: Tech Fellow
tags:
  - People
last updated: 2026-07-27T00:00:00
---

## Overview

- Tech Fellow, key focus on Factory+ (open-sourced, published on GitHub); supervises the Boeing KTP alongside Adam Brown. Regular 1:1s with JS.
- Involved with the CMI leadership team building links between CMI and AMRC; represents AMRC on the Sparkplug and MT Connect interoperability working groups, and runs a UNS community of practice.
- Note: "AG" defaults to Alex Godbehere throughout the vault, even in meetings also attended by Artur Grigals - per Jon, where a mention is actually Artur, it's written as "Artur" explicitly rather than "AG".

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
