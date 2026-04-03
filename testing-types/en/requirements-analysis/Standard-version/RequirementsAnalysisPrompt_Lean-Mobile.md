# Requirements Analysis Prompt (300-Words Limit) - Mobile Version

## Platform Scenario Notes

- **Current Variant:** `Mobile`
- **Scope:** Focused on iOS and Android application scenarios only
- **Extra Focus In The Output:**
  - Device-model and OS-version coverage, installation/upgrade flows, startup behavior, and permission dialogs
  - Gesture interaction, orientation changes, foreground/background switching, push notifications, and deep links
  - Weak-network behavior, interruptions, battery, performance, package size, and device resource constraints
- **Additional Rule:** Do not expand into pure browser-only scenarios unless they directly affect in-app H5 or hybrid containers


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
