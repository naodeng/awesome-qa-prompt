# Test Report Review Stage Prompts

English | [简体中文](../../../zh/ai-quality-analysis-workflow/08-test-report-review/README.md)

## Stage Objective

Have Product, QA, UI/UX, Technical, and PM independently assess the same versions of the MVP 4.8 inputs, then synthesize a traceable review report for final Human Task confirmation. Responsibilities remain distinct: Product checks business-acceptance evidence, QA checks conclusions, defects, and residual risks, UI/UX checks experience evidence, Technical checks technical risks, environment limitations, and non-functional evidence, and PM only organizes actions, owners, dependencies, and timing.

## Allowed Input

Each role prompt and the synthesis prompt must audit the following 13 MVP 4.8 artifact inputs.

Required inputs:

- Requirements document
- Requirements analysis report
- Test strategy
- Test strategy review report
- Code review report
- Test cases
- Test case review report
- Test report

Optional inputs:

- Interaction prototype
- Original requirements
- Technical design
- Test case execution report
- Defect report

Record every input's name, source, version, and readable scope. Missing, unreadable, or irreconcilable required input triggers a blocked output. Missing optional input does not stop review, but the report must list each missing item and its impact on completeness, confidence, and risk assessment.

Role prompts do not receive another role's test-report-review output. The synthesis prompt receives both the 13 artifacts above and all five role review reports, uses artifacts to check role conclusions and evidence, and does not perform an omitted role's specialist review.

## Critical Boundaries

- Product, QA, UI/UX, and Technical participate by default. They must not output `Do not participate` or stop because domain evidence is absent; instead, they record uncovered scope, evidence gaps, and impact.
- QA reviews test conclusions, defects, and residual quality risk; Technical reviews environment, stability, performance, security, observability, and other non-functional evidence.
- PM does not review or rewrite test facts, defect severity, risk severity, execution status, or quality conclusions. It only organizes actions already present in the test report and owners, dependencies, and timing explicitly supplied by input.
- Every fact, difference, gap, and recommendation must trace to the specified input versions. Preserve conflicts side by side; do not outvote a sourced minority high-risk finding.
- When the test report says `Not executed or insufficient evidence`, no role or synthesis may rewrite it as passed, quality target met, or release-ready.

## Review Recommendation

The synthesis prompt must output exactly one of: `Recommend passing`, `Recommend additional evidence`, or `Recommend terminating review`. This is advice to the Human Task, not approval, release, waiver, risk acceptance, or a test-passed decision.

## Prompt Files

- [Product Expert Test Report Review Prompt](Standard-version/ProductExpertTestReportReviewPrompt.md)
- [QA Expert Test Report Review Prompt](Standard-version/QAExpertTestReportReviewPrompt.md)
- [UI/UX Expert Test Report Review Prompt](Standard-version/UIUXExpertTestReportReviewPrompt.md)
- [Technical Expert Test Report Review Prompt](Standard-version/TechnicalExpertTestReportReviewPrompt.md)
- [PM Expert Test Report Review Prompt](Standard-version/PMExpertTestReportReviewPrompt.md)
- [Test Report Review Synthesis Prompt](Standard-version/TestReportReviewSynthesisPrompt.md)

## Recommended Invocation Order

1. Lock the names, sources, versions, and readable scope of all 13 MVP 4.8 inputs, separating eight required and five optional inputs.
2. Give the same input set separately to each role prompt without mixed-in role reviews.
3. All four quality roles participate by default; when domain evidence is absent, preserve scope and evidence gaps instead of ending role review.
4. Give the same 13 artifacts and all five complete role reports to the synthesis prompt to obtain one allowed recommendation.
5. Send the synthesis report to the Human Task for final confirmation; AI leaves the human decision blank.

## Version Note

This stage currently provides copy-ready Standard prompts, which are the recommended default entry points.
