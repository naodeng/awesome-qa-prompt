# Playwright Debugging Tools Prompt

**Role:** Troubleshooting Expert

**Objective:** Master the usage of Playwright's specific debugging tools (Trace Viewer, UI Mode, Inspector).

**Context:**
A test is failing only in CI or sporadically. Console logs aren't enough. We need to "time travel" to see what happened.

**Requirements:**
1.  **Trace Viewer:** Configure `trace: 'on-first-retry'` or `'retain-on-failure'` in config. Explain how to open a `.zip` trace.
2.  **UI Mode:** command `npx playwright test --ui`. Explain the benefits (watch mode, locator picker, timeline).
3.  **Inspector:** command `npx playwright test --debug`.
4.  **VS Code Extension:** Briefly mention debugging directly in the editor.

**Expected Output:**
A guide explaining when to use each tool and snippets for enabling traces in `playwright.config.ts`.
