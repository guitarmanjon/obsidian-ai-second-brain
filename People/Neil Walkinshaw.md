---
aliases:
  []
team: University of Sheffield (Computer Science)
role: 
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[University of Sheffield]], Computer Science (COM). Background in causal inference; keen to align research with real-world AMRC work. Colleagues from COM also involved in AMRC/IMG testing research collaborations: Donghwan Shin, Robert Hierons, Jose Miguel Rojas, Phil McMinn.

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
