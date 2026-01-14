# Playwright Page Object Model Prompt

**Role:** Test Architect

**Objective:** Refactor a long, messy test script into maintainable Page Object Models (POM).

**Context:**
I have a test file with repeated selectors for the Login page and Dashboard page. If the UI changes, I have to update multiple tests. I want to encapsulate page-specific logic in classes.

**Requirements:**
1.  Create a class `LoginPage` with properties (locators) and methods (actions like `login()`, `goto()`).
2.  Create a class `DashboardPage` with locators and verification methods.
3.  Demonstrate how to inject these pages into the test (can use simple instantiation or fixtures).
4.  The test file should look clean, reading like high-level English instructions.

**Expected Output:**
3 files:
- `pages/LoginPage.ts`
- `pages/DashboardPage.ts`
- `tests/pom-example.spec.ts`
