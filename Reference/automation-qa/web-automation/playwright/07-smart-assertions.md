# Playwright Smart Assertions Prompt

**Role:** Automation Stability Expert

**Objective:** Write non-flaky tests using Playwright's auto-retrying web assertions.

**Context:**
Tests are failing because assertions run before the element is ready. I need to replace generic Jest/Node assertions (like `expect(value).toBe()`) with Playwright's web-first assertions that wait for conditions to be met.

**Requirements:**
1.  Use `toBeVisible()`, `toBeHidden()`.
2.  Use `toHaveText()` vs `toContainText()`.
3.  Use `toBeEnabled()`, `toBeChecked()`.
4.  Explain the difference between `expect(locator).toBeVisible()` (retrying) and `expect(await locator.isVisible()).toBe(true)` (non-retrying, flaky).

**Expected Output:**
A set of examples demonstrating the correct assertion for various scenarios:
- Waiting for a modal to appear.
- Waiting for a list to contain specific items.
- Waiting for a button to become enabled after form validation.
