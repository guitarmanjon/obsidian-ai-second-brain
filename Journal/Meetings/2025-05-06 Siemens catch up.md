---
date: 2025-05-06
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[JC]]
- [[JS]]
- [[Rob P]]

## Purpose

> [!info] Why did this meeting happen?
> One sentence on the goal of this meeting. What was it meant to accomplish?

- Catch up on the MISSY programme with Siemens, covering the Industrial Edge/Sinumerik transition and Siemens Insights Hub (SIH) deployment plans (following the MISSY call on 1st May).

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- General discussion around Rolls-Royce (R-R).
- "OneDI Data Collector" rationalises connectivity from Industrial Edge, Brownfield, etc.
- Industrial Edge will soon encompass all connectivity with machine tools.
- Consideration of moving from Sinumerik to Industrial Edge - IPC performance may require new edge hardware as software performance demands increase; Sinumerik systems won't exist in the future.
- Industrial Edge (IE) has Mendix capabilities at the edge, plus AI capability, and offers edge capability that Kepware does not (e.g. deploying edge AI models, Mendix apps).
- Condition monitoring: Senseye integration - question raised on where this has gone within MISSY. Siemens is getting enquiries from Rolls-Royce Civil on machine availability, breakdown etc.
- Mindconnect agent has been used to connect data up to SIH; a similar method should exist for Industrial Edge.
- Industrial Information Hub - a user-friendly way to onboard tags and transform data using GraphQL.
- Separate SIH deployment thread: don't want to use Databricks as an enterprise platform ("hammer to crack a walnut").
- Target to deploy SIH to 3 facilities this year, replacing as-is capability in PTC ThingWorx: TBF (Turbine and Blades Facility?), Bristol Lift Works (Defence, OS data into blue zone), and FSG Singapore (most complex use case).
- Singapore use case has three elements: (1) leverage AI capabilities in SIH for machine health and maintenance, (2) product quality (relating process defects to product defects), (3) a production co-pilot. Heavy reliance on data ingested into SIH; Singapore is complex due to time-series and relational data.
- Question raised (echoing one Tim also asked): confidence that SIH has the right tools for this yet, and what tools specifically. Uses an AI stack from Azure, has a Jupyter notebook environment, and a step-by-step process for developing a model, described as very user-friendly; a co-pilot tool exists. Confidence currently based on videos and demos.
- SIH has security models to control who has access to what data.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- None recorded.

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- None recorded.
