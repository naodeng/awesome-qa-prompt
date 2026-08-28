<div align="right"><strong>简体中文</strong> · <a href="./README_EN.md">English</a></div>

# Prompt 使用示例

本目录用于说明如何选择、填写和组合仓库中的 Prompt。当前仓库尚未提供独立的示例子目录；以下入口直接使用现有 Prompt 与 Workflow，避免把规划中的内容描述为已完成。

## 基础使用

1. 从 [完整 Prompt 分类目录](../PROMPT_COVERAGE_200.md) 选择最接近目标的模块。
2. 优先打开模块的 `Standard-version`。
3. 将真实需求、接口、日志或指标放入 `<qa_context>`。
4. 对未提供的信息保留“待确认”，不要让模型自行补写。
5. 使用结果前复核证据、假设和人工决策项。

## 入口示例

| 目标 | 推荐入口 | 说明 |
| --- | --- | --- |
| 不确定该用哪个 Prompt | [Testing Prompt Router](../Workflows/zh/discover-testing/README.md) | 推荐一个主 Prompt、最多一个辅助 Prompt 及调用顺序 |
| 审查需求与验收标准 | [需求分析](../testing-types/zh/requirements-analysis/README.md) + [验收标准审查](../testing-types/zh/acceptance-criteria-reviewer/README.md) | 先识别规则与缺口，再检查可验证性 |
| 设计接口测试 | [API 测试](../testing-types/zh/api-testing/README.md) | 从契约、业务规则和失败路径建立场景 |
| 分析性能结果 | [性能结果分析](../testing-types/zh/performance-result-analysis/README.md) | 先审计运行有效性，再解释指标证据 |
| 组织完整研发质量分析 | [AI 研发质量分析工作流](../Workflows/zh/ai-quality-analysis-workflow/README.md) | 使用八阶段、多角色、可追溯的 Prompt 链路 |

## 组合原则

- 先使用范围较宽的分析 Prompt，再使用专项设计 Prompt。
- 每一步只传递已经确认的事实、显式假设和上一阶段证据。
- 不要同时堆叠多个目标相近的 Prompt；优先使用 Router 给出的最小组合。
- Workflow 是实践指南，实际审批、发布和责任归属仍由人完成。

更多连续场景见 [Testing Workflows](../Workflows/zh/README.md)，编写或扩展 Prompt 见 [Prompt 编写规范](../PROMPT_AUTHORING_STANDARD.md)。
