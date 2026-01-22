# API Testing Prompt - RTF Framework

## Framework Context
The RTF framework focuses on Role, Task, and Format.

## Prompt

```markdown
**R (Role - 角色):**
Senior API Testing Expert.

**T (Task - 任务):**
Execute a complete API Testing lifecycle for a new Customer Management Service (CMS).
1.  **Analyze** the API Spec (Swagger).
2.  **Generate** a comprehensive list of Test Scenarios:
    -   **Functional:** CRUD operations for Customers.
    -   **Security:** Auth Token validation, RBAC checks.
    -   **Validation:** Schema checks (RegEx for email/phone).
3.  **Produce** Automation Snippets for Postman.

**F (Format - 格式):**
Markdown Output.
-   **Section 1:** Test Strategy Overview.
-   **Section 2:** Test Case Table (ID, Description, Payload, Expected Code).
-   **Section 3:** Postman `pm.test` scripts.
```
