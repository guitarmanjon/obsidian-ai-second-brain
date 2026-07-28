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

- Skills and training - ensuring the team has people trained up; a one day session with [[Luke Nelson]] on Analyze MyMachine and similar tools.
- Per [[Luke Nelson]] (7 June 2021): Edge devices on WFL/Cincinnati run firmware V3.1, which moved the Analyze MyWorkpiece / Capture4Analysis webserver to the `:5443/amw4analysis` path — the older `:5443/capture` URL no longer works on this firmware.

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
