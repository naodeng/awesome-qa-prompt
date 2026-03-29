<div align="right"><strong>🇨🇳中文</strong> | <strong><a href="./CONTRIBUTING_EN.md">🇬🇧English</a></strong></div>

# 贡献指南

本项目欢迎对 Prompt、README、文档和工作流的改进，但提交前请先满足当前仓库已经落地的质量门槛。

## 提交前要求

1. 阅读 [PROMPT_AUTHORING_STANDARD.md](./PROMPT_AUTHORING_STANDARD.md)
2. 确认默认入口指向 `Standard-version/`
3. 不要引入新的坏链接、默认编造、硬编码 KPI 或“立即开始执行”式文案
4. 本地运行：

```bash
npm run check:prompts
```

## 推荐工作流

```bash
git clone https://github.com/naodeng/awesome-qa-prompt.git
cd awesome-qa-prompt
git checkout -b feature/your-change
npm install
npm run check:prompts
```

## Prompt 修改要求

- 新增或修改 Prompt 时，优先更新 `Standard-version/`
- 若同步修改框架变体，保持核心行为约束一致
- 输入不足时必须优先输入审计，而不是直接生成完整结果
- 未提供的指标必须标注为“待确认 / 建议值 / 示例值”
- 不要默认输出不必要的审批人、日期、预算、环境细节

## README 修改要求

- 中文 README 默认指向中文 `Standard-version`
- 英文 README 默认指向英文 `Standard-version`
- 所有 Markdown 链接必须在仓库内真实存在
- 版本选择说明必须保留

## Pull Request 建议内容

- 变更目的
- 影响范围
- 是否影响 README 入口
- 是否影响 Prompt 结构约束
- 本地检查结果

示例：

```markdown
## Summary
- fix default README entry paths
- add guardrails to Standard-version prompts

## Validation
- npm run check:prompts
```

## 当前自动检查

GitHub Actions 会在 `main` 分支 push 和 PR 上运行 `Prompt Check`：

- 安装依赖
- 执行 `npm run check:prompts`

如果检查失败，请先在本地复现并修复后再提交。
