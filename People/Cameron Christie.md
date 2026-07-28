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

- Initial call to explore whether AMRC could deliver a 5-day assist to help DataForm Lab (an SME in the construction supply chain) with a Data & AI Strategy, funded by a small (~£2k) budget tied to an EU grant that needs to be spent quickly. [[Cameron Christie]] brokered the introduction via Slack on 22 May, asking [[JS]] to speak with Eva.

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
