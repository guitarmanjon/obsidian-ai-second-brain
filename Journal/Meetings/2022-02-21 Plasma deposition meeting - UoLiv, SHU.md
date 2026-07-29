---
date: 2022-02-21
tags:
  - Journal
  - Meeting
---

## Attendees

- [[SB]]
- [[JS]]
- [[Arutian Ehiasarian]] ("Harry") - plasma expert, plasma coatings on thin films, [[Sheffield Hallam University]] ([[Sheffield Hallam University|SHU]])
- [[James Bradley]] - leads the technological plasma group at Liverpool

## Purpose

- Discuss the potential to apply [[AI]] / [[Machine Learning|ML]] to plasma deposition, and scope a joint proposal.

## Key Discussion Points

- Not a lot of modelling currently available for plasma deposition.
- Overview of proposal:
  - Automated batch coating system covering 10s-100s of parts.
  - 4 plasma sources; monitoring in place, PLC controlled with PID loops across many areas of the machine.
  - Holistic data / monitoring is not currently taken into account - what's happening in the plasma itself is not monitored, an area [[James Bradley]] is working on.
  - WP1 - collect a dataset for training from the plasma and from the coating. Ionbond are on board and already implementing sensors on their machines via an IUK project.
- [[James Bradley]] - thin films develop over many hours, but very fast changes in the plasma may affect the thin film; thin films are currently only ever inspected after the process is complete.
- Rapid changes in plasma can cause defects in the finished coating (e.g. arcs), though arc suppression already addresses some of this.
- Physics-based theories link coating quality with plasma performance - idea to use physics knowledge to guide [[Machine Learning|ML]] model design.
- [[James Bradley]] wants to put sensors into the plasma, which may itself affect the plasma - not necessarily desirable in an industrial setting. Preference to link new sensor readings back to existing sensors instead.
- Possible route to funding via the Manufacturing the Future call.
- Case for support and other docs shared via OneDrive link.

## Decisions

- None recorded.

## Action Items

- None recorded.
