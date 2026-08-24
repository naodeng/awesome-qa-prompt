# Test Report Stage Prompts

English | [简体中文](../../../zh/ai-quality-analysis-workflow/07-test-report/README.md)

## Stage Objective

Have Product, QA, UI/UX, and Technical roles independently analyze the same reviewed baseline and available execution evidence, then synthesize a traceable test report that does not overstate execution status. QA owns coverage, results, defects, blockers, and residual quality risk. Technical owns stability, performance, security, environment, and observability evidence. Product and UI/UX first decide whether input evidence triggers their participation.

## Allowed Input

- Required: test strategy, test strategy review report, code review report, test cases, and test case review report
- Optional: test execution report and defect report

Every input should identify its name, version, source, and readable scope. The two optional reports must not be fabricated to complete a template. When both are absent, every role report and the synthesis report must state `Not executed or insufficient evidence` and must not state `Passed`, `Meets release conditions`, or an equivalent conclusion.

## Participation And Independent Boundaries

- QA and Technical always participate but have distinct responsibilities: QA analyzes case/scope execution and results, while Technical analyzes nonfunctional, environment, and observability evidence.
- Product performs full analysis only when input contains business acceptance, critical journey, business outcome, or product-risk evidence. UI/UX performs full analysis only when input contains interaction, cross-device, visual, or accessibility evidence.
- A nonparticipating Product or UI/UX role still outputs a brief participation-decision report with basis, uncovered scope, and evidence gaps. Use `To be confirmed` when evidence cannot support the decision.
- Each role prompt receives only its allowed upstream artifacts and must not receive, read, or infer another role report.
- The synthesis prompt receives only the four role reports. It must not reread upstream artifacts or fill in analysis omitted by a role.

## Report Evidence Rules

- Executed facts, failures, blockers, and defects must cite an execution record, defect ID, or another verifiable input locator.
- Keep unexecuted scope and scope with no execution evidence separate from executed facts. Planned coverage is not actual coverage.
- Every number must come from input and identify its source. Do not calculate a ratio or trend without the denominator, definition, and time scope.
- An absent defect report does not mean zero defects. An absent execution report means defect records cannot prove the complete execution scope.
- Release, approval, and risk acceptance belong to the Human Task. This stage reports evidence status, residual risk, and recommended actions only.

## Prompt Files

- [Product Expert Test Report Prompt](Standard-version/ProductExpertTestReportPrompt.md)
- [QA Expert Test Report Prompt](Standard-version/QAExpertTestReportPrompt.md)
- [UI/UX Expert Test Report Prompt](Standard-version/UIUXExpertTestReportPrompt.md)
- [Technical Expert Test Report Prompt](Standard-version/TechnicalExpertTestReportPrompt.md)
- [Test Report Synthesis Prompt](Standard-version/TestReportSynthesisPrompt.md)

## Recommended Invocation Order

1. Lock the five required upstream artifacts to the same change scope and attach any available execution and defect reports.
2. Give the same upstream input separately to all four role prompts. Do not mix in another role's output.
3. Preserve Product and UI/UX participation reports, including `Do not participate` and `To be confirmed` decisions.
4. Give only the four role reports to the synthesis prompt to produce executed facts, unexecuted scope, failures and blockers, defects, residual risks, evidence gaps, and actions.
5. Give the synthesis report to the Human Task to decide on more execution, fixes, retesting, risk acceptance, or release review. AI does not make that decision.

## Version Note

This stage currently provides copy-ready Standard prompts, the recommended default entry point.
