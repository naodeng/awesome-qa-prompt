# Manual QA - Exploratory Testing Prompts

## 📋 Metadata
- **Difficulty**: Intermediate
- **Estimated Time**: 15min
- **Prerequisites**: Basic understanding of exploratory testing concepts
- **Tags**: #intermediate #exploratory #manual-qa #session-based #charter
- **Last Updated**: 2026-01-01
- **Version**: 1.0

## 🎯 Objective
Generate comprehensive exploratory testing charters, session plans, and bug hunting strategies to uncover defects through structured exploration.

## 📝 Prompt Templates

### 1. Session-Based Test Charter Creation

```
Create an exploratory testing charter for:

Feature/Area: [FEATURE_OR_AREA_NAME]
Build Version: [VERSION_NUMBER]
Mission: [WHAT_TO_EXPLORE]
Duration: [TIME_BOX_DURATION]

Generate a charter including:
- Clear mission statement
- Areas to explore
- Test ideas and heuristics to apply
- Risks to investigate
- Data/tools needed
- Success criteria

Format as a session charter template.
```

### 2. Bug Hunting Strategy

```
Create a bug hunting strategy for:

Application: [APPLICATION_NAME]
Target Area: [SPECIFIC_AREA]
Known Issues: [LIST_KNOWN_ISSUES]
Time Available: [DURATION]

Provide:
- High-risk areas to focus on
- Testing heuristics to apply (SFDPOT, FEW HICCUPS, etc.)
- Boundary conditions to test
- Error guessing scenarios
- Exploratory techniques to use
- Note-taking template
```

### 3. Heuristic-Based Testing

```
Generate exploratory test ideas using testing heuristics for:

Feature: [FEATURE_NAME]
User Persona: [TARGET_USER]
Context: [USAGE_CONTEXT]

Apply these heuristics:
- SFDPOT (Structure, Function, Data, Platform, Operations, Time)
- FEW HICCUPS (Familiarity, Explainability, World, History, etc.)
- Goldilocks (too much, too little, just right)

Provide specific test ideas for each heuristic.
```

### 4. Mind Map for Exploration

```
Create a mind map structure for exploring:

System: [SYSTEM_NAME]
Focus Area: [AREA_TO_EXPLORE]
Objectives: [EXPLORATION_OBJECTIVES]

Generate a hierarchical mind map with:
- Central topic
- Main branches (features/functions)
- Sub-branches (test ideas)
- Leaf nodes (specific tests)
- Risk indicators
- Priority markers
```

### 5. Exploratory Test Session Report

```
Generate a template for documenting exploratory test session:

Session Details:
- Tester: [NAME]
- Charter: [CHARTER_DESCRIPTION]
- Duration: [TIME_SPENT]
- Build: [VERSION]

Include sections for:
- What was tested
- Test notes and observations
- Bugs found (with severity)
- Questions raised
- Areas not covered
- Follow-up actions
- Session metrics (coverage, bugs, time)
```

### 6. Pair Testing Script

```
Create a pair testing guide for:

Feature: [FEATURE_NAME]
Pair Roles: [DRIVER/NAVIGATOR]
Duration: [SESSION_LENGTH]

Provide:
- Role descriptions and responsibilities
- Exploration areas
- Communication guidelines
- Switching intervals
- Note-taking approach
- Debrief template
```

## 🔧 Customization Guide

### Placeholders Explained

- **[FEATURE_OR_AREA_NAME]**: The specific feature, module, or area to explore
  - Example: `User authentication and session management`
  - Tips: Be specific about boundaries

- **[MISSION]**: The goal of the exploratory session
  - Example: `Discover edge cases in password reset flow`
  - Tips: Make it focused and achievable

- **[TIME_BOX_DURATION]**: How long the session will last
  - Example: `90 minutes`
  - Tips: Standard sessions are 60-120 minutes

- **[TESTING_HEURISTICS]**: Specific heuristics to apply
  - Example: `SFDPOT, Goldilocks, Boundary testing`
  - Tips: Choose 2-3 relevant heuristics

## 💡 Example Usage

### Scenario
Need to explore a new payment gateway integration before release.

### Filled Prompt
```
Create an exploratory testing charter for:

Feature/Area: Payment Gateway Integration (Stripe)
Build Version: 2.5.0-beta
Mission: Explore payment processing edge cases and error handling
Duration: 90 minutes

Generate a charter including:
- Clear mission statement
- Areas to explore
- Test ideas and heuristics to apply
- Risks to investigate
- Data/tools needed
- Success criteria

Format as a session charter template.
```

### Expected AI Response
```
EXPLORATORY TEST CHARTER

Mission: Explore payment processing edge cases and error handling in Stripe integration

Areas to Explore:
1. Payment flow variations
   - Credit card payments
   - Debit card payments
   - International cards
   - Expired cards

2. Error scenarios
   - Insufficient funds
   - Network timeouts
   - Invalid card details
   - 3D Secure failures

3. Edge cases
   - Concurrent transactions
   - Duplicate submissions
   - Browser back button during payment
   - Session expiry during payment

Test Ideas & Heuristics:
- Apply SFDPOT: Test different data formats, platforms (browsers), timing
- Goldilocks: Test minimum/maximum amounts, very long card numbers
- Boundary testing: $0.01, $999,999.99, negative amounts
- Error guessing: What could go wrong?

Risks to Investigate:
- Data leakage in error messages
- Transaction state inconsistencies
- Refund processing issues
- PCI compliance violations

Data/Tools Needed:
- Test credit cards (Stripe test mode)
- Different browsers
- Network throttling tools
- Database access for verification

Success Criteria:
- Covered all major payment flows
- Tested at least 10 error scenarios
- Found and documented any critical issues
- Identified areas needing deeper testing
```

## ✅ Expected Output

The AI should provide:
1. **Structured charters** with clear missions and scope
2. **Specific test ideas** based on heuristics
3. **Risk-based focus areas** for exploration
4. **Documentation templates** for session notes
5. **Actionable strategies** for bug hunting

**Quality Indicators**:
- [ ] Charter is focused and time-boxed
- [ ] Test ideas are specific and actionable
- [ ] Heuristics are properly applied
- [ ] Risks are clearly identified
- [ ] Documentation is comprehensive

## 🔗 Related Prompts

- [Test Case Creation](../test-case-creation/functional-prompts.md) - For structured test cases
- [Bug Reporting](../bug-reporting/) - For documenting found issues
- [Risk Analysis](../../ai-assisted-qa/risk-analysis-prompts.md) - For risk-based testing
- [Usability Testing](usability-testing-prompts.md) - For UX exploration

## 📚 Additional Resources

- [Exploratory Testing Explained](https://www.satisfice.com/exploratory-testing) - James Bach
- [Test Heuristics Cheat Sheet](https://testobsessed.com/wp-content/uploads/2011/04/testheuristicscheatsheetv1.pdf)
- [Session-Based Test Management](https://www.satisfice.com/download/session-based-test-management)
- [Mind Mapping for Testers](https://www.ministryoftesting.com/dojo/lessons/mind-mapping-for-software-testers)

## 💭 Tips for Best Results

1. **Be Specific**: Clearly define the scope and mission of exploration
2. **Use Heuristics**: Apply recognized testing heuristics for better coverage
3. **Time-Box**: Keep sessions focused with clear time limits
4. **Document**: Use structured templates for session notes
5. **Iterate**: Refine charters based on what you discover

## 🐛 Troubleshooting

**Issue**: Charter is too broad
- **Solution**: Narrow the scope to a specific feature or user flow

**Issue**: Not finding bugs
- **Solution**: Apply different heuristics, focus on edge cases and error paths

**Issue**: Session notes are disorganized
- **Solution**: Use the session report template to structure observations

---

**Note**: Exploratory testing is about learning and discovery. Always review and adapt AI-generated charters based on your context and findings.
