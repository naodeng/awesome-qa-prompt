# Selenium Test Script Generation Prompts

## 1. Basic Selenium Test Script

```
Generate a Selenium test script for:

Language: [JAVA/PYTHON/C#/JAVASCRIPT]
Framework: [TESTNG/JUNIT/PYTEST/MOCHA]
Browser: [CHROME/FIREFOX/EDGE/SAFARI]
Test Scenario: [DESCRIBE_SCENARIO]

Include:
- WebDriver setup and teardown
- Page navigation
- Element interactions
- Assertions
- Wait strategies
- Error handling
- Comments explaining each step
```

## 2. Selenium Page Object Model Script

```
Create a Selenium test using Page Object Model for:

Page: [PAGE_NAME]
URL: [PAGE_URL]
Elements: [LIST_KEY_ELEMENTS]
Actions: [LIST_USER_ACTIONS]
Language: [JAVA/PYTHON/C#]

Generate:
- Page Object class with elements
- Page Object methods for actions
- Test class using the Page Object
- Proper encapsulation
- Reusable methods
```

## 3. Selenium Data-Driven Test

```
Generate a data-driven Selenium test for:

Test Scenario: [SCENARIO]
Data Source: [EXCEL/CSV/JSON/DATABASE]
Test Data: [DESCRIBE_DATA_VARIATIONS]
Language: [LANGUAGE]

Include:
- Data provider/parameterization setup
- Test method with parameters
- Data reading logic
- Multiple test iterations
- Reporting for each data set
```

## 4. Selenium Cross-Browser Test

```
Create a cross-browser Selenium test for:

Browsers: [CHROME/FIREFOX/EDGE/SAFARI]
Test Scenario: [SCENARIO]
Framework: [TESTNG/JUNIT]
Parallel Execution: [YES/NO]

Generate:
- Browser configuration
- WebDriver factory pattern
- Cross-browser test execution
- Browser-specific handling
- Parallel execution setup (if needed)
```

## 5. Selenium Wait Strategies Script

```
Generate a Selenium script demonstrating wait strategies for:

Scenario: [DESCRIBE_SCENARIO]
Dynamic Elements: [LIST_ELEMENTS]
Language: [LANGUAGE]

Include examples of:
- Implicit wait
- Explicit wait
- Fluent wait
- Custom wait conditions
- Wait for element visibility
- Wait for element clickability
- Wait for text to be present
```

## 6. Selenium Form Automation

```
Create a Selenium script to automate form submission:

Form URL: [URL]
Form Fields:
- [FIELD_1]: [TYPE] - [VALIDATION_RULES]
- [FIELD_2]: [TYPE] - [VALIDATION_RULES]
- [FIELD_3]: [TYPE] - [VALIDATION_RULES]

Generate script to:
- Fill all form fields
- Handle dropdowns
- Handle checkboxes/radio buttons
- Handle file uploads (if applicable)
- Submit form
- Verify success message
- Validate error messages
```

## 7. Selenium Login Test Script

```
Generate a comprehensive login test script:

Login URL: [URL]
Valid Credentials: [USERNAME/PASSWORD]
Test Cases:
- Valid login
- Invalid username
- Invalid password
- Empty fields
- Remember me functionality

Include:
- Setup and teardown
- Multiple test methods
- Assertions for each scenario
- Screenshot on failure
```

## 8. Selenium E-commerce Test Script

```
Create a Selenium script for e-commerce flow:

Website: [WEBSITE_URL]
Flow:
1. Search for product
2. Select product from results
3. Add to cart
4. Proceed to checkout
5. Fill shipping information
6. Complete purchase

Generate:
- Complete end-to-end script
- Page Objects for each page
- Data handling
- Verification at each step
```

## 9. Selenium Screenshot and Reporting

```
Generate a Selenium script with screenshot and reporting:

Test Scenario: [SCENARIO]
Reporting Tool: [EXTENT_REPORTS/ALLURE/TESTNG]
Screenshot Strategy: [ON_FAILURE/ALWAYS/CUSTOM]

Include:
- Screenshot capture method
- Report generation setup
- Test result logging
- Screenshot attachment to report
- Pass/fail status reporting
```

## 10. Selenium Grid Configuration

```
Create Selenium Grid configuration and test script:

Hub Configuration: [DETAILS]
Nodes: [NUMBER_AND_BROWSERS]
Test Scenario: [SCENARIO]
Parallel Tests: [NUMBER]

Generate:
- Grid setup configuration
- RemoteWebDriver setup
- Desired capabilities
- Parallel test execution
- Node selection logic
```

## Selenium Test Script Template (Java + TestNG)

```java
package com.qa.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.*;
import java.time.Duration;

public class [TEST_CLASS_NAME] {
    
    private WebDriver driver;
    private WebDriverWait wait;
    
    @BeforeMethod
    public void setUp() {
        // Set up ChromeDriver
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        wait = new WebDriverWait(driver, Duration.ofSeconds(20));
    }
    
    @Test(priority = 1, description = "[TEST_DESCRIPTION]")
    public void test[TEST_NAME]() {
        // Navigate to URL
        driver.get("[URL]");
        
        // Find and interact with elements
        WebElement element = wait.until(
            ExpectedConditions.elementToBeClickable(By.id("[ELEMENT_ID]"))
        );
        element.click();
        
        // Perform actions
        WebElement inputField = driver.findElement(By.name("[FIELD_NAME]"));
        inputField.sendKeys("[TEST_DATA]");
        
        // Submit or click button
        WebElement submitButton = driver.findElement(By.xpath("[XPATH]"));
        submitButton.click();
        
        // Verify result
        WebElement resultElement = wait.until(
            ExpectedConditions.visibilityOfElementLocated(By.className("[CLASS_NAME]"))
        );
        String actualText = resultElement.getText();
        Assert.assertEquals(actualText, "[EXPECTED_TEXT]", "Verification failed");
    }
    
    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
```

## Selenium Page Object Template (Java)

```java
package com.qa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class [PAGE_NAME]Page {
    
    private WebDriver driver;
    private WebDriverWait wait;
    
    // Page Elements using @FindBy
    @FindBy(id = "[ELEMENT_ID]")
    private WebElement [elementName];
    
    @FindBy(name = "[ELEMENT_NAME]")
    private WebElement [elementName];
    
    @FindBy(xpath = "[XPATH]")
    private WebElement [elementName];
    
    @FindBy(css = "[CSS_SELECTOR]")
    private WebElement [elementName];
    
    // Constructor
    public [PAGE_NAME]Page(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(20));
        PageFactory.initElements(driver, this);
    }
    
    // Page Methods
    public void [actionMethod]([PARAMETERS]) {
        wait.until(ExpectedConditions.elementToBeClickable([elementName]));
        [elementName].click();
    }
    
    public void enter[FieldName](String text) {
        wait.until(ExpectedConditions.visibilityOf([elementName]));
        [elementName].clear();
        [elementName].sendKeys(text);
    }
    
    public String get[ElementName]Text() {
        wait.until(ExpectedConditions.visibilityOf([elementName]));
        return [elementName].getText();
    }
    
    public boolean is[ElementName]Displayed() {
        try {
            return [elementName].isDisplayed();
        } catch (Exception e) {
            return false;
        }
    }
    
    public void waitForPageLoad() {
        wait.until(ExpectedConditions.visibilityOf([keyElement]));
    }
}
```

## Selenium Python Template (pytest)

```python
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service

class Test[TestClassName]:
    
    @pytest.fixture(autouse=True)
    def setup_teardown(self):
        # Setup
        service = Service('path/to/chromedriver')
        self.driver = webdriver.Chrome(service=service)
        self.driver.maximize_window()
        self.driver.implicitly_wait(10)
        self.wait = WebDriverWait(self.driver, 20)
        
        yield
        
        # Teardown
        self.driver.quit()
    
    def test_[test_name](self):
        # Navigate to URL
        self.driver.get("[URL]")
        
        # Find and interact with elements
        element = self.wait.until(
            EC.element_to_be_clickable((By.ID, "[ELEMENT_ID]"))
        )
        element.click()
        
        # Enter text
        input_field = self.driver.find_element(By.NAME, "[FIELD_NAME]")
        input_field.send_keys("[TEST_DATA]")
        
        # Submit
        submit_button = self.driver.find_element(By.XPATH, "[XPATH]")
        submit_button.click()
        
        # Verify
        result_element = self.wait.until(
            EC.visibility_of_element_located((By.CLASS_NAME, "[CLASS_NAME]"))
        )
        actual_text = result_element.text
        assert actual_text == "[EXPECTED_TEXT]", f"Expected '[EXPECTED_TEXT]', but got '{actual_text}'"
```

## Best Practices

1. **Use Page Object Model**: Separate page logic from tests
2. **Explicit Waits**: Prefer explicit waits over implicit waits
3. **Unique Locators**: Use ID or unique attributes when possible
4. **Error Handling**: Add try-catch blocks for robust tests
5. **Screenshots**: Capture screenshots on failure
6. **Logging**: Add logging for debugging
7. **Reusable Methods**: Create utility methods for common actions
8. **Data-Driven**: Externalize test data
9. **Parallel Execution**: Use TestNG/pytest for parallel tests
10. **Clean Code**: Follow coding standards and add comments

## Common Selenium Locator Strategies

```
Priority order (most reliable to least):
1. ID: By.id("elementId")
2. Name: By.name("elementName")
3. CSS Selector: By.cssSelector("css.selector")
4. XPath: By.xpath("//xpath/expression")
5. Link Text: By.linkText("Link Text")
6. Partial Link Text: By.partialLinkText("Partial")
7. Tag Name: By.tagName("tagname")
8. Class Name: By.className("className")
```

## Tips for Using These Prompts

1. Replace placeholders with actual values
2. Specify your programming language preference
3. Mention your testing framework
4. Provide detailed element locators
5. Describe the complete user flow
6. Include expected outcomes
7. Specify any special requirements (waits, screenshots, etc.)
