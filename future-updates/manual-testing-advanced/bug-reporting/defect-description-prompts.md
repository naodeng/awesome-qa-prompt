# Defect Description Prompts

## 1. Comprehensive Bug Report Generation

```
Help me write a comprehensive bug report for the following issue:

What I observed: [DESCRIBE_ISSUE]
Where it occurred: [MODULE/PAGE/FEATURE]
When it occurred: [DATE_TIME]
Environment: [BROWSER/OS/APP_VERSION]

Generate a bug report with:
- Clear, concise title
- Detailed description
- Steps to reproduce
- Expected vs actual behavior
- Impact assessment
- Severity and priority recommendation
- Suggested category/component
```

## 2. Bug Title Optimization

```
Improve the following bug title to be more descriptive and searchable:

Current Title: [CURRENT_TITLE]
Issue Details: [BRIEF_DESCRIPTION]

Create a title that:
- Clearly identifies the issue
- Includes the affected component
- Is concise but informative
- Follows best practices
- Is searchable for similar issues
```

## 3. Expected vs Actual Behavior

```
Help me articulate the expected vs actual behavior for this bug:

Feature: [FEATURE_NAME]
User Action: [WHAT_USER_DID]
What Happened: [ACTUAL_RESULT]
Requirement/Spec: [REFERENCE_IF_AVAILABLE]

Provide:
- Clear expected behavior statement
- Clear actual behavior statement
- Why the difference matters
- User impact description
```

## 4. Bug Severity Assessment

```
Help me determine the appropriate severity for this bug:

Issue: [DESCRIBE_ISSUE]
Impact: [WHO_IS_AFFECTED_AND_HOW]
Workaround Available: [YES/NO - DESCRIBE_IF_YES]
Frequency: [HOW_OFTEN_IT_OCCURS]
Affected Users: [PERCENTAGE_OR_NUMBER]

Assess severity as:
- Critical/Blocker
- Major/High
- Minor/Medium
- Trivial/Low

Provide justification for the severity level.
```

## 5. Bug Priority Determination

```
Help me determine the priority for this bug:

Severity: [SEVERITY_LEVEL]
Business Impact: [DESCRIBE_IMPACT]
Affected Customers: [NUMBER_OR_PERCENTAGE]
Upcoming Release: [DATE_OR_VERSION]
Workaround: [AVAILABLE/NOT_AVAILABLE]

Recommend priority (P0-P4) with justification considering:
- Business criticality
- User impact
- Release timeline
- Resource availability
```

## 6. Visual Bug Description

```
Help me describe this visual/UI bug clearly:

Element: [BUTTON/LAYOUT/IMAGE/etc.]
Issue: [MISALIGNMENT/WRONG_COLOR/MISSING/etc.]
Page/Screen: [WHERE_IT_APPEARS]
Screenshot: [ATTACHED/NOT_ATTACHED]

Generate description including:
- Visual element identification
- Specific visual issue
- Expected appearance
- Browser/device specifics
- Responsive behavior if applicable
```

## 7. Performance Bug Description

```
Help me write a bug report for a performance issue:

Issue Type: [SLOW_LOAD/TIMEOUT/FREEZE/CRASH]
Affected Feature: [FEATURE_NAME]
Performance Metrics: [LOAD_TIME/RESPONSE_TIME/etc.]
Expected Performance: [BASELINE_OR_REQUIREMENT]
Environment: [BROWSER/DEVICE/NETWORK]

Include:
- Performance measurements
- Comparison to baseline
- User experience impact
- Reproduction rate
- Resource consumption data
```

## 8. Intermittent Bug Description

```
Help me describe an intermittent/flaky bug:

Issue: [DESCRIBE_ISSUE]
Occurrence Rate: [X_OUT_OF_Y_TIMES]
Patterns Observed: [WHEN_IT_HAPPENS_MORE]
Variables: [DIFFERENT_CONDITIONS_TESTED]

Create description that:
- Acknowledges intermittent nature
- Provides occurrence statistics
- Lists conditions when it appears
- Describes debugging attempts
- Suggests possible causes
```

## 9. Data Corruption Bug Description

```
Help me report a data integrity/corruption issue:

Data Type: [USER_DATA/TRANSACTION/CONFIGURATION/etc.]
Issue: [LOST/CORRUPTED/INCORRECT]
When Discovered: [TIMING]
Scope: [HOW_MUCH_DATA_AFFECTED]
Data State: [DESCRIBE_INCORRECT_STATE]

Include:
- Data integrity issue description
- Expected data state
- Actual data state
- When corruption occurs
- Impact on users/business
- Data recovery status
```

## 10. Security Vulnerability Description

```
Help me write a security bug report:

Vulnerability Type: [XSS/SQL_INJECTION/AUTH_BYPASS/etc.]
Affected Component: [COMPONENT_NAME]
Attack Vector: [HOW_IT_CAN_BE_EXPLOITED]
Potential Impact: [DATA_BREACH/UNAUTHORIZED_ACCESS/etc.]

Create report with:
- Vulnerability description (without full exploit details)
- Affected components
- Potential impact
- Recommended severity
- Suggested mitigation
- Confidentiality note

Note: Mark as confidential/security issue
```

## 11. Integration Bug Description

```
Help me describe an integration issue:

Systems Involved: [SYSTEM_A] <-> [SYSTEM_B]
Integration Type: [API/DATABASE/FILE/MESSAGE]
Issue: [DESCRIBE_PROBLEM]
Data Flow: [DESCRIBE_EXPECTED_FLOW]

Include:
- Integration point description
- Expected data exchange
- Actual behavior
- Error messages/codes
- Impact on both systems
- Timing/synchronization issues
```

## 12. Localization Bug Description

```
Help me report a localization/translation issue:

Language/Locale: [LANGUAGE_CODE]
Issue Type: [MISSING_TRANSLATION/INCORRECT/FORMATTING]
Affected Text: [ORIGINAL_TEXT]
Location: [WHERE_IT_APPEARS]

Generate description with:
- Localization issue details
- Expected translation/format
- Actual display
- Cultural/contextual concerns
- Impact on user experience
```

## 13. Accessibility Bug Description

```
Help me write an accessibility bug report:

WCAG Level: [A/AA/AAA]
Issue Type: [KEYBOARD_NAV/SCREEN_READER/CONTRAST/etc.]
Affected Element: [ELEMENT_DESCRIPTION]
Guideline Violated: [WCAG_GUIDELINE_NUMBER]

Include:
- Accessibility barrier description
- WCAG guideline reference
- Affected user groups
- Current behavior
- Expected accessible behavior
- Testing tool used
```

## 14. Mobile-Specific Bug Description

```
Help me describe a mobile app bug:

Platform: [iOS/ANDROID]
OS Version: [VERSION]
Device: [DEVICE_MODEL]
Issue: [DESCRIBE_ISSUE]
Orientation: [PORTRAIT/LANDSCAPE/BOTH]

Create description including:
- Mobile-specific context
- Device/OS details
- Touch interaction issues
- Screen size/resolution factors
- App state (foreground/background)
- Network conditions
```

## 15. Regression Bug Description

```
Help me report a regression bug:

Feature: [FEATURE_NAME]
Previously Working In: [VERSION/BUILD]
Broken In: [VERSION/BUILD]
Related Changes: [RECENT_CHANGES_IF_KNOWN]

Include:
- Regression identification
- Version where it worked
- Version where it broke
- Suspected cause
- Impact of regression
- Original test case reference
```

## Bug Report Template

```
Title: [CONCISE_DESCRIPTIVE_TITLE]

Environment:
- Application Version: [VERSION]
- Browser/Device: [DETAILS]
- OS: [OS_VERSION]
- User Role: [ROLE_IF_RELEVANT]

Description:
[CLEAR_DESCRIPTION_OF_ISSUE]

Steps to Reproduce:
1. [STEP_1]
2. [STEP_2]
3. [STEP_3]

Expected Result:
[WHAT_SHOULD_HAPPEN]

Actual Result:
[WHAT_ACTUALLY_HAPPENS]

Severity: [CRITICAL/MAJOR/MINOR/TRIVIAL]
Priority: [P0/P1/P2/P3/P4]

Additional Information:
- Frequency: [ALWAYS/SOMETIMES/RARE]
- Workaround: [IF_AVAILABLE]
- Attachments: [SCREENSHOTS/LOGS/VIDEOS]
- Related Issues: [LINKS_IF_ANY]
```

## Best Practices for Bug Descriptions

1. **Be Specific**: Avoid vague terms like "doesn't work"
2. **Be Objective**: Describe what you see, not what you think
3. **Be Complete**: Include all relevant information
4. **Be Concise**: Remove unnecessary details
5. **Use Evidence**: Attach screenshots, logs, videos
6. **Think User Impact**: Explain how it affects users
7. **One Issue Per Report**: Don't combine multiple bugs
8. **Use Clear Language**: Avoid jargon when possible

## Common Mistakes to Avoid

- ❌ Vague titles like "Bug in login"
- ❌ Missing reproduction steps
- ❌ No environment details
- ❌ Subjective language ("ugly", "bad")
- ❌ Combining multiple issues
- ❌ Missing expected behavior
- ❌ No severity/priority assessment
