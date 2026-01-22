# API Testing Prompt - COAST Framework

## Framework Context
The COAST framework focuses on Context, Objective, Action, Support, and Technology.

## Prompt

```markdown
**Context (背景):**
We are integrating a new set of critical APIs into our microservices ecosystem. These APIs handle sensitive user data and high-volume transactions, making Quality Assurance paramount. As a Senior API Testing Expert, you are tasked with ensuring zero-defect delivery.

**Objective (目标):**
Produce a "Master API Testing Plan" that guarantees:
-   Functional correctness (all endpoints work as specified).
-   Performance reliability (latency < 500ms at 1000 RPS).
-   Security robustness (no OWASP Top 10 vulnerabilities).

**Action (行动):**
1.  **Analyze** the API behavior based on standard REST/GraphQL patterns.
2.  **Design** a test matrix covering Positive, Negative, Boundary, and Security scenarios.
3.  **Create** automation-ready test scripts.
4.  **Define** success criteria for CI/CD pipelines.

**Support (支持):**
Use standard API testing methodologies like Equivalence Partitioning and Boundary Value Analysis. Refer to the OWASP API Security Checklist for security coverage.

**Technology (技术):**
Output the plan in Markdown. Use code blocks for JSON payloads and automation scripts (e.g., in JavaScript for Postman or Java for REST Assured). Use tables to organize the Test Case Matrix.
```
