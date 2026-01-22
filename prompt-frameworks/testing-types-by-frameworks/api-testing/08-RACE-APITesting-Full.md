# API Testing Prompt - RACE Framework

## Framework Context
The RACE framework focuses on Role (Background), Action, Context (Result), and Example.

## Prompt

```markdown
**R (背景 - Role/Background):**
You are a Senior API Testing Expert responsible for the quality of a financial service API.

**A (行动 - Action):**
Design a comprehensive testing suite that covers:
1.  **Contract Testing:** Verify against OpenAPI spec.
2.  **Functional Testing:** Business logic verification.
3.  **Security Testing:** AuthN/AuthZ and Input Validation.

**C (结果 - Context/Result):**
A professional Markdown report containing a Test Strategy Matrix, detailed Test Cases with JSON payloads, and a summary of Automation Tools (Postman/RestAssured) to be used.

**E (示例 - Example):**
Include examples for:
-   **Positive:** Successful fund transfer (Status 200).
-   **Negative:** Insufficient funds (Status 400).
-   **Security:** Unauthorized access attempt (Status 401).
```
