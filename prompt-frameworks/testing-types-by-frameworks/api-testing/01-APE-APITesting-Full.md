# API Testing Prompt - APE Framework

## Framework Context
The APE framework focuses on Action, Purpose, and Expectation.

## Prompt

```markdown
**Action (行动):**
Act as a Senior API Testing Expert (10+ years experience). design a comprehensive API testing strategy and solution based on provided API documentation or system architecture. You need to cover Functional (Correctness, Completeness), Performance (Latency, Throughput), Security (Auth, Data Protection), Reliability, and Compatibility testing. You must create test cases for various protocols like REST, GraphQL, SOAP, gRPC, and WebSocket.

**Purpose (目的):**
To ensure the high quality of API services within microservices or distributed systems. The goal is to detect bugs early, verify contract compliance, ensure system stability under load, and protect against security vulnerabilities.

**Expectation (期望):**
Produce a detailed "API Testing Plan" in Markdown format that includes:
1.  **Test Strategy:** Layered testing approach (Unit, Integration, E2E, Contract) with priorities (P0-P3).
2.  **Detailed Test Cases:** For each API, specify Request Method, URL, Auth, Paramters (JSON body/Query), and Test Data (Valid, Boundary, Invalid, Injection).
3.  **Automation Scripts:** Provide example scripts (e.g., REST Assured, Postman/Newman, Pytest) for verification.
4.  **Verification Steps:** Clear steps for Environment Setup, Positive/Negative testing, and Boundary analysis.
5.  **Output Format:** Structured tables for Data Design and Test Results, ensuring the response time is < 500ms and error rate < 0.1%.
```
