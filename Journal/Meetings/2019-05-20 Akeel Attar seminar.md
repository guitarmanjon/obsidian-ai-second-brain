---
date: 2019-05-20
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[JS]] (attendee)
- [[Akeel Attar]] (speaker)
- [[Richard Boyd]] (XpertRule demo)

## Purpose

> [!info] Why did this meeting happen?
> One sentence on the goal of this meeting. What was it meant to accomplish?

- Seminar on intelligent automation and AI, covering practical applications, anomaly detection approaches, and a live demo of the XpertRule Decision Factory tool.

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- Context/history: the "Winter of AI" (1984/5, Lisp and Lisp workstations) was caused by media hype. Advances in deep learning over the last decade are sometimes seen as superseding all prior AI development - this is a fallacy; the approaches complement each other.
- Advice: don't start with algorithms and seek applications - think "Intelligent Automation" instead.
- Automating cognitive skills: sense, monitor, assess, decide, act, collaborate, learn from previous steps. Intelligent bots with automated skills can maintain and improve process/plant performance. RPA = robotic process application. The core tech for intelligent automation has existed for ~30 years - the recent advancement is really around connectivity and sensing.
- Anomaly types:
  - Fault detection: capturing domain expertise (symptoms and patterns, linked to JS's own FLF ideas); time series data isn't ideal for fault detection as slight shifts can be problematic - transforming to freq/T-F domain (wavelets favoured) and using similarity measures (e.g. cosine) can help; images suit deep learning; data records could use deep learning, predictive modelling, or statistical/symbolic predictive models (aggregating past data tag behaviour - average, min, max, gradient - and letting the algorithm decide what's useful).
  - Anomalous performance/conditions: build models of operational norms; use clustering algorithms for norms in process settings/disturbances.
  - "Black swan" situations: can't call it a fault if the situation/combination of factors hasn't been seen before.
- Diagnostic vs predictive: diagnostic measures inputs and outputs in the same time window; predictive measures outputs some time after the inputs. Three approaches to automation: automating the diagnostic skills/decisions of domain experts (relevant given expertise is leaving through retirement); symbolic ML of rules and trees; deep learning networks.
- Deep learning isn't always best: volumes of fault data often aren't available, and models can lack the understanding needed to drive actions - experts don't need big data to spot errors/faults because they have deep experiential/conceptual understanding (e.g. recognising a bicycle upside down, which DL wouldn't inherently grasp). Symbolic learning demoed via a cooling example (decision tree).
- Benefits of symbolic learning (decision trees): transparency - easy to see patterns and links, which instils trust and confidence in engineers/technicians; understanding of risk and opportunity lets experts apply background knowledge to improve/redesign; allows hybrid data/expertise models. DL still excels at image, audio and video recognition where human expert input isn't as necessary.
- Case study - powder milling: decision tree automatically built using machine learning.
- Case study - power station: attributes split into disturbances (uncontrollable) and controllable attributes; after building the model tree, further trees can explore how controllable attributes could be varied to improve the process.
- Case study - North Sea drilling: raised the question of how to decide on tree order (e.g. why RPM sits below mud temperature, and what reversing that would mean) - driven by expert knowledge; interactive symbolic learning combines ML to determine an initial table with expert input to adjust it, testing the impact of adjustments, with data informing on that impact.
- Case study - troubleshooting: combinations/sequences of steps are key, and deep learning/NN are unlikely to work these out given limited data sets; expert input needed, with tree order typically driven by experts.
- Performance optimisation and control: model the relationship between process KPIs and input variables (disturbances and control settings); optimise using a genetic algorithm to derive optimal settings that minimise/maximise a cost function combining KPIs (throughput, energy, quality, etc.); control can be closed-loop or open-loop advisory; trees can be fuzzified to give continuous, optimisable data ("chasing a gradient"). Model transparency was important to the client in this case, so NN wasn't favoured.
- "Machine learning from experts - the forgotten technology": learning from domain experts who can make decisions but can't always explain why ("I can show you how"); experts like giving examples to explain decisions; captured via tables of decisions, exceptions and truth.
- XpertRule demo by [[Richard Boyd]]: Node.js and JavaScript are the engines behind their web-based software, Decision Factory.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- None recorded.

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- None recorded.
