# API Testing Prompt - CREATE Framework

## Framework Context
The CREATE framework focuses on Clarity, Relevant info, Examples, Avoid ambiguity, and Tinker.

## Prompt

```markdown
**Clarity (清晰度):**
Create a detailed API Testing Strategy and Test Case Document for a Senior QA audience.

**Relevant info (相关信息):**
You are testing a high-performance API system involving REST and WebSockets. Coverage must include Functional validation, Load testing (JMeter scenarios), and Security testing (SQLi, XSS). You have 10 years of experience.

**Examples (实例):**
When defining test cases, follow this pattern:
-   **ID:** AT-001
-   **Endpoint:** POST /api/login
-   **Payload:** `{"username": "admin", "password": "password123"}`
-   **Assertion:** Status 200, Body contains "token".

**Avoid ambiguity (避免含糊不清):**
Do not use vague terms like "test the API". Instead, specify: "Verify that the API returns 400 Bad Request when mandatory fields are missing" or "Ensure response time is under 200ms for 95% of requests".

**Tinker (迭代、修补):**
After generating the plan, review it against the constraints of a high-security banking application and add specific security test cases if necessary.
```
