# Code Review Stage Prompts

English | [简体中文](../../../zh/ai-quality-analysis-workflow/04-code-review/README.md)

## Stage Objective

Have Product, QA, UI/UX, and Technical experts independently review the same readable, explicitly versioned code input, then produce one deduplicated, severity-ranked, traceable code review report. Product and UI/UX participate conditionally; QA and Technical retain distinct review boundaries.

## Allowed Input

- Required inputs: requirements document, requirements analysis report, explicit code version/diff/readable repository content
- Optional inputs: interaction prototype, original requirements, technical solution

Requirements, file names, directory names, commit messages, or verbal descriptions alone are not readable code. Every role blocks when any required input is missing. Missing code, an unclear code version, unreadable diff/content, or an inaccessible repository always remains a hard blocker. The synthesis prompt reads only the four role reports and enforces this gate from their declared code versions, readable scopes, and blocking states; it does not reread code or another Artifact.

## Conditional Participation

- Product Expert: participates when code or input evidence affects business rules, user tasks, state transitions, permissions/entitlements, critical data presentation, or acceptance behavior; does not participate only when evidence sufficiently excludes all of them; uses `To be confirmed` when uncertain.
- UI/UX Expert: participates when code or input evidence affects UI, interaction, navigation, feedback, cross-platform, visual, or accessibility risk; does not participate only when evidence sufficiently excludes all of them; uses `To be confirmed` when uncertain.
- QA Expert: focuses on defects, regression risk, testability, and test gaps, without replacing Technical judgments about architecture or implementation quality.
- Technical Expert: focuses on logic, architecture, interfaces, data, security, performance, compatibility, maintainability, and observability, without replacing QA test-coverage design.

## Prompt Files

- [Product Expert Code Review Prompt](Standard-version/ProductExpertCodeReviewPrompt.md)
- [QA Expert Code Review Prompt](Standard-version/QAExpertCodeReviewPrompt.md)
- [UI/UX Expert Code Review Prompt](Standard-version/UIUXExpertCodeReviewPrompt.md)
- [Technical Expert Code Review Prompt](Standard-version/TechnicalExpertCodeReviewPrompt.md)
- [Code Review Synthesis Prompt](Standard-version/CodeReviewSynthesisPrompt.md)

## Recommended Invocation Order

1. Lock aligned versions of the requirements document, requirements analysis report, and code input, then prepare any actually provided interaction prototype, original requirements, and technical solution.
2. Give the same input to the four role prompts; Product and UI/UX assess conditional participation first.
3. Check that every finding retains file, verifiable location, trigger, impact, evidence, and remediation direction. When no reliable location exists, mark an information gap and never invent a line number.
4. Give only the four role reports to the synthesis prompt for deduplication, severity normalization, and source preservation. Do not let synthesis reread code or another Artifact.
5. Give the synthesis report to the Human Task to decide fixes, risk acceptance, or additional input. An AI report is not an approval or merge decision.

## Version Note

This stage currently provides directly reusable Standard prompts, which are the recommended default entry points.
