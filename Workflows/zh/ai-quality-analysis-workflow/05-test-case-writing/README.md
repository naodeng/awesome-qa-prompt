# 测试用例编写阶段 Prompt

[English](../../../en/ai-quality-analysis-workflow/05-test-case-writing/README.md) | 简体中文

## 阶段目标

让产品、QA、UI/UX 和技术四个角色基于同一组已评审上游材料独立提出测试用例，再生成一份按业务能力和风险去重、统一编号并可追溯到需求、风险和代码发现的测试用例集。产品与 UI/UX 按证据判断是否参与；QA 负责可执行用例主体；技术只补充有依据的接口、数据、集成、安全、性能和故障处理场景。

## 允许输入

- 必需输入：需求文档、需求分析报告、测试策略、测试策略评审报告、代码评审报告
- 可选输入：交互原型、原始需求、技术方案

正式编写前必须对齐各 Artifact 的名称、版本、来源和可读范围。缺少任一必需输入或版本冲突会实质影响用例时，只输出阻塞/缺口和澄清问题，不用常识补写接口、字段、环境或测试数据。

## 最低用例字段

每份角色用例和最终汇总用例至少包含：用例标识、来源、前置条件、步骤、预期结果、优先级、风险、假设。来源应引用已有需求、风险、策略建议或代码发现的稳定 ID；没有稳定 ID 时保留 Artifact 与定位并标记来源元数据缺口。

## 条件参与与角色边界

- 产品专家：仅在证据涉及业务规则、用户任务、状态流转、权限/权益、关键数据或验收行为时参与。
- QA 专家：负责按已评审策略形成主要可执行用例集，覆盖有依据的正常、异常、边界、状态、恢复和回归风险。
- UI/UX 专家：仅在证据涉及界面、交互、导航、反馈、跨端或可访问性风险时参与。
- 技术专家：补充有契约或技术证据支持的接口、数据、集成、安全、性能及故障处理用例，不重复 QA 主体，不发明接口字段或指标。

## Prompt 文件

- [产品专家测试用例编写 Prompt](Standard-version/ProductExpertTestCaseWritingPrompt.md)
- [QA 专家测试用例编写 Prompt](Standard-version/QAExpertTestCaseWritingPrompt.md)
- [UI/UX 专家测试用例编写 Prompt](Standard-version/UIUXExpertTestCaseWritingPrompt.md)
- [技术专家测试用例编写 Prompt](Standard-version/TechnicalExpertTestCaseWritingPrompt.md)
- [测试用例编写汇总 Prompt](Standard-version/TestCaseWritingSynthesisPrompt.md)

## 推荐调用顺序

1. 锁定同一版本的需求文档、需求分析报告、测试策略、策略评审和代码评审，并准备实际提供的交互原型、原始需求与技术方案。
2. 将同一输入分别交给四份角色 Prompt；产品和 UI/UX 先作条件参与判断。
3. 检查每条建议是否包含最低八类字段，并确认所有步骤、数据和预期均有输入依据。
4. 只将四份角色报告交给汇总 Prompt，完成去重、统一编号和追踪矩阵；不得让汇总 Prompt 回读上游 Artifact。
5. 将最终用例集交给 Human Task 确认执行范围、补充实际测试数据和安排执行；本阶段不声称用例已执行或需求已覆盖。

## 版本说明

当前阶段提供可直接复制使用的 Standard 版本，也是默认推荐入口。
