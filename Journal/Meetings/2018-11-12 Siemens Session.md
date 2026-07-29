---
date: 2018-11-12
tags:
  - Journal
  - Meeting
---

## Attendees

- AMRC: [[JS]], [[Luke]]
- [[Siemens]]: [[Charles Tivey]], [[Garry Mepham]], [[Gary]] (?)

## Purpose

- ...

## Key Discussion Points

- In relation to [[Luke]]'s slides on NX integration, "Analyse MyPerformance" mentioned by the [[Siemens]] team. Looking on the [[Siemens]] website - Access MyData and Access MyMachine products referenced.
- Data acquisition - [[Charles Tivey]] from [[Siemens]]:
	- PowerLine controllers (old) - data captured through PLC. Develop a PLC block that pulls data through the PLC.
	- [[Gary]] (?) suggested ADAS (Axis DAta Stream) is also an option - applicable to PL and SL controllers. 30 variables in parallel to profinet/bus in real time. High data rate possible - 12 mega baud? 12ms rate? Hardware config needed - Profibus cable/card plugged into PC. Previous experience at AMRC on FTV machine. ADAS also applicable to SL controllers - better functionality.
	- SINUMERIK Edge: box to capture data from the NC, delivers machine data to company network at IRT speed (4ms?). Any programming language can be used to talk to Edge. 2-way comms - pull data, analytics, send back to controller to action. Beta at present; April 2019 for purchase.
- Adaptive feedrate control - [[Garry Mepham]] presented a [[Siemens]] applications example for AFC using "Technology functions". Uses a PID loop implementation to provide adaptive control; PID parameters can be changed by the user to fine tune control. Synchronous Actions are used - "DO" is the key identifier of a SA. Note: this runs on the controller so no option to perform data analysis/manipulation off-machine to influence feedrate.
- [[Siemens]] announced a new feature (compile cycle) called "ACS" last week - adaptive chatter (suppression)?

## Decisions

- ...

## Action Items

- Person - (Action)
