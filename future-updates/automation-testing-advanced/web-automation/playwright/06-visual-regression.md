# Playwright Visual Regression Prompt

**Role:** UI Quality Assurance

**Objective:** Implement visual testing to catch CSS regressions and layout shifts.

**Context:**
Functional tests pass, but sometimes the layout breaks (e.g., button overlapping text). I want to use pixel-diffing to ensure the UI looks exactly as expected.

**Requirements:**
1.  Use `await expect(page).toHaveScreenshot()`.
2.  Explain how to handle dynamic content (e.g., dates, random IDs) by masking them.
3.  Show how to take a screenshot of a full page vs. a specific element.
4.  Explain how to generate initial snapshots and update them later (`--update-snapshots`).

**Expected Output:**
A test file `tests/visual.spec.ts` that:
- Captures a snapshot of the landing page.
- Captures a snapshot of a specific component (e.g., a chart or card) while masking a timestamp element.
