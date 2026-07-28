---
aliases:
  - JE
  - Jon Eyre
team:
role:
tags:
  - People
last updated: 2026-07-25T00:00:00
---

## Overview

- Colleague. Worked on distributed data - discussed as part of a wider concern about that work not being included in DC+AI, and an internal EOI to replace him on it. Also referenced as an example of a more public-facing Senior TF role. See [[2023-03-02 Chat With Lindsay]], [[2023-08-08 AG SRDS Review]].

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
