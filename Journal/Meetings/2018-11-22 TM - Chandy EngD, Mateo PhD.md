---
date: 2018-11-22
tags:
  - Journal
  - Meeting
---

## Attendees

- Not a meeting - these are notes made against a follow-up email. People involved: [[Thomas E McLeay]] (Tom), [[Elizabeth Cross]] (Lizzy), [[C Wick]] (Chandy Wickramarachchi), [[Mateo Leco|Mateo]].

## Purpose

- ...

## Key Discussion Points

- Note: this page's source text interleaved two columns (JS's own short notes vs. a pasted email) in the PDF extraction. It has been untangled below with reasonable confidence.
- JS's notes on Chandy's EngD work:
	- 3D data sets from Alicona, imported into MATLAB. Coordinate systems not aligned across all samples. Extracting "slices" of tool edge as 2D images, using MATLAB to analyse wear.
	- 17 tool wear features - trying to reduce this to fewer dimensions, possibly PCA or Gram-Schmidt?
	- AE data collected. Inputs - feed, speed, bar #, DOC, insert properties.
- Notes on Mateo's PhD work:
	- Predicting drilled hole depth based on power and vibration, verified with camera if uncertainty too high.
	- Active Learning ??
- Email from [[Thomas E McLeay]] <t.mcleay@sheffield.ac.uk>, sent 19 November 2018 09:15, to [[Elizabeth Cross]] <e.j.cross@sheffield.ac.uk> and [[C Wick]] <c.wickramarachchi@amrc.co.uk>, subject "notes from friday":
	- "Hi Chandy, I just thought it would be worth making notes on some of the discussion points on Friday to see if Lizzy had any thoughts to add. Hopefully we can meet at LVV again to discuss."
	- You explained you had something of the order of 100+ sensor features and 17 tool wear features, but wanted to identify a subset of features to use.
	- Discussed the importance of a method for ranking possible feature subset combinations, to search for the highest ranking set. Noted a heuristic called "merit" (from Tom's own work) which penalises correlating features, sourced from Cho, Binsaeid & Asfour, "Design of multisensor fusion-based tool condition monitoring system in end milling," Int. J. Adv. Manuf. Technol., vol. 46, pp. 681-694, Jan 2010. To use this you would first need to rank every feature individually (Tom used the RMSE of a polynomial fit on each feature).
	- Discussed the alternative of a wrapper method - testing performance of the whole system (e.g. accuracy of a NN predicting a desired response). Possible, but needs more thought on what the system looks like.
	- Two methods of feature subset selection discussed:
		1. Simultaneously select the sensor feature and tool wear feature subsets for best combined performance - large search space, unclear how to do this; would need advice from Lizzy or others with prior experience. Worth keeping in the thesis as future work even if not fully realised.
		2. Independently select tool wear features, then sensor features - identify the best tool wear features first (potentially the most novel part). Flank wear/volume removal are monotonic (shouldn't reduce); other features like angles/radii might not be monotonic. All continuous tool wear mechanisms have "trajectory" - generally a smooth transition through space, sometimes with meaningful sudden events like chipping. Idea: rank a tool wear feature subset by smoothness of trajectory, penalising scatter but not outliers like chipping (needs more thought). Once the tool wear feature subset is chosen, use PCA to show the trajectory. Then select a sensor signal feature subset that best predicts the tool wear feature subset, using a supervised learning model and measuring error; approaches could range from sequential feature selection to GAs - get advice from Lizzy on which way to go.
	- Signed "Thanks, Tom".

## Decisions

- ...

## Action Items

- Person - (Action)
