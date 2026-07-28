---
date: 2024-03-05
tags:
  - Journal
  - Meeting
---

## Attendees

> [!info] Who was in this meeting?
> Link to People with `[[Name]]`.

- [[Adam Hammond]] (IBM, speaker)
- [[Gabriele Compostella]] (IBM Quantum, speaker)

## Purpose

> [!info] Why did this meeting happen?
> One sentence on the goal of this meeting. What was it meant to accomplish?

- Workshop introducing quantum computing concepts, hardware, and use cases relevant to manufacturing, presented by IBM.

## Key Discussion Points

> [!note] What was talked about?
> Capture the substance - not a transcript, but the important points, context, and nuance that you'd want to recall later.

- "What is Quantum / Why Quantum?" - [[Adam Hammond]], IBM:
  - Some computing problems cannot currently be solved by classical computing, and won't be solvable by quantum either.
  - Quantum is expected to address advanced simulation, advanced AI (e.g. using a small dataset with a quantum computer to train a model, then running the model on classical computing), advanced optimisation, and advanced mathematics.
  - Quantum is expected to work alongside classical computing (similar to GPUs today) - future systems will include QPUs.
  - Three general application areas: simulating quantum systems (quantum chemistry, material science, high energy physics); AI (better model training, pattern recognition, fraud detection - referencing an HSBC & IBM paper); optimisation/Monte Carlo (portfolio optimisation, risk analysis, loans & credit scoring).
  - Many manufacturing-relevant examples given.
  - IBM hardware: "Condor" chip (1000+ qubits) turned out to be a poor direction - very noisy, crosstalk, difficult to control. Newer "Heron" chip has 133 qubits.
  - Coherence time = how long a qubit stays active before degrading into noise; longer coherence time plus faster "gate time" means more operations can be achieved. Qubits are set using tuned/directed microwaves.
  - Industry rule of thumb: "if you're not using 100+ qubits, you're not doing quantum computing" - otherwise it's "quantum-inspired" computing.
  - Watson X + Qiskit: Qiskit is IBM's Python library; the Qiskit Code Assistant (gen AI) has a VS Code extension.
- "Quantum computing use cases" - [[Gabriele Compostella]], IBM Quantum:
  - Investment in quantum computing is accelerating as the technology matures and business use cases emerge.
  - Linear algebra underpins many use cases. ML and chemistry/materials simulation are nearer-term use cases; optimisation/search and linear algebra are longer-term (per IBM's quantum roadmap).
  - Quantum ML (QML) can identify patterns classical ML cannot (citing Liu et al., Nature Physics 17(9), 1013-1017).
  - Quality control: QML expected to be faster and more accurate than classical ML, potentially lowering warranty costs. Classical deep learning currently struggles with data volume, high false-positive rates, and the need for large balanced datasets. For a limited real-world chemical/informatics dataset, a QML model outperformed classical ML/DL models. Note: QML accuracy gains are dataset-specific - if the problem doesn't benefit from QML's hyper-dimensionality, there's unlikely to be any improvement. Cited Maior et al., IEEE Access 11, showing reduced false-positive/false-negative rates with quantum.
  - Hyundai example: vehicle routing and scheduling optimisation for an electric delivery truck fleet - managing locations, charging stations, time windows and capacity restrictions to minimise distance, time, and number of trucks.
  - Battery design and development also mentioned as an application area.

## Decisions

> [!warning] What was agreed?
> Record any decisions made, who made them, and any conditions or caveats. Decisions are the highest-value output of most meetings.

- None recorded.

## Action Items

> [!example] Who is doing what by when?
> Use the format `[[Person]] - (Action)` for clear accountability tracking.

- None recorded.
