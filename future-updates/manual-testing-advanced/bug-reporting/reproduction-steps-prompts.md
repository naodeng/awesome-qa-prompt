# Reproduction Steps Prompts

## 1. Clear Step-by-Step Reproduction

```
Help me write clear reproduction steps for this bug:

Issue: [DESCRIBE_ISSUE]
Where: [PAGE/MODULE/FEATURE]
Preconditions: [WHAT_NEEDS_TO_BE_SET_UP]

Generate numbered reproduction steps that:
- Start from a known state
- Are specific and actionable
- Include exact values/inputs
- Can be followed by anyone
- Lead to the observed issue
```

## 2. Minimal Reproduction Steps

```
Help me simplify these reproduction steps to the minimum required:

Current Steps:
[LIST_CURRENT_STEPS]

Issue: [DESCRIBE_ISSUE]

Provide:
- Minimal steps that still reproduce the issue
- Which steps can be removed
- Which steps can be combined
- Essential preconditions only
```

## 3. Data-Driven Reproduction Steps

```
Create reproduction steps for a data-specific bug:

Issue: [DESCRIBE_ISSUE]
Specific Data Required: [DESCRIBE_DATA]
Data State: [CURRENT_STATE_OF_DATA]

Include:
- Data setup/preparation steps
- Exact data values needed
- Data state verification
- Action steps
- Expected vs actual with this data
```

## 4. Multi-User Reproduction Steps

```
Help me write reproduction steps for a multi-user scenario:

Issue: [DESCRIBE_ISSUE]
Users Involved: [NUMBER_AND_ROLES]
Sequence: [DESCRIBE_INTERACTION]

Create steps that:
- Clearly identify each user's actions
- Show timing/sequence of actions
- Indicate concurrent vs sequential steps
- Specify user roles/permissions
```

## 5. Environment-Specific Reproduction

```
Generate reproduction steps for an environment-specific bug:

Issue: [DESCRIBE_ISSUE]
Environment: [BROWSER/OS/DEVICE/NETWORK]
Configuration: [SPECIFIC_SETTINGS]

Include:
- Environment setup steps
- Configuration requirements
- Browser/device specific actions
- Network conditions if relevant
```

## 6. Time-Based Reproduction Steps

```
Create reproduction steps for a time-dependent bug:

Issue: [DESCRIBE_ISSUE]
Timing Factor: [SPECIFIC_TIME/DURATION/SEQUENCE]
Time Sensitivity: [DESCRIBE_TIMING]

Include:
- Time-specific preconditions
- Timing of each action
- Wait times between steps
- Time-based verification
```

## 7. State-Dependent Reproduction

```
Help me write reproduction steps for a state-dependent bug:

Issue: [DESCRIBE_ISSUE]
Required State: [DESCRIBE_STATE]
State Dependencies: [WHAT_AFFECTS_STATE]

Provide:
- Steps to achieve required state
- State verification steps
- Actions that trigger the bug
- State after bug occurs
```

## 8. Integration Scenario Reproduction

```
Create reproduction steps for an integration bug:

Systems: [SYSTEM_A] and [SYSTEM_B]
Issue: [DESCRIBE_ISSUE]
Integration Point: [API/DATABASE/FILE/etc.]

Include:
- Setup for both systems
- Integration configuration
- Data flow steps
- Where the integration fails
- Error messages/logs
```

## 9. Performance Issue Reproduction

```
Help me write reproduction steps for a performance bug:

Issue: [SLOW_LOAD/TIMEOUT/FREEZE]
Conditions: [WHEN_IT_OCCURS]
Metrics: [RESPONSE_TIME/LOAD_TIME]

Include:
- Performance baseline setup
- Load/data conditions
- Exact actions to perform
- How to measure performance
- Expected vs actual metrics
```

## 10. Intermittent Bug Reproduction

```
Create reproduction steps for an intermittent bug:

Issue: [DESCRIBE_ISSUE]
Success Rate: [X_OUT_OF_Y_ATTEMPTS]
Patterns: [WHEN_MORE_LIKELY]

Provide:
- Most reliable reproduction method
- Number of attempts needed
- Conditions that increase likelihood
- Variables to control
- How to verify success/failure
```

## Reproduction Steps Template

```
Preconditions:
- [REQUIRED_STATE_1]
- [REQUIRED_STATE_2]
- [REQUIRED_DATA/CONFIGURATION]

Steps to Reproduce:
1. [ACTION_1 - be specific]
   - Input: [EXACT_VALUE]
   - Click: [EXACT_BUTTON/LINK_NAME]
   
2. [ACTION_2]
   - Navigate to: [EXACT_URL/PAGE]
   - Select: [EXACT_OPTION]
   
3. [ACTION_3]
   - Enter: [EXACT_DATA]
   - Submit/Save

4. [VERIFICATION_STEP]
   - Observe: [WHAT_TO_LOOK_FOR]

Expected Result:
[WHAT_SHOULD_HAPPEN_AT_EACH_STEP]

Actual Result:
[WHAT_ACTUALLY_HAPPENS]

Reproduction Rate: [ALWAYS/X_OUT_OF_Y_TIMES]
```

## Best Practices

1. **Start Fresh**: Begin from a clean, known state
2. **Be Specific**: Use exact values, not "some value"
3. **Number Steps**: Make them easy to follow
4. **One Action Per Step**: Don't combine multiple actions
5. **Include Verification**: Show how to confirm each step
6. **Test Your Steps**: Verify someone else can follow them
7. **Note Variations**: Mention if alternative paths exist
8. **Include Timing**: Note if delays are needed

## Common Mistakes to Avoid

- ❌ Vague actions: "Click the button" → ✅ "Click the 'Submit' button"
- ❌ Missing preconditions → ✅ List all setup requirements
- ❌ Skipping steps → ✅ Include every action
- ❌ Assuming knowledge → ✅ Be explicit
- ❌ No data values → ✅ Provide exact inputs
