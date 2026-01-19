# Selenium Quick Reference

## 📋 Metadata
- **Difficulty**: Intermediate
- **Estimated Time**: 5min
- **Prerequisites**: Basic Selenium knowledge
- **Tags**: #intermediate #selenium #quick-reference #cheat-sheet #web
- **Last Updated**: 2026-01-01
- **Version**: 1.0

## 🎯 Objective
Quick reference guide for common Selenium WebDriver operations and patterns. Perfect for daily use when writing tests.

## ⚡ Quick Prompts

### Element Interaction
```
Generate Selenium code to [ACTION] on element:
Locator: [ID/CSS/XPATH]
Language: [JAVA/PYTHON/JAVASCRIPT]
Action: [CLICK/TYPE/SELECT/HOVER]
```

### Wait Strategies
```
Create explicit wait for:
Condition: [VISIBLE/CLICKABLE/PRESENT/TEXT_TO_BE]
Timeout: [SECONDS]
Element: [LOCATOR]
Language: [JAVA/PYTHON]
```

### Common Patterns
```
Quick code for:
- Handle alert/popup
- Switch to iframe
- Take screenshot
- Execute JavaScript
- Handle dropdown
Language: [JAVA/PYTHON/JAVASCRIPT]
```

## 🔧 Common Code Snippets

### Java
```java
// Click element
driver.findElement(By.id("button")).click();

// Type text
driver.findElement(By.name("username")).sendKeys("test");

// Explicit wait
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(ExpectedConditions.elementToBeClickable(By.id("submit")));

// Handle dropdown
Select dropdown = new Select(driver.findElement(By.id("country")));
dropdown.selectByVisibleText("United States");

// Switch to iframe
driver.switchTo().frame("frameName");

// Take screenshot
File screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
```

### Python
```python
# Click element
driver.find_element(By.ID, "button").click()

# Type text
driver.find_element(By.NAME, "username").send_keys("test")

# Explicit wait
wait = WebDriverWait(driver, 10)
wait.until(EC.element_to_be_clickable((By.ID, "submit")))

# Handle dropdown
select = Select(driver.find_element(By.ID, "country"))
select.select_by_visible_text("United States")

# Switch to iframe
driver.switch_to.frame("frameName")

# Take screenshot
driver.save_screenshot("screenshot.png")
```

## 📚 Locator Strategies

| Strategy | Example | When to Use |
|----------|---------|-------------|
| ID | `By.id("username")` | Most reliable, use when available |
| Name | `By.name("email")` | Good for form fields |
| CSS | `By.cssSelector(".btn-primary")` | Fast, flexible |
| XPath | `By.xpath("//button[@type='submit']")` | Complex hierarchies |
| Link Text | `By.linkText("Click Here")` | Exact link text |
| Partial Link | `By.partialLinkText("Click")` | Part of link text |

## ⏱️ Wait Types

| Wait Type | Use Case | Example |
|-----------|----------|---------|
| Implicit | Global default wait | `driver.manage().timeouts().implicitlyWait(10, SECONDS)` |
| Explicit | Specific condition | `wait.until(EC.visibility_of_element_located(...))` |
| Fluent | Custom polling | `new FluentWait<>().pollingEvery(500, MILLISECONDS)` |

## 🔗 Related Prompts

- [Selenium Role](../../cursor-ai/selenium-role.md) - Full Selenium expert guidance
- [POM Pattern](../../cursor-ai/pom-role.md) - Page Object Model
- [Web Automation](../test-script-generation/) - Complete test generation

## 💡 Pro Tips

1. **Prefer ID/Name** over XPath when possible
2. **Use Explicit Waits** instead of Thread.sleep()
3. **Create Page Objects** for maintainability
4. **Handle Stale Elements** with retry logic
5. **Clean Up** with proper driver.quit()

---

**Quick Access**: Bookmark this page for daily reference!
