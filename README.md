<div align="right"><strong>中文</strong> | <strong><a href="./README_EN.md">English</a></strong></div>

# Awesome QA Prompt

<div align="center">
  <img src="https://inaodeng.com/prompts.svg" alt="Awesome QA Prompt" width="800"/>
</div>

[![Prompt Check](https://img.shields.io/github/actions/workflow/status/naodeng/awesome-qa-prompt/prompt-check.yml?branch=main&label=prompt%20check)](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/prompt-check.yml)
[![License: PolyForm Noncommercial 1.0.0](https://img.shields.io/badge/License-PolyForm%20Noncommercial%201.0.0-blue)](https://github.com/naodeng/awesome-qa-prompt/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/naodeng/awesome-qa-prompt?style=social)](https://github.com/naodeng/awesome-qa-prompt)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-支持项目-FFDD00?style=flat&logo=buy-me-a-coffee&logoColor=black)](https://inaodeng.com/prompts)

面向 QA 工作的 **Prompt Baseline**：一套可复制使用的结构化提示词合集，覆盖从需求分析到测试报告的常见测试场景。默认入口为各模块的 `Standard-version/`。

在线文档：[https://inaodeng.com/prompts](https://inaodeng.com/prompts)

---

## 目录

- [项目定位](#项目定位)
- [与 awesome-qa-skills 的区别](#与-awesome-qa-skills-的区别)
- [内容一览](#内容一览)
- [版本如何选择](#版本如何选择)
- [快速开始](#快速开始)
- [目录结构](#目录结构)
- [质量原则](#质量原则)
- [开发与贡献](#开发与贡献)
- [许可证与支持](#许可证与支持)

---

## 项目定位

本仓库维护的是 **提示词正文与变体**，而不是 AI 工具技能包。你可以：

1. 按测试类型或工作流找到对应模块
2. 打开 `Standard-version/`（或按需选择 Lite / 框架 / 平台场景版）
3. 复制 Prompt，补充真实项目上下文后，在常见 AI 助手中使用

适用于测试方案起草、用例设计、策略与报告初稿等场景；产出应再经人工校对后用于正式交付。

### 设计原则

- **可落地**：优先最小可执行结果，避免空泛模板
- **可追溯**：强调输入审计、假设标注与信息缺口
- **可信任**：禁止把未提供的指标、接口、环境写成确定事实
- **可扩展**：模块化组织，中英文与多版本可并行维护

---

## 与 awesome-qa-skills 的区别

| | Awesome QA Prompt（本仓库） | [Awesome QA Skills](https://github.com/naodeng/awesome-qa-skills) |
| --- | --- | --- |
| 定位 | Prompt Baseline：复制即用的提示词合集 | 可安装到 Cursor / Claude Code 等工具的技能包 |
| 用法 | 打开模块 → 选 `Standard-version` → 粘贴到对话 | 安装 skill 后通过 `@skill` 调用 |
| 形态 | 多框架 / 平台 Prompt 变体 | `SKILL.md` + 安装脚本体系 |
| 边界 | 不提供技能安装器 | 不是多框架 Prompt 变体合集 |

两者可互补：需要「粘贴即用的 Prompt」看本仓库；需要「装进 AI 工具的 Skill」看 skills 仓库。

---

## 内容一览

### 测试类型（15）

中文入口：`testing-types/zh/<模块>/`；英文入口：`testing-types/en/<模块>/`。每个模块默认推荐 `Standard-version/`。

| 模块 | 目录 | 用途简述 |
| --- | --- | --- |
| 需求分析 | [`requirements-analysis`](./testing-types/zh/requirements-analysis/) | 需求可测性分析、场景与风险梳理 |
| 测试用例编写 | [`test-case-writing`](./testing-types/zh/test-case-writing/) | 将场景转为可执行用例 |
| 测试用例评审 | [`test-case-reviewer`](./testing-types/zh/test-case-reviewer/) | 用例质量、覆盖与风险评审 |
| 功能测试 | [`functional-testing`](./testing-types/zh/functional-testing/) | 功能测试策略与场景设计 |
| 手工 / 探索性测试 | [`manual-testing`](./testing-types/zh/manual-testing/) | 探索测试与手工执行支持 |
| API 测试 | [`api-testing`](./testing-types/zh/api-testing/) | 接口测试策略与用例设计 |
| 自动化测试 | [`automation-testing`](./testing-types/zh/automation-testing/) | 自动化范围、分层与落地建议 |
| 性能测试 | [`performance-testing`](./testing-types/zh/performance-testing/) | 性能场景与指标（目标需用户提供） |
| 安全测试 | [`security-testing`](./testing-types/zh/security-testing/) | 安全测试范围与检查思路 |
| 移动端测试 | [`mobile-testing`](./testing-types/zh/mobile-testing/) | 移动端兼容、交互与专项关注点 |
| 可访问性测试 | [`accessibility-testing`](./testing-types/zh/accessibility-testing/) | 可访问性标准与验证要点 |
| 缺陷上报 | [`bug-reporting`](./testing-types/zh/bug-reporting/) | 缺陷报告结构与描述规范 |
| 测试报告 | [`test-reporting`](./testing-types/zh/test-reporting/) | 测试结果汇总与质量结论组织 |
| 测试策略 | [`test-strategy`](./testing-types/zh/test-strategy/) | 整体策略、范围与优先级 |
| AI 辅助测试 | [`ai-assisted-testing`](./testing-types/zh/ai-assisted-testing/) | AI 辅助测试的适用边界与用法 |

英文模块路径将 `zh` 换为 `en` 即可，例如 [`testing-types/en/functional-testing/`](./testing-types/en/functional-testing/)。

### 测试工作流（4）

| 工作流 | 中文 | 英文 |
| --- | --- | --- |
| 日常测试 | [`Workflows/zh/daily-testing-workflow.md`](./Workflows/zh/daily-testing-workflow.md) | [`Workflows/en/daily-testing-workflow.md`](./Workflows/en/daily-testing-workflow.md) |
| 迭代测试 | [`Workflows/zh/sprint-testing-workflow.md`](./Workflows/zh/sprint-testing-workflow.md) | [`Workflows/en/sprint-testing-workflow.md`](./Workflows/en/sprint-testing-workflow.md) |
| 发布测试 | [`Workflows/zh/release-testing-workflow.md`](./Workflows/zh/release-testing-workflow.md) | [`Workflows/en/release-testing-workflow.md`](./Workflows/en/release-testing-workflow.md) |
| AI 研发质量分析工作流 | [`Workflows/zh/ai-quality-analysis-workflow/README.md`](./Workflows/zh/ai-quality-analysis-workflow/README.md) | [`Workflows/en/ai-quality-analysis-workflow/README.md`](./Workflows/en/ai-quality-analysis-workflow/README.md) |

说明见 [`Workflows/zh/README.md`](./Workflows/zh/README.md)。

### 仓库规模（概览）

| 类别 | 说明 |
| --- | --- |
| 测试类型模块 | 15 个（中英各一套） |
| 工作流 | 4 个（中英各一份） |
| AI 质量分析角色与汇总提示词 | 86 个（中英文各 43 个） |
| Standard 提示词 | Full / Lite，部分模块另有 `all_round` / `Web` / `Mobile` |
| 框架变体 | ROSES、LangGPT、ICIO、CRISPE、RISE（完整版 + 精简版，含部分平台场景版） |

具体文件以仓库目录为准；提交前可用 `npm run check:all` 校验链接与格式。

---

## 版本如何选择

| 版本 | 适用场景 |
| --- | --- |
| **Standard Full** | 默认推荐；需要较完整的方法与输出结构 |
| **Standard Lite** | 输入有限，或只想快速得到初稿 |
| **框架变体** | 明确希望按 ROSES / LangGPT / ICIO / CRISPE / RISE 组织提示词时 |
| **平台场景版** | 需要区分全端 / Web / Mobile 时（目前部分模块提供） |

当前提供平台场景版的模块包括：需求分析、测试用例编写、功能测试、测试策略、手工测试、测试用例评审。

框架说明：[prompt-frameworks/zh/README.md](./prompt-frameworks/zh/README.md)

---

## 快速开始

### 方式一：在线文档

1. 打开 [https://inaodeng.com/prompts](https://inaodeng.com/prompts)
2. 选择测试类型或工作流
3. 优先选择 Standard 完整版；需要时再换 Lite / 框架 / 平台版
4. 复制 Prompt，附上真实需求、范围、环境与约束后使用

### 方式二：本地仓库

```bash
git clone https://github.com/naodeng/awesome-qa-prompt.git
cd awesome-qa-prompt
```

推荐路径示例（中文 · 功能测试 · Standard）：

`testing-types/zh/functional-testing/Standard-version/FunctionalTestingPrompt.md`

使用步骤：

1. 打开上述文件（或你的目标模块）
2. 若文件包含第一个 `---`，从其后复制；否则复制整个 Prompt 内容到 AI 助手
3. 在 Prompt 后补充真实项目上下文；缺失信息应先澄清或标注假设
4. 对生成结果做人工校对后再用于评审、执行或归档

---

## 目录结构

```text
awesome-qa-prompt/
├── README.md / README_EN.md
├── AGENTS.md
├── PROMPT_AUTHORING_STANDARD.md
├── CONTRIBUTING.md
├── testing-types/
│   ├── zh/<module>/          # README + Standard / 框架 / 平台变体
│   └── en/<module>/
├── Workflows/
│   ├── zh/
│   └── en/
├── prompt-frameworks/
│   ├── zh/
│   └── en/
├── examples/
├── scripts/                  # npm run check:* 校验脚本
└── future-updates/           # 规划中内容，默认不作为主入口
```

每个测试类型目录通常包含：

- `README.md`：模块说明与版本选择
- `Standard-version/`：默认推荐
- `ROSES-version/` / `LangGPT-version/` / `ICIO-version/` / `CRISPE-version/` / `RISE-version/`

---

## 质量原则

贡献或改写 Prompt 时，请遵循 [PROMPT_AUTHORING_STANDARD.md](./PROMPT_AUTHORING_STANDARD.md)。协作约定见 [AGENTS.md](./AGENTS.md)。

要点摘要：

- 默认入口指向 `Standard-version/`，链接必须真实可打开
- 先做输入完整性检查；信息不足时降级输出并标注假设
- 禁止编造需求、接口、环境、指标、日期、审批结论等
- 未提供的 KPI / SLA / 覆盖率等使用「待确认 / 示例值」，不得写成既定目标

---

## 开发与贡献

```bash
npm install
npm run check:all
```

- 详细贡献流程：[CONTRIBUTING.md](./CONTRIBUTING.md) / [CONTRIBUTING_EN.md](./CONTRIBUTING_EN.md)
- 问题反馈：[Issues](https://github.com/naodeng/awesome-qa-prompt/issues)
- 讨论：[Discussions](https://github.com/naodeng/awesome-qa-prompt/discussions)

修改 Prompt 或模块 README 后，请至少运行 `npm run check:all`，并确认中英文相关版本是否需要同步。

---

## 许可证与支持

- 许可证：[PolyForm Noncommercial License 1.0.0](./LICENSE)（非商业性使用）
- 赞助：[Buy Me a Coffee](https://www.buymeacoffee.com/naodeng) · [Ko-fi](https://ko-fi.com/naodeng) · [在线文档赞助页](https://inaodeng.com/prompts)

### 相关链接

- 在线文档：https://inaodeng.com/prompts
- 本仓库：https://github.com/naodeng/awesome-qa-prompt
- Skills 仓库：https://github.com/naodeng/awesome-qa-skills
