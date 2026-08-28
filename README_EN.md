<div align="right"><a href="./README.md">简体中文</a> · <strong>English</strong></div>

# Awesome QA Prompt

<div align="center">
  <img src="https://inaodeng.com/prompts.svg" alt="Awesome QA Prompt" width="800"/>
</div>

[![Prompt Check](https://img.shields.io/github/actions/workflow/status/naodeng/awesome-qa-prompt/prompt-check.yml?branch=main&label=prompt%20check)](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/prompt-check.yml)
[![License: PolyForm Noncommercial 1.0.0](https://img.shields.io/badge/License-PolyForm%20Noncommercial%201.0.0-blue)](./LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/naodeng/awesome-qa-prompt?style=social)](https://github.com/naodeng/awesome-qa-prompt)

A **Prompt Baseline for QA work**: copy-ready bilingual prompts with input auditing and evidence boundaries across requirements, test design, automation, performance, security, release, production quality, and AI testing.

> This repository provides Prompts, not installable Skills. For Agent Skills, visit [Awesome QA Skills](https://github.com/naodeng/awesome-qa-skills).

[Online docs](https://inaodeng.com/prompts) · [Complete Prompt catalog](./PROMPT_COVERAGE_200_EN.md) · [Testing Workflows](./Workflows/en/README.md) · [Contributing](./CONTRIBUTING_EN.md)

## Quick Start

1. Select a Prompt from the categories below, or start with the [Testing Prompt Router](./Workflows/en/discover-testing/README.md).
2. Open the module's `Standard-version`; choose Lite or a framework variant only when needed.
3. Put real project materials inside `<qa_context>` without inventing metrics, environments, or conclusions.
4. Review assumptions, open items, and evidence sources before using the output.

## Prompt Catalog

The catalog covers **200 capabilities in 200 independent modules**. All Prompts are listed directly in the ten categories below; see the [complete Prompt catalog](./PROMPT_COVERAGE_200_EN.md) for original numbering and direct Standard-file links.

### 1. Requirements, Planning, And Test Strategy

16 capabilities.

| Prompt | Original type | Module entry |
| --- | --- | --- |
| Requirement Analyzer / 需求分析器 | Requirements Analysis | [requirements-analysis (default)](./testing-types/en/requirements-analysis/README.md) · [requirements-analysis-Web](./testing-types/en/requirements-analysis-Web/README.md) · [requirements-analysis-Mobile](./testing-types/en/requirements-analysis-Mobile/README.md) |
| Acceptance Criteria Reviewer / 验收标准审查器 | Requirements Analysis | [acceptance-criteria-reviewer](./testing-types/en/acceptance-criteria-reviewer/README.md) |
| Requirement Gap Analyzer / 需求缺口分析器 | Requirements Analysis | [requirement-gap-analyzer](./testing-types/en/requirement-gap-analyzer/README.md) |
| Testability Analyzer / 可测试性分析器 | Requirements Analysis | [testability-analysis](./testing-types/en/testability-analysis/README.md) |
| Test Strategy Generator / 测试策略生成器 | Test Strategy | [test-strategy (default)](./testing-types/en/test-strategy/README.md) · [test-strategy-Web](./testing-types/en/test-strategy-Web/README.md) · [test-strategy-Mobile](./testing-types/en/test-strategy-Mobile/README.md) |
| Test Plan Generator / 测试计划生成器 | Test Planning | [test-plan-design](./testing-types/en/test-plan-design/README.md) |
| Test Scope Analyzer / 测试范围分析器 | Test Strategy | [test-scope-analysis](./testing-types/en/test-scope-analysis/README.md) |
| Refinement QA Assistant / 需求梳理 QA 助手 | Agile Testing | [refinement-qa-assistant](./testing-types/en/refinement-qa-assistant/README.md) |
| Sprint Planning QA Assistant / Sprint Planning QA 助手 | Agile Testing | [sprint-planning-qa](./testing-types/en/sprint-planning-qa/README.md) |
| Retrospective Analyzer / Sprint 回顾分析器 | Agile Testing | [retrospective-analysis](./testing-types/en/retrospective-analysis/README.md) |
| Business Rule Analyzer / 业务规则分析器 | Requirements Analysis | [business-rule-analysis](./testing-types/en/business-rule-analysis/README.md) |
| Business Flow Analyzer / 业务流程分析器 | Requirements Analysis | [business-flow-analysis](./testing-types/en/business-flow-analysis/README.md) |
| Requirement Dependency Analyzer / 需求依赖分析器 | Requirements Analysis | [requirement-dependency-analysis](./testing-types/en/requirement-dependency-analysis/README.md) |
| Requirement Conflict Detector / 需求冲突检测器 | Requirements Analysis | [requirement-conflict-analysis](./testing-types/en/requirement-conflict-analysis/README.md) |
| NFR Analyzer / 非功能需求分析器 | Non-functional Testing | [nfr-analysis](./testing-types/en/nfr-analysis/README.md) |
| Requirement Traceability Analyzer / 需求测试追踪分析器 | Test Governance | [requirement-traceability-analysis](./testing-types/en/requirement-traceability-analysis/README.md) |

[View numbering and Standard Prompts for this category →](./PROMPT_COVERAGE_200_EN.md#1-requirements-planning-and-test-strategy)

### 2. Test Analysis And Design

22 capabilities.

| Prompt | Original type | Module entry |
| --- | --- | --- |
| Test Scenario Designer / 测试场景设计器 | Test Design | [test-scenario-design](./testing-types/en/test-scenario-design/README.md) |
| Test Case Generator / 测试用例生成器 | Test Design | [test-case-writing (default)](./testing-types/en/test-case-writing/README.md) · [test-case-writing-Web](./testing-types/en/test-case-writing-Web/README.md) · [test-case-writing-Mobile](./testing-types/en/test-case-writing-Mobile/README.md) |
| Boundary Value Analyzer / 边界值分析器 | Test Design | [boundary-value-analysis](./testing-types/en/boundary-value-analysis/README.md) |
| Equivalence Partition Analyzer / 等价类分析器 | Test Design | [equivalence-partition-analysis](./testing-types/en/equivalence-partition-analysis/README.md) |
| Decision Table Generator / 决策表生成器 | Test Design | [decision-table-analysis](./testing-types/en/decision-table-analysis/README.md) |
| State Transition Analyzer / 状态转换分析器 | Test Design | [state-transition-analysis](./testing-types/en/state-transition-analysis/README.md) |
| Pairwise Test Generator / Pairwise 组合测试生成器 | Test Design | [pairwise-test-design](./testing-types/en/pairwise-test-design/README.md) |
| E2E Scenario Designer / 端到端测试场景设计器 | E2E Testing | [functional-testing (default)](./testing-types/en/functional-testing/README.md) · [functional-testing-Web](./testing-types/en/functional-testing-Web/README.md) · [functional-testing-Mobile](./testing-types/en/functional-testing-Mobile/README.md) |
| UI Test Designer / UI 测试设计器 | UI Testing | [ui-test-design](./testing-types/en/ui-test-design/README.md) |
| User Journey Analyzer / 用户旅程分析器 | E2E Testing | [user-journey-analysis](./testing-types/en/user-journey-analysis/README.md) |
| Exploratory Testing Assistant / 探索式测试助手 | Exploratory Testing | [manual-testing (default)](./testing-types/en/manual-testing/README.md) · [manual-testing-Web](./testing-types/en/manual-testing-Web/README.md) · [manual-testing-Mobile](./testing-types/en/manual-testing-Mobile/README.md) |
| Test Charter Generator / 探索式测试章程生成器 | Exploratory Testing | [test-charter-generation](./testing-types/en/test-charter-generation/README.md) |
| Testing Heuristics Analyzer / 测试启发式分析器 | Test Design | [testing-heuristics-analysis](./testing-types/en/testing-heuristics-analysis/README.md) |
| Error Guessing Analyzer / 错误猜测分析器 | Test Design | [error-guessing-analysis](./testing-types/en/error-guessing-analysis/README.md) |
| Compatibility Test Designer / 兼容性测试设计器 | Compatibility Testing | [compatibility-test-design](./testing-types/en/compatibility-test-design/README.md) |
| Browser Compatibility Analyzer / 浏览器兼容性分析器 | Compatibility Testing | [browser-compatibility-analysis](./testing-types/en/browser-compatibility-analysis/README.md) |
| Mobile Compatibility Analyzer / 移动端兼容性分析器 | Compatibility Testing | [mobile-compatibility-analysis](./testing-types/en/mobile-compatibility-analysis/README.md) |
| Localization Test Designer / 多语言测试设计器 | Internationalization Testing | [localization-test-design](./testing-types/en/localization-test-design/README.md) |
| Internationalization Analyzer / 国际化问题分析器 | Internationalization Testing | [internationalization-analysis](./testing-types/en/internationalization-analysis/README.md) |
| Timezone Test Designer / 时区测试设计器 | Internationalization Testing | [timezone-test-design](./testing-types/en/timezone-test-design/README.md) |
| Test Case Optimizer / 测试用例优化器 | Test Governance | [test-case-optimization](./testing-types/en/test-case-optimization/README.md) |
| Test Case Prioritizer / 测试用例优先级分析器 | Test Governance | [test-case-prioritization](./testing-types/en/test-case-prioritization/README.md) |

[View numbering and Standard Prompts for this category →](./PROMPT_COVERAGE_200_EN.md#2-test-analysis-and-design)

### 3. API, Contract, Messaging, And Integration

32 capabilities.

| Prompt | Original type | Module entry |
| --- | --- | --- |
| API Test Designer / API 测试设计器 | API Testing | [api-testing](./testing-types/en/api-testing/README.md) |
| API Negative Test Generator / API 负向测试生成器 | API Testing | [api-negative-testing](./testing-types/en/api-negative-testing/README.md) |
| API Schema Validator / API Schema 校验器 | API Testing | [api-schema-validation](./testing-types/en/api-schema-validation/README.md) |
| API Contract Analyzer / API 契约分析器 | API Testing | [api-contract-analysis](./testing-types/en/api-contract-analysis/README.md) |
| Pytest Test Generator / Pytest 测试生成器 | Automation Testing | [api-test-pytest](./testing-types/en/api-test-pytest/README.md) |
| Mock API Generator / Mock API 生成器 | Mock Testing | [mock-api-generation](./testing-types/en/mock-api-generation/README.md) |
| API Dependency Analyzer / API 依赖分析器 | API Testing | [api-dependency-analysis](./testing-types/en/api-dependency-analysis/README.md) |
| API Call Chain Analyzer / API 调用链分析器 | API Testing | [api-call-chain-analysis](./testing-types/en/api-call-chain-analysis/README.md) |
| API Regression Impact Analyzer / API 回归影响分析器 | API Testing | [api-regression-impact](./testing-types/en/api-regression-impact/README.md) |
| API Compatibility Analyzer / API 兼容性分析器 | API Testing | [api-compatibility-analysis](./testing-types/en/api-compatibility-analysis/README.md) |
| API Version Change Analyzer / API 版本变更分析器 | API Testing | [api-version-change-analysis](./testing-types/en/api-version-change-analysis/README.md) |
| OpenAPI Specification Analyzer / OpenAPI 规范分析器 | API Testing | [openapi-specification-analysis](./testing-types/en/openapi-specification-analysis/README.md) |
| GraphQL Test Designer / GraphQL 测试设计器 | API Testing | [graphql-test-design](./testing-types/en/graphql-test-design/README.md) |
| WebSocket Test Designer / WebSocket 测试设计器 | API Testing | [websocket-test-design](./testing-types/en/websocket-test-design/README.md) |
| Idempotency Test Designer / 幂等性测试设计器 | API Testing | [idempotency-test-design](./testing-types/en/idempotency-test-design/README.md) |
| Pagination Test Designer / 分页测试设计器 | API Testing | [pagination-test-design](./testing-types/en/pagination-test-design/README.md) |
| Rate Limit Test Designer / 限流测试设计器 | API Testing | [rate-limit-test-design](./testing-types/en/rate-limit-test-design/README.md) |
| Retry Test Designer / 重试机制测试设计器 | API Testing | [retry-mechanism-test-design](./testing-types/en/retry-mechanism-test-design/README.md) |
| Contract Test Generator / 契约测试生成器 | Contract Testing | [contract-test-generation](./testing-types/en/contract-test-generation/README.md) |
| Consumer Contract Analyzer / Consumer Contract 分析器 | Contract Testing | [consumer-contract-analysis](./testing-types/en/consumer-contract-analysis/README.md) |
| Provider Contract Analyzer / Provider Contract 分析器 | Contract Testing | [provider-contract-analysis](./testing-types/en/provider-contract-analysis/README.md) |
| Kafka Test Designer / Kafka 测试设计器 | Messaging Testing | [kafka-test-design](./testing-types/en/kafka-test-design/README.md) |
| Kafka Event Generator / Kafka Event 生成器 | Messaging Testing | [kafka-event-generation](./testing-types/en/kafka-event-generation/README.md) |
| Message Consistency Analyzer / 消息一致性分析器 | Messaging Testing | [message-consistency-analysis](./testing-types/en/message-consistency-analysis/README.md) |
| Duplicate Message Test Designer / 消息重复消费测试器 | Messaging Testing | [duplicate-message-testing](./testing-types/en/duplicate-message-testing/README.md) |
| Message Ordering Test Designer / 消息顺序测试设计器 | Messaging Testing | [message-ordering-test-design](./testing-types/en/message-ordering-test-design/README.md) |
| Message Loss Analyzer / 消息丢失分析器 | Messaging Testing | [message-loss-analysis](./testing-types/en/message-loss-analysis/README.md) |
| Async Flow Test Designer / 异步流程测试设计器 | Integration Testing | [async-flow-test-design](./testing-types/en/async-flow-test-design/README.md) |
| Microservice Dependency Analyzer / 微服务依赖分析器 | Microservices Testing | [microservice-dependency-analysis](./testing-types/en/microservice-dependency-analysis/README.md) |
| Service Call Chain Analyzer / 服务调用链分析器 | Microservices Testing | [service-call-chain-analysis](./testing-types/en/service-call-chain-analysis/README.md) |
| Distributed Transaction Test Designer / 分布式事务测试设计器 | Microservices Testing | [distributed-transaction-test-design](./testing-types/en/distributed-transaction-test-design/README.md) |
| Eventual Consistency Test Designer / 最终一致性测试设计器 | Microservices Testing | [eventual-consistency-test-design](./testing-types/en/eventual-consistency-test-design/README.md) |

[View numbering and Standard Prompts for this category →](./PROMPT_COVERAGE_200_EN.md#3-api-contract-messaging-and-integration)

### 4. Automation And Test Engineering

16 capabilities.

| Prompt | Original type | Module entry |
| --- | --- | --- |
| Automation Candidate Analyzer / 自动化候选用例分析器 | Automation Testing | [automation-candidate-analysis](./testing-types/en/automation-candidate-analysis/README.md) |
| Automation Test Generator / 自动化测试生成器 | Automation Testing | [automation-testing](./testing-types/en/automation-testing/README.md) |
| Playwright Test Generator / Playwright 测试生成器 | Automation Testing | [ui-test-playwright](./testing-types/en/ui-test-playwright/README.md) |
| Cypress Test Generator / Cypress 测试生成器 | Automation Testing | [ui-test-cypress](./testing-types/en/ui-test-cypress/README.md) |
| Selenium Test Generator / Selenium 测试生成器 | Automation Testing | [ui-test-selenium](./testing-types/en/ui-test-selenium/README.md) |
| Automation Code Reviewer / 自动化代码审查器 | Automation Testing | [code-review](./testing-types/en/code-review/README.md) |
| Flaky Test Analyzer / 不稳定测试分析器 | Automation Testing | [flaky-test-analysis](./testing-types/en/flaky-test-analysis/README.md) |
| CI/CD Failure Analyzer / CI/CD 失败分析器 | DevOps | [cicd-failure-analysis](./testing-types/en/cicd-failure-analysis/README.md) |
| Test Failure Classifier / 测试失败分类器 | Automation Testing | [test-failure-classification](./testing-types/en/test-failure-classification/README.md) |
| Automation Failure RCA Analyzer / 自动化失败根因分析器 | Automation Testing | [automation-failure-rca](./testing-types/en/automation-failure-rca/README.md) |
| Locator Repair Assistant / Locator 修复助手 | UI Automation | [locator-repair](./testing-types/en/locator-repair/README.md) |
| Test Refactoring Assistant / 自动化测试重构助手 | Automation Testing | [test-refactoring](./testing-types/en/test-refactoring/README.md) |
| Test Code Quality Analyzer / 测试代码质量分析器 | Automation Testing | [test-code-quality-analysis](./testing-types/en/test-code-quality-analysis/README.md) |
| Automation Coverage Analyzer / 自动化覆盖率分析器 | Automation Testing | [automation-coverage-analysis](./testing-types/en/automation-coverage-analysis/README.md) |
| Duplicate Test Detector / 测试重复检测器 | Test Governance | [duplicate-test-detection](./testing-types/en/duplicate-test-detection/README.md) |
| Obsolete Test Detector / 过期测试检测器 | Test Governance | [obsolete-test-detection](./testing-types/en/obsolete-test-detection/README.md) |

[View numbering and Standard Prompts for this category →](./PROMPT_COVERAGE_200_EN.md#4-automation-and-test-engineering)

### 5. Performance, Reliability, And Resilience

35 capabilities.

| Prompt | Original type | Module entry |
| --- | --- | --- |
| Performance Requirement Analyzer / 性能需求分析器 | Performance Testing | [performance-requirement-analysis](./testing-types/en/performance-requirement-analysis/README.md) |
| Workload Model Designer / 性能负载模型设计器 | Performance Testing | [workload-model-design](./testing-types/en/workload-model-design/README.md) |
| VU/TPS Calculator / VU/TPS 计算器 | Performance Testing | [vu-tps-calculation](./testing-types/en/vu-tps-calculation/README.md) |
| Performance Scenario Designer / 性能场景设计器 | Performance Testing | [performance-scenario-design](./testing-types/en/performance-scenario-design/README.md) |
| Performance Result Analyzer / 性能结果分析器 | Performance Testing | [performance-result-analysis](./testing-types/en/performance-result-analysis/README.md) |
| Performance Bottleneck Analyzer / 性能瓶颈分析器 | Performance Testing | [performance-bottleneck-analysis](./testing-types/en/performance-bottleneck-analysis/README.md) |
| NeoLoad Script Assistant / NeoLoad 脚本助手 | Performance Testing | [neoload-script-assistance](./testing-types/en/neoload-script-assistance/README.md) |
| JMeter Script Assistant / JMeter 脚本助手 | Performance Testing | [performance-test-jmeter](./testing-types/en/performance-test-jmeter/README.md) |
| Gatling Script Assistant / Gatling 脚本助手 | Performance Testing | [performance-test-gatling](./testing-types/en/performance-test-gatling/README.md) |
| Database Performance Analyzer / 数据库性能分析器 | Database Testing | [database-performance-analysis](./testing-types/en/database-performance-analysis/README.md) |
| Availability Requirement Analyzer / 可用性需求分析器 | Non-functional Testing | [availability-requirement-analysis](./testing-types/en/availability-requirement-analysis/README.md) |
| Reliability Requirement Analyzer / 可靠性需求分析器 | Non-functional Testing | [reliability-requirement-analysis](./testing-types/en/reliability-requirement-analysis/README.md) |
| Scalability Analyzer / 可扩展性分析器 | Non-functional Testing | [scalability-analysis](./testing-types/en/scalability-analysis/README.md) |
| Timeout Test Designer / 超时测试设计器 | API Testing | [timeout-test-design](./testing-types/en/timeout-test-design/README.md) |
| Service Degradation Test Designer / 服务降级测试设计器 | Resilience Testing | [service-degradation-test-design](./testing-types/en/service-degradation-test-design/README.md) |
| Circuit Breaker Test Designer / 熔断测试设计器 | Resilience Testing | [circuit-breaker-test-design](./testing-types/en/circuit-breaker-test-design/README.md) |
| Recovery Test Designer / 故障恢复测试设计器 | Resilience Testing | [recovery-test-design](./testing-types/en/recovery-test-design/README.md) |
| Chaos Test Designer / Chaos 测试设计器 | Chaos Testing | [chaos-test-design](./testing-types/en/chaos-test-design/README.md) |
| Disaster Recovery Test Designer / 容灾测试设计器 | Disaster Recovery Testing | [disaster-recovery-test-design](./testing-types/en/disaster-recovery-test-design/README.md) |
| Failover Test Designer / Failover 测试设计器 | Disaster Recovery Testing | [failover-test-design](./testing-types/en/failover-test-design/README.md) |
| Performance Baseline Analyzer / 性能基线分析器 | Performance Testing | [performance-baseline-analysis](./testing-types/en/performance-baseline-analysis/README.md) |
| Performance Regression Analyzer / 性能回归分析器 | Performance Testing | [performance-regression-analysis](./testing-types/en/performance-regression-analysis/README.md) |
| Capacity Planning Analyzer / 容量规划分析器 | Performance Testing | [capacity-planning-analysis](./testing-types/en/capacity-planning-analysis/README.md) |
| Stress Test Designer / 压力测试设计器 | Performance Testing | [stress-test-design](./testing-types/en/stress-test-design/README.md) |
| Spike Test Designer / 峰值测试设计器 | Performance Testing | [spike-test-design](./testing-types/en/spike-test-design/README.md) |
| Soak Test Designer / 稳定性测试设计器 | Performance Testing | [soak-test-design](./testing-types/en/soak-test-design/README.md) |
| Concurrency Test Designer / 并发测试设计器 | Performance Testing | [concurrency-test-design](./testing-types/en/concurrency-test-design/README.md) |
| Performance Trend Analyzer / 性能趋势分析器 | Performance Testing | [performance-trend-analysis](./testing-types/en/performance-trend-analysis/README.md) |
| Nginx Performance Analyzer / Nginx 性能分析器 | Performance Diagnostics | [nginx-performance-analysis](./testing-types/en/nginx-performance-analysis/README.md) |
| JVM Performance Analyzer / JVM 性能分析器 | Performance Diagnostics | [jvm-performance-analysis](./testing-types/en/jvm-performance-analysis/README.md) |
| Kubernetes Performance Analyzer / Kubernetes 性能分析器 | Performance Diagnostics | [kubernetes-performance-analysis](./testing-types/en/kubernetes-performance-analysis/README.md) |
| Network Latency Analyzer / 网络延迟分析器 | Performance Diagnostics | [network-latency-analysis](./testing-types/en/network-latency-analysis/README.md) |
| Slow Query Analyzer / 数据库慢查询分析器 | Performance Diagnostics | [slow-query-analysis](./testing-types/en/slow-query-analysis/README.md) |
| Connection Pool Analyzer / 连接池分析器 | Performance Diagnostics | [connection-pool-analysis](./testing-types/en/connection-pool-analysis/README.md) |
| SLI/SLO Analyzer / SLI/SLO 分析器 | Observability | [sli-slo-analysis](./testing-types/en/sli-slo-analysis/README.md) |

[View numbering and Standard Prompts for this category →](./PROMPT_COVERAGE_200_EN.md#5-performance-reliability-and-resilience)

### 6. Security, Privacy, And Accessibility

11 capabilities.

| Prompt | Original type | Module entry |
| --- | --- | --- |
| Accessibility Testing Assistant / 可访问性测试助手 | Accessibility | [accessibility-testing](./testing-types/en/accessibility-testing/README.md) |
| WCAG Compliance Analyzer / WCAG 合规分析器 | Accessibility | [wcag-compliance-analysis](./testing-types/en/wcag-compliance-analysis/README.md) |
| Security Test Scenario Generator / 安全测试场景生成器 | Security Testing | [security-test-scenario](./testing-types/en/security-test-scenario/README.md) |
| OWASP Risk Analyzer / OWASP 风险分析器 | Security Testing | [owasp-risk-analysis](./testing-types/en/owasp-risk-analysis/README.md) |
| Authorization Test Designer / 权限测试设计器 | Security Testing | [authorization-test-design](./testing-types/en/authorization-test-design/README.md) |
| Authentication Test Designer / 身份认证测试设计器 | Security Testing | [authentication-test-design](./testing-types/en/authentication-test-design/README.md) |
| Input Validation Test Generator / 输入校验测试生成器 | Security Testing | [input-validation-test](./testing-types/en/input-validation-test/README.md) |
| API Security Test Designer / API 安全测试设计器 | Security Testing | [api-security-test-design](./testing-types/en/api-security-test-design/README.md) |
| Data Privacy Test Analyzer / 数据隐私测试分析器 | Security Testing | [data-privacy-analysis](./testing-types/en/data-privacy-analysis/README.md) |
| Sensitive Data Exposure Analyzer / 敏感数据泄露分析器 | Security Testing | [sensitive-data-exposure-analysis](./testing-types/en/sensitive-data-exposure-analysis/README.md) |
| Data Masking Analyzer / 数据脱敏分析器 | Test Data | [data-masking-analysis](./testing-types/en/data-masking-analysis/README.md) |

[View numbering and Standard Prompts for this category →](./PROMPT_COVERAGE_200_EN.md#6-security-privacy-and-accessibility)

### 7. Data, Database, And Test Environment

17 capabilities.

| Prompt | Original type | Module entry |
| --- | --- | --- |
| Test Data Generator / 测试数据生成器 | Test Data | [test-data-generation](./testing-types/en/test-data-generation/README.md) |
| Boundary Data Generator / 边界测试数据生成器 | Test Data | [boundary-data-generation](./testing-types/en/boundary-data-generation/README.md) |
| SQL Test Data Generator / SQL 测试数据生成器 | Test Data | [database-test-data-analysis](./testing-types/en/database-test-data-analysis/README.md) |
| WireMock Generator / WireMock 配置生成器 | Mock Testing | [wiremock-generation](./testing-types/en/wiremock-generation/README.md) |
| Fault Simulation Designer / 故障模拟设计器 | Mock Testing | [fault-simulation-design](./testing-types/en/fault-simulation-design/README.md) |
| SQL Generator / SQL 生成器 | Database Testing | [sql-generation](./testing-types/en/sql-generation/README.md) |
| Database Validation Analyzer / 数据库校验分析器 | Database Testing | [database-validation-analysis](./testing-types/en/database-validation-analysis/README.md) |
| Data Consistency Analyzer / 数据一致性分析器 | Database Testing | [data-consistency-analysis](./testing-types/en/data-consistency-analysis/README.md) |
| Docker Build Analyzer / Docker 构建问题分析器 | DevOps | [docker-build-analysis](./testing-types/en/docker-build-analysis/README.md) |
| Kubernetes Issue Analyzer / Kubernetes 问题分析器 | DevOps | [kubernetes-issue-analysis](./testing-types/en/kubernetes-issue-analysis/README.md) |
| Environment Issue Analyzer / 环境问题分析器 | Environment Analysis | [environment-issue-analysis](./testing-types/en/environment-issue-analysis/README.md) |
| Test Environment Health Checker / 测试环境健康检查器 | Test Environment | [test-environment-health](./testing-types/en/test-environment-health/README.md) |
| Environment Drift Analyzer / 环境差异分析器 | Test Environment | [test-environment-drift-analysis](./testing-types/en/test-environment-drift-analysis/README.md) |
| Configuration Diff Analyzer / 配置差异分析器 | Test Environment | [configuration-diff-analysis](./testing-types/en/configuration-diff-analysis/README.md) |
| Test Data Cleanup Assistant / 测试数据清理助手 | Test Data | [test-data-cleanup](./testing-types/en/test-data-cleanup/README.md) |
| Test Data Dependency Analyzer / 测试数据依赖分析器 | Test Data | [test-data-dependency-analysis](./testing-types/en/test-data-dependency-analysis/README.md) |
| Test Data Pollution Analyzer / 测试数据污染分析器 | Test Data | [test-data-pollution-analysis](./testing-types/en/test-data-pollution-analysis/README.md) |

[View numbering and Standard Prompts for this category →](./PROMPT_COVERAGE_200_EN.md#7-data-database-and-test-environment)

### 8. Defects, Quality, And Test Governance

24 capabilities.

| Prompt | Original type | Module entry |
| --- | --- | --- |
| Quality Risk Analyzer / 质量风险分析器 | Risk Analysis | [quality-risk-analysis](./testing-types/en/quality-risk-analysis/README.md) |
| Bug Report Generator / 缺陷报告生成器 | Defect Management | [bug-reporting](./testing-types/en/bug-reporting/README.md) |
| Bug Analyzer / 缺陷分析器 | Defect Analysis | [bug-analysis](./testing-types/en/bug-analysis/README.md) |
| Bug Triage Assistant / 缺陷分诊助手 | Defect Management | [bug-triage](./testing-types/en/bug-triage/README.md) |
| Root Cause Analyzer / 根因分析器 | Root Cause Analysis | [root-cause-analysis](./testing-types/en/root-cause-analysis/README.md) |
| Log Analyzer / 日志分析器 | Incident Analysis | [log-analysis](./testing-types/en/log-analysis/README.md) |
| Stack Trace Analyzer / 堆栈异常分析器 | Incident Analysis | [stack-trace-analysis](./testing-types/en/stack-trace-analysis/README.md) |
| Change Impact Analyzer / 变更影响分析器 | Change Analysis | [change-impact-analysis](./testing-types/en/change-impact-analysis/README.md) |
| PR Risk Analyzer / PR 风险分析器 | Change Analysis | [pr-risk-analysis](./testing-types/en/pr-risk-analysis/README.md) |
| Regression Scope Analyzer / 回归范围分析器 | Regression Testing | [regression-scope-analysis](./testing-types/en/regression-scope-analysis/README.md) |
| Regression Test Selector / 回归测试选择器 | Regression Testing | [regression-test-selection](./testing-types/en/regression-test-selection/README.md) |
| Sprint Quality Analyzer / Sprint 质量分析器 | Agile Testing | [sprint-quality-analysis](./testing-types/en/sprint-quality-analysis/README.md) |
| Test Report Generator / 测试报告生成器 | Test Reporting | [test-reporting](./testing-types/en/test-reporting/README.md) |
| Quality Metrics Analyzer / 质量指标分析器 | Quality Management | [quality-metrics-analysis](./testing-types/en/quality-metrics-analysis/README.md) |
| Quality Dashboard Analyzer / 质量仪表盘分析器 | Quality Management | [quality-dashboard-analysis](./testing-types/en/quality-dashboard-analysis/README.md) |
| Quality Trend Analyzer / 质量趋势分析器 | Quality Management | [quality-trend-analysis](./testing-types/en/quality-trend-analysis/README.md) |
| Test Coverage Gap Analyzer / 测试覆盖缺口分析器 | Test Governance | [test-coverage-gap-analysis](./testing-types/en/test-coverage-gap-analysis/README.md) |
| Test Asset Health Analyzer / 测试资产健康分析器 | Test Governance | [test-asset-health-analysis](./testing-types/en/test-asset-health-analysis/README.md) |
| Defect Leakage Analyzer / 缺陷逃逸分析器 | Quality Management | [defect-leakage-analysis](./testing-types/en/defect-leakage-analysis/README.md) |
| Defect Trend Analyzer / 缺陷趋势分析器 | Quality Management | [defect-trend-analysis](./testing-types/en/defect-trend-analysis/README.md) |
| Defect Clustering Analyzer / 缺陷聚类分析器 | Quality Management | [defect-clustering-analysis](./testing-types/en/defect-clustering-analysis/README.md) |
| Defect Prediction Analyzer / 缺陷预测分析器 | Quality Management | [defect-prediction-analysis](./testing-types/en/defect-prediction-analysis/README.md) |
| Test Effectiveness Analyzer / 测试有效性分析器 | Quality Management | [test-effectiveness-analysis](./testing-types/en/test-effectiveness-analysis/README.md) |
| Quality Gate Analyzer / 质量门禁分析器 | Quality Management | [quality-gate-analysis](./testing-types/en/quality-gate-analysis/README.md) |

[View numbering and Standard Prompts for this category →](./PROMPT_COVERAGE_200_EN.md#8-defects-quality-and-test-governance)

### 9. Release, Production, And Observability

14 capabilities.

| Prompt | Original type | Module entry |
| --- | --- | --- |
| Release Readiness Analyzer / 发布就绪分析器 | Release Management | [release-readiness-analysis](./testing-types/en/release-readiness-analysis/README.md) |
| Go/No-Go Risk Analyzer / Go/No-Go 风险分析器 | Release Management | [go-no-go-risk-analysis](./testing-types/en/go-no-go-risk-analysis/README.md) |
| Production Verification Generator / 生产验证生成器 | Release Validation | [production-verification-generation](./testing-types/en/production-verification-generation/README.md) |
| Smoke Test Generator / 冒烟测试生成器 | Release Validation | [smoke-test-generation](./testing-types/en/smoke-test-generation/README.md) |
| Release Risk Scorer / 发布风险评分器 | Release Management | [release-risk-scoring](./testing-types/en/release-risk-scoring/README.md) |
| Hotfix Risk Analyzer / Hotfix 风险分析器 | Release Management | [hotfix-risk-analysis](./testing-types/en/hotfix-risk-analysis/README.md) |
| Rollback Verification Generator / 回滚验证生成器 | Release Management | [rollback-verification](./testing-types/en/rollback-verification/README.md) |
| Release Change Summary Generator / 发布变更摘要生成器 | Release Management | [release-change-summary](./testing-types/en/release-change-summary/README.md) |
| Production Incident Analyzer / 生产事故分析器 | Production Quality | [production-incident-analysis](./testing-types/en/production-incident-analysis/README.md) |
| Production Log Correlator / 生产日志关联分析器 | Observability | [production-log-correlation](./testing-types/en/production-log-correlation/README.md) |
| Metrics Anomaly Analyzer / 指标异常分析器 | Observability | [metrics-anomaly-analysis](./testing-types/en/metrics-anomaly-analysis/README.md) |
| Distributed Trace Analyzer / Trace 分析器 | Observability | [distributed-trace-analysis](./testing-types/en/distributed-trace-analysis/README.md) |
| Alert Analyzer / 告警分析器 | Observability | [alert-analysis](./testing-types/en/alert-analysis/README.md) |
| Production Issue Reproducer / 线上问题测试复现助手 | Production Quality | [production-issue-reproduction](./testing-types/en/production-issue-reproduction/README.md) |

[View numbering and Standard Prompts for this category →](./PROMPT_COVERAGE_200_EN.md#9-release-production-and-observability)

### 10. AI And LLM Testing

13 capabilities.

| Prompt | Original type | Module entry |
| --- | --- | --- |
| AI Feature Test Designer / AI 功能测试设计器 | AI Testing | [ai-feature-test-design](./testing-types/en/ai-feature-test-design/README.md) |
| LLM Test Case Generator / LLM 测试用例生成器 | AI Testing | [llm-test-case-generation](./testing-types/en/llm-test-case-generation/README.md) |
| Prompt Test Analyzer / Prompt 测试分析器 | AI Testing | [prompt-test-analysis](./testing-types/en/prompt-test-analysis/README.md) |
| Prompt Regression Tester / Prompt 回归测试器 | AI Testing | [prompt-regression-testing](./testing-types/en/prompt-regression-testing/README.md) |
| LLM Output Quality Evaluator / LLM 输出质量评估器 | AI Testing | [llm-output-quality-evaluation](./testing-types/en/llm-output-quality-evaluation/README.md) |
| Hallucination Analyzer / 幻觉检测分析器 | AI Testing | [hallucination-analysis](./testing-types/en/hallucination-analysis/README.md) |
| AI Safety Test Analyzer / AI 安全测试分析器 | AI Testing | [ai-safety-test-analysis](./testing-types/en/ai-safety-test-analysis/README.md) |
| AI Red Team Test Designer / AI Red Team 测试设计器 | AI Testing | [ai-red-team-test-design](./testing-types/en/ai-red-team-test-design/README.md) |
| AI Evaluation Designer / AI Eval 设计器 | AI Testing | [ai-evaluation-design](./testing-types/en/ai-evaluation-design/README.md) |
| AI Model Regression Analyzer / AI 模型回归分析器 | AI Testing | [ai-model-regression-analysis](./testing-types/en/ai-model-regression-analysis/README.md) |
| Prompt Injection Test Designer / Prompt Injection 测试设计器 | AI Safety Testing | [prompt-injection-test-design](./testing-types/en/prompt-injection-test-design/README.md) |
| AI Agent Test Designer / Agent 测试设计器 | AI Testing | [ai-agent-test-design](./testing-types/en/ai-agent-test-design/README.md) |
| Agent Tool-Call Test Designer / Agent 工具调用测试器 | AI Testing | [agent-tool-call-test-design](./testing-types/en/agent-tool-call-test-design/README.md) |

[View numbering and Standard Prompts for this category →](./PROMPT_COVERAGE_200_EN.md#10-ai-and-llm-testing)

## Testing Workflows

Workflows organize multiple Prompts into repeatable quality activities. See [Testing Workflows](./Workflows/en/README.md) for full guidance.

### Testing Prompt Router

Use the [Testing Prompt Router](./Workflows/en/discover-testing/README.md) when the starting point is unclear. It selects one main Prompt, at most one supporting Prompt, an invocation order, minimum input, and missing information.

### AI Quality Analysis Workflow

The [AI Quality Analysis Workflow](./Workflows/en/ai-quality-analysis-workflow/README.md) uses 43 role Prompts per language across eight traceable stages:

| Stage | Main objective |
| --- | --- |
| Requirements analysis | Identify objectives, rules, risks, and gaps from product, QA, UX, and technical views |
| Test strategy | Define scope, levels, environment, data, and risk validation |
| Strategy review | Review completeness, executability, and evidence boundaries |
| Code review | Analyze product, quality, technical, and experience impact |
| Test case writing | Convert strategy into preconditions, steps, expectations, and evidence |
| Test case review | Review coverage, priority, duplication, and unverifiable expectations |
| Test report | Summarize evidence, limits, defects, and uncovered risk |
| Test report review | Review credibility, disagreements, and human decision items |

Role Prompts run independently and Synthesis Prompts preserve consensus and disagreement. Release approval, ownership, and accountability remain Human Tasks.

### Daily, Sprint, And Release Workflows

| Workflow | Main phases | Best for |
| --- | --- | --- |
| [Daily Testing](./Workflows/en/daily-testing-workflow.md) | Planning → environment/data → cases/automation/exploration → defects → wrap-up | Daily QA work |
| [Sprint Testing](./Workflows/en/sprint-testing-workflow.md) | Planning → strategy → continuous validation → regression → review/retro | Agile iterations |
| [Release Testing](./Workflows/en/release-testing-workflow.md) | T-14 planning → T-7 freeze → T-3 candidate → Go/No-Go → post-release validation | Production releases |

## Prompt Versions

| Version | Use when |
| --- | --- |
| Standard | Default, complete, and copy-ready |
| Lite | The task or context is small |
| CRISPE / RISE / ICIO / ROSES | A specific Prompt framework is required |
| LangGPT | Explicit role, constraints, and workflow are useful |
| Web / Mobile / Framework | The scenario is platform- or framework-specific; for example, [test-strategy-Web](./testing-types/en/test-strategy-Web/README.md) and [test-strategy-Mobile](./testing-types/en/test-strategy-Mobile/README.md) |

Other modules with split platform versions include: [test-case-reviewer (default)](./testing-types/en/test-case-reviewer/README.md) · [test-case-reviewer-Web](./testing-types/en/test-case-reviewer-Web/README.md) · [test-case-reviewer-Mobile](./testing-types/en/test-case-reviewer-Mobile/README.md)

## Documentation

| Document | Purpose |
| --- | --- |
| [Complete Prompt catalog](./PROMPT_COVERAGE_200_EN.md) | Categories, modules, and entry points for 200 capabilities |
| [Extended Prompt catalog](./PROMPT_COVERAGE_EXTENDED_EN.md) | 10 extended capabilities outside the 200-item baseline |
| [Testing Workflows](./Workflows/en/README.md) | Router, AI quality analysis, daily, sprint, and release flows |
| [Contributing Guide](./CONTRIBUTING_EN.md) | Contribution, development, commit, and PR workflow |
| [Prompt Authoring Standard](./PROMPT_AUTHORING_STANDARD_EN.md) | Quality rules for Prompts and module READMEs |
| [Examples](./examples/README_EN.md) | Basic, advanced, and best-practice entry points |
| [License](./LICENSE) | Official legal text |

## License And Support

This project uses the [PolyForm Noncommercial License 1.0.0](./LICENSE). Feedback is welcome through Issues, Pull Requests, or the [online documentation](https://inaodeng.com/prompts).
