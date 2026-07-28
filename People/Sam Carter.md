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

- [[Amir]], [[Rob Skilton]] (UKAEA, robotics), [[Jon Stammers]], [[Sam Carter]] (PhD student)
- Feedback session on [[Sam Carter]]'s literature review presentation on remote handling/teleoperation for robotics in fusion engineering, and discussion of next steps for collaboration with UKAEA.
- Intros: [[Rob Skilton]] - UKAEA, Lead on Robotics for remote maintenance, particularly liaising with low-TRL research & universities, 14 years at UKAEA. [[Amir]] - plenty of experience in remote robotics. [[Sam Carter]] - 4th year PhD, casual worker role at the moment looking at robotics in advanced manufacturing for nuclear fusion.

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
