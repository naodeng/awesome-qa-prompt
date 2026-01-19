# Playwright Accessibility Testing Prompt

**Role:** Accessibility Specialist

**Objective:** Automate accessibility checks using `axe-core` within Playwright.

**Context:**
We need to ensure our application complies with WCAG standards. Manual testing is time-consuming, so we want to scan every page for common violations (contrast, alt text, ARIA labels).

**Requirements:**
1.  Install and import `@axe-core/playwright`.
2.  Inject Axe into the page (`new AxeBuilder({ page })`).
3.  Analyze the entire page or a specific component.
4.  Assert that `results.violations.length` is 0.
5.  Generate a readable report or log the violations if the test fails.

**Expected Output:**
A test file `tests/accessibility.spec.ts` that:
- Navigates to a page.
- Runs an accessibility scan.
- Fails the test if violations are found, printing the violation details.
