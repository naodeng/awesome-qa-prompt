# Test Case Writing Stage Prompts

English | [简体中文](../../../zh/ai-quality-analysis-workflow/05-test-case-writing/README.md)

## Stage Objective

Have Product, QA, UI/UX, and Technical independently propose test cases from the same reviewed upstream artifacts, then produce one test case set deduplicated by business capability and risk, consistently numbered, and traceable to requirements, risks, and code findings. Product and UI/UX participate conditionally. QA owns the executable case body, while Technical adds only evidence-backed interface, data, integration, security, performance, and failure-handling cases.

## Allowed Input

- Required inputs: requirements document, requirements analysis report, test strategy, test strategy review report, code review report
- Optional inputs: interaction prototype, original requirements, technical solution

Before formal writing, align every Artifact's name, version, source, and readable scope. If required input is missing or a version conflict materially affects the cases, output only blockers/gaps and questions. Do not fill in interfaces, fields, environments, or test data from common knowledge.

## Minimum Case Fields

Every role case and final consolidated case must include at least: case identifier, source, preconditions, steps, expected result, priority, risk, and assumptions. Sources should reference stable IDs from requirements, risks, strategy recommendations, or code findings. If no stable ID exists, preserve the Artifact and locator and mark the source metadata gap.

## Conditional Participation And Role Boundaries

- Product: participates only when evidence involves business rules, user tasks, state transitions, permissions/entitlements, critical data, or acceptance behavior.
- QA: creates the main executable case set from the reviewed strategy, covering evidence-backed happy path, negative, boundary, state, recovery, and regression risks.
- UI/UX: participates only when evidence involves UI, interaction, navigation, feedback, cross-platform, or accessibility risk.
- Technical: adds evidence-backed interface, data, integration, security, performance, and failure-handling cases; it does not repeat the QA body or invent contract fields or metrics.

## Prompt Files

- [Product Expert Test Case Writing Prompt](Standard-version/ProductExpertTestCaseWritingPrompt.md)
- [QA Expert Test Case Writing Prompt](Standard-version/QAExpertTestCaseWritingPrompt.md)
- [UI/UX Expert Test Case Writing Prompt](Standard-version/UIUXExpertTestCaseWritingPrompt.md)
- [Technical Expert Test Case Writing Prompt](Standard-version/TechnicalExpertTestCaseWritingPrompt.md)
- [Test Case Writing Synthesis Prompt](Standard-version/TestCaseWritingSynthesisPrompt.md)

## Recommended Invocation Order

1. Lock aligned versions of the requirements document, requirements analysis report, test strategy, strategy review, and code review, then prepare any actually provided interaction prototype, original requirements, and technical solution.
2. Give the same inputs to all four role prompts; Product and UI/UX first decide conditional participation.
3. Check that every proposal contains the eight minimum fields and that all steps, data, and expectations have input support.
4. Give only the four role reports to the synthesis prompt for deduplication, unified numbering, and the traceability matrix. Do not let synthesis reread upstream Artifacts.
5. Hand the final set to the Human Task to confirm execution scope, provide actual test data, and arrange execution. This stage does not claim that cases ran or requirements are covered.

## Version Note

This stage currently provides the directly usable Standard version, which is the default recommended entry.
