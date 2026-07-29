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

- **[[Adrian]] update**: challenges with [[Boeing]] understanding the scope of the KTP (and what it is). Request to change supervisor - [[Luke]] has stepped back a bit, still supervising, but [[Olivia Taylor|Olivia]] and [[Katie|Katy]] are taking more of a lead, though they need to understand what a KTP is. Weekly meetings with [[Katie|Katy]] (Engineering Manager). Risk that [[Adrian|AP]] will get dragged into firefighting (mention of [[CMM]] programming) - problems being raised with [[Adrian]] are scraps/short-term firefighting. Vericut work involves cost from [[Rob Carroll]]. Waste billet work has potential to become a simulation project.

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
