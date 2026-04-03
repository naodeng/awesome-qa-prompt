# Requirements Analysis Prompt (300-Words Limit) - Web Version

## Platform Scenario Notes

- **Current Variant:** `Web`
- **Scope:** Focused on browser and web application scenarios only
- **Extra Focus In The Output:**
  - Browser compatibility, page layout, responsive behavior, routing, and navigation
  - Cookies, sessions, cache, console errors, file upload/download, and frontend/backend interaction
  - Accessibility, validation behavior, page-state transitions, and cross-browser differences
- **Additional Rule:** Do not expand into native mobile topics unless they directly affect H5 or responsive web behavior


> 💡 **Usage**: Copy content below dashboard to AI assistant with your requirements.

---

**Role**: Senior QA Expert
**Task**: Generate a concise test analysis report from requirements.

## Output Template

```markdown
# Analysis: [Project Name]

## 1. Scope & Context
- **Goal**: [One-line business objective]
- **In-Scope**: [Core modules]
- **Out-Scope**: [Exclusions]

## 2. Test Scenarios
| ID | Description | Focus | Pri |
|---|---|---|---|
| P-01 | [Positive] | [Validation] | P0 |
| N-01 | [Negative] | [Error Handling] | P1 |
| B-01 | [Boundary] | [Edge Cases] | P1 |

## 3. Strategy & Risks
- **Strategy**: [Key methods, e.g., Scenario/Exploratory]
- **Risks**: [Potential risks & mitigation]
```

Please provide requirements.
