# Sprint Testing Workflow

## 📋 Metadata
- **Audience**: QA Engineers, Scrum Teams
- **Sprint Duration**: 2 weeks (typical)
- **Last Updated**: 2026-01-01
- **Version**: 1.0

## 🎯 Objective
Complete testing workflow for a 2-week sprint cycle, from planning to retrospective.

---

## 📅 Sprint Planning (Day 1)

### Morning: Sprint Planning Meeting
**Preparation** (Before meeting):
- Review product backlog
- Use [Test Strategy](../TestStrategy/TestStrategyPrompt_EN.md) for upcoming stories

**During Meeting**:
- Understand acceptance criteria
- Identify testable requirements
- Estimate testing effort
- Flag testing dependencies

### Afternoon: Test Planning
**Prompts to Use**:
- [Test Strategy](../TestStrategy/TestStrategyPrompt_EN.md)
- [Requirements Analysis](../RequirementsAnalysis/RequirementsAnalysisPrompt_EN.md)

**Deliverables**:
- [ ] Test strategy document
- [ ] Testing scope defined
- [ ] Test environment requirements
- [ ] Test data needs identified
- [ ] Automation candidates identified

**Template**:
```
Sprint: [Sprint Number]
Stories: [List user stories]
Testing Focus: [Areas to test]
Automation Plan: [What to automate]
Risks: [Identified risks]
```

---

## 🏗️ Sprint Days 2-3: Setup & Early Testing

### Test Environment Setup
**Actions**:
- Set up test environments
- Configure CI/CD pipelines
- Prepare test data

**Prompts to Use**:
- [Automation Testing](../AutomationTesting/AutomationTestingPrompt_EN.md)
- [Test Strategy](../TestStrategy/TestStrategyPrompt_EN.md) - Test data generation

### Early Story Testing
**For Ready Stories**:
1. Generate test cases using [Test Case Writing](../TestCaseWriting/TestCaseWritingPrompt_EN.md)
2. Review with developers
3. Start exploratory testing on completed work

---

## 🚀 Sprint Days 4-8: Active Development & Testing

### Daily Activities

#### Morning Stand-up
**Report**:
- Tests completed yesterday
- Tests planned for today
- Blockers

#### Test Execution
**Manual Testing**:
- Execute test cases for completed stories
- Use [Manual Testing](../ManualTesting/ManualTestingPrompt_EN.md) for exploratory testing on new features
- Log bugs using [Bug Reporting](../BugReporting/BugReportingPrompt_EN.md)

**Automation**:
- Write automated tests for completed stories
- Use framework-specific prompts:
  - [Automation Testing](../AutomationTesting/AutomationTestingPrompt_EN.md)
  - [API Testing](../APITesting/APITestingPrompt_EN.md)

#### Bug Triage (Daily)
**Process**:
1. Review new bugs
2. Prioritize with team
3. Retest fixed bugs
4. Update bug status

### Mid-Sprint Review (Day 5-6)
**Actions**:
- Review testing progress
- Adjust test plan if needed
- Identify at-risk stories
- Update automation coverage

**Metrics to Check**:
- Test execution rate
- Bug discovery rate
- Automation coverage
- Story completion vs testing

---

## 🔍 Sprint Days 9-10: Intensive Testing

### Regression Testing
**Prompts to Use**:
- [Functional Testing](../FunctionalTesting/FunctionalTestingPrompt_EN.md) - Regression scenarios
- [AI-Assisted Testing](../AIAssistedTesting/AIAssistedTestingPrompt_EN.md) - Intelligent test selection

**Execute**:
- Automated regression suite
- Manual regression for critical paths
- Cross-browser testing
- Mobile testing (if applicable)

### Integration Testing
**Prompts to Use**:
- [Functional Testing](../FunctionalTesting/FunctionalTestingPrompt_EN.md) - E2E scenarios
- [API Testing](../APITesting/APITestingPrompt_EN.md) - API integration

**Test**:
- End-to-end user journeys
- System integrations
- Data flow across services

### Visual Testing
**Prompts to Use**:
- [Accessibility Testing](../AccessibilityTesting/AccessibilityTestingPrompt_EN.md) - Visual testing

**Actions**:
- Run visual regression tests
- Review UI changes
- Validate responsive design

---

## ✅ Sprint Day 11: Stabilization

### Bug Bash (Optional)
**Format**:
- 2-hour focused testing session
- Entire team participates
- Use [Manual Testing](../ManualTesting/ManualTestingPrompt_EN.md) exploratory testing charters

### Final Bug Fixes
**Priority**:
- Critical bugs must be fixed
- High priority bugs reviewed
- Medium/Low bugs moved to backlog

### Test Completion
**Checklist**:
- [ ] All stories tested
- [ ] Critical bugs fixed and retested
- [ ] Regression suite passed
- [ ] Automation updated
- [ ] Test reports generated

---

## 📊 Sprint Day 12: Review & Demo

### Sprint Review Preparation
**Prompts to Use**:
- [Test Reporting](../TestReporting/TestReportingPrompt_EN.md)
- [Test Strategy](../TestStrategy/TestStrategyPrompt_EN.md) - Quality assessment

**Prepare**:
- Test execution summary
- Bug metrics
- Automation coverage report
- Quality dashboard

### Sprint Review Meeting
**Present**:
- Testing achievements
- Quality metrics
- Known issues
- Risks for next sprint

**Demo**:
- Showcase automated tests (if relevant)
- Demonstrate test coverage

---

## 🔄 Sprint Day 13: Retrospective & Planning

### Sprint Retrospective
**Testing Focus**:
- What went well in testing?
- What testing challenges did we face?
- How can we improve testing process?
- Action items for next sprint

**Topics to Discuss**:
- Test automation effectiveness
- Bug discovery timing
- Test environment issues
- Tool improvements needed

### Next Sprint Preparation
**Actions**:
- Review upcoming stories
- Identify testing challenges
- Plan automation work
- Update test strategy

---

## 📈 Continuous Activities (Throughout Sprint)

### Daily
- [ ] Execute test cases
- [ ] Log and track bugs
- [ ] Update test automation
- [ ] Review CI/CD results
- [ ] Sync with developers

### Every 2-3 Days
- [ ] Update test metrics
- [ ] Review automation coverage
- [ ] Refactor test code
- [ ] Update documentation

### Weekly
- [ ] Team testing sync
- [ ] Review test strategy
- [ ] Update risk analysis
- [ ] Knowledge sharing

---

## 🎯 Testing Priorities by Sprint Phase

### Early Sprint (Days 1-4)
**Focus**: Planning & Setup
- Test planning
- Environment setup
- Early story testing
- Automation framework updates

### Mid Sprint (Days 5-8)
**Focus**: Active Testing
- Feature testing
- Bug fixing
- Automation development
- Exploratory testing

### Late Sprint (Days 9-12)
**Focus**: Stabilization
- Regression testing
- Integration testing
- Bug verification
- Quality reporting

---

## 🚨 Red Flags to Watch

### Testing Falling Behind
**Signs**:
- Stories marked "Done" but not tested
- Growing untested backlog
- Automation coverage decreasing

**Actions**:
1. Escalate to Scrum Master
2. Reprioritize testing
3. Request team help
4. Adjust scope if needed

### Quality Issues
**Signs**:
- High bug count late in sprint
- Critical bugs discovered
- Regression failures

**Actions**:
1. Use [Test Strategy](../TestStrategy/TestStrategyPrompt_EN.md) risk analysis
2. Focus on critical paths
3. Consider extending sprint
4. Plan technical debt sprint

### Environment Problems
**Signs**:
- Frequent environment downtime
- Data issues
- CI/CD failures

**Actions**:
1. Document issues
2. Work with DevOps
3. Have backup plan
4. Test locally when possible

---

## 📋 Sprint Testing Checklist

### Sprint Start
- [ ] Test plan created
- [ ] Environments ready
- [ ] Test data prepared
- [ ] Automation framework updated
- [ ] Team aligned on testing approach

### Mid-Sprint
- [ ] 50%+ stories tested
- [ ] Automation progressing
- [ ] Bugs being fixed
- [ ] No major blockers

### Sprint End
- [ ] All stories tested
- [ ] Regression passed
- [ ] Critical bugs fixed
- [ ] Test reports ready
- [ ] Demo prepared

---

## 🔧 Recommended Prompts by Sprint Phase

### Planning Phase
- [Test Strategy](../TestStrategy/TestStrategyPrompt_EN.md)
- [Requirements Analysis](../RequirementsAnalysis/RequirementsAnalysisPrompt_EN.md)

### Execution Phase
- [Test Case Writing](../TestCaseWriting/TestCaseWritingPrompt_EN.md)
- [Manual Testing](../ManualTesting/ManualTestingPrompt_EN.md)
- [API Testing](../APITesting/APITestingPrompt_EN.md)
- [Automation Testing](../AutomationTesting/AutomationTestingPrompt_EN.md)

### Stabilization Phase
- [Functional Testing](../FunctionalTesting/FunctionalTestingPrompt_EN.md)
- [Accessibility Testing](../AccessibilityTesting/AccessibilityTestingPrompt_EN.md)

### Review Phase
- [Test Reporting](../TestReporting/TestReportingPrompt_EN.md)

---

## 📚 Related Workflows

- [Daily Testing Workflow](daily-testing-workflow_EN.md) - Day-to-day activities
- [Release Testing Workflow](release-testing-workflow_EN.md) - Pre-release process

---

**Remember**: Adapt this workflow to your team's sprint length and process. Communication is key!
