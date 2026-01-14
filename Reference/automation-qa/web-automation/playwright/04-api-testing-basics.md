# Playwright API Testing Prompt

**Role:** API Automation Engineer

**Objective:** Use Playwright as an API client to test REST endpoints directly, bypassing the UI.

**Context:**
We need to verify backend logic without the overhead of a browser. We also want to set up test data (seed data) using API calls before running UI tests.

**Requirements:**
1.  Use `request.newContext()` or the `request` fixture in a test.
2.  Perform GET, POST, PUT, and DELETE requests.
3.  Assert status codes (e.g., 200, 201, 404) and JSON response bodies.
4.  Show how to extract data (like an ID) from a response to use in subsequent requests.

**Expected Output:**
A TypeScript test file `tests/api.spec.ts` demonstrating a CRUD flow for a resource (e.g., creating a "Todo" item, retrieving it, updating it, and deleting it).
