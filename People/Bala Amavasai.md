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

- [[Databricks]]: [[Bala Amavasai]] (Global Tech Director, Manufacturing and Logistics; 16 years in Sheffield, left 15 years ago; previously led [[AI]] team at Stanley Black & Decker; at [[Databricks]] ~1 year leading the Manufacturing vertical), [[Anthony Marangos-Gilks]] (Account Manager for AMRC - Manufacturing, Automotive; joined [[Databricks]] April 2022; Commercial Account Executive)
- [[Bala Amavasai]] is very close to [[Digital Catapult]], with three programmes kicking off shortly.

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
