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

- Adaptive feedrate control - [[Garry Mepham]] presented a Siemens applications example for AFC using "Technology functions". Uses a PID loop implementation to provide adaptive control; PID parameters can be changed by the user to fine tune control. Synchronous Actions are used - "DO" is the key identifier of a SA. Note: this runs on the controller so no option to perform data analysis/manipulation off-machine to influence feedrate.

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
