# Playwright Global Setup & Teardown Prompt

**Role:** Test Environment Manager

**Objective:** Execute scripts once before *all* tests start and once after *all* tests finish.

**Context:**
We need to spin up a local database or server before running the suite and tear it down afterwards. Or, we need to create a test user via API that all tests will use.

**Requirements:**
1.  Create `global-setup.ts` and `global-teardown.ts`.
2.  Register them in `playwright.config.ts`.
3.  Explain how to pass data from global setup to tests (e.g., using environment variables).
4.  Caveat: Explain that global setup runs only once, not per worker.

**Expected Output:**
1.  `global-setup.ts` (e.g., setting a `process.env.BASE_URL`).
2.  `playwright.config.ts` configuration snippet.
