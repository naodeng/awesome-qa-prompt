# Test Strategy Prompts

## 1. Comprehensive Test Strategy Creation

```
Help me create a test strategy for:

Project: [PROJECT_NAME]
Type: [WEB_APP/MOBILE_APP/API/DESKTOP]
Timeline: [DURATION]
Team Size: [NUMBER_OF_TESTERS]
Key Features: [LIST_MAIN_FEATURES]
Quality Goals: [DESCRIBE_GOALS]

Generate a test strategy covering:
- Testing scope and objectives
- Test levels (unit, integration, system, UAT)
- Test types (functional, performance, security, etc.)
- Entry and exit criteria
- Risk assessment
- Resource allocation
- Tools and frameworks
- Deliverables and timeline
```

## 2. Risk-Based Test Strategy

```
Create a risk-based test strategy for:

Application: [APP_NAME]
Critical Features: [LIST_CRITICAL_FEATURES]
Known Risks: [DESCRIBE_RISKS]
Risk Tolerance: [HIGH/MEDIUM/LOW]
Compliance Requirements: [IF_ANY]

Provide:
- Risk identification and assessment
- Risk prioritization matrix
- Test coverage based on risk levels
- Mitigation strategies
- Contingency plans
```

## 3. Agile Test Strategy

```
Help me develop an agile test strategy for:

Project: [PROJECT_NAME]
Sprint Duration: [WEEKS]
Team Structure: [DESCRIBE_TEAM]
CI/CD Pipeline: [YES/NO]
Automation Level: [CURRENT_STATE]

Include:
- Sprint-level testing approach
- Definition of Done criteria
- Continuous testing strategy
- Automation strategy
- Regression testing approach
- Collaboration with developers
- Feedback loops
```

## 4. Mobile App Test Strategy

```
Create a mobile app test strategy for:

Platform: [iOS/ANDROID/BOTH]
App Type: [NATIVE/HYBRID/WEB]
Target Devices: [DESCRIBE_DEVICE_COVERAGE]
OS Versions: [SUPPORTED_VERSIONS]
Key Features: [LIST_FEATURES]

Cover:
- Device and OS coverage strategy
- Platform-specific testing
- Offline functionality testing
- Performance and battery testing
- App store compliance
- Update/upgrade testing
- Real device vs emulator strategy
```

## 5. API Test Strategy

```
Develop an API test strategy for:

API Type: [REST/GRAPHQL/SOAP]
Number of Endpoints: [COUNT]
Integration Points: [DESCRIBE_INTEGRATIONS]
Authentication: [TYPE]
SLA Requirements: [RESPONSE_TIME/AVAILABILITY]

Include:
- Functional API testing approach
- Contract testing strategy
- Performance testing
- Security testing
- Error handling validation
- Documentation testing
- Versioning strategy
- Mock/stub strategy
```

## 6. Performance Test Strategy

```
Create a performance test strategy for:

Application: [APP_NAME]
Expected Load: [CONCURRENT_USERS/TPS]
Performance Goals: [RESPONSE_TIME/THROUGHPUT]
Critical Transactions: [LIST_TRANSACTIONS]
Infrastructure: [DESCRIBE_INFRASTRUCTURE]

Cover:
- Performance test types (load, stress, spike, endurance)
- Performance metrics and KPIs
- Test scenarios and workload models
- Test data strategy
- Monitoring and profiling approach
- Baseline establishment
- Performance test environment
```

## 7. Security Test Strategy

```
Develop a security test strategy for:

Application: [APP_NAME]
Security Requirements: [DESCRIBE_REQUIREMENTS]
Compliance Needs: [GDPR/HIPAA/PCI-DSS/etc.]
Sensitive Data: [TYPES_OF_DATA]
Authentication Method: [DESCRIBE_METHOD]

Include:
- Security testing scope
- Vulnerability assessment approach
- Penetration testing strategy
- Authentication/authorization testing
- Data protection testing
- Security tools and techniques
- Compliance validation
- Security test environment
```

## 8. Regression Test Strategy

```
Create a regression test strategy for:

Application: [APP_NAME]
Release Frequency: [WEEKLY/MONTHLY/etc.]
Test Suite Size: [NUMBER_OF_TESTS]
Automation Coverage: [PERCENTAGE]
Time Constraints: [AVAILABLE_TIME]

Provide:
- Regression test selection criteria
- Prioritization approach
- Automation strategy
- Execution frequency
- Maintenance approach
- Impact analysis process
- Optimization techniques
```

## 9. Exploratory Test Strategy

```
Develop an exploratory test strategy for:

Application: [APP_NAME]
Testing Time: [DURATION]
Focus Areas: [DESCRIBE_AREAS]
Tester Expertise: [LEVEL]
Known Weak Areas: [DESCRIBE_AREAS]

Include:
- Charter-based testing approach
- Session planning
- Note-taking and documentation
- Bug reporting process
- Coverage tracking
- Collaboration approach
- Learning and adaptation
```

## 10. UAT Test Strategy

```
Create a User Acceptance Test strategy for:

Project: [PROJECT_NAME]
User Groups: [DESCRIBE_USERS]
Business Scenarios: [KEY_SCENARIOS]
UAT Duration: [TIMELINE]
UAT Environment: [DESCRIBE_ENVIRONMENT]

Cover:
- UAT objectives and scope
- User selection and training
- Test scenario creation
- UAT environment setup
- Feedback collection process
- Issue resolution workflow
- Sign-off criteria
- Communication plan
```

## 11. Microservices Test Strategy

```
Develop a test strategy for microservices architecture:

Number of Services: [COUNT]
Communication: [REST/MESSAGE_QUEUE/etc.]
Deployment: [KUBERNETES/DOCKER/etc.]
Service Dependencies: [DESCRIBE_DEPENDENCIES]

Include:
- Service-level testing
- Contract testing strategy
- Integration testing approach
- End-to-end testing
- Service virtualization
- Chaos engineering
- Monitoring and observability
```

## 12. Data Migration Test Strategy

```
Create a test strategy for data migration:

Source System: [SYSTEM_NAME]
Target System: [SYSTEM_NAME]
Data Volume: [SIZE]
Migration Type: [BIG_BANG/PHASED]
Downtime Allowed: [DURATION]

Cover:
- Data validation strategy
- Migration testing phases
- Reconciliation approach
- Performance testing
- Rollback testing
- Data quality checks
- Production cutover strategy
```

## Test Strategy Template

```
# Test Strategy for [PROJECT_NAME]

## 1. Introduction
- Project overview
- Testing objectives
- Scope (in-scope and out-of-scope)

## 2. Test Approach
### Test Levels
- Unit Testing: [APPROACH]
- Integration Testing: [APPROACH]
- System Testing: [APPROACH]
- UAT: [APPROACH]

### Test Types
- Functional: [COVERAGE]
- Non-Functional: [PERFORMANCE/SECURITY/USABILITY]
- Regression: [APPROACH]

## 3. Test Environment
- Environment requirements
- Test data strategy
- Environment management

## 4. Entry and Exit Criteria
### Entry Criteria
- [CRITERION_1]
- [CRITERION_2]

### Exit Criteria
- [CRITERION_1]
- [CRITERION_2]

## 5. Risk Assessment
| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| [RISK_1] | [HIGH/MED/LOW] | [HIGH/MED/LOW] | [STRATEGY] |

## 6. Test Deliverables
- Test plans
- Test cases
- Test reports
- Defect reports

## 7. Resource Planning
- Team structure
- Roles and responsibilities
- Training needs
- Tools required

## 8. Schedule
- Test planning: [DATES]
- Test design: [DATES]
- Test execution: [DATES]
- Test closure: [DATES]

## 9. Defect Management
- Defect lifecycle
- Severity/priority definitions
- Escalation process

## 10. Communication Plan
- Status reporting
- Stakeholder meetings
- Issue escalation

## 11. Metrics and Reporting
- Test coverage
- Defect metrics
- Test execution progress
- Quality metrics
```

## Best Practices

1. **Align with Business Goals**: Ensure testing supports business objectives
2. **Risk-Based Approach**: Focus on high-risk areas
3. **Stakeholder Involvement**: Get buy-in from all stakeholders
4. **Realistic Planning**: Consider constraints and dependencies
5. **Flexibility**: Allow for adjustments as project evolves
6. **Clear Communication**: Ensure everyone understands the strategy
7. **Measurable Goals**: Define clear success criteria
8. **Continuous Improvement**: Learn and adapt from each project

## Key Considerations

- **Budget**: Testing costs and ROI
- **Timeline**: Testing windows and deadlines
- **Resources**: Team skills and availability
- **Tools**: Testing tools and infrastructure
- **Dependencies**: External dependencies and integrations
- **Compliance**: Regulatory and compliance requirements
- **Quality Goals**: Acceptable quality levels
- **Risk Tolerance**: Organization's risk appetite
