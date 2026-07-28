---
source:
tags:
  - Resource
  - Technical
last updated: 2025-10-07
---

## Summary

- ...

## Key Takeaways

**Potential papers**
- Data sources in a smart factory - summary paper reviewing data sources available in a smart factory, how they're accessible, how data can be analysed/presented, adopting a micro-/meso-/macro-level approach.

**Audio / sonification (uncategorised)**
- Audio Digital Twin - apply sonification theory/techniques (audification, auditory icons, earcons, spearcons) to machine tool data at micro (accel/force/PLC) and meso (machine health) levels.
- Sonification of data & augmented reality - AR display of real-time machine data, with sonified streams to flag out-of-tolerance data outside the visual field; could start non-AR; contact ex-colleagues at York (Andy Hunt?); CSound; relevant to finishing-process feedback (ref HSE visit 14/8/2018); question of monitoring level (process/machine/factory) and link to tool wear.

**4 week sprints**
- Tablets for shop floor tours - give visitors/tour guides a tablet showing live data on what each machine is currently doing.
- Machine shop temperature map - network of temperature (and other environmental) sensors across a machine shop to correlate localised temperature with machine operations, vs. a single sensor per machine.
- Probe tool comparison - AMRC has always used Renishaw probes; compare against Blum, Heidenhain etc. and understand why.
- Maintenance system - simple, reconfigurable web-based data entry for maintenance tasks with trending, assigned daily tasks, and notifications if tasks aren't completed; DMMS already has some capture capability; link to Method Statements/SOPs; potential 4-week MVP sprint.

**2 month projects**
- AE sensor dev - does a "shotgun"/parabolic-style acoustic emission sensor exist, to pick up AE signal directionally without needing to sit at the tool tip?
- 5G data capture - inspired by a Digital Catapult presentation; how could 5G enable shop-floor sensor/edge data capture; note the Fraunhofer 5G aerospace production reference.
- Flow meter tool - adapt a tool holder with a flow meter to quickly check through-tool coolant flow rate at the spindle; needs wireless comms/logging.
- Simulation of manufacturing data - generate a simulated data stream (controller/part/fixture/documentation data) based on real processes, randomised within bounds; possible link to Vericut simulation.
- Machine tool simulator - MATLAB/Simulink model of a machine tool to test MHM applications and generate signals comparable to a real machine.
- Vision system for swarf bin monitoring - potential intern/placement project; train machine vision to detect when a swarf bin is full.
- Simulation of sensor data - simulate AE/accel/temp sensor data for a cutting process to compare against real sensor data; link to Dynamics machining simulation as a non-geometric validation feeder.
- Ifm sensors for a machine tool - demonstrate an industrial sensor solution using ifm kit and IO-Link technology.

**Less than 6 months**
- Sandvik Prometec system (CoroPlus) - secure Sandvik ADG funds; trial drilling/milling to see if the system triggers correctly at varying RPM/wear/force; explore process damping using tap-test data as input; ~£30k budget; kit supplied FOC; needs a Siemens controller.
- Tool life monitoring - RFID-tagged tools track actual time-in-cut (read/write to tag), so future tool selection is based on real usage rather than assumed program time; case study: processes reusing the same tool type across ops of varying duration.
- NC program logic - can the PM&C team's "traditional" programming knowledge help implement control logic in NC programs, driven by measurement results, material, tool, and machine health data?
- Working out what feature is being made from machine/sensor data - can you infer whether a pocket vs. plane milling operation is underway from force data (x/y/z) or data that can substitute for it?
- Voice activated paperless shop floor - remove the need to touch a screen for work instructions; combine with Microsoft HoloLens.
- Monitoring kit demonstrator / "PM&C in a box" - flight case with cRIO/DAQ, sensors, ballscrew/linear drive, PLC control, USB link to a laptop for demoing data capture/analysis (recalling the ifm flight-case demo).
- ABG - full literature review of condition monitoring - 3-6 month project, output as a published paper.
- Condition monitoring with NI - potential Innovate project; NI provides hardware/InsightCM; needs a connectivity provider (ATS?), analytics provider, and machine tool OEM partner.
- Chip analyser - auto chip classification/analysis (auto-collect, image capture, AI, chip colour as a process-performance indicator); challenges: chip orientation, automated image capture, building a reference image library.
- Vericut data as input to dataset - following Alexei's TFF demo (28/3/2019) of auto op-sheet generation from Vericut (XML output), stream this into a database aligned with shop-floor machining data instead of a printed Excel sheet, supporting a paperless shop floor (an idea also raised early on by Argenta).

**6-12 months**
- Time synchronisation - how to synchronise all sensors/DAQ across assets - network time, atomic clock, or centrally-coordinated per-asset timestamps?
- Machine monitoring system - influenced by the Safran Snecma SAMANTA project; MATLAB/Simulink based.
- Tool holder sensor + fingerprint - sensor-embedded tool holder with wireless comms for vibration/acceleration "fingerprint" routines and machine tool acceleration assessment; considerations: off-the-shelf accelerometer vs MEMS, circuit design, wireless data rate/protocol (e.g. Bluetooth 5), on-holder computation to reduce data rate; prior art includes Pro-micron Spike and TMAC condition monitoring.
- Temperature measurement in milling - follow-on from ABG2473/B; challenge is controlling/cyclically exciting tool-tip temperature realistically (Hatim proposed a laser-based device); needs accurate calibration via embedded thermocouple; potential EEE collaboration; WP1 identify cyclic thermal excitation method, WP2 test embedded thermocouple across temperature/frequency ranges, WP3 real milling application testing.
- Grab and go monitoring - cloud-based capture/analytics/dashboarding using 5G and Raspberry Pi/Arduino devices, avoiding reliance on local IT infrastructure; question of tapping into existing machine tool data/network without becoming a gateway into the host network.
- XpertRule - decision-tree based approach to machine tool fault diagnosis and troubleshooting.

**Work packages of larger projects**
- Big data / Siemens MindSphere - connectivity across the Factory of the Future, focused on the H5 machine tool given available data; question of how many/which machines to connect, with benefit framed around AMRC's own data analysis rather than production.
- Temperature in milling - with Adam Brown, potential Nikken collaboration; development of accurate milling temperature measurement, including sensor package testing (ifm solutions of interest).
- Complete spindle monitoring system - RPM (eddy current), runout (eddy current), growth (eddy/laser), and vibration signature (accelerometer on spindle top), plus a laser tool setter and strobe system.
- Sampling rate for machine data - how fast can data be pulled from FANUC (FOCAS), Heidenhain (RemoTools SDK), and Siemens controllers? (Luke Berglind.)
- Servitisation to the cloud and analytics - work with MTT and Amido on cloud services; develop in-house data analytics capability or bring in OCF; Oracle Digital Field Service referenced.
- What happens when data visualisation fails? - prompted by the Gatwick airport screen failure incident (BBC, Aug 2018) - worth considering resilience/fallback for data visualisation systems.
- Actual monitoring and control - is there scope to monitor power/force/chatter etc. and actively control feedrate/DOC/speed as a result? Deterministic vs stochastic approach.
- What's the right database for machine tool monitoring data? - using MS SQL 2013 to date but it feels slow; consider Postgres, MySQL, or NoSQL/unstructured alternatives.
- Machine health - predictive maintenance project to support servitisation; review prior predictive-maintenance research and how to predict service/downtime needs.
- Catapult 2020 project ideas: Maintenance 4.0 (£45k, FoF maintenance system, tying into a wider machine/process monitoring dataset); Digital Factory of the Future (£60k desk-based study, extending "FoF - to infinity and beyond", connecting more machines, possible H5 dashboard, +£20k AR demonstrator link to IMG/Design); MaPMoS continued (£75k, possible IMG/ML research link); Full Monty dashboard (£60k, further development of existing Full Monty dashboards/extended datasets).

## See Also

- [[UKRI FLF and EPSRC Fellowship notes]] - the more developed research-fellowship proposal that grew out of several of these ideas (NLP/tacit knowledge capture, data science strategy).
- [[2017-08-31 Machining group strategy session in KTC]] - EngD project ideas discussed at the same time as several of these entries.
