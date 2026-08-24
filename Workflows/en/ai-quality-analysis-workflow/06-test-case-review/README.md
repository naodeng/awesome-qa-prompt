# Test Case Review Stage Prompts

English | [简体中文](../../../zh/ai-quality-analysis-workflow/06-test-case-review/README.md)

## Stage Objective

Have Product, QA, UI/UX, and Technical experts independently review the same test case version, then synthesize a traceable test case review report. Product checks business rules and user journeys; QA checks correctness, completeness, executability, priority, duplication, and omissions; UI/UX checks interaction, cross-device behavior, and accessibility; Technical checks interfaces, data, exception handling, integration, and non-functional risks.

The synthesis report must list blockers, proposed additional cases, revision recommendations, evidence, and role sources. Its overall recommendation is limited to `Recommend approval`, `Recommend revision`, or `Insufficient information`. Approval, sign-off, and the decision to proceed to execution remain a Human Task.

## Allowed Input

- Required: requirements document, requirements analysis report, test strategy, test strategy review report, code review report, and test cases with their version
- Optional: interaction prototype, raw requirements, and technical solution

Before review, align each Artifact's name, version, source, and readable scope. If any required input is missing or unreadable, or its version/source cannot be audited, the role must use blocked/insufficient-information mode and generate no formal finding. Only missing optional input permits review to continue from remaining evidence or produce a partial report. Never infer case content or product/technical facts.

## Independent Review Boundaries

- The four role prompts receive only the prescribed upstream Artifacts and the test cases under review. They must not receive, read, or infer another role's report.
- Each role reviews only its professional scope and cites evidence through case identifiers, upstream source IDs/locators, or excerpts.
- Only the synthesis prompt handles cross-role deduplication, conflict preservation, and the overall recommendation.
- The synthesis prompt receives only the four role reports. It must not reread test cases or upstream materials to fill role-report gaps.

## Prompt Files

- [Product Expert Test Case Review Prompt](Standard-version/ProductExpertTestCaseReviewPrompt.md)
- [QA Expert Test Case Review Prompt](Standard-version/QAExpertTestCaseReviewPrompt.md)
- [UI/UX Expert Test Case Review Prompt](Standard-version/UIUXExpertTestCaseReviewPrompt.md)
- [Technical Expert Test Case Review Prompt](Standard-version/TechnicalExpertTestCaseReviewPrompt.md)
- [Test Case Review Synthesis Prompt](Standard-version/TestCaseReviewSynthesisPrompt.md)

## Recommended Invocation Order

1. Lock the upstream Artifacts and test case version for the same change scope.
2. Give the same input independently to the four role prompts and generate four review reports.
3. Confirm each report preserves case location, evidence, impact, and recommendation without citing another role's report.
4. Give only the four complete role reports to the synthesis prompt to produce blockers, additional cases, revisions, and the overall recommendation.
5. Send the synthesis report to the Human Task for final approval, return, or information request. AI does not make that decision.

## Version Notes

This stage currently provides a directly reusable Standard version, which is the default recommended entry point.
