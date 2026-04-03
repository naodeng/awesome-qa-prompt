# Test Strategy

English | [简体中文](./README.md)

## Module Overview

The Test Strategy module provides comprehensive test strategy planning guidance, helping testing teams develop effective test strategies aligned with project goals, risks, and constraints to ensure optimal test coverage and resource utilization.

## Core Features

### 🎯 Strategic Planning
- **Test Approach:** Overall testing methodology and approach
- **Scope Definition:** What to test and what not to test
- **Resource Planning:** Team, tools, and infrastructure requirements
- **Risk Assessment:** Identify and prioritize testing risks

### 📋 Test Planning Elements
- **Test Levels:** Unit, integration, system, acceptance testing
- **Test Types:** Functional, performance, security, usability testing
- **Entry/Exit Criteria:** When to start and stop testing
- **Test Environment:** Infrastructure and configuration requirements

### 🔍 Quality Objectives
- **Coverage Goals:** Requirements, code, and risk coverage targets
- **Quality Metrics:** KPIs and success criteria
- **Defect Management:** Defect tracking and resolution process
- **Continuous Improvement:** Lessons learned and process optimization

### 🌐 Agile and DevOps
- **Shift-Left Testing:** Early testing in development lifecycle
- **Continuous Testing:** Testing in CI/CD pipeline
- **Test Automation:** Automation strategy and framework
- **Collaboration:** Cross-functional team collaboration

## File Description

## Version Selection Guide

- `Standard-version/`: the default recommendation for most real-world use cases
- `*_Lite.md`: use when the input is limited or you want a faster output
- `*_Lean.md`: use only when a module provides a Lean variant and you want a more restrained result
- `CRISPE/RISE/ICIO/ROSES/LangGPT`: use only when you explicitly want that prompting framework


### Chinese Prompts
- **File:** `Standard-version/TestStrategyPrompt.md`
- **Role:** Senior Test Architect (10+ years experience)
- **Use Case:** Chinese project teams, test strategy planning

### English Prompts
- **File:** `Standard-version/TestStrategyPrompt_EN.md`
- **Role:** Senior Test Architect
- **Use Case:** International teams, English project environments

### Lite Version Prompts
- **File:** `Standard-version/TestStrategyPrompt_Lite.md` / `Standard-version/TestStrategyPrompt_Lite_EN.md`
- **Features:** Quick start, focused on core strategy elements
- **Use Case:** Quick test strategy planning and basic approach

## Usage Guide

### Quick Start

1. **Select Prompt File**
   - Full Version: Comprehensive test strategy development
   - Lite Version: Quick test strategy planning

2. **Prepare Input Materials**
   ```
   Project Info: [Project scope, timeline, and objectives]
   Requirements: [Functional and non-functional requirements]
   Constraints: [Budget, resources, and timeline constraints]
   Risks: [Known risks and concerns]
   ```

3. **Get Test Strategy Document**
   - Complete test strategy framework
   - Risk-based test approach
   - Resource and timeline planning
   - Quality metrics and KPIs

## Related Modules

- **[Requirements Analysis](../requirements-analysis/README_EN.md)** - Requirements-based strategy
- **[Test Reporting](../test-reporting/README_EN.md)** - Strategy execution reporting
- **[Automation Testing](../automation-testing/README_EN.md)** - Automation strategy

## Learning Resources

### Recommended Books
- "Agile Testing"
- "Software Test Design"
- "Test Strategy and Planning"

### Online Resources
- [ISTQB Test Management](https://www.istqb.org/)
- [Ministry of Testing](https://www.ministryoftesting.com/)
- [Software Testing Help](https://www.softwaretestinghelp.com/)

## Contribution Guide

Welcome to contribute to the Test Strategy module:

1. **Share Strategies:** Share successful test strategies
2. **Best Practices:** Share test planning best practices
3. **Templates:** Provide test strategy templates
4. **Case Studies:** Share real-world strategy examples

## License

This module follows the MIT License. See the [LICENSE](../LICENSE) file in the project root directory for details.

---

**Plan strategically, test effectively!** 🎯✨


## Platform Scenario Variants

- `*-all_round.md`: covers both Web and mobile, suitable when one prompt needs to plan testing across both platforms
- `*-Web.md`: focuses on browser and web application scenarios, including compatibility, page interaction, cache/session, and upload/download flows
- `*-Mobile.md`: focuses on iOS / Android app scenarios, including device and OS differences, install/upgrade flows, permission dialogs, app lifecycle, and weak-network interruptions
- If your task does not need platform separation, keep using the original general prompt files

