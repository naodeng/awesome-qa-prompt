# Consumer-Driven Contract Testing Prompts

## 1. Consumer-Driven Contract Strategy

```
Design a consumer-driven contract testing strategy for:

Architecture: [Microservices/Monolith/Hybrid]
Number of Services: [COUNT]
Communication Style: [REST/GraphQL/gRPC/Messaging]

Define:
- Contract ownership model
- Consumer requirements gathering
- Provider implementation workflow
- Breaking change process
- Version compatibility strategy
- CI/CD integration approach
```

## 2. Contract First Development

```
Create a contract-first development workflow for:

New Feature: [FEATURE_NAME]
Consumer Service: [SERVICE]
Provider Service: [SERVICE]

Workflow should include:
1. Consumer defines contract expectations
2. Contract review and approval process
3. Provider implements to contract
4. Automated verification setup
5. Stub generation and distribution
6. Integration testing approach
```

## 3. Cross-Team Contract Collaboration

```
Establish cross-team contract collaboration for:

Consumer Team: [TEAM_NAME]
Provider Team: [TEAM_NAME]
Contract Tool: [Pact/Spring Cloud Contract]

Include:
- Communication protocols
- Contract review process
- Change request workflow
- Breaking change notifications
- Documentation standards
- Dispute resolution process
```

## Core Principles of Consumer-Driven Contracts

### 1. Consumer Defines Expectations
**The consumer specifies what they need, not what the provider offers**

```markdown
Consumer Perspective:
- "I need user data with id, name, and email fields"
- "I expect 200 status for valid requests"
- "I need timestamps in ISO 8601 format"

Provider Responsibility:
- Implement to meet consumer contracts
- Can add additional fields (additive changes)
- Cannot remove contracted fields
- Cannot change data types of contracted fields
```

### 2. Independent Service Evolution

**Services can evolve independently as long as contracts are honored**

```markdown
Consumer Benefits:
- Can develop against stubs without waiting for provider
- Fast feedback on integration issues
- No need for integrated test environments
- Parallel development with provider team

Provider Benefits:
- Clear requirements from consumers
- Freedom to refactor internal implementation
- Confidence in backward compatibility
- Early detection of breaking changes
```

## Contract Testing Workflow

### Phase 1: Consumer Creates Contract

```javascript
// Consumer writes test defining expectations
describe('User API Contract', () => {
  it('should get user by ID', async () => {
    const expectedUser = {
      id: 123,
      name: 'John Doe',
      email: 'john@example.com',
      // Consumer doesn't care about other fields provider might return
    };

    const interaction = {
      state: 'user 123 exists',
      uponReceiving: 'request for user 123',
      withRequest: {
        method: 'GET',
        path: '/api/users/123',
      },
      willRespondWith: {
        status: 200,
        body: matcherUser(expectedUser)
      }
    };

    await provider.addInteraction(interaction);
    
    // Test consumer code against mock
    const user = await userService.getUser(123);
    expect(user).toEqual(expectedUser);
  });
});
```

### Phase 2: Provider Verifies Contract

```java
@Provider("UserAPI")
@PactBroker(host = "pact-broker", port = "443")
public class UserAPIContractTest {
    
    @TestTemplate
    @ExtendWith(PactVerificationInvocationContextProvider.class)
    void verifyContract(PactVerificationContext context) {
        context.verifyInteraction();
    }
    
    @State("user 123 exists")
    public void userExists() {
        // Provider sets up test data
        userRepository.save(new User(123, "John Doe", "john@example.com"));
    }
}
```

## Contract Evolution Patterns

### 1. Additive Changes (Safe)

```diff
// Provider can safely add new fields
{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com",
+ "phone": "+1234567890",        // NEW: Safe addition
+ "address": {                    // NEW: Safe addition
+   "city": "New York",
+   "country": "USA"
+ }
}
```

### 2. Breaking Changes (Requires Migration)

```diff
// These changes break existing consumer contracts
{
  "id": 123,
- "name": "John Doe",              // REMOVED: Breaking change
+ "firstName": "John",              // CHANGED: Breaking change
+ "lastName": "Doe",                // NEW: But breaks consumer expectations
  "email": "john@example.com"
}
```

**Breaking Change Process:**
```
1. Consumer team reviews proposed change
2. If approved, consumer updates contract
3. Consumer deploys new version that works with both old and new
4. Provider implements new version
5. Provider verifies all consumer contracts pass
6. Provider deploys new version
7. Old consumer version deprecated
8. After grace period, old version removed
```

### 3. Parallel Change Pattern

```
Step 1: Provider adds new field alongside old field
{
  "name": "John Doe",          // Old field (deprecated)
  "fullName": "John Doe"       // New field
}

Step 2: Consumers migrate to new field at their own pace

Step 3: When all consumers migrated, provider removes old field
{
  "fullName": "John Doe"       // Only new field remains
}
```

## Multi-Consumer Contract Management

```
Provider must satisfy ALL consumer contracts

Consumer A expects:
{
  "id": number,
  "name": string
}

Consumer B expects:
{
  "id": number,
  "name": string,
  "email": string
}

Consumer C expects:
{
  "id": number,
  "name": string,
  "email": string,
  "status": string
}

Provider must return:
{
  "id": number,        // Required by A, B, C
  "name": string,      // Required by A, B, C
  "email": string,     // Required by B, C
  "status": string     // Required by C
}
```

## Contract Versioning Strategy

### Semantic Versioning for Contracts

```
Major version (1.0.0 -> 2.0.0): Breaking changes
- Field removed
- Field type changed
- Required field added
- Endpoint URL changed

Minor version (1.0.0 -> 1.1.0): Additive changes
- Optional field added
- New endpoint added
- Response includes additional data

Patch version (1.0.0 -> 1.0.1): Non-functional changes
- Documentation updates
- Test improvements
- Internal refactoring
```

### Can-I-Deploy Checks

```bash
# Before deploying consumer
pact-broker can-i-deploy \
  --pacticipant UserServiceConsumer \
  --version 1.2.3 \
  --to production

# Before deploying provider
pact-broker can-i-deploy \
  --pacticipant UserAPIProvider \
  --version 2.0.0 \
  --to production

# Returns: Yes/No based on contract verification status
```

## Best Practices

### 1. Contract Ownership
- **Consumers own the contracts** - they define what they need
- Providers verify they can satisfy consumer needs
- Contracts stored in shared repository (Pact Broker)

### 2. Testing Strategy
- Consumer tests run on every commit (fast, isolated)
- Provider verification runs before deployment
- Use `can-i-deploy` as deployment gate

### 3. Communication
- Use Pact Broker webhooks for provider notifications
- Document breaking changes in advance
- Maintain compatibility matrix
- Regular cross-team sync meetings

### 4. CI/CD Integration
```yaml
# Consumer Pipeline
stages:
  - test:
      - run consumer contract tests
      - publish contracts to broker
  
  - verify:
      - can-i-deploy check
  
  - deploy:
      - if can-i-deploy passes
      - tag version in broker

# Provider Pipeline
stages:
  - verify:
      - fetch contracts from broker
      - run provider verification tests
      - publish verification results
  
  - check:
      - can-i-deploy check
  
  - deploy:
      - if can-i-deploy passes
      - tag version in broker
```

### 5. Contract Design
- Keep contracts minimal (test what matters to consumer)
- Use matchers for flexible validation (types, not values)
- Define clear provider states
- Version your contracts
- Document assumptions and expectations

## Common Prompts

### Establish CDC Process
```
Create a consumer-driven contract testing process for:

Organization Size: [TEAM_COUNT]
Contract Tool: [TOOL]
Repository: [BROKER_URL]

Include:
- Team onboarding process
- Contract lifecycle workflow
- Breaking change procedure
- Monitoring and alerts
- Training materials
```

### Contract Migration
```
Migrate existing integration tests to CDC:

Current Approach: [E2E/Integration tests]
Target: Consumer-Driven Contracts
Services to Migrate: [LIST]

Create migration plan with:
- Gap analysis
- Phased migration approach
- Risk mitigation
- Rollback strategy
```

### Contract Governance
```
Establish contract governance for:

Number of Services: [COUNT]
Teams: [COUNT]

Define:
- Contract review board
- Approval process
- Quality standards
- Version control policy
- Deprecation guidelines
```
