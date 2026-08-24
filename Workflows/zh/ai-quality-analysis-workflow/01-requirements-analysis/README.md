# 需求分析阶段 Prompt

[English](../../../en/ai-quality-analysis-workflow/01-requirements-analysis/README.md) | 简体中文

## 阶段目标

让产品、QA、UI/UX 和技术四个角色在同一组需求输入上独立分析，再生成一份保留证据、分歧和来源的需求分析汇总报告。本阶段只分析需求质量，不代替后续测试策略、测试计划、用例设计、技术方案或人工审批。

## 允许输入

- 必需：需求文档
- 可选：交互原型图
- 可选：原始需求

每份角色 Prompt 只读取以上本阶段输入。汇总 Prompt 只读取四份角色报告；不得回读其他材料或补充角色报告之外的新事实。

## Prompt 文件

- [产品专家需求分析 Prompt](Standard-version/ProductExpertRequirementsAnalysisPrompt.md)：分析业务目标、用户价值、流程、规则、范围和验收。
- [QA 专家需求分析 Prompt](Standard-version/QAExpertRequirementsAnalysisPrompt.md)：分析可测性、歧义、异常、边界和测试风险。
- [UI/UX 专家需求分析 Prompt](Standard-version/UIUXExpertRequirementsAnalysisPrompt.md)：分析信息架构、任务流、交互状态、跨端和可访问性。
- [技术专家需求分析 Prompt](Standard-version/TechnicalExpertRequirementsAnalysisPrompt.md)：分析可行性、系统边界、接口、数据、安全、性能和可观测性。
- [需求分析汇总 Prompt](Standard-version/RequirementsAnalysisSynthesisPrompt.md)：汇总四份角色报告，保留共识、互补意见、冲突、风险、待确认项和来源追踪。

## 推荐调用顺序

1. 使用同一批已声明输入，分别调用四份角色分析 Prompt。四份分析彼此独立，不以前一角色结论作为事实。
2. 检查四份报告是否保留了输入 Artifact 名称、版本和证据定位；未提供的信息应明确标记。
3. 将四份角色报告一起交给汇总 Prompt，生成可追溯的需求分析汇总报告。
4. 将需要决策或审批的内容交给有权限的人处理；AI 只记录状态，不冒充审批人或给出虚假批准结论。

## 版本说明

当前阶段提供可直接复制使用的 Standard 版本，也是默认推荐入口。
