<div align="right"><strong>🇨🇳中文</strong> | <strong><a href="./PROMPT_AUTHORING_STANDARD_EN.md">🇬🇧English</a></strong></div>

# Prompt 编写标准

本规范用于约束 `awesome-qa-prompt` 仓库内新增或修改的 Prompt、README 和框架变体，避免再次出现断链、过度模板化、默认编造和固定 KPI 误导等问题。

## 仓库定位

- 本仓库是 **QA Prompt Baseline**，维护可复制使用的提示词与多框架/平台变体。
- 不要求 skill 化结构（无需 `SKILL.md`、安装脚本或工具技能目录）。
- 质量上对齐常见约定：输入审计、禁止编造、最小可执行、链接真实可用；形态上保持 Prompt 合集，不与 `awesome-qa-skills` 混同。

## 适用范围

- `testing-types/zh/*/README.md`
- `testing-types/en/*/README.md`
- `testing-types/zh/*/Standard-version/*.md`
- `testing-types/en/*/Standard-version/*.md`
- `testing-types/zh/*/CRISPE-version/*.md`
- `testing-types/en/*/CRISPE-version/*.md`
- `testing-types/zh/*/RISE-version/*.md`
- `testing-types/en/*/RISE-version/*.md`
- `testing-types/zh/*/ICIO-version/*.md`
- `testing-types/en/*/ICIO-version/*.md`
- `testing-types/zh/*/ROSES-version/*.md`
- `testing-types/en/*/ROSES-version/*.md`
- `testing-types/zh/*/LangGPT-version/*.md`
- `testing-types/en/*/LangGPT-version/*.md`
- `Workflows/zh/**/README.md`
- `Workflows/en/**/README.md`
- `Workflows/zh/*/Standard-version/*.md`
- `Workflows/en/*/Standard-version/*.md`
- `Workflows/zh/*/*/Standard-version/*.md`
- `Workflows/en/*/*/Standard-version/*.md`

## 基本原则

- 默认推荐入口必须指向 `Standard-version/`
- README 中的文件路径和链接必须可直接打开，禁止指向不存在的根目录 Prompt 文件
- Prompt 必须优先帮助用户产出“最小可执行结果”，而不是默认生成超长、超全、超细的模板
- Prompt 不得鼓励模型编造需求、接口、字段、环境、指标、日期、版本号、审批信息、团队配置或合规结论
- 新增或修改的 Prompt 必须与仓库已有同类 Prompt 保持一致的内容完整度和可执行质量；仅通过自动检查不视为质量达标
- 未提供的 KPI、SLA、SLO、覆盖率、并发量、响应时间等指标，必须标注为“待确认 / 建议值 / 示例值 / TBD”

## 必备结构

所有非 LangGPT Prompt 至少应包含以下能力约束：

1. 输入完整性检查
2. 禁止编造
3. 输出降级策略
4. 执行指令

## 质量一致性要求

新增或修改的 Prompt 至少应具备与已有同类 `Standard-version` 相当的完整度：清晰的角色与任务、适用的方法或分析维度、输入审计、禁止编造、信息不足时的降级策略、执行指令和结构化输出。内容应能直接复制使用，不能以过度简短的占位文本代替可执行规范。

## 输入完整性要求

Prompt 必须明确指示模型在正式输出前先做输入审计：

- 列出已知信息
- 列出缺失信息
- 列出关键假设
- 列出主要风险

如果缺失信息会显著影响结果，Prompt 应要求模型：

- 优先提出 3-5 个高价值澄清问题
- 若用户不补充信息，再基于最少必要假设继续
- 所有假设必须显式标注

## 禁止编造要求

Prompt 必须显式禁止编造以下内容：

- 需求、业务规则、接口、字段、状态流转
- 测试环境、浏览器版本、设备型号、依赖服务
- 团队角色、审批人、作者、审核人、日期、预算
- 缺陷数量、覆盖率、用户量、并发量、响应时间、可用性目标
- SLA/SLO、法规合规结论、安全评估结论

## 输出模板要求

- 强制字段应尽量少，优先保留真正高频且用户通常能提供的字段
- 审批人、审核日期、作者、版本号、执行人等元信息不应被默认强制输出
- 若模板中保留这些字段，必须允许填写“待补充”或“未提供”
- 如果用户要“策略/分析”，不要默认输出脚本、配置或实现代码
- 只有在用户明确要求，或输入已充分支持时，才输出脚本、配置和示例代码

## KPI 与示例值要求

- 示例值必须显式标识为示例，而不是默认目标
- 不允许把行业经验值写成确定目标
- 不允许在没有输入依据时直接写 `100%`、`99.9%`、`≤500ms`、`≥1000 RPS` 等数值

正确示例：

- `响应时间：[目标值，未提供则标注待确认]`
- `System response time: [Target value, mark as TBD if not provided]`

## README 要求

- 中文 README 默认指向中文 `Standard-version`
- 英文 README 默认指向英文 `Standard-version`
- 每个模块 README 必须提供版本选择说明
- 模块间互链必须使用相对真实路径，禁止使用错误的 `../testing-types/...` 结构

## 工作流角色 Prompt 要求

- 同一阶段的角色 Prompt 必须可独立使用，只读取该阶段声明的输入，不得依赖、读取或推测其他角色的输出
- 角色边界必须明确；PM 只整理管理信息，不得覆盖质量事实、风险等级、测试优先级或技术判断
- 需要条件参与的角色必须先依据输入证据输出“参与 / 不参与 / 待确认”判断，不能因角色名称默认参与，也不能静默省略“不参与”结果
- “不参与”或“待确认”仍应保留判断依据、未覆盖范围和证据缺口，供后续汇总追溯
- 缺少必需输入、版本无法对齐或材料不可读且会实质影响结果时，应进入阻塞 / 信息不足模式，不得用常识补造正式结论

## 工作流汇总 Prompt 要求

- 汇总 Prompt 必须明确列出允许输入；不得回读未声明材料，也不得代替缺失角色补做专业分析
- 所有事实、发现、分歧、风险和建议应保留角色来源，并尽量引用 Artifact 名称、版本、稳定 ID、章节或其他可核查定位
- 汇总可以去重、归类和统一格式，但不得以多数意见覆盖少数高风险发现；冲突必须并列保留
- 计划覆盖、测试用例存在和设计完成不得汇总为已执行事实；没有执行证据时必须降级为“未执行或证据不足”
- 汇总建议不等于人工审批、发布、豁免、风险接受或合并决定，不得预填这些 Human Task 状态

## Human Task 边界

- Prompt 可以为人工决策整理证据、差异、选项和建议，但不得冒充审批人或有权限的决策者
- 最终批准、驳回、发布、风险接受、豁免、负责人和排期确认必须留给有权限的人
- 如果输入包含人工决定，只能按其可核查来源和版本记录；不得从会议名称、角色存在或流程阶段推断决定已作出

## LangGPT 特殊要求

LangGPT 版本尽量保持原框架风格，但仍需覆盖以下能力：

- 在 `Constrains` 或等价位置约束禁止编造
- 在 `Workflow` 中加入输入审计和澄清判断
- 在 `Initialization` 中明确“先输入审计，再正式输出”

## 修改检查清单

- [ ] README 链接可用，默认入口指向 `Standard-version/`
- [ ] Prompt 已加入输入审计、禁止编造、降级输出
- [ ] 不存在硬编码 KPI 冒充真实目标
- [ ] 不存在“立即开始执行”式无条件输出指令
- [ ] 中英文版本行为一致
- [ ] Lite / Full / 各框架版本的核心约束一致
- [ ] 工作流角色 Prompt 保持独立，条件参与结果有依据且未被静默省略
- [ ] 工作流汇总保留角色与 Artifact 追溯、冲突和证据缺口
- [ ] 审批、发布、豁免和风险接受等 Human Task 未由 AI 代替
