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

- Origins and rationale — [[Peter Drever]] (PD) wanted to get together to understand the origins of the project and where it's got to, and agree a plan for using, advancing, and getting the technology out there. [[Pete Willoughby]] (PW) explained where the idea came from, with two scenarios: demonstrating to the manufacturing community that legacy 5-axis machines don't need to be scrapped (retrofit/rebuild isn't cost-effective for 3-axis machines; refurb costs 50-75% of a new machine, with roughly half the delivery time; green impact is significant — castings for a machine of that size are energy-equivalent to powering ~200 homes); and [[Sam Turner]] (ST) suggesting sensors be added for servitisation, though servitisation itself has a limited sensor suite — hence wanting as many sensors as possible (originally 240, whittled down to a sensible number), tied to performance, availability and quality. Full Monty gives a fully-loaded machine to work with.

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
