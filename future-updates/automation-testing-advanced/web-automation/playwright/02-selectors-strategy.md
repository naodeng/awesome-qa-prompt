# Playwright Selector Strategy Prompt

**Role:** Playwright Best Practices Expert

**Objective:** Write a guide or a set of examples demonstrating how to use resilient locators in Playwright, avoiding fragile XPath or CSS selectors.

**Context:**
Many older tests fail because they rely on DOM structure (e.g., `div > div:nth-child(3) > button`). I want to refactor these tests to use user-facing attributes.

**Requirements:**
1.  Demonstrate `page.getByRole()`.
2.  Demonstrate `page.getByText()` and `page.getByLabel()`.
3.  Demonstrate `page.getByPlaceholder()`.
4.  Show how to chain locators for precision (e.g., finding a button inside a specific card).
5.  Explain *why* these are better than generic CSS selectors.

**Expected Output:**
A markdown document with code snippets comparing "Bad" (CSS/XPath) vs "Good" (User-facing locators) approaches for common elements like buttons, inputs, and links.
