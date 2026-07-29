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

- [[Rolls-Royce|R-R]]: [[James Pemperton]] (data analytics), [[Matt Hurn]] (Digital ME, deploying data engineering/science skills into [[Rolls-Royce|R-R]]), [[Ryan Harlow]] (Chief of Digital Operations), [[Paul Harrison]] (Digital Manufacturing Specialist, Smart Factory project), [[Alan Gawthorpe]] (Enterprise Architect, Civil Digital), [[Yu Sing Keung]] (Erica, intern)
- [[Alan Gawthorpe]] gave an overview of the Civil Data Platform.

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
