# UI 自动化测试（Playwright） (UI Test Playwright)

[English](../../en/ui-test-playwright/README.md) | 简体中文

## 模块简介

面向 Playwright 的 UI/E2E 自动化测试提示词，覆盖 locator、fixture、并行、trace 和 CI。

## 适用场景

- 已明确要围绕 UI 自动化测试（Playwright） 产出测试方案、测试资产结构或评审意见
- 需要把通用 QA 方法落到具体工具、框架或增强流程
- 输入材料不完整，但希望先得到可执行初版，并明确缺口和假设

## 版本选择建议

- `Standard-version/`：默认推荐，适合大多数实际场景
- 后续如需 Lite 或提示词框架变体，可按本仓库规范增补

## 文件说明

- **标准版本：** [Standard-version/UITestPlaywrightPrompt.md](Standard-version/UITestPlaywrightPrompt.md)
- **英文版本：** [../../en/ui-test-playwright/Standard-version/UITestPlaywrightPrompt.md](../../en/ui-test-playwright/Standard-version/UITestPlaywrightPrompt.md)

## 输入材料建议

```markdown
目标：[本次希望产出的结果]
业务/系统范围：[模块、接口、页面、流程或服务]
已有材料：[需求、接口文档、代码片段、测试用例、日志或现有资产]
约束：[工具栈、环境、时间、风险、合规或发布要求]
期望格式：[测试方案/用例/评审意见/资产结构/执行计划]
```text

## 输出重点

- 输入审计：已知信息、缺失信息、关键假设、主要风险
- 优先级排序：按风险、业务影响和变更范围说明依据
- 可执行结果：给出可直接落地的步骤、结构、检查点或评审意见
- 待确认问题：不编造未提供的指标、接口、环境和结论

## 相关模块

- [automation-testing](../automation-testing/README.md)
- [functional-testing](../functional-testing/README.md)

## 贡献说明

补充该模块时，请同步检查英文版本，并运行 `npm run check:all`。
