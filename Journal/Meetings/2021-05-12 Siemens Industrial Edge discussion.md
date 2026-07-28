---
date: 2021-05-12
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[JS]]
- [[Rob Poyner]]
- [[Nat Hudson]]
- [[Daniel Smalley]] (Dan)

## Purpose

> [!info] Why did this meeting happen?
> Deep-dive with Siemens on the Industrial Edge product, its architecture and openness, and potential AMRC use cases for technical evaluation.

- Understand Industrial Edge's capability and roadmap, and scope a case study for AMRC to take part in the technical release.

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- [[Daniel Smalley]] (Dan) - factory automation lead, UK specialist for Industrial Edge.
- Industrial Edge is in a limited sales release phase - production-ready product on the market, but sales are limited to allow technical evaluation.
- Siemens would like some use cases at AMRC for technical evaluation.
- V1.2 is the latest release; updates roughly every 3 months.
- Siemens purchased a US company (Pixiom?) with 6-7 years of industrial edge development experience - different to, and much more capable than, IoTSuite.
- Industrial Edge is a strategic part of the business, integrated into Siemens PLCs etc., not just an additional box.
- Discussion of Siemens' IoT stack and how open the "open software platform" really is:
  - Can docker images be deployed without Mindsphere? Yes - can be deployed directly to the device.
  - Completely docker-based, managed build with Debian 10.
  - CI/CD supported (Github, Gitlab, integrated API/CLI); App Publisher for deployment.
- Can be run completely on-prem without cloud connectivity, or as a hybrid setup.
- IOT2050 - a Raspberry Pi-based edge PC.
- WinCC comfort panels already include Industrial Edge.
- Profinet IO can act as Profinet master; 1ms updates possible.
- Industrial Edge Databus is MQTT-based; Industrial Edge Dataservice is PostgreSQL - open to all apps for connectivity within the Edge device, with common data models being defined for the data service.
- High-frequency data management of SINUMERIK Edge is not currently supported by Industrial Edge, but there are plans to bring the two closer together.
- Apps possibly developed in Mendix.
- Case study discussion:
  - What are the drivers from GKN, R-R, etc.?
  - Siemens will fund getting a device in and setting up the architecture - AMRC needs to provide the hardware.
  - Common goals, but easily achievable, for an Industrial Edge case study; data modelling could be a target for the case study.
  - Aerospace customers can see this as a good fit and it would showcase the technology, though it's early days and Siemens are actively seeking ecosystem partners.
  - Possible links to Boeing ADG and follow-on work in SFIH.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- None recorded.

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- None recorded.
