# Gatling Load Testing Prompts

## 1. Gatling Simulation Creation

```
Create a Gatling simulation for:

Application: [APP_NAME]
Base URL: [URL]
Scenario: [DESCRIPTION]

Load Profile:
- Peak Users: [NUMBER]
- Ramp Duration: [SECONDS]
- Test Duration: [MINUTES]

User Journey:
1. [ACTION_1] - [ENDPOINT]
2. [ACTION_2] - [ENDPOINT]
3. [ACTION_3] - [ENDPOINT]

Include:
- Scala/Kotlin simulation code
- HTTP protocol configuration
- Scenario definition
- Load injection strategy
- Assertions and checks
```

## 2. Gatling Performance Test

```
Generate Gatling performance test for:

API: [NAME]
SLA Requirements:
- Mean Response Time: < [MS]
- 95th Percentile: < [MS]
- 99th Percentile: < [MS]
- Success Rate: > [%]

Create simulation with:
- Realistic user behavior
- Gradual load ramping
- Think time between actions
- Response time assertions
- HTML report generation
```

## 3. Gatling Stress Test Scenario

```
Design Gatling stress test to break the system:

Target: [APPLICATION]
Load Pattern: [DESCRIBE]
Starting Load: [USERS]
Peak Load: [USERS]
Hold Duration: [MINUTES]

Monitor:
- Response time degradation
- Throughput saturation
- Error rate spike
- Recovery after load reduction
```

## Example: Basic Gatling Simulation (Scala)

```scala
package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class UserAPILoadTest extends Simulation {

  // HTTP Protocol Configuration
  val httpProtocol = http
    .baseUrl("https://api.example.com")
    .acceptHeader("application/json")
    .contentTypeHeader("application/json")
    .userAgentHeader("Gatling Performance Test")

  // Feeders for test data
  val userFeeder = csv("users.csv").random
  
  // Scenario Definition
  val scn = scenario("User API Load Test")
    .feed(userFeeder)
    .exec(
      http("Get User")
        .get("/api/users/${userId}")
        .header("Authorization", "Bearer ${token}")
        .check(status.is(200))
        .check(jsonPath("$.id").exists)
        .check(responseTimeInMillis.lt(500))
    )
    .pause(2, 5) // Think time: 2-5 seconds
    .exec(
      http("Update User")
        .put("/api/users/${userId}")
        .body(StringBody("""{"name": "Updated Name"}"""))
        .check(status.is(200))
    )
    .pause(1, 3)
    .exec(
      http("Get User List")
        .get("/api/users")
        .queryParam("page", "1")
        .queryParam("limit", "20")
        .check(status.is(200))
        .check(jsonPath("$.data[*]").exists)
    )

  // Load Injection
  setUp(
    scn.inject(
      nothingFor(4.seconds), // Wait 4 seconds
      atOnceUsers(10),       // Inject 10 users at once
      rampUsers(100).during(60.seconds), // Ramp to 100 users over 60s
      constantUsersPerSec(20).during(5.minutes), // 20 users/sec for 5 min
      rampUsersPerSec(20).to(50).during(2.minutes) // Ramp from 20 to 50/sec
    )
  ).protocols(httpProtocol)
    .assertions(
      global.responseTime.max.lt(2000),
      global.responseTime.percentile(95).lt(800),
      global.successfulRequests.percent.gt(99),
      forAll.failedRequests.count.lt(100)
    )
}
```

## Example: Advanced Scenario with Session Management

```scala
class AdvancedUserJourney extends Simulation {

  val httpProtocol = http
    .baseUrl("https://api.example.com")
    .acceptHeader("application/json")

  val feeder = csv("credentials.csv").circular

  val login = exec(
    http("Login")
      .post("/api/auth/login")
      .body(StringBody("""{"username": "${username}", "password": "${password}"}"""))
      .check(status.is(200))
      .check(jsonPath("$.token").saveAs("authToken"))
  )

  val browseProducts = repeat(5, "n") {
    exec(
      http("Browse Products - Page ${n}")
        .get("/api/products")
        .queryParam("page", "${n}")
        .header("Authorization", "Bearer ${authToken}")
        .check(status.is(200))
        .check(jsonPath("$.products[0].id").saveAs("productId"))
    ).pause(1, 3)
  }

  val addToCart = exec(
    http("Add to Cart")
      .post("/api/cart")
      .header("Authorization", "Bearer ${authToken}")
      .body(StringBody("""{"productId": "${productId}", "quantity": 1}"""))
      .check(status.is(201))
      .check(jsonPath("$.cartId").saveAs("cartId"))
  )

  val checkout = exec(
    http("Checkout")
      .post("/api/orders")
      .header("Authorization", "Bearer ${authToken}")
      .body(StringBody("""{"cartId": "${cartId}"}"""))
      .check(status.is(201))
      .check(jsonPath("$.orderId").exists)
  )

  val scn = scenario("E-commerce User Journey")
    .feed(feeder)
    .exec(login)
    .pause(2)
    .exec(browseProducts)
    .pause(3)
    .exec(addToCart)
    .pause(5)
    .exec(checkout)

  setUp(
    scn.inject(
      rampConcurrentUsers(0).to(200).during(5.minutes),
      constantConcurrentUsers(200).during(10.minutes)
    )
  ).protocols(httpProtocol)
}
```

## Example: Kotlin DSL

```kotlin
import io.gatling.javaapi.core.*
import io.gatling.javaapi.core.CoreDsl.*
import io.gatling.javaapi.http.*
import io.gatling.javaapi.http.HttpDsl.*

class UserAPISimulation : Simulation() {

    val httpProtocol = http
        .baseUrl("https://api.example.com")
        .acceptHeader("application/json")
        .contentTypeHeader("application/json")

    val scn = scenario("User API Test")
        .exec(
            http("Get User")
                .get("/api/users/123")
                .check(status().`is`(200))
                .check(jsonPath("$.name").exists())
        )
        .pause(2)
        .exec(
            http("Create User")
                .post("/api/users")
                .body(StringBody("""{"name": "John Doe", "email": "john@example.com"}"""))
                .check(status().`is`(201))
        )

    init {
        setUp(
            scn.injectOpen(
                rampUsers(100).during(60),
                constantUsersPerSec(50.0).during(300)
            )
        ).protocols(httpProtocol)
            .assertions(
                global().responseTime().max().lt(2000),
                global().successfulRequests().percent().gt(95.0)
            )
    }
}
```

## Load Injection Strategies

### 1. Open Model (Users arriving)
```scala
// Continuous arrival of users
setUp(
  scn.inject(
    nothingFor(5.seconds),
    atOnceUsers(10),
    rampUsers(50).during(30.seconds),
    constantUsersPerSec(20).during(5.minutes),
    rampUsersPerSec(10).to(50).during(2.minutes),
    heavisideUsers(100).during(30.seconds)
  )
)
```

### 2. Closed Model (Concurrent users)
```scala
// Fixed number of concurrent users
setUp(
  scn.inject(
    rampConcurrentUsers(0).to(100).during(60.seconds),
    constantConcurrentUsers(100).during(10.minutes)
  )
)
```

### 3. Complex Patterns
```scala
setUp(
  // Morning peak
  scn.inject(
    rampUsersPerSec(1).to(100).during(1.hour),
    constantUsersPerSec(100).during(3.hours),
    rampUsersPerSec(100).to(10).during(30.minutes)
  ),
  // Afternoon peak
  scn.inject(
    nothingFor(4.5.hours),
    rampUsersPerSec(10).to(150).during(1.hour),
    constantUsersPerSec(150).during(2.hours),
    rampUsersPerSec(150).to(5).during(1.hour)
  )
)
```

## Advanced Features

### 1. Conditional Execution
```scala
val scn = scenario("Conditional Flow")
  .exec(
    http("Get User")
      .get("/api/users/${userId}")
      .check(jsonPath("$.status").saveAs("userStatus"))
  )
  .doIf(session => session("userStatus").as[String] == "active") {
    exec(
      http("Get User Details")
        .get("/api/users/${userId}/details")
    )
  }
  .doIfOrElse(session => session("userStatus").as[String] == "premium") {
    exec(http("Premium Action").get("/api/premium"))
  } {
    exec(http("Standard Action").get("/api/standard"))
  }
```

### 2. Loop and Repeat
```scala
val scn = scenario("Repeat Actions")
  .repeat(10) {
    exec(http("Repeated Request").get("/api/items"))
      .pause(1)
  }
  .asLongAs(session => session("continue").as[Boolean]) {
    exec(http("Conditional Loop").get("/api/poll"))
      .pause(2)
  }
```

### 3. Error Handling
```scala
val scn = scenario("Error Handling")
  .exec(
    http("Risky Request")
      .get("/api/unstable")
      .check(status.in(200, 202))
      .checkIf((response, session) => response.status.code == 202) {
        jsonPath("$.pollingUrl").saveAs("pollUrl")
      }
  )
  .exitHereIfFailed
  .exec(http("Follow-up").get("${pollUrl}"))
```

## Reports and Assertions

### Global Assertions
```scala
setUp(scn.inject(...))
  .assertions(
    global.responseTime.max.lt(5000),
    global.responseTime.mean.lt(1000),
    global.responseTime.percentile(95).lt(2000),
    global.responseTime.percentile(99).lt(3000),
    global.successfulRequests.percent.gt(99),
    global.requestsPerSec.gte(100),
    forAll.failedRequests.count.lt(50)
  )
```

### Request-Specific Assertions
```scala
setUp(scn.inject(...))
  .assertions(
    details("Get User").responseTime.max.lt(500),
    details("Create User").responseTime.percentile(95).lt(1000),
    details("Get User").successfulRequests.percent.is(100)
  )
```

## Best Practices

1. **Realistic Scenarios**
   - Model actual user behavior
   - Include think times and pauses
   - Use feeders for varied data
   - Chain related requests

2. **Performance**
   - Use Scala (faster than Java DSL)
   - Avoid blocking operations
   - Use connection pooling
   - Optimize feeder usage

3. **Maintainability**
   - Separate protocol, scenario, and injection
   - Reuse scenario building blocks
   - Externalize configuration
   - Use meaningful names

4. **CI/CD Integration**
   ```bash
   # Maven
   mvn gatling:test
   
   # Gradle
   gradle gatlingRun
   
   # Direct execution
   gatling.sh -s simulations.UserAPILoadTest
   ```

5. **Reporting**
   - Use HTML reports for analysis
   - Export metrics to InfluxDB/Graphite
   - Set up Grafana dashboards
   - Archive reports for trends

## Common Prompts

### Microservices Load Test
```
Create Gatling simulation for microservices:

Services:
- Auth Service: /api/auth/*
- User Service: /api/users/*
- Order Service: /api/orders/*
- Payment Service: /api/payments/*

Flow:
1. Authenticate
2. Browse users
3. Create order
4. Process payment

Include service-specific assertions and failure handling
```

### GraphQL Load Test
```
Generate Gatling GraphQL load test:

GraphQL Endpoint: [URL]
Queries:
- [QUERY_1]
- [QUERY_2]
Mutations:
- [MUTATION_1]

Include:
- Query variables
- Response field validation
- Error handling
- Batch requests
```

### WebSocket Simulation
```
Create Gatling WebSocket test:

WebSocket URL: [WS_URL]
Connection Duration: [MINUTES]
Message Types: [LIST]
Message Rate: [MSG/SEC]

Test:
- Connection lifecycle
- Message exchange
- Reconnection handling
```
