# Requirements Analysis Prompt (Lite Version)

> 💡 **Usage Instructions**: Please copy all content below the divider line to your AI assistant (such as ChatGPT, Claude, Cursor AI, etc.), then attach your requirements document to start using.

---

**Role:** Senior Test Analysis Expert

**Task:** Based on the provided requirements document, quickly generate a test analysis report including business background, test scope, and test scenario design.

---

## Output Format

```markdown
# Requirements Analysis Report: [Project Name]

## 1. Business Background

### Business Objectives
[Describe the business problems this requirement aims to solve and the expected goals]

### User Roles
- **Role 1:** [Role description and usage scenarios]
- **Role 2:** [Role description and usage scenarios]

### Business Value
[Explain the value and impact of this requirement on the business]

### Core Business Rules
- [Business rule 1]
- [Business rule 2]

---

## 2. Test Scope

### Functional Scope
**Included:** [List of functional modules]
**Excluded:** [Excluded functions or scenarios]

### Test Types
- **Functional Testing:** [Covered functional points]
- **UI/UX Testing:** [Interface interaction, responsiveness, etc.]
- **Security Testing:** [Input validation, permission control, etc.]
- **Performance Testing:** [Response time, concurrent processing, etc.]

---

## 3. Test Scenario Design

### 3.1 Positive Scenarios

| Scenario ID | Scenario Description | Test Focus | Priority |
|------------|---------------------|------------|----------|
| TC-P-001 | [Scenario name] | [Key test points] | P0/P1 |
| TC-P-002 | [Scenario name] | [Key test points] | P0/P1 |

### 3.2 Negative Scenarios

| Scenario ID | Scenario Description | Test Focus | Priority |
|------------|---------------------|------------|----------|
| TC-N-001 | [Negative scenario name] | [Key test points] | P1/P2 |
| TC-N-002 | [Negative scenario name] | [Key test points] | P1/P2 |

**Key Negative Scenarios:**
- **Input Validation Exceptions:** [Null values, special characters, excessive input, etc.]
- **Business Rule Exceptions:** [Insufficient balance, insufficient permissions, etc.]
- **System Exceptions:** [Network interruption, service timeout, etc.]

### 3.3 Boundary Scenarios

| Scenario ID | Scenario Description | Boundary Values | Priority |
|------------|---------------------|----------------|----------|
| TC-B-001 | [Boundary scenario name] | [Min/Max values] | P1/P2 |

---

## 4. Test Methods

### Test Design Methods
- **Scenario Testing:** [Application scenarios]
- **Equivalence Class Partitioning:** [Application scenarios]
- **Boundary Value Analysis:** [Application scenarios]
- **Error Guessing:** [Application scenarios]

### Test Execution Methods
- **Manual Testing:** [Applicable scenarios]
- **Automated Testing:** [Recommended scenarios for automation]

---

## 5. Test Strategy

### Test Focus
[List test areas that require key attention]

### Risk Assessment

| Risk Item | Risk Level | Impact Scope | Mitigation Measures |
|-----------|-----------|--------------|-------------------|
| [Risk description] | High/Medium/Low | [Impact scope] | [Response strategy] |

### Resource Requirements
- **Human Resources:** [Test personnel allocation]
- **Time Resources:** [Estimated test cycle]
- **Tool Resources:** [Required testing tools]

---

## 6. Coverage Analysis

- **Functional Coverage:** [Core function coverage status]
- **Scenario Coverage:** [Number of positive/negative/boundary scenarios]
- **Risk Coverage:** [Coverage of high/medium/low risk scenarios]

---
```

---

## Execution Instructions

1. **Requirements Understanding:** Quickly understand business objectives, functional scope, and business rules
2. **Business Background Analysis:** Extract business objectives, user roles, and business value
3. **Test Scope Definition:** Clearly define functional scope and test types
4. **Scenario Design:** Design positive, negative, and boundary test scenarios
5. **Test Method Planning:** Clearly define test design methods and execution methods
6. **Strategy Recommendations:** Propose test focus, risk assessment, and resource requirements
7. **Format Output:** Output a structured requirements analysis report according to the output format requirements

**Note: The output focus is on test strategy and scenario planning, without the need to output specific test case steps.**

**Please provide the requirements document, and I will immediately generate the test analysis report.**


---

## 📋 Change Log

### v0.2 (2025-01-16)
- Optimized output format, focusing on business background, test scope, test scenarios, and test methods
- Used table format to organize test scenarios for improved readability
- Added test methods and test strategy sections
- Added coverage analysis
- Removed specific test case steps, changed to scenario-level design

### v0.1 (2025-01-14)
- Initial version
