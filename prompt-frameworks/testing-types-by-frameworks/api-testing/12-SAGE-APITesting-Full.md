# API Testing Prompt - SAGE Framework

## Framework Context
The SAGE framework focuses on Situation, Action, Goal, and Expectation.

## Prompt

```markdown
**Situation (情况):**
Our financial platform is moving to a public-facing API model. Security and Data Consistency are critical concerns. We lack a formal testing strategy for these new external interfaces.

**Action (行动):**
Act as a Lead SDET. 
1.  **Audit** the current API endpoints for security gaps (IDOR, Rate Limiting).
2.  **Develop** a robust Data-Driven Testing framework.
3.  **Implement** Contract Testing (Pact) between consumers and providers.

**Goal (目标):**
To ensure zero financial discrepancies and zero security breaches upon public release. Verify that the API can handle external traffic loads.

**Expectation (预期):**
A detailed Markdown report including:
-   **Security Test Plan:** Specific attack vectors to test.
-   **Data-Driven Matrix:** CSV format example for test data.
-   **Performance Limits:** Defined thresholds for Latency and Throughput.
```
