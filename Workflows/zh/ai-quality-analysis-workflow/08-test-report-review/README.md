# 测试报告评审阶段 Prompt

[English](../../../en/ai-quality-analysis-workflow/08-test-report-review/README.md) | 简体中文

## 阶段目标

由产品、QA、UI/UX、技术和 PM 五个角色基于同一版本的 MVP 4.8 输入独立评审，再汇总为一份供 Human Task 最终确认的可追溯评审报告。五个角色的职责不同：产品核对业务验收证据，QA 核对测试结论、缺陷和剩余风险，UI/UX 核对体验证据，技术核对技术风险、环境限制和非功能证据，PM 只整理行动项、负责人、依赖和时间安排。

## 允许输入

每份角色 Prompt 和汇总 Prompt 都必须审计以下 13 项 MVP 4.8 Artifact 输入。

必需输入：

- 需求文档
- 需求分析报告
- 测试策略
- 测试策略评审报告
- 代码评审报告
- 测试用例
- 测试用例评审报告
- 测试报告

可选输入：

- 交互原型图
- 原始需求
- 技术方案
- 测试用例执行报告
- 缺陷报告

所有输入都要记录名称、来源、版本和可读范围。必需输入缺失、不可读或版本无法对齐时，进入阻塞输出；可选输入缺失时继续评审，但必须列出缺失项及其对完整性、置信度和风险判断的影响。

角色 Prompt 不接收其他角色的测试报告评审输出。汇总 Prompt 同时接收上述 13 项 Artifact 和五份角色评审报告，用 Artifact 核对角色结论与证据，不补做缺失角色的专业评审。

## 关键边界

- 产品、QA、UI/UX 和技术均默认参与，不能输出“不参与”或因没有本专业证据而停止评审；缺少相关证据时必须记录未覆盖范围、证据缺口及其影响。
- QA 负责测试结论、缺陷和剩余质量风险，技术负责环境、稳定性、性能、安全、可观测性和其他非功能证据。
- PM 不复核或改写测试事实、缺陷等级、风险等级、执行状态和质量结论，只整理测试报告已有行动项及输入明确提供的负责人、依赖和时间安排。
- 所有事实、差异、缺口与建议必须追溯到指定版本的输入；冲突并列保留，不按多数意见覆盖少数高风险发现。
- 测试报告若写明“未执行或证据不足”，任何角色和汇总都不得改写为通过、质量达标或满足发布条件。

## 评审结论

汇总 Prompt 只能输出一个结论：`建议通过`、`建议补充证据` 或 `建议终止评审`。该结论只是提供给 Human Task 的建议，不构成审批、发布、豁免或风险接受决定。

## Prompt 文件

- [产品专家测试报告评审 Prompt](Standard-version/ProductExpertTestReportReviewPrompt.md)
- [QA 专家测试报告评审 Prompt](Standard-version/QAExpertTestReportReviewPrompt.md)
- [UI/UX 专家测试报告评审 Prompt](Standard-version/UIUXExpertTestReportReviewPrompt.md)
- [技术专家测试报告评审 Prompt](Standard-version/TechnicalExpertTestReportReviewPrompt.md)
- [PM 专家测试报告评审 Prompt](Standard-version/PMExpertTestReportReviewPrompt.md)
- [测试报告评审汇总 Prompt](Standard-version/TestReportReviewSynthesisPrompt.md)

## 推荐调用顺序

1. 锁定 13 项 MVP 4.8 输入的名称、来源、版本和可读范围，区分 8 项必需输入与 5 项可选输入。
2. 将同一套输入分别交给五份角色 Prompt，不混入其他角色评审。
3. 四个质量角色默认参与；没有本专业证据时保留范围与证据缺口，而不是结束角色评审。
4. 将同一套 13 项 Artifact 和五份完整角色评审报告交给汇总 Prompt，得到三个允许结论之一。
5. 将汇总报告交给 Human Task 作最终确认；AI 不预填人工决定。

## 版本说明

当前阶段提供可直接复制使用的 Standard 版本，也是默认推荐入口。
