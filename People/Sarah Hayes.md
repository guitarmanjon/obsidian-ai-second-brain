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

- [[Tim]]: part of the university's Data Stewards Network (run via the main library, cross-university) - low commitment, monthly meetups plus a Google Chat channel, valuable for making connections (e.g. into research software engineering, useful on the TR project). Also part of a data-sharing working group set up by [[Sarah Hayes]] ([[Digital Twin]] Hub) - a senior, cross-sector group influencing government strategy on data sharing; noted that [[Jon Stammers]] is a prominent figure in that group too.

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
