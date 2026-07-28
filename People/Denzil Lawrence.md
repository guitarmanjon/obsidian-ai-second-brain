---
aliases:
  - Dez
  - Denzil
  - DL
team: Boeing
role:
tags:
  - People
last updated: 2026-07-27T00:00:00
---

## Overview

- Boeing contact - involved in the Boeing SC (security clearance) application process and the Boeing HTP - LMC 0 kickoff meeting. See [[2023-01-30 Daily Notes]], [[2023-02-14 Boeing SC Application Notes]], [[2023-09-06 Boeing HTP LMC 0 Meeting]].

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
