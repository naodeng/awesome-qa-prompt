# GitHub Actions CI/CD Prompts

## 1. Test Automation Workflow

```
Create a GitHub Actions workflow for:

Project: [PROJECT_NAME]
Test Framework: [SELENIUM/PLAYWRIGHT/CYPRESS]
Language: [JAVA/JAVASCRIPT/PYTHON]
Trigger: [PUSH/PR/SCHEDULE]

Include:
- Checkout code
- Setup environment
- Install dependencies
- Run tests
- Generate reports
- Upload artifacts
```

## Example GitHub Actions Workflow

```yaml
name: Automated Tests

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '0 2 * * *'  # Run daily at 2 AM

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run Playwright tests
      run: npx playwright test
    
    - name: Upload test results
      if: always()
      uses: actions/upload-artifact@v3
      with:
        name: playwright-report
        path: playwright-report/
    
    - name: Upload screenshots on failure
      if: failure()
      uses: actions/upload-artifact@v3
      with:
        name: screenshots
        path: test-results/
```

## Best Practices

1. **Parallel Execution**: Run tests in parallel
2. **Caching**: Cache dependencies
3. **Artifacts**: Upload test reports and screenshots
4. **Notifications**: Add Slack/email notifications
5. **Matrix Strategy**: Test across multiple versions
