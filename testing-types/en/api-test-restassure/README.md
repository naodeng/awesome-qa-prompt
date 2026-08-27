# API Test Rest Assured

English | [简体中文](../../zh/api-test-restassure/README.md)

## Module Overview

An API automation prompt for the Java Rest Assured stack, covering request wrappers, assertions, contracts, and pipeline integration.

## Use Cases

- You need output focused on API Test Rest Assured
- You want to turn general QA practice into a concrete tool-specific, framework-specific, or plus workflow result
- The input is incomplete, but you still need an executable first version with gaps and assumptions clearly labeled

## Version Selection Guide

- `Standard-version/`: the default recommendation for most real-world use cases
- Lite or framework variants can be added later following this repository's authoring standard

## Files

- **Standard version:** [Standard-version/APITestRestAssuredPrompt.md](Standard-version/APITestRestAssuredPrompt.md)
- **Chinese version:** [../../zh/api-test-restassure/Standard-version/APITestRestAssuredPrompt.md](../../zh/api-test-restassure/Standard-version/APITestRestAssuredPrompt.md)

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

- [api-testing](../api-testing/README.md)
- [automation-testing](../automation-testing/README.md)

## Contribution Notes

When updating this module, check the Chinese version as well and run `npm run check:all`.
