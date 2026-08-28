# AGENTS.md

本文件给编码 Agent 使用（格式约定见 [agents.md](https://agents.md/)）。
人类贡献者请优先阅读 `README.md`、`CONTRIBUTING.md`；详细 Prompt 规范见 `PROMPT_AUTHORING_STANDARD.md`。

## Project overview

- 仓库名：`awesome-qa-prompt`
- 定位：**QA Prompt Baseline** — 以 Markdown 维护、可复制使用的 QA 提示词合集
- **不是** AI 工具技能包：不要引入 `SKILL.md`、技能安装脚本，或照搬 [`awesome-qa-skills`](https://github.com/naodeng/awesome-qa-skills) 的目录形态
- 可借鉴 skills 的质量原则：反编造、输入审计、最小可执行、文案克制
- 核心内容：
  - `testing-types/zh|en/<module>/`：15 个测试类型（Standard / Lite / 框架变体 / 部分平台场景版）
  - `Workflows/zh|en/`：日常 / 迭代 / 发布测试工作流
  - `prompt-frameworks/`、`examples/`：框架说明与示例
  - `scripts/`：内容校验脚本

默认入口：各模块 `Standard-version/`。

## Setup

```bash
git clone https://github.com/naodeng/awesome-qa-prompt.git
cd awesome-qa-prompt
npm install
```

- Node.js：建议 >= 18
- 本仓库几乎全是 Markdown；一般不需要构建前端或启动服务
- 在线文档站点不在本仓库主流程内；改内容以仓库 Markdown 为准
- `npm install` 会自动启用 `.githooks/pre-commit`（`core.hooksPath`）；如未生效，手动执行 `git config core.hooksPath .githooks`

## Repository map

| 路径 | 用途 |
| --- | --- |
| `testing-types/zh/<module>/` | 中文测试类型模块 |
| `testing-types/en/<module>/` | 英文测试类型模块 |
| `*/Standard-version/` | 默认推荐 Prompt |
| `*/CRISPE-version/` 等 | 框架变体（CRISPE / RISE / ICIO / ROSES / LangGPT） |
| `Workflows/` | 测试工作流 |
| `PROMPT_AUTHORING_STANDARD.md` | Prompt / README 编写硬规则 |
| `PROMPT_AUTHORING_STANDARD_EN.md` | 英文编写标准 |
| `CONTRIBUTING.md` | 人类贡献流程 |
| `scripts/check-prompts.mjs` | Prompt / README 链接与禁用模式检查 |
| `scripts/check-markdown-format.mjs` | Markdown 格式检查 |
| `scripts/check-semantic-boundary.mjs` | 语义越界检查（声称执行测试 / 检测漏洞 / 高覆盖率 / 生成执行报告） |
| `.githooks/pre-commit` | 提交前自动运行语义越界检查 |
| `.github/workflows/prompt-check.yml` | CI：Prompt Check |

模块目录通常包含：`README.md` + `Standard-version/` + 多个 `*-version/`。

## How to work on changes

动手前先判断改动类型，并沿用现有结构，不要发明新目录套路。

### 1. Prompt 正文

- 优先改 `Standard-version/`；再按需同步 Lite / 框架 / 平台变体
- 中英文同名模块尽量保持结构、用途、核心约束一致
- 新增或修改的 Prompt 质量必须与仓库已有同类 Prompt 版本一致；不能只满足脚本校验，必须具备完整的角色、任务、分析维度、输入审计、禁止编造、降级规则、执行指令和结构化输出
- Prompt 至少体现：输入完整性检查、禁止编造、信息不足时的降级、可执行输出
- 未提供的 KPI / SLA / 覆盖率 / 并发等必须标为「待确认 / 建议值 / 示例值」，禁止写成既定目标
- 不要加入「收到后立即开始执行」类无条件指令
- LangGPT 变体尽量保留框架风格，但须在 Constrains / Guardrails / Workflow 中覆盖上述约束

### 2. 模块 README

- 中文模块默认指向中文 `Standard-version/`；英文模块同理
- 语言切换链接必须指向真实路径（例如中文 README → `../../en/<module>/README.md`）
- 所有相对链接必须可打开；禁止指向不存在的 `*_EN.md` 或错误的 `../testing-types/` 路径

### 3. 根 README / 规范文档

- 保持「Prompt Baseline」定位，表述克制，不写不可核实的效果 KPI
- 与 skills 的边界说明不要删掉或写混

### 4. 校验脚本 / CI

- 先读懂现有检查再改；小步修改
- 改规则后确认仓库内容仍能通过新规则

## Hard rules (content)

1. **不要编造**：不得补写用户未提供的需求、接口、字段、环境、指标、日期、角色、审批或合规结论；假设必须显式标注。
2. **最小可执行**：优先短而完整、可直接用的结果，不要默认超长万能模板。
3. **双语与多版本一致**：改一侧时主动判断另一侧 / 其他变体是否要同步，避免行为漂移。
4. **链接真实**：README 与模块说明里的路径必须存在；默认入口优先 `Standard-version/`。
5. **不 skill 化**：不把本仓库改成 skills 安装体系。
6. **质量一致性**：新增或修改的 Prompt 必须达到已有同类 Prompt 的内容完整度和可执行质量；仅通过自动检查不视为质量达标。

## Testing / verification

改完后**自己跑检查**，不要把验证留给用户。

```bash
# 推荐：全量
npm run check:all

# 或分别运行
npm run check:prompts
npm run check:markdown-format
npm run check:semantic-boundary
```

检查含义：

- `check:prompts`：根 README + `testing-types/**` 的坏链、禁用文案、模块入口约定等
- `check:markdown-format`：仓库内 Markdown 格式问题（含尾随空格等）
- `check:semantic-boundary`：Prompt 文件不得声称真实执行测试、检测漏洞、生成高覆盖率用例 / 测试执行报告（含英文直译与近义改写），提交时由 `.githooks/pre-commit` 自动执行

CI 工作流：`.github/workflows/prompt-check.yml`（PR / push 到 `main` 会跑 Prompt Check）。

本地通过后再提交；若 CI 失败，先在本地复现并修复。

### 快速自检清单

- [ ] 改动与用户请求直接对应，无无关大重写
- [ ] 相关中英文 / 变体已按需同步
- [ ] 新增或修改的 Markdown 链接可打开
- [ ] 未引入硬编码假 KPI 或无条件「立即执行」
- [ ] 新 Prompt 与已有同类 Prompt 的内容完整度和可执行质量一致
- [ ] `npm run check:all` 已通过

## Commit and PR instructions

### Commits

- 用简短陈述句，说明**为什么**；可用前缀：`docs:` / `fix:` / `chore:`
- 只暂存相关文件；不要提交密钥、`.env`、无关 `.DS_Store`
- 不使用 `--no-verify` 跳过钩子（除非用户明确要求）
- 用户未要求时不要主动 commit；用户要求时再提交

### Pull requests

建议标题：

- `docs: ...`（文档 / Prompt / README）
- `fix: ...`（断链、约束、KPI 误导等）
- `chore: ...`（脚本 / CI）

PR 正文建议包含：

- Summary：改了什么、为什么
- Validation：已运行的命令与结果（至少 `npm run check:all`）
- 影响范围：是否触及 README 入口、Prompt 约束、中英文同步

## Security notes

- 示例、Prompt、文档中**禁止**写入真实 token、密码、cookie、内网密钥
- 需要凭证时用环境变量名或占位符（如 `YOUR_API_TOKEN`）
- 用户粘贴的 curl / 日志若含敏感头，写入仓库前先脱敏

## Communication with the user

- 用简单直白的中文说明：做了什么、结果怎样、还有何风险
- 少堆术语；除非用户追问，不展开实现细节
- 信息不足时先指出缺口，再决定提问或基于最少必要假设继续（假设必须标明）

## Do not

- 不要把愿景写成现状，或编造仓库里不存在的模块 / 路径
- 不要为了「风格统一」删除框架变体或平台场景版
- 不要在无用户要求时做大规模无关重构
- 不要跳过 `npm run check:all` 就声称完成

## Preferred workflow

1. 读相关现有文件与 `PROMPT_AUTHORING_STANDARD.md`
2. 确定最小必要改动
3. 修改文件
4. 自查关联影响（双语、变体、链接）
5. 运行 `npm run check:all`
6. 向用户汇报结果
