# AI Quality Analysis Workflow

[简体中文](../../zh/ai-quality-analysis-workflow/README.md) | English

## MVP Goal

This workflow uses 43 copy-and-use English prompts to connect requirements analysis, test strategy, reviews, code review, test cases, and test reporting into one traceable quality-analysis chain. In each stage, specialist roles work independently before the stage synthesis prompt preserves consensus, disagreements, evidence sources, and information gaps.

The workflow produces analysis, recommendations, and material for human decisions. It does not execute tests, replace approvals, authorize a release or waiver, accept risk, or present planned coverage as actual execution.

## Version Selection

This workflow currently provides only the Standard version (`Standard-version`), which is the default selection; do not assume other versions exist.

## Eight-Stage Sequence

| Stage | Goal | Stage Guide |
| --- | --- | --- |
| 1. Requirements analysis | Analyze requirement quality independently and produce a traceable synthesis | [Open stage](01-requirements-analysis/README.md) |
| 2. Test strategy | Separate quality facts, strategy recommendations, and project constraints | [Open stage](02-test-strategy/README.md) |
| 3. Test strategy review | Produce a strategy-review recommendation for a Human Task decision | [Open stage](03-test-strategy-review/README.md) |
| 4. Code review | Produce prioritized findings from readable, versioned code | [Open stage](04-code-review/README.md) |
| 5. Test case writing | Produce an executable, deduplicated, traceable test case set | [Open stage](05-test-case-writing/README.md) |
| 6. Test case review | Review test cases independently and synthesize blockers, gaps, and changes | [Open stage](06-test-case-review/README.md) |
| 7. Test report | Keep executed facts, unexecuted scope, and evidence gaps distinct | [Open stage](07-test-report/README.md) |
| 8. Test report review | Produce a final review recommendation for Human Task confirmation | [Open stage](08-test-report-review/README.md) |

When the stages run in sequence, each downstream stage must reference locked versions of upstream Artifacts. If a stage is skipped in the real process, record the reason, the missing Artifact, and the effect on downstream conclusions.

## Role Matrix

Legend: `Required` means the role participates by default; `Conditional` means the role first decides to participate, not participate, or mark participation as pending from the evidence; `Input` means PM provides project-management information only; `—` means the stage has no prompt for that role.

| Stage | Product | QA | UI/UX | Technical | PM | Synthesis |
| --- | --- | --- | --- | --- | --- | --- |
| 1. Requirements analysis | Required | Required | Required | Required | — | 1 prompt |
| 2. Test strategy | Required | Required | Conditional | Required | Input | 1 prompt |
| 3. Test strategy review | Required | Required | Conditional | Required | Input | 1 prompt |
| 4. Code review | Conditional | Required | Conditional | Required | — | 1 prompt |
| 5. Test case writing | Conditional | Required | Conditional | Required | — | 1 prompt |
| 6. Test case review | Required | Required | Required | Required | — | 1 prompt |
| 7. Test report | Conditional | Required | Conditional | Required | — | 1 prompt |
| 8. Test report review | Required | Required | Required | Required | Input | 1 prompt |

Role prompts must run independently and must not read, restate, or infer another role's report. PM handles project-management information only and must not override quality facts, risk levels, test priorities, or technical judgments. The stage synthesis prompt owns cross-role deduplication, conflict preservation, and conclusion synthesis.

## Index of 43 Prompts

### 1. Requirements Analysis (5)

- [Product Expert Requirements Analysis Prompt](01-requirements-analysis/Standard-version/ProductExpertRequirementsAnalysisPrompt.md)
- [QA Expert Requirements Analysis Prompt](01-requirements-analysis/Standard-version/QAExpertRequirementsAnalysisPrompt.md)
- [UI/UX Expert Requirements Analysis Prompt](01-requirements-analysis/Standard-version/UIUXExpertRequirementsAnalysisPrompt.md)
- [Technical Expert Requirements Analysis Prompt](01-requirements-analysis/Standard-version/TechnicalExpertRequirementsAnalysisPrompt.md)
- [Requirements Analysis Synthesis Prompt](01-requirements-analysis/Standard-version/RequirementsAnalysisSynthesisPrompt.md)

### 2. Test Strategy (6)

- [Product Expert Test Strategy Prompt](02-test-strategy/Standard-version/ProductExpertTestStrategyPrompt.md)
- [QA Expert Test Strategy Prompt](02-test-strategy/Standard-version/QAExpertTestStrategyPrompt.md)
- [UI/UX Expert Test Strategy Prompt](02-test-strategy/Standard-version/UIUXExpertTestStrategyPrompt.md)
- [Technical Expert Test Strategy Prompt](02-test-strategy/Standard-version/TechnicalExpertTestStrategyPrompt.md)
- [PM Expert Test Strategy Input Prompt](02-test-strategy/Standard-version/PMExpertTestStrategyPrompt.md)
- [Test Strategy Synthesis Prompt](02-test-strategy/Standard-version/TestStrategySynthesisPrompt.md)

### 3. Test Strategy Review (6)

- [Product Expert Test Strategy Review Prompt](03-test-strategy-review/Standard-version/ProductExpertTestStrategyReviewPrompt.md)
- [QA Expert Test Strategy Review Prompt](03-test-strategy-review/Standard-version/QAExpertTestStrategyReviewPrompt.md)
- [UI/UX Expert Test Strategy Review Prompt](03-test-strategy-review/Standard-version/UIUXExpertTestStrategyReviewPrompt.md)
- [Technical Expert Test Strategy Review Prompt](03-test-strategy-review/Standard-version/TechnicalExpertTestStrategyReviewPrompt.md)
- [PM Expert Test Strategy Review Prompt](03-test-strategy-review/Standard-version/PMExpertTestStrategyReviewPrompt.md)
- [Test Strategy Review Synthesis Prompt](03-test-strategy-review/Standard-version/TestStrategyReviewSynthesisPrompt.md)

### 4. Code Review (5)

- [Product Expert Code Review Prompt](04-code-review/Standard-version/ProductExpertCodeReviewPrompt.md)
- [QA Expert Code Review Prompt](04-code-review/Standard-version/QAExpertCodeReviewPrompt.md)
- [UI/UX Expert Code Review Prompt](04-code-review/Standard-version/UIUXExpertCodeReviewPrompt.md)
- [Technical Expert Code Review Prompt](04-code-review/Standard-version/TechnicalExpertCodeReviewPrompt.md)
- [Code Review Synthesis Prompt](04-code-review/Standard-version/CodeReviewSynthesisPrompt.md)

### 5. Test Case Writing (5)

- [Product Expert Test Case Writing Prompt](05-test-case-writing/Standard-version/ProductExpertTestCaseWritingPrompt.md)
- [QA Expert Test Case Writing Prompt](05-test-case-writing/Standard-version/QAExpertTestCaseWritingPrompt.md)
- [UI/UX Expert Test Case Writing Prompt](05-test-case-writing/Standard-version/UIUXExpertTestCaseWritingPrompt.md)
- [Technical Expert Test Case Writing Prompt](05-test-case-writing/Standard-version/TechnicalExpertTestCaseWritingPrompt.md)
- [Test Case Writing Synthesis Prompt](05-test-case-writing/Standard-version/TestCaseWritingSynthesisPrompt.md)

### 6. Test Case Review (5)

- [Product Expert Test Case Review Prompt](06-test-case-review/Standard-version/ProductExpertTestCaseReviewPrompt.md)
- [QA Expert Test Case Review Prompt](06-test-case-review/Standard-version/QAExpertTestCaseReviewPrompt.md)
- [UI/UX Expert Test Case Review Prompt](06-test-case-review/Standard-version/UIUXExpertTestCaseReviewPrompt.md)
- [Technical Expert Test Case Review Prompt](06-test-case-review/Standard-version/TechnicalExpertTestCaseReviewPrompt.md)
- [Test Case Review Synthesis Prompt](06-test-case-review/Standard-version/TestCaseReviewSynthesisPrompt.md)

### 7. Test Report (5)

- [Product Expert Test Report Prompt](07-test-report/Standard-version/ProductExpertTestReportPrompt.md)
- [QA Expert Test Report Prompt](07-test-report/Standard-version/QAExpertTestReportPrompt.md)
- [UI/UX Expert Test Report Prompt](07-test-report/Standard-version/UIUXExpertTestReportPrompt.md)
- [Technical Expert Test Report Prompt](07-test-report/Standard-version/TechnicalExpertTestReportPrompt.md)
- [Test Report Synthesis Prompt](07-test-report/Standard-version/TestReportSynthesisPrompt.md)

### 8. Test Report Review (6)

- [Product Expert Test Report Review Prompt](08-test-report-review/Standard-version/ProductExpertTestReportReviewPrompt.md)
- [QA Expert Test Report Review Prompt](08-test-report-review/Standard-version/QAExpertTestReportReviewPrompt.md)
- [UI/UX Expert Test Report Review Prompt](08-test-report-review/Standard-version/UIUXExpertTestReportReviewPrompt.md)
- [Technical Expert Test Report Review Prompt](08-test-report-review/Standard-version/TechnicalExpertTestReportReviewPrompt.md)
- [PM Expert Test Report Review Prompt](08-test-report-review/Standard-version/PMExpertTestReportReviewPrompt.md)
- [Test Report Review Synthesis Prompt](08-test-report-review/Standard-version/TestReportReviewSynthesisPrompt.md)

## Invocation Rules

1. **Lock inputs first**: Record each Artifact's name, source, version, and readable scope. Never silently mix versions.
2. **Invoke roles independently**: Roles in one stage receive the same declared stage inputs but no other role output.
3. **Preserve conditional-participation results**: A `Do not participate` or `Pending confirmation` result still needs a short report, rationale, and evidence gaps; never omit it silently.
4. **Invoke synthesis afterward**: Synthesis in stages 1 through 7 reads only the corresponding role reports and source metadata declared inside them; it does not reread Artifacts. Stage 8 accepts the explicitly declared Artifacts and role reports described by its stage guide.
5. **Do not fabricate across stages**: Synthesis deduplicates, classifies, preserves conflicts, and maintains traceability; it does not replace a missing role's professional judgment.
6. **Hand output to a Human Task**: AI recommendations are not approval, release authorization, waiver, risk acceptance, or merge decisions.

## Required and Optional Inputs

| Stage | Required Inputs | Optional or Recommended Inputs |
| --- | --- | --- |
| 1. Requirements analysis | Requirements document | Interaction prototype, original request |
| 2. Test strategy | Requirements document, requirements analysis report | Interaction prototype, original requirements, technical solution, code changes or repository link |
| 3. Test strategy review | Test strategy body or readable location, plus its name, source, and version | None |
| 4. Code review | Requirements document, requirements analysis report, explicit code version/diff/readable repository content | Interaction prototype, original requirements, technical solution |
| 5. Test case writing | Requirements document, requirements analysis report, test strategy, test strategy review report, code review report | Interaction prototype, original requirements, technical solution |
| 6. Test case review | Requirements document, requirements analysis report, test strategy, test strategy review report, code review report, test cases and version | Interaction prototype, original request, technical design |
| 7. Test report | Test strategy, test strategy review report, code review report, test cases, test case review report | Test execution report, defect report |
| 8. Test report review | Requirements document, requirements analysis report, test strategy, test strategy review report, code review report, test cases, test case review report, test report | Interaction prototype, original request, technical design, test case execution report, defect report |

If a required input is missing, unreadable, or version-misaligned in a way that materially affects the result, output only blockers, information gaps, and high-value clarification questions. When an optional input is missing, work from the remaining evidence but state the effect on scope, completeness, confidence, and risk assessment.

## Human Task Boundary

Only an authorized person can:

- approve or reject a test strategy, test cases, or test report
- decide whether to fix, retest, release, merge, or stop the process
- accept, waive, or change a risk
- confirm owners, schedule, resources, and final quality gates

AI may organize evidence, expose disagreements, recommend actions, and record a human decision. It must not impersonate an approver or prefill states such as `Approved`, `Ready for release`, or `Risk accepted`.

## Insufficient-Evidence Rules

- Do not invent requirements, endpoints, fields, code locations, execution results, defects, metrics, or human decisions when no verifiable source exists.
- Planned coverage, completed design, and existing test cases do not prove execution. Without execution evidence, state `Not executed or insufficient evidence`.
- A missing defect report does not mean zero defects, and scattered defect records cannot establish the complete execution scope when the execution report is missing.
- Numbers must come from the inputs. Do not calculate a ratio or trend without a denominator, measurement definition, or time window.
- Preserve conflicting evidence side by side with its sources. Do not use a majority opinion to erase a minority high-risk finding.
- Reduce conclusion strength when evidence is insufficient. Report known facts, unknowns, impact, and evidence needed; do not assert pass, quality acceptance, or release readiness.

## Quick Start

1. Start with [Requirements Analysis](01-requirements-analysis/README.md) and prepare locked, real inputs.
2. Follow each stage guide to run role prompts independently, then run the synthesis prompt.
3. Save every stage synthesis as a versioned Artifact and pass that version to the downstream stage.
4. At review and final-decision points, hand recommendations and evidence to the Human Task for confirmation.
