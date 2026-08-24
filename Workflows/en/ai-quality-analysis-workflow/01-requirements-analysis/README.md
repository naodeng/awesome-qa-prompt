# Requirements Analysis Stage Prompts

English | [简体中文](../../../zh/ai-quality-analysis-workflow/01-requirements-analysis/README.md)

## Stage Goal

Have Product, QA, UI/UX, and Technical experts independently analyze the same requirements inputs, then produce one requirements-analysis synthesis that preserves evidence, disagreements, and sources. This stage evaluates requirement quality only. It does not replace downstream test strategy, test planning, test-case design, technical design, or human approval.

## Allowed Inputs

- Required: requirements document
- Optional: interactive prototype
- Optional: original request

Each role prompt reads only these declared stage inputs. The synthesis prompt reads only the four role reports; it must not consult other material or add facts that are not in those reports.

## Prompt Files

- [Product Expert Requirements Analysis Prompt](Standard-version/ProductExpertRequirementsAnalysisPrompt.md): analyzes business goals, user value, flows, rules, scope, and acceptance.
- [QA Expert Requirements Analysis Prompt](Standard-version/QAExpertRequirementsAnalysisPrompt.md): analyzes testability, ambiguity, exceptions, boundaries, and test risk.
- [UI/UX Expert Requirements Analysis Prompt](Standard-version/UIUXExpertRequirementsAnalysisPrompt.md): analyzes information architecture, task flows, interaction states, cross-device behavior, and accessibility.
- [Technical Expert Requirements Analysis Prompt](Standard-version/TechnicalExpertRequirementsAnalysisPrompt.md): analyzes feasibility, system boundaries, interfaces, data, security, performance, and observability.
- [Requirements Analysis Synthesis Prompt](Standard-version/RequirementsAnalysisSynthesisPrompt.md): synthesizes the four reports while preserving consensus, complementary views, conflicts, risks, open questions, and source traceability.

## Recommended Invocation Order

1. Run the four role prompts separately against the same declared inputs. Each analysis is independent and must not treat another role's conclusion as fact.
2. Check that every role report preserves input Artifact names, versions, and evidence locations; unavailable information must be labeled explicitly.
3. Pass all four role reports to the synthesis prompt to produce a traceable requirements-analysis synthesis.
4. Send decisions and approvals to authorized humans. AI records the status only and must not impersonate an approver or claim false approval.

## Version Note

This stage currently provides the copy-ready Standard version, which is the recommended default entry point.
