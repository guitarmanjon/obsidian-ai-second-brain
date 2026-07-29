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

- 11th November: [[Siemens]] VIPs visiting - plan to look at [[Sinumerik]] Edge and [[Sinumerik]] One on the Hella machine. [[Tom McCready]] and the AMRC Board involved. A decision is needed on what to take from [[Sinumerik]] Edge through to Industrial Edge. [[Tim Gears]] also involved.

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
