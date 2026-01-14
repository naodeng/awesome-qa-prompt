# Reusable Keyword/Method Prompts

## 1. Common Utility Methods

```
Create reusable utility methods for:

Framework: [SELENIUM/PLAYWRIGHT/CYPRESS]
Language: [JAVA/JAVASCRIPT/PYTHON]

Include methods for:
- Element interactions (click, type, select)
- Waits (explicit, fluent, custom)
- Screenshot capture
- Scroll operations
- Alert handling
- Window/tab switching
- File upload/download
```

## Example Utility Class (Java)

```java
public class WebUtils {
    
    public static void clickElement(WebDriver driver, By locator) {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        WebElement element = wait.until(ExpectedConditions.elementToBeClickable(locator));
        element.click();
    }
    
    public static void enterText(WebDriver driver, By locator, String text) {
        WebElement element = driver.findElement(locator);
        element.clear();
        element.sendKeys(text);
    }
    
    public static String captureScreenshot(WebDriver driver, String testName) {
        TakesScreenshot ts = (TakesScreenshot) driver;
        File source = ts.getScreenshotAs(OutputType.FILE);
        String destination = "screenshots/" + testName + "_" + System.currentTimeMillis() + ".png";
        FileUtils.copyFile(source, new File(destination));
        return destination;
    }
}
```

## Best Practices

1. **Single Responsibility**: One method, one purpose
2. **Error Handling**: Add try-catch blocks
3. **Logging**: Log important actions
4. **Documentation**: Add JavaDoc/comments
5. **Parameterization**: Make methods flexible
