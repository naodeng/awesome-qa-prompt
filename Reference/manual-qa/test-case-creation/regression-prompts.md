# Regression Testing Prompts

## 1. Regression Suite Generation

```
I need to create a regression test suite for [APPLICATION_NAME].

Recent Changes: [DESCRIBE_CHANGES]
Affected Modules: [LIST_MODULES]
Previous Issues: [DESCRIBE_HISTORICAL_BUGS]

Generate a regression test suite that:
- Covers core functionality
- Tests integration points
- Validates critical user paths
- Checks for side effects of recent changes
- Includes smoke tests for quick validation

Prioritize test cases by risk and impact.
```

## 2. Impact Analysis for Regression Testing

```
Analyze the impact of the following code change and suggest regression test cases:

Change Description: [DESCRIBE_CHANGE]
Files Modified: [LIST_FILES]
Dependencies: [LIST_DEPENDENT_MODULES]

Provide:
- Direct impact areas requiring testing
- Indirect/downstream impact areas
- Suggested regression test cases
- Risk assessment (High/Medium/Low)
- Recommended test execution order
```

## 3. Regression Test Prioritization

```
I have [NUMBER] regression test cases. Help me prioritize them for a release with limited testing time.

Release Scope: [DESCRIBE_RELEASE]
Time Available: [TIME_CONSTRAINT]
Test Case List: [PROVIDE_LIST_OR_SUMMARY]

Prioritize based on:
- Business criticality
- Frequency of use
- Defect history
- Code change proximity
- Customer impact

Suggest which tests to include in:
1. Must-run (critical path)
2. Should-run (important features)
3. Nice-to-run (lower priority)
```

## 4. Regression Test Case Optimization

```
Review my existing regression suite and suggest optimizations:

Current Suite Size: [NUMBER_OF_TESTS]
Execution Time: [DURATION]
Maintenance Effort: [HIGH/MEDIUM/LOW]

Test Categories:
[LIST_TEST_CATEGORIES_AND_COUNTS]

Suggest:
- Redundant test cases to remove
- Test cases to merge
- Areas with insufficient coverage
- Candidates for automation
- Ways to reduce execution time
```

## 5. Cross-Browser Regression Testing

```
Create a regression testing strategy for cross-browser compatibility:

Application Type: [WEB_APP/SPA/PWA]
Supported Browsers: [LIST_BROWSERS_AND_VERSIONS]
Critical Features: [LIST_FEATURES]

Generate test cases for:
- Browser-specific rendering issues
- JavaScript compatibility
- CSS layout differences
- Form submission behavior
- File upload/download
- Local storage/cookies
- Performance variations
```

## 6. Database Regression Testing

```
Generate regression test cases for database changes:

Database Type: [MYSQL/POSTGRESQL/MONGODB/etc.]
Schema Changes: [DESCRIBE_CHANGES]
Data Migration: [YES/NO - DESCRIBE_IF_YES]

Create test cases for:
- Data integrity after migration
- Query performance
- Stored procedures/functions
- Triggers and constraints
- Backward compatibility
- Rollback scenarios
```

## 7. API Regression Testing

```
Create API regression test suite:

API Type: [REST/GRAPHQL/SOAP]
Endpoints Modified: [LIST_ENDPOINTS]
Breaking Changes: [YES/NO - DESCRIBE_IF_YES]

Generate test cases for:
- Existing endpoint functionality
- Response schema validation
- Error handling
- Authentication/authorization
- Rate limiting
- Backward compatibility
- Contract testing scenarios
```

## 8. Mobile App Regression Testing

```
Generate regression test cases for mobile application:

Platform: [iOS/ANDROID/BOTH]
App Version: [VERSION]
OS Versions Supported: [LIST_VERSIONS]
Recent Changes: [DESCRIBE_CHANGES]

Include test cases for:
- Core user flows
- Device-specific features (camera, GPS, etc.)
- Offline functionality
- Push notifications
- App updates/upgrades
- Different screen sizes
- OS-specific behaviors
```

## 9. Performance Regression Testing

```
Create performance regression test cases:

Application: [APP_NAME]
Performance Baselines: [PROVIDE_METRICS]
Recent Changes: [DESCRIBE_CHANGES]

Generate test cases for:
- Page load times
- API response times
- Database query performance
- Memory usage
- CPU utilization
- Concurrent user handling
- Resource consumption trends
```

## 10. Security Regression Testing

```
Generate security-focused regression test cases:

Application: [APP_NAME]
Security Controls: [LIST_CONTROLS]
Recent Security Patches: [DESCRIBE_PATCHES]

Create test cases for:
- Authentication mechanisms
- Authorization rules
- Input validation
- Session management
- Encryption/decryption
- Security headers
- Known vulnerability fixes
```

## 11. Regression Test Suite Maintenance

```
Help me maintain and update our regression test suite:

Last Updated: [DATE]
Failed Tests: [NUMBER_AND_REASONS]
Obsolete Features: [LIST_FEATURES]

Provide recommendations for:
- Updating test cases for new requirements
- Removing tests for deprecated features
- Fixing flaky tests
- Improving test data management
- Documentation updates
```

## 12. Automated Regression Test Selection

```
Suggest which regression tests should be automated:

Total Regression Tests: [NUMBER]
Current Automation Coverage: [PERCENTAGE]
Execution Frequency: [DAILY/WEEKLY/PER_RELEASE]

Analyze and recommend:
- High-value candidates for automation
- Tests that should remain manual
- Automation ROI for each category
- Suggested automation approach
- Estimated effort and timeline
```

## Best Practices for Regression Testing

1. **Version Control**: Maintain regression test suite in sync with application versions
2. **Regular Updates**: Review and update after each release
3. **Risk-Based**: Focus on high-risk, high-impact areas
4. **Automation**: Automate stable, repetitive regression tests
5. **Traceability**: Link test cases to requirements and defects
6. **Metrics**: Track regression defect trends and test effectiveness

## Tips for Using These Prompts

- Provide detailed context about recent changes
- Include historical defect data when available
- Specify time and resource constraints
- Mention any compliance or regulatory requirements
- Update prompts based on lessons learned from previous releases
