---
aliases:
  - Steven Carter
  - Stephen Carter
team: Rolls-Royce
role: Central Technical Specialist, SMART Factories - Cyber-Physical Systems
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- [[Rolls-Royce]], central Technical Specialist in SMART Factories - Cyber-Physical Systems.
- Contact for Edge capability testing and correlating sensor data to the [[Sinumerik]] Edge device; organised an overview of [[Siemens Edge]] apps; also worked on SMR (Small Modular Reactor) requirements for [[Nuclear AMRC|NAMRC]].
- Note: NOT to be confused with [[Steve Cartwright]] ([[MTC]], [[Rolls-Royce|R-R]] Factory of the Future) - a different person Jon has been in meetings with, also sometimes shortened to "Steve C".

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
