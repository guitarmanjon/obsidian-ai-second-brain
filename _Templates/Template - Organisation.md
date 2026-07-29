---
aliases:
  []
type:
relationship:
tags:
  - Organisation
last updated:
---

## Overview

> [!info] Who are they and how do you work with them?
> Describe what this organisation does, the nature of the relationship (customer, partner, supplier, research collaborator, etc.), and why it matters to your work.

- ...

## Notes

> [!tip] Ongoing observations and context
> Things you've learned about them over time - key contacts, priorities, ways of working, or history with AMRC.

- ...

## People

> [!note] Contacts at this organisation
> This table auto-populates with any Person note whose `team` links back to this organisation, or link contacts manually with `[[Name]]`.

```base
filters:
  and:
    - file.inFolder("People")
properties:
  file.name:
    displayName: Name
  note.role:
    displayName: Role
  note.team:
    displayName: Team
views:
  - type: table
    name: Contacts
    filters:
      and:
        - file.hasLink(this.file)
    order:
      - file.name
      - role
      - team
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      file.name: 420

```

## Interactions

> [!note] Journal entries involving this organisation
> This table auto-populates with any Journal entry that mentions this organisation via `[[Name]]`.

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
> Link to related Projects, Areas, or People.

- ...
