# Allure Reporting Prompts

## 1. Allure Report Setup

```
Configure Allure Reports for:

Testing Framework: [TestNG/JUnit/Pytest/Cucumber/Mocha]
Language: [Java/Python/JavaScript/C#]
Build Tool: [Maven/Gradle/npm]

Include:
- Dependency/plugin configuration
- Allure CLI installation
- Report generation command
- Jenkins/CI integration
- Historical trends
```

## 2. Enhanced Allure Features

```
Implement advanced Allure features:

Test Suite: [NAME]
Features Required:
- Step annotations
- Attachment support (screenshots, logs, videos)
- Test categorization (Epic, Feature, Story)
- Severity levels
- Flaky test detection
- Retries tracking
- Environment information
- Trend graphs
```

## Example: Java/TestNG Allure

```java
import io.qameta.allure.*;
import org.testng.annotations.Test;

@Epic("User Management")
@Feature("User Login")
public class LoginTest extends BaseTest {

    @Test
    @Story("Successful Login")
    @Severity(SeverityLevel.CRITICAL)
    @Description("Test successful user login with valid credentials")
    @Owner("QA Team")
    public void testSuccessfulLogin() {
        loginPage.open();
        attachScreenshot("Login Page");
        
        loginPage.enterUsername("testuser");
        loginPage.enterPassword("password123");
        
        attachText("Credentials", "Username: testuser");
        
        loginPage.clickLogin();
        
        Assert.assertTrue(homePage.isDisplayed(), "Home page should be displayed");
        attachScreenshot("Home Page");
    }

    @Step("Enter username: {username}")
    public void enterUsername(String username) {
        driver.findElement(By.id("username")).sendKeys(username);
    }

    @Attachment(value = "Screenshot", type = "image/png")
    public byte[] attachScreenshot(String name) {
        return ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES );
    }

    @Attachment(value = "{name}", type = "text/plain")
    public String attachText(String name, String content) {
        return content;
    }
}
```

## Example: Python/Pytest Allure

```python
import allure
import pytest

@allure.epic("User Management")
@allure.feature("Authentication")
class TestLogin:

    @allure.story("Successful Login")
    @allure.severity(allure.severity_level.CRITICAL)
    @allure.title("Test login with valid credentials")
    def test_successful_login(self):
        with allure.step("Navigate to login page"):
            driver.get("https://example.com/login")
            allure.attach(driver.get_screenshot_as_png(), 
                         name="Login Page", 
                         attachment_type=allure.attachment_type.PNG)
        
        with allure.step("Enter credentials"):
            driver.find_element(By.ID, "username").send_keys("testuser")
            driver.find_element(By.ID, "password").send_keys("pass123")
        
        with allure.step("Click login button"):
            driver.find_element(By.ID, "loginBtn").click()
        
        with allure.step("Verify home page"):
            assert "Dashboard" in driver.title
            allure.attach(driver.get_screenshot_as_png(), 
                         name="Dashboard", 
                         attachment_type=allure.attachment_type.PNG)
```

## Allure CLI Commands

```bash
# Generate report from results
allure generate allure-results --clean -o allure-report

# Open report in browser
allure open allure-report

# Serve report (with auto-refresh)
allure serve allure-results

# Generate report with history
allure generate allure-results --clean -o allure-report
cp -r allure-report/history allure-results/history
```

## Best Practices

1. **Categorization**: Use Epic > Feature > Story hierarchy
2. **Severity**: Mark critical vs minor tests
3. **Steps**: Break down complex tests into steps
4. **Attachments**: Add screenshots only on failures for performance
5. **Links**: Link to test management tools (JIRA, TestRail)
6. **Environment**: Include environment.properties file

## Common Prompts

### BDD Cucumber Allure Integration
```
Setup Allure for Cucumber BDD:

Features: Gherkin scenarios
Include:
- Feature file visualization
- Step definitions
- Scenario parameters
- Screenshots per step
- Tags as categories
```

### REST API Allure Reports
```
Configure Allure for API testing:

Framework: [RestAssured/Requests/Axios]
Include:
- Request/response logging
- JSON/XML attachments
- cURL command recreation
- Response time metrics
- Status code validation
```
