# Requirements Analysis

English | [简体中文](./README.md)

## Module Overview

The Requirements Analysis module provides professional test scenario design guidance, helping testing teams conduct in-depth analysis based on requirement documents, design comprehensive test scenarios, and ensure complete and effective test coverage.

## Core Features

### 📝 Comprehensive Test Design
- **Scenario Method:** Test design based on user usage scenarios
- **State Transition Diagram:** Complete coverage of system state transitions
- **Decision Table:** Combination testing for complex business logic
- **Boundary Value Analysis:** Precise testing of input boundaries

### 🎯 Multi-Path Coverage
- **Positive Path:** Test scenarios for normal business processes
- **Exception Path:** Abnormal situations and error handling
- **Boundary Scenarios:** Boundary values and critical conditions
- **Combination Scenarios:** Complex scenarios with multiple conditions

### 🔍 Non-Functional Testing
- **UI/UX Testing:** User interface and experience testing
- **Input Validation:** Data verification and security testing
- **Performance Considerations:** Performance-related test scenarios
- **Compatibility:** Cross-platform and cross-browser testing

## File Description

### Full Version Prompts
- **Chinese Version:** `RequirementsAnalysisPrompt.md`
- **English Version:** `RequirementsAnalysisPrompt_EN.md`
- **Role:** Senior Test Architect (10+ years experience)
- **Use Case:** Comprehensive requirements analysis for complex projects

### Lite Version Prompts
- **Chinese Version:** `RequirementsAnalysisPrompt_Lite.md`
- **English Version:** `RequirementsAnalysisPrompt_Lite_EN.md`
- **Features:** Quick start, focused on core points
- **Use Case:** Rapid requirements analysis and scenario design

## Usage Guide

### Quick Start

1. **Select Prompt File**
   - Full Version: In-depth requirements analysis and comprehensive test design
   - Lite Version: Quick scenario design and core test coverage

2. **Prepare Input Materials**
   ```
   Requirements Document: [Product Requirements Document or User Story]
   Business Context: [Project background and business objectives]
   Tech Stack: [Technologies and platforms used]
   Constraints: [Time, resource, and other constraints]
   ```

3. **Get Test Scenarios**
   - Complete test scenario list
   - Detailed test steps
   - Expected results and verification points
   - Priority and risk assessment

### Application Scenarios

#### 1. New Feature Test Design
```markdown
Input: New feature requirements document
Output: Complete test scenario matrix
Method: Scenario method + Boundary value analysis
Expected: 100% requirements coverage
```

#### 2. Complex Business Logic Testing
```markdown
Input: Business rules and flowcharts
Output: Decision tables and state transition diagrams
Method: Decision table method + State transition testing
Expected: All combination scenarios covered
```

#### 3. User Experience Test Design
```markdown
Input: User stories and interaction design
Output: User journey test scenarios
Method: Scenario method + Exploratory testing
Expected: Key user path coverage
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

### Test Scenario Format
```markdown
Scenario ID: TC-REQ-001
Scenario Name: User Login - Normal Flow
Priority: P0
Preconditions: User registered and account status is normal
Test Steps:
  1. Open login page
  2. Enter correct username and password
  3. Click login button
Expected Results:
  - Login successful
  - Redirect to homepage
  - Display user information
Test Data: 
  - Username: test@example.com
  - Password: Test@123
```

## Related Modules

- **[Test Case Writing](../TestCaseWriting/README_EN.md)** - Write detailed test cases based on test scenarios
- **[Functional Testing](../FunctionalTesting/README_EN.md)** - Execute functional testing
- **[Test Strategy](../TestStrategy/README_EN.md)** - Develop overall test strategy

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
