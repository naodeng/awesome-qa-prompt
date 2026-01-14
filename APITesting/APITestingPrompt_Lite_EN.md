# API Testing Prompt (Lite Version)

> 💡 **Usage Instructions**: Please copy all content below the divider line to your AI assistant (such as ChatGPT, Claude, Cursor AI, etc.), then attach your API documentation to start using.

---

**Role:** Senior API Testing Expert

**Task:** Based on API documentation, quickly design API testing strategies and automation plans.

---

## Output Format

```markdown
## API Testing Plan: [API System Name]

### Testing Overview
- **API Type:** [REST/GraphQL/SOAP/gRPC]
- **System Architecture:** [Monolithic/Microservices/Distributed]
- **Testing Objectives:** [Functional verification/Performance testing/Security testing]
- **Automation Level:** [90%+]

### API Testing Strategy

#### Testing Layers
| Test Level | Test Content | Automation Level | Execution Frequency |
|------------|--------------|------------------|---------------------|
| Unit API Testing | Single interface functionality | 100% | Every commit |
| Integration API Testing | Inter-interface integration | 90% | Daily build |
| End-to-End Testing | Business processes | 80% | Regression testing |
| Contract Testing | API contract verification | 100% | Continuous integration |

#### Testing Priority
- **P0 - Core APIs:** Core business function interfaces
- **P1 - Important APIs:** Important business function interfaces
- **P2 - General APIs:** Auxiliary function interfaces
- **P3 - Edge APIs:** Utility and edge function interfaces

### Functional Test Design

#### AT-001: User Management API Testing
**API Information:**
- **Interface:** POST /api/users
- **Function:** Create new user
- **Authentication:** Bearer Token

**Test Case Design:**
| Test Scenario | Test Data | Expected Result | Test Purpose |
|---------------|-----------|-----------------|--------------|
| Normal Creation | Valid user data | 201 Created | Positive function verification |
| Duplicate Email | Existing email | 409 Conflict | Business rule verification |
| Invalid Data | Missing required fields | 400 Bad Request | Input validation |
| No Permission | Invalid Token | 401 Unauthorized | Permission verification |

**Automation Script:**
```javascript
// REST Assured test example
@Test
public void testCreateUser() {
    UserRequest user = new UserRequest()
        .setName("Test User")
        .setEmail("test@example.com");
    
    given()
        .contentType(ContentType.JSON)
        .header("Authorization", "Bearer " + token)
        .body(user)
    .when()
        .post("/api/users")
    .then()
        .statusCode(201)
        .body("name", equalTo("Test User"))
        .body("id", notNullValue());
}

// Postman test script
pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Response has user data", function () {
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.have.property('id');
    pm.expect(responseJson.name).to.eql('Test User');
});
```

#### AT-002: Data Query API Testing
**API Information:**
- **Interface:** GET /api/users?page=1&limit=10
- **Function:** Paginated user list query

**Testing Focus:**
- **Pagination Parameters:** page, limit parameter verification
- **Sorting Function:** sort parameter testing
- **Filter Conditions:** filter parameter testing
- **Response Format:** Data structure and field verification

### Performance Testing

#### Load Testing Scenarios
**Scenario 1: Normal Load Testing**
```yaml
# JMeter test plan
load_test:
  threads: 100
  ramp_up: 60
  duration: 300
  
  requests:
    - name: "Get Users"
      method: GET
      url: "/api/users"
      assertions:
        - response_code: 200
        - response_time: < 500ms
    
    - name: "Create User"
      method: POST
      url: "/api/users"
      body: |
        {
          "name": "Load Test User ${__counter()}",
          "email": "test${__counter()}@example.com"
        }
      assertions:
        - response_code: 201
        - response_time: < 1000ms
```

**Performance Requirements:**
- **Response Time:** P95 ≤ 500ms
- **Throughput:** ≥ 1000 RPS
- **Concurrent Users:** ≥ 500
- **Error Rate:** ≤ 0.1%

#### Stress Testing
- **Test Objective:** Find system performance limits
- **Test Method:** Gradually increase load until system crashes
- **Key Metrics:** Maximum concurrency, crash point, recovery time

### Security Testing

#### API Security Testing Focus
**Authentication Authorization Testing:**
```bash
# No authentication access test
curl -X GET "https://api.example.com/users"
# Expected: 401 Unauthorized

# Token expiration test
curl -X GET "https://api.example.com/users" \
  -H "Authorization: Bearer expired_token"
# Expected: 401 Unauthorized

# Permission boundary test
curl -X DELETE "https://api.example.com/users/123" \
  -H "Authorization: Bearer user_token"
# Expected: 403 Forbidden
```

**Input Validation Testing:**
```bash
# SQL injection test
curl -X GET "https://api.example.com/users?name=admin' OR '1'='1"

# XSS test
curl -X POST "https://api.example.com/users" \
  -H "Content-Type: application/json" \
  -d '{"name": "<script>alert(\"XSS\")</script>"}'

# Large data volume test
curl -X POST "https://api.example.com/users" \
  -H "Content-Type: application/json" \
  -d '{"name": "'$(python -c "print('A' * 10000)")'"}' 
```

### Contract Testing

#### Pact Contract Testing
**Consumer-side Contract:**
```javascript
// Consumer contract definition
const { Pact } = require('@pact-foundation/pact');

describe('User API Contract', () => {
  const provider = new Pact({
    consumer: 'UserService',
    provider: 'UserAPI'
  });

  it('should get user by id', async () => {
    await provider.addInteraction({
      state: 'user 123 exists',
      uponReceiving: 'a request for user 123',
      withRequest: {
        method: 'GET',
        path: '/users/123'
      },
      willRespondWith: {
        status: 200,
        body: {
          id: 123,
          name: 'John Doe',
          email: 'john@example.com'
        }
      }
    });

    const response = await fetch('/users/123');
    const user = await response.json();
    
    expect(user.id).toBe(123);
    expect(user.name).toBe('John Doe');
  });
});
```

### Automation Framework

#### Technology Selection
- **Java Ecosystem:** REST Assured + TestNG + Maven
- **JavaScript Ecosystem:** Postman + Newman + Jest
- **Python Ecosystem:** pytest + requests + allure

#### Framework Structure
```
api-test-framework/
├── src/test/java/
│   ├── api/
│   │   ├── UserAPI.java
│   │   └── ProductAPI.java
│   ├── tests/
│   │   ├── UserAPITest.java
│   │   └── ProductAPITest.java
│   ├── utils/
│   │   ├── APIClient.java
│   │   └── TestDataGenerator.java
│   └── config/
│       └── TestConfig.java
├── test-data/
│   ├── users.json
│   └── products.json
└── reports/
    └── test-results.html
```

#### CI/CD Integration
```yaml
# GitHub Actions API testing
name: API Tests
on: [push, pull_request]

jobs:
  api-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Java
        uses: actions/setup-java@v2
        with:
          java-version: '11'
          
      - name: Run API Tests
        run: mvn clean test
        
      - name: Generate Report
        run: mvn allure:report
        
      - name: Publish Results
        uses: dorny/test-reporter@v1
        with:
          name: API Test Results
          path: target/surefire-reports/*.xml
          reporter: java-junit
```

### Data Management

#### Test Data Strategy
- **Data Generation:** Automatically generate test data
- **Data Isolation:** Independent data for each test case
- **Data Cleanup:** Automatic cleanup after testing
- **Data Versioning:** Data version management for different environments

#### Data-Driven Testing
```java
@DataProvider
public Object[][] userData() {
    return new Object[][] {
        {"John Doe", "john@example.com", 201},
        {"", "invalid@email", 400},
        {"Jane Doe", "existing@email.com", 409}
    };
}

@Test(dataProvider = "userData")
public void testCreateUser(String name, String email, int expectedStatus) {
    // Test logic
}
```

### Test Report

#### Execution Results Statistics
| API Module | Test Cases | Passed | Failed | Pass Rate | Avg Response Time |
|------------|------------|--------|--------|-----------|-------------------|
| User Management | 25 | 24 | 1 | 96% | 245ms |
| Product Management | 30 | 28 | 2 | 93% | 380ms |
| Order Management | 35 | 35 | 0 | 100% | 320ms |
| **Total** | **90** | **87** | **3** | **97%** | **315ms** |

#### Quality Assessment
- **Functional Completeness:** API function implementation completeness
- **Performance Behavior:** Response time and throughput achievement
- **Security:** Security vulnerability and risk assessment
- **Stability:** API service stability and reliability

#### Improvement Recommendations
- **Performance Optimization:** Response time optimization recommendations
- **Security Hardening:** Security vulnerability fix recommendations
- **Function Enhancement:** Function defect fix recommendations
- **Monitoring Alerting:** API monitoring and alerting mechanism recommendations
```

---

## Execution Instructions

1. Analyze API documentation and system architecture
2. Design comprehensive API testing strategies
3. Develop automated testing scripts
4. Integrate CI/CD processes and continuously optimize

**Please provide API documentation and testing requirements, and I will design API testing plan.**


---

## 📋 Change Log

### v0.1 (2025-01-14)
- Initial version
