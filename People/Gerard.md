---
aliases:
  []
team: Lisi
role: IT director (uncertain)
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- Lisi. Led the Marmande site development: 6-month data capture trial monitoring machine and process data with Braincube, correlating errors in the final product with line issues, reducing scrappage.

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
