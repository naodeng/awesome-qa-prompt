<div align="right"><strong>🇨🇳中文</strong> | <strong><a href="./README_EN.md">🇬🇧English</a></strong></div>

# Awesome QA Prompt 

<div align="center">
  <img src="./public/logo.svg" alt="Awesome QA Prompt " width="800"/>
</div>


[![Deploy to GitHub Pages](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/deploy.yml/badge.svg)](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/docs-online-blue.svg)](https://naodeng.github.io/awesome-qa-prompt/)
[![GitHub](https://img.shields.io/github/license/naodeng/awesome-qa-prompt)](https://github.com/naodeng/awesome-qa-prompt/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/naodeng/awesome-qa-prompt?style=social)](https://github.com/naodeng/awesome-qa-prompt)
![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fnaodeng%2Fawesome-qa-prompt&label=Visitors&countColor=%23263759&style=flat)
![GitHub forks](https://img.shields.io/github/forks/naodeng/awesome-qa-prompt?style=flat)
![GitHub watchers](https://img.shields.io/github/watchers/naodeng/awesome-qa-prompt?style=flat)

一个专业的 QA（质量保证）AI 提示词集合，旨在帮助测试工程师和 QA 团队更高效地进行软件测试工作。本集合涵盖了从需求分析到测试执行的完整测试生命周期。

## 📊 项目词云

<div align="center">
  <img src="./public/wordcloud-cn.svg" alt="Awesome QA Prompt 词云" width="800"/>
  <p><em>项目核心关键词可视化 - 天平象征测试的平衡与严谨</em></p>
</div>

## 🌐 在线文档

**📖 访问在线文档获得更好的阅读体验：[https://naodeng.github.io/awesome-qa-prompt/](https://naodeng.github.io/awesome-qa-prompt/)**

> 💡 **部署说明**：本项目配置了 GitHub Actions 自动部署，每次推送到 `main` 分支会自动更新在线文档。查看 [部署指南](./docs/deployment/QUICK_DEPLOY.md) 了解详情。

在线文档提供：
- 🔍 **全文搜索功能** - 快速查找所需内容
- 🌓 **深色/浅色主题** - 自动适配系统主题
- 🌏 **中英文双语切换** - 一键切换语言
- 📱 **响应式设计** - 完美支持移动端访问
- 📑 **清晰的导航** - 侧边栏和目录结构
- ⚡ **极速加载** - 静态网站，秒开体验

## 📋 目录

- [项目简介](#项目简介)
- [功能分类](#功能分类)
- [快速开始](#快速开始)
- [目录结构](#目录结构)
- [使用指南](#使用指南)
- [贡献指南](#贡献指南)
- [许可证](#许可证)

## 🎯 项目简介

Awesome QA Prompt Collection 是一个精心设计的 AI 提示词库，专门为软件测试和质量保证领域打造。通过提供结构化的、专业的提示词模板，帮助测试工程师：

- **提升测试效率**：快速生成高质量的测试场景和测试用例
- **确保测试覆盖**：系统化地覆盖功能、性能、安全等各个维度
- **标准化流程**：统一测试文档格式和测试执行标准
- **知识传承**：沉淀最佳实践和测试经验

## 📚 功能分类

本集合包含以下测试领域的专业提示词：

### 1. 📝 需求分析 (Requirements Analysis)
- **文件位置**：`testing-types/requirements-analysis/RequirementsAnalysisPrompt.md`
- **功能描述**：基于需求文档进行深度分析，设计全维度的测试场景
- **适用场景**：需求评审、测试计划制定、测试场景设计
- **核心能力**：
  - 场景法、状态迁移图、判定表等测试设计方法
  - 正向路径、异常路径、边界值分析
  - UI/UX、输入校验、非功能性测试覆盖

### 2. ✍️ 测试用例编写 (Test Case Writing)
- **文件位置**：`testing-types/test-case-writing/TestCaseWritingPrompt.md`
- **功能描述**：基于测试场景自动生成详细的测试用例
- **适用场景**：测试用例设计、测试文档编写
- **核心能力**：
  - 测试用例设计原则和最佳实践
  - 标准化的测试用例格式和模板
  - 测试数据设计和管理策略
  - 可维护性和可追溯性保证

### 3. 🔍 功能测试 (Functional Testing)
- **文件位置**：`testing-types/functional-testing/FunctionalTestingPrompt.md`
- **功能描述**：设计功能测试策略和执行方案
- **适用场景**：功能测试执行、回归测试
- **核心能力**：
  - 黑盒测试方法和功能分解测试
  - 功能覆盖完整性和测试方法科学性
  - 业务逻辑复杂性和用户体验关注
  - 系统集成复杂性处理

### 4. ⚡ 性能测试 (Performance Testing)
- **文件位置**：`testing-types/performance-testing/PerformanceTestingPrompt.md`
- **功能描述**：设计性能测试场景和性能指标分析
- **适用场景**：性能测试计划、性能瓶颈分析
- **核心能力**：
  - 负载、压力、峰值、容量等多种性能测试
  - 性能指标体系和瓶颈分析框架
  - 测试场景真实性和性能优化建议
  - 性能监控和趋势分析

### 5. 🤖 自动化测试 (Automation Testing)
- **文件位置**：`testing-types/automation-testing/AutomationTestingPrompt.md`
- **功能描述**：自动化测试脚本设计和框架选择
- **适用场景**：自动化测试实施、CI/CD 集成
- **核心能力**：
  - 自动化测试金字塔和分层策略
  - Web、API、移动端、数据库自动化
  - 技术栈选择和框架设计
  - CI/CD 集成和维护优化

### 6. 📱 移动端测试 (Mobile Testing)
- **文件位置**：`testing-types/mobile-testing/MobileTestingPrompt.md`
- **功能描述**：移动应用测试策略和场景设计
- **适用场景**：移动应用测试、兼容性测试
- **核心能力**：
  - iOS 和 Android 平台特性测试
  - 设备兼容性和网络连接测试
  - 移动端生命周期和用户交互测试
  - 性能、安全、用户体验专项测试

### 7. 🐛 缺陷上报 (Bug Reporting)
- **文件位置**：`testing-types/bug-reporting/BugReportingPrompt.md`
- **功能描述**：标准化缺陷报告模板和缺陷分析
- **适用场景**：缺陷管理、缺陷分析
- **核心能力**：
  - 缺陷识别原则和分类体系
  - 标准化缺陷报告格式
  - 根因分析和解决建议
  - 缺陷生命周期管理

### 8. 📊 测试报告 (Test Reporting)
- **文件位置**：`testing-types/test-reporting/TestReportingPrompt.md`
- **功能描述**：测试执行报告和质量分析报告
- **适用场景**：测试总结、质量评估
- **核心能力**：
  - 多类型测试报告编写
  - 质量指标体系和风险评估
  - 数据可视化和趋势分析
  - 决策支持和改进建议

### 9. 🎯 测试策略 (Test Strategy)
- **文件位置**：`testing-types/test-strategy/TestStrategyPrompt.md`
- **功能描述**：整体测试策略制定和测试计划设计
- **适用场景**：项目启动、测试规划
- **核心能力**：
  - 测试策略层次和制定原则
  - 测试目标、范围、方法、资源规划
  - 风险管理和质量控制机制
  - 实施计划和预算资源规划

### 10. 🤖 AI辅助测试 (AI-Assisted Testing)
- **文件位置**：`testing-types/ai-assisted-testing/AIAssistedTestingPrompt.md`
- **功能描述**：利用AI技术提升测试效率和质量
- **适用场景**：智能测试生成、测试优化
- **核心能力**：
  - AI驱动的测试用例生成
  - 智能缺陷预测和分析
  - 自动化测试维护和优化
  - 测试数据智能生成

### 11. 📋 手动测试 (Manual Testing)
- **文件位置**：`testing-types/manual-testing/ManualTestingPrompt.md`
- **功能描述**：手动测试策略和探索性测试
- **适用场景**：探索性测试、用户体验测试
- **核心能力**：
  - 探索性测试方法和技巧
  - 手动测试用例设计
  - 用户体验评估
  - 测试会话管理

### 12. 🔒 安全测试 (Security Testing)
- **文件位置**：`testing-types/security-testing/SecurityTestingPrompt.md`
- **功能描述**：安全漏洞检测和安全测试策略
- **适用场景**：安全审计、渗透测试
- **核心能力**：
  - OWASP Top 10 漏洞测试
  - 身份验证和授权测试
  - 数据安全和加密测试
  - 安全合规性检查

### 13. 🔌 API测试 (API Testing)
- **文件位置**：`testing-types/api-testing/APITestingPrompt.md`
- **功能描述**：API接口测试和集成测试
- **适用场景**：接口测试、微服务测试
- **核心能力**：
  - RESTful API测试设计
  - API性能和负载测试
  - 接口契约测试
  - API安全测试

### 14. ♿ 可访问性测试 (Accessibility Testing)
- **文件位置**：`testing-types/accessibility-testing/AccessibilityTestingPrompt.md`
- **功能描述**：Web可访问性测试和WCAG合规性检查
- **适用场景**：无障碍测试、合规性验证
- **核心能力**：
  - WCAG 2.1标准测试
  - 屏幕阅读器兼容性
  - 键盘导航测试
  - 颜色对比度和视觉测试

### 15. 🔍 测试用例评审 (Test Case Review)
- **文件位置**：`testing-types/test-case-reviewer/TestCaseReviewerPrompt.md`
- **功能描述**：专业的测试用例审核和质量把控
- **适用场景**：测试用例评审、质量评估、风险识别
- **核心能力**：
  - 多维度评审（业务、技术、用户体验、质量）
  - 极端边界挖掘和潜在风险识别
  - 测试覆盖度检查和缺失场景识别
  - 结构化评审报告和改进建议

## 🔄 测试工作流程 (Testing Workflows)

本项目提供三种实用的测试工作流程，帮助团队在不同场景下高效使用提示词库：

### 1. 📅 日常测试工作流程 (Daily Testing Workflow)
- **文件位置**：`workflows/daily-testing-workflow_CN.md` | [English](workflows/daily-testing-workflow_EN.md)
- **适用场景**：QA工程师的日常测试活动
- **涵盖内容**：
  - 早晨例行工作和测试计划
  - 测试用例创建和自动化
  - 探索性测试和缺陷上报
  - 每日总结和知识分享

### 2. 🏃 迭代测试工作流程 (Sprint Testing Workflow)
- **文件位置**：`workflows/sprint-testing-workflow_CN.md` | [English](workflows/sprint-testing-workflow_EN.md)
- **适用场景**：敏捷/Scrum团队的2周迭代周期
- **涵盖内容**：
  - 迭代规划和测试策略
  - 日常测试活动和进度跟踪
  - 回归和集成测试
  - 迭代评审和回顾

### 3. 🚀 发布测试工作流程 (Release Testing Workflow)
- **文件位置**：`workflows/release-testing-workflow_CN.md` | [English](workflows/release-testing-workflow_EN.md)
- **适用场景**：生产环境发布前的全面测试
- **涵盖内容**：
  - 发布规划和测试准备（T-14天）
  - 专项测试（性能、安全、可访问性）
  - 候选版本测试和Go/No-Go决策
  - 发布日流程和发布后监控

**工作流程使用提示**：
- 根据当前任务选择合适的工作流程
- 跟随工作流程中的链接访问相关提示词
- 使用检查清单跟踪进度
- 根据团队实际情况调整工作流程

## 🚀 快速开始

### 方式一：在线使用（推荐）

访问在线文档网站：**[https://naodeng.github.io/awesome-qa-prompt/](https://naodeng.github.io/awesome-qa-prompt/)**

1. 在左侧导航栏选择测试类型或工作流程
2. 点击"完整版"或"精简版"查看提示词
3. 复制提示词内容到 AI 助手（ChatGPT、Claude、Cursor AI 等）
4. 附加你的输入材料，获取结构化的测试文档

### 方式二：本地使用

#### 前置要求

- 支持 Markdown 格式的 AI 助手（如 ChatGPT、Claude、Cursor AI 等）
- 基本的软件测试知识

### 使用步骤

1. **选择提示词**
   - 根据你的测试任务，选择对应的提示词文件
   - 中文项目使用中文提示词，英文项目使用英文提示词（_EN.md 结尾）

2. **准备输入材料**
   - 根据提示词要求，准备相应的输入文档
   - 例如：需求分析需要提供需求文档或 User Story

3. **复制提示词**
   - 将选定的提示词内容复制到 AI 助手中
   - 将你的输入材料附加到提示词后面

4. **获取输出**
   - AI 助手会根据提示词生成结构化的测试文档
   - 根据需要进行调整和完善

### 示例：需求分析

```markdown
# 步骤 1：复制需求分析提示词
# 从 testing-types/requirements-analysis/RequirementsAnalysisPrompt.md 复制内容

# 步骤 2：附加需求文档
[在这里粘贴你的需求文档或 User Story]

# 步骤 3：发送给 AI 助手
# AI 将根据提示词生成完整的测试场景
```

### 完整测试流程示例

```markdown
# 完整的测试项目流程
1. 需求分析 → testing-types/requirements-analysis/RequirementsAnalysisPrompt.md
2. 测试策略 → testing-types/test-strategy/TestStrategyPrompt.md
3. 测试用例编写 → testing-types/test-case-writing/TestCaseWritingPrompt.md
4. 功能测试 → testing-types/functional-testing/FunctionalTestingPrompt.md
5. 自动化测试 → testing-types/automation-testing/AutomationTestingPrompt.md
6. 性能测试 → testing-types/performance-testing/PerformanceTestingPrompt.md
7. 移动端测试 → testing-types/mobile-testing/MobileTestingPrompt.md
8. 缺陷上报 → testing-types/bug-reporting/BugReportingPrompt.md
9. 测试报告 → testing-types/test-reporting/TestReportingPrompt.md
```

## 📊 项目完成状态

### ✅ 已完成模块

| 模块 | 中文提示词 | 英文提示词 | 精简版中文 | 精简版英文 | README | 状态 |
|------|------------|------------|------------|------------|--------|------|
| 需求分析 | ✅ | ✅ | ✅ | ✅ | ✅ | 完成 |
| 测试用例编写 | ✅ | ✅ | ✅ | ✅ | ✅ | 完成 |
| 功能测试 | ✅ | ✅ | ✅ | ✅ | ✅ | 完成 |
| 性能测试 | ✅ | ✅ | ✅ | ✅ | ✅ | 完成 |
| 自动化测试 | ✅ | ✅ | ✅ | ✅ | ✅ | 完成 |
| 移动端测试 | ✅ | ✅ | ✅ | ✅ | ✅ | 完成 |
| 缺陷上报 | ✅ | ✅ | ✅ | ✅ | ✅ | 完成 |
| 测试报告 | ✅ | ✅ | ✅ | ✅ | ✅ | 完成 |
| 测试策略 | ✅ | ✅ | ✅ | ✅ | ✅ | 完成 |
| AI辅助测试 | ✅ | ✅ | ✅ | ✅ | ✅ | 完成 |
| 手动测试 | ✅ | ✅ | ✅ | ✅ | ✅ | 完成 |
| 安全测试 | ✅ | ✅ | ✅ | ✅ | ✅ | 完成 |
| API测试 | ✅ | ✅ | ✅ | ✅ | ✅ | 完成 |
| 可访问性测试 | ✅ | ✅ | ✅ | ✅ | ✅ | 完成 |
| 测试用例评审 | ✅ | ✅ | ✅ | ✅ | ✅ | 完成 |

### 🔄 工作流程

| 工作流程 | 中文版本 | 英文版本 | 状态 |
|---------|---------|---------|------|
| 日常测试工作流程 | ✅ | ✅ | 完成 |
| 迭代测试工作流程 | ✅ | ✅ | 完成 |
| 发布测试工作流程 | ✅ | ✅ | 完成 |

### 📈 完成度统计

- **总测试类型模块：** 15 个
- **已完成模块：** 15 个 (100%)
- **中文提示词：** 15 个 (100%)
- **英文提示词：** 15 个 (100%)
- **精简版中文：** 15 个 (100%)
- **精简版英文：** 15 个 (100%)
- **模块文档：** 15 个 (100%)
- **工作流程：** 3 个 (100%)

### 🎯 核心特性

- **全生命周期覆盖：** 从需求分析到测试报告的完整测试生命周期
- **多语言支持：** 中英文双语提示词，适应不同团队需求
- **专业性强：** 每个提示词都由 10+ 年经验的专家角色设计
- **实用性高：** 提供标准化格式和最佳实践指导
- **可扩展性好：** 模块化设计，便于扩展和定制

## 📁 目录结构

```
awesome-qa-prompt/
├── README.md                          # 项目说明文档（中文）
├── README_EN.md                       # 项目说明文档（英文）
├── CHANGELOG.md                       # 版本更新日志
├── LICENSE                            # 许可证文件
│
├── docs/                              # 文档目录
│   ├── deployment/                    # 部署相关文档
│   ├── index.md                       # 首页文档
│   ├── en.md                          # 英文首页
│   └── README.md                      # 文档目录说明
│
├── testing-types/                     # 测试类型模块（核心内容）
│   ├── requirements-analysis/         # 需求分析
│   ├── test-case-writing/             # 测试用例编写
│   ├── functional-testing/            # 功能测试
│   ├── performance-testing/           # 性能测试
│   ├── automation-testing/            # 自动化测试
│   ├── mobile-testing/                # 移动端测试
│   ├── bug-reporting/                 # 缺陷上报
│   ├── test-reporting/                # 测试报告
│   ├── test-strategy/                 # 测试策略
│   ├── ai-assisted-testing/           # AI辅助测试
│   ├── manual-testing/                # 手动测试
│   ├── security-testing/              # 安全测试
│   ├── api-testing/                   # API测试
│   ├── accessibility-testing/         # 可访问性测试
│   └── test-case-reviewer/            # 测试用例评审
│   # 每个测试类型文件夹包含：
│   # ├── [Type]Prompt.md              # 中文完整版提示词
│   # ├── [Type]Prompt_EN.md          # 英文完整版提示词
│   # ├── [Type]Prompt_Lite.md        # 中文精简版提示词
│   # ├── [Type]Prompt_Lite_EN.md     # 英文精简版提示词
│   # ├── README.md                    # 中文模块说明
│   # └── README_EN.md                 # 英文模块说明
│
├── workflows/                         # 测试工作流程
│   ├── README.md                      # 工作流程说明（双语）
│   ├── daily-testing-workflow_CN.md   # 日常测试工作流程（中文）
│   ├── daily-testing-workflow_EN.md   # 日常测试工作流程（英文）
│   ├── sprint-testing-workflow_CN.md  # 迭代测试工作流程（中文）
│   ├── sprint-testing-workflow_EN.md  # 迭代测试工作流程（英文）
│   ├── release-testing-workflow_CN.md # 发布测试工作流程（中文）
│   └── release-testing-workflow_EN.md # 发布测试工作流程（英文）
│
├── prompt-frameworks/                 # 提示词框架
│   ├── frameworks/                    # 框架模板集合
│   └── README.md                      # 框架说明文档
│
├── examples/                          # 使用示例
│   ├── basic-usage/                   # 基础使用示例
│   ├── advanced-usage/                # 高级使用示例
│   └── best-practices/                # 最佳实践案例
│
├── future-updates/                    # 待更新内容（暂不包含在构建中）
│   ├── guides/                        # 使用指南
│   ├── automation-testing-advanced/   # 高级自动化测试内容
│   ├── ai-assisted-testing-advanced/  # 高级AI辅助测试内容
│   ├── mobile-testing-advanced/       # 高级移动端测试内容
│   ├── manual-testing-advanced/       # 高级手动测试内容
│   └── README.md                      # 待更新内容说明
│
└── public/                            # 静态资源
    ├── wordcloud-cn.svg               # 中文词云
    ├── wordcloud-en.svg               # 英文词云
    └── favicon files                  # 网站图标文件
```

## 📖 使用指南

### 提示词设计原则

本集合中的提示词遵循以下设计原则：

1. **专业性**：基于行业最佳实践和测试理论
2. **结构化**：清晰的格式和明确的输出要求
3. **可执行性**：生成的测试文档可直接用于测试执行
4. **可追溯性**：测试场景与需求关联，便于追溯

### 最佳实践

1. **结合实际情况调整**：根据项目特点调整提示词中的具体要求
2. **迭代优化**：根据使用反馈持续优化提示词
3. **团队协作**：在团队内统一使用，确保测试文档格式一致
4. **知识沉淀**：将优化后的提示词贡献回项目

### 提示词定制

你可以根据项目需要定制提示词：

- **修改优先级定义**：根据项目风险调整优先级标准
- **添加业务规则**：在提示词中加入项目特定的业务规则
- **扩展测试维度**：根据项目特点添加新的测试维度

## 🤝 贡献指南

我们欢迎所有形式的贡献！

### 如何贡献

1. **Fork 项目**
   ```bash
   git clone https://github.com/naodeng/awesome-qa-prompt.git
   ```

2. **创建分支**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **添加或改进提示词**
   - 创建新的提示词文件
   - 改进现有提示词
   - 添加使用示例

4. **提交更改**
   ```bash
   git add .
   git commit -m "Add: 描述你的更改"
   git push origin feature/your-feature-name
   ```

5. **创建 Pull Request**

### 本地开发文档网站

如果你想在本地运行文档网站：

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 访问 http://localhost:5173
```

构建生产版本：

```bash
npm run docs:build
npm run docs:preview
```

详细说明请查看 [START.md](./START.md) 和 [DEPLOYMENT.md](./DEPLOYMENT.md)。

### 贡献类型

- ✨ 新增提示词类别
- 🔧 改进现有提示词
- 📝 添加使用文档和示例
- 🐛 修复错误或问题
- 🌐 翻译和本地化

### 代码规范

- 使用 Markdown 格式编写提示词
- 保持格式一致性和可读性
- 添加必要的注释和说明
- 提供使用示例

## 📄 许可证

本项目采用 [MIT License](LICENSE) 许可证。

## 🙏 致谢

感谢所有为这个项目做出贡献的测试工程师和 QA 专家！

## 📮 联系方式

如有问题或建议，欢迎通过以下方式联系：

- 📝 提交 [Issue](https://github.com/naodeng/awesome-qa-prompt/issues)
- 🔀 创建 [Pull Request](https://github.com/naodeng/awesome-qa-prompt/pulls)
- 🌟 给项目点个 [Star](https://github.com/naodeng/awesome-qa-prompt)

## 🔗 相关链接

- **在线文档**：[https://naodeng.github.io/awesome-qa-prompt/](https://naodeng.github.io/awesome-qa-prompt/)
- **GitHub 仓库**：[https://github.com/naodeng/awesome-qa-prompt](https://github.com/naodeng/awesome-qa-prompt)
- **问题反馈**：[Issues](https://github.com/naodeng/awesome-qa-prompt/issues)
- **贡献代码**：[Pull Requests](https://github.com/naodeng/awesome-qa-prompt/pulls)

---

## 📋 更新日志 (Change Log)

### [v0.2.0] - 2025-01-19 🔄 重大重构版本

#### ✨ 新增功能
- **全新目录结构**：
  - `docs/` - 集中化文档目录
  - `testing-types/` - 所有测试类型模块统一组织
  - `prompt-frameworks/` - 提示词框架模板和示例
  - `examples/` - 使用示例和最佳实践
  - `workflows/` - 测试工作流程文档

- **增强内容组织**：
  - 将 Reference 目录内容整合到 testing-types 模块中
  - 将高级测试场景移至 `future-updates/` 目录待完善
  - 改进文档导航和链接结构

#### 🔧 重要变更
- **目录命名规范**：所有测试类型目录从 PascalCase 改为 kebab-case
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

- **文件重组**：
  - 部署文档移至 `docs/deployment/`
  - 首页文件移至 `docs/`
  - 所有测试模块整合到 `testing-types/` 下
  - Base 目录重构为 `prompt-frameworks/`

#### 🗑️ 清理优化
- 删除空目录和系统文件
- 移除冗余的 Reference 目录
- 清理临时项目文件和迁移脚本
- 将待完善内容移至 `future-updates/` 目录

#### 🔗 修复改进
- 更新所有内部链接以适应新目录结构
- 修复 VitePress 配置中的路径映射
- 添加向后兼容的 URL 重写规则
- 改进构建可靠性和错误处理

#### 📊 影响评估
- **组织改进**：目录结构评分从 70/100 提升至 90+/100
- **导航优化**：更清晰的分类和逻辑分组
- **维护性增强**：一致的命名规范和结构
- **用户体验**：更容易的内容发现和导航
- **开发体验**：为贡献者提供更好的项目组织

#### ⚠️ 破坏性变更
- **URL 结构**：所有测试类型 URL 从 PascalCase 改为 kebab-case
- **文件路径**：外部工具中的内部文件引用需要更新
- **书签**：用户可能需要更新书签（已提供重定向）

### [v0.1.0] - 2026-01-14 🎉 初始版本

#### 初始发布内容
- 14个测试类型模块的中英文提示词（完整版+精简版）
- 3个测试工作流程（中英文）
- VitePress在线文档网站
- GitHub Pages自动部署
- 双平台部署支持（GitHub Pages + Cloudflare Pages）
- Umami网站统计集成
- SEO优化和favicon配置
- 所有提示词文件的使用说明和版本记录

---

**让 AI 成为测试工程师的最佳助手！** 🚀
