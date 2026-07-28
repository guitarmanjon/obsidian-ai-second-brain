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

- I4.0 stream: [[Tom McLeay]] can lead the session; need to identify a lead partner (ask [[Sam Turner]]); lead partner must know the IUK application needs to be turned around within 4 weeks of this meeting. Partners need to be genuinely interested and understand how it applies to their business. MI from S3 SoW wording to be used as a guide.

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
