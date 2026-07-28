---
source:
tags:
  - Resource
  - Technical
last updated: 2026-07-01
---

## Summary

- ...

## Key Takeaways

**Foundations** - contrasts contact-based vibration/Acoustic Emission (AE) sensing (intrusive, costly to scale, requires physical bonding to the machine) against airborne audible acoustic monitoring (non-intrusive, wide-area, but real-world noise and operational-shift misclassification are the core challenges). AE (high-frequency elastic stress waves, PZT ceramic sensors, extremely localised) is technically distinct from airborne audible acoustics (much wider spatial coverage, captures both machine sound and human speech).

**Signal representations** - raw waveform is poorly suited to deep learning; the field has moved through STFT → Log-Spectrogram → Log-Mel Spectrogram (the current standard input for both ASD and ASR, chosen because it matches the logarithmic sensitivity of human hearing). **Air-particle acceleration** (a vector quantity, unlike scalar sound pressure) is highlighted as a key breakthrough for isolating a target machine's emissions from background noise even when background noise is far louder than the target signal. Acoustic cameras/beamforming (microphone arrays + optical cameras) enable real-time spatial sound-source localisation, aided by Spectral Kurtosis for isolating impulsive/transient fault signatures. Named commercial hardware: HertzInno HA3, Crysound CRY2623M, Scan&Paint 3D, ClearOne BMA 360DX.

**Unsupervised Anomalous Sound Detection (ASD)** - framed as unsupervised because anomalous/failure data is inherently scarce and expensive (sometimes destructive) to generate; systems train only on normal operating sound. Architectures reviewed: Autoencoders/Convolutional Autoencoders (reconstruction-error baseline); Self-Supervised/Contrastive Learning (BYOL-style embeddings + outlier detectors like Local Outlier Factor/GMM); Audio Spectrogram Transformers (current state of the art, via global time-frequency self-attention). The annual **DCASE Challenge Task 2** has driven the field's progress: 2020 baseline ASD → 2021 domain-shift robustness → 2024 attribute-sparse generalisation → 2025 first-shot/zero-shot ASD on entirely unseen machine types. **Tiny-AST** is a compressed, edge-deployable AST variant trading a small accuracy hit for a large drop in parameter count/GFLOPs, enabling deployment on low-power shop-floor IoT hardware. Explainable AI (SHAP, Integrated Gradients, Grad-CAM) is increasingly embedded into these systems to build operator trust in anomaly alerts.

**Tacit knowledge capture** - the same acoustic infrastructure used for ASD can double as a tacit/tribal knowledge capture system, important given the "crew change" risk as experienced operators retire (traced back to Michael Polanyi's 1966 principle "we know more than we can tell"). The core technical barrier is ASR accuracy in very noisy shop-floor conditions - naive noise-suppression filters create a **"noise reduction paradox"**: visually cleaner audio but *worse* word-error-rate, because the filters strip out real speech cues along with the noise. Solutions reviewed: Observation Addition/bridging modules (blending noisy + enhanced audio back together); joint pre-training of speech-enhancement and self-supervised ASR backbones (Wav2vec 2.0, HuBERT); cross-modal audiovisual fusion (lip-reading) as a noise-immune fallback.

**Key research pioneers/institutions cited**: University of Sheffield's SPandH group ([[Jon Barker]], [[Guy Brown]], and the Consistent Confusion Corpus project); AMRC/Factory 2050, including [[Jon Stammers]]'s own PhD background in automated urban/natural audio classification; AMRC's Design and Prototyping Group's work with Wilson Benesch on acoustic-optimised additive-manufactured structures; [[David King]]'s MediTel telexistence robot; AMRC Cymru's AR-headset ventilator-challenge retraining work. Dynamics Research Group, MACE - [[Keith Worden]] (SHM pioneer), [[Nikolaos Dervilis]] (data-centric ML for structural dynamics), and an XAI team (M. Nadeem Ahangar, Z. A. Farhat, [[Aparajithan Sivanathan]]) applying Grad-CAM/SHAP to acoustic anomaly-detection models. Global DCASE community leaders: Yuma Koizumi (NTT/Google), Yohei Kawaguchi (Hitachi, creator of the MIMII dataset), Keisuke Imoto (Doshisha, co-creator of ToyADMOS).

**Strategic recommendations synthesised at the end of the review**: deploy fixed, wide-angle MEMS microphone arrays near critical rotating equipment; use Tiny-AST-class edge hardware for on-machine anomaly detection; layer Grad-CAM/SHAP explainability into operator-facing alerts; use joint speech-enhancement/ASR pipelines with wearable microphones and voice-activity-triggered recording for speech capture; integrate conversational LLMs with connected-worker platforms (e.g. Augmentir's "Augie") to turn verbal troubleshooting explanations into structured SOPs.

## See Also

- [[Industrial Acoustics Notebook - Strategic Pivot Plan]] - the strategic pitch this literature review supports.
