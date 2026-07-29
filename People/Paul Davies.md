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

- [[Rui Morreira]] will make introductions between AMRC and key [[Boeing]] contacts ([[Paul Davies]], [[Gary Hilton]]) to allow progress — note that RM will shortly be leaving [[Boeing]].
- [[Rui Morreira]] is leaving [[Boeing]] shortly to head back to Portugal; will pass on contacts. [[Paul Davies]] is the key contact and is very interested in IO-Link, wanting to see it happen in Seattle. [[Gary Hilton]] from [[Boeing]] UK also flagged.
- [[Rui Morreira]] - (Make introductions between AMRC and [[Paul Davies]] / [[Gary Hilton]] at [[Boeing]] before leaving)

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
