---
aliases:
  []
team: AMRC (IMG, Digital)
role: 
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- IMG colleague, Digital team. Was the key AMRC/[[Siemens]] contact for the Mindsphere relationship. Involved in HySpec proposal capacity/resourcing discussions.

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
