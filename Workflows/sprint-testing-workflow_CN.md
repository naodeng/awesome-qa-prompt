# 迭代测试工作流程

## 📋 元数据
- **目标受众**：QA 工程师、Scrum 团队
- **迭代持续时间**：2周（典型）
- **最后更新**：2026-01-01
- **版本**：1.0

## 🎯 目标
2周迭代周期的完整测试工作流程，从规划到回顾。

---

## 📅 迭代规划（第1天）

### 上午：迭代规划会议
**准备工作**（会议前）：
- 审查产品待办列表
- 使用 [测试策略](../testing-types/test-strategy/TestStrategyPrompt.md) 分析即将到来的故事

**会议期间**：
- 理解验收标准
- 识别可测试的需求
- 估算测试工作量
- 标记测试依赖项

### 下午：测试规划
**使用的提示词**：
- [测试策略](../testing-types/test-strategy/TestStrategyPrompt.md)
- [需求分析](../testing-types/requirements-analysis/RequirementsAnalysisPrompt.md)

**交付物**：
- [ ] 测试策略文档
- [ ] 定义测试范围
- [ ] 测试环境需求
- [ ] 识别测试数据需求
- [ ] 识别自动化候选项

**模板**：
```
迭代：[迭代编号]
故事：[列出用户故事]
测试重点：[要测试的区域]
自动化计划：[要自动化的内容]
风险：[识别的风险]
```

---

## 🏗️ 迭代第2-3天：设置和早期测试

### 测试环境设置
**行动**：
- 设置测试环境
- 配置 CI/CD 流水线
- 准备测试数据

**使用的提示词**：
- [自动化测试](../testing-types/automation-testing/AutomationTestingPrompt.md)
- [测试策略](../testing-types/test-strategy/TestStrategyPrompt.md) - 测试数据生成

### 早期故事测试
**针对就绪的故事**：
1. 使用 [测试用例编写](../testing-types/test-case-writing/TestCaseWritingPrompt.md) 生成测试用例
2. 与开发人员审查
3. 开始对已完成工作进行探索性测试

---

## 🚀 迭代第4-8天：积极开发和测试

### 每日活动

#### 早晨站会
**报告**：
- 昨天完成的测试
- 今天计划的测试
- 阻碍因素

#### 测试执行
**手动测试**：
- 执行已完成故事的测试用例
- 使用 [手动测试](../testing-types/manual-testing/ManualTestingPrompt.md) 对新功能进行探索性测试
- 使用 [缺陷上报](../testing-types/bug-reporting/BugReportingPrompt.md) 记录缺陷

**自动化**：
- 为已完成的故事编写自动化测试
- 使用框架特定的提示词：
  - [自动化测试](../testing-types/automation-testing/AutomationTestingPrompt.md)
  - [API测试](../testing-types/api-testing/APITestingPrompt.md)

#### 缺陷分类（每日）
**流程**：
1. 审查新缺陷
2. 与团队确定优先级
3. 重新测试已修复的缺陷
4. 更新缺陷状态

### 迭代中期审查（第5-6天）
**行动**：
- 审查测试进度
- 根据需要调整测试计划
- 识别有风险的故事
- 更新自动化覆盖率

**要检查的指标**：
- 测试执行率
- 缺陷发现率
- 自动化覆盖率
- 故事完成与测试对比

---

## 🔍 迭代第9-10天：密集测试

### 回归测试
**使用的提示词**：
- [功能测试](../testing-types/functional-testing/FunctionalTestingPrompt.md) - 回归测试场景
- [AI辅助测试](../testing-types/ai-assisted-testing/AIAssistedTestingPrompt.md) - 智能测试选择

**执行**：
- 自动化回归套件
- 关键路径的手动回归
- 跨浏览器测试
- 移动端测试（如适用）

### 集成测试
**使用的提示词**：
- [功能测试](../testing-types/functional-testing/FunctionalTestingPrompt.md) - 端到端场景
- [API测试](../testing-types/api-testing/APITestingPrompt.md) - API集成

**测试**：
- 端到端用户旅程
- 系统集成
- 跨服务的数据流

### 可视化测试
**使用的提示词**：
- [可访问性测试](../testing-types/accessibility-testing/AccessibilityTestingPrompt.md) - 视觉测试

**行动**：
- 运行视觉回归测试
- 审查 UI 变更
- 验证响应式设计

---

## ✅ 迭代第11天：稳定化

### 缺陷突击（可选）
**形式**：
- 2小时集中测试会话
- 整个团队参与
- 使用 [手动测试](../testing-types/manual-testing/ManualTestingPrompt.md) 探索性测试章程

### 最终缺陷修复
**优先级**：
- 必须修复严重缺陷
- 审查高优先级缺陷
- 中/低优先级缺陷移至待办列表

### 测试完成
**检查清单**：
- [ ] 所有故事已测试
- [ ] 严重缺陷已修复并重新测试
- [ ] 回归套件已通过
- [ ] 自动化已更新
- [ ] 测试报告已生成

---

## 📊 迭代第12天：评审和演示

### 迭代评审准备
**使用的提示词**：
- [测试报告](../testing-types/test-reporting/TestReportingPrompt.md)
- [测试策略](../testing-types/test-strategy/TestStrategyPrompt.md) - 质量评估

**准备**：
- 测试执行摘要
- 缺陷指标
- 自动化覆盖率报告
- 质量仪表板

### 迭代评审会议
**展示**：
- 测试成就
- 质量指标
- 已知问题
- 下一迭代的风险

**演示**：
- 展示自动化测试（如相关）
- 演示测试覆盖率

---

## 🔄 迭代第13天：回顾和规划

### 迭代回顾
**测试重点**：
- 测试中哪些进展顺利？
- 我们面临了哪些测试挑战？
- 如何改进测试流程？
- 下一迭代的行动项

**讨论主题**：
- 测试自动化有效性
- 缺陷发现时机
- 测试环境问题
- 需要改进的工具

### 下一迭代准备
**行动**：
- 审查即将到来的故事
- 识别测试挑战
- 计划自动化工作
- 更新测试策略

---

## 📈 持续活动（整个迭代期间）

### 每日
- [ ] 执行测试用例
- [ ] 记录和跟踪缺陷
- [ ] 更新测试自动化
- [ ] 审查 CI/CD 结果
- [ ] 与开发人员同步

### 每2-3天
- [ ] 更新测试指标
- [ ] 审查自动化覆盖率
- [ ] 重构测试代码
- [ ] 更新文档

### 每周
- [ ] 团队测试同步
- [ ] 审查测试策略
- [ ] 更新风险分析
- [ ] 知识分享

---

## 🎯 按迭代阶段划分的测试优先级

### 迭代早期（第1-4天）
**重点**：规划和设置
- 测试规划
- 环境设置
- 早期故事测试
- 自动化框架更新

### 迭代中期（第5-8天）
**重点**：积极测试
- 功能测试
- 缺陷修复
- 自动化开发
- 探索性测试

### 迭代后期（第9-12天）
**重点**：稳定化
- 回归测试
- 集成测试
- 缺陷验证
- 质量报告

---

## 🚨 需要注意的危险信号

### 测试落后
**迹象**：
- 故事标记为"完成"但未测试
- 未测试的待办列表不断增长
- 自动化覆盖率下降

**行动**：
1. 向 Scrum Master 上报
2. 重新确定测试优先级
3. 请求团队帮助
4. 根据需要调整范围

### 质量问题
**迹象**：
- 迭代后期缺陷数量高
- 发现严重缺陷
- 回归失败

**行动**：
1. 使用 [测试策略](../testing-types/test-strategy/TestStrategyPrompt.md) 风险分析
2. 专注于关键路径
3. 考虑延长迭代
4. 计划技术债务迭代

### 环境问题
**迹象**：
- 频繁的环境停机
- 数据问题
- CI/CD 失败

**行动**：
1. 记录问题
2. 与 DevOps 合作
3. 制定备用计划
4. 尽可能在本地测试

---

## 📋 迭代测试检查清单

### 迭代开始
- [ ] 测试计划已创建
- [ ] 环境已就绪
- [ ] 测试数据已准备
- [ ] 自动化框架已更新
- [ ] 团队对测试方法达成一致

### 迭代中期
- [ ] 50%+ 故事已测试
- [ ] 自动化正在进行
- [ ] 缺陷正在修复
- [ ] 没有重大阻碍

### 迭代结束
- [ ] 所有故事已测试
- [ ] 回归已通过
- [ ] 严重缺陷已修复
- [ ] 测试报告已准备
- [ ] 演示已准备

---

## 🔧 按迭代阶段推荐的提示词

### 规划阶段
- [测试策略](../testing-types/test-strategy/TestStrategyPrompt.md)
- [需求分析](../testing-types/requirements-analysis/RequirementsAnalysisPrompt.md)

### 执行阶段
- [测试用例编写](../testing-types/test-case-writing/TestCaseWritingPrompt.md)
- [手动测试](../testing-types/manual-testing/ManualTestingPrompt.md)
- [API测试](../testing-types/api-testing/APITestingPrompt.md)
- [自动化测试](../testing-types/automation-testing/AutomationTestingPrompt.md)

### 稳定化阶段
- [功能测试](../testing-types/functional-testing/FunctionalTestingPrompt.md)
- [可访问性测试](../testing-types/accessibility-testing/AccessibilityTestingPrompt.md)

### 评审阶段
- [测试报告](../testing-types/test-reporting/TestReportingPrompt.md)

---

## 📚 相关工作流程

- [日常测试工作流程](daily-testing-workflow_CN.md) - 日常活动
- [发布测试工作流程](release-testing-workflow_CN.md) - 发布前流程

---

**记住**：根据团队的迭代长度和流程调整此工作流程。沟通是关键！
