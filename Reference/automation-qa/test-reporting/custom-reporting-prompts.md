# Custom Test Reporting Prompts

## 1. Custom HTML Report Generator

```
Create a custom HTML test report with:

Test Results: [DATA_SOURCE]
Report Features:
- Executive summary dashboard
- Pass/Fail pie charts
- Test execution timeline
- Detailed test steps
- Screenshot gallery
- Environment details
- Custom branding

Include:
- HTML/CSS/JavaScript templates
- Data aggregation logic
- Chart libraries (Chart.js, D3.js)
- Responsive design
- Export to PDF option
```

## 2. Database Test Results Storage

```
Design test results database schema for:

Database: [PostgreSQL/MySQL/MongoDB]
Data to Store:
- Test execution metadata
- Test results (pass/fail/skip)
- Execution duration
- Error messages and stack traces
- Screenshots (binary/path)
- Environment information
- Historical trends

Include:
- Database schema/models
- Insert/query operations
- Retention policy
- Indexing strategy
- API for reporting dashboard
```

## 3. Real-Time Test Dashboard

```
Build real-time test execution dashboard:

Technology Stack: [React/Vue/Angular + WebSocket]
Features:
- Live test execution status
- Real-time pass/fail counters
- Current test being executed
- Progress bar
- Recent failures feed
- Performance metrics
- Team notifications

Include:
- Frontend components
- WebSocket server
- Test listener/hook integration
- Notification system (Slack, Email)
```

## Example: Custom HTML Report Generator (Python)

```python
from jinja2 import Template
import json
from datetime import datetime

class CustomReporter:
    def __init__(self):
        self.results = {
            'total': 0,
            'passed': 0,
            'failed': 0,
            'skipped': 0,
            'tests': [],
            'start_time': datetime.now(),
            'end_time': None
        }
    
    def add_test_result(self, name, status, duration, error=None, screenshot=None):
        self.results['total'] += 1
        self.results[status] += 1
        
        self.results['tests'].append({
            'name': name,
            'status': status,
            'duration': duration,
            'error': error,
            'screenshot': screenshot,
            'timestamp': datetime.now().isoformat()
        })
    
    def generate_report(self, output_path='report.html'):
        self.results['end_time'] = datetime.now()
        duration = (self.results['end_time'] - self.results['start_time']).total_seconds()
        
        template = Template('''
<!DOCTYPE html>
<html>
<head>
    <title>Test Report</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .summary { display: flex; gap: 20px; margin-bottom: 30px; }
        .card { flex: 1; padding: 20px; border-radius: 8px; color: white; }
        .passed { background: #28a745; }
        .failed { background: #dc3545; }
        .skipped { background: #ffc107; }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background: #343a40; color: white; }
        .status-passed { color: #28a745; font-weight: bold; }
        .status-failed { color: #dc3545; font-weight: bold; }
    </style>
</head>
<body>
    <h1>Test Execution Report</h1>
    <p>Duration: {{ duration }}s | Executed: {{ start_time }}</p>
    
    <div class="summary">
        <div class="card passed">
            <h2>{{ passed }}</h2>
            <p>Passed</p>
        </div>
        <div class="card failed">
            <h2>{{ failed }}</h2>
            <p>Failed</p>
        </div>
        <div class="card skipped">
            <h2>{{ skipped }}</h2>
            <p>Skipped</p>
        </div>
    </div>
    
    <canvas id="resultsChart" width="400" height="200"></canvas>
    
    <h2>Test Results</h2>
    <table>
        <thead>
            <tr>
                <th>Test Name</th>
                <th>Status</th>
                <th>Duration (s)</th>
                <th>Error</th>
            </tr>
        </thead>
        <tbody>
            {% for test in tests %}
            <tr>
                <td>{{ test.name }}</td>
                <td class="status-{{ test.status }}">{{ test.status.upper() }}</td>
                <td>{{ test.duration }}</td>
                <td>{{ test.error or '-' }}</td>
            </tr>
            {% endfor %}
        </tbody>
    </table>
    
    <script>
        const ctx = document.getElementById('resultsChart').getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Passed', 'Failed', 'Skipped'],
                datasets: [{
                    data: [{{ passed }}, {{ failed }}, {{ skipped }}],
                    backgroundColor: ['#28a745', '#dc3545', '#ffc107']
                }]
            }
        });
    </script>
</body>
</html>
        ''')
        
        html_content = template.render(
            duration=duration,
            start_time=self.results['start_time'].strftime('%Y-%m-%d %H:%M:%S'),
            passed=self.results['passed'],
            failed=self.results['failed'],
            skipped=self.results['skipped'],
            tests=self.results['tests']
        )
        
        with open(output_path, 'w') as f:
            f.write(html_content)

# Usage
reporter = CustomReporter()
reporter.add_test_result('test_login', 'passed', 2.5)
reporter.add_test_result('test_checkout', 'failed', 3.2, error='Element not found')
reporter.generate_report('custom_report.html')
```

## Example: Slack Notification Integration

```python
import requests

def send_slack_notification(webhook_url, results):
    message = {
        "blocks": [
            {
                "type": "header",
                "text": {
                    "type": "plain_text",
                    "text": "🧪 Test Execution Complete"
                }
            },
            {
                "type": "section",
                "fields": [
                    {"type": "mrkdwn", "text": f"*Total:*\n{results['total']}"},
                    {"type": "mrkdwn", "text": f"*Passed:* ✅\n{results['passed']}"},
                    {"type": "mrkdwn", "text": f"*Failed:* ❌\n{results['failed']}"},
                    {"type": "mrkdwn", "text": f"*Skipped:*\n{results['skipped']}"}
                ]
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": f"<" + results['report_url'] + "|View Full Report>"
                }
            }
        ]
    }
    
    response = requests.post(webhook_url, json=message)
    return response.status_code == 200
```

## Best Practices

1. **Performance**: Don't slow down test execution
2. **Storage**: Implement retention policies
3. **Visualization**: Use charts for quick insights
4. **Accessibility**: Make reports shareable
5. **Integration**: Connect to existing tools

## Common Prompts

### JSON Test Results API
```
Create REST API for test results:

Endpoints:
- POST /results - Submit test results
- GET /results/{runId} - Get execution results
- GET /results/trends - Get historical trends
- GET /results/failures - Get recent failures

Include OpenAPI/Swagger documentation
```

### Email Report Template
```
Design HTML email template for test results:

Include:
- Summary statistics
- Top failures
- Trend comparison
- Direct link to full report
- Mobile-responsive design
```
