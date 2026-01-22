# API Testing Prompt - ROSES Framework (Lite)

## Framework Context
The ROSES framework focuses on Role, Objective, Scenario, Solution, and Steps.

## Prompt

```markdown
**Role:** API QA.
**Objective:** Verify Order API.
**Scenario:** A user places an order via `POST /orders`.
**Solution:** A set of test cases illustrating success and failure paths.
**Steps:** 1. Analyze request body. 2. Create valid payload. 3. Create invalid payloads (missing fields). 4. Document results.
```
