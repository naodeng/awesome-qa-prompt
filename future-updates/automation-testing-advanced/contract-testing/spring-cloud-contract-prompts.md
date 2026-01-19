# Spring Cloud Contract Testing Prompts

## 1. Contract Definition (Groovy DSL)

```
Create a Spring Cloud Contract definition for:

API Endpoint: [ENDPOINT]
HTTP Method: [METHOD]
Producer/Provider: [SERVICE_NAME]

Request:
- Path: [PATH]
- Query Params: [PARAMS]
- Headers: [HEADERS]
- Body: [BODY_SCHEMA]

Response:
- Status: [CODE]
- Headers: [HEADERS]
- Body: [RESPONSE_SCHEMA]

Include:
- Contract DSL in Groovy format
- Matchers for flexible validation
- Request/response examples
- Base class configuration
```

## 2. Producer/Provider Side Setup

```
Generate Spring Cloud Contract producer configuration for:

Service Name: [SERVICE_NAME]
Base Package: [PACKAGE]
Contracts Location: [PATH]
Target Framework: [RestAssured/MockMvc/WebTestClient]

Include:
- Maven/Gradle plugin configuration
- Base test class setup
- Auto-generated tests execution
- Stub generation configuration
- Publishing stubs to repository
```

## 3. Consumer Side Testing

```
Create Spring Cloud Contract consumer test for:

Consumer Service: [SERVICE_NAME]
Provider Service: [PROVIDER_NAME]
Stub Artifact: [GROUP_ID:ARTIFACT_ID:VERSION]

Include:
- Stub runner configuration
- Consumer test implementation
- Mock server setup
- Integration test examples
- Stub download configuration
```

## Example: Contract Definition (Groovy DSL)

```groovy
package contracts.user

import org.springframework.cloud.contract.spec.Contract

Contract.make {
    description "Should return user by ID"
    
    request {
        method GET()
        url("/api/users/123") {
            queryParameters {
                parameter 'includeDetails': 'true'
            }
        }
        headers {
            contentType(applicationJson())
            header('Authorization': 'Bearer token123')
        }
    }
    
    response {
        status OK()
        headers {
            contentType(applicationJson())
        }
        body([
            id: $(consumer(123), producer(regex('[0-9]+'))),
            name: $(consumer('John Doe'), producer(regex('[a-zA-Z ]+'))),
            email: $(consumer('john@example.com'), producer(email())),
            createdAt: $(consumer('2024-01-01T00:00:00Z'), producer(isoDateTime())),
            status: 'ACTIVE'
        ])
    }
}
```

## Example: REST Assured Base Class

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc
public abstract class BaseContractTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserRepository userRepository;

    @BeforeEach
    public void setup() {
        RestAssuredMockMvc.mockMvc(mockMvc);
        setupTestData();
    }

    private void setupTestData() {
        // Create test data needed for contract verification
        User user = new User();
        user.setId(123L);
        user.setName("John Doe");
        user.setEmail("john@example.com");
        user.setStatus("ACTIVE");
        userRepository.save(user);
    }

    @AfterEach
    public void cleanup() {
        userRepository.deleteAll();
    }
}
```

## Example: Producer Maven Configuration

```xml
<plugin>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-contract-maven-plugin</artifactId>
    <version>4.0.0</version>
    <extensions>true</extensions>
    <configuration>
        <baseClassForTests>com.example.contracts.BaseContractTest</baseClassForTests>
        <testFramework>JUNIT5</testFramework>
        <testMode>MOCKMVC</testMode>
        <contractsDirectory>${project.basedir}/src/test/resources/contracts</contractsDirectory>
        <packageWithBaseClasses>com.example.contracts</packageWithBaseClasses>
    </configuration>
</plugin>
```

## Example: Consumer Test with Stub Runner

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureStubRunner(
    ids = "com.example:user-service:+:stubs:8080",
    stubsMode = StubRunnerProperties.StubsMode.LOCAL
)
public class UserServiceConsumerTest {

    @Autowired
    private RestTemplate restTemplate;

    private String stubUrl = "http://localhost:8080";

    @Test
    public void shouldGetUserById() {
        // Given
        long userId = 123;

        // When
        ResponseEntity<User> response = restTemplate.exchange(
            stubUrl + "/api/users/" + userId + "?includeDetails=true",
            HttpMethod.GET,
            createRequestWithHeaders(),
            User.class
        );

        // Then
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody().getId()).isEqualTo(userId);
        assertThat(response.getBody().getName()).isNotBlank();
        assertThat(response.getBody().getEmail()).contains("@");
    }

    private HttpEntity<?> createRequestWithHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer token123");
        return new HttpEntity<>(headers);
    }
}
```

## Example: Gradle Configuration

```gradle
plugins {
    id 'org.springframework.cloud.contract' version '4.0.0'
}

contracts {
    baseClassForTests = 'com.example.contracts.BaseContractTest'
    testFramework = 'JUNIT5'
    testMode = 'MOCKMVC'
    contractsDslDir = file("${project.projectDir}/src/test/resources/contracts")
    generatedTestSourcesDir = file("${project.buildDir}/generated-test-sources/contracts")
    packageWithBaseClasses = 'com.example.contracts'
}

dependencies {
    testImplementation 'org.springframework.cloud:spring-cloud-starter-contract-verifier'
    testImplementation 'org.springframework.cloud:spring-cloud-starter-contract-stub-runner'
}
```

## Advanced Contract Examples

### With Request Matchers
```groovy
Contract.make {
    request {
        method POST()
        url '/api/orders'
        headers {
            contentType(applicationJson())
        }
        body([
            productId: $(consumer(regex('[0-9]+')), producer(12345)),
            quantity: $(consumer(regex('[1-9][0-9]*')), producer(5)),
            price: $(consumer(regex('[0-9]+\\.[0-9]{2}')), producer(99.99))
        ])
        bodyMatchers {
            jsonPath('$.productId', byRegex('[0-9]+'))
            jsonPath('$.quantity', byRegex(positiveInt()))
            jsonPath('$.price', byRegex(aDouble()))
        }
    }
    response {
        status CREATED()
        body([
            orderId: $(consumer(regex('[A-Z0-9]+')), producer('ORD123')),
            status: 'PENDING'
        ])
    }
}
```

### With Messaging (Async)
```groovy
Contract.make {
    label 'user_created_event'
    
    input {
        triggeredBy('createUser()')
    }
    
    outputMessage {
        sentTo 'user-events'
        headers {
            header('contentType': 'application/json')
            header('eventType': 'USER_CREATED')
        }
        body([
            userId: $(consumer(regex('[0-9]+')), producer(123)),
            eventTime: $(consumer(regex(isoDateTime())), producer('2024-01-01T00:00:00Z')),
            action: 'CREATED'
        ])
    }
}
```

## Best Practices

1. **Contract Organization**: Group contracts by API endpoint or feature
2. **Versioning**: Use semantic versioning for contract stubs
3. **Base Classes**: Create separate base classes for different controllers
4. **Test Data**: Keep test data minimal and focused
5. **Matchers**: Use regex matchers for flexible validation
6. **CI/CD**: Publish stubs to artifact repository (Nexus, Artifactory)
7. **Documentation**: Document contract expectations and breaking changes
8. **Backward Compatibility**: Avoid breaking changes in contracts

## Common Prompts

### Multi-Consumer Contract
```
Create Spring Cloud Contract for multiple consumers:

Provider: [SERVICE_NAME]
Consumers: [CONSUMER_1, CONSUMER_2, CONSUMER_3]
Endpoint: [ENDPOINT]

Generate separate contracts for each consumer with:
- Different expectations
- Shared base contract
- Consumer-specific variations
```

### WebFlux/Reactive Contract
```
Generate Spring Cloud Contract for reactive endpoint:

Framework: WebFlux
Endpoint: [ENDPOINT]
Response Type: [Flux/Mono]

Include:
- WebTestClient base class
- Reactive matchers
- Streaming response validation
```

### Contract Evolution
```
Create contract versioning strategy for:

Current Version: [VERSION]
Breaking Change: [DESCRIPTION]

Include:
- Version compatibility matrix
- Migration guide
- Deprecation strategy
- Consumer notification plan
```
