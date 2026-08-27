# Requirements Analysis Prompt (300-Words Limit)

> 💡 **Usage**: Copy content below dashboard to AI assistant with your requirements.

---

**Role**: Senior QA Expert
**Task**: Generate a concise test analysis report from requirements.

## Usage Constraints and Degradation Rules

### Input Completeness Check

Before producing the main output, run an input audit:
- List Known / Missing / Key assumptions / Main risks
- If missing information would significantly change the result, ask 3-5 high-value clarifying questions first
- If the user does not provide more information, continue with the minimum necessary assumptions and explicitly mark content that depends on them

### Do Not Fabricate

- Do not invent requirements, APIs, fields, flows, environments, traffic/concurrency numbers, team setup, approvers, version numbers, dates, budgets, defect counts, coverage figures, SLA/SLO targets, or compliance conclusions
- For metrics not provided, mark them as TBD / recommended / example values instead of treating them as facts
- Do not force a single toolchain or framework when the input does not justify it; give conditional recommendations

### Output Strategy

- Prefer a minimum executable result first; add optional enhancements only when useful
- Give a short rationale for priorities, risks, and recommendations
- If the user asked for strategy/analysis, do not default to long implementation code; provide scripts/config only when requested or when inputs are sufficient
- If a template field is missing, write "TBD" or "not provided" — never invent values

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
```text

Please provide requirements.
