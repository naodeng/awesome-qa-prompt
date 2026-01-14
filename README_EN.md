# Awesome QA Prompt Collection

[![Deploy to GitHub Pages](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/deploy.yml/badge.svg)](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/docs-online-blue.svg)](https://naodeng.github.io/awesome-qa-prompt/)
[![GitHub](https://img.shields.io/github/license/naodeng/awesome-qa-prompt)](https://github.com/naodeng/awesome-qa-prompt/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/naodeng/awesome-qa-prompt?style=social)](https://github.com/naodeng/awesome-qa-prompt)

A professional collection of AI prompts for QA (Quality Assurance) professionals, designed to help test engineers and QA teams work more efficiently throughout the software testing lifecycle.

## 🌐 Online Documentation

**📖 Visit our online documentation for a better reading experience: [https://naodeng.github.io/awesome-qa-prompt/](https://naodeng.github.io/awesome-qa-prompt/)**

> 💡 **Deployment**: This project is configured with GitHub Actions for automatic deployment. Every push to the `main` branch automatically updates the online documentation. See [Quick Deploy Guide](./QUICK_DEPLOY.md) for details.

Online documentation features:
- 🔍 **Full-text Search** - Quickly find what you need
- 🌓 **Dark/Light Theme** - Auto-adapts to system theme
- 🌏 **Bilingual Support** - Switch between Chinese and English
- 📱 **Responsive Design** - Perfect mobile experience
- 📑 **Clear Navigation** - Sidebar and table of contents
- ⚡ **Lightning Fast** - Static site, instant loading

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Feature Categories](#feature-categories)
- [Quick Start](#quick-start)
- [Directory Structure](#directory-structure)
- [Usage Guide](#usage-guide)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Project Overview

Awesome QA Prompt Collection is a carefully curated library of AI prompts specifically designed for software testing and quality assurance. By providing structured, professional prompt templates, it helps test engineers:

- **Improve Testing Efficiency**: Quickly generate high-quality test scenarios and test cases
- **Ensure Test Coverage**: Systematically cover functional, performance, security, and other dimensions
- **Standardize Processes**: Unify test documentation formats and test execution standards
- **Knowledge Transfer**: Preserve best practices and testing experience

## 📚 Feature Categories

This collection includes professional prompts for the following testing domains:

### 1. 📝 Requirements Analysis
- **Location**: `RequirementsAnalysis/RequirementsAnalysisPrompt_EN.md`
- **Description**: Conduct in-depth analysis based on requirements documents and design comprehensive test scenarios
- **Use Cases**: Requirements review, test planning, test scenario design
- **Core Capabilities**:
  - Test design methods: Scenario testing, state transition diagrams, decision tables
  - Positive paths, negative paths, boundary value analysis
  - UI/UX, input validation, non-functional testing coverage

### 2. ✍️ Test Case Writing
- **Status**: Planned
- **Description**: Automatically generate detailed test cases based on test scenarios
- **Use Cases**: Test case design, test documentation writing

### 3. 🔍 Functional Testing
- **Status**: Planned
- **Description**: Design functional testing strategies and execution plans
- **Use Cases**: Functional test execution, regression testing

### 4. ⚡ Performance Testing
- **Status**: Planned
- **Description**: Design performance test scenarios and performance metrics analysis
- **Use Cases**: Performance test planning, performance bottleneck analysis

### 5. 🤖 Automation Testing
- **Status**: Planned
- **Description**: Automation test script design and framework selection
- **Use Cases**: Automation test implementation, CI/CD integration

### 6. 📱 Mobile Testing
- **Status**: Planned
- **Description**: Mobile application testing strategies and scenario design
- **Use Cases**: Mobile application testing, compatibility testing

### 7. 🐛 Bug Reporting
- **Status**: Planned
- **Description**: Standardized bug report templates and bug analysis
- **Use Cases**: Bug management, bug analysis

### 8. 📊 Test Reporting
- **Status**: Planned
- **Description**: Test execution reports and quality analysis reports
- **Use Cases**: Test summary, quality assessment

### 9. 🎯 Test Strategy
- **Status**: Planned
- **Description**: Overall test strategy development and test plan design
- **Use Cases**: Project kickoff, test planning

## 🚀 Quick Start

### Prerequisites

- AI assistant that supports Markdown format (e.g., ChatGPT, Claude, Cursor AI)
- Basic software testing knowledge

### Usage Steps

1. **Select a Prompt**
   - Choose the corresponding prompt file based on your testing task
   - Example: Use `RequirementsAnalysis/RequirementsAnalysisPrompt_EN.md` for requirements analysis

2. **Prepare Input Materials**
   - Prepare relevant input documents according to the prompt requirements
   - Example: Requirements analysis requires requirements documents or User Stories

3. **Copy the Prompt**
   - Copy the selected prompt content to your AI assistant
   - Attach your input materials after the prompt

4. **Get Output**
   - The AI assistant will generate structured test documentation based on the prompt
   - Adjust and refine as needed

### Example: Requirements Analysis

```markdown
# Step 1: Copy the requirements analysis prompt
# Copy content from RequirementsAnalysis/RequirementsAnalysisPrompt_EN.md

# Step 2: Attach requirements document
[Paste your requirements document or User Story here]

# Step 3: Send to AI assistant
# AI will generate comprehensive test scenarios based on the prompt
```

## 📁 Directory Structure

```
awesome-qa-prompt/
├── README.md                          # Project documentation (Chinese)
├── README_EN.md                       # Project documentation (English)
├── LICENSE                            # License file
│
├── RequirementsAnalysis/               # Requirements Analysis
│   ├── RequirementsAnalysisPrompt.md      # Chinese prompt
│   └── RequirementsAnalysisPrompt_EN.md  # English prompt
│
├── TestCaseWriting/                   # Test Case Writing (Planned)
├── FunctionalTesting/                 # Functional Testing (Planned)
├── PerformanceTesting/                # Performance Testing (Planned)
├── AutomationTesting/                 # Automation Testing (Planned)
├── MobileTesting/                     # Mobile Testing (Planned)
├── BugReporting/                      # Bug Reporting (Planned)
├── TestReporting/                     # Test Reporting (Planned)
└── TestStrategy/                      # Test Strategy (Planned)
```

## 📖 Usage Guide

### Prompt Design Principles

Prompts in this collection follow these design principles:

1. **Professionalism**: Based on industry best practices and testing theory
2. **Structure**: Clear format and explicit output requirements
3. **Executability**: Generated test documentation can be directly used for test execution
4. **Traceability**: Test scenarios are linked to requirements for easy traceability

### Best Practices

1. **Adjust Based on Reality**: Modify specific requirements in prompts according to project characteristics
2. **Iterative Optimization**: Continuously optimize prompts based on usage feedback
3. **Team Collaboration**: Use consistently within the team to ensure uniform test documentation format
4. **Knowledge Preservation**: Contribute optimized prompts back to the project

### Prompt Customization

You can customize prompts according to project needs:

- **Modify Priority Definitions**: Adjust priority standards based on project risks
- **Add Business Rules**: Include project-specific business rules in prompts
- **Extend Test Dimensions**: Add new test dimensions based on project characteristics

## 🤝 Contributing

We welcome all forms of contributions!

### How to Contribute

1. **Fork the Project**
   ```bash
   git clone https://github.com/your-username/awesome-qa-prompt.git
   ```

2. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Add or Improve Prompts**
   - Create new prompt files
   - Improve existing prompts
   - Add usage examples

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "Add: Describe your changes"
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**

### Types of Contributions

- ✨ Add new prompt categories
- 🔧 Improve existing prompts
- 📝 Add documentation and examples
- 🐛 Fix errors or issues
- 🌐 Translation and localization

### Code Standards

- Write prompts in Markdown format
- Maintain format consistency and readability
- Add necessary comments and explanations
- Provide usage examples

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Thanks to all test engineers and QA experts who have contributed to this project!

## 📮 Contact

For questions or suggestions, please contact us through:

- Submit an Issue
- Create a Pull Request
- Send an email

---

**Let AI be the best assistant for test engineers!** 🚀
