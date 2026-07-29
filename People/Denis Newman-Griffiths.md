---
aliases:
  - Denis
  - Denis Newman-Griffis
team: University of Sheffield
role: Theme Lead, AI-Enabled Research (AI for Health)
tags:
  - People
last updated: 2026-07-28T00:00:00
---

## Overview

- Pronounced "Den-ee", uses they/them.
- [[University of Sheffield|UoS]] contact working on compute/tools and [[AI]]-enabled research - on-prem/[[University of Sheffield|UoS]]-owned [[LLM]] work, [[AI]] for Science, and links with RSE. See [[2025-09-23 CMI AI Enabled Research]], [[2025-10-01 CMI and RSE]], [[2025-10-13 CMI - AI and Research Computing]], [[2026-01-08 CMI - AI for E&M Fortnightly]].

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
