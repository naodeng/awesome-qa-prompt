<div align="right"><strong><a href="./README.md">🇨🇳中文</a></strong> | <strong>🇬🇧English</strong></div>

# Awesome QA Prompt

<div align="center">
  <img src="https://inaodeng.com/prompts.svg" alt="Awesome QA Prompt " width="800"/>
</div>


[![Prompt Check](https://img.shields.io/github/actions/workflow/status/naodeng/awesome-qa-prompt/prompt-check.yml?branch=main&label=prompt%20check)](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/prompt-check.yml)
[![GitHub](https://img.shields.io/github/license/naodeng/awesome-qa-prompt)](https://github.com/naodeng/awesome-qa-prompt/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/naodeng/awesome-qa-prompt?style=social)](https://github.com/naodeng/awesome-qa-prompt)
![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fnaodeng%2Fawesome-qa-prompt&label=Visitors&countColor=%23263759&style=flat)
![GitHub forks](https://img.shields.io/github/forks/naodeng/awesome-qa-prompt?style=flat)
![GitHub watchers](https://img.shields.io/github/watchers/naodeng/awesome-qa-prompt?style=flat)

A professional collection of AI prompts for QA (Quality Assurance) professionals, designed to help test engineers and QA teams work more efficiently throughout the software testing lifecycle. This collection covers the complete testing lifecycle from requirements analysis to test reporting, providing 15 testing type modules, 3 workflows, and rich usage examples.

## ✨ Key Highlights

- 🎯 **Highly Professional**: Each prompt designed by testing experts with 10+ years of experience
- 🌍 **Bilingual Support**: Complete Chinese and English prompts for international teams
- 📚 **Rich Content**: 15 testing types + 3 workflows + 225+ professional documents
- 🔄 **Complete Versions**: Each module provides both full and lite versions
- 🎨 **Multi-Framework Support**: Supports TOP 5 prompt frameworks (ROSES, LangGPT, ICIO, CRISPE, RISE)
- 🚀 **Ready to Use**: Copy and paste to use, no complex configuration required
- 📖 **Online Documentation**: Beautiful online documentation website with full-text search

## 🌐 Online Documentation

**📖 Visit our online documentation for a better reading experience: [https://inaodeng.com/prompts](https://inaodeng.com/prompts)**

Online documentation features:
- 🔍 **Full-text Search** - Quickly find what you need
- 🌓 **Dark/Light Theme** - Auto-adapts to system theme
- 🌏 **Bilingual Support** - Switch between Chinese and English
- 📱 **Responsive Design** - Perfect mobile experience
- 📑 **Clear Navigation** - Sidebar and table of contents
- ⚡ **Lightning Fast** - Static site, instant loading

## 📋 Table of Contents

- [Key Highlights](#key-highlights)
- [Project Overview](#project-overview)
- [Feature Categories](#feature-categories)
- [Testing Workflows](#testing-workflows)
- [Quick Start](#quick-start)
- [Project Statistics](#project-statistics)
- [Directory Structure](#directory-structure)
- [Usage Guide](#usage-guide)
- [Prompt Authoring Standard](#prompt-authoring-standard)
- [Development Guide](#development-guide)
- [Contributing](#contributing)
- [Change Log](#change-log)
- [License](#license)

## 🎯 Project Overview

Awesome QA Prompt Collection is a carefully curated library of AI prompts specifically designed for software testing and quality assurance. Started in 2024, the project has undergone continuous iteration and optimization, becoming a powerful assistant for test engineers.

### 🌟 Project Value

By providing structured, professional prompt templates, it helps test engineers:

- **🚀 Improve Testing Efficiency**: Quickly generate high-quality test scenarios and test cases, saving 60% of documentation writing time
- **🎯 Ensure Test Coverage**: Systematically cover functional, performance, security, and other dimensions, avoiding missing critical test points
- **📋 Standardize Processes**: Unify test documentation formats and test execution standards, improving team collaboration efficiency
- **💡 Knowledge Transfer**: Preserve best practices and testing experience, helping newcomers grow quickly

### 🎨 Design Philosophy

- **Professional-Oriented**: Based on industry best practices and testing theory
- **Practical First**: Generated documentation can be directly used for test execution
- **Easy to Use**: Simple copy and paste, no complex learning curve
- **Continuous Improvement**: Continuously optimize and expand based on user feedback

## 📚 Feature Categories

This collection includes professional prompts for the following testing domains:

### 1. 📝 Requirements Analysis
- **Location**: `testing-types/en/requirements-analysis/Standard-version/RequirementsAnalysisPrompt.md`
- **Description**: Conduct in-depth analysis based on requirements documents and design comprehensive test scenarios
- **Use Cases**: Requirements review, test planning, test scenario design
- **Core Capabilities**:
  - Test design methods: Scenario testing, state transition diagrams, decision tables
  - Positive paths, negative paths, boundary value analysis
  - UI/UX, input validation, non-functional testing coverage

### 2. ✍️ Test Case Writing
- **Location**: `testing-types/en/test-case-writing/Standard-version/TestCaseWritingPrompt.md`
- **Description**: Automatically generate detailed test cases based on test scenarios
- **Use Cases**: Test case design, test documentation writing
- **Core Capabilities**:
  - Test case design principles and best practices
  - Standardized test case format and templates
  - Test data design and management strategies
  - Maintainability and traceability assurance

### 3. 🔍 Functional Testing
- **Location**: `testing-types/en/functional-testing/Standard-version/FunctionalTestingPrompt.md`
- **Description**: Design functional testing strategies and execution plans
- **Use Cases**: Functional test execution, regression testing
- **Core Capabilities**:
  - Black-box testing methods and functional decomposition testing
  - Functional coverage completeness and scientific testing methods
  - Business logic complexity and user experience focus
  - System integration complexity handling

### 4. ⚡ Performance Testing
- **Location**: `testing-types/en/performance-testing/Standard-version/PerformanceTestingPrompt.md`
- **Description**: Design performance test scenarios and performance metrics analysis
- **Use Cases**: Performance test planning, performance bottleneck analysis
- **Core Capabilities**:
  - Load, stress, spike, capacity, and other performance tests
  - Performance metrics system and bottleneck analysis framework
  - Test scenario realism and performance optimization recommendations
  - Performance monitoring and trend analysis

### 5. 🤖 Automation Testing
- **Location**: `testing-types/en/automation-testing/Standard-version/AutomationTestingPrompt.md`
- **Description**: Automation test script design and framework selection
- **Use Cases**: Automation test implementation, CI/CD integration
- **Core Capabilities**:
  - Test automation pyramid and layered strategy
  - Web, API, mobile, database automation
  - Technology stack selection and framework design
  - CI/CD integration and maintenance optimization

### 6. 📱 Mobile Testing
- **Location**: `testing-types/en/mobile-testing/Standard-version/MobileTestingPrompt.md`
- **Description**: Mobile application testing strategies and scenario design
- **Use Cases**: Mobile application testing, compatibility testing
- **Core Capabilities**:
  - iOS and Android platform-specific testing
  - Device compatibility and network connectivity testing
  - Mobile lifecycle and user interaction testing
  - Performance, security, and user experience specialized testing

### 7. 🐛 Bug Reporting
- **Location**: `testing-types/en/bug-reporting/Standard-version/BugReportingPrompt.md`
- **Description**: Standardized bug report templates and bug analysis
- **Use Cases**: Bug management, bug analysis
- **Core Capabilities**:
  - Bug identification principles and classification system
  - Standardized bug report format
  - Root cause analysis and resolution recommendations
  - Bug lifecycle management

### 8. 📊 Test Reporting
- **Location**: `testing-types/en/test-reporting/Standard-version/TestReportingPrompt.md`
- **Description**: Test execution reports and quality analysis reports
- **Use Cases**: Test summary, quality assessment
- **Core Capabilities**:
  - Multiple types of test report writing
  - Quality metrics system and risk assessment
  - Data visualization and trend analysis
  - Decision support and improvement recommendations

### 9. 🎯 Test Strategy
- **Location**: `testing-types/en/test-strategy/Standard-version/TestStrategyPrompt.md`
- **Description**: Overall test strategy development and test plan design
- **Use Cases**: Project kickoff, test planning
- **Core Capabilities**:
  - Test strategy hierarchy and development principles
  - Test objectives, scope, methods, resource planning
  - Risk management and quality control mechanisms
  - Implementation plan and budget resource planning

### 10. 🤖 AI-Assisted Testing
- **Location**: `testing-types/en/ai-assisted-testing/Standard-version/AIAssistedTestingPrompt.md`
- **Description**: Leverage AI technology to improve testing efficiency and quality
- **Use Cases**: Intelligent test generation, test optimization
- **Core Capabilities**:
  - AI-driven test case generation
  - Intelligent bug prediction and analysis
  - Automated test maintenance and optimization
  - Intelligent test data generation

### 11. 📋 Manual Testing
- **Location**: `testing-types/en/manual-testing/Standard-version/ManualTestingPrompt.md`
- **Description**: Manual testing strategies and exploratory testing
- **Use Cases**: Exploratory testing, user experience testing
- **Core Capabilities**:
  - Exploratory testing methods and techniques
  - Manual test case design
  - User experience evaluation
  - Test session management

### 12. 🔒 Security Testing
- **Location**: `testing-types/en/security-testing/Standard-version/SecurityTestingPrompt.md`
- **Description**: Security vulnerability detection and security testing strategies
- **Use Cases**: Security audit, penetration testing
- **Core Capabilities**:
  - OWASP Top 10 vulnerability testing
  - Authentication and authorization testing
  - Data security and encryption testing
  - Security compliance checking

### 13. 🔌 API Testing
- **Location**: `testing-types/en/api-testing/Standard-version/APITestingPrompt.md`
- **Description**: API interface testing and integration testing
- **Use Cases**: Interface testing, microservices testing
- **Core Capabilities**:
  - RESTful API test design
  - API performance and load testing
  - Interface contract testing
  - API security testing

### 14. ♿ Accessibility Testing
- **Location**: `testing-types/en/accessibility-testing/Standard-version/AccessibilityTestingPrompt.md`
- **Description**: Web accessibility testing and WCAG compliance checking
- **Use Cases**: Accessibility testing, compliance verification
- **Core Capabilities**:
  - WCAG 2.1 standard testing
  - Screen reader compatibility
  - Keyboard navigation testing
  - Color contrast and visual testing

### 15. 🔍 Test Case Review
- **Location**: `testing-types/en/test-case-reviewer/Standard-version/TestCaseReviewerPrompt.md`
- **Description**: Professional test case review and quality control
- **Use Cases**: Test case review, quality assessment, risk identification
- **Core Capabilities**:
  - Multi-dimensional review (business, technical, user experience, quality)
  - Extreme edge case discovery and potential risk identification
  - Test coverage check and missing scenario identification
  - Structured review reports and improvement recommendations

## 🎨 Prompt Framework Support

This project supports **TOP 5 prompt frameworks**, providing multiple framework version options for each testing type:

### Supported Frameworks

1. **ROSES** (Role Objective Scenario Expected Solution Steps)
   - Suitable for testing scenarios requiring clear role positioning and step guidance
   - High structure, clear logic

2. **LangGPT** (Structured Prompt Framework)
   - Comprehensive structured framework including role, background, objectives, constraints, etc.
   - Suitable for complex test scenario design

3. **ICIO** (Instruction Context Input Data Output Indicator)
   - Emphasizes instruction, context, input data, output, and indicators
   - Suitable for testing scenarios requiring clear input/output and evaluation metrics

4. **CRISPE** (Capacity Role Insight Statement Personality Experiment)
   - Includes six elements: capacity, role, insight, statement, personality, and experiment
   - Suitable for scenarios requiring in-depth analysis and experimental testing

5. **RISE** (Role Input Steps Expectation)
   - Concise framework including role, input, steps, and expectation
   - Suitable for quickly building test prompts

### Framework Version Usage

Each testing type provides:
- **Standard Version**: General prompt format, suitable for most scenarios
- **Framework Versions**: Structured prompts based on TOP 5 frameworks, suitable for specific framework needs

All versions provide:
- **Full Version**: Detailed prompts with complete test design guidance
- **Lite Version**: Simplified prompts for quick use

📖 Learn more: [Prompt Framework Introduction](./prompt-frameworks/en/README.md)

## 🔄 Testing Workflows

This project provides three practical testing workflows to help teams efficiently use the prompt library in different scenarios:

### 1. 📅 Daily Testing Workflow
- **Location**: `Workflows/en/daily-testing-workflow.md` | [中文版](Workflows/zh/daily-testing-workflow.md)
- **Use Cases**: Daily testing activities for QA engineers
- **Coverage**:
  - Morning routine and test planning
  - Test case creation and automation
  - Exploratory testing and bug reporting
  - Daily summary and knowledge sharing

### 2. 🏃 Sprint Testing Workflow
- **Location**: `Workflows/en/sprint-testing-workflow.md` | [中文版](Workflows/zh/sprint-testing-workflow.md)
- **Use Cases**: 2-week sprint cycle for Agile/Scrum teams
- **Coverage**:
  - Sprint planning and test strategy
  - Daily testing activities and progress tracking
  - Regression and integration testing
  - Sprint review and retrospective

### 3. 🚀 Release Testing Workflow
- **Location**: `Workflows/en/release-testing-workflow.md` | [中文版](Workflows/zh/release-testing-workflow.md)
- **Use Cases**: Comprehensive testing before production release
- **Coverage**:
  - Release planning and test preparation (T-14 days)
  - Specialized testing (performance, security, accessibility)
  - Release candidate testing and Go/No-Go decision
  - Release day process and post-release monitoring

**Workflow Usage Tips**:
- Choose the appropriate workflow based on current task
- Follow links in workflows to access relevant prompts
- Use checklists to track progress
- Adjust workflows according to team practices

## 🚀 Quick Start

### Method 1: Online Use (Recommended)

Visit our online documentation: **[https://inaodeng.com/prompts](https://inaodeng.com/prompts)**

1. Select a testing type or workflow from the left sidebar
2. Click "Full Version" or "Lite Version" to view prompts
3. Copy the prompt content to your AI assistant (ChatGPT, Claude, Cursor AI, etc.)
4. Attach your input materials to get structured test documentation

### Method 2: Local Use

#### Prerequisites

- AI assistant that supports Markdown format (e.g., ChatGPT, Claude, Cursor AI)
- Basic software testing knowledge

### Usage Steps

1. **Select a Prompt**
   - Choose the corresponding prompt file based on your testing task
   - Use prompts under `en/` for English projects and `zh/` for Chinese projects
   - Choose between Standard version or TOP 5 framework versions (ROSES, LangGPT, ICIO, CRISPE, RISE)
   - Each version provides both full and lite options

2. **Prepare Input Materials**
   - Prepare relevant input documents according to the prompt requirements
   - Example: Requirements analysis requires requirements documents or User Stories

3. **Copy the Prompt**
   - Open the selected prompt and copy all content starting from the first divider `---`
   - Paste the copied content into your AI assistant
   - Attach your input materials after the prompt

4. **Get Output**
   - The AI assistant will generate structured test documentation based on the prompt
   - Adjust and refine as needed

#### Unified Usage Instructions (Applies to All Prompt Files)

- Prompt files no longer repeat the inline "Usage Instructions" notice
- Use prompts with this same flow:
  - Select one prompt file
  - Copy all content below the first divider `---` into your AI assistant
  - Add your project context, requirements, or testing materials after the prompt
  - Let AI generate output, then review and adjust it for your real project

### Example: Requirements Analysis

```markdown
# Step 1: Select prompt version
# Standard version: testing-types/en/requirements-analysis/Standard-version/RequirementsAnalysisPrompt.md
# ROSES framework version: testing-types/en/requirements-analysis/ROSES-version/RequirementsAnalysis-ROSES-Full.md
# LangGPT framework version: testing-types/en/requirements-analysis/LangGPT-version/RequirementsAnalysis-LangGPT-Full.md
# Other framework versions similar...

# Step 2: Copy the selected prompt content

# Step 3: Attach requirements document
[Paste your requirements document or User Story here]

# Step 4: Send to AI assistant
# AI will generate comprehensive test scenarios based on the prompt
```

### Complete Testing Process Example

```markdown
# Complete testing project workflow (Standard version example)
1. Requirements Analysis → testing-types/en/requirements-analysis/Standard-version/RequirementsAnalysisPrompt.md
2. Test Strategy → testing-types/en/test-strategy/Standard-version/TestStrategyPrompt.md
3. Test Case Writing → testing-types/en/test-case-writing/Standard-version/TestCaseWritingPrompt.md
4. Functional Testing → testing-types/en/functional-testing/Standard-version/FunctionalTestingPrompt.md
5. Automation Testing → testing-types/en/automation-testing/Standard-version/AutomationTestingPrompt.md
6. Performance Testing → testing-types/en/performance-testing/Standard-version/PerformanceTestingPrompt.md
7. Mobile Testing → testing-types/en/mobile-testing/Standard-version/MobileTestingPrompt.md
8. Bug Reporting → testing-types/en/bug-reporting/Standard-version/BugReportingPrompt.md
9. Test Reporting → testing-types/en/test-reporting/Standard-version/TestReportingPrompt.md

# Or use framework versions, for example ROSES framework:
1. Requirements Analysis → testing-types/en/requirements-analysis/ROSES-version/RequirementsAnalysis-ROSES-Full.md
2. Test Strategy → testing-types/en/test-strategy/ROSES-version/TestStrategy-ROSES-Full.md
# ... other steps similar
```

## 📊 Project Statistics

### 📈 Completion Statistics

<div align="center">

| Category | Quantity | Completion | Status |
|----------|----------|------------|--------|
| 🧪 **Testing Type Modules** | 15 | 100% | ✅ Complete |
| 🔄 **Workflows** | 3 | 100% | ✅ Complete |
| 📝 **Standard Version Prompts** | 30 (15 Chinese + 15 English) | 100% | ✅ Complete |
| 🎨 **Framework Version Prompts** | 150 (5 frameworks × 15 types × 2 versions) | 100% | ✅ Complete |
| 📚 **Module Documentation** | 30 | 100% | ✅ Complete |
| 📖 **Total Documents** | **225+** | **100%** | ✅ **Complete** |

</div>

### 🎯 Core Features

- **🔄 Full Lifecycle Coverage**: Complete testing lifecycle from requirements analysis to test reporting
- **🌍 Multi-language Support**: Bilingual prompts in Chinese and English for different team needs
- **📋 Full + Lite Versions**: Each testing type provides both full and lite versions for different scenarios
- **🎨 TOP 5 Framework Support**: Each testing type supports ROSES, LangGPT, ICIO, CRISPE, RISE prompt frameworks
- **👨‍💼 High Professionalism**: Each prompt designed by expert roles with 10+ years of experience
- **🛠️ High Practicality**: Provides standardized formats and best practice guidance
- **🔧 Good Extensibility**: Modular design, easy to extend and customize

### 📊 Usage Statistics

- **⭐ GitHub Stars**: Continuously growing
- **🍴 Project Forks**: Active community contributions
- **👀 Page Views**: Thousands of visits per month
- **🌐 Online Documentation**: Supports full-text search and multi-language switching

## 📁 Directory Structure

```
awesome-qa-prompt/
├── README.md                          # Project documentation (Chinese)
├── README_EN.md                       # Project documentation (English)
├── CHANGELOG.md                       # Version update log
├── LICENSE                            # License file
│
├── testing-types/                     # Testing type modules (core content)
│   ├── zh/                            # Chinese prompts
│   │   ├── requirements-analysis/     # Requirements Analysis
│   │   ├── test-case-writing/         # Test Case Writing
│   │   ├── ...                        # Other testing types
│   │   └── test-case-reviewer/        # Test Case Review
│   └── en/                            # English prompts
│       ├── requirements-analysis/
│       ├── test-case-writing/
│       ├── ...
│       └── test-case-reviewer/
│   # Each testing-type folder contains:
│   # ├── README.md                    # Module guide
│   # ├── Standard-version/            # Standard version
│   # ├── ROSES-version/               # ROSES framework version
│   # ├── LangGPT-version/             # LangGPT framework version
│   # ├── ICIO-version/                # ICIO framework version
│   # ├── CRISPE-version/              # CRISPE framework version
│   # └── RISE-version/                # RISE framework version
│
├── Workflows/                         # Testing workflows
│   ├── zh/README.md                   # Chinese workflow guide
│   ├── en/README.md                   # English workflow guide
│   ├── zh/daily-testing-workflow.md   # Daily Testing Workflow (Chinese)
│   ├── en/daily-testing-workflow.md   # Daily Testing Workflow (English)
│   ├── zh/sprint-testing-workflow.md  # Sprint Testing Workflow (Chinese)
│   ├── en/sprint-testing-workflow.md  # Sprint Testing Workflow (English)
│   ├── zh/release-testing-workflow.md # Release Testing Workflow (Chinese)
│   └── en/release-testing-workflow.md # Release Testing Workflow (English)
│
├── prompt-frameworks/                 # Prompt frameworks
│   ├── frameworks/                    # Framework template collection
│   └── README.md                      # Framework description document
│
├── examples/                          # Usage examples
│   ├── basic-usage/                   # Basic usage examples
│   ├── advanced-usage/                # Advanced usage examples
│   └── best-practices/                # Best practice cases
│
├── future-updates/                    # Content to be updated (not included in build)
│   ├── guides/                        # Usage guides
│   ├── automation-testing-advanced/   # Advanced automation testing content
│   ├── ai-assisted-testing-advanced/  # Advanced AI-assisted testing content
│   ├── mobile-testing-advanced/       # Advanced mobile testing content
│   ├── manual-testing-advanced/       # Advanced manual testing content
│   └── README.md                      # Description of content to be updated
│
└── scripts/                           # Project scripts (checks and helpers)
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

### Usage Tips

1. **Choose the Right Version**:
   - **Framework Selection**: Standard version for general use, framework versions (ROSES, LangGPT, ICIO, CRISPE, RISE) for specific framework needs
   - **Detail Level**: Beginners or quick use choose lite version (_Lite.md), professional or detailed needs choose full version (Full)
   - **Language Selection**: Use prompts under `en/` for English projects and `zh/` for Chinese projects

2. **Combine Usage**:
   - Multiple prompts can be used in combination
   - Use different modules in testing workflow order

3. **Personalized Adjustment**:
   - Adjust prompt content based on project characteristics
   - Add project-specific testing requirements

4. **Team Collaboration**:
   - Establish unified team prompt usage standards
   - Regularly share usage experience and optimization suggestions

### FAQ

**Q: How to choose the right AI assistant?**
A: We recommend using AI assistants that support long text and Markdown format, such as ChatGPT, Claude, Cursor AI.

**Q: Can prompts be modified?**
A: Absolutely! We recommend adjusting prompt content based on actual project conditions for better results.

**Q: How to ensure the quality of generated content?**
A: We recommend combining with manual review, especially for critical test scenarios and cases.

**Q: Which testing frameworks are supported?**
A: Prompts are framework-agnostic, and generated test documentation can be adapted to any testing framework and tools.

## Prompt Authoring Standard

The repository-wide authoring standard is documented in [PROMPT_AUTHORING_STANDARD_EN.md](./PROMPT_AUTHORING_STANDARD_EN.md).

For the contribution workflow, see [CONTRIBUTING_EN.md](./CONTRIBUTING_EN.md).

Use it when you:

- add a new testing prompt
- update module READMEs or default entry paths
- add CRISPE / RISE / ICIO / ROSES / LangGPT variants
- run batch reviews or consistency checks

## Development Guide

### Requirements

- **Node.js**: >= 18.0.0
- **npm**: >= 8.0.0
- **Git**: Latest version

### Common Workflow

1. **Clone the repository**
   ```bash
   git clone https://github.com/naodeng/awesome-qa-prompt.git
   cd awesome-qa-prompt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Update content**
   - Edit relevant files under `testing-types/` or `Workflows/`
   - Keep `zh/` and `en/` in sync when bilingual updates are required

4. **Run checks**
   ```bash
   npm run check:prompts
   ```

5. **Commit changes**
   ```bash
   git add .
   git commit -m "Update: Describe your changes"
   git push
   ```

## 🤝 Contributing

We welcome all forms of contributions!

### How to Contribute

1. **Fork the Project**
   ```bash
   git clone https://github.com/naodeng/awesome-qa-prompt.git
   ```

2. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Add or Improve Prompts**
   - Create new prompt files
   - Improve existing prompts
   - Add usage examples

4. **Run Local Checks**
   ```bash
   npm run check:prompts
   ```

5. **Commit Changes**
   ```bash
   git add .
   git commit -m "Add: Describe your changes"
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request**

### Project Structure

```
awesome-qa-prompt/
├── testing-types/      # Testing type modules (core content)
├── Workflows/          # Workflows
├── examples/           # Usage examples
├── prompt-frameworks/  # Prompt frameworks
├── scripts/            # Project scripts
└── future-updates/    # Content to be updated
```

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
- Ensure Chinese and English versions are synchronized

### Community & Support

- 💬 **Discussions**: [GitHub Discussions](https://github.com/naodeng/awesome-qa-prompt/discussions)
- 🐛 **Issue Reporting**: [GitHub Issues](https://github.com/naodeng/awesome-qa-prompt/issues)
- 📧 **Email Contact**: Contact maintainers through GitHub
- 🌟 **Follow Project**: Click Star to follow project updates


## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Thanks to all test engineers and QA experts who have contributed to this project!

## 📮 Contact

For questions or suggestions, please contact us through:

- 📝 Submit an [Issue](https://github.com/naodeng/awesome-qa-prompt/issues)
- 🔀 Create a [Pull Request](https://github.com/naodeng/awesome-qa-prompt/pulls)
- 🌟 Star the [Project](https://github.com/naodeng/awesome-qa-prompt)

## 🔗 Related Links

- **Online Documentation**: [https://inaodeng.com/prompts](https://inaodeng.com/prompts)
- **GitHub Repository**: [https://github.com/naodeng/awesome-qa-prompt](https://github.com/naodeng/awesome-qa-prompt)
- **Issue Tracker**: [Issues](https://github.com/naodeng/awesome-qa-prompt/issues)
- **Contribute**: [Pull Requests](https://github.com/naodeng/awesome-qa-prompt/pulls)

---

## 📋 Change Log

### [v0.5.0] - 2026-03-29 🧹 Documentation Cleanup & Structure Optimization

#### ✨ Major Updates
- **Removed online docs-site specific information**:
  - Removed docs-site local development and deployment configuration descriptions from the repository guide
  - Kept one unified online entry link: [https://inaodeng.com/prompts](https://inaodeng.com/prompts)

- **Optimized project directory structure**:
  - Unified testing prompt path pattern: `testing-types/<language>/<module>/<version>/<file>`
  - Unified workflow path pattern: `Workflows/<language>/<file>`
  - Updated README directory examples to match the current repository

#### 🔧 Experience Improvements
- Removed repeated inline usage notices from prompt files
- Added unified usage steps in README to reduce duplicated instructions

### [v0.4.0] - 2026-01-27 🔍 Search Functionality & Deployment Upgrade

#### ✨ New Features
- **Full-text Search Support**:
  - Integrated Algolia Search for fast and accurate full-text search capabilities
  - Bilingual support (Chinese/English) with automatic language detection
  - Search history, favorites, and keyboard shortcuts support

- **Deployment Architecture Upgrade**:
  - Fully migrated to Cloudflare Pages for improved speed and global availability
  - Optimized build process to resolve resource loading and caching issues
  - Removed GitHub Pages configuration to simplify maintenance

#### 🔧 Documentation & Config
- Updated deployment guide with Cloudflare Pages instructions
- Optimized `config.mts` by removing redundant code
- Fixed resource loading (503/404) issues

### [v0.3.0] - 2025-01-24 🎨 TOP 5 Framework Versions Release

#### ✨ New Features
- **TOP 5 Framework Support**:
  - Added ROSES, LangGPT, ICIO, CRISPE, RISE framework versions for all 15 testing types
  - Each framework version provides both full and lite versions with bilingual support
  - Added 150 framework version prompt documents (5 frameworks × 15 types × 2 versions)

- **Directory Structure Optimization**:
  - Added `Standard-version/` and 5 framework version directories under each testing type
  - Unified naming convention: `{Type}-{Framework}-Full.md` and `{Type}-{Framework}-Lite.md`
  - Clear version classification for easy discovery and use

- **Online Documentation Enhancement**:
  - Sidebar supports framework version navigation, all testing types uniformly display framework version directories
  - Chinese and English sidebar fully synchronized, supporting quick access to framework versions
  - Optimized navigation structure for better user experience

#### 📊 Content Statistics
- **Standard Version Prompts**: 30 (15 types × 2 versions)
- **Framework Version Prompts**: 150 (5 frameworks × 15 types × 2 versions)
- **Total Documents**: Increased from 60+ to **225+**

#### 🔧 Technical Improvements
- Optimized site configuration to support framework version routing
- Enhanced sidebar configuration to uniformly display framework version structure
- Fixed English version 404 issues, ensuring all links work properly

### [v0.2.0] - 2025-01-19 🔄 Major Restructuring Release

#### ✨ New Features
- **New Directory Structure**:
  - `testing-types/` - All testing type modules organized uniformly
  - `prompt-frameworks/` - Prompt framework templates and examples
  - `examples/` - Usage examples and best practices
  - `Workflows/` - Testing workflow documentation

- **Enhanced Content Organization**:
  - Integrated Reference directory content into testing-types modules
  - Moved advanced testing scenarios to `future-updates/` directory for future completion
  - Improved documentation navigation and link structure

#### 🔧 Important Changes
- **Directory Naming Convention**: All testing type directories changed from PascalCase to kebab-case
  - `AccessibilityTesting` → `accessibility-testing`
  - `AIAssistedTesting` → `ai-assisted-testing`
  - `APITesting` → `api-testing`
  - `AutomationTesting` → `automation-testing`
  - `BugReporting` → `bug-reporting`
  - `FunctionalTesting` → `functional-testing`
  - `ManualTesting` → `manual-testing`
  - `MobileTesting` → `mobile-testing`
  - `PerformanceTesting` → `performance-testing`
  - `RequirementsAnalysis` → `requirements-analysis`
  - `SecurityTesting` → `security-testing`
  - `TestCaseReviewer` → `test-case-reviewer`
  - `TestCaseWriting` → `test-case-writing`
  - `TestReporting` → `test-reporting`
  - `TestStrategy` → `test-strategy`
  - `Workflows` → `workflows`

- **File Reorganization**:
  - All testing modules consolidated under `testing-types/`
  - Base directory restructured as `prompt-frameworks/`

#### 🗑️ Cleanup and Optimization
- Removed empty directories and system files
- Removed redundant Reference directory
- Cleaned up temporary project files and migration scripts
- Moved incomplete content to `future-updates/` directory

#### 🔗 Fixes and Improvements
- Updated all internal links to adapt to new directory structure
- Fixed path mapping issues
- Improved compatibility handling rules
- Improved build reliability and error handling

#### 📊 Impact Assessment
- **Organization Improvement**: Directory structure score improved from 70/100 to 90+/100
- **Navigation Optimization**: Clearer categorization and logical grouping
- **Enhanced Maintainability**: Consistent naming conventions and structure
- **User Experience**: Easier content discovery and navigation
- **Developer Experience**: Better project organization for contributors

#### ⚠️ Breaking Changes
- **URL Structure**: All testing type URLs changed from PascalCase to kebab-case
- **File Paths**: Internal file references in external tools need updating
- **Bookmarks**: Users may need to update bookmarks (redirects provided)

### [v0.1.0] - 2026-01-14 🎉 Initial Release

#### Initial Release Content
- 14 testing type modules with bilingual prompts (full + lite versions)
- 3 testing workflows (bilingual)
- Online reading entry
- Umami website analytics integration
- SEO optimization and favicon configuration
- Usage instructions and version logs for all prompt files

---

**Let AI be the best assistant for test engineers!** 🚀
