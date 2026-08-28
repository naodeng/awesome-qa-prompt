<div align="right"><a href="./README.md">简体中文</a> · <strong>English</strong></div>

# Prompt Usage Examples

This directory explains how to select, fill, and combine repository Prompts. The repository does not currently contain separate example subdirectories; the entries below use existing Prompts and Workflows so planned material is not presented as complete.

## Basic Usage

1. Select the closest module from the [complete categorized Prompt catalog](../PROMPT_COVERAGE_200_EN.md).
2. Open the module's `Standard-version` first.
3. Put real requirements, contracts, logs, or metrics inside `<qa_context>`.
4. Keep missing information as open items instead of asking the model to invent it.
5. Review evidence, assumptions, and human decision items before using the result.

## Entry Examples

| Goal | Recommended entry | Notes |
| --- | --- | --- |
| The correct Prompt is unclear | [Testing Prompt Router](../Workflows/en/discover-testing/README.md) | Selects one main Prompt, at most one supporting Prompt, and an invocation order |
| Review requirements and acceptance criteria | [Requirements Analysis](../testing-types/en/requirements-analysis/README.md) + [Acceptance Criteria Review](../testing-types/en/acceptance-criteria-reviewer/README.md) | Identify rules and gaps before checking verifiability |
| Design API tests | [API Testing](../testing-types/en/api-testing/README.md) | Derive scenarios from contracts, business rules, and failure paths |
| Analyze performance results | [Performance Result Analysis](../testing-types/en/performance-result-analysis/README.md) | Audit run validity before interpreting metric evidence |
| Organize end-to-end development quality analysis | [AI Quality Analysis Workflow](../Workflows/en/ai-quality-analysis-workflow/README.md) | Uses an eight-stage, multi-role, traceable Prompt chain |

## Combination Principles

- Start with a broad analysis Prompt, then use a specialized design Prompt.
- Pass only confirmed facts, explicit assumptions, and evidence from the previous step.
- Avoid stacking several Prompts with the same objective; prefer the Router's minimum combination.
- Workflows are practice guides. Approval, release, ownership, and accountability remain human responsibilities.

For continuous scenarios, see [Testing Workflows](../Workflows/en/README.md). To write or extend a Prompt, see the [Prompt Authoring Standard](../PROMPT_AUTHORING_STANDARD_EN.md).
