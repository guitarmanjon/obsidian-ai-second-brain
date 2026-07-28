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
- Intros: [[Rob Skilton]] - UKAEA, Lead on Robotics for remote maintenance, particularly liaising with low-TRL research & universities, 14 years at UKAEA. [[Amir]] - plenty of experience in remote robotics. [[Sam Carter]] - 4th year PhD, casual worker role at the moment looking at robotics in advanced manufacturing for nuclear fusion.
- [[Rob Skilton]]: tactile and haptic feedback are very relevant to nuclear tasks, particularly for reinforcement learning tasks. STEP hasn't really considered the dexterity requirement needed for dismantling and disposal of hazardous parts. World models for contact-rich manipulation tasks could be used to train control strategies with context, helping train for robot dexterity.

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
