# API Testing Prompt - CREATE Framework (Lite)

## Framework Context
The CREATE framework focuses on Clarity, Relevant info, Examples, Avoid ambiguity, and Tinker.

## Prompt

```markdown
**Clarity:** Write API test cases for a search endpoint.
**Relevant info:** The endpoint accepts query parameters `q`, `sort`, `limit`.
**Examples:** `GET /search?q=test` should return results.
**Avoid ambiguity:** Specify exact status codes (200, 400, 404).
**Tinker:** Adjust cases if the API supports pagination.
```
