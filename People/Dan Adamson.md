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

- **AutoAlign AI ([[Dan Adamson]], [[Mike Knobben]])**: AI supervisor that interacts with LLMs for safe, secure, reliable, and compliant dynamic interaction with LLMs. Emphasis on "AI Augmented workforce" rather than replacement of people with AI. Context-aware AI examples in wearables that understand a worker's current task context. Multimodal data angle - potential link-up with Hai Ping and UKOMAIN. Very open to R&D collaborations and signposting opportunities.

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
