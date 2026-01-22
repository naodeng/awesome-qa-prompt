# API Testing Prompt - TAG Framework (Lite)

## Framework Context
The TAG framework focuses on Task, Action, and Goal.

## Prompt

```markdown
**Task:** Test `DELETE /items/{id}`.
**Action:** 1. Delete existing item. 2. Delete non-existing item.
**Goal:** Confirm 204 No Content for success and 404 Not Found for failure.
```
