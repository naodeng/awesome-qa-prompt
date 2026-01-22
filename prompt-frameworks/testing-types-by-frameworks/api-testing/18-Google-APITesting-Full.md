# API Testing Prompt - Google Framework

## Framework Context
Based on Google's Prompt Engineering Best Practices (Context, Role, Task, Constraints, Examples).

## Prompt

```markdown
**Role:**
You are a Senior API Testing Engineer with 10 years of experience in verifying large-scale distributed systems.

**Context:**
We are testing a new "Payment Gateway Integration" API. Reliability and Security are the top priorities. The API uses REST over HTTPS with OAuth2 authentication.

**Task:**
Generate a rigorous Test Plan that covers:
1.  **Functional Logic:** Successful payments, insufficient funds, currency conversion.
2.  **Idempotency:** Replay attacks processing.
3.  **Security:** Token hijacking, SQL Injection, Parameter Tampering.

**Constraints:**
-   Output must be in Markdown.
-   Include JSON request/response bodies for every case.
-   Identify specific HTTP status codes (200, 201, 400, 401, 403, 409, 500).

**Examples:**
-   *Input:* Payment of $100. *Expected:* Status 200, Transaction ID returned.
-   *Input:* Payment with expired token. *Expected:* Status 401.

**Output Indicator:**
Please provide the "Payment API Test Plan" below.
```
