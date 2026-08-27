# Performance Test Gatling

English | [简体中文](../../zh/performance-test-gatling/README.md)

## Module Overview

A Gatling performance testing prompt covering simulations, injection models, assertions, feeders, and report interpretation.

## Use Cases

- You need output focused on Performance Test Gatling
- You want to turn general QA practice into a concrete tool-specific, framework-specific, or plus workflow result
- The input is incomplete, but you still need an executable first version with gaps and assumptions clearly labeled

## Version Selection Guide

- `Standard-version/`: the default recommendation for most real-world use cases
- Lite or framework variants can be added later following this repository's authoring standard

## Files

- **Standard version:** [Standard-version/PerformanceTestGatlingPrompt.md](Standard-version/PerformanceTestGatlingPrompt.md)
- **Chinese version:** [../../zh/performance-test-gatling/Standard-version/PerformanceTestGatlingPrompt.md](../../zh/performance-test-gatling/Standard-version/PerformanceTestGatlingPrompt.md)

## Suggested Input

```markdown
Goal: [What you want to produce]
Business/system scope: [Module, endpoint, page, flow, or service]
Available materials: [Requirements, API docs, code snippets, test cases, logs, or existing assets]
Constraints: [Tool stack, environment, timeline, risks, compliance, or release needs]
Expected format: [Test plan / cases / review notes / asset structure / execution plan]
```text

## Output Focus

- Input audit: known information, missing information, key assumptions, and main risks
- Prioritization: rationale based on risk, business impact, and change scope
- Executable result: directly usable steps, structure, checks, or review notes
- Open questions: do not invent missing metrics, endpoints, environments, or conclusions

## Related Modules

- [performance-testing](../performance-testing/README.md)
- [api-testing](../api-testing/README.md)

## Contribution Notes

When updating this module, check the Chinese version as well and run `npm run check:all`.
