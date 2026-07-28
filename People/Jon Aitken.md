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

- [[Jon Aitken]] runs undergraduate and MSc projects, and is also involved in group projects across ACSE and General Engineering (7 engineering depts plus bioengineering and aero; 2 years general study then specialise).
- [[Jon Aitken]] already has a project running with [[Daniela]] on robot kinematics.

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
