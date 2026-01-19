# Playwright Parallel Execution & Sharding Prompt

**Role:** DevOps / QA Engineer

**Objective:** Configure Playwright to run tests in parallel and set up sharding for CI/CD.

**Context:**
Our test suite takes too long to run sequentially. We need to speed it up by running tests concurrently on a single machine and, eventually, distributing them across multiple CI machines (sharding).

**Requirements:**
1.  Explain how Playwright runs files in parallel by default.
2.  Explain how to control parallelism using `workers` in `playwright.config.ts`.
3.  Show how to run specific tests within a file in parallel (`test.describe.configure({ mode: 'parallel' })`).
4.  Provide a command for running a specific shard (e.g., `npx playwright test --shard=1/4`).
5.  Explain the importance of test isolation (no shared state) for parallel execution.

**Expected Output:**
A text explanation and a `playwright.config.ts` snippet showing:
- Worker configuration.
- Sharding configuration example (commented out or via env vars).
