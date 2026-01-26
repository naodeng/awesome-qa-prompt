# TOP 5 提示词框架详细介绍

本目录包含 QA 测试场景中最优先使用的 **TOP 5 提示词框架**的详细介绍和示例。

## 📋 框架列表

### 1. ROSES
**Role Objective Scenario Expected Solution Steps**

ROSES 框架将提示词结构化为五个核心部分，适合需要明确角色定位和步骤指导的测试场景。

📄 [查看 ROSES 框架](./ROSES.md)

**核心要素：**
- **Role（角色）**：指定 AI 的角色定位
- **Objective（目标）**：明确要实现的目标或任务
- **Scenario（场景）**：提供相关的背景信息和上下文
- **Expected Solution（预期解决方案）**：描述期望的解决方案或结果
- **Steps（步骤）**：实现解决方案所需的具体步骤

### 2. LangGPT
**LangGPT 结构化提示词框架**

LangGPT 是一个全面的结构化提示词框架，适合复杂的测试场景设计。

📄 [查看 LangGPT 框架](./LangGPT.md)

**核心要素：**
- **Role（角色）**：AI 的角色定义
- **Profile（背景）**：角色背景和能力描述
- **Goals（目标）**：明确的目标和任务
- **Constraints（约束）**：限制条件和规则
- **Skills（技能）**：所需技能和能力
- **Workflows（工作流程）**：执行步骤和流程
- **Initialization（初始化）**：初始设置和准备

### 3. ICIO
**Instruction Context Input Data Output Indicator**

ICIO 框架强调指令、上下文、输入数据、输出和指标五个维度，适合需要明确输入输出和评估指标的测试场景。

📄 [查看 ICIO 框架](./ICIO.md)

**核心要素：**
- **Instruction（指令）**：明确的指令和任务要求
- **Context（上下文）**：相关的背景信息和环境
- **Input Data（输入数据）**：所需的输入数据和信息
- **Output（输出）**：期望的输出格式和内容
- **Indicator（指标）**：评估和验证的标准

### 4. CRISPE
**Capacity Role Insight Statement Personality Experiment**

CRISPE 框架包含能力、角色、洞察、陈述、个性和实验六个要素，适合需要深度分析和实验性测试的场景。

📄 [查看 CRISPE 框架](./CRISPE.md)

**核心要素：**
- **Capacity（能力）**：AI 的能力和专长
- **Role（角色）**：角色定位和身份
- **Insight（洞察）**：深度理解和分析
- **Statement（陈述）**：明确的陈述和要求
- **Personality（个性）**：表达风格和个性特征
- **Experiment（实验）**：实验性方法和尝试

### 5. RISE
**Role Input Steps Expectation**

RISE 框架简洁明了，包含角色、输入、步骤和期望四个要素，适合快速构建测试提示词的场景。

📄 [查看 RISE 框架](./RISE.md)

**核心要素：**
- **Role（角色）**：AI 的角色定位
- **Input（输入）**：输入信息和数据
- **Steps（步骤）**：执行步骤和流程
- **Expectation（期望）**：期望的结果和输出

## 🎯 如何选择框架

### 按复杂度选择
- **简单快速**：RISE（4 要素）
- **中等复杂**：ICIO、CRISPE（5-6 要素）
- **全面详细**：ROSES、LangGPT（5+ 要素）

### 按场景选择
- **角色扮演和步骤指导**：ROSES、RISE
- **复杂场景设计**：LangGPT
- **输入输出明确**：ICIO
- **深度分析实验**：CRISPE

### 推荐使用
根据 QA 测试场景的实践，**ROSES 框架**表现最佳，因为它：
- 明确了角色定位
- 清楚说明了目标和任务
- 提供了场景背景
- 给出了完成任务的步骤
- 对测试场景设计提供了很好的指导

## 📖 实际应用

每个框架在 `testing-types/` 目录下的各个测试类型中都有实际应用示例：

- **Standard-version/** - 标准版本提示词
- **ROSES-version/** - ROSES 框架版本（完整版/精简版，中英文）
- **LangGPT-version/** - LangGPT 框架版本（完整版/精简版，中英文）
- **ICIO-version/** - ICIO 框架版本（完整版/精简版，中英文）
- **CRISPE-version/** - CRISPE 框架版本（完整版/精简版，中英文）
- **RISE-version/** - RISE 框架版本（完整版/精简版，中英文）

## 📚 参考资料

- [Prompt Engineering 提示工程](https://zhuanlan.zhihu.com/p/714268516)
- [OpenAI Prompt Engineering](https://zhuanlan.zhihu.com/p/718936272)
- [十种 Prompt 框架，快速创作优质的 Prompt](https://juejin.cn/post/7287412759050289212)

---

**最后更新**: 2025-01-26
