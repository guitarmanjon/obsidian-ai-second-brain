---
source:
tags:
  - Resource
  - IoT
last updated: 2026-07-25T00:00:00
---

## Summary

- Webinar on AMRC's Factory+ framework, presented by Alex and Rikki, 22 September 2021.

## Key Takeaways

- **Industry 3.0 problem**: the traditional PLC → HMI → SCADA → [[MES]] → [[ERP]] chain (devices side vs. applications side) lacks a common namespace or standard way to onboard manufacturing cells, making a "scalable, fully connected factory" hard to achieve.
- **Factory+ prerequisites**: a **common namespace**, a **standard framework for onboarding manufacturing cells**, and a platform that is free (libre & gratis), agnostic, and lightweight — also comprehensive and scalable.
- **Factory+** is AMRC's open-access framework for smart factories, based on modern, scalable technologies. (A slide screenshot of the Factory+ documentation portal was pasted here — not transcribed in detail.) The example architecture connects PLC, [[ERP]], [[MES]], SCADA and a [[Digital Twin]] to a central **AMRC Unified Namespace ([[MQTT]] Server)** via [[MQTT]]/Sparkplug.
- **End-points are nodes** — easy to add because separate nodes are not interconnected to each other; they only connect to the central namespace/broker.
- **Why [[MQTT]] Sparkplug**: **pub/sub** (more efficient — only get the data you want), **report by exception** (more efficient — only send data when there's a change), continuous session awareness, birth and death certificates, persistent connections (always online), firewall friendly (only the [[MQTT]] server needs to be exposed — everything else is a client), automatic discovery, 3x data compression, standardized payload definition, standardized topic structure.
- A benchmark chart compared MB needed to poll minute-resolution data on 389 tags over a 24-hour period: OPC 27.72 MB, HTTP 17.52 MB, Modbus 8.04 MB, [[MQTT]] All 5.88 MB, **[[MQTT]] Sparkplug B on Change just 0.72 MB** — demonstrating the efficiency of report-by-exception. Source cited on the slide: https://cdn2.hubspot.net/hubfs/2335443/Johnathan-Hottell-[[IIoT]]-Protocol-Benchmarks.pdf
- **Factory+ Roles**: Primary Application (SCADA/[[IIoT]] Host), Edge Node (Sparkplug-enabled device or gateway), Device (needs an Edge Node to participate), Secondary Application ([[MES]], Historian, Analytics, etc).
- **Security is layered**:
  - *Authentication* — username/password for clients; credentials hashed and stored securely in a DB backend on the [[MQTT]] broker; client access can be time-restricted or manually invalidated.
  - *Authorization* — access control lists (ACLs) control who can access what and to what extent, preventing data leaks and unauthorized commands; can group topic access by roles/privileges; can invalidate. Privileges include issue global/group commands, update own/group state, participate as node, represent devices, subscribe/read namespace or own group, publish all from group, subscribe/read all states.
  - *Command Control Lists* — ACLs only allow the Primary Application to send commands; other clients request a command be sent on their behalf via the primary app; command control lists let the primary app check who is allowed to command what from whom (DB auth backend to Ignition).
  - *Transport* — [[MQTT]] is built on TCP/IP and inherits its transport security; encrypts data in transit and prevents man-in-the-middle attacks; all Factory+ connections mandate TLS encryption.
  - *Payload* — message payloads can be encrypted for end-to-end security; key shared between producer and consumer; minimal overhead; can be used for multi-tenancy.
- **Cloud connectivity**: the Factory+ namespace can bridge to any cloud provider supporting [[MQTT]] (or similar) due to its decoupled architecture — logos shown for AWS, [[Azure]], IBM Cloud, Google Cloud. Commercial support available from Cirrus Link for AWS using IoT Bridge for SiteWise; bridges to a cloud [[MQTT]] broker or does protocol conversion to a native cloud API; Sparkplug's small, efficient payloads help keep bridging costs low.
- **Data representation** ("How should data be represented?"): Factory+ wanted standardized data models for consistent representation across the organization, reuse of models/configurations between deployments via a central repository, self-describing data to aid visualization/consumption, and an asset administration shell (live data, asset information, CAD, manuals, etc).
- **Re-usable, context-aware data models**: the original Common Data Structures (CDS) were based on OPC UA's Information Models but were not re-usable and non-standard. The new data schemas are **XML-based, re-usable, modular, and self-describing**.
- **Factory+ in operation at AMRC**: 17 cells across the AMRC covering CNCs, PLCs, furnaces, robots, smart tools, AGVs, 3D printers, legacy equipment, and metrology devices; streamlined onboarding of new equipment; 400+ million data points saved; over 15 billion points transmitted; ongoing research into how data can be consumed. (A slide screenshot of a live dashboard/monitoring view was pasted here — not transcribed in detail.)
- **How Factory+ can help**: accelerates access to business insights, intuitive and simple specification, open-access and freely available, brownfield and greenfield compatible.
- **Call to collaborate**: AMRC needs help testing and developing the architecture in an operational environment, and is looking for a handful of willing SMEs to work on small-scale proof-of-concept projects.
- Endorsements quoted: Arlen Nipper (co-inventor of [[MQTT]]) — "I'm pretty blown away at the excellent work you and the team at Sheffield have done ...very impressive!"; Russell Waddell (Managing Director, MTConnect Institute) — "...there are not a lot of end-to-end digital architectures that are comprehensive, tested, and technically feasible for machine shops and discrete manufacturers... So I suggest you get familiar with AMRC's Factory+ framework even if you don't use any of it." (A slide screenshot with partner/customer logos — including Canary, Cirrus Link, Inductive Automation, HiveMQ, Intel, Opto 22, SignalFire, [[University of Sheffield]], and Eclipse — was pasted here, not transcribed in detail.)

## See Also

- [Johnathan Hottell IIoT Protocol Benchmarks (PDF)](https://cdn2.hubspot.net/hubfs/2335443/Johnathan-Hottell-IIoT-Protocol-Benchmarks.pdf) — source cited on the slide for the [[MQTT]] Sparkplug efficiency benchmark chart.
- ...
