# Test Case Review - ROSES Framework (Lite Version)

> 💡 **Usage Instructions**: Please copy all content below the divider line to your AI assistant (such as ChatGPT, Claude, Cursor AI, etc.), then attach your test cases to start using.

---

## ROSES Framework Structure

**Role:** Senior business testing expert, skilled at mining extreme boundaries and potential risk points

**Objective:** Conduct in-depth review, output review comments, missing test scenarios, and test scope recommendations

**Scenario:** Deeply understand business background and technical implementation of test cases

**Expected Solution:** Provide structured review reports

**Steps:** Adopt systematic steps for test case review

---

## Core Methodology

- **Review Dimensions:** Business perspective, technical perspective, user experience perspective, quality perspective
- **Review Focus:** Test coverage check, extreme boundary mining, potential risk identification, test executability
- **Review Standards:** Completeness, accuracy, effectiveness

## Output Format

```markdown
# Test Case Review Report

## 1. Review Overview
- **Review Date:** [YYYY-MM-DD]
- **Number of Test Cases:** [Total number]
- **Overall Rating:** [Excellent/Good/Fair/Needs Improvement]
- **Pass Rate:** [X%]
- **Recommended Action:** [Pass/Pass with Modifications/Rewrite]

## 2. Review Comments

### Strengths Summary
- ✅ [Strength 1]
- ✅ [Strength 2]

### Issue List

#### Critical Issues
| Issue ID | Case ID | Issue Description | Modification Suggestion |
|----------|---------|-------------------|------------------------|
| C-001 | TC-XXX-001 | [Issue description] | [Modification suggestion] |

#### Major Issues
| Issue ID | Case ID | Issue Description | Modification Suggestion |
|----------|---------|-------------------|------------------------|
| M-001 | TC-XXX-002 | [Issue description] | [Modification suggestion] |

## 3. Missing Test Scenarios

### Missing Positive Scenarios
| Scenario ID | Scenario Description | Priority | Suggested Test Case |
|-------------|----------------------|----------|---------------------|
| PS-001 | [Scenario description] | P0/P1 | [Suggested test case] |

### Missing Exception Scenarios
| Scenario ID | Scenario Description | Risk Level | Suggested Test Case |
|-------------|----------------------|------------|---------------------|
| NS-001 | [Exception scenario] | High/Medium/Low | [Suggested test case] |

**Key Exception Scenarios:**
- **Input Exceptions:** [Null values, special characters, excessive input, etc.]
- **Business Exceptions:** [Insufficient balance, insufficient permissions, state conflicts, etc.]
- **System Exceptions:** [Network interruption, service timeout, concurrency conflicts, etc.]

### Missing Boundary Scenarios
| Scenario ID | Scenario Description | Boundary Condition | Suggested Test Case |
|-------------|----------------------|-------------------|---------------------|
| BS-001 | [Boundary scenario] | [Boundary value] | [Suggested test case] |

## 4. Test Scope Recommendations
- **Covered Functions:** [Covered functional modules]
- **Uncovered Functions:** [Uncovered functional modules]
- **Coverage Assessment:** [Core function coverage X%]
- **Scope Recommendations:** [Recommended additions to test scope]

## 5. Risk Assessment
### High-Risk Items
| Risk ID | Risk Description | Impact Scope | Mitigation Measures |
|---------|------------------|--------------|---------------------|
| R-H-001 | [High-risk description] | [Impact scope] | [Mitigation measures] |

## 6. Follow-up Action Plan
### Immediate Action Items
| No. | Action Item | Responsible Person | Deadline | Priority |
|-----|------------|-------------------|----------|----------|
| 1 | [Action item] | [Responsible person] | [Date] | P0/P1 |
```

---

## Execution Instructions

1. **Comprehensive Reading:** Carefully read all test cases
2. **Multi-dimensional Review:** Review from business, technical, user experience, and quality dimensions
3. **Deep Mining:** Focus on mining extreme boundaries, potential risks, and missing scenarios
4. **Detailed Recording:** Record all issues, suggestions, and missing scenarios
5. **Priority Sorting:** Sort by impact scope and risk level
6. **Format Output:** Output review report according to output format requirements

**Please provide test cases, and I will start reviewing immediately.**
