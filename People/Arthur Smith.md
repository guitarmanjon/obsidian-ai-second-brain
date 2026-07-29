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

- [[Arthur Smith]] (AS): [[Rolls-Royce|RR]] have a component previously used for testing Hermles that covers many operation types - will check if it can be used by AMRC (programming and [[CMM]] work already done).
- [[Arthur Smith]]: how much data should be collected before allowing a system to take control? [[Donka N]] noted large components might need ~10 before a process is agreed fixed, smaller components (blades) potentially ~300.

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
