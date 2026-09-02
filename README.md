<div align="right"><strong>简体中文</strong> · <a href="./README_EN.md">English</a></div>

# Awesome QA Prompt

<div align="center">
  <img src="https://inaodeng.com/prompts.svg" alt="Awesome QA Prompt" width="800"/>
</div>

[![Prompt Check](https://img.shields.io/github/actions/workflow/status/naodeng/awesome-qa-prompt/prompt-check.yml?branch=main&label=prompt%20check)](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/prompt-check.yml)
[![License: PolyForm Noncommercial 1.0.0](https://img.shields.io/badge/License-PolyForm%20Noncommercial%201.0.0-blue)](./LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/naodeng/awesome-qa-prompt?style=social)](https://github.com/naodeng/awesome-qa-prompt)

面向 QA 工作的 **Prompt Baseline**：提供可复制使用、强调输入审计和证据边界的中英文提示词，覆盖需求、测试设计、自动化、性能、安全、发布、生产质量和 AI 测试。

> 本仓库提供 Prompt，不是可安装的 Skill 包。需要 Agent Skill 时，请访问 [Awesome QA Skills](https://github.com/naodeng/awesome-qa-skills)。

[在线文档](https://inaodeng.com/prompts) · [完整 Prompt 目录](./PROMPT_COVERAGE_200.md) · [Testing Workflows](./Workflows/zh/README.md) · [贡献指南](./CONTRIBUTING.md)

## 快速使用

1. 从下方分类中选择 Prompt，或使用 [Testing Prompt Router](./Workflows/zh/discover-testing/README.md)。
2. 打开模块的 `Standard-version`；小任务可按需选择 Lite 或框架变体。
3. 将真实材料放入 Prompt 的 `<qa_context>`，不要补写不存在的指标、环境或结论。
4. 使用输出前检查假设、待确认项和证据来源。

## Prompt 分类目录

当前目录覆盖 **205 项能力、205 个独立模块**。以下十个分类直接展示全部 Prompt；带原始编号和 Standard 文件直链的矩阵见 [完整 Prompt 目录](./PROMPT_COVERAGE_200.md)。

### 1. 需求、规划与测试策略

共 16 项。

| Prompt | 原始类型 | 模块入口 |
| --- | --- | --- |
| 需求分析器 / Requirement Analyzer | 需求分析 | [requirements-analysis](./testing-types/zh/requirements-analysis/README.md) |
| 验收标准审查器 / Acceptance Criteria Reviewer | 需求分析 | [acceptance-criteria-reviewer](./testing-types/zh/acceptance-criteria-reviewer/README.md) |
| 需求缺口分析器 / Requirement Gap Analyzer | 需求分析 | [requirement-gap-analyzer](./testing-types/zh/requirement-gap-analyzer/README.md) |
| 可测试性分析器 / Testability Analyzer | 需求分析 | [testability-analysis](./testing-types/zh/testability-analysis/README.md) |
| 测试策略生成器 / Test Strategy Generator | 测试策略 | [test-strategy](./testing-types/zh/test-strategy/README.md) |
| 测试计划生成器 / Test Plan Generator | 测试计划 | [test-plan-design](./testing-types/zh/test-plan-design/README.md) |
| 测试范围分析器 / Test Scope Analyzer | 测试策略 | [test-scope-analysis](./testing-types/zh/test-scope-analysis/README.md) |
| 需求梳理 QA 助手 / Refinement QA Assistant | 敏捷测试 | [refinement-qa-assistant](./testing-types/zh/refinement-qa-assistant/README.md) |
| Sprint Planning QA 助手 / Sprint Planning QA Assistant | 敏捷测试 | [sprint-planning-qa](./testing-types/zh/sprint-planning-qa/README.md) |
| Sprint 回顾分析器 / Retrospective Analyzer | 敏捷测试 | [retrospective-analysis](./testing-types/zh/retrospective-analysis/README.md) |
| 业务规则分析器 / Business Rule Analyzer | 需求分析 | [business-rule-analysis](./testing-types/zh/business-rule-analysis/README.md) |
| 业务流程分析器 / Business Flow Analyzer | 需求分析 | [business-flow-analysis](./testing-types/zh/business-flow-analysis/README.md) |
| 需求依赖分析器 / Requirement Dependency Analyzer | 需求分析 | [requirement-dependency-analysis](./testing-types/zh/requirement-dependency-analysis/README.md) |
| 需求冲突检测器 / Requirement Conflict Detector | 需求分析 | [requirement-conflict-analysis](./testing-types/zh/requirement-conflict-analysis/README.md) |
| 非功能需求分析器 / NFR Analyzer | 非功能测试 | [nfr-analysis](./testing-types/zh/nfr-analysis/README.md) |
| 需求测试追踪分析器 / Requirement Traceability Analyzer | 测试治理 | [requirement-traceability-analysis](./testing-types/zh/requirement-traceability-analysis/README.md) |

[查看该分类的编号与 Standard Prompt →](./PROMPT_COVERAGE_200.md#1-需求规划与测试策略)

### 2. 测试分析与测试设计

共 22 项。

| Prompt | 原始类型 | 模块入口 |
| --- | --- | --- |
| 测试场景设计器 / Test Scenario Designer | 测试设计 | [test-scenario-design](./testing-types/zh/test-scenario-design/README.md) |
| 测试用例生成器 / Test Case Generator | 测试设计 | [test-case-writing](./testing-types/zh/test-case-writing/README.md) |
| 边界值分析器 / Boundary Value Analyzer | 测试设计 | [boundary-value-analysis](./testing-types/zh/boundary-value-analysis/README.md) |
| 等价类分析器 / Equivalence Partition Analyzer | 测试设计 | [equivalence-partition-analysis](./testing-types/zh/equivalence-partition-analysis/README.md) |
| 决策表生成器 / Decision Table Generator | 测试设计 | [decision-table-analysis](./testing-types/zh/decision-table-analysis/README.md) |
| 状态转换分析器 / State Transition Analyzer | 测试设计 | [state-transition-analysis](./testing-types/zh/state-transition-analysis/README.md) |
| Pairwise 组合测试生成器 / Pairwise Test Generator | 测试设计 | [pairwise-test-design](./testing-types/zh/pairwise-test-design/README.md) |
| 端到端测试场景设计器 / E2E Scenario Designer | E2E 测试 | [functional-testing](./testing-types/zh/functional-testing/README.md) |
| UI 测试设计器 / UI Test Designer | UI 测试 | [ui-test-design](./testing-types/zh/ui-test-design/README.md) |
| 用户旅程分析器 / User Journey Analyzer | E2E 测试 | [user-journey-analysis](./testing-types/zh/user-journey-analysis/README.md) |
| 探索式测试助手 / Exploratory Testing Assistant | 探索式测试 | [manual-testing](./testing-types/zh/manual-testing/README.md) |
| 探索式测试章程生成器 / Test Charter Generator | 探索式测试 | [test-charter-generation](./testing-types/zh/test-charter-generation/README.md) |
| 测试启发式分析器 / Testing Heuristics Analyzer | 测试设计 | [testing-heuristics-analysis](./testing-types/zh/testing-heuristics-analysis/README.md) |
| 错误猜测分析器 / Error Guessing Analyzer | 测试设计 | [error-guessing-analysis](./testing-types/zh/error-guessing-analysis/README.md) |
| 兼容性测试设计器 / Compatibility Test Designer | 兼容性测试 | [compatibility-test-design](./testing-types/zh/compatibility-test-design/README.md) |
| 浏览器兼容性分析器 / Browser Compatibility Analyzer | 兼容性测试 | [browser-compatibility-analysis](./testing-types/zh/browser-compatibility-analysis/README.md) |
| 移动端兼容性分析器 / Mobile Compatibility Analyzer | 兼容性测试 | [mobile-compatibility-analysis](./testing-types/zh/mobile-compatibility-analysis/README.md) |
| 多语言测试设计器 / Localization Test Designer | 国际化测试 | [localization-test-design](./testing-types/zh/localization-test-design/README.md) |
| 国际化问题分析器 / Internationalization Analyzer | 国际化测试 | [internationalization-analysis](./testing-types/zh/internationalization-analysis/README.md) |
| 时区测试设计器 / Timezone Test Designer | 国际化测试 | [timezone-test-design](./testing-types/zh/timezone-test-design/README.md) |
| 测试用例优化器 / Test Case Optimizer | 测试治理 | [test-case-optimization](./testing-types/zh/test-case-optimization/README.md) |
| 测试用例优先级分析器 / Test Case Prioritizer | 测试治理 | [test-case-prioritization](./testing-types/zh/test-case-prioritization/README.md) |

[查看该分类的编号与 Standard Prompt →](./PROMPT_COVERAGE_200.md#2-测试分析与测试设计)

### 3. API、契约、消息与集成

共 32 项。

| Prompt | 原始类型 | 模块入口 |
| --- | --- | --- |
| API 测试设计器 / API Test Designer | API 测试 | [api-testing](./testing-types/zh/api-testing/README.md) |
| API 负向测试生成器 / API Negative Test Generator | API 测试 | [api-negative-testing](./testing-types/zh/api-negative-testing/README.md) |
| API Schema 校验器 / API Schema Validator | API 测试 | [api-schema-validation](./testing-types/zh/api-schema-validation/README.md) |
| API 契约分析器 / API Contract Analyzer | API 测试 | [api-contract-analysis](./testing-types/zh/api-contract-analysis/README.md) |
| Pytest 测试生成器 / Pytest Test Generator | 自动化测试 | [api-test-pytest](./testing-types/zh/api-test-pytest/README.md) |
| Mock API 生成器 / Mock API Generator | Mock 测试 | [mock-api-generation](./testing-types/zh/mock-api-generation/README.md) |
| API 依赖分析器 / API Dependency Analyzer | API 测试 | [api-dependency-analysis](./testing-types/zh/api-dependency-analysis/README.md) |
| API 调用链分析器 / API Call Chain Analyzer | API 测试 | [api-call-chain-analysis](./testing-types/zh/api-call-chain-analysis/README.md) |
| API 回归影响分析器 / API Regression Impact Analyzer | API 测试 | [api-regression-impact](./testing-types/zh/api-regression-impact/README.md) |
| API 兼容性分析器 / API Compatibility Analyzer | API 测试 | [api-compatibility-analysis](./testing-types/zh/api-compatibility-analysis/README.md) |
| API 版本变更分析器 / API Version Change Analyzer | API 测试 | [api-version-change-analysis](./testing-types/zh/api-version-change-analysis/README.md) |
| OpenAPI 规范分析器 / OpenAPI Specification Analyzer | API 测试 | [openapi-specification-analysis](./testing-types/zh/openapi-specification-analysis/README.md) |
| GraphQL 测试设计器 / GraphQL Test Designer | API 测试 | [graphql-test-design](./testing-types/zh/graphql-test-design/README.md) |
| WebSocket 测试设计器 / WebSocket Test Designer | API 测试 | [websocket-test-design](./testing-types/zh/websocket-test-design/README.md) |
| 幂等性测试设计器 / Idempotency Test Designer | API 测试 | [idempotency-test-design](./testing-types/zh/idempotency-test-design/README.md) |
| 分页测试设计器 / Pagination Test Designer | API 测试 | [pagination-test-design](./testing-types/zh/pagination-test-design/README.md) |
| 限流测试设计器 / Rate Limit Test Designer | API 测试 | [rate-limit-test-design](./testing-types/zh/rate-limit-test-design/README.md) |
| 重试机制测试设计器 / Retry Test Designer | API 测试 | [retry-mechanism-test-design](./testing-types/zh/retry-mechanism-test-design/README.md) |
| 契约测试生成器 / Contract Test Generator | 契约测试 | [contract-test-generation](./testing-types/zh/contract-test-generation/README.md) |
| Consumer Contract 分析器 / Consumer Contract Analyzer | 契约测试 | [consumer-contract-analysis](./testing-types/zh/consumer-contract-analysis/README.md) |
| Provider Contract 分析器 / Provider Contract Analyzer | 契约测试 | [provider-contract-analysis](./testing-types/zh/provider-contract-analysis/README.md) |
| Kafka 测试设计器 / Kafka Test Designer | 消息测试 | [kafka-test-design](./testing-types/zh/kafka-test-design/README.md) |
| Kafka Event 生成器 / Kafka Event Generator | 消息测试 | [kafka-event-generation](./testing-types/zh/kafka-event-generation/README.md) |
| 消息一致性分析器 / Message Consistency Analyzer | 消息测试 | [message-consistency-analysis](./testing-types/zh/message-consistency-analysis/README.md) |
| 消息重复消费测试器 / Duplicate Message Test Designer | 消息测试 | [duplicate-message-testing](./testing-types/zh/duplicate-message-testing/README.md) |
| 消息顺序测试设计器 / Message Ordering Test Designer | 消息测试 | [message-ordering-test-design](./testing-types/zh/message-ordering-test-design/README.md) |
| 消息丢失分析器 / Message Loss Analyzer | 消息测试 | [message-loss-analysis](./testing-types/zh/message-loss-analysis/README.md) |
| 异步流程测试设计器 / Async Flow Test Designer | 集成测试 | [async-flow-test-design](./testing-types/zh/async-flow-test-design/README.md) |
| 微服务依赖分析器 / Microservice Dependency Analyzer | 微服务测试 | [microservice-dependency-analysis](./testing-types/zh/microservice-dependency-analysis/README.md) |
| 服务调用链分析器 / Service Call Chain Analyzer | 微服务测试 | [service-call-chain-analysis](./testing-types/zh/service-call-chain-analysis/README.md) |
| 分布式事务测试设计器 / Distributed Transaction Test Designer | 微服务测试 | [distributed-transaction-test-design](./testing-types/zh/distributed-transaction-test-design/README.md) |
| 最终一致性测试设计器 / Eventual Consistency Test Designer | 微服务测试 | [eventual-consistency-test-design](./testing-types/zh/eventual-consistency-test-design/README.md) |

[查看该分类的编号与 Standard Prompt →](./PROMPT_COVERAGE_200.md#3-api契约消息与集成)

### 4. 自动化与测试工程

共 16 项。

| Prompt | 原始类型 | 模块入口 |
| --- | --- | --- |
| 自动化候选用例分析器 / Automation Candidate Analyzer | 自动化测试 | [automation-candidate-analysis](./testing-types/zh/automation-candidate-analysis/README.md) |
| 自动化测试生成器 / Automation Test Generator | 自动化测试 | [automation-testing](./testing-types/zh/automation-testing/README.md) |
| Playwright 测试生成器 / Playwright Test Generator | 自动化测试 | [ui-test-playwright](./testing-types/zh/ui-test-playwright/README.md) |
| Cypress 测试生成器 / Cypress Test Generator | 自动化测试 | [ui-test-cypress](./testing-types/zh/ui-test-cypress/README.md) |
| Selenium 测试生成器 / Selenium Test Generator | 自动化测试 | [ui-test-selenium](./testing-types/zh/ui-test-selenium/README.md) |
| 自动化代码审查器 / Automation Code Reviewer | 自动化测试 | [code-review](./testing-types/zh/code-review/README.md) |
| 不稳定测试分析器 / Flaky Test Analyzer | 自动化测试 | [flaky-test-analysis](./testing-types/zh/flaky-test-analysis/README.md) |
| CI/CD 失败分析器 / CI/CD Failure Analyzer | DevOps | [cicd-failure-analysis](./testing-types/zh/cicd-failure-analysis/README.md) |
| 测试失败分类器 / Test Failure Classifier | 自动化测试 | [test-failure-classification](./testing-types/zh/test-failure-classification/README.md) |
| 自动化失败根因分析器 / Automation Failure RCA Analyzer | 自动化测试 | [automation-failure-rca](./testing-types/zh/automation-failure-rca/README.md) |
| Locator 修复助手 / Locator Repair Assistant | UI 自动化 | [locator-repair](./testing-types/zh/locator-repair/README.md) |
| 自动化测试重构助手 / Test Refactoring Assistant | 自动化测试 | [test-refactoring](./testing-types/zh/test-refactoring/README.md) |
| 测试代码质量分析器 / Test Code Quality Analyzer | 自动化测试 | [test-code-quality-analysis](./testing-types/zh/test-code-quality-analysis/README.md) |
| 自动化覆盖率分析器 / Automation Coverage Analyzer | 自动化测试 | [automation-coverage-analysis](./testing-types/zh/automation-coverage-analysis/README.md) |
| 测试重复检测器 / Duplicate Test Detector | 测试治理 | [duplicate-test-detection](./testing-types/zh/duplicate-test-detection/README.md) |
| 过期测试检测器 / Obsolete Test Detector | 测试治理 | [obsolete-test-detection](./testing-types/zh/obsolete-test-detection/README.md) |

[查看该分类的编号与 Standard Prompt →](./PROMPT_COVERAGE_200.md#4-自动化与测试工程)

### 5. 性能、可靠性与韧性

共 35 项。

| Prompt | 原始类型 | 模块入口 |
| --- | --- | --- |
| 性能需求分析器 / Performance Requirement Analyzer | 性能测试 | [performance-requirement-analysis](./testing-types/zh/performance-requirement-analysis/README.md) |
| 性能负载模型设计器 / Workload Model Designer | 性能测试 | [workload-model-design](./testing-types/zh/workload-model-design/README.md) |
| VU/TPS 计算器 / VU/TPS Calculator | 性能测试 | [vu-tps-calculation](./testing-types/zh/vu-tps-calculation/README.md) |
| 性能场景设计器 / Performance Scenario Designer | 性能测试 | [performance-scenario-design](./testing-types/zh/performance-scenario-design/README.md) |
| 性能结果分析器 / Performance Result Analyzer | 性能测试 | [performance-result-analysis](./testing-types/zh/performance-result-analysis/README.md) |
| 性能瓶颈分析器 / Performance Bottleneck Analyzer | 性能测试 | [performance-bottleneck-analysis](./testing-types/zh/performance-bottleneck-analysis/README.md) |
| NeoLoad 脚本助手 / NeoLoad Script Assistant | 性能测试 | [neoload-script-assistance](./testing-types/zh/neoload-script-assistance/README.md) |
| JMeter 脚本助手 / JMeter Script Assistant | 性能测试 | [performance-test-jmeter](./testing-types/zh/performance-test-jmeter/README.md) |
| Gatling 脚本助手 / Gatling Script Assistant | 性能测试 | [performance-test-gatling](./testing-types/zh/performance-test-gatling/README.md) |
| 数据库性能分析器 / Database Performance Analyzer | 数据库测试 | [database-performance-analysis](./testing-types/zh/database-performance-analysis/README.md) |
| 可用性需求分析器 / Availability Requirement Analyzer | 非功能测试 | [availability-requirement-analysis](./testing-types/zh/availability-requirement-analysis/README.md) |
| 可靠性需求分析器 / Reliability Requirement Analyzer | 非功能测试 | [reliability-requirement-analysis](./testing-types/zh/reliability-requirement-analysis/README.md) |
| 可扩展性分析器 / Scalability Analyzer | 非功能测试 | [scalability-analysis](./testing-types/zh/scalability-analysis/README.md) |
| 超时测试设计器 / Timeout Test Designer | API 测试 | [timeout-test-design](./testing-types/zh/timeout-test-design/README.md) |
| 服务降级测试设计器 / Service Degradation Test Designer | 韧性测试 | [service-degradation-test-design](./testing-types/zh/service-degradation-test-design/README.md) |
| 熔断测试设计器 / Circuit Breaker Test Designer | 韧性测试 | [circuit-breaker-test-design](./testing-types/zh/circuit-breaker-test-design/README.md) |
| 故障恢复测试设计器 / Recovery Test Designer | 韧性测试 | [recovery-test-design](./testing-types/zh/recovery-test-design/README.md) |
| Chaos 测试设计器 / Chaos Test Designer | 混沌测试 | [chaos-test-design](./testing-types/zh/chaos-test-design/README.md) |
| 容灾测试设计器 / Disaster Recovery Test Designer | 容灾测试 | [disaster-recovery-test-design](./testing-types/zh/disaster-recovery-test-design/README.md) |
| Failover 测试设计器 / Failover Test Designer | 容灾测试 | [failover-test-design](./testing-types/zh/failover-test-design/README.md) |
| 性能基线分析器 / Performance Baseline Analyzer | 性能测试 | [performance-baseline-analysis](./testing-types/zh/performance-baseline-analysis/README.md) |
| 性能回归分析器 / Performance Regression Analyzer | 性能测试 | [performance-regression-analysis](./testing-types/zh/performance-regression-analysis/README.md) |
| 容量规划分析器 / Capacity Planning Analyzer | 性能测试 | [capacity-planning-analysis](./testing-types/zh/capacity-planning-analysis/README.md) |
| 压力测试设计器 / Stress Test Designer | 性能测试 | [stress-test-design](./testing-types/zh/stress-test-design/README.md) |
| 峰值测试设计器 / Spike Test Designer | 性能测试 | [spike-test-design](./testing-types/zh/spike-test-design/README.md) |
| 稳定性测试设计器 / Soak Test Designer | 性能测试 | [soak-test-design](./testing-types/zh/soak-test-design/README.md) |
| 并发测试设计器 / Concurrency Test Designer | 性能测试 | [concurrency-test-design](./testing-types/zh/concurrency-test-design/README.md) |
| 性能趋势分析器 / Performance Trend Analyzer | 性能测试 | [performance-trend-analysis](./testing-types/zh/performance-trend-analysis/README.md) |
| Nginx 性能分析器 / Nginx Performance Analyzer | 性能诊断 | [nginx-performance-analysis](./testing-types/zh/nginx-performance-analysis/README.md) |
| JVM 性能分析器 / JVM Performance Analyzer | 性能诊断 | [jvm-performance-analysis](./testing-types/zh/jvm-performance-analysis/README.md) |
| Kubernetes 性能分析器 / Kubernetes Performance Analyzer | 性能诊断 | [kubernetes-performance-analysis](./testing-types/zh/kubernetes-performance-analysis/README.md) |
| 网络延迟分析器 / Network Latency Analyzer | 性能诊断 | [network-latency-analysis](./testing-types/zh/network-latency-analysis/README.md) |
| 数据库慢查询分析器 / Slow Query Analyzer | 性能诊断 | [slow-query-analysis](./testing-types/zh/slow-query-analysis/README.md) |
| 连接池分析器 / Connection Pool Analyzer | 性能诊断 | [connection-pool-analysis](./testing-types/zh/connection-pool-analysis/README.md) |
| SLI/SLO 分析器 / SLI/SLO Analyzer | 可观测性 | [sli-slo-analysis](./testing-types/zh/sli-slo-analysis/README.md) |

[查看该分类的编号与 Standard Prompt →](./PROMPT_COVERAGE_200.md#5-性能可靠性与韧性)

### 6. 安全、隐私与无障碍

共 11 项。

| Prompt | 原始类型 | 模块入口 |
| --- | --- | --- |
| 可访问性测试助手 / Accessibility Testing Assistant | Accessibility | [accessibility-testing](./testing-types/zh/accessibility-testing/README.md) |
| WCAG 合规分析器 / WCAG Compliance Analyzer | Accessibility | [wcag-compliance-analysis](./testing-types/zh/wcag-compliance-analysis/README.md) |
| 安全测试场景生成器 / Security Test Scenario Generator | 安全测试 | [security-test-scenario](./testing-types/zh/security-test-scenario/README.md) |
| OWASP 风险分析器 / OWASP Risk Analyzer | 安全测试 | [owasp-risk-analysis](./testing-types/zh/owasp-risk-analysis/README.md) |
| 权限测试设计器 / Authorization Test Designer | 安全测试 | [authorization-test-design](./testing-types/zh/authorization-test-design/README.md) |
| 身份认证测试设计器 / Authentication Test Designer | 安全测试 | [authentication-test-design](./testing-types/zh/authentication-test-design/README.md) |
| 输入校验测试生成器 / Input Validation Test Generator | 安全测试 | [input-validation-test](./testing-types/zh/input-validation-test/README.md) |
| API 安全测试设计器 / API Security Test Designer | 安全测试 | [api-security-test-design](./testing-types/zh/api-security-test-design/README.md) |
| 数据隐私测试分析器 / Data Privacy Test Analyzer | 安全测试 | [data-privacy-analysis](./testing-types/zh/data-privacy-analysis/README.md) |
| 敏感数据泄露分析器 / Sensitive Data Exposure Analyzer | 安全测试 | [sensitive-data-exposure-analysis](./testing-types/zh/sensitive-data-exposure-analysis/README.md) |
| 数据脱敏分析器 / Data Masking Analyzer | 测试数据 | [data-masking-analysis](./testing-types/zh/data-masking-analysis/README.md) |

[查看该分类的编号与 Standard Prompt →](./PROMPT_COVERAGE_200.md#6-安全隐私与无障碍)

### 7. 数据、数据库与测试环境

共 17 项。

| Prompt | 原始类型 | 模块入口 |
| --- | --- | --- |
| 测试数据生成器 / Test Data Generator | 测试数据 | [test-data-generation](./testing-types/zh/test-data-generation/README.md) |
| 边界测试数据生成器 / Boundary Data Generator | 测试数据 | [boundary-data-generation](./testing-types/zh/boundary-data-generation/README.md) |
| SQL 测试数据生成器 / SQL Test Data Generator | 测试数据 | [database-test-data-analysis](./testing-types/zh/database-test-data-analysis/README.md) |
| WireMock 配置生成器 / WireMock Generator | Mock 测试 | [wiremock-generation](./testing-types/zh/wiremock-generation/README.md) |
| 故障模拟设计器 / Fault Simulation Designer | Mock 测试 | [fault-simulation-design](./testing-types/zh/fault-simulation-design/README.md) |
| SQL 生成器 / SQL Generator | 数据库测试 | [sql-generation](./testing-types/zh/sql-generation/README.md) |
| 数据库校验分析器 / Database Validation Analyzer | 数据库测试 | [database-validation-analysis](./testing-types/zh/database-validation-analysis/README.md) |
| 数据一致性分析器 / Data Consistency Analyzer | 数据库测试 | [data-consistency-analysis](./testing-types/zh/data-consistency-analysis/README.md) |
| Docker 构建问题分析器 / Docker Build Analyzer | DevOps | [docker-build-analysis](./testing-types/zh/docker-build-analysis/README.md) |
| Kubernetes 问题分析器 / Kubernetes Issue Analyzer | DevOps | [kubernetes-issue-analysis](./testing-types/zh/kubernetes-issue-analysis/README.md) |
| 环境问题分析器 / Environment Issue Analyzer | 环境分析 | [environment-issue-analysis](./testing-types/zh/environment-issue-analysis/README.md) |
| 测试环境健康检查器 / Test Environment Health Checker | 测试环境 | [test-environment-health](./testing-types/zh/test-environment-health/README.md) |
| 环境差异分析器 / Environment Drift Analyzer | 测试环境 | [test-environment-drift-analysis](./testing-types/zh/test-environment-drift-analysis/README.md) |
| 配置差异分析器 / Configuration Diff Analyzer | 测试环境 | [configuration-diff-analysis](./testing-types/zh/configuration-diff-analysis/README.md) |
| 测试数据清理助手 / Test Data Cleanup Assistant | 测试数据 | [test-data-cleanup](./testing-types/zh/test-data-cleanup/README.md) |
| 测试数据依赖分析器 / Test Data Dependency Analyzer | 测试数据 | [test-data-dependency-analysis](./testing-types/zh/test-data-dependency-analysis/README.md) |
| 测试数据污染分析器 / Test Data Pollution Analyzer | 测试数据 | [test-data-pollution-analysis](./testing-types/zh/test-data-pollution-analysis/README.md) |

[查看该分类的编号与 Standard Prompt →](./PROMPT_COVERAGE_200.md#7-数据数据库与测试环境)

### 8. 缺陷、质量与测试治理

共 24 项。

| Prompt | 原始类型 | 模块入口 |
| --- | --- | --- |
| 质量风险分析器 / Quality Risk Analyzer | 风险分析 | [quality-risk-analysis](./testing-types/zh/quality-risk-analysis/README.md) |
| 缺陷报告生成器 / Bug Report Generator | 缺陷管理 | [bug-reporting](./testing-types/zh/bug-reporting/README.md) |
| 缺陷分析器 / Bug Analyzer | 缺陷分析 | [bug-analysis](./testing-types/zh/bug-analysis/README.md) |
| 缺陷分诊助手 / Bug Triage Assistant | 缺陷管理 | [bug-triage](./testing-types/zh/bug-triage/README.md) |
| 根因分析器 / Root Cause Analyzer | RCA | [root-cause-analysis](./testing-types/zh/root-cause-analysis/README.md) |
| 日志分析器 / Log Analyzer | 故障分析 | [log-analysis](./testing-types/zh/log-analysis/README.md) |
| 堆栈异常分析器 / Stack Trace Analyzer | 故障分析 | [stack-trace-analysis](./testing-types/zh/stack-trace-analysis/README.md) |
| 变更影响分析器 / Change Impact Analyzer | 变更分析 | [change-impact-analysis](./testing-types/zh/change-impact-analysis/README.md) |
| PR 风险分析器 / PR Risk Analyzer | 变更分析 | [pr-risk-analysis](./testing-types/zh/pr-risk-analysis/README.md) |
| 回归范围分析器 / Regression Scope Analyzer | 回归测试 | [regression-scope-analysis](./testing-types/zh/regression-scope-analysis/README.md) |
| 回归测试选择器 / Regression Test Selector | 回归测试 | [regression-test-selection](./testing-types/zh/regression-test-selection/README.md) |
| Sprint 质量分析器 / Sprint Quality Analyzer | 敏捷测试 | [sprint-quality-analysis](./testing-types/zh/sprint-quality-analysis/README.md) |
| 测试报告生成器 / Test Report Generator | 测试报告 | [test-reporting](./testing-types/zh/test-reporting/README.md) |
| 质量指标分析器 / Quality Metrics Analyzer | 质量管理 | [quality-metrics-analysis](./testing-types/zh/quality-metrics-analysis/README.md) |
| 质量仪表盘分析器 / Quality Dashboard Analyzer | 质量管理 | [quality-dashboard-analysis](./testing-types/zh/quality-dashboard-analysis/README.md) |
| 质量趋势分析器 / Quality Trend Analyzer | 质量管理 | [quality-trend-analysis](./testing-types/zh/quality-trend-analysis/README.md) |
| 测试覆盖缺口分析器 / Test Coverage Gap Analyzer | 测试治理 | [test-coverage-gap-analysis](./testing-types/zh/test-coverage-gap-analysis/README.md) |
| 测试资产健康分析器 / Test Asset Health Analyzer | 测试治理 | [test-asset-health-analysis](./testing-types/zh/test-asset-health-analysis/README.md) |
| 缺陷逃逸分析器 / Defect Leakage Analyzer | 质量管理 | [defect-leakage-analysis](./testing-types/zh/defect-leakage-analysis/README.md) |
| 缺陷趋势分析器 / Defect Trend Analyzer | 质量管理 | [defect-trend-analysis](./testing-types/zh/defect-trend-analysis/README.md) |
| 缺陷聚类分析器 / Defect Clustering Analyzer | 质量管理 | [defect-clustering-analysis](./testing-types/zh/defect-clustering-analysis/README.md) |
| 缺陷预测分析器 / Defect Prediction Analyzer | 质量管理 | [defect-prediction-analysis](./testing-types/zh/defect-prediction-analysis/README.md) |
| 测试有效性分析器 / Test Effectiveness Analyzer | 质量管理 | [test-effectiveness-analysis](./testing-types/zh/test-effectiveness-analysis/README.md) |
| 质量门禁分析器 / Quality Gate Analyzer | 质量管理 | [quality-gate-analysis](./testing-types/zh/quality-gate-analysis/README.md) |

[查看该分类的编号与 Standard Prompt →](./PROMPT_COVERAGE_200.md#8-缺陷质量与测试治理)

### 9. 发布、生产与可观测性

共 14 项。

| Prompt | 原始类型 | 模块入口 |
| --- | --- | --- |
| 发布就绪分析器 / Release Readiness Analyzer | 发布管理 | [release-readiness-analysis](./testing-types/zh/release-readiness-analysis/README.md) |
| Go/No-Go 风险分析器 / Go/No-Go Risk Analyzer | 发布管理 | [go-no-go-risk-analysis](./testing-types/zh/go-no-go-risk-analysis/README.md) |
| 生产验证生成器 / Production Verification Generator | 发布验证 | [production-verification-generation](./testing-types/zh/production-verification-generation/README.md) |
| 冒烟测试生成器 / Smoke Test Generator | 发布验证 | [smoke-test-generation](./testing-types/zh/smoke-test-generation/README.md) |
| 发布风险评分器 / Release Risk Scorer | 发布管理 | [release-risk-scoring](./testing-types/zh/release-risk-scoring/README.md) |
| Hotfix 风险分析器 / Hotfix Risk Analyzer | 发布管理 | [hotfix-risk-analysis](./testing-types/zh/hotfix-risk-analysis/README.md) |
| 回滚验证生成器 / Rollback Verification Generator | 发布管理 | [rollback-verification](./testing-types/zh/rollback-verification/README.md) |
| 发布变更摘要生成器 / Release Change Summary Generator | 发布管理 | [release-change-summary](./testing-types/zh/release-change-summary/README.md) |
| 生产事故分析器 / Production Incident Analyzer | 生产质量 | [production-incident-analysis](./testing-types/zh/production-incident-analysis/README.md) |
| 生产日志关联分析器 / Production Log Correlator | 可观测性 | [production-log-correlation](./testing-types/zh/production-log-correlation/README.md) |
| 指标异常分析器 / Metrics Anomaly Analyzer | 可观测性 | [metrics-anomaly-analysis](./testing-types/zh/metrics-anomaly-analysis/README.md) |
| Trace 分析器 / Distributed Trace Analyzer | 可观测性 | [distributed-trace-analysis](./testing-types/zh/distributed-trace-analysis/README.md) |
| 告警分析器 / Alert Analyzer | 可观测性 | [alert-analysis](./testing-types/zh/alert-analysis/README.md) |
| 线上问题测试复现助手 / Production Issue Reproducer | 生产质量 | [production-issue-reproduction](./testing-types/zh/production-issue-reproduction/README.md) |

[查看该分类的编号与 Standard Prompt →](./PROMPT_COVERAGE_200.md#9-发布生产与可观测性)

### 10. AI 与 LLM 测试

共 18 项。

| Prompt | 原始类型 | 模块入口 |
| --- | --- | --- |
| AI 功能测试设计器 / AI Feature Test Designer | AI 测试 | [ai-feature-test-design](./testing-types/zh/ai-feature-test-design/README.md) |
| LLM 测试用例生成器 / LLM Test Case Generator | AI 测试 | [llm-test-case-generation](./testing-types/zh/llm-test-case-generation/README.md) |
| Prompt 测试分析器 / Prompt Test Analyzer | AI 测试 | [prompt-test-analysis](./testing-types/zh/prompt-test-analysis/README.md) |
| Prompt 回归测试器 / Prompt Regression Tester | AI 测试 | [prompt-regression-testing](./testing-types/zh/prompt-regression-testing/README.md) |
| LLM 输出质量评估器 / LLM Output Quality Evaluator | AI 测试 | [llm-output-quality-evaluation](./testing-types/zh/llm-output-quality-evaluation/README.md) |
| 幻觉检测分析器 / Hallucination Analyzer | AI 测试 | [hallucination-analysis](./testing-types/zh/hallucination-analysis/README.md) |
| AI 安全测试分析器 / AI Safety Test Analyzer | AI 测试 | [ai-safety-test-analysis](./testing-types/zh/ai-safety-test-analysis/README.md) |
| AI Red Team 测试设计器 / AI Red Team Test Designer | AI 测试 | [ai-red-team-test-design](./testing-types/zh/ai-red-team-test-design/README.md) |
| AI Eval 设计器 / AI Evaluation Designer | AI 测试 | [ai-evaluation-design](./testing-types/zh/ai-evaluation-design/README.md) |
| AI 模型回归分析器 / AI Model Regression Analyzer | AI 测试 | [ai-model-regression-analysis](./testing-types/zh/ai-model-regression-analysis/README.md) |
| Prompt Injection 测试设计器 / Prompt Injection Test Designer | AI 安全测试 | [prompt-injection-test-design](./testing-types/zh/prompt-injection-test-design/README.md) |
| Agent 测试设计器 / AI Agent Test Designer | AI 测试 | [ai-agent-test-design](./testing-types/zh/ai-agent-test-design/README.md) |
| Agent 工具调用测试器 / Agent Tool-Call Test Designer | AI 测试 | [agent-tool-call-test-design](./testing-types/zh/agent-tool-call-test-design/README.md) |
| AI 生成测试用例审核器 / AI-Generated Test Reviewer | AI 测试 | [ai-generated-test-review](./testing-types/zh/ai-generated-test-review/README.md) |
| AI 生成单元测试用例审核器 / AI-Generated Unit Test Reviewer | AI 测试 | [ai-generated-unit-test-review](./testing-types/zh/ai-generated-unit-test-review/README.md) |
| AI 生成接口测试用例审核器 / AI-Generated API Test Reviewer | AI 测试 | [ai-generated-api-test-review](./testing-types/zh/ai-generated-api-test-review/README.md) |
| AI 生成 E2E 测试用例审核器 / AI-Generated E2E Test Reviewer | AI 测试 | [ai-generated-e2e-test-review](./testing-types/zh/ai-generated-e2e-test-review/README.md) |
| AI 生成功能测试用例审核器 / AI-Generated Functional Test Reviewer | AI 测试 | [ai-generated-functional-test-review](./testing-types/zh/ai-generated-functional-test-review/README.md) |

[查看该分类的编号与 Standard Prompt →](./PROMPT_COVERAGE_200.md#10-ai-与-llm-测试)

## Testing Workflows

Workflow 将多个 Prompt 组织成可执行的质量活动，不只是单个模板列表。完整说明见 [Testing Workflows](./Workflows/zh/README.md)。

### Testing Prompt Router

[Testing Prompt Router](./Workflows/zh/discover-testing/README.md) 适合不知道从哪个 Prompt 开始时使用。它会选择一个主 Prompt、最多一个辅助 Prompt，并给出调用顺序、最小输入和缺失信息。

### AI 研发质量分析工作流

[AI 研发质量分析工作流](./Workflows/zh/ai-quality-analysis-workflow/README.md) 使用每种语言 43 份角色 Prompt，形成八阶段可追踪链路：

| 阶段 | 主要目标 |
| --- | --- |
| 需求分析 | 从产品、QA、体验和技术视角识别目标、规则、风险与缺口 |
| 测试策略 | 确定范围、层级、环境、数据和风险验证方式 |
| 测试策略评审 | 审查策略的完整性、可执行性与证据边界 |
| 代码评审 | 分析变更对产品、质量、技术和体验的影响 |
| 测试用例编写 | 将策略转换为前置条件、步骤、预期和证据 |
| 测试用例评审 | 审查覆盖、优先级、重复和不可验证预期 |
| 测试报告 | 汇总结果证据、限制、缺陷与未覆盖风险 |
| 测试报告评审 | 复核报告可信度、分歧和人工决策事项 |

角色 Prompt 独立执行，Synthesis Prompt 汇总共识和分歧；发布、审批和责任归属始终保留为 Human Task。

### 日常、迭代与发布工作流

| Workflow | 主要阶段 | 适用场景 |
| --- | --- | --- |
| [日常测试](./Workflows/zh/daily-testing-workflow.md) | 每日规划 → 环境与数据 → 用例/自动化/探索 → 缺陷 → 总结 | QA 日常工作 |
| [迭代测试](./Workflows/zh/sprint-testing-workflow.md) | Planning → 策略 → 持续验证 → 回归 → Review/Retro | 敏捷迭代 |
| [发布测试](./Workflows/zh/release-testing-workflow.md) | T-14 规划 → T-7 冻结 → T-3 候选版本 → Go/No-Go → 发布后验证 | 生产发布 |

## Prompt 版本

| 版本 | 使用场景 |
| --- | --- |
| Standard | 默认入口，结构完整，可直接复制 |
| Lite | 小任务或上下文较短时使用 |
| CRISPE / RISE / ICIO / ROSES | 需要特定 Prompt 框架时使用 |
| LangGPT | 需要明确角色、约束和工作流时使用 |
| Web / Mobile / Framework | 特定平台或测试框架场景；例如 [test-strategy-Web](./testing-types/zh/test-strategy-Web/README.md) 和 [test-strategy-Mobile](./testing-types/zh/test-strategy-Mobile/README.md) |

已拆分平台版本的模块还包括：[test-case-reviewer（默认）](./testing-types/zh/test-case-reviewer/README.md) · [test-case-reviewer-Web](./testing-types/zh/test-case-reviewer-Web/README.md) · [test-case-reviewer-Mobile](./testing-types/zh/test-case-reviewer-Mobile/README.md)

## Documentation

| 文档 | 用途 |
| --- | --- |
| [基础 Prompt 目录](./PROMPT_COVERAGE_200.md) | 原始 200 项能力的编号、分类、模块和入口 |
| [Testing Workflows](./Workflows/zh/README.md) | Router、AI 质量分析、日常、迭代和发布流程 |
| [贡献指南](./CONTRIBUTING.md) | 贡献、开发、提交和 PR 流程 |
| [Prompt 编写规范](./PROMPT_AUTHORING_STANDARD.md) | Prompt 与模块 README 的质量要求 |
| [使用示例](./examples/README.md) | 基础、进阶和最佳实践入口 |
| [License](./LICENSE) | 正式许可文本 |

## License 与支持

本项目使用 [PolyForm Noncommercial License 1.0.0](./LICENSE)。欢迎通过 Issue、Pull Request 或 [在线文档](https://inaodeng.com/prompts) 反馈。
