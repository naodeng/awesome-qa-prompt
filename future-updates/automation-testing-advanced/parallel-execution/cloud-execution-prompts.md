# Cloud Execution Parallel Testing Prompts

## 1. BrowserStack Parallel Testing

```
Configure BrowserStack for parallel testing:

Account: [USERNAME]
Access Key: [KEY]
Parallel Sessions: [NUMBER]
Browsers/Devices: [LIST]

Include:
- Capabilities configuration
- Local testing setup
- Build naming strategy
- Video recording options
- Network logs capture
```

## Example: BrowserStack Configuration

```java
DesiredCapabilities caps = new DesiredCapabilities();
caps.setCapability("os", "Windows");
caps.setCapability("os_version", "10");
caps.setCapability("browser", "Chrome");
caps.setCapability("browser_version", "latest");
caps.setCapability("browserstack.user", USERNAME);
caps.setCapability("browserstack.key", ACCESS_KEY);
caps.setCapability("build", "Build_" + BUILD_NUMBER);
caps.setCapability("name", "Parallel Test");

WebDriver driver = new RemoteWebDriver(
    new URL("https://hub.browserstack.com/wd/hub"), 
    caps
);
```

## 2. Sauce Labs Parallel Testing

```
Setup Sauce Labs parallel execution:

Data Center: [US/EU]
Parallel Tests: [NUMBER]
Platform Coverage: [DESCRIBE]

Include:
- Authentication configuration
- Platform/browser matrix
- Sauce Connect for local testing
- Test result reporting
```

## 3. LambdaTest Configuration

```
Configure LambdaTest for parallel runs:

Concurrent Sessions: [NUMBER]
Browsers: [LIST]
Operating Systems: [LIST]
Mobile Devices: [LIST]

Features:
- Screenshot on error
- Network throttling
- Geolocation testing
- Responsive testing
```

## Best Practices

1. **Cost Optimization**: Use parallel wisely based on plan
2. **Session Management**: Clean up sessions properly
3. **Tunneling**: Use for testing local/staging environments
4. **Debugging**: Enable video/screenshots for failures
```
