---
date: 2022-11-22
tags:
  - Journal
  - Meeting
---

## Attendees

- [[Rob Poyner]] (organiser)
- [[Chris Varnom]]
- [[NH]]
- [[Charles]]
- [[Adrian Hirst]]

## Purpose

- Siemens visit to discuss the Brownfield Connector, connectivity architecture, and AGVs/SIMOVE.

## Key Discussion Points

- Chris Varnom - Brownfield Connector (BFC):
  - [[NH]] gave an overview of BFC.
  - BFC in use at AVC, described by [[Charles]] - replicating aerospace production methods including software, PLM, MES etc. (a "mini-AMRC"), with software and automation teams close by.
  - Brownfield Gateway used at AVC to connect all machining and equipment.
  - Link into R-R SMR via Roger Hayes and another Roger.
  - Siemens can assist with security and switching if needed.
  - [[Chris Varnom]] noted there may be separate instances of connectivity for NAMRC and AMRC - need separation sometimes but also collaborative spaces.
  - Question of control of the data (shared, segregated to projects/customers, etc.) - could Databricks help here?
  - Key question: how can BFC be installed to have as wide connectivity as possible across AMRC?
    - [[Chris Varnom]]: AMG have a single network, segregated by individual VLANs, avoiding connecting machines directly to the corporate network due to outdated OS/security. Gateways used instead (per Factory+); a VM could be hosted centrally that all sites access.
    - [[NH]]: move away from gateways to a managed switch to reduce management costs (each gateway currently has its own management overhead).
  - Opcenter needs to be involved in the demo/testing at AMRC as it's a core part of SMR work.
- [[Adrian Hirst]] covered AGVs/SIMOVE.

## Decisions

- None recorded.

## Action Items

- [[NH]] - (Explore moving from gateways to a managed switch architecture)
- [[Chris Varnom]] - (Advise on network segregation approach for AMG/NAMRC/AMRC)
- [[Rob Poyner]] - (Ensure Opcenter is involved in SMR demo/testing)
