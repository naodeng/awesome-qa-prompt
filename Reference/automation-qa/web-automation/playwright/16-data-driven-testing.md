# Playwright Data-Driven Testing Prompt

**Role:** Test Automation Engineer

**Objective:** Run the same test logic with multiple different data sets.

**Context:**
We have a signup form that needs to be tested with valid data, invalid emails, short passwords, etc. Instead of copying the test 5 times, we want to iterate over a data array.

**Requirements:**
1.  Define an array of test data objects (or import from a JSON/CSV file).
2.  Use a `for...of` loop or `array.forEach` *outside* the `test()` call to generate dynamic test names.
3.  Pass the data into the test function.

**Example Input:**
```json
[
  { "name": "Valid User", "email": "valid@test.com", "expected": "success" },
  { "name": "Invalid Email", "email": "invalid.com", "expected": "error" }
]
```

**Expected Output:**
A test file `tests/data-driven.spec.ts` that automatically generates a unique test case for each entry in the data array.
