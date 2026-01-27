<div align="right"><strong><a href="./README.md">🇨🇳中文</a></strong> | <strong>🇬🇧English</strong></div>

# Awesome QA Prompt 

<div align="center">
  <img src="./public/logo.svg" alt="Awesome QA Prompt " width="800"/>
</div>


[![Deploy to GitHub Pages](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/deploy.yml/badge.svg)](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/docs-online-blue.svg)](https://qaprompt.inaodeng.com)
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

## 📊 Project Word Cloud

<div align="center">
  <img src="./public/wordcloud-en.svg" alt="Awesome QA Prompt Word Cloud" width="800"/>
  <p><em>Visual representation of core keywords - Balance symbolizes precision and rigor in testing</em></p>
</div>

## 🌐 Online Documentation

**📖 Visit our online documentation for a better reading experience: [https://qaprompt.inaodeng.com](https://qaprompt.inaodeng.com)**

> 💡 **Deployment**: This project is configured with GitHub Actions for automatic deployment. Every push to the `main` branch automatically updates the online documentation. See [Deployment Guide](./docs/deployment/QUICK_DEPLOY_EN.md) for details.

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
- **Location**: `testing-types/requirements-analysis/RequirementsAnalysisPrompt_EN.md`
- **Description**: Conduct in-depth analysis based on requirements documents and design comprehensive test scenarios
- **Use Cases**: Requirements review, test planning, test scenario design
- **Core Capabilities**:
  - Test design methods: Scenario testing, state transition diagrams, decision tables
  - Positive paths, negative paths, boundary value analysis
  - UI/UX, input validation, non-functional testing coverage

### 2. ✍️ Test Case Writing
- **Location**: `testing-types/test-case-writing/TestCaseWritingPrompt_EN.md`
- **Description**: Automatically generate detailed test cases based on test scenarios
- **Use Cases**: Test case design, test documentation writing
- **Core Capabilities**:
  - Test case design principles and best practices
  - Standardized test case format and templates
  - Test data design and management strategies
  - Maintainability and traceability assurance

### 3. 🔍 Functional Testing
- **Location**: `testing-types/functional-testing/FunctionalTestingPrompt_EN.md`
- **Description**: Design functional testing strategies and execution plans
- **Use Cases**: Functional test execution, regression testing
- **Core Capabilities**:
  - Black-box testing methods and functional decomposition testing
  - Functional coverage completeness and scientific testing methods
  - Business logic complexity and user experience focus
  - System integration complexity handling

### 4. ⚡ Performance Testing
- **Location**: `testing-types/performance-testing/PerformanceTestingPrompt_EN.md`
- **Description**: Design performance test scenarios and performance metrics analysis
- **Use Cases**: Performance test planning, performance bottleneck analysis
- **Core Capabilities**:
  - Load, stress, spike, capacity, and other performance tests
  - Performance metrics system and bottleneck analysis framework
  - Test scenario realism and performance optimization recommendations
  - Performance monitoring and trend analysis

### 5. 🤖 Automation Testing
- **Location**: `testing-types/automation-testing/AutomationTestingPrompt_EN.md`
- **Description**: Automation test script design and framework selection
- **Use Cases**: Automation test implementation, CI/CD integration
- **Core Capabilities**:
  - Test automation pyramid and layered strategy
  - Web, API, mobile, database automation
  - Technology stack selection and framework design
  - CI/CD integration and maintenance optimization

### 6. 📱 Mobile Testing
- **Location**: `testing-types/mobile-testing/MobileTestingPrompt_EN.md`
- **Description**: Mobile application testing strategies and scenario design
- **Use Cases**: Mobile application testing, compatibility testing
- **Core Capabilities**:
  - iOS and Android platform-specific testing
  - Device compatibility and network connectivity testing
  - Mobile lifecycle and user interaction testing
  - Performance, security, and user experience specialized testing

### 7. 🐛 Bug Reporting
- **Location**: `testing-types/bug-reporting/BugReportingPrompt_EN.md`
- **Description**: Standardized bug report templates and bug analysis
- **Use Cases**: Bug management, bug analysis
- **Core Capabilities**:
  - Bug identification principles and classification system
  - Standardized bug report format
  - Root cause analysis and resolution recommendations
  - Bug lifecycle management

### 8. 📊 Test Reporting
- **Location**: `testing-types/test-reporting/TestReportingPrompt_EN.md`
- **Description**: Test execution reports and quality analysis reports
- **Use Cases**: Test summary, quality assessment
- **Core Capabilities**:
  - Multiple types of test report writing
  - Quality metrics system and risk assessment
  - Data visualization and trend analysis
  - Decision support and improvement recommendations

### 9. 🎯 Test Strategy
- **Location**: `testing-types/test-strategy/TestStrategyPrompt_EN.md`
- **Description**: Overall test strategy development and test plan design
- **Use Cases**: Project kickoff, test planning
- **Core Capabilities**:
  - Test strategy hierarchy and development principles
  - Test objectives, scope, methods, resource planning
  - Risk management and quality control mechanisms
  - Implementation plan and budget resource planning

### 10. 🤖 AI-Assisted Testing
- **Location**: `testing-types/ai-assisted-testing/AIAssistedTestingPrompt_EN.md`
- **Description**: Leverage AI technology to improve testing efficiency and quality
- **Use Cases**: Intelligent test generation, test optimization
- **Core Capabilities**:
  - AI-driven test case generation
  - Intelligent bug prediction and analysis
  - Automated test maintenance and optimization
  - Intelligent test data generation

### 11. 📋 Manual Testing
- **Location**: `testing-types/manual-testing/ManualTestingPrompt_EN.md`
- **Description**: Manual testing strategies and exploratory testing
- **Use Cases**: Exploratory testing, user experience testing
- **Core Capabilities**:
  - Exploratory testing methods and techniques
  - Manual test case design
  - User experience evaluation
  - Test session management

### 12. 🔒 Security Testing
- **Location**: `testing-types/security-testing/SecurityTestingPrompt_EN.md`
- **Description**: Security vulnerability detection and security testing strategies
- **Use Cases**: Security audit, penetration testing
- **Core Capabilities**:
  - OWASP Top 10 vulnerability testing
  - Authentication and authorization testing
  - Data security and encryption testing
  - Security compliance checking

### 13. 🔌 API Testing
- **Location**: `testing-types/api-testing/APITestingPrompt_EN.md`
- **Description**: API interface testing and integration testing
- **Use Cases**: Interface testing, microservices testing
- **Core Capabilities**:
  - RESTful API test design
  - API performance and load testing
  - Interface contract testing
  - API security testing

### 14. ♿ Accessibility Testing
- **Location**: `testing-types/accessibility-testing/AccessibilityTestingPrompt_EN.md`
- **Description**: Web accessibility testing and WCAG compliance checking
- **Use Cases**: Accessibility testing, compliance verification
- **Core Capabilities**:
  - WCAG 2.1 standard testing
  - Screen reader compatibility
  - Keyboard navigation testing
  - Color contrast and visual testing

### 15. 🔍 Test Case Review
- **Location**: `testing-types/test-case-reviewer/TestCaseReviewerPrompt_EN.md`
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

📖 Learn more: [Prompt Framework Introduction](./prompt-frameworks/README_EN.md)

## 🔄 Testing Workflows

This project provides three practical testing workflows to help teams efficiently use the prompt library in different scenarios:

### 1. 📅 Daily Testing Workflow
- **Location**: `workflows/daily-testing-workflow_EN.md` | [中文版](workflows/daily-testing-workflow_CN.md)
- **Use Cases**: Daily testing activities for QA engineers
- **Coverage**:
  - Morning routine and test planning
  - Test case creation and automation
  - Exploratory testing and bug reporting
  - Daily summary and knowledge sharing

### 2. 🏃 Sprint Testing Workflow
- **Location**: `workflows/sprint-testing-workflow_EN.md` | [中文版](workflows/sprint-testing-workflow_CN.md)
- **Use Cases**: 2-week sprint cycle for Agile/Scrum teams
- **Coverage**:
  - Sprint planning and test strategy
  - Daily testing activities and progress tracking
  - Regression and integration testing
  - Sprint review and retrospective

### 3. 🚀 Release Testing Workflow
- **Location**: `workflows/release-testing-workflow_EN.md` | [中文版](workflows/release-testing-workflow_CN.md)
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

Visit our online documentation: **[https://qaprompt.inaodeng.com](https://qaprompt.inaodeng.com)**

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
   - Use English prompts (_EN.md) for English projects, Chinese prompts for Chinese projects
   - Choose between Standard version or TOP 5 framework versions (ROSES, LangGPT, ICIO, CRISPE, RISE)
   - Each version provides both full and lite options

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
# Step 1: Select prompt version
# Standard version: testing-types/requirements-analysis/Standard-version/RequirementsAnalysisPrompt_EN.md
# ROSES framework version: testing-types/requirements-analysis/ROSES-version/RequirementsAnalysis-ROSES-Full_EN.md
# LangGPT framework version: testing-types/requirements-analysis/LangGPT-version/RequirementsAnalysis-LangGPT-Full_EN.md
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
1. Requirements Analysis → testing-types/requirements-analysis/Standard-version/RequirementsAnalysisPrompt_EN.md
2. Test Strategy → testing-types/test-strategy/Standard-version/TestStrategyPrompt_EN.md
3. Test Case Writing → testing-types/test-case-writing/Standard-version/TestCaseWritingPrompt_EN.md
4. Functional Testing → testing-types/functional-testing/Standard-version/FunctionalTestingPrompt_EN.md
5. Automation Testing → testing-types/automation-testing/Standard-version/AutomationTestingPrompt_EN.md
6. Performance Testing → testing-types/performance-testing/Standard-version/PerformanceTestingPrompt_EN.md
7. Mobile Testing → testing-types/mobile-testing/Standard-version/MobileTestingPrompt_EN.md
8. Bug Reporting → testing-types/bug-reporting/Standard-version/BugReportingPrompt_EN.md
9. Test Reporting → testing-types/test-reporting/Standard-version/TestReportingPrompt_EN.md

# Or use framework versions, for example ROSES framework:
1. Requirements Analysis → testing-types/requirements-analysis/ROSES-version/RequirementsAnalysis-ROSES-Full_EN.md
2. Test Strategy → testing-types/test-strategy/ROSES-version/TestStrategy-ROSES-Full_EN.md
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
├── docs/                              # Documentation directory
│   ├── deployment/                    # Deployment related documents
│   ├── index.md                       # Homepage documentation
│   ├── en.md                          # English homepage
│   └── README.md                      # Documentation directory description
│
├── testing-types/                     # Testing type modules (core content)
│   ├── requirements-analysis/         # Requirements Analysis
│   ├── test-case-writing/             # Test Case Writing
│   ├── functional-testing/            # Functional Testing
│   ├── performance-testing/           # Performance Testing
│   ├── automation-testing/            # Automation Testing
│   ├── mobile-testing/                # Mobile Testing
│   ├── bug-reporting/                 # Bug Reporting
│   ├── test-reporting/                # Test Reporting
│   ├── test-strategy/                 # Test Strategy
│   ├── ai-assisted-testing/           # AI-Assisted Testing
│   ├── manual-testing/                # Manual Testing
│   ├── security-testing/              # Security Testing
│   ├── api-testing/                   # API Testing
│   ├── accessibility-testing/         # Accessibility Testing
│   └── test-case-reviewer/            # Test Case Review
│   # Each testing type folder contains:
│   # ├── Standard-version/            # Standard version
│   # │   ├── [Type]Prompt.md         # Chinese full version
│   # │   ├── [Type]Prompt_EN.md      # English full version
│   # │   ├── [Type]Prompt_Lite.md    # Chinese lite version
│   # │   └── [Type]Prompt_Lite_EN.md # English lite version
│   # ├── ROSES-version/               # ROSES framework version
│   # ├── LangGPT-version/             # LangGPT framework version
│   # ├── ICIO-version/                # ICIO framework version
│   # ├── CRISPE-version/              # CRISPE framework version
│   # ├── RISE-version/                # RISE framework version
│   # ├── README.md                    # Chinese module description
│   # └── README_EN.md                 # English module description
│
├── workflows/                         # Testing workflows
│   ├── README.md                      # Workflow description (bilingual)
│   ├── daily-testing-workflow_CN.md   # Daily Testing Workflow (Chinese)
│   ├── daily-testing-workflow_EN.md   # Daily Testing Workflow (English)
│   ├── sprint-testing-workflow_CN.md  # Sprint Testing Workflow (Chinese)
│   ├── sprint-testing-workflow_EN.md  # Sprint Testing Workflow (English)
│   ├── release-testing-workflow_CN.md # Release Testing Workflow (Chinese)
│   └── release-testing-workflow_EN.md # Release Testing Workflow (English)
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
└── public/                            # Static resources
    ├── wordcloud-cn.svg               # Chinese word cloud
    ├── wordcloud-en.svg               # English word cloud
    └── favicon files                  # Website icon files
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
   - **Language Selection**: Use English prompts (_EN.md) for English projects, Chinese prompts for Chinese projects

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

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "Add: Describe your changes"
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**

## 🛠️ Local Development

### Requirements

- **Node.js**: >= 18.0.0
- **npm**: >= 8.0.0
- **Git**: Latest version

### Quick Start

```bash
# Clone the project
git clone https://github.com/naodeng/awesome-qa-prompt.git
cd awesome-qa-prompt

# Install dependencies
npm install

# Start development server
npm run docs:dev
# Visit http://localhost:5173

# Build production version
npm run docs:build

# Preview build result
npm run docs:preview
```

### Development Guide

1. **Add New Testing Type**:
   - Create new directory under `testing-types/`
   - Add files following existing module structure
   - Update navigation configuration

2. **Modify Existing Content**:
   - Directly edit corresponding Markdown files
   - Keep Chinese and English versions synchronized
   - Test if build works properly

3. **Add Usage Examples**:
   - Add examples under `examples/` directory
   - Provide detailed usage instructions
   - Include actual input/output examples

### Project Structure

```
awesome-qa-prompt/
├── .vitepress/          # VitePress configuration
├── docs/               # Documentation homepage
├── testing-types/      # Testing type modules (core content)
├── workflows/          # Workflows
├── examples/           # Usage examples
├── prompt-frameworks/  # Prompt frameworks
├── public/            # Static resources
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

- **Online Documentation**: [https://qaprompt.inaodeng.com](https://qaprompt.inaodeng.com)
- **GitHub Repository**: [https://github.com/naodeng/awesome-qa-prompt](https://github.com/naodeng/awesome-qa-prompt)
- **Issue Tracker**: [Issues](https://github.com/naodeng/awesome-qa-prompt/issues)
- **Contribute**: [Pull Requests](https://github.com/naodeng/awesome-qa-prompt/pulls)

---

## 📋 Change Log

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
- Optimized VitePress configuration to support framework version routing
- Enhanced sidebar configuration to uniformly display framework version structure
- Fixed English version 404 issues, ensuring all links work properly

### [v0.2.0] - 2025-01-19 🔄 Major Restructuring Release

#### ✨ New Features
- **New Directory Structure**:
  - `docs/` - Centralized documentation directory
  - `testing-types/` - All testing type modules organized uniformly
  - `prompt-frameworks/` - Prompt framework templates and examples
  - `examples/` - Usage examples and best practices
  - `workflows/` - Testing workflow documentation

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
  - Deployment documentation moved to `docs/deployment/`
  - Homepage files moved to `docs/`
  - All testing modules consolidated under `testing-types/`
  - Base directory restructured as `prompt-frameworks/`

#### 🗑️ Cleanup and Optimization
- Removed empty directories and system files
- Removed redundant Reference directory
- Cleaned up temporary project files and migration scripts
- Moved incomplete content to `future-updates/` directory

#### 🔗 Fixes and Improvements
- Updated all internal links to adapt to new directory structure
- Fixed path mappings in VitePress configuration
- Added backward-compatible URL rewrite rules
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
- VitePress online documentation website
- GitHub Pages automatic deployment
- Dual platform deployment support (GitHub Pages + Cloudflare Pages)
- Umami website analytics integration
- SEO optimization and favicon configuration
- Usage instructions and version logs for all prompt files

---

**Let AI be the best assistant for test engineers!** 🚀
