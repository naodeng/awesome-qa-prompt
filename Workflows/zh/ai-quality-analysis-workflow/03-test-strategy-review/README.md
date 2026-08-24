# 测试策略评审阶段 Prompt

[English](../../../en/ai-quality-analysis-workflow/03-test-strategy-review/README.md) | 简体中文

## 阶段目标

让产品、QA、UI/UX、技术和 PM 五个角色独立评审同一版本的测试策略，再生成一份供 Human Task 决策的可追溯评审报告。汇总 Prompt 的总体建议只能给出“建议通过”“建议修订”或“信息不足”；各角色报告使用其 Prompt 定义的角色级标签。任何 AI 输出都不能代替 Human Task 最终通过、驳回或批准策略。

## 允许输入

- 必需：测试策略正文或可读取位置
- 必需：测试策略的名称、来源和版本；未提供的元数据必须标记“未提供”

各角色 Prompt 只读取本阶段声明的测试策略及其来源、版本，不回读需求、代码或其他角色报告。汇总 Prompt 只读取五份角色评审报告。

## Prompt 文件

- [产品专家测试策略评审 Prompt](Standard-version/ProductExpertTestStrategyReviewPrompt.md)：检查业务目标、关键旅程、范围优先级和验收覆盖。
- [QA 专家测试策略评审 Prompt](Standard-version/QAExpertTestStrategyReviewPrompt.md)：检查完整性、风险、可执行性、证据和门槛。
- [UI/UX 专家测试策略评审 Prompt](Standard-version/UIUXExpertTestStrategyReviewPrompt.md)：先判断是否需要参与，再检查体验、跨端、视觉和可访问性策略。
- [技术专家测试策略评审 Prompt](Standard-version/TechnicalExpertTestStrategyReviewPrompt.md)：检查环境、数据、依赖、集成和非功能策略的可行性。
- [PM 专家测试策略评审 Prompt](Standard-version/PMExpertTestStrategyReviewPrompt.md)：只检查排期、资源、依赖和里程碑的计划可行性。
- [测试策略评审汇总 Prompt](Standard-version/TestStrategyReviewSynthesisPrompt.md)：汇总阻塞项、修改项、证据和未解决分歧，给出三选一建议结论。

## 推荐调用顺序

1. 使用同一份测试策略及同一来源、版本信息，分别调用五份角色评审 Prompt；角色之间不互相读取报告。
2. UI/UX 先完成条件参与判断；“不参与”也要保留判断依据，“待确认”不能被当成“不参与”。
3. 检查五份报告是否引用了策略中的具体章节、表格或条目；缺失证据不得静默补齐。
4. 将五份角色报告一起交给汇总 Prompt，生成“建议通过 / 建议修订 / 信息不足”之一的建议。
5. 将汇总报告交给 Human Task；只有有权限的人可以作最终决定。

## 版本说明

当前阶段提供可直接复制使用的 Standard 版本，也是默认推荐入口。
