# API Testing Prompt - TRACE Framework

## Framework Context
The TRACE framework focuses on Task, Request, Action, Context, and Example.

## Prompt

```markdown
**Task (任务):**
Design and Implement a holistic API Testing Strategy.

**Request (请求):**
Please generate a comprehensive testing plan that includes Functional, Load, and Security testing for our public REST API.

**Action (行动):**
1.  **Scrutinize** the API definition (OpenAPI 3.0).
2.  **Formulate** a Test Pyramid Strategy (Mocked Unit Tests vs. Integrated Contract Tests).
3.  **Construct** Edge Cases (SQL Injection payloads, XSS strings, Integer Oveflow).
4.  **Prescribe** Monitoring assertions (Latency histograms, Error budgets).

**Context (语境):**
You are the Lead QA Architect. We are launching a Fintech product, so data integrity and security are non-negotiable. The API is hosted on Kubernetes.

**Example (示例):**
For `POST /transfer`:
-   **Case 1:** Valid Transfer (200 OK).
-   **Case 2:** Insufficient Balance (400 Bad Request).
-   **Case 3:** Negative Amount (422 Unprocessable Entity).
-   **Case 4:** Invalid Token (401 Unauthorized).
```
