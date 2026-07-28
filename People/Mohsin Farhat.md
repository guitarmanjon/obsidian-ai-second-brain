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

- [[Mohsin Farhat]]: [[Alexandra Brintrup]] might be able to help with access to quality data; also looking at using ML to identify new customers for supply chain companies.
- Context from a forwarded email chain (25 June, from [[Mohsin Farhat]] to Joseph, Victor, Praveen, Aparajithan, Zohaib): the goal of the internal meeting is to understand the specific areas where [[Alexandra Brintrup]] can help, rather than duplicating effort already completed - AMRC has significant expertise constructing complex knowledge graphs, particularly through the Inka work. Suggested initial collaboration areas: managing uncertainty in the supply chain, accessing valuable supply chain data sources, and utilising link prediction (multiple supply chain applications). Need to establish clear objectives before determining collaboration benefit.

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
