# Root Cause Analysis Prompts

## 1. General Root Cause Analysis

```
Help me analyze the root cause of this bug:

Bug Description: [DESCRIBE_BUG]
Symptoms: [WHAT_WE_OBSERVE]
When It Occurs: [CONDITIONS]
Affected Components: [LIST_COMPONENTS]
Recent Changes: [ANY_RECENT_CHANGES]

Provide:
- Potential root causes (ranked by likelihood)
- Analysis methodology
- Questions to investigate further
- Suggested debugging steps
- How to verify the root cause
```

## 2. 5 Whys Analysis

```
Perform a "5 Whys" root cause analysis for this issue:

Problem Statement: [DESCRIBE_PROBLEM]

Guide me through:
1. Why did this problem occur?
2. Why did that happen?
3. Why did that happen?
4. Why did that happen?
5. Why did that happen?

Then provide:
- Root cause identification
- Preventive measures
- Process improvements
```

## 3. Fishbone/Ishikawa Diagram Analysis

```
Help me create a fishbone diagram analysis for this defect:

Problem: [DESCRIBE_PROBLEM]

Analyze potential causes in these categories:
- People (human factors)
- Process (workflow, procedures)
- Technology (tools, systems)
- Environment (infrastructure, conditions)
- Data (input, quality)
- Design (architecture, requirements)

For each category, identify:
- Potential contributing factors
- Most likely causes
- Investigation priorities
```

## 4. Code-Level Root Cause Analysis

```
Analyze the root cause of this code-related bug:

Bug: [DESCRIBE_BUG]
Affected Code: [FILE/MODULE/FUNCTION]
Error Message: [IF_AVAILABLE]
Stack Trace: [IF_AVAILABLE]
Code Changes: [RECENT_COMMITS_IF_KNOWN]

Provide:
- Likely code-level cause
- Why the code fails
- Related code areas to check
- Suggested fix approach
- How to prevent similar issues
```

## 5. Integration Failure Root Cause

```
Analyze the root cause of this integration failure:

Systems Involved: [SYSTEM_A] <-> [SYSTEM_B]
Failure Point: [WHERE_IT_FAILS]
Error Details: [ERROR_MESSAGES/CODES]
Data Flow: [EXPECTED_FLOW]

Investigate:
- Communication breakdown point
- Data transformation issues
- Protocol/contract mismatches
- Timing/synchronization problems
- Configuration issues
- Suggested resolution
```

## 6. Performance Issue Root Cause

```
Help me identify the root cause of this performance issue:

Issue: [SLOW_LOAD/TIMEOUT/FREEZE]
Metrics: [RESPONSE_TIME/LOAD_TIME]
When It Occurs: [CONDITIONS]
Resource Usage: [CPU/MEMORY/NETWORK_IF_KNOWN]

Analyze:
- Performance bottlenecks
- Resource constraints
- Inefficient algorithms/queries
- Network latency issues
- Caching problems
- Recommended optimizations
```

## 7. Data Corruption Root Cause

```
Analyze the root cause of this data corruption issue:

Data Type: [WHAT_DATA]
Corruption Type: [LOST/INCORRECT/DUPLICATED]
When Discovered: [TIMING]
Affected Records: [SCOPE]

Investigate:
- Data entry point issues
- Validation failures
- Concurrency problems
- Transaction handling
- Migration/transformation errors
- Data recovery approach
```

## 8. Security Vulnerability Root Cause

```
Analyze the root cause of this security vulnerability:

Vulnerability: [TYPE]
Affected Component: [COMPONENT]
Attack Vector: [HOW_EXPLOITED]

Investigate:
- Input validation gaps
- Authentication/authorization flaws
- Encryption/encoding issues
- Configuration weaknesses
- Dependency vulnerabilities
- Remediation strategy
- Prevention measures
```

## 9. Regression Root Cause Analysis

```
Analyze why this regression occurred:

Feature: [FEATURE_NAME]
Worked In: [VERSION]
Broken In: [VERSION]
Changes Between Versions: [DESCRIBE_CHANGES]

Investigate:
- Code changes that caused regression
- Why tests didn't catch it
- Missing test coverage
- Integration impact
- How to prevent future regressions
```

## 10. Environment-Specific Root Cause

```
Analyze why this bug occurs only in specific environments:

Bug: [DESCRIBE_BUG]
Occurs In: [ENVIRONMENT_A]
Works In: [ENVIRONMENT_B]
Environment Differences: [DESCRIBE_DIFFERENCES]

Investigate:
- Configuration differences
- Version mismatches
- Infrastructure variations
- Data differences
- Network/firewall rules
- Environment parity issues
```

## 11. Intermittent Bug Root Cause

```
Help me find the root cause of this intermittent bug:

Bug: [DESCRIBE_BUG]
Frequency: [X_OUT_OF_Y_TIMES]
Patterns: [WHEN_MORE_LIKELY]
Variables: [CHANGING_CONDITIONS]

Analyze:
- Race conditions
- Timing dependencies
- Resource availability
- External dependencies
- State management issues
- Caching problems
- How to make it reproducible
```

## 12. User-Reported Issue Root Cause

```
Analyze the root cause of this user-reported issue:

User Report: [DESCRIBE_REPORT]
User Environment: [BROWSER/DEVICE/OS]
User Actions: [WHAT_THEY_DID]
Cannot Reproduce Internally: [YES/NO]

Investigate:
- User-specific conditions
- Data-specific scenarios
- Permission/role factors
- Browser/device differences
- Network conditions
- User workflow variations
```

## Root Cause Analysis Framework

```
Problem Statement:
[CLEAR_DESCRIPTION_OF_PROBLEM]

Symptoms:
- [SYMPTOM_1]
- [SYMPTOM_2]
- [SYMPTOM_3]

Evidence Collected:
- [LOGS/SCREENSHOTS/METRICS]
- [ERROR_MESSAGES]
- [REPRODUCTION_DATA]

Analysis Method: [5_WHYS/FISHBONE/OTHER]

Potential Causes:
1. [CAUSE_1] - Likelihood: [HIGH/MEDIUM/LOW]
   - Evidence: [SUPPORTING_EVIDENCE]
   - Investigation: [WHAT_TO_CHECK]
   
2. [CAUSE_2] - Likelihood: [HIGH/MEDIUM/LOW]
   - Evidence: [SUPPORTING_EVIDENCE]
   - Investigation: [WHAT_TO_CHECK]

Root Cause:
[IDENTIFIED_ROOT_CAUSE]

Verification:
[HOW_TO_CONFIRM_THIS_IS_THE_ROOT_CAUSE]

Contributing Factors:
- [FACTOR_1]
- [FACTOR_2]

Corrective Actions:
- Immediate: [SHORT_TERM_FIX]
- Long-term: [PERMANENT_SOLUTION]

Preventive Measures:
- [HOW_TO_PREVENT_RECURRENCE]
- [PROCESS_IMPROVEMENTS]
- [ADDITIONAL_TESTING_NEEDED]
```

## Root Cause Investigation Checklist

### Code-Related
- [ ] Recent code changes reviewed
- [ ] Related code areas examined
- [ ] Error handling checked
- [ ] Edge cases considered
- [ ] Dependencies verified

### Data-Related
- [ ] Data quality assessed
- [ ] Data flow traced
- [ ] Validation rules checked
- [ ] Data transformations reviewed
- [ ] Database constraints verified

### Environment-Related
- [ ] Configuration compared across environments
- [ ] Version compatibility checked
- [ ] Infrastructure differences identified
- [ ] Network conditions assessed
- [ ] Resource availability verified

### Process-Related
- [ ] Deployment process reviewed
- [ ] Testing coverage analyzed
- [ ] Code review process examined
- [ ] Change management followed
- [ ] Documentation accuracy checked

### Integration-Related
- [ ] API contracts verified
- [ ] Data formats validated
- [ ] Authentication/authorization checked
- [ ] Timeout settings reviewed
- [ ] Error handling examined

## Best Practices

1. **Gather Evidence**: Collect logs, screenshots, metrics before analyzing
2. **Be Systematic**: Use structured methods (5 Whys, Fishbone)
3. **Look Deeper**: Don't stop at symptoms, find the real cause
4. **Consider Multiple Factors**: Often multiple causes contribute
5. **Verify**: Confirm the root cause before declaring it solved
6. **Document**: Record the analysis for future reference
7. **Prevent**: Identify how to prevent similar issues
8. **Learn**: Share findings with the team

## Common Root Cause Categories

- **Code Defects**: Logic errors, missing validation, poor error handling
- **Design Flaws**: Architecture issues, scalability problems
- **Data Issues**: Bad data, missing data, data corruption
- **Configuration**: Wrong settings, environment mismatches
- **Integration**: API changes, contract violations, version mismatches
- **Infrastructure**: Resource limits, network issues, hardware failures
- **Process**: Inadequate testing, poor requirements, rushed development
- **Human Error**: Misunderstanding, typos, oversight

## Questions to Ask During RCA

1. What exactly is the problem?
2. When did it start occurring?
3. What changed recently?
4. Can we reproduce it consistently?
5. What are the exact conditions when it occurs?
6. What doesn't trigger the problem?
7. What evidence do we have?
8. What have we ruled out?
9. Are there similar past issues?
10. What would prevent this in the future?
