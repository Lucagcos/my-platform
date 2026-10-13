# COMP 451
# Cognitive Walkthrough Rubric

Your grade is based on two component scores:

1. Content
2. Technical Writing Quality

The final grade is the geometric mean of these two scores:

Final Grade = √(Content Score × Technical Writing Quality Score)

Both component scores are expressed as percentages.

The rough draft is required but is not graded for writing quality. Its purpose is to provide evidence of your initial walkthrough reasoning and analysis before outside editing assistance.

---

# Content Score

## 1. Representative Task — 2 points

2 — The representative task is clearly stated and is appropriate for a cognitive walkthrough.

0 — The task is missing, unclear, or too trivial to support a meaningful walkthrough.

---

## 2. Hypothetical User — 8 points

8 — The user is described concisely and includes characteristics that meaningfully affect the walkthrough, such as relevant technical experience, domain knowledge, familiarity with the application, or prior knowledge.

5 — The user is described, but an important relevant characteristic is missing or the description includes substantial irrelevant information.

0–3 — The user description is missing, extremely incomplete, or does not provide enough information to support the analysis.

---

## 3. Cognitive Walkthrough — 40 points

The walkthrough should cover the meaningful actions and decisions needed to complete the task.

For important steps, the walkthrough should make clear:

- what the user is trying to accomplish
- the action the user needs to take
- what the user sees or knows that could lead them to that action
- what the user must notice, understand, or remember
- what feedback the interface provides after the action

Focus on meaningful user actions and decisions. You do not need to document minor physical actions such as moving the mouse or scrolling unless they are important to the usability of the task.

40 — Complete and thoughtful walkthrough. Nearly all meaningful steps, decisions, and feedback are included, and the walkthrough consistently considers the experience of the hypothetical user.

30 — Mostly complete. A few meaningful steps or elements of the walkthrough are missing or insufficiently explained.

15 — Several important steps or elements are missing. At least half of the task is still analyzed meaningfully.

0–10 — Major portions of the task are missing, or the submission primarily describes what the interface does without analyzing the task from the user's perspective.

---

## 4. Analysis — 30 points

The analysis should use the walkthrough questions and the design principles discussed in class to explain why parts of the interface are likely to work well or cause difficulty.

Relevant design principles may include:

- visibility
- clutter
- grouping
- consistency
- conventions
- feedback
- cognitive load
- error prevention and recovery

You do not need to discuss every design principle. Apply the principles that are relevant to the task and interface you analyzed.

30 — Clear, complete, and well-reasoned analysis. Important strengths and usability problems are identified. Relevant design principles are used correctly to explain why the hypothetical user is likely to succeed or struggle.

25 — Strong analysis, but one important issue is missed, insufficiently examined, or not clearly connected to an appropriate design principle.

15 — Several important issues are missed, design principles are applied superficially or incorrectly, or much of the analysis consists of unsupported statements such as "this is confusing" or "this is easy."

0–10 — Little meaningful analysis is provided. Conclusions are stated without reasoning, or the analysis does not meaningfully apply the concepts discussed in class.

If several important steps are missing from the walkthrough itself, the analysis score cannot exceed 20 points.

Students do not need to provide lengthy analysis of obvious steps that reveal nothing significant about the interface.

---

## 5. UI Improvement — 20 points

20 — Proposes at least one specific, concrete UI improvement clearly motivated by a finding from the walkthrough. The submission explains:

- what should change
- why the change is needed
- which relevant design principle or principles support the change
- how the change should improve the user's experience

10 — Identifies something that should be improved but does not clearly explain the specific change, its connection to the walkthrough, or why the change should help.

0–5 — The proposed change is missing, unrelated to the walkthrough findings, or too vague to determine what would actually change in the interface.

Before-and-after figures may be used to communicate an improvement when they are useful, but they are not required.

---

# Technical Writing Quality Score

Technical writing quality includes clarity, conciseness, organization, grammar, and effective use of figures.

The document should be easy for a technical reader to follow without needing to inspect the prototype separately.

Figures should be used when they help the reader understand the UI, an important interaction, a usability problem, or a proposed improvement.

When figures are used:

- figures should be relevant and readable
- screenshots should be cropped when appropriate so the important UI is easy to see
- each figure should be numbered
- each figure should have a short descriptive caption beneath it
- figures should be referred to by number in the text
- figures should appear close enough to the relevant discussion that the reader can easily connect the text and image

A figure should support the technical explanation rather than simply decorate the document.

Before-and-after figures can be especially effective when a UI change has already been implemented, but they are not required.

## Excellent — 100%

The document is clear, concise, professional, and easy to follow.

Organization supports the technical content. Headings, paragraphs, tables, and figures are used effectively.

Figures are readable, appropriately selected, numbered, captioned, and referred to correctly in the text.

The writing clearly connects observations, design principles, and proposed improvements.

There are very few grammatical errors, unclear statements, unnecessary details, or formatting problems. The reader can focus on the walkthrough and analysis without being distracted by the writing.

## Great — 88%

The document is generally clear, concise, professional, and well organized.

Figures and other formatting generally support the explanation well. Connections between the walkthrough, design principles, and proposed improvements are usually clear.

There may be occasional problems with grammar, wording, organization, captions, figure references, or unnecessary information, but they do not significantly interfere with understanding.

## Good — 74%

The document is understandable overall, but several issues with organization, grammar, clarity, conciseness, formatting, or figure use make parts of the document harder to follow.

Examples might include:

- weak or uninformative figure captions
- figures that are not referred to in the text
- unnecessarily large or poorly cropped screenshots
- analysis that is separated from the figure or UI state it discusses
- sections that require rereading to understand

The majority of the document still communicates effectively.

## Fair — 60%

Problems with organization, grammar, clarity, conciseness, formatting, or figure use occur often enough to distract the reader.

Important information may be difficult to locate or understand, or the connection between the written analysis and UI figures may frequently be unclear.

Most of the document is still understandable.

## Poor — 30%

Poor organization, unclear writing, excessive verbosity, grammatical problems, or ineffective use of figures makes much of the document difficult to understand.

The reader has substantial difficulty following the walkthrough, analysis, or proposed improvement.

## Unacceptable — 0%

The document is not understandable enough to evaluate the walkthrough and analysis effectively.

---

# Required Submission Components

The submission must include:

- the rough draft completed before AI or outside editing assistance
- the final `.docx` or `.md` document
- appropriate UI figures in the final document

The rough draft is required but is not graded for writing quality.