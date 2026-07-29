---
date: 2026-06-12
tags:
  - Journal
  - Meeting
---

## Attendees

- [[Jon Stammers]] (attendee). Speakers noted below.
- Note: transcribed from handwritten notes taken on the day (10-page notebook). A few speaker/company names were hard to read with full confidence and are flagged inline.

## Purpose

- Jon attended the RAAIS [[AI]] conference (12 June 2026) - a series of talks and firesides on frontier [[AI]], world models, robotics, and applications of [[AI]] in science, medicine, and defence.

## Key Discussion Points

**[[Raia Hadsell]] - Google DeepMind, VP of Research - "Frontiers of Intelligence"**
- Gemma 4 - 10-20B, Claude-scale. Gemma Diffusion - diffusion with text "noise", a 26B model. Text Diffusion enables bidirectional reasoning + self-correction.
- World models: Genie - "Generative Interactive Environments" - promptable inputs to insert new physical elements (text, image, camera roll, Google Street View) - e.g. generating a factory layout.
- Physical Intelligence → Robotics - intelligent general-purpose robots. "Brain + Spine is what makes us fast" - i.e. edge [[AI]] + control located in the end effectors, literally?
- VLA (Vision, Language, Action) → Agent. Frontier work uses scaling laws with internet-based data and Genie world models. Specific training data is still needed for accuracy.

**Speaker from Revolut (name uncertain from handwriting, reads approximately "Nikolay Jovides") - "After the Model - Time to Think..."**
- Operational Model for [[AI]] development: Researchers, Builders, Operators & Compliance - the challenge of trying to cover all of this with one person. Builders want something usable handed off from Researchers, ready to be turned into an operational thing.
- Compliance includes "data sovereignty" - question of whether this should be surfaced earlier; explained as being about keeping data within permitted regions.
- Moved from Tools to a Platform - the platform includes an org chart.
- Fellows / Q&A: the frontier model is probably the wrong default choice - often over-provisioned, so costs are high; question raised on whether there's enough guidance available on choosing a model for a given task.
- Approach to R&D: Data Access and [[AI]] Tools kept as separate but interlinked streams.
- AIR / Q&A: HITL (human-in-the-loop) - sometimes humans don't respond, aren't available, or make the judgement unsafe - referenced an NHS-related question.

**Superhuman Scientific Discovery - [[Roberta Raileanu]], Google DeepMind**
- [[LLM|LLMs]] currently plateau before humans do.
- Question: is this "discovery", or just creating new links between existing ideas? → current [[LLM]] "discovery" is based on the past, picking out links rather than genuinely creating new ideas.
- Framed progression as: Discovery → Open-Ended Discovery → Accelerated [[AI]] Discovery, underpinned by RL → Divergent Search → Meta-Learning (referenced "More 37" and "[[Machine Learning|ML]] Gym" - photo taken of the slide).
- Referenced the book "Why Greatness Cannot Be Planned" (Stanley & Lehman).
- [[AI]] can hill-climb, but can't yet choose new exploration paths or propose new problems / make conceptual leaps.
- Fitness is usually based on "performance", but what if other measures were used instead (photo taken of an example slide).
- Meta-learning → "Disco Bench" - a task-generation framework for [[AI]] research tasks.
- Open question raised: is there a risk of missing the "side quests" that random exploration leads to, that could lead to new discovery - will people lose their creativity in research as a result?
- Interesting audience question on distilling down human creativity.
- Reference noted: "Breakneck" - Dan Wang (book).

**[[Ted Moskovitz]] - Anthropic - fireside chat**
- Leads the "Science of Scaling" team.
- Audience question (name uncertain from handwriting, reads approximately "NL Race"): how do you ensure models don't go rogue? → [[LLM|LLMs]] monitoring prompts and responses, effectively supervising conversations.

**Jeff [[Hawke]], CTO - Odyssey**
- Pioneering work in world models. Breaking "world models" down into: "world models" proper (how the world evolves), spatial intelligence (how the world appears), behaviour models (how to act), and proxy world models (an abstraction of the world).
- Starchild-1 - multimodal (audio + video) - joint generation of audio and video remains a challenge.
- Agora-1 - generative interactive worlds, built using a game engine (referenced as "Agora Goldeneye" in the notes).
- Aside: a lot of overseas (mostly US) speakers at the conference - noted UK sovereignty for [[AI]] research as a point worth considering.
- PROWL - learning from experience; Minecraft used as a test case; framed as an RL agent.
- Odyssey's models are roughly at a "GPT-2 era" stage currently, aiming for "GPT-3 era" - i.e. the point where models are ready for commercialisation. Odyssey currently in an R&D phase.

**ElevenLabs - "Optimise to Scale" - [[Agelos]]**
- Serving more users on a fixed level of GPU.
- Scribe (ElevenLabs product).
- Token cost = compute + memory.
- Moved from serving one user per GPU to 70 users per GPU (at present).

**[[Vivek Natarajan]] - Google DeepMind - "Accelerating Science + Medicine with Collaborative [[AI]] Agents"**
- Co-Scientist: builds on history from Med-PaLM and Med-Gemini. Contrasts System 1 vs. System 2 thinking - the latter is slower, deeper, and finds new ideas. Now taking a multi-agent approach where agents play off each other - one generates a hypothesis, another challenges it → "idea tournaments".
- Example cited: a breakthrough in antimicrobial-resistance research - the conventional experimental pipeline took over 12 years; Co-Scientist reduced the equivalent hypothesis-generation work to around 2 days.
- Now looking at other scientific challenges - worth reading the Co-Scientist material online. Liver fibrosis example: an anti-cancer drug was suggested by [[AI]] as a candidate for anti-fibrosis use.
- Encoding medical knowledge to make expertise universally accessible - with a noted application to manufacturing, for capturing tacit knowledge. Quote: "we are training the world's most experienced doctor" - though people around the world differ genetically and by where they live, raising a question about how universal that expertise really is.
- "AMIE" (a model) being tested at a medical centre in Boston - safety and trust results described as significant.
- Framed as an [[AI]] co-clinician - a team-mate for medical professionals.

**Conversation with [[Hadrien Center]] (?), CEO of "Alta Ares" (company name uncertain from handwriting)**
- [[AI]] in Defence: the war in Ukraine is where this really started - NATO air superiority did not exist in the Ukraine war for the first time.
- [[Airbus]] has now partnered with this company - described as a shift in behaviour toward partnering with a young company instead of the usual primes.
- Edge [[AI]] is key: computer vision, RNNs; taking live data from radar, cameras, and IR; framed around Detect → Identify → Intercept.
- User experience matters because the people using these systems are working in harsh environments.
- "[[AI]] for Good" - current work is framed as only defensive, saving lives and infrastructure.
- Ukraine framed as an innovation race between Europe and Russia/China/Iran.
- Investment in future defence systems is structurally difficult - in peacetime no one wants to invest, and in wartime it's too late and there's no money.

## Decisions

- None recorded - conference notes.

## Action Items

- None recorded.
