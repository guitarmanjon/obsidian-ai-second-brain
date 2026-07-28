---
date: 2019-02-26
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- AMRC: [[JS]], [[OO]], [[SO]], [[LB]]
- Siemens: [[David Cant]], [[Tilman Resch]], [[Mark]] (Coombs?)

## Purpose

> [!info] Why did this meeting happen?
> A discussion with Siemens about their Edge device, its data capture capabilities, MindSphere onboarding, and available apps for machining process quality, machine health, and process efficiency.

- ...

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- Apps deployable to the Edge device:
	- MindSphere is currently required for onboarding apps to Edge devices; may be possible within the next 12 months to deploy from an on-site device connected to MindSphere. Connection to MindSphere is only needed for app deployment - MS can be disconnected afterwards.
- 1000 data points per second available, with 100 variables to choose from - described as unique to Edge (not possible any other way, maybe via Profibus or similar).
- App targeting areas:
	- Machining Process Quality (100% in-process quality control) - Analyse MyWorkpiece plots data over a model of the part; /Monitor for real-time monitoring with examples of defects shown via data; /Vision - trained AI system looking for defects/anomalies based on a vision system.
	- Machine health (100% technical availability) - Analyse MyMachine; /Condition gives a "mechanical fingerprint" - relies only on data within the controller (not sensors installed by the machine tool builder), giving 5 variables (stiffness, friction, backlash, quadrant error, signature), with the possibility to integrate external sensors. Seen as heading towards predictive maintenance, and an opportunity for machine tool providers to build a service around this.
	- Process efficiency (100% leverage of available machining knowledge/capability) - Optimise MyMachining; /Trochoidal is described as the most advanced trochoidal milling process, with CAM functionality at the controller.
- Languages for app development: Python, Java, and other common languages. Developer package not included in current pricing - would be desired; Dynamics interested in controller feedback.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- ...

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- Person - (Action)
