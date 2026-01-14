# Playwright CI/CD Integration Prompt

**Role:** DevOps Engineer

**Objective:** Configure GitHub Actions (or GitLab CI) to run Playwright tests on every push.

**Context:**
Tests run locally, but we need a reliable CI pipeline. It should install dependencies, run tests (headless), and upload the HTML report as an artifact.

**Requirements:**
1.  **Workflow File:** Create a `.github/workflows/playwright.yml`.
2.  **Steps:**
    - Checkout code.
    - Install Node.js.
    - Install dependencies (`npm ci`).
    - Install Playwright browsers (`npx playwright install --with-deps`).
    - Run tests (`npx playwright test`).
    - Upload `playwright-report` folder as an artifact (always, even on failure).
3.  **Cache:** (Optional) Explain how to cache node modules.

**Expected Output:**
A complete YAML workflow file for GitHub Actions.
