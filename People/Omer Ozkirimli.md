---
aliases:
  - OO
team: Manufacturing Technology Centre (MTC)
role: 
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- Ex-AMRC colleague specialising in machining dynamics; now at the Manufacturing Technology Centre ([[MTC]]).
- Involved in strain gauge/dyno diagnostic work - estimated 2-3 days on-site plus 2 weeks off-site analysis for a vibration issue.

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
