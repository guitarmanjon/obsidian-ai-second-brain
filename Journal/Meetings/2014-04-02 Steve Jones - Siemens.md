---
date: 2014-04-02
tags:
  - Journal
  - Meeting
---

## Attendees

- [[Steve Jones]] ([[Siemens]])
- [[Adam Brown]]
- [[JS]]

## Purpose

- ...

## Key Discussion Points

- Many methods exist to connect to 840D controllers - it depends heavily on the controller version.
- An 840D controller running on a Windows XP PC has an OPC Server, which should be accessible via the Ethernet port. Other controllers require other access methods.
- [[Steve Jones]] gave an overview of the building blocks of a machine tool and how they communicate - the HMI gets data from the power drives, and this should be accessible via Ethernet, enabled by the OPC Server.
- Looked at several machine tools on the shop floor to check controller versions - the Ecospeed and STC1250 both have an XP back end, so should have OPC Server as a connectivity option.
- Steve couldn't recommend specific products for connecting to OPC Server (outside his knowledge) but said he'd follow up with more information.
- [[Adam Brown]] was trying to connect to the Ecospeed using SinuCom, establishing a connection with the MPI (Multi-Point Interface) to collect drive data. An adapter is needed between a laptop and the MPI (a serial interface) - Ethernet-to-serial adapters exist for this.
- Referenced an email with further detail (inserted from an Outlook .msg file).

## Decisions

- ...

## Action Items

- [[Steve Jones]] - (Follow up with recommendations for connecting to OPC Server)
