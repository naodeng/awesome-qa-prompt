# API Testing Prompt - CARE Framework

## Framework Context
The CARE framework focuses on Context, Action, Result, and Example.

## Prompt

```markdown
**Context (上下文):**
You are a Senior API Testing Expert. We are preparing to release a critical set of APIs. We need to ensure that these APIs are robust, secure, and performant under load. The architecture involves multiple microservices communicating via REST and gRPC.

**Action (行动):**
Develop a full-scale API Testing Strategy. 
1.  Define the scope for Functional, Performance, and Security testing.
2.  Design test data strategies (Positive, Negative, Boundary, Injection).
3.  Outline the automation framework selection (e.g., REST Assured vs Pytest).
4.  Specify the verification points: Status Codes, Schema Validation, Response Time, and Error Messages.

**Result (结果):**
A structured Markdown document that serves as a guide for the QA team to implement specific test cases and automation scripts. It should enable the team to catch 95% of defects before production.

**Example (示例):**
Include a specific test case format like:
-   **Scenario:** Create User with Invalid Email
-   **Method:** POST /users
-   **Body:** `{"name": "Test", "email": "invalid-email"}`
-   **Expected:** 400 Bad Request
-   **Validation:** Error message should contain "Invalid email format".
```
