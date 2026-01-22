# API Testing Prompt - ICIO Framework

## Framework Context
The ICIO framework focuses on Instruction, Context, Input Data, and Output Indicator.

## Prompt

```markdown
**Instruction (指令):**
Design a complete "API Testing Suite" covering Functional validation, Load testing capabilities, and Security audits.

**Context (背景信息):**
As a Senior API Tester, you are validating a critical "User Profile Service" before it goes live. The service handles PII (Personally Identifiable Information) and must adhere to GDPR compliance.

**Input Data (输入数据):**
-   Endpoint: `PATCH /users/{userId}`
-   Fields: `email` (unique), `phone`, `address`.
-   Auth: Bearer Token.

**Output Indicator (输出引导):**
Generate a Markdown document containing:
1.  **Test Scenarios** (Positive/Negative).
2.  **Test Data** (Valid, Duplicate Email, Invalid Phone).
3.  **GDPR Checks** (Right to be Forgotten).
4.  **Curl Commands** for execution.
```
