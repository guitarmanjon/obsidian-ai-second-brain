---
date: 2020-11-25
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[Erdem]]
- [[Rikki]]
- [[Kev Kerrigan]]
- [[Soeren Stelzer]] (DMMC dept, digital solutions software, IoT, ML to the shop floor)
- [[Pete]]

## Purpose

> [!info] Why did this meeting happen?
> A call with Siemens to discuss the Edge product, covering app development/training and data synchronisation challenges with the OWA use case.

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- [[Soeren Stelzer]] has been working on Edge for a couple of years to get more unusual use cases available.
- [[Erdem]] asked about using their own apps on the Edge device.
  - [[Soeren Stelzer]]: an app must be published to be installed on Edge; training is available for how to do this.
  - [[Erdem]] wants to get more than one person onto training - needs to be the right people, not just anyone.
- [[Pete]] - OWA challenge:
  - Synchronisation challenge - missing controller data at present; currently using low rate OPC-UA, would like to use high rate.
  - Also using external devices to validate controller data.
  - [[Soeren Stelzer]]: OPC-UA will not likely go higher than 10Hz.
  - Bi-directional - cannot bring data back in at high rate via the built-in OPC-UA function, but if AMRC develops its own method it can be done.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- ...

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- Person - (Action)
