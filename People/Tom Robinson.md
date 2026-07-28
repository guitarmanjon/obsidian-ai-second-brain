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

- **SMR**: [[JH]] already involved. Lots of small projects around £50k each, but needs oversight for bigger work packages. [[HB]] should have talked to NAMRC about this recently. Another small project with [[Tom Robinson]] is on its way.
- Logistics - not a key consideration but there will be thought (at R-R?) into requirements from the supply chain on pre-packaged assemblies, how these are packaged to minimise unpacking time. [[Tom Robinson]] (TR) mentioned the BMW motorcycle plant in Germany with automated logistics inside the factory.

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
