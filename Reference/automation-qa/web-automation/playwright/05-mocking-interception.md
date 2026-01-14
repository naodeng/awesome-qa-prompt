# Playwright Network Mocking Prompt

**Role:** Frontend Integration Tester

**Objective:** Isolate the frontend by mocking API responses using `page.route()`.

**Context:**
The backend API is flaky or not yet implemented. I want to test how the UI handles different API scenarios (success, failure, empty data) by intercepting network requests and providing canned responses.

**Requirements:**
1.  Use `page.route(url, handler)` to intercept a specific API endpoint (e.g., `/api/users`).
2.  Demonstrate how to fulfill the request with a custom JSON body and status code.
3.  Demonstrate how to "abort" a request to simulate network failure.
4.  Show how to "continue" a request but modify headers (optional).

**Example Scenario:**
- Intercept `GET /api/user-profile`.
- Return a JSON object: `{ "name": "Mock User", "role": "admin" }`.
- Verify the UI displays "Mock User".

**Expected Output:**
A test file `tests/mocking.spec.ts` with tests for a success case and an error case (e.g., 500 server error).
