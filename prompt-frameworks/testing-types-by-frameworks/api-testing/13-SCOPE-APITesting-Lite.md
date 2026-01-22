# API Testing Prompt - SCOPE Framework (Lite)

## Framework Context
The SCOPE framework focuses on Scenario, Complications, Objective, Plan, and Evaluation.

## Prompt

```markdown
**Scenario:** File Upload API testing.
**Complications:** Large files, unsupported formats.
**Objective:** Verify upload restrictions and logical handling.
**Plan:** 1. Test allowed types (JPG). 2. Test forbidden types (EXE). 3. Test size limit (>10MB).
**Evaluation:** Check for correct error codes and file existence in storage.
```
