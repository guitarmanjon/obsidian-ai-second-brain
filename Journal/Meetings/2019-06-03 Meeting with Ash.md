---
date: 2019-06-03
tags:
  - Journal
  - Meeting
---

## Attendees

- [[Ash]]
- [[Windo Hutabarat]]
- [[Mike]]
- [[Boyang Song]] (unfortunately had to leave for another meeting)

## Purpose

## Key Discussion Points

**Ash overview**
- Joint research centre role with Airbus and RAE.
- Team moved up from Cranfield with Ash; backgrounds in manufacturing engineering and computer science.
- TRL 2-3 level of work, split into three research areas: digitisation, real-time simulation (using live shop-floor data), and multi-level optimisation (new techniques for optimising process parameters).
- Key strength is using live data to update processes.
- Early work used machine logs for inspection (manufacturing instruction data + actual data) - referenced Tiwari et al. 2008, "Automated inspection using database technology within the aerospace industry".
- Digitisation of human-workpiece interactions: digitising human actions and objects/environments, time-correlating the two to identify patterns.
- In-process inspection and audit: machine vision for human interactions and machine learning; fits well with non-geometric validation. Assembly-focused currently, but Ash interested in other manufacturing avenues (e.g. machining). HMMs used extensively in the group. Machine vision also used to influence operator behaviour, correcting assembly in real time.

**Windo Hutabarat - Notes**
- Hand-held semi-automated drills - data extraction capability through electrification of drills.
- Geo-location being used instead of in-process monitoring (latter de-prioritised at Airbus).
- Digitisation of drilling machines to match hole quality with process data; matching data to holes is currently a manual geo-location process. Referenced Veselovac 2017 - process monitoring strategy for drilling and broaching.
- Follow-up work: human activity capture, tool tracking, workpiece location, work action location. Data management also a significant area of work.
- Database design for structured data management; tracking tool wear progress and identifying hole type/correction by tool wear.

**Mike - Notes**
- Automated paint removal on fan blades - IUK project with GE Aerospace Wales (GE90 MRO), Global Robots, and TUoS.
- Replacing a human process that is time-consuming and limited by human time (RSI consideration).
- Tracking/classifying material removal - can't remove too much or the blade gets damaged.
- Vision system for monitoring paint removal (blob detection, threshold for primer, histogram).
- Location tracking project using Bluetooth within a GE facility; wanted to extend this using location data alongside inspection/process data.
- Upcoming work on electric machine manufacture - capturing data throughout the process to inform next steps; closely related to non-geo validation.

**Wrap-up with Ash** - no notes captured.

## Decisions

- ...

## Action Items

- Person - (Action)
