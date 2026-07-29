---
aliases:
  []
team: Kingsbury
role:
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[Scott Smith]] ([[Kingsbury]]): NC capabilities can lead to powerful cycles/programs. Calibration tool is the master reference for everything else on the machine (error stack?). Human error sources: wrong part, wrong program, wrong insert/tool data, incorrect part loading, failure to check tools, forgetting to calibrate probe, uncalibrated manual measuring equipment. Parametric programming is key. RPM fluctuation raised for resonance/chatter control.

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
