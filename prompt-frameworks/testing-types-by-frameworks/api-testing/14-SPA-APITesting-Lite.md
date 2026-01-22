# API Testing Prompt - SPA Framework (Lite)

## Framework Context
The SPA framework focuses on Scenario, Problem, Action, and Result.

## Prompt

```markdown
**Scenario:** Update User Profile API.
**Problem:** Ensure only the owner can update their profile.
**Action:** Test with: 1. Owner Token (Success). 2. Other User Token (Forbidden). 3. No Token (Unauthorized).
**Result:** Verified Access Control List (ACL).
```
