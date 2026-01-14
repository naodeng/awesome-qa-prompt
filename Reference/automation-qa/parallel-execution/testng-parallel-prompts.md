# TestNG Parallel Execution Prompts

## 1. TestNG Parallel Configuration

```
Configure TestNG parallel execution:

Parallel Level: [tests/classes/methods]
Thread Count: [NUMBER]
Test Suite: [SUITE_NAME]
Thread Pool Size: [SIZE]

Include:
- testng.xml configuration
- Thread-safe test design
- Data provider parallelization
- Browser/WebDriver thread management
- Reporting for parallel tests

Ensure:
- No test interdependencies
- Thread-safe utilities
- Proper resource cleanup
```

## Example: testng.xml Parallel Configuration

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd">
<suite name="ParallelTestSuite" parallel="methods" thread-count="5">
    <test name="Regression Tests">
        <classes>
            <class name="com.example.tests.LoginTest"/>
            <class name="com.example.tests.CheckoutTest"/>
            <class name="com.example.tests.SearchTest"/>
        </classes>
    </test>
</suite>
```

## Example: Thread-Safe WebDriver Management

```java
public class DriverManager {
    private static ThreadLocal<WebDriver> driver = new ThreadLocal<>();
    
    public static WebDriver getDriver() {
        if (driver.get() == null) {
            driver.set(createDriver());
        }
        return driver.get();
    }
    
    private static WebDriver createDriver() {
        WebDriver webDriver = new ChromeDriver();
        webDriver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        return webDriver;
    }
    
    public static void quitDriver() {
        if (driver.get() != null) {
            driver.get().quit();
            driver.remove();
        }
    }
}
```

## Best Practices

1. **Thread Safety**: Use ThreadLocal for shared resources
2. **Independence**: Tests should not depend on each other
3. **Data Isolation**: Separate test data per thread
4. **Resource Management**: Proper cleanup in @AfterMethod
```
