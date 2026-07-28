---
aliases:
  []
team: AMRC / IBM
role: Tech lead for AI
tags:
  - People
last updated: 2026-07-27T00:00:00
---

## Overview

> [!info] Who is this person and how do you work with them?
> Capture context that helps you be a better person for them: where they're from, what they're working on, communication preferences, time zone, interests. Include anything you'd want to remember before a 1:1 or collaboration.

- Tech lead for AI, does a lot of machine vision work and covers ML ops; involved in early IBM AC922 hardware/software work.

## Notes

> [!tip] Ongoing observations and context
> Things you've learned about them over time, their priorities, working style, areas of expertise, or personal interests. This builds a richer picture for stronger relationships.

- ...

## Interactions

> [!note] Journal entries involving this person
> This table auto-populates with any Journal entry that mentions this person via `[[Name]]`.

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

> [!tip] Related links
> Link to their team, shared projects, or relevant Areas.

- ...
