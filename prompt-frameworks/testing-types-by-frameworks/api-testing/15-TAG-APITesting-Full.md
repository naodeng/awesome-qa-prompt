# API Testing Prompt - TAG Framework

## Framework Context
The TAG framework focuses on Task, Action, and Goal.

## Prompt

```markdown
**Task (任务):**
Conduct a comprehensive security audit on the Payment API.

**Action (行动):**
1.  **Auth Testing:** Verify OAuth2 scopes and token expiration.
2.  **Input Fuzzing:** Send malformed JSON, massive payloads, and special characters.
3.  **Logic Abuse:** Attempt negative transactions, double spending, and currency manipulation.
4.  **Header Analysis:** Check for missing security headers (HSTS, CSP).

**Goal (目标):**
Identify and document all security vulnerabilities. Produce a remediation report categorized by severity (High/Medium/Low) to harden the API before production usage.
```
