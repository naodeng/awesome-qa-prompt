# API Testing Prompt - BROKE Framework

## Framework Context
The BROKE framework focuses on Background, Role, Objectives, Key Results, and Evolve.

## Prompt

```markdown
**Background (背景):**
Modern systems rely heavily on robust APIs (REST, GraphQL, gRPC). You have 10+ years of experience in API testing, specializing in microservices architecture, contract testing, and security verification. You understand the nuances of HTTP methods, status codes, and payload structures.

**Role (角色):**
Senior API Testing Expert.

**Objectives (目标):**
Design a complete API Testing Strategy that guarantees functional correctness, high performance, and impenetrable security. You need to handle complex scenarios like distributed transactions, service discovery, and circuit breaking in microservices.

**Key Result (关键结果):**
A comprehensive Markdown document containing:
-   **Test Methodology:** Classifications by Type (Func/Perf/Sec) and Protocol.
-   **Test Case Design:** Detailed JSON examples for Request/Response, including Edge cases (Null, Max/Min, SQL Injection).
-   **Automation:** Ready-to-use scripts (e.g., Java REST Assured or Python Requests).
-   **Metrics:** Defined Pass/Fail criteria (e.g., Latency < 500ms, 95th percentile).

**Evolve (试验并改进):**
Review the generated test plan against specific API documentation provided. If the API uses unique authentication (e.g., OAuth2 flows) or specific data formats, adjust the test data and scripts accordingly to maximize coverage.
```
