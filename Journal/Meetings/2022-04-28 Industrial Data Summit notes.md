---
date: 2022-04-28
tags:
  - Journal
  - Meeting
---

## Attendees

- [[JS]] (attending as delegate/speaker)
- Round table and session speakers noted for follow-up: [[Richard Douglas]] (Technical Project Manager, Rolls-Royce), [[Jonathan Butters]] (Data Scientist, Rolls-Royce), [[Stephen O'Brien]] (Data Scientist, Rolls-Royce), [[Alex Smith]] (Edwards Vacuum), [[Mircea Oprisan]] (Mars), sponsor reps from PEAK and NetApp ([[Russ Segart]]).

## Purpose

- Capture key takeaways from summit sessions on advanced analytics, data-driven decisions, and AI/ML, and note people worth connecting with afterwards.

## Key Discussion Points

**Advanced and Predictive Analytics (round table with Rolls-Royce/Edwards Vacuum)**
- Don't be afraid of failure; start small to demo a capability/value.
- Senior stakeholder buy-in can be difficult - a time- and cost-bound project proposal aligned to a business use case helps, starting small and showing value as the project builds.
- Getting the right data to the right people is a challenge - data engineering is required for all data, but a common data structure doesn't usually exist. Selling the data engineering challenge to stakeholders is hard because it's not visibly interesting to them (they want dashboards and insights), even though data engineering is critical to success.
- Role of a data scientist (JS's own reflection): to do science - developing and testing hypotheses with data, with a business value steer.
- Knocking down hypotheses (smaller opportunities succeeding) is a way to demonstrate value and build buy-in for bigger projects.
- Use cases for ML/AI often lie at the intersection between business units (e.g. plant and supply chain) where non-obvious relationships are revealed by AI/ML, and in removing low-value decision-making from people as a side-product.
- Rolls-Royce example: predictive analytics for engine health monitoring. False positives can be very costly (an engine flagged as failing gets taken out of service, causing flight rescheduling), but false positives are tolerated because a triage process scrutinises results before a decision is made - some FPs still get through.

**Data-driven decisions (sponsored by PEAK)**
- A recurring challenge is deciding what data to capture, and why, before capturing it - go beyond basic OEE metrics.
- Tableau NLP flagged as useful for those new to data analytics, enabling exploration by asking questions in text form.
- Giving people time and curiosity to explore data (even historical) is valuable; app-store level accessibility to data empowers non-experts to explore.
- Sometimes historical "just-in-case" data yields new insights without needing to know why upfront - e.g. Airbus data on drill depth, grip length, and linking the right hole to the right fastener.
- Outsourced vs internal: outsourcing can be expensive; internal engagement is often greater; sustainability of staff/role includes planning for people leaving. LISI used to be a closed fortress but now works with many partners (not just consultants).

**AI and ML (sponsored by NetApp, [[Russ Segart]])**
- Off-the-shelf training datasets aren't always applicable or transferable where insufficient data exists.
- Distinction drawn between analytics (statistical indicators), ML (a collaboration between data scientist and subject matter expert to build a model), and AI (deciding for itself what to do with data).
- Quantity of training data is a common challenge.
- Complexity of data can push towards an AI approach - multivariate analysis lends itself to AI, particularly as interrelationships across many data sources become less clear to human analysts (e.g. impact of one manufacturing process on another, or on in-service data feeding back to manufacturing).
- Machine vision for quality inspection of supplier parts - OEMs are pushing suppliers to do this themselves with robust data capture/transfer methods.
- Culture change is needed so suppliers trust that shared data will be used to improve processes, not against them - e.g. Airbus example of finding supplier variation through their own measurement; if suppliers shared this data instead, it would reduce Airbus's costs with no need to use it against them.

**5-minute idea ([[Mircea Oprisan]], Mars) - performance-led approach to a data project**
1. Define the performance challenge.
2. Identify interventions that impact performance.
3. Identify people and personas involved.
4. Identify tools and models needed.
5. Identify data and tech needed.
6. Smart sequencing.
- Common mistake: jumping straight from step 1 to step 5, or starting at step 5.

**Key takeaways by theme**
- Data collection: imposing clear structure for collection is key; trust is a big factor requiring culture change and collaboration.
- Data collaboration: again culture and people; define use cases and why; inter-company challenges exist.
- AI & ML: justification for use must be clear; complexity of the use case (beyond human capability to comprehend, e.g. multivariate analysis) determines the need for AI/ML.
- Data-driven decisions: knowing where to start is often the challenge; getting the right data in the right place; balancing internal skills vs outsourcing; opportunities exist beyond the shop floor.
- Monetising data: no attendees were really selling data directly; uptime-as-a-service seen as an opportunity; internal monetisation often more important to justify project cost.
- Advanced and predictive analytics: ensure clear questions are formed, be prepared to fail, and start small.
- Information governance: data is tricky to manage (notes incomplete on this point).
- Data strategy: should follow other company strategies; people are key.

## Decisions

- None recorded (personal conference notes, not a decision-making meeting).

## Action Items

- None recorded.
