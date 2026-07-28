---
aliases:
  - Pete
  - Pete C
  - PC
team: Machining Group
role:
tags:
  - People
last updated: 2026-07-27T00:00:00
---

## Overview

- From the Machining Group. Raised sensor selection work on Slack (11th July) - what can directly/indirectly detect something, building on OWAST work and extending to TRL. See [[2023-07-18 Daily Notes]].

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
