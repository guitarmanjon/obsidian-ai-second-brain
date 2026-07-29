---
aliases: []
team: University of Sheffield Library / CMI
role:
tags:
  - People
last updated: 2026-07-25T00:00:00
---

## Overview

- From the [[University of Sheffield|UoS]] Library and CMI. Interested in literature data extraction and inspired the sandbox-for-finetuning-[[LLM|LLMs]] idea. See [[2025-09-23 CMI AI Enabled Research]], [[2025-10-01 CMI and RSE]].

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
