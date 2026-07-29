---
aliases:
  []
team: BAE
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[Dave Dawson]]: proposed preliminary work with a base data set to understand the scale of the challenge; suggested this could be a shorter piece of work - 2 shorter projects, one on Montronix, one on [[Probing|probing]].
- Email from [[Dave Dawson]] preceding the call: [[BAE Systems|BAE]] want to use real-time Montronix force measurement data to define grip length measurement, and also investigate [[Probing|probing]] down the hole vector for the same purpose. The telecom's objective was to understand the content of the SoW(s).

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
