---
aliases:
  - Rui Moreira
team: Boeing Europe
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[Rui Morreira]] - Boeing Europe
- Call with [[Rui Morreira]] from Boeing Europe to discuss IO-Link as a solution for digitising machine monitoring and to scope a possible joint trial at AMRC.
- Eight use cases have been identified at the BCA facility in Seattle. [[Rui Morreira]] to share slides with an overview, when/if approved.

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
