# Test Strategy Stage Prompts

English | [简体中文](../../../zh/ai-quality-analysis-workflow/02-test-strategy/README.md)

## Stage Objective

Have Product, QA, UI/UX, Technical, and PM roles independently provide the information needed for test strategy from the same input baseline, then produce one strategy that clearly separates quality facts, strategy recommendations, and project constraints. This stage does not produce a detailed test plan, complete test cases, automation scripts, or execution results, and it does not replace human approval.

## Input Baseline

- Required inputs: requirements document, requirements analysis report
- Optional inputs: interaction prototype, original requirements, technical solution, code changes or repository link

All five role prompts use the same declared inputs. The synthesis prompt reads only the five role reports and may not consult source materials or add facts absent from those reports.

Code is optional evidence only. Its absence must not block the strategy stage. Each role continues from the remaining inputs and states how missing code affects visibility into implementation changes, report completeness, confidence, and risk assessment.

## Prompt Files

- [Product Expert Test Strategy Prompt](Standard-version/ProductExpertTestStrategyPrompt.md): identifies business-critical paths, business risks, and acceptance priorities, then provides product-view recommendations.
- [QA Expert Test Strategy Prompt](Standard-version/QAExpertTestStrategyPrompt.md): proposes scope, test types, coverage, environments, data, evidence, and entry/exit recommendations.
- [UI/UX Expert Test Strategy Prompt](Standard-version/UIUXExpertTestStrategyPrompt.md): first checks for high-interaction, cross-device, visual, or accessibility risk and participates only when evidence supports it.
- [Technical Expert Test Strategy Prompt](Standard-version/TechnicalExpertTestStrategyPrompt.md): proposes test levels, interface, integration, non-functional, testability, and observability coverage.
- [PM Expert Test Strategy Input Prompt](Standard-version/PMExpertTestStrategyPrompt.md): records only scope, schedule, resources, dependencies, milestones, and management actions.
- [Test Strategy Synthesis Prompt](Standard-version/TestStrategySynthesisPrompt.md): integrates all five reports while keeping facts, recommendations, constraints, sources, and open items distinct.

## Recommended Invocation Order

1. Invoke the Product, QA, UI/UX, Technical, and PM prompts independently with the same required inputs and any actually provided optional inputs. No role may treat another role's conclusion as a confirmed fact.
2. Check the UI/UX participation decision. When it is `Do not participate`, retain only its rationale and open items; do not require a full UI/UX strategy input.
3. Confirm that the PM report contains management inputs only. It may not set or override quality conclusions, test priorities, or technical approaches.
4. Pass all five role reports to the synthesis prompt to produce a traceable test strategy.
5. Send unconfirmed metrics, conflicts, resource trade-offs, and entry/exit recommendations to authorized people. The AI must not impersonate an approver or claim release approval.

## Version Note

This stage currently provides the copy-ready Standard version, which is the recommended default.
