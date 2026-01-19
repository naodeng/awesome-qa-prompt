# K6 Load Testing Prompts

## 1. K6 Load Test Script

```
Create a K6 load test script for:

Application: [APP_NAME]
API Endpoint: [URL]
Test Type: [Load/Stress/Spike/Soak]

Performance Requirements:
- Virtual Users: [NUMBER]
- Duration: [TIME]
- Request Rate: [RPS]
- Max Response Time: [MS]

Endpoints:
- [ENDPOINT_1] - [METHOD] - [WEIGHT_%]
- [ENDPOINT_2] - [METHOD] - [WEIGHT_%]

Include:
- JavaScript test script
- Stages configuration
- Thresholds and SLAs
- Custom metrics
- Checks and validations
```

## 2. K6 Cloud Execution

```
Generate K6 cloud test configuration for:

Project: [NAME]
Test Zones: [REGIONS]
Load Distribution: [DESCRIBE]
Total VUs: [NUMBER]

Cloud Configuration:
- Distribution zones
- Load assignment per zone
- Cloud execution parameters
- Result aggregation
- Alerts and notifications
```

## 3. K6 Performance Monitoring

```
Create K6 test with comprehensive monitoring:

Application: [NAME]
Metrics to Track:
- HTTP request duration
- Data sent/received
- Iteration duration
- VU behavior
- Custom business metrics

Integration:
- InfluxDB for time-series data
- Grafana for visualization
- Alert thresholds
- Real-time monitoring dashboard
```

## Example: Basic K6 Script (JavaScript)

```javascript
import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { Rate, Trend, Counter } from 'k6/metrics';

// Custom metrics
const errorRate = new Rate('errors');
const responseTimeTrend = new Trend('response_time');
const requestCounter = new Counter('requests_total');

// Test configuration
export const options = {
  stages: [
    { duration: '1m', target: 50 },   // Ramp-up to 50 VUs
    { duration: '3m', target: 50 },   // Stay at 50 VUs
    { duration: '1m', target: 100 },  // Spike to 100 VUs
    { duration: '3m', target: 100 },  // Stay at 100 VUs
    { duration: '1m', target: 0 },    // Ramp-down to 0
  ],
  thresholds: {
    http_req_duration: ['p(95)<500', 'p(99)<1000'], // 95% < 500ms, 99% < 1s
    http_req_failed: ['rate<0.01'],   // Error rate < 1%
    errors: ['rate<0.05'],             // Custom error rate < 5%
    checks: ['rate>0.99'],             // 99% successful checks
  },
};

const BASE_URL = 'https://api.example.com';
const TOKEN = 'your-auth-token';

export default function () {
  // Group requests logically
  group('User API Tests', function () {
    // GET request
    const getUserRes = http.get(`${BASE_URL}/api/users/123`, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
      },
      tags: { name: 'GetUser' },
    });

    // Validations
    const getUserCheck = check(getUserRes, {
      'status is 200': (r) => r.status === 200,
      'response time < 500ms': (r) => r.timings.duration < 500,
      'has user data': (r) => r.json().hasOwnProperty('id'),
      'user name exists': (r) => r.json().name !== undefined,
    });

    // Record custom metrics
    errorRate.add(!getUserCheck);
    responseTimeTrend.add(getUserRes.timings.duration);
    requestCounter.add(1);

    sleep(1); // Think time

    // POST request
    const payload = JSON.stringify({
      name: 'New User',
      email: `user${__VU}@example.com`, // Unique per VU
    });

    const createUserRes = http.post(`${BASE_URL}/api/users`, payload, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
      },
      tags: { name: 'CreateUser' },
    });

    check(createUserRes, {
      'status is 201': (r) => r.status === 201,
      'user created': (r) => r.json().id !== undefined,
    });

    sleep(2);

    // PUT request
    const updatePayload = JSON.stringify({
      name: 'Updated Name',
    });

    const updateRes = http.put(
      `${BASE_URL}/api/users/${createUserRes.json().id}`,
      updatePayload,
      {
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
        },
        tags: { name: 'UpdateUser' },
      }
    );

    check(updateRes, {
      'update status is 200': (r) => r.status === 200,
    });
  });
}

// Setup function (runs once at start)
export function setup() {
  // Initialize test data, authenticate, etc.
  const authRes = http.post(`${BASE_URL}/api/auth/login`, {
    username: 'test',
    password: 'test123',
  });
  
  return { token: authRes.json().token };
}

// Teardown function (runs once at end)
export function teardown(data) {
  // Cleanup test data
  console.log('Test completed');
}
```

## Example: Advanced Scenarios

```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';

// Load test data from CSV
const testData = new SharedArray('users', function () {
  return papaparse.parse(open('./users.csv'), { header: true }).data;
});

export const options = {
  scenarios: {
    // Scenario 1: Constant load
    constant_load: {
      executor: 'constant-vus',
      vus: 50,
      duration: '5m',
      exec: 'constantLoad',
    },
    // Scenario 2: Ramping VUs
    ramping_load: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '2m', target: 100 },
        { duration: '5m', target: 100 },
        { duration: '2m', target: 0 },
      ],
      exec: 'rampingLoad',
      startTime: '6m', // Start after constant_load
    },
    // Scenario 3: Constant arrival rate
    arrival_rate: {
      executor: 'constant-arrival-rate',
      rate: 100, // 100 iterations per second
      timeUnit: '1s',
      duration: '10m',
      preAllocatedVUs: 50,
      maxVUs: 200,
      exec: 'arrivalRate',
      startTime: '15m',
    },
  },
  thresholds: {
    'http_req_duration{scenario:constant_load}': ['p(95)<500'],
    'http_req_duration{scenario:ramping_load}': ['p(95)<800'],
    'http_req_duration{scenario:arrival_rate}': ['p(95)<1000'],
  },
};

export function constantLoad() {
  const user = testData[__VU % testData.length];
  
  const res = http.get(`https://api.example.com/api/users/${user.id}`);
  
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  
  sleep(1);
}

export function rampingLoad() {
  const batch = http.batch([
    ['GET', 'https://api.example.com/api/users'],
    ['GET', 'https://api.example.com/api/products'],
    ['GET', 'https://api.example.com/api/orders'],
  ]);
  
  batch.forEach((res) => {
    check(res, {
      'status is 200': (r) => r.status === 200,
    });
  });
  
  sleep(0.5);
}

export function arrivalRate() {
  const res = http.post(
    'https://api.example.com/api/events',
    JSON.stringify({ event: 'click', timestamp: Date.now() })
  );
  
  check(res, {
    'status is 201': (r) => r.status === 201,
  });
}
```

## K6 Execution Options

### Local Execution
```bash
# Basic run
k6 run script.js

# With environment variables
k6 run --env BASE_URL=https://api.example.com script.js

# With custom VUs and duration
k6 run --vus 100 --duration 5m script.js

# Output to InfluxDB
k6 run --out influxdb=http://localhost:8086/k6 script.js

# Multiple outputs
k6 run --out json=results.json --out influxdb=http://localhost:8086/k6 script.js

# With tags
k6 run --tag testid=test123 --tag env=staging script.js
```

### Cloud Execution
```bash
# Login to K6 Cloud
k6 login cloud

# Run in cloud
k6 cloud script.js

# Run in cloud with specific zones
k6 cloud --zone us-east-1 --zone eu-west-1 script.js
```

## Load Testing Patterns

### 1. Smoke Test
```javascript
export const options = {
  vus: 1,
  duration: '1m',
  thresholds: {
    http_req_failed: ['rate<0.01'],
  },
};
```

### 2. Load Test
```javascript
export const options = {
  stages: [
    { duration: '5m', target: 100 }, // Ramp-up
    { duration: '10m', target: 100 }, // Steady state
    { duration: '5m', target: 0 }, // Ramp-down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],
  },
};
```

### 3. Stress Test
```javascript
export const options = {
  stages: [
    { duration: '2m', target: 100 },
    { duration: '5m', target: 100 },
    { duration: '2m', target: 200 },
    { duration: '5m', target: 200 },
    { duration: '2m', target: 300 },
    { duration: '5m', target: 300 },
    { duration: '10m', target: 0 },
  ],
};
```

### 4. Spike Test
```javascript
export const options = {
  stages: [
    { duration: '10s', target: 100 },
    { duration: '1m', target: 100 },
    { duration: '10s', target: 1400 }, // Spike
    { duration: '3m', target: 1400 },
    { duration: '10s', target: 100 },
    { duration: '3m', target: 100 },
    { duration: '10s', target: 0 },
  ],
};
```

### 5. Soak Test
```javascript
export const options = {
  stages: [
    { duration: '2m', target: 400 },
    { duration: '3h56m', target: 400 }, // Long duration
    { duration: '2m', target: 0 },
  ],
};
```

## Advanced Features

### Browser Testing (k6 browser)
```javascript
import { browser } from 'k6/experimental/browser';

export const options = {
  scenarios: {
    ui: {
      executor: 'shared-iterations',
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
};

export default async function () {
  const page = browser.newPage();
  
  try {
    await page.goto('https://example.com');
    
    const submitButton = page.locator('input[type="submit"]');
    await submitButton.click();
    
    await page.waitForSelector('.success-message');
    
    page.screenshot({ path: 'screenshot.png' });
  } finally {
    page.close();
  }
}
```

### WebSocket Testing
```javascript
import ws from 'k6/ws';
import { check } from 'k6';

export default function () {
  const url = 'ws://echo.websocket.org';
  const params = { tags: { my_tag: 'hello' } };

  const res = ws.connect(url, params, function (socket) {
    socket.on('open', () => {
      console.log('connected');
      socket.send(JSON.stringify({ event: 'message', data: 'test' }));
    });

    socket.on('message', (data) => {
      console.log('Message received:', data);
    });

    socket.on('close', () => {
      console.log('disconnected');
    });

    socket.setTimeout(function () {
      console.log('2 seconds passed, closing the socket');
      socket.close();
    }, 2000);
  });

  check(res, { 'status is 101': (r) => r && r.status === 101 });
}
```

## Best Practices

1. **Modular Scripts**
   - Separate config from logic
   - Reuse common functions
   - Use libraries for utilities

2. **Realistic Data**
   - Use SharedArray for large datasets
   - Generate dynamic UUIDs
   - Randomize think times

3. **Performance**
   - Minimize memory usage
   - Use batch requests when possible
   - Avoid unnecessary checks

4. **Monitoring**
   - Set meaningful thresholds
   - Use custom metrics sparingly
   - Tag requests appropriately

5. **CI/CD Integration**
   ```yaml
   # GitHub Actions example
   - name: Run K6 Load Test
     run: |
       k6 run --out json=results.json script.js
       
   - name: Check Thresholds
     run: |
       if grep '"status":false' results.json; then
         echo "Performance thresholds failed"
         exit 1
       fi
   ```

## Common Prompts

### API Benchmark
```
Create K6 benchmark test for:

API: [BASE_URL]
Endpoints to Compare:
- [ENDPOINT_1]
- [ENDPOINT_2]
- [ENDPOINT_3]

Test each with:
- 10, 50, 100, 500, 1000 VUs
- 5 minute duration
- Record p50, p95, p99 response times
- Generate comparison report
```

### Multi-Zone Load Test
```
Generate K6 cloud test with geographic distribution:

Total Load: 10,000 VUs
Zones:
- us-east-1: 40%
- eu-west-1: 30%
- ap-southeast-1: 30%

Duration: 30 minutes
Test realistic global user distribution
```

### Breaking Point Test
```
Create K6 test to find system capacity:

Starting Load: 100 RPS
Increment: +100 RPS every 2 minutes
Continue until: Error rate > 5%

Monitor:
- Response times at each level
- Error rate progression
- System breaking point
```
