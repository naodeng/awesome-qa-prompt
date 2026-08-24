# Test Strategy Review Stage Prompts

English | [简体中文](../../../zh/ai-quality-analysis-workflow/03-test-strategy-review/README.md)

## Stage Goal

Have Product, QA, UI/UX, Technical, and PM reviewers independently review the same test-strategy version, then generate a traceable review report for a Human Task. The synthesis prompt may only give the overall recommendation "Recommend approval," "Recommend revision," or "Insufficient information"; each role report uses the role-level labels defined by its prompt. No AI output may replace the Human Task that approves, rejects, or otherwise decides on the strategy.

## Allowed Input

- Required: test-strategy content or a readable location
- Required: test-strategy name, source, and version; unavailable metadata must be marked "Not provided"

Each role prompt reads only the declared test strategy and its source/version metadata. It must not reread requirements, code, or another role report. The synthesis prompt reads only the five role-review reports.

## Prompt Files

- [Product Expert Test Strategy Review Prompt](Standard-version/ProductExpertTestStrategyReviewPrompt.md): checks business goals, critical journeys, scope prioritization, and acceptance coverage.
- [QA Expert Test Strategy Review Prompt](Standard-version/QAExpertTestStrategyReviewPrompt.md): checks completeness, risk, executability, evidence, and gates.
- [UI/UX Expert Test Strategy Review Prompt](Standard-version/UIUXExpertTestStrategyReviewPrompt.md): first decides whether participation is needed, then checks experience, cross-platform, visual, and accessibility strategy.
- [Technical Expert Test Strategy Review Prompt](Standard-version/TechnicalExpertTestStrategyReviewPrompt.md): checks the feasibility of environment, data, dependencies, integration, and non-functional strategy.
- [PM Expert Test Strategy Review Prompt](Standard-version/PMExpertTestStrategyReviewPrompt.md): checks only the feasibility of schedule, resources, dependencies, and milestones.
- [Test Strategy Review Synthesis Prompt](Standard-version/TestStrategyReviewSynthesisPrompt.md): consolidates blockers, revisions, evidence, and unresolved disagreements into one of three recommendations.

## Recommended Invocation Order

1. Invoke the five role prompts independently with the same strategy and the same source/version metadata; roles do not read one another's reports.
2. UI/UX performs the conditional participation decision first. Preserve the basis for "Not participating," and never treat "To be confirmed" as non-participation.
3. Check that all reports cite concrete strategy sections, tables, or entries. Missing evidence must not be silently filled in.
4. Pass all five reports to the synthesis prompt and generate exactly one of "Recommend approval / Recommend revision / Insufficient information."
5. Send the synthesis report to the Human Task; only an authorized human can make the final decision.

## Version Note

This stage currently provides directly reusable Standard prompts, which are the recommended default entry points.
