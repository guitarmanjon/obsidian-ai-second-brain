---
date: 2018-10-17
tags:
  - Journal
  - Meeting
---

## Attendees

- [[JS]], [[Malcolm Brown]], [[Justin Davies]] (Sandvik)
- On the line: [[DePuy]] - [[Katerina Mouliadou]], [[Eymard Gorman]]; Sandvik - [[Jens Nannen]]

## Purpose

- ...

## Key Discussion Points

- Round table introductions:
	- [[Katerina Mouliadou]] - J&J centre of excellence for manufacturing, manages work with research centres, project management.
	- [[Eymard Gorman]] - [[DePuy]] Synthes Cork, advanced engineering dept.
	- [[JS]]
	- [[Malcolm Brown]] - Head of medical strategy, AMRC.
	- [[Justin Davies]] - Sandvik R&D organisation, manages relationship between internal and external research teams.
	- [[Jens Nannen]] - Sales Manager for Digital Machining, Central Europe, supports North Europe (inc. UK). Used to work for Prometec.
- Project aim: case study using the CoroPlus system. How do we move forward? Funding - membership, other?
- Background: predictive maintenance and digital twin for current machines - DMG, Mazak, 3 and 5 axis, grinders as well. 150 machines at Cork, 2,500 machines world-wide. [[DePuy]] have talked to other vendors for predictive maintenance but none could offer machine integration. Cork site wants to understand what is involved in installing such a system - pain, OEM involvement, etc. - hence the project at AMRC.
- [[Jens Nannen]]: at present, the "plus" side of CoroPlus is available for turning; milling will come soon.
- [[Eymard Gorman]]: interested in sensor selection, experience of using DMG machines, whether 3rd party sensors can be plugged in.
	- [[Jens Nannen]]: currently working with Mazak. Demonstrator machine arriving on site shortly. Have done work with a large automotive partner and deployed a few thousand instances of an early version of the system - cannot re-deploy or amend/update due to shared IP. Planned release system builds on this.
	- Sensors: one on spindle (vibration, located on front bearings, preferred) - if machine has a moving table an additional sensor is needed.
	- Visualisation on controller HMI possible on XP or [[Siemens]] Linux controllers.
	- Comms via field bus - alarms, feed adjustment, etc.
	- [[Eymard Gorman]] asked how decisions are made on a "bad" situation - thresholds set via HMI software (e.g. 170% of spindle speed).
	- Demonstrator for [[DePuy]] planned Q1 next year on a machine at Sandvik. AMRC machine to be equipped with another system early next year.
- [[Katerina Mouliadou]] - not fussed about where the system is demo'd, sooner rather than later preferred. System available for sale in Q1 after the demo.
- [[Justin Davies]]: Hermle machine was a Sandvik strategic decision. Installation on the Hermle at AMRC would not be a full demonstrator, so [[Justin Davies]] is reluctant to demo here - wants [[DePuy]] to see the full solution. [[Eymard Gorman]] agrees the full solution should be demo'd.
- [[Jens Nannen]] asked what [[DePuy]] want to see as a demonstrator, to ensure this can be done at Sandvik.
	- [[Eymard Gorman]]: limitations of package from maintenance perspective; trend setting; alarms; custom features (ball screws, coolant leaks, swarf conveyor issues - chips not breaking, motor burn out).
	- [[Jens Nannen]]: health of axes, spindle, guideways. No facility for coolant or conveyor issues currently. Health check runs every 2 days, informs maintenance of potential issues, guides them to the right sub-system.
- [[Eymard Gorman]] asked whether Sandvik could let [[DePuy]] see when internal verification is complete - [[Jens Nannen]] suggested a live demo of the software once completed, connected to a live machine.
- Machine health is based on NC programs run during non-machining time (fingerprint routines). [[Eymard Gorman]] asked about 70 bar coolant affecting results.
- Most of the conversation focused on the Machine Health Inspector aspect of the CoroPlus system.

## Decisions

- The demonstrator machine will be located at Sandvik's site near Stuttgart, not at AMRC, because [[Justin Davies]] wants [[DePuy]] to see the full solution rather than a partial install on AMRC's Hermle.
- [[DePuy]] and Sandvik have no issue with AMRC attending the demonstrator - likely mid-Q1 next year.

## Action Items

- Person - (Action)
