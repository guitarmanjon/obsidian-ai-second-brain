---
aliases:
  []
team: Siemens
role: Manufacturing expert for aerospace, UK
tags:
  - People
last updated: 2026-07-27T00:00:00
---

## Overview

- Siemens manufacturing expert for aerospace (UK); leads the Lean Digital Validation Lab for Industry 4.0, based in Germany with a CCAM branch.

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
