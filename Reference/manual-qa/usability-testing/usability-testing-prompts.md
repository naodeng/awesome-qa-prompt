# Usability Testing Prompts

## 📋 Metadata
- **Difficulty**: Intermediate
- **Estimated Time**: 30min
- **Prerequisites**: Basic understanding of UX principles
- **Tags**: #intermediate #usability #ux #user-testing #manual-qa
- **Last Updated**: 2026-01-01
- **Version**: 1.0

## 🎯 Objective
Generate usability testing plans, scenarios, and evaluation criteria to assess user experience and interface effectiveness.

## 📝 Prompt Templates

### 1. Usability Test Plan

```
Create a usability testing plan for:

Product: [PRODUCT_NAME]
Target Users: [USER_PERSONAS]
Key Features: [LIST_FEATURES]
Testing Goals: [WHAT_TO_EVALUATE]

Generate plan including:
- Test objectives
- Participant criteria
- Task scenarios
- Success metrics
- Observation guidelines
- Post-test questionnaire
- Analysis framework

Format: Structured test plan document
```

### 2. User Task Scenarios

```
Generate user task scenarios for usability testing:

Feature: [FEATURE_NAME]
User Goal: [WHAT_USER_WANTS_TO_ACHIEVE]
Context: [USAGE_CONTEXT]

Create 5-7 realistic scenarios covering:
- First-time user experience
- Repeat user tasks
- Error recovery
- Complex workflows
- Edge cases

Include success criteria for each scenario.
```

### 3. Heuristic Evaluation

```
Create heuristic evaluation checklist for:

Interface: [WEB/MOBILE/DESKTOP]
Application: [APP_NAME]
Focus Areas: [NAVIGATION/FORMS/SEARCH/CHECKOUT]

Evaluate against Nielsen's 10 Usability Heuristics:
1. Visibility of system status
2. Match between system and real world
3. User control and freedom
4. Consistency and standards
5. Error prevention
6. Recognition rather than recall
7. Flexibility and efficiency of use
8. Aesthetic and minimalist design
9. Help users recognize, diagnose, and recover from errors
10. Help and documentation

Provide rating scale and specific checkpoints for each.
```

### 4. Accessibility & Usability

```
Generate accessibility-focused usability tests:

Application: [APP_NAME]
WCAG Level: [A/AA/AAA]
Assistive Technologies: [SCREEN_READER/KEYBOARD/VOICE]

Test scenarios for:
- Keyboard navigation
- Screen reader compatibility
- Color contrast
- Text sizing
- Focus management
- Error identification
- Form accessibility

Include WCAG success criteria references.
```

### 5. Mobile Usability Testing

```
Create mobile usability test scenarios:

App: [APP_NAME]
Platform: [IOS/ANDROID/BOTH]
Device Types: [PHONE/TABLET]

Test:
- Touch target sizes
- Gesture interactions
- One-handed use
- Landscape/portrait modes
- Different screen sizes
- Thumb zone accessibility
- Loading states
- Offline functionality

Include mobile-specific heuristics.
```

### 6. A/B Testing Scenarios

```
Design A/B usability test for:

Feature: [FEATURE_NAME]
Variant A: [DESCRIBE_VERSION_A]
Variant B: [DESCRIBE_VERSION_B]
Hypothesis: [WHAT_YOU_EXPECT]

Create test including:
- User tasks for both variants
- Metrics to measure
- Sample size calculation
- Success criteria
- Statistical significance threshold
- Qualitative feedback questions
```

## 🔧 Customization Guide

### Placeholders Explained

- **[PRODUCT_NAME]**: Your application or website
  - Example: `E-commerce checkout flow`
  
- **[USER_PERSONAS]**: Target user groups
  - Example: `First-time buyers, returning customers, mobile users`
  
- **[TESTING_GOALS]**: What you want to learn
  - Example: `Identify navigation issues, measure task completion time`

## 💡 Example Usage

### Scenario
Planning usability testing for a new mobile banking app.

### Filled Prompt
```
Create a usability testing plan for:

Product: Mobile Banking App
Target Users: Adults 25-65, varying tech literacy, existing bank customers
Key Features: Account overview, money transfer, bill payment, mobile check deposit
Testing Goals: Evaluate ease of use, identify pain points, measure task completion rates

Generate plan including:
- Test objectives
- Participant criteria
- Task scenarios
- Success metrics
- Observation guidelines
- Post-test questionnaire
- Analysis framework

Format: Structured test plan document
```

### Expected Output
```
USABILITY TEST PLAN: Mobile Banking App

1. TEST OBJECTIVES
   - Evaluate intuitiveness of core banking features
   - Identify usability issues in money transfer flow
   - Measure task completion rates and time
   - Assess user satisfaction and confidence
   - Gather qualitative feedback on UI/UX

2. PARTICIPANT CRITERIA
   Recruit 8-10 participants:
   - Current bank customers
   - Age range: 25-65
   - Mix of tech literacy levels (3 low, 4 medium, 3 high)
   - 50/50 gender split
   - Mix of iOS and Android users
   - No prior experience with this specific app

3. TASK SCENARIOS
   
   Task 1: Check Account Balance
   "You want to see how much money is in your checking account."
   Success: User finds balance within 30 seconds
   
   Task 2: Transfer Money
   "Transfer $50 from your checking to savings account."
   Success: User completes transfer without errors
   
   Task 3: Pay Bill
   "Pay your electricity bill of $120 using the app."
   Success: User successfully schedules payment
   
   [Additional tasks...]

4. SUCCESS METRICS
   - Task completion rate: >80%
   - Time on task: <2 minutes per task
   - Error rate: <10%
   - Satisfaction score: >4/5
   - System Usability Scale (SUS): >68

5. OBSERVATION GUIDELINES
   - Note hesitations and confusion
   - Record error paths
   - Observe facial expressions
   - Note verbal feedback
   - Track navigation patterns
   - Identify points of delight/frustration

6. POST-TEST QUESTIONNAIRE
   - Overall satisfaction (1-5 scale)
   - Ease of use rating
   - Likelihood to recommend
   - Most/least favorite features
   - Suggestions for improvement
   - System Usability Scale (SUS)

7. ANALYSIS FRAMEWORK
   - Quantitative: Task metrics, completion rates, time
   - Qualitative: Themes from observations, quotes
   - Severity ratings for issues (Critical/High/Medium/Low)
   - Recommendations prioritized by impact
```

## ✅ Expected Output

Quality indicators:
- [ ] Clear test objectives
- [ ] Realistic task scenarios
- [ ] Measurable success criteria
- [ ] Comprehensive observation guide
- [ ] Actionable analysis framework

## 🔗 Related Prompts

- [Exploratory Testing](../exploratory-testing/exploratory-testing-prompts.md) - For exploratory approaches
- [Accessibility Testing](../../automation-qa/accessibility-testing/) - For accessibility focus
- [Test Planning](../test-planning/) - For overall test strategy

## 📚 Additional Resources

- [Nielsen Norman Group](https://www.nngroup.com/) - UX research and guidelines
- [System Usability Scale](https://www.usability.gov/how-to-and-tools/methods/system-usability-scale.html)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Usability.gov](https://www.usability.gov/) - Usability best practices

## 💭 Tips for Best Results

1. **Recruit Real Users**: Test with actual target audience
2. **Think Aloud Protocol**: Ask users to verbalize their thoughts
3. **Don't Lead**: Avoid guiding users to solutions
4. **Observe Patterns**: Look for recurring issues across users
5. **Prioritize Issues**: Focus on high-impact usability problems

## 🐛 Common Pitfalls

**Pitfall**: Testing with internal team members
- **Solution**: Always recruit external users

**Pitfall**: Too many tasks in one session
- **Solution**: Limit to 5-7 key tasks, 60 minutes max

**Pitfall**: Leading questions
- **Solution**: Use neutral language, observe don't guide

---

**Note**: Usability testing reveals real user behavior. Always test with representative users, not assumptions.
