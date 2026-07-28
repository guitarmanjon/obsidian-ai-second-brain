---
date: 2018-10-15
tags:
  - Journal
  - Meeting
---

## Attendees

- ...

## Purpose

- ...

## Key Discussion Points

- Measurement of part:
	- Need to capture pre-finish size for analysis of tool deflection error and machine error.
	- No ideal solution currently exists for part inspection on STC; MSP is installed there and could provide a solution.
	- Future project idea: how can on-machine inspection be used to quantify machine tool error? Related to [[Tim]]'s work.
- Reporting:
	- "Live" data needs clarifying - will be used to mean time-series data; the system will not give real-time displays.
	- [[TMc]] - key things to monitor include spindle power, force, etc.; if these exceed e.g. 60%, this should be reported.
	- Characterisation of vibration performance - max value of whole process, number of occurrences exceeding a given value.
	- Summary report refers to one tool, one program only.
	- Alternative option: a report per product using CAD visualisation, showing vibration/force etc. on the model (flagged as future work).
	- Initial use case is new product development, giving feedback to programmers for the next test part; future uses could include production validation and monitoring.
	- Viewing Process Data: torque and power should be included when a fault has occurred; comparisons of programmed vs actual spindle speed, commanded vs actual feedrate, simulated vs actual torque, simulated vs actual chatter.
	- Synchronisation of simulated and actual data - always an offset due to machine kinematics (real data always longer); question over whether spatial data can be used to align the two data sets.
	- Fault detection to be left out for now - focus on presenting and aligning data first; fault detection to come later.
	- Option to upload simulation data for comparison, with reporting tool handling alignment (e.g. aligning xyz power real vs simulated; calculating distance travelled to align).
	- For now: scope limited to one program/one tool, data alignment, and plotting of force, vibration, positional, torque, feedrate, speed data.
	- Video: cannot store all video data - question over whether this should be a time-limited feature (e.g. stored for a week then deleted, with a download option); file naming needs consideration for download. When fault detection arrives, video can be stored specifically for faults.
- Live simulation:
	- Question over whether live, real-time reporting/visualisation of data is wanted (e.g. cRIO performing simulation that MATLAB currently does) - noted as two different systems.
	- Issue: simulation data might need to be uploaded twice - once to cRIO for simulation, and again to the web service for reporting.

## Decisions

- Fault detection will be left out of the reporting tool for now, with focus on presenting and aligning data first.
- Initial reporting scope limited to one program/one tool with data alignment and plotting of force, vibration, positional, torque, feedrate, and speed data.

## Action Items

- Person - (Action)
