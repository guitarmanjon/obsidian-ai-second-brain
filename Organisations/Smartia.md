---
aliases:
  []
type: Company
relationship: Partner
tags:
  - Organisation
last updated: 2026-07-28T00:00:00
---

## Overview

- Technology partner (with IOETEC), digital manufacturing.

## Notes

- ...

## People

```base
filters:
  and:
    - file.inFolder("People")
properties:
  file.name:
    displayName: Name
  note.role:
    displayName: Role
  note.team:
    displayName: Team
views:
  - type: table
    name: Contacts
    filters:
      and:
        - file.hasLink(this.file)
    order:
      - file.name
      - role
      - team
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      file.name: 420

```

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
