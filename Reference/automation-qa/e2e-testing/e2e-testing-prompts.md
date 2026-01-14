# Automation QA - End-to-End (E2E) Testing Prompts

## 📋 Metadata
- **Difficulty**: Advanced
- **Estimated Time**: 30min
- **Prerequisites**: Understanding of system architecture, user journeys, integration points
- **Tags**: #advanced #e2e #integration #user-journey #automation
- **Last Updated**: 2026-01-01
- **Version**: 1.0

## 🎯 Objective
Generate comprehensive end-to-end test scenarios that validate complete user journeys across multiple systems, services, and data flows.

## 📝 Prompt Templates

### 1. User Journey E2E Test

```
Create an end-to-end test for the following user journey:

Journey Name: [JOURNEY_NAME]
User Persona: [USER_TYPE]
Starting Point: [ENTRY_POINT]
End Goal: [DESIRED_OUTCOME]

Systems Involved:
- [SYSTEM_1]: [ROLE]
- [SYSTEM_2]: [ROLE]
- [SYSTEM_3]: [ROLE]

Data Flow:
[DESCRIBE_DATA_FLOW]

Generate E2E test that:
- Covers complete user journey
- Validates data across all systems
- Includes authentication/authorization
- Handles asynchronous operations
- Verifies final state
- Includes rollback scenarios

Framework: [PLAYWRIGHT/CYPRESS/SELENIUM]
Language: [JAVASCRIPT/PYTHON/JAVA]
```

### 2. Multi-System Integration Test

```
Create E2E integration test for:

Integration Scenario: [SCENARIO_NAME]
Systems:
- Frontend: [TECHNOLOGY]
- Backend API: [TECHNOLOGY]
- Database: [TYPE]
- Message Queue: [KAFKA/RABBITMQ/SQS]
- External Service: [SERVICE_NAME]

Test Flow:
1. [STEP_1]
2. [STEP_2]
3. [STEP_3]

Generate test that validates:
- Request/response flow
- Data transformation at each layer
- Message queue processing
- Database state changes
- External API calls
- Error propagation
- Transaction consistency
```

### 3. Business Process E2E Test

```
Create E2E test for business process:

Process Name: [PROCESS_NAME]
Business Rules: [LIST_RULES]
Actors: [LIST_ACTORS_AND_ROLES]
Duration: [EXPECTED_DURATION]

Process Steps:
1. [STEP_1_DESCRIPTION]
2. [STEP_2_DESCRIPTION]
3. [STEP_3_DESCRIPTION]

Generate test covering:
- Happy path completion
- Business rule validation
- Multi-actor interactions
- State transitions
- Approval workflows
- Notification triggers
- Audit trail verification
- Compliance checks
```

### 4. Data Flow Validation Test

```
Create E2E data flow validation test:

Data Source: [SOURCE_SYSTEM]
Intermediate Systems: [LIST_SYSTEMS]
Final Destination: [DESTINATION_SYSTEM]
Data Type: [DATA_DESCRIPTION]

Transformations:
- [TRANSFORMATION_1]
- [TRANSFORMATION_2]
- [TRANSFORMATION_3]

Generate test that:
- Injects data at source
- Tracks data through pipeline
- Validates transformations
- Verifies data integrity
- Checks data quality
- Confirms final state
- Measures processing time
- Handles failures gracefully
```

### 5. Microservices E2E Test

```
Create E2E test for microservices architecture:

Use Case: [USE_CASE_NAME]
Microservices Involved:
- [SERVICE_1]: [RESPONSIBILITY]
- [SERVICE_2]: [RESPONSIBILITY]
- [SERVICE_3]: [RESPONSIBILITY]

Communication: [REST/GRAPHQL/GRPC/MESSAGE_QUEUE]
Service Mesh: [ISTIO/LINKERD/NONE]

Generate test that:
- Calls services in correct sequence
- Validates service contracts
- Handles service failures
- Tests circuit breakers
- Verifies distributed tracing
- Checks eventual consistency
- Validates saga patterns
- Tests timeout scenarios

Include:
- Test setup/teardown
- Service mocking strategy
- Data cleanup
```

### 6. Mobile-to-Backend E2E Test

```
Create mobile-to-backend E2E test:

Mobile App: [APP_NAME]
Platform: [IOS/ANDROID/BOTH]
Backend: [API_TECHNOLOGY]
Features to Test: [LIST_FEATURES]

Generate test that:
- Simulates mobile app actions
- Validates API calls
- Checks database updates
- Verifies push notifications
- Tests offline sync
- Validates data encryption
- Checks session management
- Tests background processes

Tools: [APPIUM/DETOX] + [API_TESTING_TOOL]
```

## 🔧 Customization Guide

### Placeholders Explained

- **[JOURNEY_NAME]**: Complete user journey description
  - Example: `New user registration to first purchase`
  - Tips: Focus on business-critical paths

- **[SYSTEMS_INVOLVED]**: All systems in the flow
  - Example: `Web UI, Auth Service, Payment Gateway, Email Service, Database`
  - Tips: Include external dependencies

- **[DATA_FLOW]**: How data moves through systems
  - Example: `User input → API → Database → Queue → Email Service`
  - Tips: Map complete data journey

- **[BUSINESS_RULES]**: Rules that must be validated
  - Example: `Order total must match cart total, inventory must be reserved`
  - Tips: Include all critical validations

## 💡 Example Usage

### Scenario
Need to create E2E test for complete e-commerce checkout process from cart to order confirmation.

### Filled Prompt
```
Create an end-to-end test for the following user journey:

Journey Name: Complete Checkout Process
User Persona: Registered Customer
Starting Point: Shopping cart with items
End Goal: Order placed and confirmation email received

Systems Involved:
- Frontend: React SPA
- API Gateway: Node.js/Express
- Order Service: Java/Spring Boot
- Payment Service: Stripe Integration
- Inventory Service: Python/FastAPI
- Email Service: SendGrid
- Database: PostgreSQL

Data Flow:
Cart → Order Creation → Payment Processing → Inventory Update → Order Confirmation → Email Notification

Generate E2E test that:
- Covers complete user journey
- Validates data across all systems
- Includes authentication/authorization
- Handles asynchronous operations
- Verifies final state
- Includes rollback scenarios

Framework: Playwright
Language: TypeScript
```

### Expected AI Response
```typescript
// e2e-checkout.spec.ts
import { test, expect } from '@playwright/test';
import { APIRequestContext } from '@playwright/test';

test.describe('E2E Checkout Process', () => {
  let apiContext: APIRequestContext;
  let orderId: string;
  let userId: string;

  test.beforeAll(async ({ playwright }) => {
    apiContext = await playwright.request.newContext({
      baseURL: process.env.API_BASE_URL,
      extraHTTPHeaders: {
        'Authorization': `Bearer ${process.env.TEST_TOKEN}`
      }
    });
  });

  test('Complete checkout journey', async ({ page }) => {
    // Step 1: Login
    await page.goto('/login');
    await page.fill('[data-testid="email"]', 'test@example.com');
    await page.fill('[data-testid="password"]', 'TestPass123');
    await page.click('[data-testid="login-button"]');
    await expect(page).toHaveURL('/dashboard');

    // Step 2: Add items to cart
    await page.goto('/products');
    await page.click('[data-testid="product-1-add-to-cart"]');
    await page.click('[data-testid="product-2-add-to-cart"]');
    
    // Verify cart count
    await expect(page.locator('[data-testid="cart-count"]')).toHaveText('2');

    // Step 3: Navigate to checkout
    await page.click('[data-testid="cart-icon"]');
    await expect(page.locator('[data-testid="cart-item"]')).toHaveCount(2);
    await page.click('[data-testid="checkout-button"]');

    // Step 4: Fill shipping information
    await page.fill('[data-testid="address"]', '123 Test St');
    await page.fill('[data-testid="city"]', 'Test City');
    await page.fill('[data-testid="zip"]', '12345');
    await page.click('[data-testid="continue-to-payment"]');

    // Step 5: Process payment
    await page.fill('[data-testid="card-number"]', '4242424242424242');
    await page.fill('[data-testid="card-expiry"]', '12/25');
    await page.fill('[data-testid="card-cvc"]', '123');
    await page.click('[data-testid="place-order"]');

    // Step 6: Wait for order confirmation
    await expect(page.locator('[data-testid="order-confirmation"]')).toBeVisible({ timeout: 10000 });
    
    // Extract order ID
    const orderText = await page.locator('[data-testid="order-number"]').textContent();
    orderId = orderText?.match(/\d+/)?.[0] || '';

    // Step 7: Verify order in database via API
    const orderResponse = await apiContext.get(`/api/orders/${orderId}`);
    expect(orderResponse.ok()).toBeTruthy();
    const orderData = await orderResponse.json();
    
    expect(orderData.status).toBe('confirmed');
    expect(orderData.items).toHaveLength(2);
    expect(orderData.payment_status).toBe('paid');

    // Step 8: Verify inventory was updated
    const inventoryResponse = await apiContext.get('/api/inventory/check');
    const inventoryData = await inventoryResponse.json();
    
    // Verify items were decremented
    expect(inventoryData.product_1.available).toBeLessThan(inventoryData.product_1.previous);

    // Step 9: Verify email was sent (check email service API)
    await page.waitForTimeout(5000); // Wait for async email processing
    
    const emailResponse = await apiContext.get(`/api/emails/sent?orderId=${orderId}`);
    const emailData = await emailResponse.json();
    
    expect(emailData.emails).toContainEqual(
      expect.objectContaining({
        to: 'test@example.com',
        subject: expect.stringContaining('Order Confirmation'),
        orderId: orderId
      })
    );

    // Step 10: Verify audit trail
    const auditResponse = await apiContext.get(`/api/audit/order/${orderId}`);
    const auditData = await auditResponse.json();
    
    expect(auditData.events).toContainEqual(
      expect.objectContaining({ event: 'order_created' })
    );
    expect(auditData.events).toContainEqual(
      expect.objectContaining({ event: 'payment_processed' })
    );
    expect(auditData.events).toContainEqual(
      expect.objectContaining({ event: 'inventory_updated' })
    );
  });

  test.afterAll(async () => {
    // Cleanup: Cancel order and restore inventory
    if (orderId) {
      await apiContext.post(`/api/orders/${orderId}/cancel`);
    }
    await apiContext.dispose();
  });
});
```

## ✅ Expected Output

The AI should provide:
1. **Complete E2E test code** covering entire journey
2. **Multi-system validation** across all integration points
3. **Data verification** at each step
4. **Async handling** for background processes
5. **Cleanup strategies** for test data

**Quality Indicators**:
- [ ] Tests complete user journey end-to-end
- [ ] All systems are validated
- [ ] Data flow is verified
- [ ] Error scenarios are handled
- [ ] Cleanup is implemented

## 🔗 Related Prompts

- [Integration Testing](../api-automation/) - For API integration tests
- [User Journey Testing](../../manual-qa/test-case-creation/) - For manual journey tests
- [Microservices Testing](../contract-testing/) - For service contracts
- [Data Flow Testing](../database-testing/) - For data validation

## 📚 Additional Resources

- [E2E Testing Best Practices](https://martinfowler.com/articles/practical-test-pyramid.html)
- [Playwright E2E Guide](https://playwright.dev/docs/test-runners)
- [Cypress E2E Patterns](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test)
- [Testing Microservices](https://martinfowler.com/articles/microservice-testing/)

## 💭 Tips for Best Results

1. **Focus on Critical Paths**: Test business-critical user journeys first
2. **Validate Data Flow**: Check data at each integration point
3. **Handle Async Operations**: Use proper waits for background processes
4. **Clean Up Test Data**: Always restore system state after tests
5. **Monitor Dependencies**: Ensure all external services are available

## 🐛 Troubleshooting

**Issue**: Test is flaky due to timing
- **Solution**: Use explicit waits, poll for state changes, avoid fixed sleeps

**Issue**: External service failures
- **Solution**: Implement retry logic, use service virtualization for non-critical services

**Issue**: Test data conflicts
- **Solution**: Use unique identifiers, implement proper cleanup, use test isolation

---

**Note**: E2E tests are expensive to maintain. Focus on critical business flows and complement with lower-level integration and unit tests.
