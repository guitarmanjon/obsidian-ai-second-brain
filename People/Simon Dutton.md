---
aliases:
  []
team: RR
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[Simon Dutton]] ([[Rolls-Royce|RR]]): hydraulic clamps controlled by PLC - is data captured for MI work? Inserts changed ~40 times in a 35-hour program, equating to 7 miles walked by the operator changing inserts - could this feed into TCM? Built-in Hermle process monitoring system outputs a lot of data every 5 seconds - is [[Rolls-Royce|RR]] comparing machines/processes using this data? [[On-Machine Inspection|OMI]] and kinematic data output to Measurelink for SPC analysis. Machine is built to be accurate; [[CMM]] is compensated to be accurate.

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
