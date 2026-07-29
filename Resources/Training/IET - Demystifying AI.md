---
source:
tags:
  - Resource
  - Training
last updated: 2026-07-25T00:00:00
---

## Summary

- The source pages include several pasted presentation slide screenshots (Venn diagrams, an [[AI]]-agent architecture diagram, neural-network decision-boundary illustrations, a bias-taxonomy graphic). These are noted below but not transcribed in detail — only the typed notes, headings and captured text are transcribed, per source.
- Sub-sections in the original notes are marked "KM", "RC" and "Myth busters" — kept here as short-form labels since the notes don't explicitly state which initials map to which named speaker (identity resolution left for later).

## Key Takeaways

- **Intro — [[AI]] vs [[Machine Learning]] vs [[Data Science]] vs Deep Learning** (no speaker marker in source)
  - [Screenshot: Venn diagram "[[AI|Artificial Intelligence]], [[Machine Learning]] or [[Data Science]]?", credited "Dstl [[AI]] Biscuit Book"] [[Machine Learning|ML]] = algorithms that help machines improve through supervised, unsupervised and reinforcement learning; a subset of [[AI]] and [[Data Science]]. [[AI]] = technology for machines to understand/interpret/learn and make "intelligent" decisions; includes [[Machine Learning|ML]] among many other fields. [[Data Science]] = collection, preparation and analysis of data, leveraging [[AI]]/[[Machine Learning|ML]], research, industry expertise and statistics to make business decisions.
  - [Screenshot: "What's the difference between [[AI]] and [[Machine Learning]]?" — [[AI]] Agent diagram: Input → Processing Algorithm (using Solution Knowledge = Model + Values) → Output; a separate "Solution Knowledge Creation (e.g. machine learning)" block, driven by a Human via a Desired Solution Requirement, feeds the Model/Values via Output Evaluation Processing and a Solution Update Algorithm.]
  - Four main approaches of [[Machine Learning]]: **Supervised**, **Semi-supervised**, **Unsupervised**, **Reinforcement learning** [screenshot: title-card slide only, no further typed detail on this page].
  - Advantages of [[Machine Learning]]: more automated (learns for itself once training); improves in accuracy and efficiency through training; handles multidimensional data more easily; finds solutions not thought of by humans.
  - Caveat: [[Machine Learning|ML]] machines can only perform the specific tasks they're trained for, but do so with much greater accuracy than a wider [[AI]] application. **BUT** — [[Machine Learning]] still needs instruction from a human, usually in the form of labelled data or some numerical value telling it if it's doing the right thing.

- **KM**
  - [Screenshot: "What is Deep Learning?" nested diagram — [[AI|Artificial Intelligence]] ⊃ [[Machine Learning]] ⊃ Deep Learning. [[Machine Learning|ML]] examples given: fraud detection, marketing personalization, email classification. Deep Learning examples given: image classification, vehicle detection, sentiment analysis.]
  - "Neural Networks are just made up of mathematical functions — no magic here!"
  - [Screenshots: "Historical Evolution of Neural Networks" (spread across two pages) — scatter-plot illustrations showing a single-layer network can only draw a straight decision boundary between two classes, while a multi-layer/deep-learning network can capture a more complex, non-linear boundary (axes labelled Feature 1 / Feature 2).]
  - Advantages of Deep Learning: on average performs better as training datasets increase in volume (most traditional [[Machine Learning|ML]] algorithms plateau); highly scalable; performs a lot of computation in a cost- and time-effective manner; complements other forms of [[AI]]. These methods are ideal for complex predictive problems, but there are still many different architectures to choose from based on the outcome required.

- **RC**
  - [Screenshot: "Where can things go wrong?" — five groupings of failure sources: Software (agent code, training code); Operational use (solution accuracy, ability to cope with unforeseen events); Human-2-machine interface (problem & solution specification, understanding of output); Training Data (correct and unbiased, representative of domain of operation); Machine-2-machine interface (output format).]
  - "[[AI]] Consideration Topics" wheel, with [[AI]] at the centre: **Trust, Robustness, Governance, Interpretability, Diversity, Safety and Security, [[AI Ethics|Ethics]]/Data and [[AI Ethics|Bias]]**. Detail captured per topic:
    - **Robustness** — consistently accurate, validated, verified, and updated with changes in the world.
    - **Governance** — quoted definition: "The objective of [[AI]] governance is to deliver transparent and ethical [[AI]] to establish accountability, responsibility and oversight" — IBM.
    - **Interpretability** — explainability; humans aren't good at expressing their requirements, and many simulated or teaching problems are constrained.
    - **Diversity** — limited range of problems addressed; data used needs to represent the diverse makeup of society; data sets tend to be sourced predominantly from men; limited range of solutions.
    - **Safety and Security** — need to guarantee [[AI]] is deployed in ways that do not harm humanity; needs certification. Also: security of the [[AI]] algorithm itself — [[Machine Learning|ML]] techniques are vulnerable to newer attacks, including **poisoning** and **evasion**.
    - **[[AI Ethics|Ethics]], Data and [[AI Ethics|Bias]]** — [[Machine Learning|ML]] is only as good as the data (need to ensure privacy and security); different types of bias: human cognitive bias, selection bias, sample bias; ethical guidelines needed to align development toward trustworthy and ethical [[AI]]. [Screenshot: "Human Biases in Data" / "Human Biases in Collection and Annotation" reference graphic listing named bias types (e.g. reporting bias, stereotypical bias, group attribution error, confirmation bias, anecdotal fallacy, etc.) — not transcribed in full, per screenshot rule.]
    - **Trust** — usually achieved when methods are explainable, transparent and reliable with clear accountability; people should be made aware that an [[AI]] system is being used.

- **Myth busters**
  - *"[[AI]] is a magic tool that can solve any problem"* — **Incorrect**. It is a tool that can be used for certain problems but has to be tailored to the problem space identified.
  - *"[[AI]] is infallible"* — **Incorrect**. Example given: "cat croissants" — machine learning does not always learn successfully. [Screenshot: grid of cat/croissant image-misclassification examples, with an underlined link labelled "Home | [[AI]] Myths" — link text only, no URL visible in the source.]
  - *"[[AI]] will take over the world"* — **Incorrect**. We are not able to implement broad [[AI]] and still sit within narrow [[AI]] at the moment.
  - *"[[AI]] is pervasive in our society today"* — **Correct**. Examples given: Personal security — image recognition for face unlock in mobiles; Marketing — marketing chat bots; Transport — Google Maps routing; Transport — automated systems in vehicles, e.g. ABS; Cyber security — spam detection; Medical — cancer detection in mammogram images; Finance — fraud detection; Social media — recommendation engines; Shopping — recommendation engines.

## See Also

- ...
