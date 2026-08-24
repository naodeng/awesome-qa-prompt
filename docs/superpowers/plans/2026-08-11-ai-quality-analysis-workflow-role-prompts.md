# AI 研发质量分析工作流 角色提示词实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在 `awesome-qa-prompt` 中交付覆盖 8 个阶段、5 类角色的中英文 AI 研发质量分析工作流 Prompt Baseline，共 86 份可独立复制使用的 Prompt。

**Architecture:** 在 `Workflows/zh/ai-quality-analysis-workflow/` 和 `Workflows/en/ai-quality-analysis-workflow/` 下按阶段组织文件，每个参与角色拥有完整独立 Prompt，每个阶段拥有独立汇总 Prompt。中英文文件名和行为镜像，静态检查负责约束输入审计、禁止编造、降级策略、执行指令和 README 链接。

**Tech Stack:** Markdown、Node.js ESM、仓库现有 `scripts/check-prompts.mjs`、`scripts/check-markdown-format.mjs` 和 npm scripts。

## Global Constraints

- 设计依据：`docs/superpowers/specs/2026-08-11-ai-quality-analysis-workflow-role-prompts-design.md`。
- 每份角色 Prompt 必须独立可用，不依赖运行时拼装或公共片段。
- 中文和英文必须保持相同路径、文件名、参与条件、阻塞条件和输出语义。
- 每份 Prompt 必须覆盖输入审计、禁止编造、降级策略、执行指令、角色边界、Markdown 输出和交付前自检。
- 只读取对应阶段声明的输入，不默认注入整条流程历史。
- 必需输入缺失时阻塞；可选输入缺失时继续并说明影响；输入冲突时保留冲突。
- `◇` 角色必须先输出“参与 / 不参与 / 信息不足”；不参与时停止专业分析。
- PM 只提供范围、进度、资源、依赖、里程碑和行动信息，不得修改质量事实。
- 汇总 Prompt 必须保留角色来源、Artifact 版本、证据和有依据的少数高风险意见。
- 评审 Prompt 只给建议结论，Human Task 才能最终通过或驳回。
- 不引入 `SKILL.md`、安装脚本、Prompt 运行引擎、测试自动执行或第二期流程。
- 每个任务仅暂存该任务列出的文件，不得覆盖或回退无关工作区改动。

---

## 文件结构总览

新增阶段目录：

```text
Workflows/zh/ai-quality-analysis-workflow/
├── README.md
├── 01-requirements-analysis/
├── 02-test-strategy/
├── 03-test-strategy-review/
├── 04-code-review/
├── 05-test-case-writing/
├── 06-test-case-review/
├── 07-test-report/
└── 08-test-report-review/

Workflows/en/ai-quality-analysis-workflow/
└── 与中文目录保持相同的 8 个阶段和文件名
```

每个阶段目录包含 `README.md` 和 `Standard-version/*.md`。阶段 Prompt 文件在对应任务中逐一列出。

### Task 1: 扩展工作流 Prompt 静态校验契约

**Files:**
- Modify: `scripts/check-prompts.mjs`

**Interfaces:**
- Consumes: 仓库根目录下的 Markdown 文件树。
- Produces: 对 `testing-types/**`、`Workflows/zh/**/Standard-version/*.md` 与 `Workflows/en/**/Standard-version/*.md` 的统一守卫规则检查；对新增工作流 README 的本地 Markdown 链接检查。

- [ ] **Step 1: 扩展 Prompt 识别函数**

将守卫规则适用范围扩展为：

```js
function isPromptFile(file) {
  const normalized = rel(file).replaceAll("\\", "/");
  return (
    normalized.includes("/Standard-version/") &&
    (normalized.startsWith("testing-types/") || normalized.startsWith("Workflows/"))
  );
}
```

- [ ] **Step 2: 扩展 Markdown 扫描范围**

`walk()` 必须纳入 `Workflows/`，`checkPromptGuardrails()` 使用 `isPromptFile(file)` 判断；README 链接检查继续跳过 HTTP 和锚点，只解析真实本地 `.md` 目标。

- [ ] **Step 3: 同时识别中英文必备结构**

守卫检查接受以下等价标题：

```js
const hasGuardrails =
  text.includes("## 使用约束与降级规则") ||
  text.includes("## Guardrails And Degradation Rules") ||
  text.includes("输入完整性检查") ||
  text.includes("Input Completeness Check");

const hasExecution =
  text.includes("## 执行指令") ||
  text.includes("## Execution Instructions") ||
  text.includes("先进行输入完整性检查") ||
  text.includes("Start with an input completeness check");
```

- [ ] **Step 4: 运行现有基线检查**

Run: `npm run check:all`

Expected: `Prompt checks passed.` 且 Markdown 格式检查通过；此时尚未新增工作流 Prompt，但现有文件不得回归。

- [ ] **Step 5: 提交校验契约**

```bash
git add scripts/check-prompts.mjs
git commit -m "test: validate workflow prompt guardrails"
```

### Task 2: 实现需求分析阶段中英文 Prompt

**Files:**
- Create: `Workflows/zh/ai-quality-analysis-workflow/01-requirements-analysis/README.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/01-requirements-analysis/Standard-version/ProductExpertRequirementsAnalysisPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/01-requirements-analysis/Standard-version/QAExpertRequirementsAnalysisPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/01-requirements-analysis/Standard-version/UIUXExpertRequirementsAnalysisPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/01-requirements-analysis/Standard-version/TechnicalExpertRequirementsAnalysisPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/01-requirements-analysis/Standard-version/RequirementsAnalysisSynthesisPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/01-requirements-analysis/README.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/01-requirements-analysis/Standard-version/ProductExpertRequirementsAnalysisPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/01-requirements-analysis/Standard-version/QAExpertRequirementsAnalysisPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/01-requirements-analysis/Standard-version/UIUXExpertRequirementsAnalysisPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/01-requirements-analysis/Standard-version/TechnicalExpertRequirementsAnalysisPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/01-requirements-analysis/Standard-version/RequirementsAnalysisSynthesisPrompt.md`

**Interfaces:**
- Consumes: 需求文档；可选的交互原型图和原始需求。
- Produces: 4 份独立角色报告和 1 份可追溯的需求分析汇总报告。

- [ ] **Step 1: 编写中文阶段 README**

列出阶段目标、允许输入、5 份 Prompt 的适用角色、推荐调用顺序“4 份角色分析 → 汇总”，并链接每个真实文件。

- [ ] **Step 2: 编写 4 份中文角色 Prompt**

所有文件使用统一 12 节结构。专属分析范围分别为：产品负责业务目标、用户价值、流程、规则、范围和验收；QA 负责可测性、歧义、异常、边界和测试风险；UI/UX 负责信息架构、任务流、交互状态、跨端和可访问性；技术负责可行性、系统边界、接口、数据、安全、性能和可观测性。

- [ ] **Step 3: 编写中文汇总 Prompt**

输出必须包含输入审计、角色结论索引、共识、互补意见、冲突、风险、待确认项和来源追踪；不得引入四份角色报告之外的新事实。

- [ ] **Step 4: 创建英文镜像**

逐文件翻译并保持输入、阻塞、角色边界、章节和输出字段语义一致；英文不是摘要版。

- [ ] **Step 5: 验证阶段文件**

Run: `npm run check:all`

Expected: 两项检查通过；以下命令输出 `10`：

```bash
find Workflows/zh/ai-quality-analysis-workflow/01-requirements-analysis Workflows/en/ai-quality-analysis-workflow/01-requirements-analysis -path '*/Standard-version/*.md' | wc -l
```

- [ ] **Step 6: 提交需求分析阶段**

```bash
git add Workflows/zh/ai-quality-analysis-workflow/01-requirements-analysis Workflows/en/ai-quality-analysis-workflow/01-requirements-analysis
git commit -m "feat: add role prompts for requirements analysis"
```

### Task 3: 实现测试策略阶段中英文 Prompt

**Files:**
- Create: `Workflows/zh/ai-quality-analysis-workflow/02-test-strategy/README.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/02-test-strategy/Standard-version/ProductExpertTestStrategyPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/02-test-strategy/Standard-version/QAExpertTestStrategyPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/02-test-strategy/Standard-version/UIUXExpertTestStrategyPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/02-test-strategy/Standard-version/TechnicalExpertTestStrategyPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/02-test-strategy/Standard-version/PMExpertTestStrategyPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/02-test-strategy/Standard-version/TestStrategySynthesisPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/02-test-strategy/README.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/02-test-strategy/Standard-version/ProductExpertTestStrategyPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/02-test-strategy/Standard-version/QAExpertTestStrategyPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/02-test-strategy/Standard-version/UIUXExpertTestStrategyPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/02-test-strategy/Standard-version/TechnicalExpertTestStrategyPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/02-test-strategy/Standard-version/PMExpertTestStrategyPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/02-test-strategy/Standard-version/TestStrategySynthesisPrompt.md`

**Interfaces:**
- Consumes: 需求文档、需求分析报告、代码版本或仓库链接；可选的原型、原始需求和技术方案。
- Produces: 5 份角色输入和 1 份区分质量事实、策略建议、项目约束的测试策略。

- [ ] **Step 1: 编写中英文阶段 README**

列出 6 份 Prompt、输入基线和调用顺序，明确 UI/UX 按内容或风险参与，PM 只提供管理输入。

- [ ] **Step 2: 编写产品、QA 和技术 Prompt 的中英文镜像**

产品聚焦业务关键路径和验收重点；QA 聚焦范围、类型、覆盖、环境、数据、证据及准入退出建议；技术聚焦测试层级、接口、集成、非功能、可测性和可观测性。

- [ ] **Step 3: 编写 UI/UX 条件 Prompt 和 PM 输入 Prompt 的中英文镜像**

UI/UX 必须先判断是否存在高交互、跨端、视觉或无障碍风险；PM 输出仅允许范围、排期、资源、依赖、里程碑和行动建议。

- [ ] **Step 4: 编写中英文汇总 Prompt**

策略结构包含范围、风险、测试层级与类型、环境与数据、覆盖和证据、项目约束、缺口及待确认项；任何未提供指标统一标记为“待确认”，英文标记为“To be confirmed”。

- [ ] **Step 5: 验证并提交**

Run: `npm run check:all`

Expected: 全部通过；双语 Standard Prompt 数量为 `12`。

```bash
git add Workflows/zh/ai-quality-analysis-workflow/02-test-strategy Workflows/en/ai-quality-analysis-workflow/02-test-strategy
git commit -m "feat: add role prompts for test strategy"
```

### Task 4: 实现测试策略评审阶段中英文 Prompt

**Files:**
- Create: `Workflows/zh/ai-quality-analysis-workflow/03-test-strategy-review/README.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/03-test-strategy-review/Standard-version/ProductExpertTestStrategyReviewPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/03-test-strategy-review/Standard-version/QAExpertTestStrategyReviewPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/03-test-strategy-review/Standard-version/UIUXExpertTestStrategyReviewPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/03-test-strategy-review/Standard-version/TechnicalExpertTestStrategyReviewPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/03-test-strategy-review/Standard-version/PMExpertTestStrategyReviewPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/03-test-strategy-review/Standard-version/TestStrategyReviewSynthesisPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/03-test-strategy-review/README.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/03-test-strategy-review/Standard-version/ProductExpertTestStrategyReviewPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/03-test-strategy-review/Standard-version/QAExpertTestStrategyReviewPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/03-test-strategy-review/Standard-version/UIUXExpertTestStrategyReviewPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/03-test-strategy-review/Standard-version/TechnicalExpertTestStrategyReviewPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/03-test-strategy-review/Standard-version/PMExpertTestStrategyReviewPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/03-test-strategy-review/Standard-version/TestStrategyReviewSynthesisPrompt.md`

**Interfaces:**
- Consumes: 测试策略及其来源和版本。
- Produces: 5 份评审输入和 1 份供 Human Task 决策的测试策略评审报告。

- [ ] **Step 1: 编写中英文 README 和 5 份角色 Prompt**

产品检查业务与验收覆盖；QA 检查完整性、风险、可执行性、证据和门槛；UI/UX 按条件检查体验策略；技术检查环境、数据、依赖和非功能可行性；PM 只检查计划可行性。

- [ ] **Step 2: 编写中英文汇总 Prompt**

只允许输出“建议通过 / 建议修订 / 信息不足”，列出阻塞项、修改项、角色来源、证据和未解决分歧；明确最终决定属于 Human Task。

- [ ] **Step 3: 验证并提交**

Run: `npm run check:all`

Expected: 全部通过；双语 Standard Prompt 数量为 `12`。

```bash
git add Workflows/zh/ai-quality-analysis-workflow/03-test-strategy-review Workflows/en/ai-quality-analysis-workflow/03-test-strategy-review
git commit -m "feat: add role prompts for test strategy review"
```

### Task 5: 实现代码评审阶段中英文 Prompt

**Files:**
- Create: `Workflows/zh/ai-quality-analysis-workflow/04-code-review/README.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/04-code-review/Standard-version/ProductExpertCodeReviewPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/04-code-review/Standard-version/QAExpertCodeReviewPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/04-code-review/Standard-version/UIUXExpertCodeReviewPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/04-code-review/Standard-version/TechnicalExpertCodeReviewPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/04-code-review/Standard-version/CodeReviewSynthesisPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/04-code-review/README.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/04-code-review/Standard-version/ProductExpertCodeReviewPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/04-code-review/Standard-version/QAExpertCodeReviewPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/04-code-review/Standard-version/UIUXExpertCodeReviewPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/04-code-review/Standard-version/TechnicalExpertCodeReviewPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/04-code-review/Standard-version/CodeReviewSynthesisPrompt.md`

**Interfaces:**
- Consumes: 需求、需求分析、可选技术方案，以及必需的明确代码版本、Diff 或可读取仓库内容。
- Produces: 4 份有证据位置的角色评审报告和 1 份去重、分级的代码评审报告。

- [ ] **Step 1: 编写中英文 README 和角色 Prompt**

产品与 UI/UX 是条件参与；QA 聚焦缺陷、回归、可测试性和测试缺口；技术聚焦逻辑、架构、接口、数据、安全、性能、兼容性、维护性和可观测性。

- [ ] **Step 2: 固化代码输入阻塞规则**

所有角色和汇总 Prompt 都必须声明：无法读取明确代码版本、Diff 或仓库内容时停止评审，输出阻塞原因和所需输入，不根据文件名或需求猜测实现。

- [ ] **Step 3: 编写中英文汇总 Prompt**

按严重度合并问题，保留文件、位置、触发条件、影响、依据、修复方向和角色来源；没有证据的位置标记信息缺口，不伪造行号。

- [ ] **Step 4: 验证并提交**

Run: `npm run check:all`

Expected: 全部通过；双语 Standard Prompt 数量为 `10`。

```bash
git add Workflows/zh/ai-quality-analysis-workflow/04-code-review Workflows/en/ai-quality-analysis-workflow/04-code-review
git commit -m "feat: add role prompts for code review"
```

### Task 6: 实现测试用例编写阶段中英文 Prompt

**Files:**
- Create: `Workflows/zh/ai-quality-analysis-workflow/05-test-case-writing/README.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/05-test-case-writing/Standard-version/ProductExpertTestCaseWritingPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/05-test-case-writing/Standard-version/QAExpertTestCaseWritingPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/05-test-case-writing/Standard-version/UIUXExpertTestCaseWritingPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/05-test-case-writing/Standard-version/TechnicalExpertTestCaseWritingPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/05-test-case-writing/Standard-version/TestCaseWritingSynthesisPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/05-test-case-writing/README.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/05-test-case-writing/Standard-version/ProductExpertTestCaseWritingPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/05-test-case-writing/Standard-version/QAExpertTestCaseWritingPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/05-test-case-writing/Standard-version/UIUXExpertTestCaseWritingPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/05-test-case-writing/Standard-version/TechnicalExpertTestCaseWritingPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/05-test-case-writing/Standard-version/TestCaseWritingSynthesisPrompt.md`

**Interfaces:**
- Consumes: 需求、需求分析、可选技术方案、测试策略、策略评审和代码评审。
- Produces: 4 份角色用例建议和 1 份去重、编号、可追溯的测试用例集。

- [ ] **Step 1: 编写中英文 README 和角色 Prompt**

产品、UI/UX 按条件参与；QA 负责可执行用例主体；技术补充接口、数据、集成、安全、性能和故障处理用例。所有用例字段至少包含标识、来源、前置条件、步骤、预期结果、优先级、风险和假设。

- [ ] **Step 2: 编写中英文汇总 Prompt**

按业务能力和风险合并、去重和编号；建立需求、风险、代码发现与用例之间的追踪；不得把角色建议自动扩写成无依据的接口、字段或测试数据。

- [ ] **Step 3: 验证并提交**

Run: `npm run check:all`

Expected: 全部通过；双语 Standard Prompt 数量为 `10`。

```bash
git add Workflows/zh/ai-quality-analysis-workflow/05-test-case-writing Workflows/en/ai-quality-analysis-workflow/05-test-case-writing
git commit -m "feat: add role prompts for test case writing"
```

### Task 7: 实现测试用例 Review 阶段中英文 Prompt

**Files:**
- Create: `Workflows/zh/ai-quality-analysis-workflow/06-test-case-review/README.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/06-test-case-review/Standard-version/ProductExpertTestCaseReviewPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/06-test-case-review/Standard-version/QAExpertTestCaseReviewPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/06-test-case-review/Standard-version/UIUXExpertTestCaseReviewPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/06-test-case-review/Standard-version/TechnicalExpertTestCaseReviewPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/06-test-case-review/Standard-version/TestCaseReviewSynthesisPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/06-test-case-review/README.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/06-test-case-review/Standard-version/ProductExpertTestCaseReviewPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/06-test-case-review/Standard-version/QAExpertTestCaseReviewPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/06-test-case-review/Standard-version/UIUXExpertTestCaseReviewPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/06-test-case-review/Standard-version/TechnicalExpertTestCaseReviewPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/06-test-case-review/Standard-version/TestCaseReviewSynthesisPrompt.md`

**Interfaces:**
- Consumes: 需求到代码评审的规定产物，以及测试用例及其版本。
- Produces: 4 份角色评审报告和 1 份供 Human Task 决策的测试用例评审报告。

- [ ] **Step 1: 编写中英文 README、角色 Prompt 和汇总 Prompt**

产品检查业务规则和旅程；QA 检查正确性、完整性、可执行性、优先级和重复遗漏；UI/UX 检查交互、跨端和可访问性；技术检查接口、数据、异常、集成和非功能风险。汇总输出阻塞问题、补充用例、修改建议、证据和角色来源。

- [ ] **Step 2: 固化 Human Task 边界**

汇总 Prompt 只能给“建议通过 / 建议修订 / 信息不足”，不得写成已审批、已签字或最终通过。

- [ ] **Step 3: 验证并提交**

Run: `npm run check:all`

Expected: 全部通过；双语 Standard Prompt 数量为 `10`。

```bash
git add Workflows/zh/ai-quality-analysis-workflow/06-test-case-review Workflows/en/ai-quality-analysis-workflow/06-test-case-review
git commit -m "feat: add role prompts for test case review"
```

### Task 8: 实现测试报告阶段中英文 Prompt

**Files:**
- Create: `Workflows/zh/ai-quality-analysis-workflow/07-test-report/README.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/07-test-report/Standard-version/ProductExpertTestReportPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/07-test-report/Standard-version/QAExpertTestReportPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/07-test-report/Standard-version/UIUXExpertTestReportPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/07-test-report/Standard-version/TechnicalExpertTestReportPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/07-test-report/Standard-version/TestReportSynthesisPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/07-test-report/README.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/07-test-report/Standard-version/ProductExpertTestReportPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/07-test-report/Standard-version/QAExpertTestReportPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/07-test-report/Standard-version/UIUXExpertTestReportPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/07-test-report/Standard-version/TechnicalExpertTestReportPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/07-test-report/Standard-version/TestReportSynthesisPrompt.md`

**Interfaces:**
- Consumes: 测试策略、策略评审、代码评审、测试用例、用例评审，以及可选执行报告和缺陷报告。
- Produces: 4 份证据分析和 1 份不得夸大执行状态的测试报告。

- [ ] **Step 1: 编写中英文 README 和角色 Prompt**

产品与 UI/UX 按条件参与；QA 分析覆盖、结果、缺陷、阻塞项和剩余风险；技术分析稳定性、性能、安全、环境和可观测性证据。

- [ ] **Step 2: 固化证据不足规则**

所有角色和汇总 Prompt 都声明：执行报告和缺陷报告同时缺失时，只能输出“未执行或证据不足”，不得输出“通过”“满足发布条件”或等价结论。

- [ ] **Step 3: 编写中英文汇总 Prompt**

区分已执行事实、未执行范围、失败与阻塞、缺陷、剩余风险、证据缺口和建议行动；数字只能来自输入并标注来源。

- [ ] **Step 4: 验证并提交**

Run: `npm run check:all`

Expected: 全部通过；双语 Standard Prompt 数量为 `10`。

```bash
git add Workflows/zh/ai-quality-analysis-workflow/07-test-report Workflows/en/ai-quality-analysis-workflow/07-test-report
git commit -m "feat: add role prompts for test reporting"
```

### Task 9: 实现测试报告 Review 阶段中英文 Prompt

**Files:**
- Create: `Workflows/zh/ai-quality-analysis-workflow/08-test-report-review/README.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/08-test-report-review/Standard-version/ProductExpertTestReportReviewPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/08-test-report-review/Standard-version/QAExpertTestReportReviewPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/08-test-report-review/Standard-version/UIUXExpertTestReportReviewPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/08-test-report-review/Standard-version/TechnicalExpertTestReportReviewPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/08-test-report-review/Standard-version/PMExpertTestReportReviewPrompt.md`
- Create: `Workflows/zh/ai-quality-analysis-workflow/08-test-report-review/Standard-version/TestReportReviewSynthesisPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/08-test-report-review/README.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/08-test-report-review/Standard-version/ProductExpertTestReportReviewPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/08-test-report-review/Standard-version/QAExpertTestReportReviewPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/08-test-report-review/Standard-version/UIUXExpertTestReportReviewPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/08-test-report-review/Standard-version/TechnicalExpertTestReportReviewPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/08-test-report-review/Standard-version/PMExpertTestReportReviewPrompt.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/08-test-report-review/Standard-version/TestReportReviewSynthesisPrompt.md`

**Interfaces:**
- Consumes: 流程规定的全部前序产物和测试报告。
- Produces: 5 份角色评审输入和 1 份供 Human Task 最终确认的测试报告评审报告。

- [ ] **Step 1: 编写中英文 README 和 5 份角色 Prompt**

产品检查业务验收证据；QA 检查结论、缺陷和剩余风险；UI/UX 检查体验证据；技术检查技术风险、环境限制和非功能证据；PM 只整理行动项、负责人、依赖和时间安排。

- [ ] **Step 2: 编写中英文汇总 Prompt**

只允许“建议通过 / 建议补充证据 / 建议终止评审”；若测试报告为“未执行或证据不足”，不得改写为通过，只能要求证据、记录风险或建议终止。

- [ ] **Step 3: 验证并提交**

Run: `npm run check:all`

Expected: 全部通过；双语 Standard Prompt 数量为 `12`。

```bash
git add Workflows/zh/ai-quality-analysis-workflow/08-test-report-review Workflows/en/ai-quality-analysis-workflow/08-test-report-review
git commit -m "feat: add role prompts for test report review"
```

### Task 10: 补齐工作流总入口与双语文档

**Files:**
- Create: `Workflows/zh/ai-quality-analysis-workflow/README.md`
- Create: `Workflows/en/ai-quality-analysis-workflow/README.md`
- Modify: `Workflows/zh/README.md`
- Modify: `Workflows/en/README.md`
- Modify: `README.md`
- Modify: `README_EN.md`
- Modify: `PROMPT_AUTHORING_STANDARD.md`
- Modify: `PROMPT_AUTHORING_STANDARD_EN.md`

**Interfaces:**
- Consumes: Tasks 2—9 创建的全部阶段目录和 Prompt。
- Produces: 可从仓库中英文入口导航到工作流、阶段和角色 Prompt 的完整文档链路。

- [ ] **Step 1: 编写中英文工作流总 README**

包含 MVP 目标、8 阶段顺序、角色矩阵、43 份单语言 Prompt 索引、调用规则、必需与可选输入规则、Human Task 边界和“证据不足”规则。所有链接使用真实相对路径。

- [ ] **Step 2: 更新中英文 Workflows 入口**

新增“AI 研发质量分析工作流”条目，说明适用场景、8 阶段、五角色和进入工作流 README 的链接。

- [ ] **Step 3: 更新仓库中英文总入口**

把工作流数量从 4 调整为 5；在工作流章节、目录树和统计表增加 AI 研发质量分析工作流，保持中文和英文事实一致。

- [ ] **Step 4: 更新中英文 Prompt 编写标准**

将 `Workflows/zh/*/Standard-version/*.md` 和 `Workflows/en/*/Standard-version/*.md` 纳入适用范围，补充角色 Prompt 的独立性、条件参与、汇总追溯和 Human Task 边界。

- [ ] **Step 5: 验证并提交文档入口**

Run: `npm run check:all`

Expected: 全部通过，所有新增 README 链接存在。

```bash
git add Workflows/zh/ai-quality-analysis-workflow/README.md Workflows/en/ai-quality-analysis-workflow/README.md Workflows/zh/README.md Workflows/en/README.md README.md README_EN.md PROMPT_AUTHORING_STANDARD.md PROMPT_AUTHORING_STANDARD_EN.md
git commit -m "docs: add AI quality analysis workflow navigation"
```

### Task 11: 执行完整性、镜像和边界验收

**Files:**
- Modify only if a check exposes a defect: files created or modified in Tasks 1—10.

**Interfaces:**
- Consumes: 完整实现。
- Produces: 通过数量、镜像、守卫规则、占位符和格式检查的可交付工作树。

- [ ] **Step 1: 验证 Prompt 总数**

Run:

```bash
find Workflows/zh/ai-quality-analysis-workflow -path '*/Standard-version/*.md' | wc -l
find Workflows/en/ai-quality-analysis-workflow -path '*/Standard-version/*.md' | wc -l
```

Expected: 两条命令均输出 `43`。

- [ ] **Step 2: 验证中英文路径镜像**

Run:

```bash
diff -u <(find Workflows/zh/ai-quality-analysis-workflow -type f | sed 's#Workflows/zh/#Workflows/LANG/#' | sort) <(find Workflows/en/ai-quality-analysis-workflow -type f | sed 's#Workflows/en/#Workflows/LANG/#' | sort)
```

Expected: 无输出，退出码为 `0`。

- [ ] **Step 3: 扫描未完成占位符和越权表述**

Run:

```bash
rg -n 'FIXME|待补充内容|未完成章节|立即通过|自动批准|automatically approve' Workflows/zh/ai-quality-analysis-workflow Workflows/en/ai-quality-analysis-workflow
```

Expected: 不得出现未完成内容或 AI 自动审批表述；命令无输出。

- [ ] **Step 4: 验证关键安全边界存在**

Run:

```bash
rg -l '未执行或证据不足' Workflows/zh/ai-quality-analysis-workflow/07-test-report Workflows/zh/ai-quality-analysis-workflow/08-test-report-review
rg -l 'Human Task' Workflows/zh/ai-quality-analysis-workflow/03-test-strategy-review Workflows/zh/ai-quality-analysis-workflow/06-test-case-review Workflows/zh/ai-quality-analysis-workflow/08-test-report-review
rg -l '质量事实' Workflows/zh/ai-quality-analysis-workflow/02-test-strategy/Standard-version/PMExpertTestStrategyPrompt.md Workflows/zh/ai-quality-analysis-workflow/03-test-strategy-review/Standard-version/PMExpertTestStrategyReviewPrompt.md Workflows/zh/ai-quality-analysis-workflow/08-test-report-review/Standard-version/PMExpertTestReportReviewPrompt.md
```

Expected: 每组命令列出其范围内所有应包含该边界的角色、汇总或 PM 文件；人工核对没有遗漏。

- [ ] **Step 5: 运行最终仓库检查**

Run:

```bash
git diff --check
npm run check:all
git status --short
```

Expected: 差异检查无输出；Prompt 和 Markdown 格式检查通过；状态仅包含本任务修复且尚未提交的文件，或为空。

- [ ] **Step 6: 提交验收修复（仅在 Step 1—5 实际产生修复时）**

```bash
git add Workflows README.md README_EN.md PROMPT_AUTHORING_STANDARD.md PROMPT_AUTHORING_STANDARD_EN.md scripts/check-prompts.mjs
git commit -m "fix: align AI quality workflow prompt baseline"
```
