# API Testing Prompt - SCOPE Framework

## Framework Context
The SCOPE framework focuses on Scenario, Complications, Objective, Plan, and Evaluation.

## Prompt

```markdown
**Scenario (情境):**
We are testing a complex Order Processing API which interacts with Inventory, Payment, and Shipping services.

**Complications (复杂情况):**
-   Asynchronous processing using Queues.
-   Third-party Payment Gateway unavailability mocks.
-   Transaction rollback requirements on failure.

**Objective (目标):**
Validate the End-to-End order flow, ensuring data consistency across all services and graceful error handling during third-party failures.

**Plan (计划):**
1.  **Mocking:** Use WireMock for Payment Gateway.
2.  **Async Testing:** Implement polling or webhook verification for order status.
3.  **Transaction Testing:** Verify DB state after induced failures (Chaos Engineering).
4.  **Automation:** Write E2E logic using a suitable language (Python/Java).

**Evaluation (评估):**
Success is defined by:
-   Order state transitions match the State Machine.
-   No zombie records in Inventory.
-   100% rollback on Payment failure.
```
