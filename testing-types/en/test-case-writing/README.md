# Test Case Writing

English | [简体中文](./README.md)

## Module Overview

The Test Case Writing module provides professional test case design and writing guidance, helping testing teams create clear, complete, and maintainable test cases to ensure comprehensive test coverage and efficient test execution.

## Core Features

### 📝 Complete Test Case Structure
- **Test Case ID:** Unique identifier for traceability
- **Test Objective:** Clear purpose and scope
- **Preconditions:** Required setup and prerequisites
- **Test Steps:** Detailed step-by-step instructions
- **Expected Results:** Clear expected outcomes
- **Test Data:** Specific test data requirements

### 🎯 Design Techniques
- **Equivalence Partitioning:** Divide input into valid/invalid classes
- **Boundary Value Analysis:** Test at boundaries of input domains
- **Decision Table:** Test complex business logic combinations
- **State Transition:** Test state changes and transitions

### 🔍 Quality Standards
- **Clear and Concise:** Easy to understand and execute
- **Repeatable:** Consistent results on repeated execution
- **Independent:** Can be executed independently
- **Traceable:** Linked to requirements and defects

### 🌐 Test Case Types
- **Positive Test Cases:** Valid input and expected behavior
- **Negative Test Cases:** Invalid input and error handling
- **Boundary Test Cases:** Edge cases and limits
- **Integration Test Cases:** Component interaction testing

## File Description

## Version Selection Guide

- `Standard-version/`: the default recommendation for most real-world use cases
- `*_Lite.md`: use when the input is limited or you want a faster output
- `*_Lean.md`: use only when a module provides a Lean variant and you want a more restrained result
- `CRISPE/RISE/ICIO/ROSES/LangGPT`: use only when you explicitly want that prompting framework


### Chinese Prompts
- **File:** `Standard-version/TestCaseWritingPrompt.md`
- **Role:** Senior Test Case Designer (10+ years experience)
- **Use Case:** Chinese project teams, test case writing requirements

### English Prompts
- **File:** `Standard-version/TestCaseWritingPrompt_EN.md`
- **Role:** Senior Test Case Designer
- **Use Case:** International teams, English project environments

### Lite Version Prompts
- **File:** `Standard-version/TestCaseWritingPrompt_Lite.md` / `Standard-version/TestCaseWritingPrompt_Lite_EN.md`
- **Features:** Quick start, focused on core test case elements
- **Use Case:** Quick test case creation and basic documentation

## Usage Guide

### Quick Start

1. **Select Prompt File**
   - Full Version: Comprehensive test case design and writing
   - Lite Version: Quick test case creation with essential elements

2. **Prepare Input Materials**
   ```
   Requirements: [Feature requirements and specifications]
   User Stories: [User stories and acceptance criteria]
   Design Documents: [Technical design and architecture]
   Test Scenarios: [High-level test scenarios]
   ```

3. **Get Professional Test Cases**
   - Well-structured test cases
   - Complete test coverage
   - Clear execution steps
   - Traceability to requirements

## Related Modules

- **[Requirements Analysis](../requirements-analysis/README_EN.md)** - Analyze requirements for test case design
- **[Functional Testing](../functional-testing/README_EN.md)** - Execute functional test cases
- **[Automation Testing](../automation-testing/README_EN.md)** - Automate test cases

## Learning Resources

### Recommended Books
- "Software Testing Techniques"
- "Effective Software Testing"
- "Test Case Design Best Practices"

### Online Resources
- [ISTQB Test Design Techniques](https://www.istqb.org/)
- [Software Testing Help](https://www.softwaretestinghelp.com/)
- [Ministry of Testing](https://www.ministryoftesting.com/)

## Contribution Guide

Welcome to contribute to the Test Case Writing module:

1. **Share Templates:** Share test case templates and formats
2. **Best Practices:** Share test case writing best practices
3. **Examples:** Provide excellent test case examples
4. **Tool Tips:** Share test case management tool tips

## License

This module follows the MIT License. See the [LICENSE](../LICENSE) file in the project root directory for details.

---

**Write better test cases, achieve better coverage!** 📝✨


## Platform Scenario Variants

- `*-all_round.md`: covers both Web and mobile, suitable when one prompt needs to plan testing across both platforms
- `*-Web.md`: focuses on browser and web application scenarios, including compatibility, page interaction, cache/session, and upload/download flows
- `*-Mobile.md`: focuses on iOS / Android app scenarios, including device and OS differences, install/upgrade flows, permission dialogs, app lifecycle, and weak-network interruptions
- If your task does not need platform separation, keep using the original general prompt files

