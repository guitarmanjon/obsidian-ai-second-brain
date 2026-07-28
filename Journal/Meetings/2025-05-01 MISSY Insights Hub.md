---
date: 2025-05-01
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[JS]]
- [[TR]]
- [[Dan S]]
- [[Sarah K]]
- [[Jamie]]
- [[John Carroll]] (Architect for Shop Floor)

## Purpose

> [!info] Why did this meeting happen?
> One sentence on the goal of this meeting. What was it meant to accomplish?

- Review Siemens Insights Hub (SIH) plans for MISSY, including deployment targets and technical capability.

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- Intros; [[JMc]] gave a recap overview of MISSY.
- [[John Carroll]] (JC):
  - Don't want to use Databricks as an enterprise platform - "hammer to crack a walnut".
  - Target to deploy SIH to 3 facilities this year, replacing as-is capability in PTC ThingWorx: TBF (Turbine and Blades Facility?), Bristol Lift Works (Defence, OS data into blue zone), and FSG Singapore (most complex use case).
  - Singapore use case has three elements: (1) leverage AI capabilities in SIH for machine health and maintenance, (2) product quality (relating process defects to product defects), (3) a production co-pilot. Heavy reliance on data ingested into SIH; Singapore is complex due to time-series and relational data.
  - Question raised (echoed by [[Tim]]) on confidence that SIH has the right tools yet - uses an AI stack from Azure, a Jupyter notebook environment, a step-by-step model development process (described as very user-friendly), and a co-pilot tool; confidence currently based on videos and demos.
  - SIH has security models to control who has access to what data.
  - Industrial Edge also offers edge capability that Kepware does not, such as deploying edge AI models and Mendix apps.
  - Mindconnect agent has been used to connect data up to SIH - a similar method should exist for Industrial Edge.
  - Industrial Information Hub - a user-friendly way to onboard tags and transform data using GraphQL.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- Databricks will not be used as the enterprise platform for this; SIH is the preferred direction.
- Target: deploy SIH to 3 facilities this year (TBF, Bristol Lift Works, FSG Singapore).

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- None recorded.
