# API Testing - Advanced Patterns

## 📋 Metadata
- **Difficulty**: Advanced
- **Estimated Time**: 45min
- **Prerequisites**: Strong API testing experience, understanding of authentication, data-driven testing
- **Tags**: #advanced #api #rest-assured #performance #security #contract-testing
- **Last Updated**: 2026-01-01
- **Version**: 1.0

## 🎯 Objective
Implement advanced API testing patterns including contract testing, performance validation, security testing, and complex authentication flows.

## 📝 Prompt Templates

### 1. Contract Testing with Pact

```
Generate consumer-driven contract tests:

Consumer: [CONSUMER_SERVICE]
Provider: [PROVIDER_SERVICE]
Contract Scenarios: [LIST_SCENARIOS]
Technology: [PACT_JS/PACT_JVM/PACT_PYTHON]

Create:
- Consumer contract definitions
- Provider verification tests
- Pact broker integration
- CI/CD pipeline integration
- Contract versioning strategy
- Breaking change detection

Include:
- State management
- Matcher usage
- Verification publishing
- Can-i-deploy checks
```

### 2. Advanced Authentication Flows

```
Implement complex authentication testing:

Auth Type: [OAUTH2/SAML/JWT/MUTUAL_TLS]
Flow: [AUTHORIZATION_CODE/CLIENT_CREDENTIALS/PKCE]
Token Management: [REFRESH_STRATEGY]

Generate tests for:
- Complete auth flow automation
- Token lifecycle management
- Refresh token rotation
- Multi-tenant scenarios
- Role-based access control
- Token expiration handling
- Concurrent session management
- Security header validation

Framework: [REST_ASSURED/KARATE/SUPERTEST]
```

### 3. API Performance Testing

```
Create comprehensive API performance tests:

Endpoints: [LIST_CRITICAL_ENDPOINTS]
Load Profile: [EXPECTED_LOAD]
SLAs:
- Response time: [P95_THRESHOLD]
- Throughput: [RPS_TARGET]
- Error rate: [MAX_ERROR_RATE]

Generate tests for:
- Baseline performance
- Load testing scenarios
- Stress testing
- Spike testing
- Endurance testing
- Bottleneck identification
- Resource utilization monitoring

Tool: [K6/GATLING/JMETER/LOCUST]
Include: Metrics collection, reporting, CI integration
```

### 4. GraphQL Advanced Testing

```
Create advanced GraphQL API tests:

Schema: [GRAPHQL_SCHEMA_URL]
Complex Queries: [DESCRIBE_QUERIES]
Mutations: [DESCRIBE_MUTATIONS]
Subscriptions: [DESCRIBE_SUBSCRIPTIONS]

Generate tests for:
- Query depth limiting
- Query complexity analysis
- N+1 query detection
- Batching and caching
- Error handling (partial responses)
- Schema introspection
- Subscription lifecycle
- Real-time data validation
- Performance optimization

Framework: [APOLLO_CLIENT/GRAPHQL_REQUEST/KARATE]
```

### 5. API Security Testing

```
Generate security-focused API tests:

API: [API_NAME]
Authentication: [AUTH_METHOD]
Sensitive Endpoints: [LIST_ENDPOINTS]

Create tests for:
- OWASP API Security Top 10
- Injection attacks (SQL, NoSQL, Command)
- Broken authentication
- Excessive data exposure
- Rate limiting bypass
- CORS misconfiguration
- Security headers validation
- Sensitive data in responses
- Mass assignment vulnerabilities
- SSRF attacks

Include:
- Fuzzing strategies
- Payload libraries
- Security assertions
- Compliance checks
```

### 6. Microservices Integration Testing

```
Design microservices integration test suite:

Architecture: [DESCRIBE_ARCHITECTURE]
Services: [LIST_SERVICES_AND_DEPENDENCIES]
Communication: [REST/GRPC/MESSAGE_QUEUE]
Service Mesh: [ISTIO/LINKERD/CONSUL]

Generate tests for:
- Service-to-service communication
- Circuit breaker patterns
- Retry mechanisms
- Timeout handling
- Distributed tracing validation
- Service discovery
- Load balancing
- Fault injection
- Chaos engineering scenarios

Include:
- Test containers setup
- Service mocking
- Data isolation
- Parallel execution
```

## 🔧 Customization Guide

### Placeholders Explained

- **[CONSUMER_SERVICE]** / **[PROVIDER_SERVICE]**: Services in contract testing
  - Example: `order-service` (consumer), `inventory-api` (provider)
  - Tips: Define clear contract boundaries

- **[AUTH_TYPE]**: Authentication mechanism
  - Example: `OAuth 2.0 with PKCE`, `Mutual TLS`
  - Tips: Match production authentication exactly

- **[P95_THRESHOLD]**: 95th percentile response time
  - Example: `200ms`, `500ms`
  - Tips: Base on actual SLAs

- **[GRAPHQL_SCHEMA_URL]**: GraphQL schema endpoint
  - Example: `https://api.example.com/graphql`
  - Tips: Use introspection for schema validation

## 💡 Example Usage

### Scenario
Implement contract testing between order service and payment API.

### Filled Prompt
```
Generate consumer-driven contract tests:

Consumer: order-service
Provider: payment-api
Contract Scenarios:
- Process payment for valid order
- Reject payment for insufficient funds
- Handle payment timeout
Technology: Pact JVM

Create:
- Consumer contract definitions
- Provider verification tests
- Pact broker integration
- CI/CD pipeline integration
- Contract versioning strategy
- Breaking change detection

Include:
- State management
- Matcher usage
- Verification publishing
- Can-i-deploy checks
```

### Expected AI Response
```java
// Consumer: order-service
@ExtendWith(PactConsumerTestExt.class)
@PactTestFor(providerName = "payment-api")
public class PaymentApiContractTest {
    
    @Pact(consumer = "order-service")
    public RequestResponsePact processPaymentSuccess(PactDslWithProvider builder) {
        return builder
            .given("payment gateway is available")
            .given("customer has sufficient funds")
            .uponReceiving("a request to process payment")
                .path("/api/v1/payments")
                .method("POST")
                .headers("Content-Type", "application/json")
                .body(new PactDslJsonBody()
                    .stringType("orderId", "ORD-12345")
                    .decimalType("amount", 99.99)
                    .stringType("currency", "USD")
                    .stringType("customerId", "CUST-789"))
            .willRespondWith()
                .status(200)
                .headers(Map.of("Content-Type", "application/json"))
                .body(new PactDslJsonBody()
                    .stringMatcher("transactionId", "TXN-[0-9]+", "TXN-98765")
                    .stringValue("status", "SUCCESS")
                    .decimalType("amount", 99.99)
                    .timestamp("processedAt", "yyyy-MM-dd'T'HH:mm:ss'Z'"))
            .toPact();
    }

    @Test
    @PactTestFor(pactMethod = "processPaymentSuccess")
    void testProcessPayment(MockServer mockServer) {
        // Arrange
        PaymentClient client = new PaymentClient(mockServer.getUrl());
        PaymentRequest request = PaymentRequest.builder()
            .orderId("ORD-12345")
            .amount(new BigDecimal("99.99"))
            .currency("USD")
            .customerId("CUST-789")
            .build();

        // Act
        PaymentResponse response = client.processPayment(request);

        // Assert
        assertThat(response.getStatus()).isEqualTo("SUCCESS");
        assertThat(response.getTransactionId()).matches("TXN-\\d+");
        assertThat(response.getAmount()).isEqualByComparingTo(new BigDecimal("99.99"));
    }
}

// Provider: payment-api
@Provider("payment-api")
@PactBroker(url = "${pact.broker.url}")
public class PaymentApiProviderTest {
    
    @TestTemplate
    @ExtendWith(PactVerificationInvocationContextProvider.class)
    void pactVerificationTestTemplate(PactVerificationContext context) {
        context.verifyInteraction();
    }

    @State("payment gateway is available")
    void paymentGatewayAvailable() {
        // Setup: Ensure payment gateway mock is running
        paymentGatewayMock.reset();
        paymentGatewayMock.stubFor(post("/charge")
            .willReturn(aResponse().withStatus(200)));
    }

    @State("customer has sufficient funds")
    void customerHasSufficientFunds() {
        // Setup: Configure customer with sufficient balance
        customerRepository.save(Customer.builder()
            .id("CUST-789")
            .balance(new BigDecimal("1000.00"))
            .build());
    }
}

// CI/CD Integration (GitHub Actions)
/*
name: Contract Testing

on: [push, pull_request]

jobs:
  consumer-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run consumer tests
        run: ./gradlew pactTest
      - name: Publish pacts
        run: ./gradlew pactPublish
        env:
          PACT_BROKER_TOKEN: ${{ secrets.PACT_BROKER_TOKEN }}

  can-i-deploy:
    needs: consumer-tests
    runs-on: ubuntu-latest
    steps:
      - name: Check if can deploy
        run: |
          pact-broker can-i-deploy \
            --pacticipant order-service \
            --version ${{ github.sha }} \
            --to production

  provider-verification:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run provider verification
        run: ./gradlew pactVerify
      - name: Publish verification results
        run: ./gradlew pactVerificationPublish
*/
```

## ✅ Expected Output

The AI should provide:
1. **Production-ready code** with advanced patterns
2. **Complete test suites** covering edge cases
3. **CI/CD integration** examples
4. **Performance benchmarks** and monitoring
5. **Security best practices** implementation

**Quality Indicators**:
- [ ] Tests are comprehensive and robust
- [ ] Advanced patterns are correctly implemented
- [ ] Code follows industry best practices
- [ ] Performance is optimized
- [ ] Security is properly validated

## 🔗 Related Prompts

- [Contract Testing](../contract-testing/) - More contract testing patterns
- [Performance Testing](../load-testing/) - Detailed performance testing
- [Security Testing](../security-testing/) - Security-focused testing
- [Microservices Testing](../framework-design/) - Architecture patterns

## 📚 Additional Resources

- [Pact Documentation](https://docs.pact.io/) - Contract testing
- [OWASP API Security](https://owasp.org/www-project-api-security/) - Security guidelines
- [GraphQL Best Practices](https://graphql.org/learn/best-practices/) - GraphQL patterns
- [Microservices Testing](https://martinfowler.com/articles/microservice-testing/) - Martin Fowler's guide

## 💭 Tips for Advanced Testing

1. **Shift Left**: Integrate contract tests early in development
2. **Automate Everything**: Performance, security, and contract tests in CI/CD
3. **Monitor Production**: Use production metrics to inform test scenarios
4. **Chaos Engineering**: Test failure scenarios regularly
5. **Keep Tests Fast**: Optimize for quick feedback loops

## 🐛 Troubleshooting

**Issue**: Contract tests failing in CI
- **Solution**: Ensure pact broker is accessible, check provider states

**Issue**: Performance tests are inconsistent
- **Solution**: Use dedicated test environment, control variables, run multiple iterations

**Issue**: Security tests causing false positives
- **Solution**: Tune detection rules, whitelist known safe patterns

---

**Note**: Advanced API testing requires deep understanding of system architecture, security, and performance. Always validate in production-like environments.
