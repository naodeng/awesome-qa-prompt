# Pact Contract Testing Prompts

## 1. Consumer Contract Test Generation

```
Create a Pact consumer contract test for:

Consumer Service: [CONSUMER_NAME]
Provider Service: [PROVIDER_NAME]
API Endpoint: [ENDPOINT_URL]
Method: [GET/POST/PUT/DELETE]

Request Details:
- Path: [PATH]
- Query Parameters: [PARAMS]
- Request Body: [BODY_SCHEMA]

Expected Response:
- Status Code: [CODE]
- Response Body: [EXPECTED_SCHEMA]
- Headers: [HEADERS]

Include:
- Pact configuration setup
- Consumer test implementation
- State management
- Matchers for flexible validation
- Pact file generation
```

## 2. Provider Verification Setup

```
Generate Pact provider verification for:

Provider Service: [SERVICE_NAME]
Pact Broker URL: [BROKER_URL]
Consumer Name: [CONSUMER]
Provider States: [LIST_STATES]

Create verification that:
- Fetches contracts from Pact Broker
- Sets up provider states
- Runs verification tests
- Publishes verification results
- Handles authentication
- Supports CI/CD integration
```

## 3. Pact Broker Integration

```
Set up Pact Broker integration for:

Technology: [Java/JavaScript/Python/C#]
Broker URL: [URL]
Authentication: [TYPE]

Include:
- Publishing contracts to broker
- Tagging versions (dev, staging, prod)
- Can-I-Deploy checks
- Webhook configurations
- Version management
- Network diagram setup
```

## Example: JavaScript/Jest Consumer Test

```javascript
const { pactWith } = require('jest-pact');
const axios = require('axios');

pactWith({ consumer: 'UserService', provider: 'AccountAPI' }, provider => {
  describe('GET /users/:id', () => {
    beforeEach(() => {
      const interaction = {
        state: 'user exists with id 123',
        uponReceiving: 'a request for user 123',
        withRequest: {
          method: 'GET',
          path: '/users/123',
          headers: {
            'Accept': 'application/json',
          },
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
          body: {
            id: 123,
            name: 'John Doe',
            email: 'john@example.com',
            status: 'active',
          },
        },
      };

      return provider.addInteraction(interaction);
    });

    it('returns the user data', async () => {
      const response = await axios.get(`${provider.mockService.baseUrl}/users/123`, {
        headers: { 'Accept': 'application/json' }
      });

      expect(response.status).toBe(200);
      expect(response.data.id).toBe(123);
      expect(response.data.name).toBe('John Doe');
    });
  });
});
```

## Example: Java/JUnit Provider Verification

```java
@Provider("AccountAPI")
@PactBroker(host = "pact-broker.example.com", port = "443", scheme = "https")
public class AccountAPIProviderTest {

    @TestTemplate
    @ExtendWith(PactVerificationInvocationContextProvider.class)
    void pactVerificationTestTemplate(PactVerificationContext context) {
        context.verifyInteraction();
    }

    @BeforeEach
    void setupTestTarget(PactVerificationContext context) {
        context.setTarget(new HttpTestTarget("localhost", 8080));
    }

    @State("user exists with id 123")
    public void userExists() {
        // Setup database or mock to have user with id 123
        userRepository.save(new User(123, "John Doe", "john@example.com"));
    }

    @State("no user exists")
    public void noUserExists() {
        // Clean up database
        userRepository.deleteAll();
    }
}
```

## Example: Python Consumer Test

```python
import pytest
from pact import Consumer, Provider
import requests

pact = Consumer('UserService').has_pact_with(Provider('AccountAPI'))

@pytest.fixture
def start_pact():
    pact.start_service()
    yield
    pact.stop_service()

def test_get_user(start_pact):
    expected = {
        'id': 123,
        'name': 'John Doe',
        'email': 'john@example.com',
        'status': 'active'
    }
    
    (pact
     .given('user exists with id 123')
     .upon_receiving('a request for user 123')
     .with_request('GET', '/users/123')
     .will_respond_with(200, body=expected))
    
    with pact:
        response = requests.get(f'{pact.uri}/users/123')
        assert response.json() == expected
```

## Best Practices

1. **Provider States**: Define clear, reusable provider states
2. **Matchers**: Use type matchers instead of exact values for flexibility
3. **Versioning**: Tag contracts with environment versions (dev, staging, prod)
4. **CI/CD Integration**: Run `can-i-deploy` before deployment
5. **Broker Management**: Use Pact Broker for contract sharing
6. **Backward Compatibility**: Ensure provider maintains backward compatibility
7. **Documentation**: Document all provider states and interactions
8. **Testing Strategy**: Run consumer tests on commit, provider verification on deployment

## Common Prompts

### Bi-Directional Contract Testing
```
Create a bi-directional Pact setup where:
- Service A is both consumer and provider
- Service B is both consumer and provider
- Include circular dependency handling
- Set up verification workflow
```

### Message Pact (Async)
```
Generate message-based Pact contract for:

Message Queue: [Kafka/RabbitMQ/SQS]
Consumer: [CONSUMER_NAME]
Producer: [PRODUCER_NAME]
Message Type: [EVENT_TYPE]

Expected Message Format:
[SCHEMA]

Include validation for:
- Message structure
- Headers/metadata
- Content validation
```

### Can-I-Deploy Check
```
Create a can-i-deploy CI pipeline step for:

Service: [SERVICE_NAME]
Version: [VERSION]
Environment: [TARGET_ENV]
Pact Broker: [BROKER_URL]

Include:
- Dependency verification
- Version compatibility check
- Deployment gate logic
```
