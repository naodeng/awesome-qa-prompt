# AI 研发质量分析工作流

[English](../../en/ai-quality-analysis-workflow/README.md) | 简体中文

## MVP 目标

本工作流用 43 份可复制使用的中文 Prompt，把需求分析、测试策略、评审、代码评审、测试用例和测试报告串成一条可追溯的质量分析链路。每个阶段先由专业角色独立产出，再由阶段汇总 Prompt 保留共识、分歧、证据来源和信息缺口。

工作流只生成分析、建议和供人工决策的材料，不执行测试，不替代审批、发布、豁免或风险接受，也不把计划覆盖写成实际执行结果。

## 版本选择

当前工作流仅提供 Standard 版本（`Standard-version`），默认选择该版本；不假定存在其他版本。

## 8 阶段顺序

| 阶段 | 目标 | 阶段入口 |
| --- | --- | --- |
| 1. 需求分析 | 独立分析需求质量并形成可追溯汇总 | [进入阶段](01-requirements-analysis/README.md) |
| 2. 测试策略 | 区分质量事实、策略建议和项目约束 | [进入阶段](02-test-strategy/README.md) |
| 3. 测试策略评审 | 形成供 Human Task 决策的策略评审建议 | [进入阶段](03-test-strategy-review/README.md) |
| 4. 代码评审 | 基于可读取且版本明确的代码形成分级发现 | [进入阶段](04-code-review/README.md) |
| 5. 测试用例编写 | 生成可执行、去重且可追溯的测试用例集 | [进入阶段](05-test-case-writing/README.md) |
| 6. 测试用例评审 | 独立评审用例并汇总阻塞、遗漏和修改建议 | [进入阶段](06-test-case-review/README.md) |
| 7. 测试报告 | 严格区分已执行事实、未执行范围和证据缺口 | [进入阶段](07-test-report/README.md) |
| 8. 测试报告评审 | 形成供 Human Task 最终确认的评审建议 | [进入阶段](08-test-report-review/README.md) |

按顺序使用时，后一阶段必须引用已锁定版本的上游 Artifact。若实际流程跳过某阶段，必须显式记录跳过原因、缺失 Artifact 和对后续结论的影响。

## 角色矩阵

图例：`参与` 表示默认参与；`条件参与` 表示先依据输入判断参与、不参与或待确认；`输入` 表示 PM 仅提供项目管理信息；`—` 表示该阶段没有该角色 Prompt。

| 阶段 | 产品 | QA | UI/UX | 技术 | PM | 汇总 |
| --- | --- | --- | --- | --- | --- | --- |
| 1. 需求分析 | 参与 | 参与 | 参与 | 参与 | — | 1 份 |
| 2. 测试策略 | 参与 | 参与 | 条件参与 | 参与 | 输入 | 1 份 |
| 3. 测试策略评审 | 参与 | 参与 | 条件参与 | 参与 | 输入 | 1 份 |
| 4. 代码评审 | 条件参与 | 参与 | 条件参与 | 参与 | — | 1 份 |
| 5. 测试用例编写 | 条件参与 | 参与 | 条件参与 | 参与 | — | 1 份 |
| 6. 测试用例评审 | 参与 | 参与 | 参与 | 参与 | — | 1 份 |
| 7. 测试报告 | 条件参与 | 参与 | 条件参与 | 参与 | — | 1 份 |
| 8. 测试报告评审 | 参与 | 参与 | 参与 | 参与 | 输入 | 1 份 |

角色 Prompt 必须独立运行，不得读取、复述或推测其他角色报告。PM 只处理项目管理信息，不覆盖质量事实、风险等级、测试优先级或技术判断。跨角色去重、冲突保留和结论汇总由对应阶段的汇总 Prompt 完成。

## 43 份 Prompt 索引

### 1. 需求分析（5）

- [产品专家需求分析 Prompt](01-requirements-analysis/Standard-version/ProductExpertRequirementsAnalysisPrompt.md)
- [QA 专家需求分析 Prompt](01-requirements-analysis/Standard-version/QAExpertRequirementsAnalysisPrompt.md)
- [UI/UX 专家需求分析 Prompt](01-requirements-analysis/Standard-version/UIUXExpertRequirementsAnalysisPrompt.md)
- [技术专家需求分析 Prompt](01-requirements-analysis/Standard-version/TechnicalExpertRequirementsAnalysisPrompt.md)
- [需求分析汇总 Prompt](01-requirements-analysis/Standard-version/RequirementsAnalysisSynthesisPrompt.md)

### 2. 测试策略（6）

- [产品专家测试策略 Prompt](02-test-strategy/Standard-version/ProductExpertTestStrategyPrompt.md)
- [QA 专家测试策略 Prompt](02-test-strategy/Standard-version/QAExpertTestStrategyPrompt.md)
- [UI/UX 专家测试策略 Prompt](02-test-strategy/Standard-version/UIUXExpertTestStrategyPrompt.md)
- [技术专家测试策略 Prompt](02-test-strategy/Standard-version/TechnicalExpertTestStrategyPrompt.md)
- [PM 专家测试策略输入 Prompt](02-test-strategy/Standard-version/PMExpertTestStrategyPrompt.md)
- [测试策略汇总 Prompt](02-test-strategy/Standard-version/TestStrategySynthesisPrompt.md)

### 3. 测试策略评审（6）

- [产品专家测试策略评审 Prompt](03-test-strategy-review/Standard-version/ProductExpertTestStrategyReviewPrompt.md)
- [QA 专家测试策略评审 Prompt](03-test-strategy-review/Standard-version/QAExpertTestStrategyReviewPrompt.md)
- [UI/UX 专家测试策略评审 Prompt](03-test-strategy-review/Standard-version/UIUXExpertTestStrategyReviewPrompt.md)
- [技术专家测试策略评审 Prompt](03-test-strategy-review/Standard-version/TechnicalExpertTestStrategyReviewPrompt.md)
- [PM 专家测试策略评审 Prompt](03-test-strategy-review/Standard-version/PMExpertTestStrategyReviewPrompt.md)
- [测试策略评审汇总 Prompt](03-test-strategy-review/Standard-version/TestStrategyReviewSynthesisPrompt.md)

### 4. 代码评审（5）

- [产品专家代码评审 Prompt](04-code-review/Standard-version/ProductExpertCodeReviewPrompt.md)
- [QA 专家代码评审 Prompt](04-code-review/Standard-version/QAExpertCodeReviewPrompt.md)
- [UI/UX 专家代码评审 Prompt](04-code-review/Standard-version/UIUXExpertCodeReviewPrompt.md)
- [技术专家代码评审 Prompt](04-code-review/Standard-version/TechnicalExpertCodeReviewPrompt.md)
- [代码评审汇总 Prompt](04-code-review/Standard-version/CodeReviewSynthesisPrompt.md)

### 5. 测试用例编写（5）

- [产品专家测试用例编写 Prompt](05-test-case-writing/Standard-version/ProductExpertTestCaseWritingPrompt.md)
- [QA 专家测试用例编写 Prompt](05-test-case-writing/Standard-version/QAExpertTestCaseWritingPrompt.md)
- [UI/UX 专家测试用例编写 Prompt](05-test-case-writing/Standard-version/UIUXExpertTestCaseWritingPrompt.md)
- [技术专家测试用例编写 Prompt](05-test-case-writing/Standard-version/TechnicalExpertTestCaseWritingPrompt.md)
- [测试用例编写汇总 Prompt](05-test-case-writing/Standard-version/TestCaseWritingSynthesisPrompt.md)

### 6. 测试用例评审（5）

- [产品专家测试用例评审 Prompt](06-test-case-review/Standard-version/ProductExpertTestCaseReviewPrompt.md)
- [QA 专家测试用例评审 Prompt](06-test-case-review/Standard-version/QAExpertTestCaseReviewPrompt.md)
- [UI/UX 专家测试用例评审 Prompt](06-test-case-review/Standard-version/UIUXExpertTestCaseReviewPrompt.md)
- [技术专家测试用例评审 Prompt](06-test-case-review/Standard-version/TechnicalExpertTestCaseReviewPrompt.md)
- [测试用例评审汇总 Prompt](06-test-case-review/Standard-version/TestCaseReviewSynthesisPrompt.md)

### 7. 测试报告（5）

- [产品专家测试报告 Prompt](07-test-report/Standard-version/ProductExpertTestReportPrompt.md)
- [QA 专家测试报告 Prompt](07-test-report/Standard-version/QAExpertTestReportPrompt.md)
- [UI/UX 专家测试报告 Prompt](07-test-report/Standard-version/UIUXExpertTestReportPrompt.md)
- [技术专家测试报告 Prompt](07-test-report/Standard-version/TechnicalExpertTestReportPrompt.md)
- [测试报告汇总 Prompt](07-test-report/Standard-version/TestReportSynthesisPrompt.md)

### 8. 测试报告评审（6）

- [产品专家测试报告评审 Prompt](08-test-report-review/Standard-version/ProductExpertTestReportReviewPrompt.md)
- [QA 专家测试报告评审 Prompt](08-test-report-review/Standard-version/QAExpertTestReportReviewPrompt.md)
- [UI/UX 专家测试报告评审 Prompt](08-test-report-review/Standard-version/UIUXExpertTestReportReviewPrompt.md)
- [技术专家测试报告评审 Prompt](08-test-report-review/Standard-version/TechnicalExpertTestReportReviewPrompt.md)
- [PM 专家测试报告评审 Prompt](08-test-report-review/Standard-version/PMExpertTestReportReviewPrompt.md)
- [测试报告评审汇总 Prompt](08-test-report-review/Standard-version/TestReportReviewSynthesisPrompt.md)

## 调用规则

1. **先锁定输入**：记录每个 Artifact 的名称、来源、版本和可读范围，禁止把不同版本静默混用。
2. **角色独立调用**：同一阶段的角色接收该阶段声明的同一输入，但不接收其他角色的输出。
3. **保留条件参与结果**：角色判断“不参与”或“待确认”时也要保留简短报告、依据和证据缺口，不能静默删除。
4. **再调用汇总 Prompt**：阶段 1 至 7 的汇总只读取对应角色报告及报告内声明的来源元数据，不回读 Artifact；阶段 8 按其阶段 README 接收明确声明的 Artifact 和角色报告。
5. **不跨阶段补造事实**：汇总只做去重、归类、冲突保留和追溯，不替代缺失角色作专业判断。
6. **输出交给 Human Task**：AI 建议不是审批、放行、发布、豁免、风险接受或合并决定。

## 必需与可选输入

| 阶段 | 必需输入 | 可选或推荐输入 |
| --- | --- | --- |
| 1. 需求分析 | 需求文档 | 交互原型图、原始需求 |
| 2. 测试策略 | 需求文档、需求分析报告 | 交互原型、原始需求、技术方案、代码变更或代码仓库链接 |
| 3. 测试策略评审 | 测试策略正文或可读取位置，以及名称、来源、版本 | 无 |
| 4. 代码评审 | 需求文档、需求分析报告、明确代码版本/Diff/可读仓库内容 | 交互原型、原始需求、技术方案 |
| 5. 测试用例编写 | 需求文档、需求分析报告、测试策略、测试策略评审报告、代码评审报告 | 交互原型、原始需求、技术方案 |
| 6. 测试用例评审 | 需求文档、需求分析报告、测试策略、测试策略评审报告、代码评审报告、测试用例及版本 | 交互原型图、原始需求、技术方案 |
| 7. 测试报告 | 测试策略、测试策略评审报告、代码评审报告、测试用例、测试用例评审报告 | 测试执行报告、缺陷报告 |
| 8. 测试报告评审 | 需求文档、需求分析报告、测试策略、测试策略评审报告、代码评审报告、测试用例、测试用例评审报告、测试报告 | 交互原型图、原始需求、技术方案、测试用例执行报告、缺陷报告 |

必需输入缺失、不可读或版本无法对齐且会实质影响结果时，只输出阻塞项、信息缺口和高价值澄清问题。可选输入缺失时，可以基于其余证据继续，但必须说明对范围、完整性、置信度和风险判断的影响。

## Human Task 边界

以下动作只能由有权限的人完成：

- 批准或驳回测试策略、测试用例与测试报告
- 决定是否修复、复测、发布、合并或终止流程
- 接受、豁免或调整风险
- 确认负责人、排期、资源和最终质量门禁

AI 可以整理证据、暴露分歧、提出建议并记录人工决定，但不得冒充审批人，不得预填“已批准”“可发布”“风险已接受”等状态。

## “证据不足”规则

- 没有可核查来源时，不得补造需求、接口、字段、代码位置、执行结果、缺陷、指标或人工决定。
- 计划覆盖、设计完成和用例存在不等于实际执行；没有执行证据时必须写“未执行或证据不足”。
- 缺陷报告缺失不等于零缺陷，执行报告缺失也不能由零散缺陷记录推导出完整执行范围。
- 数字只能来自输入；缺少分母、统计口径或时间范围时，不计算比例或趋势。
- 冲突证据必须并列保留并标注来源，不按多数意见覆盖少数高风险发现。
- 证据不足时降低结论强度，输出已知事实、未知项、影响和补证建议；不得给出确定性通过、质量达标或发布结论。

## 快速开始

1. 从[需求分析阶段](01-requirements-analysis/README.md)开始，准备并锁定真实输入。
2. 按阶段 README 的调用顺序分别运行角色 Prompt，再运行汇总 Prompt。
3. 将每个阶段的汇总结果作为版本明确的 Artifact 保存，并传递给下一阶段。
4. 在评审或最终决策节点，将建议和证据交给 Human Task 确认。
