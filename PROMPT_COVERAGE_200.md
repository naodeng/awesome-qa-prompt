<div align="right"><strong>简体中文</strong> · <a href="./PROMPT_COVERAGE_200_EN.md">English</a></div>

# 200 项 QA Prompt 分类目录

本目录以 1–200 项能力清单为基准，按使用场景重新归入十个类别。每一项都链接到中文模块入口和可直接复制的 Standard Prompt；英文目录与本目录保持相同编号和模块映射。

> “覆盖”表示仓库中存在对应的中英文 Prompt Baseline，不表示已经对真实系统执行测试或得出验证结论。

[返回项目首页](./README.md) · [Testing Workflows](./Workflows/zh/README.md)

## 1. 需求、规划与测试策略

共 16 项。

| # | 中文名称 | English name | 原始类型 | 模块 | Standard Prompt |
| ---: | --- | --- | --- | --- | --- |
| 1 | 需求分析器 | Requirement Analyzer | 需求分析 | [requirements-analysis](./testing-types/zh/requirements-analysis/README.md) | [Standard](./testing-types/zh/requirements-analysis/Standard-version/RequirementsAnalysisPrompt.md) |
| 2 | 验收标准审查器 | Acceptance Criteria Reviewer | 需求分析 | [acceptance-criteria-reviewer](./testing-types/zh/acceptance-criteria-reviewer/README.md) | [Standard](./testing-types/zh/acceptance-criteria-reviewer/Standard-version/AcceptanceCriteriaReviewerPrompt.md) |
| 3 | 需求缺口分析器 | Requirement Gap Analyzer | 需求分析 | [requirement-gap-analyzer](./testing-types/zh/requirement-gap-analyzer/README.md) | [Standard](./testing-types/zh/requirement-gap-analyzer/Standard-version/RequirementGapAnalyzerPrompt.md) |
| 5 | 可测试性分析器 | Testability Analyzer | 需求分析 | [testability-analysis](./testing-types/zh/testability-analysis/README.md) | [Standard](./testing-types/zh/testability-analysis/Standard-version/TestabilityAnalyzerPrompt.md) |
| 6 | 测试策略生成器 | Test Strategy Generator | 测试策略 | [test-strategy](./testing-types/zh/test-strategy/README.md) | [Standard](./testing-types/zh/test-strategy/Standard-version/TestStrategyPrompt.md) |
| 7 | 测试计划生成器 | Test Plan Generator | 测试计划 | [test-plan-design](./testing-types/zh/test-plan-design/README.md) | [Standard](./testing-types/zh/test-plan-design/Standard-version/TestPlanDesignerPrompt.md) |
| 8 | 测试范围分析器 | Test Scope Analyzer | 测试策略 | [test-scope-analysis](./testing-types/zh/test-scope-analysis/README.md) | [Standard](./testing-types/zh/test-scope-analysis/Standard-version/TestScopeAnalyzerPrompt.md) |
| 69 | 需求梳理 QA 助手 | Refinement QA Assistant | 敏捷测试 | [refinement-qa-assistant](./testing-types/zh/refinement-qa-assistant/README.md) | [Standard](./testing-types/zh/refinement-qa-assistant/Standard-version/RefinementQAAssistantPrompt.md) |
| 70 | Sprint Planning QA 助手 | Sprint Planning QA Assistant | 敏捷测试 | [sprint-planning-qa](./testing-types/zh/sprint-planning-qa/README.md) | [Standard](./testing-types/zh/sprint-planning-qa/Standard-version/SprintPlanningQAAssistantPrompt.md) |
| 71 | Sprint 回顾分析器 | Retrospective Analyzer | 敏捷测试 | [retrospective-analysis](./testing-types/zh/retrospective-analysis/README.md) | [Standard](./testing-types/zh/retrospective-analysis/Standard-version/RetrospectiveAnalyzerPrompt.md) |
| 80 | 业务规则分析器 | Business Rule Analyzer | 需求分析 | [business-rule-analysis](./testing-types/zh/business-rule-analysis/README.md) | [Standard](./testing-types/zh/business-rule-analysis/Standard-version/BusinessRuleAnalyzerPrompt.md) |
| 81 | 业务流程分析器 | Business Flow Analyzer | 需求分析 | [business-flow-analysis](./testing-types/zh/business-flow-analysis/README.md) | [Standard](./testing-types/zh/business-flow-analysis/Standard-version/BusinessFlowAnalyzerPrompt.md) |
| 82 | 需求依赖分析器 | Requirement Dependency Analyzer | 需求分析 | [requirement-dependency-analysis](./testing-types/zh/requirement-dependency-analysis/README.md) | [Standard](./testing-types/zh/requirement-dependency-analysis/Standard-version/RequirementDependencyAnalyzerPrompt.md) |
| 83 | 需求冲突检测器 | Requirement Conflict Detector | 需求分析 | [requirement-conflict-analysis](./testing-types/zh/requirement-conflict-analysis/README.md) | [Standard](./testing-types/zh/requirement-conflict-analysis/Standard-version/RequirementConflictAnalyzerPrompt.md) |
| 84 | 非功能需求分析器 | NFR Analyzer | 非功能测试 | [nfr-analysis](./testing-types/zh/nfr-analysis/README.md) | [Standard](./testing-types/zh/nfr-analysis/Standard-version/NFRAnalyzerPrompt.md) |
| 162 | 需求测试追踪分析器 | Requirement Traceability Analyzer | 测试治理 | [requirement-traceability-analysis](./testing-types/zh/requirement-traceability-analysis/README.md) | [Standard](./testing-types/zh/requirement-traceability-analysis/Standard-version/RequirementTraceabilityAnalyzerPrompt.md) |

## 2. 测试分析与测试设计

共 22 项。

| # | 中文名称 | English name | 原始类型 | 模块 | Standard Prompt |
| ---: | --- | --- | --- | --- | --- |
| 9 | 测试场景设计器 | Test Scenario Designer | 测试设计 | [test-scenario-design](./testing-types/zh/test-scenario-design/README.md) | [Standard](./testing-types/zh/test-scenario-design/Standard-version/TestScenarioDesignerPrompt.md) |
| 10 | 测试用例生成器 | Test Case Generator | 测试设计 | [test-case-writing](./testing-types/zh/test-case-writing/README.md) | [Standard](./testing-types/zh/test-case-writing/Standard-version/TestCaseWritingPrompt.md) |
| 11 | 边界值分析器 | Boundary Value Analyzer | 测试设计 | [boundary-value-analysis](./testing-types/zh/boundary-value-analysis/README.md) | [Standard](./testing-types/zh/boundary-value-analysis/Standard-version/BoundaryValueAnalyzerPrompt.md) |
| 12 | 等价类分析器 | Equivalence Partition Analyzer | 测试设计 | [equivalence-partition-analysis](./testing-types/zh/equivalence-partition-analysis/README.md) | [Standard](./testing-types/zh/equivalence-partition-analysis/Standard-version/EquivalencePartitionAnalyzerPrompt.md) |
| 13 | 决策表生成器 | Decision Table Generator | 测试设计 | [decision-table-analysis](./testing-types/zh/decision-table-analysis/README.md) | [Standard](./testing-types/zh/decision-table-analysis/Standard-version/DecisionTableAnalyzerPrompt.md) |
| 14 | 状态转换分析器 | State Transition Analyzer | 测试设计 | [state-transition-analysis](./testing-types/zh/state-transition-analysis/README.md) | [Standard](./testing-types/zh/state-transition-analysis/Standard-version/StateTransitionAnalyzerPrompt.md) |
| 15 | Pairwise 组合测试生成器 | Pairwise Test Generator | 测试设计 | [pairwise-test-design](./testing-types/zh/pairwise-test-design/README.md) | [Standard](./testing-types/zh/pairwise-test-design/Standard-version/PairwiseTestGeneratorPrompt.md) |
| 20 | 端到端测试场景设计器 | E2E Scenario Designer | E2E 测试 | [functional-testing](./testing-types/zh/functional-testing/README.md) | [Standard](./testing-types/zh/functional-testing/Standard-version/FunctionalTestingPrompt.md) |
| 21 | UI 测试设计器 | UI Test Designer | UI 测试 | [ui-test-design](./testing-types/zh/ui-test-design/README.md) | [Standard](./testing-types/zh/ui-test-design/Standard-version/UITestDesignerPrompt.md) |
| 22 | 用户旅程分析器 | User Journey Analyzer | E2E 测试 | [user-journey-analysis](./testing-types/zh/user-journey-analysis/README.md) | [Standard](./testing-types/zh/user-journey-analysis/Standard-version/UserJourneyAnalyzerPrompt.md) |
| 76 | 探索式测试助手 | Exploratory Testing Assistant | 探索式测试 | [manual-testing](./testing-types/zh/manual-testing/README.md) | [Standard](./testing-types/zh/manual-testing/Standard-version/ManualTestingPrompt.md) |
| 77 | 探索式测试章程生成器 | Test Charter Generator | 探索式测试 | [test-charter-generation](./testing-types/zh/test-charter-generation/README.md) | [Standard](./testing-types/zh/test-charter-generation/Standard-version/TestCharterGeneratorPrompt.md) |
| 78 | 测试启发式分析器 | Testing Heuristics Analyzer | 测试设计 | [testing-heuristics-analysis](./testing-types/zh/testing-heuristics-analysis/README.md) | [Standard](./testing-types/zh/testing-heuristics-analysis/Standard-version/TestingHeuristicsAnalyzerPrompt.md) |
| 79 | 错误猜测分析器 | Error Guessing Analyzer | 测试设计 | [error-guessing-analysis](./testing-types/zh/error-guessing-analysis/README.md) | [Standard](./testing-types/zh/error-guessing-analysis/Standard-version/ErrorGuessingAnalyzerPrompt.md) |
| 88 | 兼容性测试设计器 | Compatibility Test Designer | 兼容性测试 | [compatibility-test-design](./testing-types/zh/compatibility-test-design/README.md) | [Standard](./testing-types/zh/compatibility-test-design/Standard-version/CompatibilityTestDesignerPrompt.md) |
| 89 | 浏览器兼容性分析器 | Browser Compatibility Analyzer | 兼容性测试 | [browser-compatibility-analysis](./testing-types/zh/browser-compatibility-analysis/README.md) | [Standard](./testing-types/zh/browser-compatibility-analysis/Standard-version/BrowserCompatibilityAnalyzerPrompt.md) |
| 90 | 移动端兼容性分析器 | Mobile Compatibility Analyzer | 兼容性测试 | [mobile-compatibility-analysis](./testing-types/zh/mobile-compatibility-analysis/README.md) | [Standard](./testing-types/zh/mobile-compatibility-analysis/Standard-version/MobileCompatibilityAnalyzerPrompt.md) |
| 93 | 多语言测试设计器 | Localization Test Designer | 国际化测试 | [localization-test-design](./testing-types/zh/localization-test-design/README.md) | [Standard](./testing-types/zh/localization-test-design/Standard-version/LocalizationTestDesignerPrompt.md) |
| 94 | 国际化问题分析器 | Internationalization Analyzer | 国际化测试 | [internationalization-analysis](./testing-types/zh/internationalization-analysis/README.md) | [Standard](./testing-types/zh/internationalization-analysis/Standard-version/InternationalizationAnalyzerPrompt.md) |
| 95 | 时区测试设计器 | Timezone Test Designer | 国际化测试 | [timezone-test-design](./testing-types/zh/timezone-test-design/README.md) | [Standard](./testing-types/zh/timezone-test-design/Standard-version/TimezoneTestDesignerPrompt.md) |
| 159 | 测试用例优化器 | Test Case Optimizer | 测试治理 | [test-case-optimization](./testing-types/zh/test-case-optimization/README.md) | [Standard](./testing-types/zh/test-case-optimization/Standard-version/TestCaseOptimizerPrompt.md) |
| 160 | 测试用例优先级分析器 | Test Case Prioritizer | 测试治理 | [test-case-prioritization](./testing-types/zh/test-case-prioritization/README.md) | [Standard](./testing-types/zh/test-case-prioritization/Standard-version/TestCasePrioritizerPrompt.md) |

## 3. API、契约、消息与集成

共 32 项。

| # | 中文名称 | English name | 原始类型 | 模块 | Standard Prompt |
| ---: | --- | --- | --- | --- | --- |
| 16 | API 测试设计器 | API Test Designer | API 测试 | [api-testing](./testing-types/zh/api-testing/README.md) | [Standard](./testing-types/zh/api-testing/Standard-version/APITestingPrompt.md) |
| 17 | API 负向测试生成器 | API Negative Test Generator | API 测试 | [api-negative-testing](./testing-types/zh/api-negative-testing/README.md) | [Standard](./testing-types/zh/api-negative-testing/Standard-version/APINegativeTestingPrompt.md) |
| 18 | API Schema 校验器 | API Schema Validator | API 测试 | [api-schema-validation](./testing-types/zh/api-schema-validation/README.md) | [Standard](./testing-types/zh/api-schema-validation/Standard-version/APISchemaValidationPrompt.md) |
| 19 | API 契约分析器 | API Contract Analyzer | API 测试 | [api-contract-analysis](./testing-types/zh/api-contract-analysis/README.md) | [Standard](./testing-types/zh/api-contract-analysis/Standard-version/APIContractAnalysisPrompt.md) |
| 28 | Pytest 测试生成器 | Pytest Test Generator | 自动化测试 | [api-test-pytest](./testing-types/zh/api-test-pytest/README.md) | [Standard](./testing-types/zh/api-test-pytest/Standard-version/APITestPytestPrompt.md) |
| 34 | Mock API 生成器 | Mock API Generator | Mock 测试 | [mock-api-generation](./testing-types/zh/mock-api-generation/README.md) | [Standard](./testing-types/zh/mock-api-generation/Standard-version/MockAPIGeneratorPrompt.md) |
| 104 | API 依赖分析器 | API Dependency Analyzer | API 测试 | [api-dependency-analysis](./testing-types/zh/api-dependency-analysis/README.md) | [Standard](./testing-types/zh/api-dependency-analysis/Standard-version/APIDependencyAnalysisPrompt.md) |
| 105 | API 调用链分析器 | API Call Chain Analyzer | API 测试 | [api-call-chain-analysis](./testing-types/zh/api-call-chain-analysis/README.md) | [Standard](./testing-types/zh/api-call-chain-analysis/Standard-version/APICallChainAnalysisPrompt.md) |
| 106 | API 回归影响分析器 | API Regression Impact Analyzer | API 测试 | [api-regression-impact](./testing-types/zh/api-regression-impact/README.md) | [Standard](./testing-types/zh/api-regression-impact/Standard-version/APIRegressionImpactPrompt.md) |
| 107 | API 兼容性分析器 | API Compatibility Analyzer | API 测试 | [api-compatibility-analysis](./testing-types/zh/api-compatibility-analysis/README.md) | [Standard](./testing-types/zh/api-compatibility-analysis/Standard-version/APICompatibilityAnalysisPrompt.md) |
| 108 | API 版本变更分析器 | API Version Change Analyzer | API 测试 | [api-version-change-analysis](./testing-types/zh/api-version-change-analysis/README.md) | [Standard](./testing-types/zh/api-version-change-analysis/Standard-version/APIVersionChangeAnalysisPrompt.md) |
| 109 | OpenAPI 规范分析器 | OpenAPI Specification Analyzer | API 测试 | [openapi-specification-analysis](./testing-types/zh/openapi-specification-analysis/README.md) | [Standard](./testing-types/zh/openapi-specification-analysis/Standard-version/OpenAPISpecificationAnalysisPrompt.md) |
| 110 | GraphQL 测试设计器 | GraphQL Test Designer | API 测试 | [graphql-test-design](./testing-types/zh/graphql-test-design/README.md) | [Standard](./testing-types/zh/graphql-test-design/Standard-version/GraphQLTestDesignerPrompt.md) |
| 111 | WebSocket 测试设计器 | WebSocket Test Designer | API 测试 | [websocket-test-design](./testing-types/zh/websocket-test-design/README.md) | [Standard](./testing-types/zh/websocket-test-design/Standard-version/WebSocketTestDesignerPrompt.md) |
| 112 | 幂等性测试设计器 | Idempotency Test Designer | API 测试 | [idempotency-test-design](./testing-types/zh/idempotency-test-design/README.md) | [Standard](./testing-types/zh/idempotency-test-design/Standard-version/IdempotencyTestDesignerPrompt.md) |
| 113 | 分页测试设计器 | Pagination Test Designer | API 测试 | [pagination-test-design](./testing-types/zh/pagination-test-design/README.md) | [Standard](./testing-types/zh/pagination-test-design/Standard-version/PaginationTestDesignerPrompt.md) |
| 114 | 限流测试设计器 | Rate Limit Test Designer | API 测试 | [rate-limit-test-design](./testing-types/zh/rate-limit-test-design/README.md) | [Standard](./testing-types/zh/rate-limit-test-design/Standard-version/RateLimitTestDesignerPrompt.md) |
| 116 | 重试机制测试设计器 | Retry Test Designer | API 测试 | [retry-mechanism-test-design](./testing-types/zh/retry-mechanism-test-design/README.md) | [Standard](./testing-types/zh/retry-mechanism-test-design/Standard-version/RetryMechanismTestDesignerPrompt.md) |
| 117 | 契约测试生成器 | Contract Test Generator | 契约测试 | [contract-test-generation](./testing-types/zh/contract-test-generation/README.md) | [Standard](./testing-types/zh/contract-test-generation/Standard-version/ContractTestGeneratorPrompt.md) |
| 118 | Consumer Contract 分析器 | Consumer Contract Analyzer | 契约测试 | [consumer-contract-analysis](./testing-types/zh/consumer-contract-analysis/README.md) | [Standard](./testing-types/zh/consumer-contract-analysis/Standard-version/ConsumerContractAnalyzerPrompt.md) |
| 119 | Provider Contract 分析器 | Provider Contract Analyzer | 契约测试 | [provider-contract-analysis](./testing-types/zh/provider-contract-analysis/README.md) | [Standard](./testing-types/zh/provider-contract-analysis/Standard-version/ProviderContractAnalyzerPrompt.md) |
| 120 | Kafka 测试设计器 | Kafka Test Designer | 消息测试 | [kafka-test-design](./testing-types/zh/kafka-test-design/README.md) | [Standard](./testing-types/zh/kafka-test-design/Standard-version/KafkaTestDesignerPrompt.md) |
| 121 | Kafka Event 生成器 | Kafka Event Generator | 消息测试 | [kafka-event-generation](./testing-types/zh/kafka-event-generation/README.md) | [Standard](./testing-types/zh/kafka-event-generation/Standard-version/KafkaEventGeneratorPrompt.md) |
| 122 | 消息一致性分析器 | Message Consistency Analyzer | 消息测试 | [message-consistency-analysis](./testing-types/zh/message-consistency-analysis/README.md) | [Standard](./testing-types/zh/message-consistency-analysis/Standard-version/MessageConsistencyAnalyzerPrompt.md) |
| 123 | 消息重复消费测试器 | Duplicate Message Test Designer | 消息测试 | [duplicate-message-testing](./testing-types/zh/duplicate-message-testing/README.md) | [Standard](./testing-types/zh/duplicate-message-testing/Standard-version/DuplicateMessageTestDesignerPrompt.md) |
| 124 | 消息顺序测试设计器 | Message Ordering Test Designer | 消息测试 | [message-ordering-test-design](./testing-types/zh/message-ordering-test-design/README.md) | [Standard](./testing-types/zh/message-ordering-test-design/Standard-version/MessageOrderingTestDesignerPrompt.md) |
| 125 | 消息丢失分析器 | Message Loss Analyzer | 消息测试 | [message-loss-analysis](./testing-types/zh/message-loss-analysis/README.md) | [Standard](./testing-types/zh/message-loss-analysis/Standard-version/MessageLossAnalyzerPrompt.md) |
| 126 | 异步流程测试设计器 | Async Flow Test Designer | 集成测试 | [async-flow-test-design](./testing-types/zh/async-flow-test-design/README.md) | [Standard](./testing-types/zh/async-flow-test-design/Standard-version/AsyncFlowTestDesignerPrompt.md) |
| 127 | 微服务依赖分析器 | Microservice Dependency Analyzer | 微服务测试 | [microservice-dependency-analysis](./testing-types/zh/microservice-dependency-analysis/README.md) | [Standard](./testing-types/zh/microservice-dependency-analysis/Standard-version/MicroserviceDependencyAnalysisPrompt.md) |
| 128 | 服务调用链分析器 | Service Call Chain Analyzer | 微服务测试 | [service-call-chain-analysis](./testing-types/zh/service-call-chain-analysis/README.md) | [Standard](./testing-types/zh/service-call-chain-analysis/Standard-version/ServiceCallChainAnalysisPrompt.md) |
| 129 | 分布式事务测试设计器 | Distributed Transaction Test Designer | 微服务测试 | [distributed-transaction-test-design](./testing-types/zh/distributed-transaction-test-design/README.md) | [Standard](./testing-types/zh/distributed-transaction-test-design/Standard-version/DistributedTransactionTestDesignerPrompt.md) |
| 130 | 最终一致性测试设计器 | Eventual Consistency Test Designer | 微服务测试 | [eventual-consistency-test-design](./testing-types/zh/eventual-consistency-test-design/README.md) | [Standard](./testing-types/zh/eventual-consistency-test-design/Standard-version/EventualConsistencyTestDesignerPrompt.md) |

## 4. 自动化与测试工程

共 16 项。

| # | 中文名称 | English name | 原始类型 | 模块 | Standard Prompt |
| ---: | --- | --- | --- | --- | --- |
| 23 | 自动化候选用例分析器 | Automation Candidate Analyzer | 自动化测试 | [automation-candidate-analysis](./testing-types/zh/automation-candidate-analysis/README.md) | [Standard](./testing-types/zh/automation-candidate-analysis/Standard-version/AutomationCandidateAnalyzerPrompt.md) |
| 24 | 自动化测试生成器 | Automation Test Generator | 自动化测试 | [automation-testing](./testing-types/zh/automation-testing/README.md) | [Standard](./testing-types/zh/automation-testing/Standard-version/AutomationTestingPrompt.md) |
| 25 | Playwright 测试生成器 | Playwright Test Generator | 自动化测试 | [ui-test-playwright](./testing-types/zh/ui-test-playwright/README.md) | [Standard](./testing-types/zh/ui-test-playwright/Standard-version/UITestPlaywrightPrompt.md) |
| 26 | Cypress 测试生成器 | Cypress Test Generator | 自动化测试 | [ui-test-cypress](./testing-types/zh/ui-test-cypress/README.md) | [Standard](./testing-types/zh/ui-test-cypress/Standard-version/UITestCypressPrompt.md) |
| 27 | Selenium 测试生成器 | Selenium Test Generator | 自动化测试 | [ui-test-selenium](./testing-types/zh/ui-test-selenium/README.md) | [Standard](./testing-types/zh/ui-test-selenium/Standard-version/UITestSeleniumPrompt.md) |
| 29 | 自动化代码审查器 | Automation Code Reviewer | 自动化测试 | [code-review](./testing-types/zh/code-review/README.md) | [Standard](./testing-types/zh/code-review/Standard-version/CodeReviewPrompt.md) |
| 30 | 不稳定测试分析器 | Flaky Test Analyzer | 自动化测试 | [flaky-test-analysis](./testing-types/zh/flaky-test-analysis/README.md) | [Standard](./testing-types/zh/flaky-test-analysis/Standard-version/FlakyTestAnalyzerPrompt.md) |
| 60 | CI/CD 失败分析器 | CI/CD Failure Analyzer | DevOps | [cicd-failure-analysis](./testing-types/zh/cicd-failure-analysis/README.md) | [Standard](./testing-types/zh/cicd-failure-analysis/Standard-version/CICDFailureAnalyzerPrompt.md) |
| 151 | 测试失败分类器 | Test Failure Classifier | 自动化测试 | [test-failure-classification](./testing-types/zh/test-failure-classification/README.md) | [Standard](./testing-types/zh/test-failure-classification/Standard-version/TestFailureClassifierPrompt.md) |
| 152 | 自动化失败根因分析器 | Automation Failure RCA Analyzer | 自动化测试 | [automation-failure-rca](./testing-types/zh/automation-failure-rca/README.md) | [Standard](./testing-types/zh/automation-failure-rca/Standard-version/AutomationFailureRCAAnalyzerPrompt.md) |
| 153 | Locator 修复助手 | Locator Repair Assistant | UI 自动化 | [locator-repair](./testing-types/zh/locator-repair/README.md) | [Standard](./testing-types/zh/locator-repair/Standard-version/LocatorRepairAssistantPrompt.md) |
| 154 | 自动化测试重构助手 | Test Refactoring Assistant | 自动化测试 | [test-refactoring](./testing-types/zh/test-refactoring/README.md) | [Standard](./testing-types/zh/test-refactoring/Standard-version/TestRefactoringAssistantPrompt.md) |
| 155 | 测试代码质量分析器 | Test Code Quality Analyzer | 自动化测试 | [test-code-quality-analysis](./testing-types/zh/test-code-quality-analysis/README.md) | [Standard](./testing-types/zh/test-code-quality-analysis/Standard-version/TestCodeQualityAnalyzerPrompt.md) |
| 156 | 自动化覆盖率分析器 | Automation Coverage Analyzer | 自动化测试 | [automation-coverage-analysis](./testing-types/zh/automation-coverage-analysis/README.md) | [Standard](./testing-types/zh/automation-coverage-analysis/Standard-version/AutomationCoverageAnalyzerPrompt.md) |
| 157 | 测试重复检测器 | Duplicate Test Detector | 测试治理 | [duplicate-test-detection](./testing-types/zh/duplicate-test-detection/README.md) | [Standard](./testing-types/zh/duplicate-test-detection/Standard-version/DuplicateTestDetectorPrompt.md) |
| 158 | 过期测试检测器 | Obsolete Test Detector | 测试治理 | [obsolete-test-detection](./testing-types/zh/obsolete-test-detection/README.md) | [Standard](./testing-types/zh/obsolete-test-detection/Standard-version/ObsoleteTestDetectorPrompt.md) |

## 5. 性能、可靠性与韧性

共 35 项。

| # | 中文名称 | English name | 原始类型 | 模块 | Standard Prompt |
| ---: | --- | --- | --- | --- | --- |
| 47 | 性能需求分析器 | Performance Requirement Analyzer | 性能测试 | [performance-requirement-analysis](./testing-types/zh/performance-requirement-analysis/README.md) | [Standard](./testing-types/zh/performance-requirement-analysis/Standard-version/PerformanceRequirementAnalyzerPrompt.md) |
| 48 | 性能负载模型设计器 | Workload Model Designer | 性能测试 | [workload-model-design](./testing-types/zh/workload-model-design/README.md) | [Standard](./testing-types/zh/workload-model-design/Standard-version/WorkloadModelDesignerPrompt.md) |
| 49 | VU/TPS 计算器 | VU/TPS Calculator | 性能测试 | [vu-tps-calculation](./testing-types/zh/vu-tps-calculation/README.md) | [Standard](./testing-types/zh/vu-tps-calculation/Standard-version/VUTPSCalculatorPrompt.md) |
| 50 | 性能场景设计器 | Performance Scenario Designer | 性能测试 | [performance-scenario-design](./testing-types/zh/performance-scenario-design/README.md) | [Standard](./testing-types/zh/performance-scenario-design/Standard-version/PerformanceScenarioDesignerPrompt.md) |
| 51 | 性能结果分析器 | Performance Result Analyzer | 性能测试 | [performance-result-analysis](./testing-types/zh/performance-result-analysis/README.md) | [Standard](./testing-types/zh/performance-result-analysis/Standard-version/PerformanceResultAnalyzerPrompt.md) |
| 52 | 性能瓶颈分析器 | Performance Bottleneck Analyzer | 性能测试 | [performance-bottleneck-analysis](./testing-types/zh/performance-bottleneck-analysis/README.md) | [Standard](./testing-types/zh/performance-bottleneck-analysis/Standard-version/PerformanceBottleneckAnalyzerPrompt.md) |
| 53 | NeoLoad 脚本助手 | NeoLoad Script Assistant | 性能测试 | [neoload-script-assistance](./testing-types/zh/neoload-script-assistance/README.md) | [Standard](./testing-types/zh/neoload-script-assistance/Standard-version/NeoLoadScriptAssistantPrompt.md) |
| 54 | JMeter 脚本助手 | JMeter Script Assistant | 性能测试 | [performance-test-jmeter](./testing-types/zh/performance-test-jmeter/README.md) | [Standard](./testing-types/zh/performance-test-jmeter/Standard-version/PerformanceTestJMeterPrompt.md) |
| 55 | Gatling 脚本助手 | Gatling Script Assistant | 性能测试 | [performance-test-gatling](./testing-types/zh/performance-test-gatling/README.md) | [Standard](./testing-types/zh/performance-test-gatling/Standard-version/PerformanceTestGatlingPrompt.md) |
| 59 | 数据库性能分析器 | Database Performance Analyzer | 数据库测试 | [database-performance-analysis](./testing-types/zh/database-performance-analysis/README.md) | [Standard](./testing-types/zh/database-performance-analysis/Standard-version/DatabasePerformanceAnalyzerPrompt.md) |
| 85 | 可用性需求分析器 | Availability Requirement Analyzer | 非功能测试 | [availability-requirement-analysis](./testing-types/zh/availability-requirement-analysis/README.md) | [Standard](./testing-types/zh/availability-requirement-analysis/Standard-version/AvailabilityRequirementAnalyzerPrompt.md) |
| 86 | 可靠性需求分析器 | Reliability Requirement Analyzer | 非功能测试 | [reliability-requirement-analysis](./testing-types/zh/reliability-requirement-analysis/README.md) | [Standard](./testing-types/zh/reliability-requirement-analysis/Standard-version/ReliabilityRequirementAnalyzerPrompt.md) |
| 87 | 可扩展性分析器 | Scalability Analyzer | 非功能测试 | [scalability-analysis](./testing-types/zh/scalability-analysis/README.md) | [Standard](./testing-types/zh/scalability-analysis/Standard-version/ScalabilityAnalyzerPrompt.md) |
| 115 | 超时测试设计器 | Timeout Test Designer | API 测试 | [timeout-test-design](./testing-types/zh/timeout-test-design/README.md) | [Standard](./testing-types/zh/timeout-test-design/Standard-version/TimeoutTestDesignerPrompt.md) |
| 131 | 服务降级测试设计器 | Service Degradation Test Designer | 韧性测试 | [service-degradation-test-design](./testing-types/zh/service-degradation-test-design/README.md) | [Standard](./testing-types/zh/service-degradation-test-design/Standard-version/ServiceDegradationTestDesignerPrompt.md) |
| 132 | 熔断测试设计器 | Circuit Breaker Test Designer | 韧性测试 | [circuit-breaker-test-design](./testing-types/zh/circuit-breaker-test-design/README.md) | [Standard](./testing-types/zh/circuit-breaker-test-design/Standard-version/CircuitBreakerTestDesignerPrompt.md) |
| 133 | 故障恢复测试设计器 | Recovery Test Designer | 韧性测试 | [recovery-test-design](./testing-types/zh/recovery-test-design/README.md) | [Standard](./testing-types/zh/recovery-test-design/Standard-version/RecoveryTestDesignerPrompt.md) |
| 134 | Chaos 测试设计器 | Chaos Test Designer | 混沌测试 | [chaos-test-design](./testing-types/zh/chaos-test-design/README.md) | [Standard](./testing-types/zh/chaos-test-design/Standard-version/ChaosTestDesignerPrompt.md) |
| 135 | 容灾测试设计器 | Disaster Recovery Test Designer | 容灾测试 | [disaster-recovery-test-design](./testing-types/zh/disaster-recovery-test-design/README.md) | [Standard](./testing-types/zh/disaster-recovery-test-design/Standard-version/DisasterRecoveryTestDesignerPrompt.md) |
| 136 | Failover 测试设计器 | Failover Test Designer | 容灾测试 | [failover-test-design](./testing-types/zh/failover-test-design/README.md) | [Standard](./testing-types/zh/failover-test-design/Standard-version/FailoverTestDesignerPrompt.md) |
| 137 | 性能基线分析器 | Performance Baseline Analyzer | 性能测试 | [performance-baseline-analysis](./testing-types/zh/performance-baseline-analysis/README.md) | [Standard](./testing-types/zh/performance-baseline-analysis/Standard-version/PerformanceBaselineAnalyzerPrompt.md) |
| 138 | 性能回归分析器 | Performance Regression Analyzer | 性能测试 | [performance-regression-analysis](./testing-types/zh/performance-regression-analysis/README.md) | [Standard](./testing-types/zh/performance-regression-analysis/Standard-version/PerformanceRegressionAnalyzerPrompt.md) |
| 139 | 容量规划分析器 | Capacity Planning Analyzer | 性能测试 | [capacity-planning-analysis](./testing-types/zh/capacity-planning-analysis/README.md) | [Standard](./testing-types/zh/capacity-planning-analysis/Standard-version/CapacityPlanningAnalyzerPrompt.md) |
| 140 | 压力测试设计器 | Stress Test Designer | 性能测试 | [stress-test-design](./testing-types/zh/stress-test-design/README.md) | [Standard](./testing-types/zh/stress-test-design/Standard-version/StressTestDesignerPrompt.md) |
| 141 | 峰值测试设计器 | Spike Test Designer | 性能测试 | [spike-test-design](./testing-types/zh/spike-test-design/README.md) | [Standard](./testing-types/zh/spike-test-design/Standard-version/SpikeTestDesignerPrompt.md) |
| 142 | 稳定性测试设计器 | Soak Test Designer | 性能测试 | [soak-test-design](./testing-types/zh/soak-test-design/README.md) | [Standard](./testing-types/zh/soak-test-design/Standard-version/SoakTestDesignerPrompt.md) |
| 143 | 并发测试设计器 | Concurrency Test Designer | 性能测试 | [concurrency-test-design](./testing-types/zh/concurrency-test-design/README.md) | [Standard](./testing-types/zh/concurrency-test-design/Standard-version/ConcurrencyTestDesignerPrompt.md) |
| 144 | 性能趋势分析器 | Performance Trend Analyzer | 性能测试 | [performance-trend-analysis](./testing-types/zh/performance-trend-analysis/README.md) | [Standard](./testing-types/zh/performance-trend-analysis/Standard-version/PerformanceTrendAnalyzerPrompt.md) |
| 145 | Nginx 性能分析器 | Nginx Performance Analyzer | 性能诊断 | [nginx-performance-analysis](./testing-types/zh/nginx-performance-analysis/README.md) | [Standard](./testing-types/zh/nginx-performance-analysis/Standard-version/NginxPerformanceAnalyzerPrompt.md) |
| 146 | JVM 性能分析器 | JVM Performance Analyzer | 性能诊断 | [jvm-performance-analysis](./testing-types/zh/jvm-performance-analysis/README.md) | [Standard](./testing-types/zh/jvm-performance-analysis/Standard-version/JVMPerformanceAnalyzerPrompt.md) |
| 147 | Kubernetes 性能分析器 | Kubernetes Performance Analyzer | 性能诊断 | [kubernetes-performance-analysis](./testing-types/zh/kubernetes-performance-analysis/README.md) | [Standard](./testing-types/zh/kubernetes-performance-analysis/Standard-version/KubernetesPerformanceAnalyzerPrompt.md) |
| 148 | 网络延迟分析器 | Network Latency Analyzer | 性能诊断 | [network-latency-analysis](./testing-types/zh/network-latency-analysis/README.md) | [Standard](./testing-types/zh/network-latency-analysis/Standard-version/NetworkLatencyAnalyzerPrompt.md) |
| 149 | 数据库慢查询分析器 | Slow Query Analyzer | 性能诊断 | [slow-query-analysis](./testing-types/zh/slow-query-analysis/README.md) | [Standard](./testing-types/zh/slow-query-analysis/Standard-version/SlowQueryAnalyzerPrompt.md) |
| 150 | 连接池分析器 | Connection Pool Analyzer | 性能诊断 | [connection-pool-analysis](./testing-types/zh/connection-pool-analysis/README.md) | [Standard](./testing-types/zh/connection-pool-analysis/Standard-version/ConnectionPoolAnalyzerPrompt.md) |
| 179 | SLI/SLO 分析器 | SLI/SLO Analyzer | 可观测性 | [sli-slo-analysis](./testing-types/zh/sli-slo-analysis/README.md) | [Standard](./testing-types/zh/sli-slo-analysis/Standard-version/SLISLOAnalyzerPrompt.md) |

## 6. 安全、隐私与无障碍

共 11 项。

| # | 中文名称 | English name | 原始类型 | 模块 | Standard Prompt |
| ---: | --- | --- | --- | --- | --- |
| 91 | 可访问性测试助手 | Accessibility Testing Assistant | Accessibility | [accessibility-testing](./testing-types/zh/accessibility-testing/README.md) | [Standard](./testing-types/zh/accessibility-testing/Standard-version/AccessibilityTestingPrompt.md) |
| 92 | WCAG 合规分析器 | WCAG Compliance Analyzer | Accessibility | [wcag-compliance-analysis](./testing-types/zh/wcag-compliance-analysis/README.md) | [Standard](./testing-types/zh/wcag-compliance-analysis/Standard-version/WCAGComplianceAnalyzerPrompt.md) |
| 96 | 安全测试场景生成器 | Security Test Scenario Generator | 安全测试 | [security-test-scenario](./testing-types/zh/security-test-scenario/README.md) | [Standard](./testing-types/zh/security-test-scenario/Standard-version/SecurityTestScenarioGeneratorPrompt.md) |
| 97 | OWASP 风险分析器 | OWASP Risk Analyzer | 安全测试 | [owasp-risk-analysis](./testing-types/zh/owasp-risk-analysis/README.md) | [Standard](./testing-types/zh/owasp-risk-analysis/Standard-version/OWASPRiskAnalyzerPrompt.md) |
| 98 | 权限测试设计器 | Authorization Test Designer | 安全测试 | [authorization-test-design](./testing-types/zh/authorization-test-design/README.md) | [Standard](./testing-types/zh/authorization-test-design/Standard-version/AuthorizationTestDesignerPrompt.md) |
| 99 | 身份认证测试设计器 | Authentication Test Designer | 安全测试 | [authentication-test-design](./testing-types/zh/authentication-test-design/README.md) | [Standard](./testing-types/zh/authentication-test-design/Standard-version/AuthenticationTestDesignerPrompt.md) |
| 100 | 输入校验测试生成器 | Input Validation Test Generator | 安全测试 | [input-validation-test](./testing-types/zh/input-validation-test/README.md) | [Standard](./testing-types/zh/input-validation-test/Standard-version/InputValidationTestGeneratorPrompt.md) |
| 101 | API 安全测试设计器 | API Security Test Designer | 安全测试 | [api-security-test-design](./testing-types/zh/api-security-test-design/README.md) | [Standard](./testing-types/zh/api-security-test-design/Standard-version/APISecurityTestDesignerPrompt.md) |
| 102 | 数据隐私测试分析器 | Data Privacy Test Analyzer | 安全测试 | [data-privacy-analysis](./testing-types/zh/data-privacy-analysis/README.md) | [Standard](./testing-types/zh/data-privacy-analysis/Standard-version/DataPrivacyTestAnalyzerPrompt.md) |
| 103 | 敏感数据泄露分析器 | Sensitive Data Exposure Analyzer | 安全测试 | [sensitive-data-exposure-analysis](./testing-types/zh/sensitive-data-exposure-analysis/README.md) | [Standard](./testing-types/zh/sensitive-data-exposure-analysis/Standard-version/SensitiveDataExposureAnalyzerPrompt.md) |
| 185 | 数据脱敏分析器 | Data Masking Analyzer | 测试数据 | [data-masking-analysis](./testing-types/zh/data-masking-analysis/README.md) | [Standard](./testing-types/zh/data-masking-analysis/Standard-version/DataMaskingAnalyzerPrompt.md) |

## 7. 数据、数据库与测试环境

共 17 项。

| # | 中文名称 | English name | 原始类型 | 模块 | Standard Prompt |
| ---: | --- | --- | --- | --- | --- |
| 31 | 测试数据生成器 | Test Data Generator | 测试数据 | [test-data-generation](./testing-types/zh/test-data-generation/README.md) | [Standard](./testing-types/zh/test-data-generation/Standard-version/TestDataGeneratorPrompt.md) |
| 32 | 边界测试数据生成器 | Boundary Data Generator | 测试数据 | [boundary-data-generation](./testing-types/zh/boundary-data-generation/README.md) | [Standard](./testing-types/zh/boundary-data-generation/Standard-version/BoundaryDataGeneratorPrompt.md) |
| 33 | SQL 测试数据生成器 | SQL Test Data Generator | 测试数据 | [database-test-data-analysis](./testing-types/zh/database-test-data-analysis/README.md) | [Standard](./testing-types/zh/database-test-data-analysis/Standard-version/DatabaseTestDataAnalyzerPrompt.md) |
| 35 | WireMock 配置生成器 | WireMock Generator | Mock 测试 | [wiremock-generation](./testing-types/zh/wiremock-generation/README.md) | [Standard](./testing-types/zh/wiremock-generation/Standard-version/WireMockGeneratorPrompt.md) |
| 36 | 故障模拟设计器 | Fault Simulation Designer | Mock 测试 | [fault-simulation-design](./testing-types/zh/fault-simulation-design/README.md) | [Standard](./testing-types/zh/fault-simulation-design/Standard-version/FaultSimulationDesignerPrompt.md) |
| 56 | SQL 生成器 | SQL Generator | 数据库测试 | [sql-generation](./testing-types/zh/sql-generation/README.md) | [Standard](./testing-types/zh/sql-generation/Standard-version/SQLGeneratorPrompt.md) |
| 57 | 数据库校验分析器 | Database Validation Analyzer | 数据库测试 | [database-validation-analysis](./testing-types/zh/database-validation-analysis/README.md) | [Standard](./testing-types/zh/database-validation-analysis/Standard-version/DatabaseValidationAnalyzerPrompt.md) |
| 58 | 数据一致性分析器 | Data Consistency Analyzer | 数据库测试 | [data-consistency-analysis](./testing-types/zh/data-consistency-analysis/README.md) | [Standard](./testing-types/zh/data-consistency-analysis/Standard-version/DataConsistencyAnalyzerPrompt.md) |
| 61 | Docker 构建问题分析器 | Docker Build Analyzer | DevOps | [docker-build-analysis](./testing-types/zh/docker-build-analysis/README.md) | [Standard](./testing-types/zh/docker-build-analysis/Standard-version/DockerBuildAnalyzerPrompt.md) |
| 62 | Kubernetes 问题分析器 | Kubernetes Issue Analyzer | DevOps | [kubernetes-issue-analysis](./testing-types/zh/kubernetes-issue-analysis/README.md) | [Standard](./testing-types/zh/kubernetes-issue-analysis/Standard-version/KubernetesIssueAnalyzerPrompt.md) |
| 63 | 环境问题分析器 | Environment Issue Analyzer | 环境分析 | [environment-issue-analysis](./testing-types/zh/environment-issue-analysis/README.md) | [Standard](./testing-types/zh/environment-issue-analysis/Standard-version/EnvironmentIssueAnalyzerPrompt.md) |
| 181 | 测试环境健康检查器 | Test Environment Health Checker | 测试环境 | [test-environment-health](./testing-types/zh/test-environment-health/README.md) | [Standard](./testing-types/zh/test-environment-health/Standard-version/TestEnvironmentHealthCheckerPrompt.md) |
| 182 | 环境差异分析器 | Environment Drift Analyzer | 测试环境 | [test-environment-drift-analysis](./testing-types/zh/test-environment-drift-analysis/README.md) | [Standard](./testing-types/zh/test-environment-drift-analysis/Standard-version/EnvironmentDriftAnalyzerPrompt.md) |
| 183 | 配置差异分析器 | Configuration Diff Analyzer | 测试环境 | [configuration-diff-analysis](./testing-types/zh/configuration-diff-analysis/README.md) | [Standard](./testing-types/zh/configuration-diff-analysis/Standard-version/ConfigurationDiffAnalyzerPrompt.md) |
| 184 | 测试数据清理助手 | Test Data Cleanup Assistant | 测试数据 | [test-data-cleanup](./testing-types/zh/test-data-cleanup/README.md) | [Standard](./testing-types/zh/test-data-cleanup/Standard-version/TestDataCleanupAssistantPrompt.md) |
| 186 | 测试数据依赖分析器 | Test Data Dependency Analyzer | 测试数据 | [test-data-dependency-analysis](./testing-types/zh/test-data-dependency-analysis/README.md) | [Standard](./testing-types/zh/test-data-dependency-analysis/Standard-version/TestDataDependencyAnalyzerPrompt.md) |
| 187 | 测试数据污染分析器 | Test Data Pollution Analyzer | 测试数据 | [test-data-pollution-analysis](./testing-types/zh/test-data-pollution-analysis/README.md) | [Standard](./testing-types/zh/test-data-pollution-analysis/Standard-version/TestDataPollutionAnalyzerPrompt.md) |

## 8. 缺陷、质量与测试治理

共 24 项。

| # | 中文名称 | English name | 原始类型 | 模块 | Standard Prompt |
| ---: | --- | --- | --- | --- | --- |
| 4 | 质量风险分析器 | Quality Risk Analyzer | 风险分析 | [quality-risk-analysis](./testing-types/zh/quality-risk-analysis/README.md) | [Standard](./testing-types/zh/quality-risk-analysis/Standard-version/QualityRiskAnalyzerPrompt.md) |
| 37 | 缺陷报告生成器 | Bug Report Generator | 缺陷管理 | [bug-reporting](./testing-types/zh/bug-reporting/README.md) | [Standard](./testing-types/zh/bug-reporting/Standard-version/BugReportingPrompt.md) |
| 38 | 缺陷分析器 | Bug Analyzer | 缺陷分析 | [bug-analysis](./testing-types/zh/bug-analysis/README.md) | [Standard](./testing-types/zh/bug-analysis/Standard-version/BugAnalyzerPrompt.md) |
| 39 | 缺陷分诊助手 | Bug Triage Assistant | 缺陷管理 | [bug-triage](./testing-types/zh/bug-triage/README.md) | [Standard](./testing-types/zh/bug-triage/Standard-version/BugTriageAssistantPrompt.md) |
| 40 | 根因分析器 | Root Cause Analyzer | RCA | [root-cause-analysis](./testing-types/zh/root-cause-analysis/README.md) | [Standard](./testing-types/zh/root-cause-analysis/Standard-version/RootCauseAnalyzerPrompt.md) |
| 41 | 日志分析器 | Log Analyzer | 故障分析 | [log-analysis](./testing-types/zh/log-analysis/README.md) | [Standard](./testing-types/zh/log-analysis/Standard-version/LogAnalyzerPrompt.md) |
| 42 | 堆栈异常分析器 | Stack Trace Analyzer | 故障分析 | [stack-trace-analysis](./testing-types/zh/stack-trace-analysis/README.md) | [Standard](./testing-types/zh/stack-trace-analysis/Standard-version/StackTraceAnalyzerPrompt.md) |
| 43 | 变更影响分析器 | Change Impact Analyzer | 变更分析 | [change-impact-analysis](./testing-types/zh/change-impact-analysis/README.md) | [Standard](./testing-types/zh/change-impact-analysis/Standard-version/ChangeImpactAnalyzerPrompt.md) |
| 44 | PR 风险分析器 | PR Risk Analyzer | 变更分析 | [pr-risk-analysis](./testing-types/zh/pr-risk-analysis/README.md) | [Standard](./testing-types/zh/pr-risk-analysis/Standard-version/PRRiskAnalyzerPrompt.md) |
| 45 | 回归范围分析器 | Regression Scope Analyzer | 回归测试 | [regression-scope-analysis](./testing-types/zh/regression-scope-analysis/README.md) | [Standard](./testing-types/zh/regression-scope-analysis/Standard-version/RegressionScopeAnalyzerPrompt.md) |
| 46 | 回归测试选择器 | Regression Test Selector | 回归测试 | [regression-test-selection](./testing-types/zh/regression-test-selection/README.md) | [Standard](./testing-types/zh/regression-test-selection/Standard-version/RegressionTestSelectorPrompt.md) |
| 68 | Sprint 质量分析器 | Sprint Quality Analyzer | 敏捷测试 | [sprint-quality-analysis](./testing-types/zh/sprint-quality-analysis/README.md) | [Standard](./testing-types/zh/sprint-quality-analysis/Standard-version/SprintQualityAnalyzerPrompt.md) |
| 72 | 测试报告生成器 | Test Report Generator | 测试报告 | [test-reporting](./testing-types/zh/test-reporting/README.md) | [Standard](./testing-types/zh/test-reporting/Standard-version/TestReportingPrompt.md) |
| 73 | 质量指标分析器 | Quality Metrics Analyzer | 质量管理 | [quality-metrics-analysis](./testing-types/zh/quality-metrics-analysis/README.md) | [Standard](./testing-types/zh/quality-metrics-analysis/Standard-version/QualityMetricsAnalyzerPrompt.md) |
| 74 | 质量仪表盘分析器 | Quality Dashboard Analyzer | 质量管理 | [quality-dashboard-analysis](./testing-types/zh/quality-dashboard-analysis/README.md) | [Standard](./testing-types/zh/quality-dashboard-analysis/Standard-version/QualityDashboardAnalyzerPrompt.md) |
| 75 | 质量趋势分析器 | Quality Trend Analyzer | 质量管理 | [quality-trend-analysis](./testing-types/zh/quality-trend-analysis/README.md) | [Standard](./testing-types/zh/quality-trend-analysis/Standard-version/QualityTrendAnalyzerPrompt.md) |
| 161 | 测试覆盖缺口分析器 | Test Coverage Gap Analyzer | 测试治理 | [test-coverage-gap-analysis](./testing-types/zh/test-coverage-gap-analysis/README.md) | [Standard](./testing-types/zh/test-coverage-gap-analysis/Standard-version/TestCoverageGapAnalyzerPrompt.md) |
| 163 | 测试资产健康分析器 | Test Asset Health Analyzer | 测试治理 | [test-asset-health-analysis](./testing-types/zh/test-asset-health-analysis/README.md) | [Standard](./testing-types/zh/test-asset-health-analysis/Standard-version/TestAssetHealthAnalyzerPrompt.md) |
| 164 | 缺陷逃逸分析器 | Defect Leakage Analyzer | 质量管理 | [defect-leakage-analysis](./testing-types/zh/defect-leakage-analysis/README.md) | [Standard](./testing-types/zh/defect-leakage-analysis/Standard-version/DefectLeakageAnalyzerPrompt.md) |
| 165 | 缺陷趋势分析器 | Defect Trend Analyzer | 质量管理 | [defect-trend-analysis](./testing-types/zh/defect-trend-analysis/README.md) | [Standard](./testing-types/zh/defect-trend-analysis/Standard-version/DefectTrendAnalyzerPrompt.md) |
| 166 | 缺陷聚类分析器 | Defect Clustering Analyzer | 质量管理 | [defect-clustering-analysis](./testing-types/zh/defect-clustering-analysis/README.md) | [Standard](./testing-types/zh/defect-clustering-analysis/Standard-version/DefectClusteringAnalyzerPrompt.md) |
| 167 | 缺陷预测分析器 | Defect Prediction Analyzer | 质量管理 | [defect-prediction-analysis](./testing-types/zh/defect-prediction-analysis/README.md) | [Standard](./testing-types/zh/defect-prediction-analysis/Standard-version/DefectPredictionAnalyzerPrompt.md) |
| 168 | 测试有效性分析器 | Test Effectiveness Analyzer | 质量管理 | [test-effectiveness-analysis](./testing-types/zh/test-effectiveness-analysis/README.md) | [Standard](./testing-types/zh/test-effectiveness-analysis/Standard-version/TestEffectivenessAnalyzerPrompt.md) |
| 169 | 质量门禁分析器 | Quality Gate Analyzer | 质量管理 | [quality-gate-analysis](./testing-types/zh/quality-gate-analysis/README.md) | [Standard](./testing-types/zh/quality-gate-analysis/Standard-version/QualityGateAnalyzerPrompt.md) |

## 9. 发布、生产与可观测性

共 14 项。

| # | 中文名称 | English name | 原始类型 | 模块 | Standard Prompt |
| ---: | --- | --- | --- | --- | --- |
| 64 | 发布就绪分析器 | Release Readiness Analyzer | 发布管理 | [release-readiness-analysis](./testing-types/zh/release-readiness-analysis/README.md) | [Standard](./testing-types/zh/release-readiness-analysis/Standard-version/ReleaseReadinessAnalyzerPrompt.md) |
| 65 | Go/No-Go 风险分析器 | Go/No-Go Risk Analyzer | 发布管理 | [go-no-go-risk-analysis](./testing-types/zh/go-no-go-risk-analysis/README.md) | [Standard](./testing-types/zh/go-no-go-risk-analysis/Standard-version/GoNoGoRiskAnalyzerPrompt.md) |
| 66 | 生产验证生成器 | Production Verification Generator | 发布验证 | [production-verification-generation](./testing-types/zh/production-verification-generation/README.md) | [Standard](./testing-types/zh/production-verification-generation/Standard-version/ProductionVerificationGeneratorPrompt.md) |
| 67 | 冒烟测试生成器 | Smoke Test Generator | 发布验证 | [smoke-test-generation](./testing-types/zh/smoke-test-generation/README.md) | [Standard](./testing-types/zh/smoke-test-generation/Standard-version/SmokeTestGeneratorPrompt.md) |
| 170 | 发布风险评分器 | Release Risk Scorer | 发布管理 | [release-risk-scoring](./testing-types/zh/release-risk-scoring/README.md) | [Standard](./testing-types/zh/release-risk-scoring/Standard-version/ReleaseRiskScorerPrompt.md) |
| 171 | Hotfix 风险分析器 | Hotfix Risk Analyzer | 发布管理 | [hotfix-risk-analysis](./testing-types/zh/hotfix-risk-analysis/README.md) | [Standard](./testing-types/zh/hotfix-risk-analysis/Standard-version/HotfixRiskAnalyzerPrompt.md) |
| 172 | 回滚验证生成器 | Rollback Verification Generator | 发布管理 | [rollback-verification](./testing-types/zh/rollback-verification/README.md) | [Standard](./testing-types/zh/rollback-verification/Standard-version/RollbackVerificationGeneratorPrompt.md) |
| 173 | 发布变更摘要生成器 | Release Change Summary Generator | 发布管理 | [release-change-summary](./testing-types/zh/release-change-summary/README.md) | [Standard](./testing-types/zh/release-change-summary/Standard-version/ReleaseChangeSummaryGeneratorPrompt.md) |
| 174 | 生产事故分析器 | Production Incident Analyzer | 生产质量 | [production-incident-analysis](./testing-types/zh/production-incident-analysis/README.md) | [Standard](./testing-types/zh/production-incident-analysis/Standard-version/ProductionIncidentAnalyzerPrompt.md) |
| 175 | 生产日志关联分析器 | Production Log Correlator | 可观测性 | [production-log-correlation](./testing-types/zh/production-log-correlation/README.md) | [Standard](./testing-types/zh/production-log-correlation/Standard-version/ProductionLogCorrelatorPrompt.md) |
| 176 | 指标异常分析器 | Metrics Anomaly Analyzer | 可观测性 | [metrics-anomaly-analysis](./testing-types/zh/metrics-anomaly-analysis/README.md) | [Standard](./testing-types/zh/metrics-anomaly-analysis/Standard-version/MetricsAnomalyAnalyzerPrompt.md) |
| 177 | Trace 分析器 | Distributed Trace Analyzer | 可观测性 | [distributed-trace-analysis](./testing-types/zh/distributed-trace-analysis/README.md) | [Standard](./testing-types/zh/distributed-trace-analysis/Standard-version/DistributedTraceAnalyzerPrompt.md) |
| 178 | 告警分析器 | Alert Analyzer | 可观测性 | [alert-analysis](./testing-types/zh/alert-analysis/README.md) | [Standard](./testing-types/zh/alert-analysis/Standard-version/AlertAnalyzerPrompt.md) |
| 180 | 线上问题测试复现助手 | Production Issue Reproducer | 生产质量 | [production-issue-reproduction](./testing-types/zh/production-issue-reproduction/README.md) | [Standard](./testing-types/zh/production-issue-reproduction/Standard-version/ProductionIssueReproducerPrompt.md) |

## 10. AI 与 LLM 测试

共 13 项。

| # | 中文名称 | English name | 原始类型 | 模块 | Standard Prompt |
| ---: | --- | --- | --- | --- | --- |
| 188 | AI 功能测试设计器 | AI Feature Test Designer | AI 测试 | [ai-feature-test-design](./testing-types/zh/ai-feature-test-design/README.md) | [Standard](./testing-types/zh/ai-feature-test-design/Standard-version/AIFeatureTestDesignerPrompt.md) |
| 189 | LLM 测试用例生成器 | LLM Test Case Generator | AI 测试 | [llm-test-case-generation](./testing-types/zh/llm-test-case-generation/README.md) | [Standard](./testing-types/zh/llm-test-case-generation/Standard-version/LLMTestCaseGeneratorPrompt.md) |
| 190 | Prompt 测试分析器 | Prompt Test Analyzer | AI 测试 | [prompt-test-analysis](./testing-types/zh/prompt-test-analysis/README.md) | [Standard](./testing-types/zh/prompt-test-analysis/Standard-version/PromptTestAnalyzerPrompt.md) |
| 191 | Prompt 回归测试器 | Prompt Regression Tester | AI 测试 | [prompt-regression-testing](./testing-types/zh/prompt-regression-testing/README.md) | [Standard](./testing-types/zh/prompt-regression-testing/Standard-version/PromptRegressionTesterPrompt.md) |
| 192 | LLM 输出质量评估器 | LLM Output Quality Evaluator | AI 测试 | [llm-output-quality-evaluation](./testing-types/zh/llm-output-quality-evaluation/README.md) | [Standard](./testing-types/zh/llm-output-quality-evaluation/Standard-version/LLMOutputQualityEvaluatorPrompt.md) |
| 193 | 幻觉检测分析器 | Hallucination Analyzer | AI 测试 | [hallucination-analysis](./testing-types/zh/hallucination-analysis/README.md) | [Standard](./testing-types/zh/hallucination-analysis/Standard-version/HallucinationAnalyzerPrompt.md) |
| 194 | AI 安全测试分析器 | AI Safety Test Analyzer | AI 测试 | [ai-safety-test-analysis](./testing-types/zh/ai-safety-test-analysis/README.md) | [Standard](./testing-types/zh/ai-safety-test-analysis/Standard-version/AISafetyTestAnalyzerPrompt.md) |
| 195 | AI Red Team 测试设计器 | AI Red Team Test Designer | AI 测试 | [ai-red-team-test-design](./testing-types/zh/ai-red-team-test-design/README.md) | [Standard](./testing-types/zh/ai-red-team-test-design/Standard-version/AIRedTeamTestDesignerPrompt.md) |
| 196 | AI Eval 设计器 | AI Evaluation Designer | AI 测试 | [ai-evaluation-design](./testing-types/zh/ai-evaluation-design/README.md) | [Standard](./testing-types/zh/ai-evaluation-design/Standard-version/AIEvaluationDesignerPrompt.md) |
| 197 | AI 模型回归分析器 | AI Model Regression Analyzer | AI 测试 | [ai-model-regression-analysis](./testing-types/zh/ai-model-regression-analysis/README.md) | [Standard](./testing-types/zh/ai-model-regression-analysis/Standard-version/AIModelRegressionAnalyzerPrompt.md) |
| 198 | Prompt Injection 测试设计器 | Prompt Injection Test Designer | AI 安全测试 | [prompt-injection-test-design](./testing-types/zh/prompt-injection-test-design/README.md) | [Standard](./testing-types/zh/prompt-injection-test-design/Standard-version/PromptInjectionTestDesignerPrompt.md) |
| 199 | Agent 测试设计器 | AI Agent Test Designer | AI 测试 | [ai-agent-test-design](./testing-types/zh/ai-agent-test-design/README.md) | [Standard](./testing-types/zh/ai-agent-test-design/Standard-version/AIAgentTestDesignerPrompt.md) |
| 200 | Agent 工具调用测试器 | Agent Tool-Call Test Designer | AI 测试 | [agent-tool-call-test-design](./testing-types/zh/agent-tool-call-test-design/README.md) | [Standard](./testing-types/zh/agent-tool-call-test-design/Standard-version/AgentToolCallTestDesignerPrompt.md) |

需要把多个 Prompt 组织成连续活动时，请继续查看 [Testing Workflows](./Workflows/zh/README.md)。
