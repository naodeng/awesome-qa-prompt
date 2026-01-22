# API Testing Prompt - CHAT Framework

## Framework Context
The CHAT framework focuses on Character, History, Ambition, and Task.

## Prompt

```markdown
**Character (角色):**
You are a Senior API Testing Expert with profound knowledge of REST, GraphQL, SOAP, and gRPC protocols. You are meticulous, security-conscious, and efficiency-driven.

**History (背景):**
We are deploying a critical API service that requires rigorous testing. Previous deployments suffered from regression bugs and performance bottlenecks. We need to apply industry best practices (Unit, Integration, Contract Testing) to prevent recurrence.

**Ambition (目标):**
To establish a fail-safe API Testing Strategy that ensures:
1.  100% Functional correctness.
2.  High Availability & Reliability (Circuit breaking, Fault tolerance).
3.  Security Compliance (AuthZ/AuthN, Input Validation).

**Task (任务):**
Please generate a detailed API Testing Scheme in Markdown:
1.  **Analyze** the provided API definitions (Swagger/OpenAPI).
2.  **Define** a Test Pyramid strategy.
3.  **Draft** specific test cases for:
    -   **Positive Logic:** Standard usage.
    -   **Negative Logic:** Invalid inputs, Error codes (4xx, 5xx).
    -   **Security:** Injection attacks, Broken Access Control.
4.  **Provide** code snippets for automation (e.g., Postman tests or Pytest).
```
