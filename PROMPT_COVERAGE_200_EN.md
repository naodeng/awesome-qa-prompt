<div align="right"><a href="./PROMPT_COVERAGE_200.md">简体中文</a> · <strong>English</strong></div>

# 200-Capability QA Prompt Catalog

This catalog reorganizes the numbered 1–200 capability list into ten usage-oriented categories. Every item links to its English module entry and copy-ready Standard Prompt; numbering and module mapping mirror the Chinese catalog.

> “Covered” means that a bilingual Prompt Baseline exists in this repository. It does not mean that tests were run against a real system or that any result was verified.

[Back to project home](./README_EN.md) · [Testing Workflows](./Workflows/en/README.md)

## 1. Requirements, Planning, And Test Strategy

16 capabilities.

| # | English name | 中文名称 | Original type | Module | Standard Prompt |
| ---: | --- | --- | --- | --- | --- |
| 1 | Requirement Analyzer | 需求分析器 | 需求分析 | [requirements-analysis](./testing-types/en/requirements-analysis/README.md) | [Standard](./testing-types/en/requirements-analysis/Standard-version/RequirementsAnalysisPrompt-Mobile.md) |
| 2 | Acceptance Criteria Reviewer | 验收标准审查器 | 需求分析 | [acceptance-criteria-reviewer](./testing-types/en/acceptance-criteria-reviewer/README.md) | [Standard](./testing-types/en/acceptance-criteria-reviewer/Standard-version/AcceptanceCriteriaReviewerPrompt.md) |
| 3 | Requirement Gap Analyzer | 需求缺口分析器 | 需求分析 | [requirement-gap-analyzer](./testing-types/en/requirement-gap-analyzer/README.md) | [Standard](./testing-types/en/requirement-gap-analyzer/Standard-version/RequirementGapAnalyzerPrompt.md) |
| 5 | Testability Analyzer | 可测试性分析器 | 需求分析 | [testability-analysis](./testing-types/en/testability-analysis/README.md) | [Standard](./testing-types/en/testability-analysis/Standard-version/TestabilityAnalyzerPrompt.md) |
| 6 | Test Strategy Generator | 测试策略生成器 | 测试策略 | [test-strategy](./testing-types/en/test-strategy/README.md) | [Standard](./testing-types/en/test-strategy/Standard-version/TestStrategyPrompt-Mobile.md) |
| 7 | Test Plan Generator | 测试计划生成器 | 测试计划 | [test-plan-design](./testing-types/en/test-plan-design/README.md) | [Standard](./testing-types/en/test-plan-design/Standard-version/TestPlanDesignerPrompt.md) |
| 8 | Test Scope Analyzer | 测试范围分析器 | 测试策略 | [test-scope-analysis](./testing-types/en/test-scope-analysis/README.md) | [Standard](./testing-types/en/test-scope-analysis/Standard-version/TestScopeAnalyzerPrompt.md) |
| 69 | Refinement QA Assistant | 需求梳理 QA 助手 | 敏捷测试 | [refinement-qa-assistant](./testing-types/en/refinement-qa-assistant/README.md) | [Standard](./testing-types/en/refinement-qa-assistant/Standard-version/RefinementQAAssistantPrompt.md) |
| 70 | Sprint Planning QA Assistant | Sprint Planning QA 助手 | 敏捷测试 | [sprint-planning-qa](./testing-types/en/sprint-planning-qa/README.md) | [Standard](./testing-types/en/sprint-planning-qa/Standard-version/SprintPlanningQAAssistantPrompt.md) |
| 71 | Retrospective Analyzer | Sprint 回顾分析器 | 敏捷测试 | [retrospective-analysis](./testing-types/en/retrospective-analysis/README.md) | [Standard](./testing-types/en/retrospective-analysis/Standard-version/RetrospectiveAnalyzerPrompt.md) |
| 80 | Business Rule Analyzer | 业务规则分析器 | 需求分析 | [business-rule-analysis](./testing-types/en/business-rule-analysis/README.md) | [Standard](./testing-types/en/business-rule-analysis/Standard-version/BusinessRuleAnalyzerPrompt.md) |
| 81 | Business Flow Analyzer | 业务流程分析器 | 需求分析 | [business-flow-analysis](./testing-types/en/business-flow-analysis/README.md) | [Standard](./testing-types/en/business-flow-analysis/Standard-version/BusinessFlowAnalyzerPrompt.md) |
| 82 | Requirement Dependency Analyzer | 需求依赖分析器 | 需求分析 | [requirement-dependency-analysis](./testing-types/en/requirement-dependency-analysis/README.md) | [Standard](./testing-types/en/requirement-dependency-analysis/Standard-version/RequirementDependencyAnalyzerPrompt.md) |
| 83 | Requirement Conflict Detector | 需求冲突检测器 | 需求分析 | [requirement-conflict-analysis](./testing-types/en/requirement-conflict-analysis/README.md) | [Standard](./testing-types/en/requirement-conflict-analysis/Standard-version/RequirementConflictAnalyzerPrompt.md) |
| 84 | NFR Analyzer | 非功能需求分析器 | 非功能测试 | [nfr-analysis](./testing-types/en/nfr-analysis/README.md) | [Standard](./testing-types/en/nfr-analysis/Standard-version/NFRAnalyzerPrompt.md) |
| 162 | Requirement Traceability Analyzer | 需求测试追踪分析器 | 测试治理 | [requirement-traceability-analysis](./testing-types/en/requirement-traceability-analysis/README.md) | [Standard](./testing-types/en/requirement-traceability-analysis/Standard-version/RequirementTraceabilityAnalyzerPrompt.md) |

## 2. Test Analysis And Design

22 capabilities.

| # | English name | 中文名称 | Original type | Module | Standard Prompt |
| ---: | --- | --- | --- | --- | --- |
| 9 | Test Scenario Designer | 测试场景设计器 | 测试设计 | [test-scenario-design](./testing-types/en/test-scenario-design/README.md) | [Standard](./testing-types/en/test-scenario-design/Standard-version/TestScenarioDesignerPrompt.md) |
| 10 | Test Case Generator | 测试用例生成器 | 测试设计 | [test-case-writing](./testing-types/en/test-case-writing/README.md) | [Standard](./testing-types/en/test-case-writing/Standard-version/TestCaseWritingPrompt-Mobile.md) |
| 11 | Boundary Value Analyzer | 边界值分析器 | 测试设计 | [boundary-value-analysis](./testing-types/en/boundary-value-analysis/README.md) | [Standard](./testing-types/en/boundary-value-analysis/Standard-version/BoundaryValueAnalyzerPrompt.md) |
| 12 | Equivalence Partition Analyzer | 等价类分析器 | 测试设计 | [equivalence-partition-analysis](./testing-types/en/equivalence-partition-analysis/README.md) | [Standard](./testing-types/en/equivalence-partition-analysis/Standard-version/EquivalencePartitionAnalyzerPrompt.md) |
| 13 | Decision Table Generator | 决策表生成器 | 测试设计 | [decision-table-analysis](./testing-types/en/decision-table-analysis/README.md) | [Standard](./testing-types/en/decision-table-analysis/Standard-version/DecisionTableAnalyzerPrompt.md) |
| 14 | State Transition Analyzer | 状态转换分析器 | 测试设计 | [state-transition-analysis](./testing-types/en/state-transition-analysis/README.md) | [Standard](./testing-types/en/state-transition-analysis/Standard-version/StateTransitionAnalyzerPrompt.md) |
| 15 | Pairwise Test Generator | Pairwise 组合测试生成器 | 测试设计 | [pairwise-test-design](./testing-types/en/pairwise-test-design/README.md) | [Standard](./testing-types/en/pairwise-test-design/Standard-version/PairwiseTestGeneratorPrompt.md) |
| 20 | E2E Scenario Designer | 端到端测试场景设计器 | E2E 测试 | [functional-testing](./testing-types/en/functional-testing/README.md) | [Standard](./testing-types/en/functional-testing/Standard-version/FunctionalTestingPrompt-Mobile.md) |
| 21 | UI Test Designer | UI 测试设计器 | UI 测试 | [ui-test-design](./testing-types/en/ui-test-design/README.md) | [Standard](./testing-types/en/ui-test-design/Standard-version/UITestDesignerPrompt.md) |
| 22 | User Journey Analyzer | 用户旅程分析器 | E2E 测试 | [user-journey-analysis](./testing-types/en/user-journey-analysis/README.md) | [Standard](./testing-types/en/user-journey-analysis/Standard-version/UserJourneyAnalyzerPrompt.md) |
| 76 | Exploratory Testing Assistant | 探索式测试助手 | 探索式测试 | [manual-testing](./testing-types/en/manual-testing/README.md) | [Standard](./testing-types/en/manual-testing/Standard-version/ManualTestingPrompt-Mobile.md) |
| 77 | Test Charter Generator | 探索式测试章程生成器 | 探索式测试 | [test-charter-generation](./testing-types/en/test-charter-generation/README.md) | [Standard](./testing-types/en/test-charter-generation/Standard-version/TestCharterGeneratorPrompt.md) |
| 78 | Testing Heuristics Analyzer | 测试启发式分析器 | 测试设计 | [testing-heuristics-analysis](./testing-types/en/testing-heuristics-analysis/README.md) | [Standard](./testing-types/en/testing-heuristics-analysis/Standard-version/TestingHeuristicsAnalyzerPrompt.md) |
| 79 | Error Guessing Analyzer | 错误猜测分析器 | 测试设计 | [error-guessing-analysis](./testing-types/en/error-guessing-analysis/README.md) | [Standard](./testing-types/en/error-guessing-analysis/Standard-version/ErrorGuessingAnalyzerPrompt.md) |
| 88 | Compatibility Test Designer | 兼容性测试设计器 | 兼容性测试 | [compatibility-test-design](./testing-types/en/compatibility-test-design/README.md) | [Standard](./testing-types/en/compatibility-test-design/Standard-version/CompatibilityTestDesignerPrompt.md) |
| 89 | Browser Compatibility Analyzer | 浏览器兼容性分析器 | 兼容性测试 | [browser-compatibility-analysis](./testing-types/en/browser-compatibility-analysis/README.md) | [Standard](./testing-types/en/browser-compatibility-analysis/Standard-version/BrowserCompatibilityAnalyzerPrompt.md) |
| 90 | Mobile Compatibility Analyzer | 移动端兼容性分析器 | 兼容性测试 | [mobile-compatibility-analysis](./testing-types/en/mobile-compatibility-analysis/README.md) | [Standard](./testing-types/en/mobile-compatibility-analysis/Standard-version/MobileCompatibilityAnalyzerPrompt.md) |
| 93 | Localization Test Designer | 多语言测试设计器 | 国际化测试 | [localization-test-design](./testing-types/en/localization-test-design/README.md) | [Standard](./testing-types/en/localization-test-design/Standard-version/LocalizationTestDesignerPrompt.md) |
| 94 | Internationalization Analyzer | 国际化问题分析器 | 国际化测试 | [internationalization-analysis](./testing-types/en/internationalization-analysis/README.md) | [Standard](./testing-types/en/internationalization-analysis/Standard-version/InternationalizationAnalyzerPrompt.md) |
| 95 | Timezone Test Designer | 时区测试设计器 | 国际化测试 | [timezone-test-design](./testing-types/en/timezone-test-design/README.md) | [Standard](./testing-types/en/timezone-test-design/Standard-version/TimezoneTestDesignerPrompt.md) |
| 159 | Test Case Optimizer | 测试用例优化器 | 测试治理 | [test-case-optimization](./testing-types/en/test-case-optimization/README.md) | [Standard](./testing-types/en/test-case-optimization/Standard-version/TestCaseOptimizerPrompt.md) |
| 160 | Test Case Prioritizer | 测试用例优先级分析器 | 测试治理 | [test-case-prioritization](./testing-types/en/test-case-prioritization/README.md) | [Standard](./testing-types/en/test-case-prioritization/Standard-version/TestCasePrioritizerPrompt.md) |

## 3. API, Contract, Messaging, And Integration

32 capabilities.

| # | English name | 中文名称 | Original type | Module | Standard Prompt |
| ---: | --- | --- | --- | --- | --- |
| 16 | API Test Designer | API 测试设计器 | API 测试 | [api-testing](./testing-types/en/api-testing/README.md) | [Standard](./testing-types/en/api-testing/Standard-version/APITestingPrompt.md) |
| 17 | API Negative Test Generator | API 负向测试生成器 | API 测试 | [api-negative-testing](./testing-types/en/api-negative-testing/README.md) | [Standard](./testing-types/en/api-negative-testing/Standard-version/APINegativeTestingPrompt.md) |
| 18 | API Schema Validator | API Schema 校验器 | API 测试 | [api-schema-validation](./testing-types/en/api-schema-validation/README.md) | [Standard](./testing-types/en/api-schema-validation/Standard-version/APISchemaValidationPrompt.md) |
| 19 | API Contract Analyzer | API 契约分析器 | API 测试 | [api-contract-analysis](./testing-types/en/api-contract-analysis/README.md) | [Standard](./testing-types/en/api-contract-analysis/Standard-version/APIContractAnalysisPrompt.md) |
| 28 | Pytest Test Generator | Pytest 测试生成器 | 自动化测试 | [api-test-pytest](./testing-types/en/api-test-pytest/README.md) | [Standard](./testing-types/en/api-test-pytest/Standard-version/APITestPytestPrompt.md) |
| 34 | Mock API Generator | Mock API 生成器 | Mock 测试 | [mock-api-generation](./testing-types/en/mock-api-generation/README.md) | [Standard](./testing-types/en/mock-api-generation/Standard-version/MockAPIGeneratorPrompt.md) |
| 104 | API Dependency Analyzer | API 依赖分析器 | API 测试 | [api-dependency-analysis](./testing-types/en/api-dependency-analysis/README.md) | [Standard](./testing-types/en/api-dependency-analysis/Standard-version/APIDependencyAnalysisPrompt.md) |
| 105 | API Call Chain Analyzer | API 调用链分析器 | API 测试 | [api-call-chain-analysis](./testing-types/en/api-call-chain-analysis/README.md) | [Standard](./testing-types/en/api-call-chain-analysis/Standard-version/APICallChainAnalysisPrompt.md) |
| 106 | API Regression Impact Analyzer | API 回归影响分析器 | API 测试 | [api-regression-impact](./testing-types/en/api-regression-impact/README.md) | [Standard](./testing-types/en/api-regression-impact/Standard-version/APIRegressionImpactPrompt.md) |
| 107 | API Compatibility Analyzer | API 兼容性分析器 | API 测试 | [api-compatibility-analysis](./testing-types/en/api-compatibility-analysis/README.md) | [Standard](./testing-types/en/api-compatibility-analysis/Standard-version/APICompatibilityAnalysisPrompt.md) |
| 108 | API Version Change Analyzer | API 版本变更分析器 | API 测试 | [api-version-change-analysis](./testing-types/en/api-version-change-analysis/README.md) | [Standard](./testing-types/en/api-version-change-analysis/Standard-version/APIVersionChangeAnalysisPrompt.md) |
| 109 | OpenAPI Specification Analyzer | OpenAPI 规范分析器 | API 测试 | [openapi-specification-analysis](./testing-types/en/openapi-specification-analysis/README.md) | [Standard](./testing-types/en/openapi-specification-analysis/Standard-version/OpenAPISpecificationAnalysisPrompt.md) |
| 110 | GraphQL Test Designer | GraphQL 测试设计器 | API 测试 | [graphql-test-design](./testing-types/en/graphql-test-design/README.md) | [Standard](./testing-types/en/graphql-test-design/Standard-version/GraphQLTestDesignerPrompt.md) |
| 111 | WebSocket Test Designer | WebSocket 测试设计器 | API 测试 | [websocket-test-design](./testing-types/en/websocket-test-design/README.md) | [Standard](./testing-types/en/websocket-test-design/Standard-version/WebSocketTestDesignerPrompt.md) |
| 112 | Idempotency Test Designer | 幂等性测试设计器 | API 测试 | [idempotency-test-design](./testing-types/en/idempotency-test-design/README.md) | [Standard](./testing-types/en/idempotency-test-design/Standard-version/IdempotencyTestDesignerPrompt.md) |
| 113 | Pagination Test Designer | 分页测试设计器 | API 测试 | [pagination-test-design](./testing-types/en/pagination-test-design/README.md) | [Standard](./testing-types/en/pagination-test-design/Standard-version/PaginationTestDesignerPrompt.md) |
| 114 | Rate Limit Test Designer | 限流测试设计器 | API 测试 | [rate-limit-test-design](./testing-types/en/rate-limit-test-design/README.md) | [Standard](./testing-types/en/rate-limit-test-design/Standard-version/RateLimitTestDesignerPrompt.md) |
| 116 | Retry Test Designer | 重试机制测试设计器 | API 测试 | [retry-mechanism-test-design](./testing-types/en/retry-mechanism-test-design/README.md) | [Standard](./testing-types/en/retry-mechanism-test-design/Standard-version/RetryMechanismTestDesignerPrompt.md) |
| 117 | Contract Test Generator | 契约测试生成器 | 契约测试 | [contract-test-generation](./testing-types/en/contract-test-generation/README.md) | [Standard](./testing-types/en/contract-test-generation/Standard-version/ContractTestGeneratorPrompt.md) |
| 118 | Consumer Contract Analyzer | Consumer Contract 分析器 | 契约测试 | [consumer-contract-analysis](./testing-types/en/consumer-contract-analysis/README.md) | [Standard](./testing-types/en/consumer-contract-analysis/Standard-version/ConsumerContractAnalyzerPrompt.md) |
| 119 | Provider Contract Analyzer | Provider Contract 分析器 | 契约测试 | [provider-contract-analysis](./testing-types/en/provider-contract-analysis/README.md) | [Standard](./testing-types/en/provider-contract-analysis/Standard-version/ProviderContractAnalyzerPrompt.md) |
| 120 | Kafka Test Designer | Kafka 测试设计器 | 消息测试 | [kafka-test-design](./testing-types/en/kafka-test-design/README.md) | [Standard](./testing-types/en/kafka-test-design/Standard-version/KafkaTestDesignerPrompt.md) |
| 121 | Kafka Event Generator | Kafka Event 生成器 | 消息测试 | [kafka-event-generation](./testing-types/en/kafka-event-generation/README.md) | [Standard](./testing-types/en/kafka-event-generation/Standard-version/KafkaEventGeneratorPrompt.md) |
| 122 | Message Consistency Analyzer | 消息一致性分析器 | 消息测试 | [message-consistency-analysis](./testing-types/en/message-consistency-analysis/README.md) | [Standard](./testing-types/en/message-consistency-analysis/Standard-version/MessageConsistencyAnalyzerPrompt.md) |
| 123 | Duplicate Message Test Designer | 消息重复消费测试器 | 消息测试 | [duplicate-message-testing](./testing-types/en/duplicate-message-testing/README.md) | [Standard](./testing-types/en/duplicate-message-testing/Standard-version/DuplicateMessageTestDesignerPrompt.md) |
| 124 | Message Ordering Test Designer | 消息顺序测试设计器 | 消息测试 | [message-ordering-test-design](./testing-types/en/message-ordering-test-design/README.md) | [Standard](./testing-types/en/message-ordering-test-design/Standard-version/MessageOrderingTestDesignerPrompt.md) |
| 125 | Message Loss Analyzer | 消息丢失分析器 | 消息测试 | [message-loss-analysis](./testing-types/en/message-loss-analysis/README.md) | [Standard](./testing-types/en/message-loss-analysis/Standard-version/MessageLossAnalyzerPrompt.md) |
| 126 | Async Flow Test Designer | 异步流程测试设计器 | 集成测试 | [async-flow-test-design](./testing-types/en/async-flow-test-design/README.md) | [Standard](./testing-types/en/async-flow-test-design/Standard-version/AsyncFlowTestDesignerPrompt.md) |
| 127 | Microservice Dependency Analyzer | 微服务依赖分析器 | 微服务测试 | [microservice-dependency-analysis](./testing-types/en/microservice-dependency-analysis/README.md) | [Standard](./testing-types/en/microservice-dependency-analysis/Standard-version/MicroserviceDependencyAnalysisPrompt.md) |
| 128 | Service Call Chain Analyzer | 服务调用链分析器 | 微服务测试 | [service-call-chain-analysis](./testing-types/en/service-call-chain-analysis/README.md) | [Standard](./testing-types/en/service-call-chain-analysis/Standard-version/ServiceCallChainAnalysisPrompt.md) |
| 129 | Distributed Transaction Test Designer | 分布式事务测试设计器 | 微服务测试 | [distributed-transaction-test-design](./testing-types/en/distributed-transaction-test-design/README.md) | [Standard](./testing-types/en/distributed-transaction-test-design/Standard-version/DistributedTransactionTestDesignerPrompt.md) |
| 130 | Eventual Consistency Test Designer | 最终一致性测试设计器 | 微服务测试 | [eventual-consistency-test-design](./testing-types/en/eventual-consistency-test-design/README.md) | [Standard](./testing-types/en/eventual-consistency-test-design/Standard-version/EventualConsistencyTestDesignerPrompt.md) |

## 4. Automation And Test Engineering

16 capabilities.

| # | English name | 中文名称 | Original type | Module | Standard Prompt |
| ---: | --- | --- | --- | --- | --- |
| 23 | Automation Candidate Analyzer | 自动化候选用例分析器 | 自动化测试 | [automation-candidate-analysis](./testing-types/en/automation-candidate-analysis/README.md) | [Standard](./testing-types/en/automation-candidate-analysis/Standard-version/AutomationCandidateAnalyzerPrompt.md) |
| 24 | Automation Test Generator | 自动化测试生成器 | 自动化测试 | [automation-testing](./testing-types/en/automation-testing/README.md) | [Standard](./testing-types/en/automation-testing/Standard-version/AutomationTestingPrompt.md) |
| 25 | Playwright Test Generator | Playwright 测试生成器 | 自动化测试 | [ui-test-playwright](./testing-types/en/ui-test-playwright/README.md) | [Standard](./testing-types/en/ui-test-playwright/Standard-version/UITestPlaywrightPrompt.md) |
| 26 | Cypress Test Generator | Cypress 测试生成器 | 自动化测试 | [ui-test-cypress](./testing-types/en/ui-test-cypress/README.md) | [Standard](./testing-types/en/ui-test-cypress/Standard-version/UITestCypressPrompt.md) |
| 27 | Selenium Test Generator | Selenium 测试生成器 | 自动化测试 | [ui-test-selenium](./testing-types/en/ui-test-selenium/README.md) | [Standard](./testing-types/en/ui-test-selenium/Standard-version/UITestSeleniumPrompt.md) |
| 29 | Automation Code Reviewer | 自动化代码审查器 | 自动化测试 | [code-review](./testing-types/en/code-review/README.md) | [Standard](./testing-types/en/code-review/Standard-version/CodeReviewPrompt.md) |
| 30 | Flaky Test Analyzer | 不稳定测试分析器 | 自动化测试 | [flaky-test-analysis](./testing-types/en/flaky-test-analysis/README.md) | [Standard](./testing-types/en/flaky-test-analysis/Standard-version/FlakyTestAnalyzerPrompt.md) |
| 60 | CI/CD Failure Analyzer | CI/CD 失败分析器 | DevOps | [cicd-failure-analysis](./testing-types/en/cicd-failure-analysis/README.md) | [Standard](./testing-types/en/cicd-failure-analysis/Standard-version/CICDFailureAnalyzerPrompt.md) |
| 151 | Test Failure Classifier | 测试失败分类器 | 自动化测试 | [test-failure-classification](./testing-types/en/test-failure-classification/README.md) | [Standard](./testing-types/en/test-failure-classification/Standard-version/TestFailureClassifierPrompt.md) |
| 152 | Automation Failure RCA Analyzer | 自动化失败根因分析器 | 自动化测试 | [automation-failure-rca](./testing-types/en/automation-failure-rca/README.md) | [Standard](./testing-types/en/automation-failure-rca/Standard-version/AutomationFailureRCAAnalyzerPrompt.md) |
| 153 | Locator Repair Assistant | Locator 修复助手 | UI 自动化 | [locator-repair](./testing-types/en/locator-repair/README.md) | [Standard](./testing-types/en/locator-repair/Standard-version/LocatorRepairAssistantPrompt.md) |
| 154 | Test Refactoring Assistant | 自动化测试重构助手 | 自动化测试 | [test-refactoring](./testing-types/en/test-refactoring/README.md) | [Standard](./testing-types/en/test-refactoring/Standard-version/TestRefactoringAssistantPrompt.md) |
| 155 | Test Code Quality Analyzer | 测试代码质量分析器 | 自动化测试 | [test-code-quality-analysis](./testing-types/en/test-code-quality-analysis/README.md) | [Standard](./testing-types/en/test-code-quality-analysis/Standard-version/TestCodeQualityAnalyzerPrompt.md) |
| 156 | Automation Coverage Analyzer | 自动化覆盖率分析器 | 自动化测试 | [automation-coverage-analysis](./testing-types/en/automation-coverage-analysis/README.md) | [Standard](./testing-types/en/automation-coverage-analysis/Standard-version/AutomationCoverageAnalyzerPrompt.md) |
| 157 | Duplicate Test Detector | 测试重复检测器 | 测试治理 | [duplicate-test-detection](./testing-types/en/duplicate-test-detection/README.md) | [Standard](./testing-types/en/duplicate-test-detection/Standard-version/DuplicateTestDetectorPrompt.md) |
| 158 | Obsolete Test Detector | 过期测试检测器 | 测试治理 | [obsolete-test-detection](./testing-types/en/obsolete-test-detection/README.md) | [Standard](./testing-types/en/obsolete-test-detection/Standard-version/ObsoleteTestDetectorPrompt.md) |

## 5. Performance, Reliability, And Resilience

35 capabilities.

| # | English name | 中文名称 | Original type | Module | Standard Prompt |
| ---: | --- | --- | --- | --- | --- |
| 47 | Performance Requirement Analyzer | 性能需求分析器 | 性能测试 | [performance-requirement-analysis](./testing-types/en/performance-requirement-analysis/README.md) | [Standard](./testing-types/en/performance-requirement-analysis/Standard-version/PerformanceRequirementAnalyzerPrompt.md) |
| 48 | Workload Model Designer | 性能负载模型设计器 | 性能测试 | [workload-model-design](./testing-types/en/workload-model-design/README.md) | [Standard](./testing-types/en/workload-model-design/Standard-version/WorkloadModelDesignerPrompt.md) |
| 49 | VU/TPS Calculator | VU/TPS 计算器 | 性能测试 | [vu-tps-calculation](./testing-types/en/vu-tps-calculation/README.md) | [Standard](./testing-types/en/vu-tps-calculation/Standard-version/VUTPSCalculatorPrompt.md) |
| 50 | Performance Scenario Designer | 性能场景设计器 | 性能测试 | [performance-scenario-design](./testing-types/en/performance-scenario-design/README.md) | [Standard](./testing-types/en/performance-scenario-design/Standard-version/PerformanceScenarioDesignerPrompt.md) |
| 51 | Performance Result Analyzer | 性能结果分析器 | 性能测试 | [performance-result-analysis](./testing-types/en/performance-result-analysis/README.md) | [Standard](./testing-types/en/performance-result-analysis/Standard-version/PerformanceResultAnalyzerPrompt.md) |
| 52 | Performance Bottleneck Analyzer | 性能瓶颈分析器 | 性能测试 | [performance-bottleneck-analysis](./testing-types/en/performance-bottleneck-analysis/README.md) | [Standard](./testing-types/en/performance-bottleneck-analysis/Standard-version/PerformanceBottleneckAnalyzerPrompt.md) |
| 53 | NeoLoad Script Assistant | NeoLoad 脚本助手 | 性能测试 | [neoload-script-assistance](./testing-types/en/neoload-script-assistance/README.md) | [Standard](./testing-types/en/neoload-script-assistance/Standard-version/NeoLoadScriptAssistantPrompt.md) |
| 54 | JMeter Script Assistant | JMeter 脚本助手 | 性能测试 | [performance-test-jmeter](./testing-types/en/performance-test-jmeter/README.md) | [Standard](./testing-types/en/performance-test-jmeter/Standard-version/PerformanceTestJMeterPrompt.md) |
| 55 | Gatling Script Assistant | Gatling 脚本助手 | 性能测试 | [performance-test-gatling](./testing-types/en/performance-test-gatling/README.md) | [Standard](./testing-types/en/performance-test-gatling/Standard-version/PerformanceTestGatlingPrompt.md) |
| 59 | Database Performance Analyzer | 数据库性能分析器 | 数据库测试 | [database-performance-analysis](./testing-types/en/database-performance-analysis/README.md) | [Standard](./testing-types/en/database-performance-analysis/Standard-version/DatabasePerformanceAnalyzerPrompt.md) |
| 85 | Availability Requirement Analyzer | 可用性需求分析器 | 非功能测试 | [availability-requirement-analysis](./testing-types/en/availability-requirement-analysis/README.md) | [Standard](./testing-types/en/availability-requirement-analysis/Standard-version/AvailabilityRequirementAnalyzerPrompt.md) |
| 86 | Reliability Requirement Analyzer | 可靠性需求分析器 | 非功能测试 | [reliability-requirement-analysis](./testing-types/en/reliability-requirement-analysis/README.md) | [Standard](./testing-types/en/reliability-requirement-analysis/Standard-version/ReliabilityRequirementAnalyzerPrompt.md) |
| 87 | Scalability Analyzer | 可扩展性分析器 | 非功能测试 | [scalability-analysis](./testing-types/en/scalability-analysis/README.md) | [Standard](./testing-types/en/scalability-analysis/Standard-version/ScalabilityAnalyzerPrompt.md) |
| 115 | Timeout Test Designer | 超时测试设计器 | API 测试 | [timeout-test-design](./testing-types/en/timeout-test-design/README.md) | [Standard](./testing-types/en/timeout-test-design/Standard-version/TimeoutTestDesignerPrompt.md) |
| 131 | Service Degradation Test Designer | 服务降级测试设计器 | 韧性测试 | [service-degradation-test-design](./testing-types/en/service-degradation-test-design/README.md) | [Standard](./testing-types/en/service-degradation-test-design/Standard-version/ServiceDegradationTestDesignerPrompt.md) |
| 132 | Circuit Breaker Test Designer | 熔断测试设计器 | 韧性测试 | [circuit-breaker-test-design](./testing-types/en/circuit-breaker-test-design/README.md) | [Standard](./testing-types/en/circuit-breaker-test-design/Standard-version/CircuitBreakerTestDesignerPrompt.md) |
| 133 | Recovery Test Designer | 故障恢复测试设计器 | 韧性测试 | [recovery-test-design](./testing-types/en/recovery-test-design/README.md) | [Standard](./testing-types/en/recovery-test-design/Standard-version/RecoveryTestDesignerPrompt.md) |
| 134 | Chaos Test Designer | Chaos 测试设计器 | 混沌测试 | [chaos-test-design](./testing-types/en/chaos-test-design/README.md) | [Standard](./testing-types/en/chaos-test-design/Standard-version/ChaosTestDesignerPrompt.md) |
| 135 | Disaster Recovery Test Designer | 容灾测试设计器 | 容灾测试 | [disaster-recovery-test-design](./testing-types/en/disaster-recovery-test-design/README.md) | [Standard](./testing-types/en/disaster-recovery-test-design/Standard-version/DisasterRecoveryTestDesignerPrompt.md) |
| 136 | Failover Test Designer | Failover 测试设计器 | 容灾测试 | [failover-test-design](./testing-types/en/failover-test-design/README.md) | [Standard](./testing-types/en/failover-test-design/Standard-version/FailoverTestDesignerPrompt.md) |
| 137 | Performance Baseline Analyzer | 性能基线分析器 | 性能测试 | [performance-baseline-analysis](./testing-types/en/performance-baseline-analysis/README.md) | [Standard](./testing-types/en/performance-baseline-analysis/Standard-version/PerformanceBaselineAnalyzerPrompt.md) |
| 138 | Performance Regression Analyzer | 性能回归分析器 | 性能测试 | [performance-regression-analysis](./testing-types/en/performance-regression-analysis/README.md) | [Standard](./testing-types/en/performance-regression-analysis/Standard-version/PerformanceRegressionAnalyzerPrompt.md) |
| 139 | Capacity Planning Analyzer | 容量规划分析器 | 性能测试 | [capacity-planning-analysis](./testing-types/en/capacity-planning-analysis/README.md) | [Standard](./testing-types/en/capacity-planning-analysis/Standard-version/CapacityPlanningAnalyzerPrompt.md) |
| 140 | Stress Test Designer | 压力测试设计器 | 性能测试 | [stress-test-design](./testing-types/en/stress-test-design/README.md) | [Standard](./testing-types/en/stress-test-design/Standard-version/StressTestDesignerPrompt.md) |
| 141 | Spike Test Designer | 峰值测试设计器 | 性能测试 | [spike-test-design](./testing-types/en/spike-test-design/README.md) | [Standard](./testing-types/en/spike-test-design/Standard-version/SpikeTestDesignerPrompt.md) |
| 142 | Soak Test Designer | 稳定性测试设计器 | 性能测试 | [soak-test-design](./testing-types/en/soak-test-design/README.md) | [Standard](./testing-types/en/soak-test-design/Standard-version/SoakTestDesignerPrompt.md) |
| 143 | Concurrency Test Designer | 并发测试设计器 | 性能测试 | [concurrency-test-design](./testing-types/en/concurrency-test-design/README.md) | [Standard](./testing-types/en/concurrency-test-design/Standard-version/ConcurrencyTestDesignerPrompt.md) |
| 144 | Performance Trend Analyzer | 性能趋势分析器 | 性能测试 | [performance-trend-analysis](./testing-types/en/performance-trend-analysis/README.md) | [Standard](./testing-types/en/performance-trend-analysis/Standard-version/PerformanceTrendAnalyzerPrompt.md) |
| 145 | Nginx Performance Analyzer | Nginx 性能分析器 | 性能诊断 | [nginx-performance-analysis](./testing-types/en/nginx-performance-analysis/README.md) | [Standard](./testing-types/en/nginx-performance-analysis/Standard-version/NginxPerformanceAnalyzerPrompt.md) |
| 146 | JVM Performance Analyzer | JVM 性能分析器 | 性能诊断 | [jvm-performance-analysis](./testing-types/en/jvm-performance-analysis/README.md) | [Standard](./testing-types/en/jvm-performance-analysis/Standard-version/JVMPerformanceAnalyzerPrompt.md) |
| 147 | Kubernetes Performance Analyzer | Kubernetes 性能分析器 | 性能诊断 | [kubernetes-performance-analysis](./testing-types/en/kubernetes-performance-analysis/README.md) | [Standard](./testing-types/en/kubernetes-performance-analysis/Standard-version/KubernetesPerformanceAnalyzerPrompt.md) |
| 148 | Network Latency Analyzer | 网络延迟分析器 | 性能诊断 | [network-latency-analysis](./testing-types/en/network-latency-analysis/README.md) | [Standard](./testing-types/en/network-latency-analysis/Standard-version/NetworkLatencyAnalyzerPrompt.md) |
| 149 | Slow Query Analyzer | 数据库慢查询分析器 | 性能诊断 | [slow-query-analysis](./testing-types/en/slow-query-analysis/README.md) | [Standard](./testing-types/en/slow-query-analysis/Standard-version/SlowQueryAnalyzerPrompt.md) |
| 150 | Connection Pool Analyzer | 连接池分析器 | 性能诊断 | [connection-pool-analysis](./testing-types/en/connection-pool-analysis/README.md) | [Standard](./testing-types/en/connection-pool-analysis/Standard-version/ConnectionPoolAnalyzerPrompt.md) |
| 179 | SLI/SLO Analyzer | SLI/SLO 分析器 | 可观测性 | [sli-slo-analysis](./testing-types/en/sli-slo-analysis/README.md) | [Standard](./testing-types/en/sli-slo-analysis/Standard-version/SLISLOAnalyzerPrompt.md) |

## 6. Security, Privacy, And Accessibility

11 capabilities.

| # | English name | 中文名称 | Original type | Module | Standard Prompt |
| ---: | --- | --- | --- | --- | --- |
| 91 | Accessibility Testing Assistant | 可访问性测试助手 | Accessibility | [accessibility-testing](./testing-types/en/accessibility-testing/README.md) | [Standard](./testing-types/en/accessibility-testing/Standard-version/AccessibilityTestingPrompt.md) |
| 92 | WCAG Compliance Analyzer | WCAG 合规分析器 | Accessibility | [wcag-compliance-analysis](./testing-types/en/wcag-compliance-analysis/README.md) | [Standard](./testing-types/en/wcag-compliance-analysis/Standard-version/WCAGComplianceAnalyzerPrompt.md) |
| 96 | Security Test Scenario Generator | 安全测试场景生成器 | 安全测试 | [security-test-scenario](./testing-types/en/security-test-scenario/README.md) | [Standard](./testing-types/en/security-test-scenario/Standard-version/SecurityTestScenarioGeneratorPrompt.md) |
| 97 | OWASP Risk Analyzer | OWASP 风险分析器 | 安全测试 | [owasp-risk-analysis](./testing-types/en/owasp-risk-analysis/README.md) | [Standard](./testing-types/en/owasp-risk-analysis/Standard-version/OWASPRiskAnalyzerPrompt.md) |
| 98 | Authorization Test Designer | 权限测试设计器 | 安全测试 | [authorization-test-design](./testing-types/en/authorization-test-design/README.md) | [Standard](./testing-types/en/authorization-test-design/Standard-version/AuthorizationTestDesignerPrompt.md) |
| 99 | Authentication Test Designer | 身份认证测试设计器 | 安全测试 | [authentication-test-design](./testing-types/en/authentication-test-design/README.md) | [Standard](./testing-types/en/authentication-test-design/Standard-version/AuthenticationTestDesignerPrompt.md) |
| 100 | Input Validation Test Generator | 输入校验测试生成器 | 安全测试 | [input-validation-test](./testing-types/en/input-validation-test/README.md) | [Standard](./testing-types/en/input-validation-test/Standard-version/InputValidationTestGeneratorPrompt.md) |
| 101 | API Security Test Designer | API 安全测试设计器 | 安全测试 | [api-security-test-design](./testing-types/en/api-security-test-design/README.md) | [Standard](./testing-types/en/api-security-test-design/Standard-version/APISecurityTestDesignerPrompt.md) |
| 102 | Data Privacy Test Analyzer | 数据隐私测试分析器 | 安全测试 | [data-privacy-analysis](./testing-types/en/data-privacy-analysis/README.md) | [Standard](./testing-types/en/data-privacy-analysis/Standard-version/DataPrivacyTestAnalyzerPrompt.md) |
| 103 | Sensitive Data Exposure Analyzer | 敏感数据泄露分析器 | 安全测试 | [sensitive-data-exposure-analysis](./testing-types/en/sensitive-data-exposure-analysis/README.md) | [Standard](./testing-types/en/sensitive-data-exposure-analysis/Standard-version/SensitiveDataExposureAnalyzerPrompt.md) |
| 185 | Data Masking Analyzer | 数据脱敏分析器 | 测试数据 | [data-masking-analysis](./testing-types/en/data-masking-analysis/README.md) | [Standard](./testing-types/en/data-masking-analysis/Standard-version/DataMaskingAnalyzerPrompt.md) |

## 7. Data, Database, And Test Environment

17 capabilities.

| # | English name | 中文名称 | Original type | Module | Standard Prompt |
| ---: | --- | --- | --- | --- | --- |
| 31 | Test Data Generator | 测试数据生成器 | 测试数据 | [test-data-generation](./testing-types/en/test-data-generation/README.md) | [Standard](./testing-types/en/test-data-generation/Standard-version/TestDataGeneratorPrompt.md) |
| 32 | Boundary Data Generator | 边界测试数据生成器 | 测试数据 | [boundary-data-generation](./testing-types/en/boundary-data-generation/README.md) | [Standard](./testing-types/en/boundary-data-generation/Standard-version/BoundaryDataGeneratorPrompt.md) |
| 33 | SQL Test Data Generator | SQL 测试数据生成器 | 测试数据 | [database-test-data-analysis](./testing-types/en/database-test-data-analysis/README.md) | [Standard](./testing-types/en/database-test-data-analysis/Standard-version/DatabaseTestDataAnalyzerPrompt.md) |
| 35 | WireMock Generator | WireMock 配置生成器 | Mock 测试 | [wiremock-generation](./testing-types/en/wiremock-generation/README.md) | [Standard](./testing-types/en/wiremock-generation/Standard-version/WireMockGeneratorPrompt.md) |
| 36 | Fault Simulation Designer | 故障模拟设计器 | Mock 测试 | [fault-simulation-design](./testing-types/en/fault-simulation-design/README.md) | [Standard](./testing-types/en/fault-simulation-design/Standard-version/FaultSimulationDesignerPrompt.md) |
| 56 | SQL Generator | SQL 生成器 | 数据库测试 | [sql-generation](./testing-types/en/sql-generation/README.md) | [Standard](./testing-types/en/sql-generation/Standard-version/SQLGeneratorPrompt.md) |
| 57 | Database Validation Analyzer | 数据库校验分析器 | 数据库测试 | [database-validation-analysis](./testing-types/en/database-validation-analysis/README.md) | [Standard](./testing-types/en/database-validation-analysis/Standard-version/DatabaseValidationAnalyzerPrompt.md) |
| 58 | Data Consistency Analyzer | 数据一致性分析器 | 数据库测试 | [data-consistency-analysis](./testing-types/en/data-consistency-analysis/README.md) | [Standard](./testing-types/en/data-consistency-analysis/Standard-version/DataConsistencyAnalyzerPrompt.md) |
| 61 | Docker Build Analyzer | Docker 构建问题分析器 | DevOps | [docker-build-analysis](./testing-types/en/docker-build-analysis/README.md) | [Standard](./testing-types/en/docker-build-analysis/Standard-version/DockerBuildAnalyzerPrompt.md) |
| 62 | Kubernetes Issue Analyzer | Kubernetes 问题分析器 | DevOps | [kubernetes-issue-analysis](./testing-types/en/kubernetes-issue-analysis/README.md) | [Standard](./testing-types/en/kubernetes-issue-analysis/Standard-version/KubernetesIssueAnalyzerPrompt.md) |
| 63 | Environment Issue Analyzer | 环境问题分析器 | 环境分析 | [environment-issue-analysis](./testing-types/en/environment-issue-analysis/README.md) | [Standard](./testing-types/en/environment-issue-analysis/Standard-version/EnvironmentIssueAnalyzerPrompt.md) |
| 181 | Test Environment Health Checker | 测试环境健康检查器 | 测试环境 | [test-environment-health](./testing-types/en/test-environment-health/README.md) | [Standard](./testing-types/en/test-environment-health/Standard-version/TestEnvironmentHealthCheckerPrompt.md) |
| 182 | Environment Drift Analyzer | 环境差异分析器 | 测试环境 | [test-environment-drift-analysis](./testing-types/en/test-environment-drift-analysis/README.md) | [Standard](./testing-types/en/test-environment-drift-analysis/Standard-version/EnvironmentDriftAnalyzerPrompt.md) |
| 183 | Configuration Diff Analyzer | 配置差异分析器 | 测试环境 | [configuration-diff-analysis](./testing-types/en/configuration-diff-analysis/README.md) | [Standard](./testing-types/en/configuration-diff-analysis/Standard-version/ConfigurationDiffAnalyzerPrompt.md) |
| 184 | Test Data Cleanup Assistant | 测试数据清理助手 | 测试数据 | [test-data-cleanup](./testing-types/en/test-data-cleanup/README.md) | [Standard](./testing-types/en/test-data-cleanup/Standard-version/TestDataCleanupAssistantPrompt.md) |
| 186 | Test Data Dependency Analyzer | 测试数据依赖分析器 | 测试数据 | [test-data-dependency-analysis](./testing-types/en/test-data-dependency-analysis/README.md) | [Standard](./testing-types/en/test-data-dependency-analysis/Standard-version/TestDataDependencyAnalyzerPrompt.md) |
| 187 | Test Data Pollution Analyzer | 测试数据污染分析器 | 测试数据 | [test-data-pollution-analysis](./testing-types/en/test-data-pollution-analysis/README.md) | [Standard](./testing-types/en/test-data-pollution-analysis/Standard-version/TestDataPollutionAnalyzerPrompt.md) |

## 8. Defects, Quality, And Test Governance

24 capabilities.

| # | English name | 中文名称 | Original type | Module | Standard Prompt |
| ---: | --- | --- | --- | --- | --- |
| 4 | Quality Risk Analyzer | 质量风险分析器 | 风险分析 | [quality-risk-analysis](./testing-types/en/quality-risk-analysis/README.md) | [Standard](./testing-types/en/quality-risk-analysis/Standard-version/QualityRiskAnalyzerPrompt.md) |
| 37 | Bug Report Generator | 缺陷报告生成器 | 缺陷管理 | [bug-reporting](./testing-types/en/bug-reporting/README.md) | [Standard](./testing-types/en/bug-reporting/Standard-version/BugReportingPrompt.md) |
| 38 | Bug Analyzer | 缺陷分析器 | 缺陷分析 | [bug-analysis](./testing-types/en/bug-analysis/README.md) | [Standard](./testing-types/en/bug-analysis/Standard-version/BugAnalyzerPrompt.md) |
| 39 | Bug Triage Assistant | 缺陷分诊助手 | 缺陷管理 | [bug-triage](./testing-types/en/bug-triage/README.md) | [Standard](./testing-types/en/bug-triage/Standard-version/BugTriageAssistantPrompt.md) |
| 40 | Root Cause Analyzer | 根因分析器 | RCA | [root-cause-analysis](./testing-types/en/root-cause-analysis/README.md) | [Standard](./testing-types/en/root-cause-analysis/Standard-version/RootCauseAnalyzerPrompt.md) |
| 41 | Log Analyzer | 日志分析器 | 故障分析 | [log-analysis](./testing-types/en/log-analysis/README.md) | [Standard](./testing-types/en/log-analysis/Standard-version/LogAnalyzerPrompt.md) |
| 42 | Stack Trace Analyzer | 堆栈异常分析器 | 故障分析 | [stack-trace-analysis](./testing-types/en/stack-trace-analysis/README.md) | [Standard](./testing-types/en/stack-trace-analysis/Standard-version/StackTraceAnalyzerPrompt.md) |
| 43 | Change Impact Analyzer | 变更影响分析器 | 变更分析 | [change-impact-analysis](./testing-types/en/change-impact-analysis/README.md) | [Standard](./testing-types/en/change-impact-analysis/Standard-version/ChangeImpactAnalyzerPrompt.md) |
| 44 | PR Risk Analyzer | PR 风险分析器 | 变更分析 | [pr-risk-analysis](./testing-types/en/pr-risk-analysis/README.md) | [Standard](./testing-types/en/pr-risk-analysis/Standard-version/PRRiskAnalyzerPrompt.md) |
| 45 | Regression Scope Analyzer | 回归范围分析器 | 回归测试 | [regression-scope-analysis](./testing-types/en/regression-scope-analysis/README.md) | [Standard](./testing-types/en/regression-scope-analysis/Standard-version/RegressionScopeAnalyzerPrompt.md) |
| 46 | Regression Test Selector | 回归测试选择器 | 回归测试 | [regression-test-selection](./testing-types/en/regression-test-selection/README.md) | [Standard](./testing-types/en/regression-test-selection/Standard-version/RegressionTestSelectorPrompt.md) |
| 68 | Sprint Quality Analyzer | Sprint 质量分析器 | 敏捷测试 | [sprint-quality-analysis](./testing-types/en/sprint-quality-analysis/README.md) | [Standard](./testing-types/en/sprint-quality-analysis/Standard-version/SprintQualityAnalyzerPrompt.md) |
| 72 | Test Report Generator | 测试报告生成器 | 测试报告 | [test-reporting](./testing-types/en/test-reporting/README.md) | [Standard](./testing-types/en/test-reporting/Standard-version/TestReportingPrompt.md) |
| 73 | Quality Metrics Analyzer | 质量指标分析器 | 质量管理 | [quality-metrics-analysis](./testing-types/en/quality-metrics-analysis/README.md) | [Standard](./testing-types/en/quality-metrics-analysis/Standard-version/QualityMetricsAnalyzerPrompt.md) |
| 74 | Quality Dashboard Analyzer | 质量仪表盘分析器 | 质量管理 | [quality-dashboard-analysis](./testing-types/en/quality-dashboard-analysis/README.md) | [Standard](./testing-types/en/quality-dashboard-analysis/Standard-version/QualityDashboardAnalyzerPrompt.md) |
| 75 | Quality Trend Analyzer | 质量趋势分析器 | 质量管理 | [quality-trend-analysis](./testing-types/en/quality-trend-analysis/README.md) | [Standard](./testing-types/en/quality-trend-analysis/Standard-version/QualityTrendAnalyzerPrompt.md) |
| 161 | Test Coverage Gap Analyzer | 测试覆盖缺口分析器 | 测试治理 | [test-coverage-gap-analysis](./testing-types/en/test-coverage-gap-analysis/README.md) | [Standard](./testing-types/en/test-coverage-gap-analysis/Standard-version/TestCoverageGapAnalyzerPrompt.md) |
| 163 | Test Asset Health Analyzer | 测试资产健康分析器 | 测试治理 | [test-asset-health-analysis](./testing-types/en/test-asset-health-analysis/README.md) | [Standard](./testing-types/en/test-asset-health-analysis/Standard-version/TestAssetHealthAnalyzerPrompt.md) |
| 164 | Defect Leakage Analyzer | 缺陷逃逸分析器 | 质量管理 | [defect-leakage-analysis](./testing-types/en/defect-leakage-analysis/README.md) | [Standard](./testing-types/en/defect-leakage-analysis/Standard-version/DefectLeakageAnalyzerPrompt.md) |
| 165 | Defect Trend Analyzer | 缺陷趋势分析器 | 质量管理 | [defect-trend-analysis](./testing-types/en/defect-trend-analysis/README.md) | [Standard](./testing-types/en/defect-trend-analysis/Standard-version/DefectTrendAnalyzerPrompt.md) |
| 166 | Defect Clustering Analyzer | 缺陷聚类分析器 | 质量管理 | [defect-clustering-analysis](./testing-types/en/defect-clustering-analysis/README.md) | [Standard](./testing-types/en/defect-clustering-analysis/Standard-version/DefectClusteringAnalyzerPrompt.md) |
| 167 | Defect Prediction Analyzer | 缺陷预测分析器 | 质量管理 | [defect-prediction-analysis](./testing-types/en/defect-prediction-analysis/README.md) | [Standard](./testing-types/en/defect-prediction-analysis/Standard-version/DefectPredictionAnalyzerPrompt.md) |
| 168 | Test Effectiveness Analyzer | 测试有效性分析器 | 质量管理 | [test-effectiveness-analysis](./testing-types/en/test-effectiveness-analysis/README.md) | [Standard](./testing-types/en/test-effectiveness-analysis/Standard-version/TestEffectivenessAnalyzerPrompt.md) |
| 169 | Quality Gate Analyzer | 质量门禁分析器 | 质量管理 | [quality-gate-analysis](./testing-types/en/quality-gate-analysis/README.md) | [Standard](./testing-types/en/quality-gate-analysis/Standard-version/QualityGateAnalyzerPrompt.md) |

## 9. Release, Production, And Observability

14 capabilities.

| # | English name | 中文名称 | Original type | Module | Standard Prompt |
| ---: | --- | --- | --- | --- | --- |
| 64 | Release Readiness Analyzer | 发布就绪分析器 | 发布管理 | [release-readiness-analysis](./testing-types/en/release-readiness-analysis/README.md) | [Standard](./testing-types/en/release-readiness-analysis/Standard-version/ReleaseReadinessAnalyzerPrompt.md) |
| 65 | Go/No-Go Risk Analyzer | Go/No-Go 风险分析器 | 发布管理 | [go-no-go-risk-analysis](./testing-types/en/go-no-go-risk-analysis/README.md) | [Standard](./testing-types/en/go-no-go-risk-analysis/Standard-version/GoNoGoRiskAnalyzerPrompt.md) |
| 66 | Production Verification Generator | 生产验证生成器 | 发布验证 | [production-verification-generation](./testing-types/en/production-verification-generation/README.md) | [Standard](./testing-types/en/production-verification-generation/Standard-version/ProductionVerificationGeneratorPrompt.md) |
| 67 | Smoke Test Generator | 冒烟测试生成器 | 发布验证 | [smoke-test-generation](./testing-types/en/smoke-test-generation/README.md) | [Standard](./testing-types/en/smoke-test-generation/Standard-version/SmokeTestGeneratorPrompt.md) |
| 170 | Release Risk Scorer | 发布风险评分器 | 发布管理 | [release-risk-scoring](./testing-types/en/release-risk-scoring/README.md) | [Standard](./testing-types/en/release-risk-scoring/Standard-version/ReleaseRiskScorerPrompt.md) |
| 171 | Hotfix Risk Analyzer | Hotfix 风险分析器 | 发布管理 | [hotfix-risk-analysis](./testing-types/en/hotfix-risk-analysis/README.md) | [Standard](./testing-types/en/hotfix-risk-analysis/Standard-version/HotfixRiskAnalyzerPrompt.md) |
| 172 | Rollback Verification Generator | 回滚验证生成器 | 发布管理 | [rollback-verification](./testing-types/en/rollback-verification/README.md) | [Standard](./testing-types/en/rollback-verification/Standard-version/RollbackVerificationGeneratorPrompt.md) |
| 173 | Release Change Summary Generator | 发布变更摘要生成器 | 发布管理 | [release-change-summary](./testing-types/en/release-change-summary/README.md) | [Standard](./testing-types/en/release-change-summary/Standard-version/ReleaseChangeSummaryGeneratorPrompt.md) |
| 174 | Production Incident Analyzer | 生产事故分析器 | 生产质量 | [production-incident-analysis](./testing-types/en/production-incident-analysis/README.md) | [Standard](./testing-types/en/production-incident-analysis/Standard-version/ProductionIncidentAnalyzerPrompt.md) |
| 175 | Production Log Correlator | 生产日志关联分析器 | 可观测性 | [production-log-correlation](./testing-types/en/production-log-correlation/README.md) | [Standard](./testing-types/en/production-log-correlation/Standard-version/ProductionLogCorrelatorPrompt.md) |
| 176 | Metrics Anomaly Analyzer | 指标异常分析器 | 可观测性 | [metrics-anomaly-analysis](./testing-types/en/metrics-anomaly-analysis/README.md) | [Standard](./testing-types/en/metrics-anomaly-analysis/Standard-version/MetricsAnomalyAnalyzerPrompt.md) |
| 177 | Distributed Trace Analyzer | Trace 分析器 | 可观测性 | [distributed-trace-analysis](./testing-types/en/distributed-trace-analysis/README.md) | [Standard](./testing-types/en/distributed-trace-analysis/Standard-version/DistributedTraceAnalyzerPrompt.md) |
| 178 | Alert Analyzer | 告警分析器 | 可观测性 | [alert-analysis](./testing-types/en/alert-analysis/README.md) | [Standard](./testing-types/en/alert-analysis/Standard-version/AlertAnalyzerPrompt.md) |
| 180 | Production Issue Reproducer | 线上问题测试复现助手 | 生产质量 | [production-issue-reproduction](./testing-types/en/production-issue-reproduction/README.md) | [Standard](./testing-types/en/production-issue-reproduction/Standard-version/ProductionIssueReproducerPrompt.md) |

## 10. AI And LLM Testing

13 capabilities.

| # | English name | 中文名称 | Original type | Module | Standard Prompt |
| ---: | --- | --- | --- | --- | --- |
| 188 | AI Feature Test Designer | AI 功能测试设计器 | AI 测试 | [ai-feature-test-design](./testing-types/en/ai-feature-test-design/README.md) | [Standard](./testing-types/en/ai-feature-test-design/Standard-version/AIFeatureTestDesignerPrompt.md) |
| 189 | LLM Test Case Generator | LLM 测试用例生成器 | AI 测试 | [llm-test-case-generation](./testing-types/en/llm-test-case-generation/README.md) | [Standard](./testing-types/en/llm-test-case-generation/Standard-version/LLMTestCaseGeneratorPrompt.md) |
| 190 | Prompt Test Analyzer | Prompt 测试分析器 | AI 测试 | [prompt-test-analysis](./testing-types/en/prompt-test-analysis/README.md) | [Standard](./testing-types/en/prompt-test-analysis/Standard-version/PromptTestAnalyzerPrompt.md) |
| 191 | Prompt Regression Tester | Prompt 回归测试器 | AI 测试 | [prompt-regression-testing](./testing-types/en/prompt-regression-testing/README.md) | [Standard](./testing-types/en/prompt-regression-testing/Standard-version/PromptRegressionTesterPrompt.md) |
| 192 | LLM Output Quality Evaluator | LLM 输出质量评估器 | AI 测试 | [llm-output-quality-evaluation](./testing-types/en/llm-output-quality-evaluation/README.md) | [Standard](./testing-types/en/llm-output-quality-evaluation/Standard-version/LLMOutputQualityEvaluatorPrompt.md) |
| 193 | Hallucination Analyzer | 幻觉检测分析器 | AI 测试 | [hallucination-analysis](./testing-types/en/hallucination-analysis/README.md) | [Standard](./testing-types/en/hallucination-analysis/Standard-version/HallucinationAnalyzerPrompt.md) |
| 194 | AI Safety Test Analyzer | AI 安全测试分析器 | AI 测试 | [ai-safety-test-analysis](./testing-types/en/ai-safety-test-analysis/README.md) | [Standard](./testing-types/en/ai-safety-test-analysis/Standard-version/AISafetyTestAnalyzerPrompt.md) |
| 195 | AI Red Team Test Designer | AI Red Team 测试设计器 | AI 测试 | [ai-red-team-test-design](./testing-types/en/ai-red-team-test-design/README.md) | [Standard](./testing-types/en/ai-red-team-test-design/Standard-version/AIRedTeamTestDesignerPrompt.md) |
| 196 | AI Evaluation Designer | AI Eval 设计器 | AI 测试 | [ai-evaluation-design](./testing-types/en/ai-evaluation-design/README.md) | [Standard](./testing-types/en/ai-evaluation-design/Standard-version/AIEvaluationDesignerPrompt.md) |
| 197 | AI Model Regression Analyzer | AI 模型回归分析器 | AI 测试 | [ai-model-regression-analysis](./testing-types/en/ai-model-regression-analysis/README.md) | [Standard](./testing-types/en/ai-model-regression-analysis/Standard-version/AIModelRegressionAnalyzerPrompt.md) |
| 198 | Prompt Injection Test Designer | Prompt Injection 测试设计器 | AI 安全测试 | [prompt-injection-test-design](./testing-types/en/prompt-injection-test-design/README.md) | [Standard](./testing-types/en/prompt-injection-test-design/Standard-version/PromptInjectionTestDesignerPrompt.md) |
| 199 | AI Agent Test Designer | Agent 测试设计器 | AI 测试 | [ai-agent-test-design](./testing-types/en/ai-agent-test-design/README.md) | [Standard](./testing-types/en/ai-agent-test-design/Standard-version/AIAgentTestDesignerPrompt.md) |
| 200 | Agent Tool-Call Test Designer | Agent 工具调用测试器 | AI 测试 | [agent-tool-call-test-design](./testing-types/en/agent-tool-call-test-design/README.md) | [Standard](./testing-types/en/agent-tool-call-test-design/Standard-version/AgentToolCallTestDesignerPrompt.md) |

To organize multiple Prompts into a continuous activity, continue with [Testing Workflows](./Workflows/en/README.md).
