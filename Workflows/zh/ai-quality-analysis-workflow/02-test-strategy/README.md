# 测试策略阶段 Prompt

[English](../../../en/ai-quality-analysis-workflow/02-test-strategy/README.md) | 简体中文

## 阶段目标

让产品、QA、UI/UX、技术和 PM 五个角色基于同一组输入独立提供测试策略所需信息，再生成一份明确区分质量事实、策略建议和项目约束的测试策略。本阶段不输出详细测试计划、完整测试用例、自动化脚本或执行结果，也不代替人工审批。

## 输入基线

- 必需输入：需求文档、需求分析报告
- 可选输入：交互原型、原始需求、技术方案、代码变更或代码仓库链接

五份角色 Prompt 使用同一批已声明输入。汇总 Prompt 只读取五份角色报告，不回读原始材料或补充报告之外的新事实。

代码输入仅作为可选证据。未提供代码时不得阻塞策略阶段；各角色应基于其余输入继续，并说明代码缺失对实现变更可见性、报告完整性、结论置信度和风险判断的影响。

## Prompt 文件

- [产品专家测试策略 Prompt](Standard-version/ProductExpertTestStrategyPrompt.md)：识别业务关键路径、业务风险和验收重点，提供产品视角策略建议。
- [QA 专家测试策略 Prompt](Standard-version/QAExpertTestStrategyPrompt.md)：提出范围、测试类型、覆盖、环境、数据、证据以及准入与退出建议。
- [UI/UX 专家测试策略 Prompt](Standard-version/UIUXExpertTestStrategyPrompt.md)：先判断是否存在高交互、跨端、视觉或无障碍风险；仅在有依据时参与策略。
- [技术专家测试策略 Prompt](Standard-version/TechnicalExpertTestStrategyPrompt.md)：提出测试层级、接口、集成、非功能、可测性和可观测性建议。
- [PM 专家测试策略输入 Prompt](Standard-version/PMExpertTestStrategyPrompt.md)：只整理范围、排期、资源、依赖、里程碑和行动建议等管理输入。
- [测试策略汇总 Prompt](Standard-version/TestStrategySynthesisPrompt.md)：整合五份报告，严格区分质量事实、策略建议和项目约束，并保留来源与待确认项。

## 推荐调用顺序

1. 使用同一批必需输入及实际提供的可选输入分别调用产品、QA、UI/UX、技术和 PM Prompt；各角色不得把其他角色结论当作已证实事实。
2. 检查 UI/UX 报告的参与判断。结论为“不参与”时，只保留判断依据和待确认项，不要求生成完整 UI/UX 策略输入。
3. 检查 PM 报告是否只包含管理输入，不允许其设定或覆盖质量结论、测试优先级和技术方案。
4. 将五份角色报告一起交给汇总 Prompt，生成可追溯的测试策略。
5. 将待定指标、冲突、资源取舍和准入/退出建议交给有权限的人确认；AI 不冒充审批人或给出虚假放行结论。

## 版本说明

当前阶段提供可直接复制使用的 Standard 版本，也是默认推荐入口。
