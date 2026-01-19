# Test Plan Prompts

## 1. Comprehensive Test Plan Creation

```
Create a detailed test plan for:

Project: [PROJECT_NAME]
Release Version: [VERSION]
Features to Test: [LIST_FEATURES]
Testing Timeline: [START_DATE to END_DATE]
Team: [NUMBER_OF_TESTERS]
Environment: [TEST_ENVIRONMENT_DETAILS]

Generate a test plan including:
- Test objectives and scope
- Test items (features to be tested)
- Features not to be tested
- Test approach and methodology
- Pass/fail criteria
- Test deliverables
- Resource requirements
- Schedule and milestones
- Risks and mitigation
```

## 2. Sprint Test Plan

```
Create a sprint test plan for:

Sprint Number: [SPRINT_#]
Sprint Goal: [GOAL]
User Stories: [LIST_STORIES]
Sprint Duration: [WEEKS]
Team Capacity: [HOURS/POINTS]

Include:
- Stories to be tested
- Test approach per story
- Acceptance criteria validation
- Regression scope
- Automation tasks
- Daily testing activities
- Definition of Done
- Sprint testing goals
```

## 3. Release Test Plan

```
Generate a release test plan for:

Release Version: [VERSION]
Release Date: [DATE]
Release Scope: [FEATURES/FIXES]
Previous Version: [VERSION]
Deployment Type: [PHASED/BIG_BANG]

Cover:
- Release testing scope
- Regression testing strategy
- Smoke testing checklist
- Performance validation
- Security checks
- Data migration testing (if applicable)
- Rollback testing
- Go/No-Go criteria
- Post-release monitoring
```

## 4. Feature-Specific Test Plan

```
Create a test plan for a specific feature:

Feature Name: [FEATURE_NAME]
Feature Description: [DESCRIBE_FEATURE]
User Stories: [LIST_STORIES]
Dependencies: [DESCRIBE_DEPENDENCIES]
Acceptance Criteria: [LIST_CRITERIA]

Include:
- Feature testing scope
- Test scenarios and cases
- Integration points to test
- Test data requirements
- Environment needs
- Testing timeline
- Entry and exit criteria
- Risk assessment for this feature
```

## 5. Integration Test Plan

```
Develop an integration test plan for:

Systems to Integrate: [SYSTEM_A] with [SYSTEM_B]
Integration Type: [API/DATABASE/FILE/MESSAGE]
Integration Points: [LIST_ENDPOINTS/INTERFACES]
Data Flow: [DESCRIBE_FLOW]

Cover:
- Integration testing scope
- Interface testing approach
- Data exchange validation
- Error handling scenarios
- Performance testing
- Security testing
- End-to-end workflows
- Integration environment setup
```

## 6. Performance Test Plan

```
Create a performance test plan for:

Application: [APP_NAME]
Performance Goals: [RESPONSE_TIME/THROUGHPUT]
Expected Load: [USERS/TPS]
Critical Transactions: [LIST_TRANSACTIONS]
Test Duration: [DURATION]

Include:
- Performance test objectives
- Test types (load, stress, spike, endurance)
- Test scenarios and workload models
- Performance metrics and KPIs
- Test data volume
- Test environment specifications
- Monitoring strategy
- Success criteria
- Performance baseline
```

## 7. Security Test Plan

```
Generate a security test plan for:

Application: [APP_NAME]
Security Requirements: [REQUIREMENTS]
Compliance Standards: [OWASP/GDPR/etc.]
Sensitive Data Types: [LIST_DATA]
Previous Security Issues: [IF_ANY]

Cover:
- Security testing scope
- Vulnerability assessment approach
- Penetration testing strategy
- Authentication/authorization testing
- Data protection testing
- Security tools to use
- Test environment security
- Reporting and remediation process
```

## 8. Regression Test Plan

```
Create a regression test plan for:

Application: [APP_NAME]
Changes in This Release: [DESCRIBE_CHANGES]
Regression Suite Size: [NUMBER_OF_TESTS]
Time Available: [DURATION]
Automation Coverage: [PERCENTAGE]

Include:
- Regression testing scope
- Test selection criteria
- Prioritization strategy
- Automated vs manual split
- Execution schedule
- Environment requirements
- Pass/fail criteria
- Defect management
```

## 9. UAT Test Plan

```
Develop a UAT test plan for:

Project: [PROJECT_NAME]
Business Users: [DEPARTMENTS/ROLES]
Business Scenarios: [KEY_SCENARIOS]
UAT Duration: [TIMELINE]
UAT Location: [ONSITE/REMOTE]

Cover:
- UAT objectives and scope
- User selection criteria
- User training plan
- Test scenario creation
- UAT environment setup
- Schedule and logistics
- Feedback collection process
- Issue resolution workflow
- Sign-off process
```

## 10. Mobile App Test Plan

```
Create a mobile app test plan for:

App Name: [APP_NAME]
Platform: [iOS/ANDROID/BOTH]
App Type: [NATIVE/HYBRID/WEB]
Target Devices: [LIST_DEVICES]
OS Versions: [SUPPORTED_VERSIONS]

Include:
- Device coverage strategy
- Functional testing scope
- Platform-specific testing
- Offline functionality testing
- Performance testing
- Battery and resource testing
- App store compliance
- Update testing
- Real device vs simulator strategy
```

## 11. API Test Plan

```
Generate an API test plan for:

API Name: [API_NAME]
API Type: [REST/GRAPHQL/SOAP]
Number of Endpoints: [COUNT]
API Version: [VERSION]
Authentication: [TYPE]

Cover:
- API testing scope
- Functional testing approach
- Contract testing
- Error handling validation
- Performance testing
- Security testing
- Documentation validation
- Backward compatibility
- Test data strategy
```

## 12. Data Migration Test Plan

```
Create a data migration test plan for:

Source System: [SYSTEM_NAME]
Target System: [SYSTEM_NAME]
Data Volume: [SIZE]
Migration Date: [DATE]
Migration Type: [BIG_BANG/PHASED]

Include:
- Migration testing phases
- Data validation strategy
- Reconciliation approach
- Data quality checks
- Performance testing
- Rollback testing
- Cutover plan
- Post-migration validation
- Success criteria
```

## Test Plan Template

```
# Test Plan for [PROJECT_NAME]

## 1. Test Plan Identifier
- Document ID: [ID]
- Version: [VERSION]
- Date: [DATE]
- Author: [NAME]

## 2. Introduction
- Purpose of this test plan
- Project background
- References to related documents

## 3. Test Items
Features/modules to be tested:
- [FEATURE_1] - [VERSION]
- [FEATURE_2] - [VERSION]

## 4. Features to be Tested
- [FEATURE_1]: [DESCRIPTION]
- [FEATURE_2]: [DESCRIPTION]

## 5. Features Not to be Tested
- [FEATURE_X]: [REASON]
- [FEATURE_Y]: [REASON]

## 6. Test Approach
### Test Levels
- Unit Testing: [RESPONSIBILITY]
- Integration Testing: [APPROACH]
- System Testing: [APPROACH]
- UAT: [APPROACH]

### Test Types
- Functional: [SCOPE]
- Performance: [SCOPE]
- Security: [SCOPE]
- Usability: [SCOPE]

### Test Techniques
- [TECHNIQUE_1]
- [TECHNIQUE_2]

## 7. Item Pass/Fail Criteria
### Pass Criteria
- All critical test cases passed
- No open high-severity defects
- [ADDITIONAL_CRITERIA]

### Fail Criteria
- Any critical test case failed
- High-severity defects unresolved
- [ADDITIONAL_CRITERIA]

## 8. Suspension Criteria and Resumption Requirements
### Suspension
- [CRITERION_1]
- [CRITERION_2]

### Resumption
- [REQUIREMENT_1]
- [REQUIREMENT_2]

## 9. Test Deliverables
### Before Testing
- Test plan
- Test cases
- Test data

### During Testing
- Test execution reports
- Defect reports

### After Testing
- Test summary report
- Metrics and analysis

## 10. Test Environment
- Hardware: [SPECIFICATIONS]
- Software: [OS, BROWSERS, TOOLS]
- Network: [CONFIGURATION]
- Test Data: [SOURCE_AND_VOLUME]

## 11. Staffing and Training Needs
### Team Structure
| Role | Name | Responsibility |
|------|------|----------------|
| Test Lead | [NAME] | [RESPONSIBILITY] |
| Tester | [NAME] | [RESPONSIBILITY] |

### Training Needs
- [TRAINING_1]
- [TRAINING_2]

## 12. Schedule
| Activity | Start Date | End Date | Owner |
|----------|-----------|----------|-------|
| Test Planning | [DATE] | [DATE] | [NAME] |
| Test Design | [DATE] | [DATE] | [NAME] |
| Test Execution | [DATE] | [DATE] | [NAME] |
| Test Closure | [DATE] | [DATE] | [NAME] |

## 13. Risks and Mitigation
| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| [RISK_1] | [H/M/L] | [H/M/L] | [STRATEGY] |
| [RISK_2] | [H/M/L] | [H/M/L] | [STRATEGY] |

## 14. Approvals
| Role | Name | Signature | Date |
|------|------|-----------|------|
| Test Manager | [NAME] | | |
| Project Manager | [NAME] | | |
| Stakeholder | [NAME] | | |
```

## Best Practices

1. **Be Specific**: Clearly define scope and objectives
2. **Realistic Timelines**: Account for dependencies and risks
3. **Stakeholder Buy-in**: Get approval from all stakeholders
4. **Living Document**: Update as project evolves
5. **Traceability**: Link to requirements and test cases
6. **Risk Management**: Identify and plan for risks
7. **Clear Criteria**: Define measurable pass/fail criteria
8. **Resource Planning**: Ensure adequate resources

## Common Sections Checklist

- [ ] Test objectives clearly stated
- [ ] Scope (in and out) defined
- [ ] Test approach documented
- [ ] Entry and exit criteria specified
- [ ] Resources identified
- [ ] Schedule with milestones
- [ ] Risks and mitigation strategies
- [ ] Deliverables listed
- [ ] Environment requirements
- [ ] Approval signatures
