---
date: 2025-07-09
tags:
  - Journal
  - Meeting
---

## Attendees

- [[JS]]
- [[Jamie McGourlay|JMc]]

## Purpose

- Discuss whether the "Digital Fingerprint" objective (1.3.1: define and demonstrate the equivalence of process data to product assurance) is still valid given changes to the project, and whether it overpromises relative to what can be delivered.

## Key Discussion Points

- Pre-meeting questions: are we still doing this objective given project changes? What is [[Jamie McGourlay|Jamie]]'s understanding of it? Does it promise more than can be delivered? Potential SoW rewording considered: "To develop the Digital Fingerprint for the process which will demonstrate the equivalence of process data to product assurance" - though queried whether this just restates the same thing.
- [[JS]] gave an overview of where things stand; [[Jamie McGourlay|JMc]] was not aware of the SoW amendment being done.
- Asked whether the team is on the path to this objective - [[Jamie McGourlay|JMc]] highlighted the business case is still missing; these objectives were his best guess at what the business might need (building a digital thread with later business use cases) - determining the actual benefit is still an open question within R-R. Digital thread still needs defining in this project.
- Realised the wrong objective had been highlighted in prep - should be "digital fingerprint" not "digital thread", though the discussion remained relevant.
- [[Jamie McGourlay|JMc]] gave an overview of the 60 parts planned for the project. Digital Thread = connection of process data allowing quick determination of which performance space a forging sits within; Digital Fingerprint = the indicators within that data that show where the part sits. When a part is run, it's placed in the performance space according to where its fingerprint sits.
- [[JS]] asked whether the position should be explainable by the data that led to it being placed there - ideally yes, but not all R-R stakeholders think that's important, and there's a question of whether there's enough project time for such analytics.
- [[Jamie McGourlay|JMc]] presented a slide with a power trace showing upper/lower bounds - reminiscent of old Artis systems, though those focused on a single data source whereas this work will use multiple sources. Artis historically generated too much data, filling hard drives and making the system unusable; [[Jamie McGourlay|Jamie]] looking into why Artis isn't back on the table for R-R. Aim here is to avoid moving around large datasets - some sort of down-sampling or coding technique (e.g. TDSC, from JS's PhD days) could help.
- [[Jamie McGourlay|JMc]] has concerns about data coming out of the Siemens Edge system - described as "a bit of a jumble".
- The fingerprint still needs to encompass what makes something "good" at a point in time; if it flags something as not good, it should be possible to dig back into the data to find out why. If the fingerprint ends up being just one channel (due to limited budget), [[Jamie McGourlay|JMc]] needs to know sooner rather than later.

## Decisions

- The Digital Fingerprint objective still stands as-is - no changes needed for now.

## Action Items

- [[Jamie McGourlay|Jamie]] - (Look into why Artis is not back on the table for R-R)
- (Team) - (Consider down-sampling/coding techniques, e.g. TDSC, to avoid moving large datasets)
