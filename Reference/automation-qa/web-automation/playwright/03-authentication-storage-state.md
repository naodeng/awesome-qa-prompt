# Playwright Authentication & Storage State Prompt

**Role:** Test Architecture Architect

**Objective:** Implement a "login once, run everywhere" strategy using Playwright's `storageState`.

**Context:**
Logging in before every single test is slow and redundant. I want to perform the login step in a global setup phase, save the session cookies/local storage to a JSON file, and have all other tests reuse this state.

**Requirements:**
1.  Create a setup script `tests/auth.setup.ts` that performs the actual login.
2.  Save the state to `playwright/.auth/user.json`.
3.  Configure `playwright.config.ts` to use this project dependency.
4.  Show an example test that assumes the user is already logged in.

**Expected Output:**
Three files:
1.  `tests/auth.setup.ts`
2.  Snippet for `playwright.config.ts`
3.  `tests/dashboard.spec.ts` (consuming the state)
