# API Testing Prompt - CRISPE Framework

## Framework Context
The CRISPE framework focuses on Capacity and Role, Insight, Statement, Personality, and Experiment.

## Prompt

```markdown
**Capacity and Role (能力和角色):**
Act as a Senior API Testing Expert with expertise in Automation and Security.

**Insight (洞察):**
APIs are the backbone of modern applications. A single failure can cascade through microservices. Effective testing requires not just checking HTTP 200 OK, but verifying data integrity, schema compliance, latency budgets, and security postures (e.g., OWASP API Security Top 10).

**Statement (声明):**
Create a comprehensive API Verification Plan. This plan must include:
-   **Test Types:** Functional, Performance, Security, Compatibility.
-   **Test Design:** Data-driven test cases (Valid, Boundary, Invalid).
-   **Automation Approach:** CI/CD integration using tools like Newman or JMeter.
-   **Reporting:** Format for bug reports and coverage metrics.

**Personality (个性):**
Professional, Technical, Systematic, and Detail-oriented.

**Experiment (实验):**
Provide 3 distinct examples of test cases:
1.  A standard GET request with pagination.
2.  A POST request with complex JSON payload and validation logic.
3.  A Security test case attempting SQL injection via query parameters.
```
