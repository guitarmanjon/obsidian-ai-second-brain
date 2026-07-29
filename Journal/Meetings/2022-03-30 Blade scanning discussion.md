---
date: 2022-03-30
tags:
  - Journal
  - Meeting
---

## Attendees

- [[James Fortune]]
- [[Narcisa]]
- [[Jon S]]

## Purpose

- Assess progress on AV&R automated blade scanning against cycle-time and error-rate success criteria.

## Key Discussion Points

- Cycle time expected to be 6 minutes; [[NP]] has measured it at 10+ minutes. Question raised whether folder creation is causing the delay.
- MCRL 5 trials had around 5 minutes 30 seconds per blade.
- 75% of load via AV&R at around a 6-minute cycle time is the key success criteria - cost of the cell would need to halve for [[Rolls-Royce]] to adopt AV&R if cycle time remains at 11 minutes.
- [[NP]] to speak to AV&R to work out why cycle time has increased.
- "Transferring" appears to add time as well - e.g. Monday with scanning took 0700-1700 for 3 boxes, versus Tuesday without transfer taking 0700-1400 for 3 boxes.
- [[James Fortune]] (JF) to contact AV&R to find out why.
- Error rates looking good for AV&R - people are at about 4% error rate, and AV&R is currently matching this.
- Rolling root cause analysis planned on reasons for AV&R false negatives, targeting an error rate lower than people (1-2% target). False negatives are a key measure of success.
- Question raised on whether errors can be tracked over time to understand how the model is improving/changing.
- Matching AV&R reason for rejection to ground truth to be done with [[Shawn]].
- Question on whether a rework label can be obtained - [[NP]] confirmed this exists for some situations.
- [[Alan Turing Institute|Turing]] DSG with Birmingham University mentioned as a possible connection.

## Decisions

- Target error rate for AV&R set at 1-2%, to beat the human baseline of ~4%.

## Action Items

- [[NP]] - (Speak to AV&R to work out why cycle time has increased above the 6-minute target).
- [[James Fortune]] - (Contact AV&R to find out why "transferring" adds extra time).
