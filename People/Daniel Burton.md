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

- Siemens: [[Alan Norbury]], [[Daniel Burton]] (account manager for R-R, Digital Industries Software), [[Rob Poyner]] (corporate account manager for R-R)
- R-R Functional Data Management Strategy raised by [[Daniel Burton]] (DB).
- [[Daniel Burton]] - Mendix is probably the option here - low-code/no-code, but can bring in Python code/scripts.

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
