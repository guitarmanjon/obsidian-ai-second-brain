---
aliases:
  - Tehseen
  - Teh Sen
team:
role:
tags:
  - People
last updated: 2026-07-25T00:00:00
---

## Overview

- Used to be at the MTC (Manufacturing Technology Centre). Discussed re: HVMC/HUMC digital visit agenda and MSISA hours on Harbour. See [[2023-01-31 Daily Notes]], [[2023-02-02 Daily Notes]], [[2023-08-09 Tehseen MSISA]].

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
