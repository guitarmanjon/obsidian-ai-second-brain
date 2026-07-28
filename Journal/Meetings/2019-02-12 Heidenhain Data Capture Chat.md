---
date: 2019-02-12
tags:
  - Journal
  - Meeting
---

## Attendees

- [[JS]]
- [[SO]]
- [[Luke B]]
- [[Rob W]] (EngD)

## Purpose

- ...

## Key Discussion Points

- [[Rob W]]/[[Luke B]] currently getting current (amps) data at 1600 Hz through TNC Scope.
- [[SO]]: MTConnect stream is 10-20 Hz; another library gives data at 100 Hz.
- Desire is for collection of near-time data to inform a near-time control system.
	- [[SO]]'s program samples at one interval only (not concurrent processes); 333 Hz is the lowest common rate.
	- 16 channels of data at 333 Hz is possible; drive currents are essential.
- Discussion of what is wanted vs. what can be achieved in the time available - if a variable isn't available, don't spend time investigating further, just move on (brief investigation of programming errors is OK).
	- Need to be mindful of the project delivery Seun has (AI3568D).
- MATLAB will need to be able to stream in the data that Seun's program generates.
- [[SO]] has tested writing feedrate override commands back to the controller - relatively easy, but found the physical override became non-responsive when overriding programmatically. Caution flagged as needed here.

## Decisions

- ...

## Action Items

- Person - (Action)
