# 双语 README 与 Prompt Catalog 设计

## 目标

将项目首页重构为中文默认、英文可切换的 Prompt 展示入口。Prompt 分类目录和 Testing Workflows 是首页核心内容；贡献、开发、规范和示例通过成对的中英文文档链接访问。

## 信息架构

- `README.md`：中文默认首页。
- `README_EN.md`：与中文结构一致的英文首页。
- `PROMPT_COVERAGE_200.md`：中文 200 项分类目录。
- `PROMPT_COVERAGE_200_EN.md`：英文 200 项分类目录。
- `Workflows/zh|en/README.md`：详细展示 Router、AI Quality Analysis、日常、迭代和发布工作流。
- `examples/README.md|README_EN.md`：双语示例入口。
- `CONTRIBUTING.md|CONTRIBUTING_EN.md` 与 `PROMPT_AUTHORING_STANDARD.md|PROMPT_AUTHORING_STANDARD_EN.md`：保留现有双语配对。

## Prompt 分类

200 项 Prompt 按以下十类展示：需求与规划、测试分析与设计、API/契约/消息/集成、自动化与测试工程、性能与韧性、安全/隐私/无障碍、数据/数据库/环境、缺陷/质量/治理、发布/生产/可观测性、AI 与 LLM 测试。

首页每类展示用途、代表 Prompt 和完整 Catalog 链接；Catalog 保留 1–200 编号、模块和 Standard Prompt 入口。

## Workflow 展示

首页和 Workflow README 详细展示五个入口：Testing Prompt Router、AI 研发质量分析、日常测试、迭代测试、发布测试。AI 工作流展示八阶段与角色 Prompt；其他工作流展示阶段、适用场景和关联 Prompt。

## 双语与链接规则

- 中文文件默认无后缀，英文文件使用 `_EN.md`；Workflow 保持 `zh/`、`en/` 目录。
- 成对文档顶部必须提供语言切换。
- Workflow 中的 Prompt 链接必须指向真实模块 README，不指向旧文件路径。
- `LICENSE` 保持唯一正式法律文本，不创建翻译版本。
- 中英文 Catalog 必须各包含 200 项，模块映射一致。

## 验证

- 扩展脚本检查 README、Catalog、Workflow 和 Examples 的相对链接。
- 检查主要用户文档语言切换、Catalog 数量和双语映射。
- 运行 `npm run check:all` 与 `git diff --check`。
