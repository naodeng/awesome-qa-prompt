# Mobile Automation Prompts

This document contains AI prompts for generating mobile automation test scripts using various frameworks.

## 1. Appium Test Script Generation

### Prompt: Basic Appium Test
```
Generate an Appium test script in [Java/Python/JavaScript/C#] for the following scenario:
- Platform: [iOS/Android/Both]
- Framework: [TestNG/JUnit/Pytest/Mocha]
- Scenario: [Describe the test scenario]

Include:
- Proper setup and teardown
- Explicit waits
- Page Object Model structure
- Assertions
- Error handling
```

### Example:
```
Generate an Appium test script in Python using Pytest for Android that:
1. Launches the app
2. Logs in with valid credentials
3. Navigates to the profile page
4. Verifies user information is displayed
5. Logs out

Use Page Object Model pattern and include proper waits.
```

---

## 2. Cross-Platform Test Generation

### Prompt:
```
Create a cross-platform Appium test that works on both iOS and Android for:
[Describe the test scenario]

Requirements:
- Single test class/file
- Platform-specific locators
- Conditional logic for platform differences
- Shared page objects where possible
- Platform-specific capabilities configuration

Language: [Java/Python/JavaScript/C#]
```

---

## 3. Mobile Gesture Automation

### Prompt:
```
Generate Appium code to perform the following mobile gestures:
- Swipe [direction] on [element/screen]
- Scroll to element with text "[text]"
- Pinch zoom [in/out] on [element]
- Long press on [element]
- Drag element from [source] to [destination]

Platform: [iOS/Android/Both]
Language: [Java/Python/JavaScript/C#]

Include:
- Touch Actions API usage
- W3C Actions for Appium 2.x
- Error handling for element not found
```

---

## 4. Page Object Model for Mobile

### Prompt:
```
Create a Page Object Model structure for a mobile app with the following screens:
- [Screen 1 name and elements]
- [Screen 2 name and elements]
- [Screen 3 name and elements]

Include:
- Base page class with common methods
- Screen-specific page classes
- Platform-agnostic locator strategies
- Fluent interface pattern
- Wait utilities

Platform: [iOS/Android/Both]
Language: [Java/Python/JavaScript/C#]
```

### Example:
```
Create a Page Object Model for an e-commerce app with:
- Login Screen (username field, password field, login button, forgot password link)
- Home Screen (search bar, category tabs, product grid, cart icon)
- Product Detail Screen (product image, title, price, add to cart button, reviews section)

Use Python with Appium. Include a base page with common swipe and wait methods.
```

---

## 5. Mobile API Testing Integration

### Prompt:
```
Generate a hybrid test that combines mobile UI automation with API testing:
- Use API to set up test data: [describe data setup]
- Perform UI actions: [describe UI flow]
- Verify results via API: [describe verification]

Tools:
- Mobile: Appium
- API: [Requests/RestAssured/Axios]
- Language: [Python/Java/JavaScript]

Include proper test data cleanup.
```

---

## 6. Mobile Test Data Management

### Prompt:
```
Create a data-driven mobile test framework that:
- Reads test data from [Excel/CSV/JSON/Database]
- Executes tests with multiple data sets
- Supports parameterization
- Includes data for: [list data types]

Framework: [TestNG/Pytest/Mocha]
Platform: [iOS/Android/Both]

Include:
- Data provider implementation
- Test method with parameters
- Data file structure
- Error handling for invalid data
```

---

## 7. Mobile Performance Testing Automation

### Prompt:
```
Generate an automated performance test for mobile that measures:
- App launch time (cold start, warm start)
- Screen load time
- Memory usage
- Battery consumption
- Network data usage

Platform: [iOS/Android]
Tools: [Appium + performance monitoring]
Language: [Python/Java/JavaScript]

Include:
- Performance metric collection
- Baseline comparison
- Report generation
- Threshold validation
```

---

## 8. Mobile CI/CD Integration

### Prompt:
```
Create a CI/CD pipeline configuration for mobile test automation:
- CI Tool: [Jenkins/GitHub Actions/GitLab CI/CircleCI]
- Test Framework: Appium
- Platforms: [iOS/Android/Both]
- Device/Emulator setup
- Test execution
- Report generation and publishing
- Notification on failure

Include:
- Pipeline configuration file
- Docker setup (if applicable)
- Parallel execution
- Artifact storage
```

---

## 9. Mobile Screenshot and Recording

### Prompt:
```
Generate code to capture screenshots and recordings during mobile test execution:
- Screenshot on test failure
- Screenshot at specific checkpoints
- Video recording of entire test
- Attach to test report

Framework: [TestNG/Pytest/Mocha]
Platform: [iOS/Android/Both]
Language: [Java/Python/JavaScript]

Include:
- File naming convention with timestamp
- Storage location configuration
- Cleanup of old files
```

---

## 10. Mobile Deep Link Testing

### Prompt:
```
Create automated tests for mobile deep linking:
- Test deep links: [list deep link URLs]
- Verify navigation to correct screen
- Validate data passed via deep link
- Test universal links (iOS) / App links (Android)
- Handle deep links when app is closed/backgrounded

Platform: [iOS/Android/Both]
Include error scenarios for invalid deep links.
```

---

## 11. Mobile Notification Testing

### Prompt:
```
Generate automation code to test push notifications:
- Trigger notification via [API/Firebase/Custom backend]
- Verify notification appears
- Tap notification
- Verify app navigates to correct screen
- Test notification actions (if applicable)

Platform: [iOS/Android/Both]
Language: [Java/Python/JavaScript]

Include handling for:
- App in foreground/background/terminated
- Notification permissions
```

---

## 12. Mobile Biometric Authentication Testing

### Prompt:
```
Create automated tests for biometric authentication:
- Face ID / Touch ID (iOS)
- Fingerprint / Face Unlock (Android)

Test scenarios:
- Successful authentication
- Failed authentication
- Fallback to PIN/password
- Biometric not enrolled
- Biometric disabled

Platform: [iOS/Android/Both]
Include simulator/emulator biometric simulation.
```

---

## 13. Mobile Accessibility Testing Automation

### Prompt:
```
Generate automated accessibility tests for mobile:
- Verify all interactive elements have accessibility labels
- Test VoiceOver (iOS) / TalkBack (Android) compatibility
- Check minimum touch target sizes (44x44 points)
- Verify color contrast ratios
- Test keyboard navigation

Platform: [iOS/Android/Both]
Framework: [XCUITest/Espresso/Appium]
```

---

## 14. Mobile Network Simulation

### Prompt:
```
Create tests that simulate various network conditions:
- Switch between WiFi and cellular
- Simulate slow network (2G, 3G)
- Test offline mode
- Simulate network interruption
- Test with airplane mode

Use Appium network simulation capabilities or device settings.
Platform: [iOS/Android/Both]

Include verification of:
- Offline indicators
- Data sync behavior
- Error messages
```

---

## 15. Mobile Test Reporting

### Prompt:
```
Set up comprehensive test reporting for mobile automation:
- Framework: [Extent Reports/Allure/ReportPortal]
- Include: Test results, screenshots, device info, execution time
- Categorize by: Platform, test type, priority
- Generate: HTML report, JSON data, trend analysis

Integration with: [TestNG/Pytest/Mocha]

Include:
- Custom report styling
- Failed test screenshot attachment
- Device/OS information
- Test execution summary
```

---

## Usage Tips

### For Best Results:

1. **Be Specific**: Include exact element locators, app package/bundle IDs, and screen names
2. **Specify Version**: Mention Appium version (1.x vs 2.x) as APIs differ
3. **Include Context**: Provide app type (native, hybrid, web) and technology stack
4. **Request Best Practices**: Ask for industry-standard patterns and error handling
5. **Add Constraints**: Mention any framework or organizational standards to follow

### Example of a Well-Formed Prompt:

```
Generate an Appium 2.x test script in Python using Pytest for an Android native app that:

App Details:
- Package: com.example.shopping
- Activity: .MainActivity

Test Scenario:
1. Launch app and wait for home screen
2. Tap on search bar (accessibility ID: "search_input")
3. Enter "laptop" and submit search
4. Verify at least 5 products are displayed
5. Tap on the first product
6. Verify product detail page loads
7. Add product to cart
8. Verify cart badge shows "1"

Requirements:
- Use Page Object Model
- Use explicit waits (WebDriverWait)
- Include proper assertions with meaningful messages
- Add screenshot on failure
- Use pytest fixtures for setup/teardown
- Follow PEP 8 style guide

Please include:
- conftest.py for driver setup
- Page objects for Home, Search Results, and Product Detail screens
- Test file with the scenario
- requirements.txt
```
