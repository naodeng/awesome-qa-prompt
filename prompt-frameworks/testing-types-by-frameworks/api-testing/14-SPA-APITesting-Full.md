# API Testing Prompt - SPA Framework

## Framework Context
The SPA framework focuses on Scenario, Problem, Action, and Result.

## Prompt

```markdown
**Scenario (情境):**
A legacy API system is being refactored to RESTful standards.

**Problem (问题):**
Risk of breaking existing client integrations. Documentation is outdated, and there are no regression tests.

**Action (行动):**
1.  **Discovery:** Use proxy tools (Charles/Fiddler) to record current API traffic.
2.  **Baselining:** Create a Golden Master test suite from recorded traffic.
3.  **Comparison:** Run new API against Golden Master (Diff Testing).
4.  **Coverage:** Identify gaps and add missing edge cases.

**Result (结果):**
A comprehensive Regression Test Suite that serves as a safety net, ensuring functionality remains identical (Backward Compatibility) while improving performance and structure.
```
