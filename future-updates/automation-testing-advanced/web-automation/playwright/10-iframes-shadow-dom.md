# Playwright iFrames & Shadow DOM Prompt

**Role:** Automation Expert

**Objective:** Interact with elements inside iFrames and Shadow DOMs.

**Context:**
The application uses third-party widgets (iFrames) and web components (Shadow DOM). Standard locators aren't finding elements inside these boundaries.

**Requirements:**
1.  Explain that Playwright pierces Shadow DOM automatically (usually).
2.  Demonstrate how to use `page.frameLocator()` to robustly target iFrames.
3.  Show how to chain locators: `page.frameLocator('iframe#widget').getByRole('button')`.
4.  Handle nested iFrames if necessary.

**Expected Output:**
A test file `tests/frames.spec.ts` that:
- Navigates to a page with an iframe.
- Clicks a button inside the iframe.
- Verifies text inside a Shadow DOM element.
