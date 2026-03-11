# Bug Reporting

English | [简体中文](./README.md)

## Module Overview

The Bug Reporting module provides professional defect reporting guidance, helping testing teams write clear, complete, and actionable bug reports to improve defect resolution efficiency and team collaboration.

## Core Features

### 🐛 Complete Bug Report Structure
- **Clear Title:** Concise and descriptive bug title
- **Detailed Description:** Complete bug reproduction steps
- **Expected vs Actual:** Clear expected and actual results
- **Evidence:** Screenshots, videos, and logs

### 🎯 Effective Communication
- **Severity Classification:** Critical, High, Medium, Low
- **Priority Setting:** P0, P1, P2, P3
- **Environment Details:** OS, browser, version information
- **Reproducibility:** Consistent, Intermittent, Random

### 🔍 Quality Standards
- **Reproducible:** Clear steps to reproduce
- **Specific:** Precise and unambiguous description
- **Isolated:** One issue per bug report
- **Actionable:** Provides enough information for developers

### 🌐 Tool Integration
- **Jira:** Popular bug tracking system
- **Azure DevOps:** Microsoft DevOps platform
- **GitHub Issues:** GitHub issue tracking
- **Bugzilla:** Open-source bug tracking

## File Description

## Version Selection Guide

- `Standard-version/`: the default recommendation for most real-world use cases
- `*_Lite.md`: use when the input is limited or you want a faster output
- `*_Lean.md`: use only when a module provides a Lean variant and you want a more restrained result
- `CRISPE/RISE/ICIO/ROSES/LangGPT`: use only when you explicitly want that prompting framework


### Chinese Prompts
- **File:** `Standard-version/BugReportingPrompt.md`
- **Role:** Senior QA Engineer (10+ years experience)
- **Use Case:** Chinese project teams, bug reporting standards

### English Prompts
- **File:** `Standard-version/BugReportingPrompt_EN.md`
- **Role:** Senior QA Engineer
- **Use Case:** International teams, English project environments

### Lite Version Prompts
- **File:** `Standard-version/BugReportingPrompt_Lite.md` / `Standard-version/BugReportingPrompt_Lite_EN.md`
- **Features:** Quick start, focused on core bug reporting elements
- **Use Case:** Quick bug reporting and basic documentation

## Usage Guide

### Quick Start

1. **Select Prompt File**
   - Full Version: Comprehensive bug reporting with all details
   - Lite Version: Quick bug reporting with essential information

2. **Prepare Bug Information**
   ```
   Bug Summary: [Brief description of the issue]
   Steps to Reproduce: [Detailed reproduction steps]
   Expected Result: [What should happen]
   Actual Result: [What actually happens]
   Environment: [OS, browser, version, etc.]
   ```

3. **Get Professional Bug Report**
   - Well-structured bug report
   - Appropriate severity and priority
   - Complete reproduction steps
   - Relevant attachments and evidence

## Related Modules

- **[Functional Testing](../functional-testing/README_EN.md)** - Functional bug identification
- **[Test Reporting](../test-reporting/README_EN.md)** - Bug metrics and reporting
- **[Test Strategy](../test-strategy/README_EN.md)** - Defect management strategy

## Learning Resources

### Recommended Books
- "Software Testing"
- "Lessons Learned in Software Testing"
- "Perfect Software and Other Illusions"

### Online Resources
- [Bug Writing Guidelines](https://developer.mozilla.org/en-US/docs/Mozilla/QA/Bug_writing_guidelines)
- [How to Report Bugs Effectively](https://www.chiark.greenend.org.uk/~sgtatham/bugs.html)
- [Bug Reporting Best Practices](https://www.ministryoftesting.com/)

## Contribution Guide

Welcome to contribute to the Bug Reporting module:

1. **Share Examples:** Share excellent bug report examples
2. **Best Practices:** Share bug reporting best practices
3. **Templates:** Provide bug report templates
4. **Tool Tips:** Share bug tracking tool tips

## License

This module follows the MIT License. See the [LICENSE](../LICENSE) file in the project root directory for details.

---

**Write better bug reports, fix issues faster!** 🐛✨
