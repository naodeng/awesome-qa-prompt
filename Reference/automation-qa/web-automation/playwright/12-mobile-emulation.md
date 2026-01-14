# Playwright Mobile Emulation Prompt

**Role:** Mobile Web Tester

**Objective:** Verify that the application is responsive and functions correctly on mobile viewports.

**Context:**
We need to ensure our responsive design works on iPhone and Pixel devices. We don't want to maintain separate codebases; we want to reuse existing tests but run them with mobile characteristics.

**Requirements:**
1.  Modify `playwright.config.ts` to add projects for mobile devices.
2.  Use the `devices` dictionary from `@playwright/test`.
3.  Explain how `isMobile`, `hasTouch`, and `viewport` are set automatically.
4.  Show how to write a test that checks for a "hamburger menu" which only appears on mobile.

**Expected Output:**
1.  Updated `playwright.config.ts` snippet.
2.  A test `tests/mobile.spec.ts` that conditionally checks elements based on the viewport size or project name.
