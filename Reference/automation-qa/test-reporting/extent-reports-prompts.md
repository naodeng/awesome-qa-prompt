# Extent Reports Testing Prompts

## 1. Extent Reports Setup

```
Configure Extent Reports for:

Testing Framework: [TestNG/JUnit/Cucumber/PyTest]
Programming Language: [Java/Python/JavaScript/C#]
Report Output: [PATH]

Requirements:
- HTML report generation
- Screenshot attachment
- Test categorization
- Pass/Fail statistics
- Execution timeline
- Environment details

Include:
- Dependency configuration
- ExtentReports initialization
- Test listener/reporter setup
- Report customization options
```

## 2. Enhanced Test Reporting

```
Create comprehensive Extent Report setup with:

Test Suite: [NAME]
Report Features:
- Test step logging
- Screenshot on failure
- Video recording
- System information
- Test categories/tags
- Author attribution
- Device information

Customize:
- Report theme (dark/standard)
- Company logo and branding
- Custom CSS styling
- Report title and name
```

## 3. CI/CD Report Integration

```
Integrate Extent Reports into CI/CD pipeline:

CI Tool: [Jenkins/GitLab/GitHub Actions]
Report Location: [PATH]
Archive Strategy: [RETENTION_POLICY]

Include:
- Report generation in pipeline
- Artifact publishing
- Email notifications with report
- Historical trend tracking
- Failure screenshot attachments
```

## Example: Java/TestNG Extent Reports

```java
package com.example.reporting;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

public class ExtentReportListener implements ITestListener {
    private static ExtentReports extent;
    private static ThreadLocal<ExtentTest> test = new ThreadLocal<>();

    @Override
    public void onStart(ITestContext context) {
        ExtentSparkReporter htmlReporter = new ExtentSparkReporter("reports/extent-report.html");
        
        // Configure report
        htmlReporter.config().setDocumentTitle("Automation Test Report");
        htmlReporter.config().setReportName("Functional Test Report");
        htmlReporter.config().setTheme(Theme.STANDARD);
        htmlReporter.config().setEncoding("utf-8");
        
        extent = new ExtentReports();
        extent.attachReporter(htmlReporter);
        
        // System information
        extent.setSystemInfo("OS", System.getProperty("os.name"));
        extent.setSystemInfo("Java Version", System.getProperty("java.version"));
        extent.setSystemInfo("Environment", "QA");
        extent.setSystemInfo("Browser", "Chrome");
    }

    @Override
    public void onTestStart(ITestResult result) {
        ExtentTest extentTest = extent.createTest(result.getMethod().getMethodName());
        extentTest.assignCategory(result.getMethod().getGroups());
        extentTest.assignAuthor("QA Team");
        test.set(extentTest);
    }

    @Override
    public void onTestSuccess(ITestResult result) {
        test.get().pass("Test passed successfully");
    }

    @Override
    public void onTestFailure(ITestResult result) {
        test.get().fail(result.getThrowable());
        
        // Attach screenshot
        try {
            String screenshotPath = captureScreenshot(result.getMethod().getMethodName());
            test.get().addScreenCaptureFromPath(screenshotPath);
        } catch (Exception e) {
            test.get().fail("Failed to capture screenshot: " + e.getMessage());
        }
    }

    @Override
    public void onTestSkipped(ITestResult result) {
        test.get().skip("Test skipped: " + result.getThrowable());
    }

    @Override
    public void onFinish(ITestContext context) {
        extent.flush();
    }

    private String captureScreenshot(String testName) {
        // Screenshot capture logic
        return "screenshots/" + testName + ".png";
    }
}
```

## Example: Step-by-Step Logging

```java
public class LoginTest extends BaseTest {
    
    @Test
    public void testLoginFunctionality() {
        ExtentTest test = ExtentTestManager.getTest();
        
        test.info("Step 1: Navigate to login page");
        driver.get("https://example.com/login");
        
        test.info("Step 2: Enter username");
        driver.findElement(By.id("username")).sendKeys("testuser");
        
        test.info("Step 3: Enter password");
        driver.findElement(By.id("password")).sendKeys("password123");
        
        test.info("Step 4: Click login button");
        driver.findElement(By.id("loginBtn")).click();
        
        test.pass("Login successful");
        
        // Attach screenshot
        test.addScreenCaptureFromPath(captureScreenshot("login-success"));
    }
}
```

## Example: Python/Pytest Extent Reports

```python
import pytest
from py_html_reporter import HTMLReporter

@pytest.fixture(scope="session", autouse=True)
def configure_html_report():
    # Configure pytest-html or similar
    pass

class TestUserAPI:
    
    def test_get_user(self, setup_extent):
        test = setup_extent
        
        test.log("INFO", "Sending GET request to /api/users/123")
        response = requests.get("https://api.example.com/api/users/123")
        
        test.log("INFO", f"Response status: {response.status_code}")
        assert response.status_code == 200, "Expected status 200"
        
        test.log("INFO", "Validating response body")
        data = response.json()
        assert data['id'] == 123
        
        test.log("PASS", "Test completed successfully")
```

## Example: JavaScript/WebdriverIO Extent Reports

```javascript
const { ExtentReporter } = require('wdio-extentreports-service');

// wdio.conf.js
exports.config = {
    reporters: [
        ['extentreports', {
            outputDir: './reports',
            reportName: 'Automation Test Report',
            createHTMLReport: true,
            createJSONReport: true,
            screenshotMode: 'onFailure',
            theme: 'standard'
        }]
    ],
    
    afterTest: function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            browser.takeScreenshot();
        }
    }
};
```

## Advanced Features

### 1. Custom Log Types
```java
test.log(Status.INFO, "Information message");
test.log(Status.PASS, "Step passed");
test.log(Status.FAIL, "Step failed");
test.log(Status.WARNING, "Warning message");
test.log(Status.SKIP, "Step skipped");
```

### 2. Nested Steps
```java
ExtentTest parent = extent.createTest("Parent Test");
ExtentTest child1 = parent.createNode("Child Test 1");
child1.pass("Child 1 passed");

ExtentTest child2 = parent.createNode("Child Test 2");
child2.fail("Child 2 failed");
```

### 3. Categorization and Tagging
```java
test.assignCategory("Smoke Test", "Login");
test.assignAuthor("John Doe");
test.assignDevice("Chrome 120");
```

### 4. Attachments
```java
// Screenshot
test.addScreenCaptureFromPath("screenshot.png", "Login Page");

// Base64 screenshot
test.addScreenCaptureFromBase64String(base64String);

// JSON/XML data
test.info(MarkupHelper.createCodeBlock(jsonString, CodeLanguage.JSON));

// Table
String[][] data = {{"Column1", "Column2"}, {"Value1", "Value2"}};
test.info(MarkupHelper.createTable(data));
```

## Report Customization

### Custom CSS
```css
/* extent-config.css */
.test-view .test-name {
    font-size: 1.2em;
    color: #2c3e50;
}

.step-pass {
    color: #27ae60;
}

.step-fail {
    color: #e74c3c;
}
```

### Configuration XML (Extent 4.x)
```xml
<!-- extent-config.xml -->
<extentreports>
    <configuration>
        <theme>standard</theme>
        <encoding>UTF-8</encoding>
        <documentTitle>Test Report</documentTitle>
        <reportName>Automation Results</reportName>
        
        <scripts>
            <![CDATA[
                $(document).ready(function() {
                    // Custom JavaScript
                });
            ]]>
        </scripts>
        
        <styles>
            <![CDATA[
                /* Custom CSS */
            ]]>
        </styles>
    </configuration>
</extentreports>
```

## Best Practices

1. **Thread Safety**
   - Use ThreadLocal for parallel execution
   - Synchronize report writing
   - Avoid race conditions

2. **Screenshot Strategy**
   - Capture on failures only (performance)
   - Use relative paths
   - Compress images if needed
   - Clean up old screenshots

3. **Logging Granularity**
   - Log important steps only
   - Avoid verbose logging
   - Include context in messages
   - Add assertions as explicit steps

4. **Report Organization**
   - Group related tests
   - Use clear test names
   - Categorize by feature/module
   - Add author information

5. **CI/CD Integration**
   - Archive reports as artifacts
   - Email on failures
   - Trend analysis across builds
   - Link to test management tools

## Common Prompts

### Multi-Browser Reporting
```
Create Extent Report setup for multi-browser testing:

Browsers: [Chrome, Firefox, Safari, Edge]
Parallel Execution: Yes
Thread Count: [NUMBER]

Report should:
- Show results per browser
- Aggregate statistics
- Highlight browser-specific failures
- Include browser versions
```

### BDD Cucumber Integration
```
Integrate Extent Reports with Cucumber:

Framework: Cucumber-JVM
Report Gherkin steps: Yes
Include:
- Feature file display
- Scenario outline expansion
- Step-level screenshots
- Tag-based filtering
- Hooks execution details
```

### Data-Driven Test Reporting
```
Setup Extent Reports for data-driven tests:

Data Source: [CSV/Excel/Database]
Iterations: [NUMBER]

Report Requirements:
- Show each iteration result
- Parameter values used
- Failure data summary
- Success rate per dataset
```
