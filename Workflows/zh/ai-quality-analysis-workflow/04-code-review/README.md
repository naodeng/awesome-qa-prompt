# 代码评审阶段 Prompt

[English](../../../en/ai-quality-analysis-workflow/04-code-review/README.md) | 简体中文

## 阶段目标

让产品、QA、UI/UX 和技术四个角色基于同一份可读取、版本明确的代码输入独立评审，再生成一份去重、分级、可追溯的代码评审报告。产品与 UI/UX 按证据判断是否参与；QA 与技术始终保持不同评审边界。

## 允许输入

- 必需输入：需求文档、需求分析报告、明确代码版本/Diff/可读仓库内容
- 可选输入：交互原型、原始需求、技术方案

仅有需求、文件名、目录名、提交说明或口头描述不等于可读取代码。任何角色缺少任一必需输入时都必须停止评审；代码缺失、版本不明确、Diff/内容不可读或仓库不可访问时始终硬阻塞。汇总 Prompt 只读取四份角色报告，并依据报告中声明的代码版本、可读范围和阻塞状态保持这道硬门槛，不回读代码或其他 Artifact。

## 条件参与

- 产品专家：代码或输入证据涉及业务规则、用户任务、状态流转、权限/权益、关键数据呈现或验收行为时参与；证据充分表明均不涉及时不参与；无法判断时标记“待确认”。
- UI/UX 专家：代码或输入证据涉及界面、交互、导航、反馈、跨端、视觉或可访问性风险时参与；证据充分表明均不涉及时不参与；无法判断时标记“待确认”。
- QA 专家：聚焦缺陷、回归风险、可测试性和测试缺口，不替代技术专家作架构或实现质量结论。
- 技术专家：聚焦逻辑、架构、接口、数据、安全、性能、兼容性、维护性和可观测性，不替代 QA 设计测试覆盖。

## Prompt 文件

- [产品专家代码评审 Prompt](Standard-version/ProductExpertCodeReviewPrompt.md)
- [QA 专家代码评审 Prompt](Standard-version/QAExpertCodeReviewPrompt.md)
- [UI/UX 专家代码评审 Prompt](Standard-version/UIUXExpertCodeReviewPrompt.md)
- [技术专家代码评审 Prompt](Standard-version/TechnicalExpertCodeReviewPrompt.md)
- [代码评审汇总 Prompt](Standard-version/CodeReviewSynthesisPrompt.md)

## 推荐调用顺序

1. 锁定同一版本的需求文档、需求分析报告和代码输入，并准备实际提供的交互原型、原始需求与技术方案。
2. 将同一输入分别交给四份角色 Prompt；产品和 UI/UX 先作条件参与判断。
3. 检查每条发现是否保留文件、可核实位置、触发条件、影响、依据和修复方向；没有可靠位置时必须标记信息缺口，不能补造行号。
4. 只将四份角色报告交给汇总 Prompt，完成去重、严重度归一和来源保留；不得让汇总 Prompt 回读代码或其他 Artifact。
5. 将汇总报告交给 Human Task 决定修复、接受风险或补充信息；AI 报告不等于批准或合并决定。

## 版本说明

当前阶段提供可直接复制使用的 Standard 版本，也是默认推荐入口。
