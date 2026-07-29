---
date: 2019-06-11
tags:
  - Journal
  - Meeting
---

## Attendees

- [[JS]] (AMRC)
- [[Hatim Laalej|HL]] (AMRC)
- [[SO]] (AMRC)
- [[Nick Corner|Nick]] (AMIDO)
- [[James]] (AMIDO)
- [[Andrej Burger|Andrej]] (AMIDO)

## Purpose

## Key Discussion Points

- Current implementation: Telemetry --> IOT Hub --> Landing Zone --> Data Factory --> Staging Data Lake, with a branch to Events Hub --> Stream Analytics (opening up real-time monitoring, machine learning, [[Power BI]], etc.).
  - Data Lake Analytics has been deprecated; AMIDO investigating alternatives/pricing and will feed back a recommendation.
- Terraform: replicates provisioning of [[Azure]] services, stored on GitHub, open source, run locally; requires an [[Azure]] account with appropriate service availability (Terraform uses credentials to provision).
- GitHub: [[Seun]] to set up an academic account.
- AMRC [[Azure]]: once set up, Terraform will make transferring ownership/set-up easier.
- Data storage: reviewed JSON format and timestamping. [[Hatim Laalej|HL]] noted might need to capture at 1Hz because [[MQTT]] conversion takes a long time, though IOT Hub should handle an immediate data transfer.
- Data Lake Analytics alternatives: options include SnowFlake, HD Insights, [[Azure]] DWH - [[Amido]] to review for cost/usefulness.
- Documentation: Confluence/Atlassian, convertible to PDF for upload to [[Windchill]]; will include setup guidance.
- [[Amido]] team planning to travel up on 20th June ([[Steve Jones|Steve]], [[Nick Corner|Nick]], [[Andrej Burger|Andrej]], [[James]] attending).
- [[Machine Learning]] approach: any AMRC prerequisites? [[SO]] asked whether [[Azure]]'s out-of-the-box algorithms work with AMRC's data and what's possible - if data is in the Lake, Data Factory can format it for the Analytics tools.

## Decisions

- ...

## Action Items

- [[Seun]] - (Set up an academic GitHub account)
- [[Nick Corner|Nick]] - (Communicate with Robin on requirements for Data Lake Analytics alternatives, copying AMRC in)
- [[Andrej Burger|Andrej]] - (Review Data Lake Analytics alternatives - SnowFlake, HD Insights, [[Azure]] DWH - for cost and usefulness)
