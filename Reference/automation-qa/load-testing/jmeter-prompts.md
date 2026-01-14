# JMeter Load Testing Prompts

## 1. JMeter Test Plan Creation

```
Create a JMeter load test plan for:

Application: [APP_NAME]
Base URL: [URL]
Test Scenario: [DESCRIPTION]

Test Requirements:
- Concurrent Users: [NUMBER]
- Ramp-up Period: [SECONDS]
- Duration: [MINUTES]
- Think Time: [SECONDS]

Endpoints to Test:
1. [ENDPOINT_1] - [METHOD] - [LOAD_%]
2. [ENDPOINT_2] - [METHOD] - [LOAD_%]
3. [ENDPOINT_3] - [METHOD] - [LOAD_%]

Include:
- Thread group configuration
- HTTP request samplers
- Response assertions
- Listeners for metrics
- CSV data config for parameterization
```

## 2. JMeter Performance Baseline

```
Generate JMeter baseline performance test for:

Application: [NAME]
Environment: [DEV/STAGE/PROD]
SLA Requirements:
- Response Time (95th percentile): [MS]
- Throughput: [REQUESTS/SEC]
- Error Rate: < [%]

Create test plan with:
- Gradual load increase
- Performance metrics collection
- Threshold assertions
- Baseline report generation
- Comparison with previous runs
```

## 3. JMeter Stress Test

```
Design a JMeter stress test to find breaking point:

Target Application: [APP]
Starting Load: [USERS]
Increment: [USERS] every [MINUTES]
Maximum Load: [USERS]

Monitor for:
- Response time degradation
- Error rate increase
- Throughput plateau
- Resource utilization
- System failure point
- Recovery behavior
```

## Example: Basic JMeter Test Plan (XML)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<jmeterTestPlan version="1.2" properties="5.0">
  <hashTree>
    <TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="User API Load Test">
      <elementProp name="TestPlan.user_defined_variables" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="BASE_URL" elementType="Argument">
            <stringProp name="Argument.name">BASE_URL</stringProp>
            <stringProp name="Argument.value">${__P(baseUrl,localhost:8080)}</stringProp>
          </elementProp>
          <elementProp name="THREADS" elementType="Argument">
            <stringProp name="Argument.name">THREADS</stringProp>
            <stringProp name="Argument.value">${__P(threads,100)}</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
    </TestPlan>
    
    <hashTree>
      <ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="User Thread Group">
        <stringProp name="ThreadGroup.num_threads">${THREADS}</stringProp>
        <stringProp name="ThreadGroup.ramp_time">60</stringProp>
        <stringProp name="ThreadGroup.duration">300</stringProp>
        <boolProp name="ThreadGroup.scheduler">true</boolProp>
      </ThreadGroup>
      
      <hashTree>
        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="GET User">
          <stringProp name="HTTPSampler.domain">${BASE_URL}</stringProp>
          <stringProp name="HTTPSampler.path">/api/users/${user_id}</stringProp>
          <stringProp name="HTTPSampler.method">GET</stringProp>
          <boolProp name="HTTPSampler.auto_redirects">true</boolProp>
        </HTTPSamplerProxy>
        
        <hashTree>
          <ResponseAssertion guiclass="AssertionGui" testclass="ResponseAssertion" testname="Status Code Assertion">
            <collectionProp name="Asserion.test_strings">
              <stringProp name="49586">200</stringProp>
            </collectionProp>
            <stringProp name="Assertion.test_field">Assertion.response_code</stringProp>
          </ResponseAssertion>
          
          <DurationAssertion guiclass="DurationAssertionGui" testclass="DurationAssertion" testname="Response Time Assertion">
            <stringProp name="DurationAssertion.duration">1000</stringProp>
          </DurationAssertion>
        </hashTree>
      </hashTree>
    </hashTree>
  </hashTree>
</jmeterTestPlan>
```

## Example: JMeter CLI Execution

```bash
# Basic execution
jmeter -n -t load-test.jmx -l results.jtl -e -o report

# With parameters
jmeter -n -t load-test.jmx \
  -JbaseUrl=api.example.com \
  -Jthreads=500 \
  -Jrampup=120 \
  -Jduration=600 \
  -l results.jtl \
  -e -o html-report

# Distributed testing
jmeter -n -t test.jmx \
  -R server1,server2,server3 \
  -l results.jtl

# With custom properties
jmeter -n -t test.jmx \
  -q custom.properties \
  -l results.jtl
```

## Example: CSV Data Parameterization

```csv
# users.csv
user_id,username,password
101,john_doe,pass123
102,jane_smith,pass456
103,bob_johnson,pass789
```

```xml
<CSVDataSet guiclass="TestBeanGUI" testclass="CSVDataSet" testname="User Data">
  <stringProp name="filename">users.csv</stringProp>
  <stringProp name="fileEncoding">UTF-8</stringProp>
  <stringProp name="delimiter">,</stringProp>
  <boolProp name="recycle">true</boolProp>
  <boolProp name="stopThread">false</boolProp>
  <stringProp name="shareMode">shareMode.all</stringProp>
</CSVDataSet>
```

## Performance Testing Patterns

### 1. Load Test
```
Goal: Verify system under expected load
- Users: Expected concurrent users
- Duration: Typical session duration
- Pattern: Steady state load
- Metrics: Response time, throughput, errors
```

### 2. Stress Test
```
Goal: Find system breaking point
- Users: Incrementally increase beyond capacity
- Duration: Until failure or threshold
- Pattern: Gradual increase
- Metrics: Breaking point, degradation curve
```

### 3. Spike Test
```
Goal: Test sudden traffic surge
- Users: Sudden increase from baseline to peak
- Duration: Short burst
- Pattern: Rapid spike then return to normal
- Metrics: Recovery time, error spike
```

### 4. Soak/Endurance Test
```
Goal: Find memory leaks and degradation
- Users: Moderate sustained load
- Duration: Extended period (hours/days)
- Pattern: Constant load over time
- Metrics: Memory usage, response time trend
```

## JMeter Plugins & Extensions

### Essential Plugins
```
1. Custom Thread Groups
   - Ultimate Thread Group (complex scenarios)
   - Stepping Thread Group (gradual load)
   - Concurrency Thread Group (target throughput)

2. PerfMon (Server Monitoring)
   - CPU utilization
   - Memory usage
   - Network I/O
   - Disk I/O

3. Throughput Shaping Timer
   - Control request rate
   - Simulate realistic patterns

4. Response Times Over Time
   - Visualize performance trends
   - Identify degradation points
```

## Best Practices

1. **Test Data Management**
   - Use CSV files for parameterization
   - Generate realistic test data
   - Avoid credential hardcoding
   - Clean up test data after runs

2. **Realistic Scenarios**
   - Include think time between requests
   - Simulate user workflows (login → browse → action → logout)
   - Vary request patterns
   - Include error scenarios

3. **Resource Management**
   - Run in non-GUI mode for actual tests
   - Use distributed testing for large loads
   - Monitor JMeter resource usage
   - Optimize heap size (-Xmx)

4. **Reporting & Analysis**
   - Generate HTML reports
   - Track trends over time
   - Compare with SLA requirements
   - Share results with stakeholders

5. **CI/CD Integration**
   - Automate test execution
   - Set performance gates
   - Store results in time-series DB
   - Alert on threshold violations

## Common Prompts

### API Load Test
```
Create JMeter API load test for:

REST API: [BASE_URL]
Authentication: [Bearer/Basic/OAuth]
Endpoints:
- GET /users (40% traffic)
- POST /users (30% traffic)
- PUT /users/{id} (20% traffic)
- DELETE /users/{id} (10% traffic)

Load Profile:
- 1000 concurrent users
- 5 minute ramp-up
- 30 minute duration
- 2-5 second think time

SLA:
- 95th percentile < 500ms
- Error rate < 1%
- Throughput > 5000 req/sec
```

### Database Load Test
```
Generate JMeter JDBC load test for:

Database: [PostgreSQL/MySQL/Oracle]
Connection: [JDBC_URL]
Operations:
- SELECT queries (70%)
- INSERT queries (20%)
- UPDATE queries (10%)

Include:
- Connection pooling
- Transaction control
- Query parameterization
- Result validation
```

### WebSocket Load Test
```
Create JMeter WebSocket load test:

WebSocket URL: [WS_URL]
Message Types: [LIST]
Connection Duration: [MINUTES]
Messages per Second: [RATE]

Test:
- Connection establishment
- Bidirectional messaging
- Connection stability
- Message latency
```
