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

- Sample data needed to guide the Thingworx work - some machines output CSV, some XML, but [[Paul Harrison]] confirmed data will be provided in JSON format (already converted by [[Rolls-Royce|R-R]]). Samples to be provided.
- [[Rolls-Royce|R-R]]: [[James Pemperton]] (data analytics), [[Matt Hurn]] (Digital ME, deploying data engineering/science skills into [[Rolls-Royce|R-R]]), [[Ryan Harlow]] (Chief of Digital Operations), [[Paul Harrison]] (Digital Manufacturing Specialist, Smart Factory project), [[Alan Gawthorpe]] (Enterprise Architect, Civil Digital), [[Yu Sing Keung]] (Erica, intern)

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
