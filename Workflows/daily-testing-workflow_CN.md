# 日常测试工作流程

## 📋 元数据
- **目标受众**：QA 工程师、测试自动化工程师
- **预计时间**：日常使用参考指南
- **最后更新**：2026-01-01
- **版本**：1.0

## 🎯 目标
为 QA 工程师提供实用的工作流程指南，帮助他们在日常测试活动中高效使用 QA 提示词库。

---

## 🌅 早晨例行工作

### 1. 审查测试计划（5-10分钟）
**使用的提示词**：
- [需求分析](../RequirementsAnalysis/RequirementsAnalysisPrompt.md) - 审查迭代目标
- [测试策略](../TestStrategy/TestStrategyPrompt.md) - 识别高风险区域

**行动**：
- 审查当天的用户故事
- 确定测试优先级
- 检查阻碍因素

### 2. 设置测试环境（10-15分钟）
**使用的提示词**：
- [自动化测试](../AutomationTesting/AutomationTestingPrompt.md) - 检查流水线状态
- [测试策略](../TestStrategy/TestStrategyPrompt.md) - 准备测试数据

**行动**：
- 验证测试环境已启动
- 准备必要的测试数据
- 更新本地测试自动化代码

---

## 📝 测试用例创建（30-60分钟）

### 针对新功能
**工作流程**：
1. 使用 [测试用例编写](../TestCaseWriting/TestCaseWritingPrompt.md)
2. 生成全面的测试场景
3. 添加 [需求分析](../RequirementsAnalysis/RequirementsAnalysisPrompt.md) 中的边界值测试
4. 使用 [功能测试](../FunctionalTesting/FunctionalTestingPrompt.md) 检查清单审查

**示例提示词流程**：
```
1. 生成功能测试 → 审查 → 优化
2. 添加边界值用例 → 审查 → 优化
3. 创建测试数据 → 验证
4. 在测试管理工具中记录
```

### 针对缺陷修复
**工作流程**：
1. 使用 [功能测试](../FunctionalTesting/FunctionalTestingPrompt.md) 回归测试场景
2. 创建测试以验证修复
3. 添加测试以防止回归

---

## 🤖 测试自动化（1-2小时）

### 编写新测试
**选择你的框架**：
- **Selenium**: 使用 [自动化测试](../AutomationTesting/AutomationTestingPrompt.md)
- **Playwright**: 使用 [自动化测试](../AutomationTesting/AutomationTestingPrompt.md)
- **API**: 使用 [API测试](../APITesting/APITestingPrompt.md)

**工作流程**：
1. 打开相关的自动化测试提示词
2. 使用提示词生成测试代码
3. 审查和定制
4. 本地运行
5. 提交到代码库

### 维护现有测试
**使用的提示词**：
- [自动化测试](../AutomationTesting/AutomationTestingPrompt.md) - 测试维护策略
- [AI辅助测试](../AIAssistedTesting/AIAssistedTestingPrompt.md) - 智能测试维护

**行动**：
- 修复不稳定的测试
- 更新选择器
- 重构重复代码

---

## 🔍 探索性测试（30-45分钟）

### 基于会话的测试
**工作流程**：
1. 使用 [手动测试](../ManualTesting/ManualTestingPrompt.md) 探索性测试场景
2. 创建测试章程
3. 限时会话（60-90分钟）
4. 记录发现
5. 记录缺陷

**章程模板**：
```
任务：[要探索的内容]
持续时间：[时间限制]
区域：[特定功能/流程]
启发式方法：[SFDPOT、FEW HICCUPS 等]
```

---

## 🐛 缺陷上报（15-30分钟）

### 当你发现缺陷时
**工作流程**：
1. 使用 [缺陷上报](../BugReporting/BugReportingPrompt.md) 模板
2. 生成详细的缺陷报告
3. 包含重现步骤
4. 添加截图/视频
5. 在问题跟踪器中记录

**质量检查清单**：
- [ ] 清晰的标题
- [ ] 重现步骤
- [ ] 预期与实际行为
- [ ] 环境详情
- [ ] 截图/日志

---

## 🎨 可视化测试（30-45分钟）

### 针对 UI 变更
**工作流程**：
1. 使用 [可访问性测试](../AccessibilityTesting/AccessibilityTestingPrompt.md) 视觉测试场景
2. 设置视觉回归测试
3. 捕获基线截图
4. 运行对比测试
5. 审查差异

**工具**：
- Percy、Applitools、BackstopJS
- 与 CI/CD 集成

---

## 🔄 端到端测试（1-2小时）

### 针对关键用户旅程
**工作流程**：
1. 使用 [功能测试](../FunctionalTesting/FunctionalTestingPrompt.md) 端到端场景
2. 映射完整的用户旅程
3. 生成端到端测试代码
4. 跨所有系统验证
5. 添加到回归套件

**关注领域**：
- 登录 → 购买流程
- 用户注册 → 首次操作
- 关键业务流程

---

## 📊 下午审查（30分钟）

### 1. 测试执行审查
**行动**：
- 检查 CI/CD 流水线结果
- 审查失败的测试
- 更新测试报告

### 2. 指标和报告
**使用的提示词**：
- [测试报告](../TestReporting/TestReportingPrompt.md)
- [测试策略](../TestStrategy/TestStrategyPrompt.md) - 质量评估

**生成**：
- 测试覆盖率报告
- 缺陷指标
- 质量仪表板

### 3. 团队同步
**分享**：
- 发现的缺陷
- 自动化的测试
- 识别的阻碍
- 明天的计划

---

## 🌙 每日结束（15分钟）

### 总结
**行动**：
- [ ] 提交所有代码更改
- [ ] 更新测试文档
- [ ] 在测试管理工具中记录时间
- [ ] 更新任务状态
- [ ] 计划明天的优先事项

### 知识分享
**可选**：
- 记录学习内容
- 更新团队 wiki
- 与团队分享有用的提示词

---

## 🔧 工具快速访问

### 最常用的提示词
1. [测试用例编写](../TestCaseWriting/TestCaseWritingPrompt.md)
2. [自动化测试](../AutomationTesting/AutomationTestingPrompt.md)
3. [API测试](../APITesting/APITestingPrompt.md)
4. [缺陷上报](../BugReporting/BugReportingPrompt.md)
5. [手动测试](../ManualTesting/ManualTestingPrompt.md)

---

## 💡 专业提示

1. **批量处理类似任务**：将测试用例创建、自动化和探索性测试分组
2. **使用快速参考**：收藏快速参考指南以便快速查找
3. **利用 AI 角色**：在 IDE 中保持 AI 角色打开
4. **边做边记录**：不要等到一天结束
5. **自动化重复任务**：使用 AI 生成样板代码
6. **限时探索**：坚持会话限制
7. **每日审查**：每天下午检查测试结果

---

## 📅 每周活动

### 周一
- 审查迭代目标
- 计划本周测试
- 设置测试环境

### 周二至周四
- 执行日常工作流程
- 专注于测试自动化
- 探索性测试会话

### 周五
- 回归测试
- 生成测试报告
- 知识分享
- 准备迭代回顾

---

## 🚨 当出现问题时

### 流水线失败
1. 检查 [自动化测试](../AutomationTesting/AutomationTestingPrompt.md) CI/CD 集成
2. 调试失败的测试
3. 修复并重新运行

### 不稳定的测试
1. 使用 [自动化测试](../AutomationTesting/AutomationTestingPrompt.md) 维护策略
2. 实施适当的等待
3. 添加重试逻辑

### 测试被阻塞
1. 记录阻碍
2. 寻找替代测试区域
3. 使用 [测试策略](../TestStrategy/TestStrategyPrompt.md) 重新确定优先级

---

## 📚 相关工作流程

- [迭代测试工作流程](sprint-testing-workflow_CN.md) - 迭代特定活动
- [发布测试工作流程](release-testing-workflow_CN.md) - 发布前检查清单

---

**记住**：这是一个灵活的指南。根据团队的需求和项目要求进行调整！
