# Requirements Analysis

English | [简体中文](./README.md)

## Module Overview

The Requirements Analysis module provides professional test analysis guidance, helping testing teams conduct in-depth analysis based on requirement documents, output business background, test scope, and test scenario design, providing comprehensive guidance for subsequent test case writing and test execution.

## Core Features

### 📋 Business Background Analysis
- **Business Objectives:** Clarify the business problems the requirement aims to solve
- **User Roles:** Identify all relevant user roles
- **Business Value:** Assess the business value of the requirement
- **Business Rules:** Organize key business rules and constraints

### 🎯 Test Scope Definition
- **Functional Scope:** Clearly define included and excluded functional modules
- **Test Types:** Cover functional, UI, security, performance, compatibility
- **Environment Requirements:** Define test environment configuration
- **Data Requirements:** Specify test data preparation requirements

### 🔍 Test Scenario Design
- **Positive Scenarios:** Test scenarios for core business processes
- **Negative Scenarios:** Exception handling, boundary conditions, error handling
- **Boundary Scenarios:** Boundary value and critical condition testing
- **Security Scenarios:** Security vulnerability and permission control testing
- **Performance Scenarios:** Response time and concurrent processing testing
- **Compatibility Scenarios:** Browser, device, operating system compatibility

### 🛠️ Test Method Planning
- **Design Methods:** Scenario testing, equivalence partitioning, boundary value analysis, decision tables, etc.
- **Execution Methods:** Manual testing, automated testing, API testing, performance testing
- **Tool Recommendations:** Recommend appropriate testing tools based on test types

### 📊 Test Strategy Recommendations
- **Test Focus:** Identify test areas requiring key attention
- **Risk Assessment:** Assess potential risks and impacts
- **Resource Requirements:** Estimate human, time, and tool resources
- **Coverage Analysis:** Analyze functional, scenario, and risk coverage

## File Description

### Full Version Prompts
- **Chinese Version:** `RequirementsAnalysisPrompt.md` (v0.3)
- **English Version:** `RequirementsAnalysisPrompt_EN.md` (v0.3)
- **Role:** Senior Web Full-Stack Testing Expert (10+ years experience)
- **Output Content:**
  - Business background analysis
  - Test scope definition
  - Test scenario design (table format)
  - Test method planning
  - Test strategy recommendations
  - Test coverage analysis
- **Use Case:** Comprehensive requirements analysis and test planning for complex projects

### Lite Version Prompts
- **Chinese Version:** `RequirementsAnalysisPrompt_Lite.md` (v0.2)
- **English Version:** `RequirementsAnalysisPrompt_Lite_EN.md` (v0.2)
- **Features:** Quick start, focused on core points, concise output
- **Output Content:**
  - Business background (simplified)
  - Test scope (simplified)
  - Test scenario design (table format)
  - Test methods (simplified)
  - Test strategy (simplified)
  - Coverage analysis (simplified)
- **Use Case:** Rapid requirements analysis and test scenario planning

### Version Update Notes
- **v0.3 (2025-01-16):** Added test methods section, optimized output format
- **v0.2 (2025-01-16):** Focused on business background, test scope, test scenarios, removed specific test case steps
- **v0.1 (2025-01-14):** Initial version

## Usage Guide

### Quick Start

1. **Select Prompt File**
   - **Full Version:** In-depth requirements analysis, comprehensive test planning, detailed method guidance
   - **Lite Version:** Quick scenario design, core test coverage, concise output

2. **Prepare Input Materials**
   ```
   Requirements Document: [Product Requirements Document or User Story]
   Business Context: [Project background and business objectives]
   Tech Stack: [Technologies and platforms used]
   Constraints: [Time, resource, and other constraints]
   ```

3. **Get Analysis Report**
   - Business background analysis
   - Test scope definition
   - Test scenario design (table format)
   - Test method planning
   - Test strategy recommendations
   - Test coverage analysis

### Output Characteristics

**Note:** The output focuses on test strategy and scenario planning, without specific test case steps. This design:
- Focuses more on the analysis and planning phase
- Provides guidance for subsequent test case writing
- Avoids getting into execution details too early
- Facilitates team discussion and review

### Application Scenarios

#### 1. New Feature Requirements Analysis
```markdown
Input: New feature requirements document
Output: Business background + Test scope + Test scenario design
Method: Scenario testing + Boundary value analysis
Expected: Comprehensive test planning and scenario coverage
```

#### 2. Complex Business Logic Analysis
```markdown
Input: Business rules and flowcharts
Output: Business rules organization + Decision table scenarios + State transition scenarios
Method: Decision table method + State transition testing
Expected: All combination scenarios and state transition coverage
```

#### 3. Test Strategy Development
```markdown
Input: Project requirements and constraints
Output: Test strategy + Risk assessment + Resource planning
Method: Risk analysis + Resource assessment
Expected: Complete test strategy and execution plan
```

#### 4. Test Review Preparation
```markdown
Input: Requirements document and business rules
Output: Structured requirements analysis report
Method: Comprehensive test analysis methods
Expected: Analysis report suitable for team review and discussion
```

## Test Design Methods

### Scenario Testing
- **User Scenarios:** Based on real user usage scenarios
- **Business Scenarios:** Core business process scenarios
- **Exception Scenarios:** Error and exception handling scenarios
- **Boundary Scenarios:** Critical values and boundary conditions

### State Transition
- **State Identification:** Identify all system states
- **Transition Conditions:** Define state transition conditions
- **Path Coverage:** Cover all transition paths
- **Exception States:** Handle illegal state transitions

### Decision Table
- **Condition Identification:** List all decision conditions
- **Combination Analysis:** Analyze condition combinations
- **Rule Definition:** Define business rules
- **Test Cases:** Generate test cases

### Boundary Value Analysis
- **Boundary Identification:** Identify input boundaries
- **Equivalence Partitioning:** Valid and invalid equivalence classes
- **Boundary Testing:** Boundary value and critical value testing
- **Combination Testing:** Multi-variable boundary combinations

## Best Practices

### 1. Requirements Understanding
- **Deep Understanding:** Fully understand business and user requirements
- **Clarify Doubts:** Communicate with product managers promptly
- **Documentation:** Record requirements understanding and assumptions
- **Review Confirmation:** Review requirements understanding with team

### 2. Scenario Design
- **User Perspective:** Design scenarios from user perspective
- **Completeness:** Ensure complete scenario coverage
- **Prioritization:** Sort by risk and importance
- **Traceability:** Scenarios traceable to requirements

### 3. Test Coverage
- **Functional Coverage:** All functional points covered
- **Path Coverage:** Main business paths covered
- **Data Coverage:** Various data types covered
- **Environment Coverage:** Different environments and configurations

### 4. Continuous Optimization
- **Feedback Collection:** Collect test execution feedback
- **Scenario Optimization:** Continuously optimize test scenarios
- **Knowledge Accumulation:** Accumulate test design experience
- **Template Reuse:** Establish scenario design templates

## Output Example

### Requirements Analysis Report Structure
```markdown
# Requirements Analysis Report

## 1. Business Background
- Business Objectives: [Business problems to solve]
- User Roles: [Relevant user roles]
- Business Value: [Business value of the requirement]
- Business Rules: [Key business rules]

## 2. Test Scope
- Functional Scope: [Included/Excluded functions]
- Test Types: [Functional/UI/Security/Performance/Compatibility]
- Test Environment: [Environment configuration requirements]
- Test Data: [Data preparation requirements]

## 3. Test Scenario Design
### Positive Scenarios
| Scenario ID | Scenario Description | Test Focus | Priority | Design Method |
|------------|---------------------|------------|----------|---------------|
| TC-P-001 | User Login - Normal Flow | Login success verification | P0 | Scenario Testing |

### Negative Scenarios
| Scenario ID | Scenario Description | Test Focus | Priority | Design Method |
|------------|---------------------|------------|----------|---------------|
| TC-N-001 | User Login - Wrong Password | Error message verification | P1 | Error Guessing |

## 4. Test Methods
- Test Design Methods: [Scenario testing, equivalence partitioning, boundary value analysis, etc.]
- Test Execution Methods: [Manual, automated, API, performance]
- Test Tool Recommendations: [Recommended testing tools]

## 5. Test Strategy Recommendations
- Test Focus: [Key test areas to focus on]
- Risk Assessment: [Potential risks and mitigation measures]
- Resource Requirements: [Human, time, tool resources]

## 6. Test Coverage Analysis
- Functional Coverage: [Core function coverage status]
- Scenario Coverage: [Number of positive/negative/boundary scenarios]
- Risk Coverage: [High/medium/low risk scenario coverage]
```

## Related Modules

- **[Test Case Writing](../testing-types/test-case-writing/README_EN.md)** - Write detailed test cases based on test scenarios
- **[Functional Testing](../testing-types/functional-testing/README_EN.md)** - Execute functional testing
- **[Test Strategy](../testing-types/test-strategy/README_EN.md)** - Develop overall test strategy

## Learning Resources

### Recommended Books
- "The Art of Software Testing"
- "How Google Tests Software"
- "Explore It!: Reduce Risk and Increase Confidence with Exploratory Testing"

### Online Resources
- [ISTQB Test Design Techniques](https://www.istqb.org/)
- [Software Testing Help](https://www.softwaretestinghelp.com/)
- [Ministry of Testing](https://www.ministryoftesting.com/)

## Contribution Guide

Welcome to contribute to the Requirements Analysis module:

1. **Share Cases:** Share successful requirements analysis cases
2. **Improve Methods:** Supplement test design methods
3. **Optimize Templates:** Improve test scenario templates
4. **Provide Feedback:** Suggest improvements

## License

This module follows the MIT License. See the [LICENSE](../LICENSE) file in the project root directory for details.

---

**Make requirements analysis more professional and test design more efficient!** 📝✨
