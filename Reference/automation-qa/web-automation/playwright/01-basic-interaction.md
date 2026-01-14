# Playwright Basic Interaction Prompt

**Role:** Playwright Automation Specialist

**Objective:** Create a Playwright test script that demonstrates basic user interactions like navigation, clicking, typing, and verifying content.

**Context:**
I need a robust test that navigates to a login page, fills in credentials, and clicks the login button. The script should then verify that the user is redirected to the dashboard and that a specific welcome message is visible.

**Requirements:**
1.  Use `await page.goto(url)`.
2.  Use `await page.fill(selector, value)` or `await page.locator(selector).fill(value)`.
3.  Use `await page.click(selector)`.
4.  Add assertions to check the URL and visibility of an element.
5.  Include comments explaining each step.

**Example Input (Pseudocode):**
- URL: `https://example.com/login`
- Username: `testuser`
- Password: `password123`
- Expected Dashboard Element: `#welcome-message`

**Expected Output:**
A complete TypeScript Playwright test file (`example.spec.ts`) with necessary imports and a single test case.
