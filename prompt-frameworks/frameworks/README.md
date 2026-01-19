# Prompt 提示词框架格式集合

本目录包含了基础格式和 20 种常见的提示词方法论框架，每个框架都以独立的 Markdown 文件形式呈现。

## 统一测试用例

为了便于对比不同框架的效果，所有框架都使用统一的测试用例：

**作为一个资深 web 测试人员，正在编写一个项目的测试用例，用例需要包含正向和反向场景，格式为 markdown 格式，首先，先收集项目的需求，进行需求分析后，再进行测试用例编写**

通过这个统一的测试用例，您可以直观地看到不同框架在处理同一任务时的差异和特点。

## 文件列表

### 基础格式
- **00-base.md** - Prompt 基础格式和结构说明

### 18 种经典提示词框架

1. **01-APE.md** - Action Purpose Expect（行动-目的-期望）框架
2. **02-BROKE.md** - Background Role Objectives Key Result Evolve 框架
3. **03-CHAT.md** - Character History Ambition Task 框架
4. **04-CRISPE.md** - Capacity Role Insight Statement Personality Experiment 框架
5. **05-CARE.md** - Context Action Result Example 框架
6. **06-COAST.md** - Context Objective Action Support Technology 框架
7. **07-CREATE.md** - Clarity Relevant info Examples Avoid ambiguity Tinker 框架
8. **08-RACE.md** - Role Action Context Example 框架
9. **09-RISE.md** - Role Input Steps Expectation 框架
10. **10-ROSES.md** - Role Objective Scenario Expected Solution Steps 框架
11. **11-RTF.md** - Role Task Format 框架
12. **12-SAGE.md** - Situation Action Goal Expectation 框架
13. **13-SCOPE.md** - Scenario Complications Objective Plan Evaluation 框架
14. **14-SPA.md** - Scenario Problem Action Result 框架
15. **15-TAG.md** - Task Action Goal 框架
16. **16-TRACE.md** - Task Request Action Context Example 框架
17. **17-LangGPT.md** - LangGPT 结构化提示词框架
18. **18-Google.md** - Google 提示词工程最佳实践

### 扩展框架

1.  **20-ICIO.md** - Instruction Context Input Data Output Indicator 框架

## 使用说明

每个框架文件都包含以下内容：

1. **概念** - 框架的核心要素和基本介绍
2. **示例** - 基于统一测试用例的实际应用示例
3. **完整 Prompt** - 可直接使用的提示词
4. **适用场景** - 框架最适合的使用场景
5. **优势** - 框架的特点和优势

## 如何选择合适的框架

### 按复杂度选择
- **简单快速**：APE、TAG、RTF（3 要素）
- **中等复杂**：ICIO、CRISPE、BROKE（4-5 要素）
- **全面详细**：ROSES、TRACE、SCOPE（5+ 要素）

### 按场景选择
- **角色扮演**：CHAT、CRISPE、RTF、ROSES
- **任务执行**：APE、TAG、ICIO、TRACE
- **问题解决**：SPA、SAGE、SCOPE
- **迭代优化**：BROKE、CREATE
- **格式控制**：ICIO、RTF、Google

### 推荐组合
根据测试用例的实践，**ROSES 框架**表现最佳，因为它：
- 明确了角色定位
- 清楚说明了目标和任务
- 提供了场景背景
- 给出了完成任务的步骤
- 对撰写 200 字简介提供了很好的指导

## 参考资料

- [solate：Prompt Engineering 提示工程](https://zhuanlan.zhihu.com/p/714268516)
- [solate：OpenAI Prompt Engineering](https://zhuanlan.zhihu.com/p/718936272)
- [十种 Prompt 框架，快速创作优质的 Prompt](https://juejin.cn/post/7287412759050289212)
- GitHub - mattnigh/ChatGPT3-Free-Prompt-List

## 贡献

欢迎提交新的提示词框架或改进现有框架的说明。

## Prompt 创作者模板

如果您想批量生成多个框架的 Prompt，可以使用以下结构化模板：

```markdown
# Role: Prompt创作者

## Profile:
- author: 吕郭飞
- version: 0.1
- language: 中文
- description: 我是一名熟悉Prompt的基础框架的Prompt创作者，可以根据要求的主题创作Prompt。

## Goals:
根据用户提供的主题，尝试使用你所熟知的所有Prompt框架进行Prompt创作。

## Constrains:
1. 你不擅长客套, 不会进行没有意义的夸奖和客气对话
2. 按照要求生成，不会有多余的回复

## Skills:
你要学习并牢记常用的 Prompt 框架（如 ICIO、CRISPE、BROKE、CREATE、TAG、RTF、ROSES、APE、RACE、TRACE 等）

## Workflows:
1. 一步一步执行
2. 使用你熟悉的 Prompt 框架，逐个对主题进行分析创作
3. 使用统一的格式输出结果
4. 在创作的 Prompt 中挑出你认为质量最好的一条，并说明原因

# Initialization:
作为Prompt创作专家，我拥有广泛的Prompt创作的技巧，严格遵守尊重用户和提供准确信息的原则。我会使用默认的中文与您进行对话，首先我会友好地欢迎您，然后会向您介绍我自己以及我的工作流程。
```
