---
date: 2018-11-28
tags:
  - Journal
  - Meeting
---

## Attendees

- AMRC: [[JS]], [[Matt Farnsworth|MF]], [[Erdem Ozturk|EO]], [[EM]], [[AB]], [[CS]] (briefly)
- [[Airbus]] Central (St Eloi): [[Emeric Noirot Nerin]] (tech development and maturity for hard metal cutting), [[Florian Versolato]] (online tool wear monitoring), [[Willy Cadet]]

## Purpose

- ...

## Key Discussion Points

- Note: this page's source text interleaved two columns (the day's agenda vs. JS's discussion notes) in the PDF extraction. Both have been reconstructed separately below with reasonable confidence.
- **Agenda:**
	- 12:30-13:00 - Arrival, introductions and overview of [[Airbus]] challenge and requirements.
	- 13:00-13:30 Cutting Technology: [[CAM]] assessment methodology; tooling parameter optimisation.
	- 13:30-14:00 [[Process Monitoring]] & Control: summary of process monitoring and control data capture including automated tool wear development - current state is synchronous capture through Matlab; in development is passive data gathering, reporting and a web-based front end.
	- 14:00-14:30 Cutting Technology: validating virtual machining simulation; analytical approach to cost optimisation; component demonstrators (titanium structural part).
	- 15 min coffee break.
	- 14:45-15:30 Machining Dynamics: application of virtual machining for further process optimisation - both offline and online simulation tools for milling/boring processes; online simulation can be used in monitoring wear and chatter during machining; integrating offline simulation into [[CAM]] software; model-based control applying automatic changes such as spindle speed and feed rate.
	- 15:30-15:45 PM&C - tool condition monitoring discussion on applicability of automotive technology solutions.
	- 15:45-16:45 - [[Airbus]] feedback / draft project proposal outline.
	- 16:45-17:00 - Wrap up, highlight next steps, timeline.
- **Discussion notes:**
	- Focus for [[Airbus]]: reduce milling time and reduce cost of tools.
	- [[Emeric Noirot Nerin]]'s slide: 90% Ti, bit of Inconel and some steel.
		- Machine: machines deviate more and more frequently; aggressive tools or process considered as potential root cause; want to ensure the machine is used in the proper condition/state; new machine next year - Fives?
		- Cutting tools: big spending area; tool life calculated by supplier and assessed during FAI; want to control tool wear/breakage - repeatable wear after each sequence, monitored wear.
		- Process: tool path strategies defined by programmer only; tool working condition proposed by tool supplier and chosen by methods dept and/or programmer (experience based); want milling time to decrease while ramping up process stability.
	- Timeframes: 2019 - proof of concept, TRL 3-4, representative part; 2020 - industrialisation, dissemination across machines.
	- Machines: Starrag STC platform - semi finish and finish - FANUC 31i controllers (not [[Siemens]]); some gantry machines for roughing, newer CNCs recently introduced - MECOF?
	- 13:04 Cutting tech session ([[EM]], [[AB]]): [[CAM]] assessment methodology; tooling parameter optimisation - "Let's find your sweet spot!" ([[Adam Brown]], 2018); automatic tool wear monitoring (13:56).
	- 14:00-14:30 PM&C session ([[JS]]).
	- 14:45 Cutting tech - spike data ([[EM]], [[AB]]).
	- 14:55 Dynamics ([[Erdem Ozturk|EO]]): planning to use [[Sinumerik]] Edge for deploying simulation tools on the controller, integration. Could Edge be used for monitoring purposes? Can apps/trained networks be deployed to the Edge device?
	- 16:00 PM&C - TCM ([[JS]]).
	- 16:29 Open discussion / project proposal:
		- Representative parts - [[Airbus]] have an idea of such a test part. [[AB]] - CoS (cost of sale?) for each platform important.
		- [[Emeric Noirot Nerin]]: tool path strategy as first step - still using dated, tried and tested programs that are stable - how can the process be optimised? Tool wear - hybrid approach of prediction and monitoring. Monitoring - liked the approach of using data for each area of need (operational, [[Machine Health Monitoring|machine health]], process monitoring). Valley of death between industrialised solution and concept - always a risk.
		- Develop a shared roadmap of where the technology could go and how it would be applied in [[Airbus]] SE - TRL 6 technologies?
		- Comparable platform at AMRC de-risks the valley of death.

## Decisions

- ...

## Action Items

- Person - (Action)
