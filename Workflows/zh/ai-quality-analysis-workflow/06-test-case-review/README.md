# 测试用例评审阶段 Prompt

[English](../../../en/ai-quality-analysis-workflow/06-test-case-review/README.md) | 简体中文

## 阶段目标

由产品、QA、UI/UX 和技术四个角色对同一版本的测试用例独立评审，再汇总为一份可追溯的测试用例评审报告。产品检查业务规则和用户旅程；QA 检查正确性、完整性、可执行性、优先级、重复与遗漏；UI/UX 检查交互、跨端和可访问性；技术检查接口、数据、异常、集成和非功能风险。

汇总报告必须列出阻塞问题、建议补充用例、修改建议、证据和角色来源。总体结论只能是“建议通过”“建议修订”或“信息不足”，最终审批、签字和是否进入执行由 Human Task 决定。

## 允许输入

- 必需：需求文档、需求分析报告、测试策略、测试策略评审报告、代码评审报告、测试用例及版本
- 可选：交互原型图、原始需求、技术方案

正式评审前必须对齐各 Artifact 的名称、版本、来源和可读范围。任一必需输入缺失、不可读，或版本/来源无法审计时，角色必须使用阻塞/信息不足模式且不生成正式发现。只有可选输入缺失时才允许基于其余证据继续或输出部分评审；不得猜测用例内容或产品/技术事实。

## 独立评审边界

- 四份角色 Prompt 只接收规定的上游 Artifact 与待评审测试用例，不接收、读取或推测其他角色报告。
- 每个角色只评审自己的专业范围，并以测试用例标识、上游来源 ID/定位或原文摘录提供证据。
- 跨角色去重、冲突保留和总体建议只由汇总 Prompt 处理。
- 汇总 Prompt 只接收四份角色报告，不重新读取测试用例或上游材料来补写角色发现。

## Prompt 文件

- [产品专家测试用例评审 Prompt](Standard-version/ProductExpertTestCaseReviewPrompt.md)
- [QA 专家测试用例评审 Prompt](Standard-version/QAExpertTestCaseReviewPrompt.md)
- [UI/UX 专家测试用例评审 Prompt](Standard-version/UIUXExpertTestCaseReviewPrompt.md)
- [技术专家测试用例评审 Prompt](Standard-version/TechnicalExpertTestCaseReviewPrompt.md)
- [测试用例评审汇总 Prompt](Standard-version/TestCaseReviewSynthesisPrompt.md)

## 推荐调用顺序

1. 锁定同一变更范围的上游 Artifact 和测试用例版本。
2. 将同一输入分别交给四份角色 Prompt，独立生成四份评审报告。
3. 确认角色报告均保留用例定位、证据、影响和建议，且没有引用其他角色报告。
4. 仅将四份完整角色报告交给汇总 Prompt，生成阻塞、补充用例、修改建议和总体建议。
5. 将汇总报告交给 Human Task 作最终审批、退回或补充信息决定；AI 不代替该决策。

## 版本说明

当前阶段提供可直接复制使用的 Standard 版本，也是默认推荐入口。
