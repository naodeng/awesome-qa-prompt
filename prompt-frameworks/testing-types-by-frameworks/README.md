# 测试类型按提示词框架分类

本目录包含了将 15 种测试类型按照 20 种不同提示词框架格式输出的版本。每种测试类型都提供完整版和轻量版两个版本。

## 目录结构

```
testing-types-by-frameworks/
├── README.md                          # 本说明文件
├── requirements-analysis/             # 需求分析
├── test-case-writing/                 # 测试用例编写
├── functional-testing/                # 功能测试
├── performance-testing/               # 性能测试
├── automation-testing/                # 自动化测试
├── mobile-testing/                    # 移动端测试
├── bug-reporting/                     # 缺陷上报
├── test-reporting/                    # 测试报告
├── test-strategy/                     # 测试策略
├── ai-assisted-testing/               # AI辅助测试
├── manual-testing/                    # 手动测试
├── security-testing/                  # 安全测试
├── api-testing/                       # API测试
├── accessibility-testing/             # 可访问性测试
└── test-case-reviewer/                # 测试用例评审
```

每个测试类型目录包含：
- 20个框架的完整版提示词（如：APE-Full.md）
- 20个框架的轻量版提示词（如：APE-Lite.md）
- README.md 说明文件

## 支持的提示词框架

1. **APE** - Action Purpose Expect
2. **BROKE** - Background Role Objectives Key Result Evolve
3. **CHAT** - Character History Ambition Task
4. **CRISPE** - Capacity Role Insight Statement Personality Experiment
5. **CARE** - Context Action Result Example
6. **COAST** - Context Objective Action Support Technology
7. **CREATE** - Clarity Relevant info Examples Avoid ambiguity Tinker
8. **RACE** - Role Action Context Example
9. **RISE** - Role Input Steps Expectation
10. **ROSES** - Role Objective Scenario Expected Solution Steps
11. **RTF** - Role Task Format
12. **SAGE** - Situation Action Goal Expectation
13. **SCOPE** - Scenario Complications Objective Plan Evaluation
14. **SPA** - Scenario Problem Action Result
15. **TAG** - Task Action Goal
16. **TRACE** - Task Request Action Context Example
17. **LangGPT** - LangGPT 结构化提示词框架
18. **Google** - Google 提示词工程最佳实践
19. **ICIO** - Instruction Context Input Data Output Indicator
20. **Base** - 基础格式

## 使用说明

1. 选择需要的测试类型目录
2. 根据需求选择合适的框架格式
3. 选择完整版或轻量版
4. 复制提示词内容到AI助手
5. 附加具体的测试材料开始使用

## 框架选择建议

### 按复杂度选择
- **简单快速**：APE、TAG、RTF
- **中等复杂**：ICIO、CRISPE、BROKE
- **全面详细**：ROSES、TRACE、SCOPE

### 按场景选择
- **角色扮演**：CHAT、CRISPE、RTF、ROSES
- **任务执行**：APE、TAG、ICIO、TRACE
- **问题解决**：SPA、SAGE、SCOPE
- **迭代优化**：BROKE、CREATE
- **格式控制**：ICIO、RTF、Google

## 版本说明

- **完整版**：包含详细的方法论、分类、输出格式等，适合专业深度使用
- **轻量版**：精简版本，快速上手，适合日常快速使用

## 更新日志

- v1.0.0 (2025-01-21): 初始版本，包含15种测试类型×20种框架×2个版本 = 600个提示词文件