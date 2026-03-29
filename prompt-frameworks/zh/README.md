<div align="right"><strong>🇨🇳中文</strong> | <strong><a href="../en/README.md">🇬🇧English</a></strong></div>

# TOP 5 提示词框架

本目录包含 QA 测试场景中最优先使用的 **TOP 5 提示词框架**的介绍和说明。

## 📚 框架列表

### 1. ROSES
**Role Objective Scenario Expected Solution Steps**

ROSES 框架将提示词结构化为五个核心部分：角色、目标、场景、预期解决方案和步骤。适合需要明确角色定位和步骤指导的测试场景。

📄 [查看 ROSES 框架介绍](./frameworks/ROSES.md)

### 2. LangGPT
**LangGPT 结构化提示词框架**

LangGPT 是一个全面的结构化提示词框架，包含角色、背景、目标、约束、技能、工作流程等要素。适合复杂的测试场景设计。

📄 [查看 LangGPT 框架介绍](./frameworks/LangGPT.md)

### 3. ICIO
**Instruction Context Input Data Output Indicator**

ICIO 框架强调指令、上下文、输入数据、输出和指标五个维度。适合需要明确输入输出和评估指标的测试场景。

📄 [查看 ICIO 框架介绍](./frameworks/ICIO.md)

### 4. CRISPE
**Capacity Role Insight Statement Personality Experiment**

CRISPE 框架包含能力、角色、洞察、陈述、个性和实验六个要素。适合需要深度分析和实验性测试的场景。

📄 [查看 CRISPE 框架介绍](./frameworks/CRISPE.md)

### 5. RISE
**Role Input Steps Expectation**

RISE 框架简洁明了，包含角色、输入、步骤和期望四个要素。适合快速构建测试提示词的场景。

📄 [查看 RISE 框架介绍](./frameworks/RISE.md)

## 📁 目录结构

```text
prompt-frameworks/
├── en/
│   ├── README.md                    # 英文总览
│   ├── framework-selection-guide.md # 英文框架选择指南
│   ├── top5-frameworks-intro.md     # 英文 TOP 5 框架介绍
│   ├── prompt-reviewer.md           # 英文 Prompt Reviewer
│   └── frameworks/                  # 英文框架详情
└── zh/
    ├── README.md                    # 本文件（中文）
    ├── framework-selection-guide.md # 中文框架选择指南
    ├── top5-frameworks-intro.md     # 中文 TOP 5 框架介绍
    ├── prompt-reviewer.md           # 中文 Prompt Reviewer
    └── frameworks/                  # 中文框架详情
```

## 🎯 使用指南

1. **浏览框架介绍**：查看 `frameworks/` 目录下的各个框架介绍文件
2. **选择合适的框架**：根据测试场景的特点选择最适合的框架
3. **查看实际应用**：在 `testing-types/` 目录下查看各测试类型的具体应用示例

## 📖 相关资源

- **测试类型提示词**：查看 `testing-types/` 目录，了解各测试类型在不同框架下的实际应用
- **框架版本**：每个测试类型都提供了 Standard-version 和 TOP 5 框架版本（ROSES-version, LangGPT-version, ICIO-version, CRISPE-version, RISE-version）

---

**最后更新**: 2025-01-26
