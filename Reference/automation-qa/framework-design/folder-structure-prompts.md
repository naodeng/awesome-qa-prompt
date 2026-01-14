# Test Automation Framework Design Prompts

## 1. Folder Structure Design

```
Design a test automation framework folder structure for:

Framework Type: [SELENIUM/PLAYWRIGHT/CYPRESS/API]
Language: [JAVA/JAVASCRIPT/PYTHON]
Design Pattern: [PAGE_OBJECT/SCREENPLAY/KEYWORD_DRIVEN]
Project Size: [SMALL/MEDIUM/LARGE]

Create structure including:
- Source code organization
- Test organization
- Configuration files
- Test data location
- Reports location
- Utilities and helpers
```

## Example Framework Structure

```
test-automation/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   ├── pages/
│   │   │   │   ├── LoginPage.java
│   │   │   │   └── DashboardPage.java
│   │   │   ├── utils/
│   │   │   │   ├── DriverFactory.java
│   │   │   │   └── ConfigReader.java
│   │   │   └── base/
│   │   │       └── BasePage.java
│   │   └── resources/
│   │       ├── config.properties
│   │       └── log4j2.xml
│   └── test/
│       ├── java/
│       │   ├── tests/
│       │   │   ├── LoginTests.java
│       │   │   └── DashboardTests.java
│       │   └── base/
│       │       └── BaseTest.java
│       └── resources/
│           └── testdata/
│               └── users.json
├── reports/
├── screenshots/
├── pom.xml
└── README.md
```

## Best Practices

1. **Separation of Concerns**: Keep pages, tests, and utilities separate
2. **Scalability**: Design for growth
3. **Maintainability**: Easy to understand and modify
4. **Reusability**: Promote code reuse
5. **Configuration**: Externalize configuration
