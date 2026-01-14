# Daily Testing Workflow

## 📋 Metadata
- **Audience**: QA Engineers, Test Automation Engineers
- **Estimated Time**: Reference guide for daily use
- **Last Updated**: 2026-01-01
- **Version**: 1.0

## 🎯 Objective
A practical workflow guide for QA engineers to efficiently use the QA Prompt Library in their daily testing activities.

---

## 🌅 Morning Routine

### 1. Review Test Plan (5-10 min)
**Prompts to Use**:
- [Test Planning](../manual-qa/test-planning/) - Review sprint goals
- [Risk Analysis](../ai-assisted-qa/risk-analysis-prompts.md) - Identify high-risk areas

**Actions**:
- Review user stories for the day
- Identify testing priorities
- Check for blockers

### 2. Set Up Test Environment (10-15 min)
**Prompts to Use**:
- [CI/CD Integration](../automation-qa/ci-cd/) - Check pipeline status
- [Test Data Generation](../ai-assisted-qa/test-data-generation-prompts.md) - Prepare test data

**Actions**:
- Verify test environments are up
- Prepare necessary test data
- Update local test automation code

---

## 📝 Test Case Creation (30-60 min)

### For New Features
**Workflow**:
1. Use [Functional Test Cases](../manual-qa/test-case-creation/functional-prompts.md)
2. Generate comprehensive test scenarios
3. Add [Edge Case Tests](../manual-qa/test-case-creation/edge-case-prompts.md)
4. Review with [Test Planning Checklist](../manual-qa/checklist-prompts/)

**Example Prompt Flow**:
```
1. Generate functional tests → Review → Refine
2. Add edge cases → Review → Refine
3. Create test data → Validate
4. Document in test management tool
```

### For Bug Fixes
**Workflow**:
1. Use [Regression Test Cases](../manual-qa/test-case-creation/regression-prompts.md)
2. Create tests to verify the fix
3. Add tests to prevent regression

---

## 🤖 Test Automation (1-2 hours)

### Writing New Tests
**Choose Your Framework**:
- **Selenium**: Use [Selenium Quick Reference](../automation-qa/web-automation/selenium-quick-reference.md)
- **Playwright**: Use [Playwright Automation](../automation-qa/playwright-automation/)
- **API**: Use [API Testing Beginner](../automation-qa/api-automation/api-testing-beginner.md) or [Advanced](../automation-qa/api-automation/api-testing-advanced.md)

**Workflow**:
1. Open relevant Cursor AI role ([Selenium](../cursor-ai/selenium-role.md), [Playwright](../cursor-ai/playwright-role.md), etc.)
2. Generate test code using prompts
3. Review and customize
4. Run locally
5. Commit to repository

### Maintaining Existing Tests
**Prompts to Use**:
- [AI-Powered Test Maintenance](../ai-assisted-qa/ai-powered-test-maintenance.md)
- [Self-Healing Test Scripts](../ai-assisted-qa/self-healing-test-scripts.md)

**Actions**:
- Fix flaky tests
- Update selectors
- Refactor duplicated code

---

## 🔍 Exploratory Testing (30-45 min)

### Session-Based Testing
**Workflow**:
1. Use [Exploratory Testing Prompts](../manual-qa/exploratory-testing/exploratory-testing-prompts.md)
2. Create a test charter
3. Time-box session (60-90 min)
4. Document findings
5. Log bugs

**Charter Template**:
```
Mission: [What to explore]
Duration: [Time limit]
Areas: [Specific features/flows]
Heuristics: [SFDPOT, FEW HICCUPS, etc.]
```

---

## 🐛 Bug Reporting (15-30 min)

### When You Find a Bug
**Workflow**:
1. Use [Bug Reporting Templates](../manual-qa/bug-reporting/)
2. Generate detailed bug report
3. Include reproduction steps
4. Add screenshots/videos
5. Log in issue tracker

**Quality Checklist**:
- [ ] Clear title
- [ ] Reproduction steps
- [ ] Expected vs actual behavior
- [ ] Environment details
- [ ] Screenshots/logs

---

## 🎨 Visual Testing (30-45 min)

### For UI Changes
**Workflow**:
1. Use [Visual Testing Prompts](../automation-qa/visual-testing/visual-testing-prompts.md)
2. Set up visual regression tests
3. Capture baseline screenshots
4. Run comparison tests
5. Review differences

**Tools**:
- Percy, Applitools, BackstopJS
- Integrate with CI/CD

---

## 🔄 End-to-End Testing (1-2 hours)

### For Critical User Journeys
**Workflow**:
1. Use [E2E Testing Prompts](../automation-qa/e2e-testing/e2e-testing-prompts.md)
2. Map complete user journey
3. Generate E2E test code
4. Validate across all systems
5. Add to regression suite

**Focus Areas**:
- Login → Purchase flow
- User registration → First action
- Critical business processes

---

## 📊 Afternoon Review (30 min)

### 1. Test Execution Review
**Actions**:
- Check CI/CD pipeline results
- Review failed tests
- Update test reports

### 2. Metrics and Reporting
**Prompts to Use**:
- [Test Reporting](../automation-qa/test-reporting/)
- [Release Quality Assessment](../ai-assisted-qa/release-quality-prompts.md)

**Generate**:
- Test coverage reports
- Defect metrics
- Quality dashboards

### 3. Team Sync
**Share**:
- Bugs found
- Tests automated
- Blockers identified
- Tomorrow's plan

---

## 🌙 End of Day (15 min)

### Wrap Up
**Actions**:
- [ ] Commit all code changes
- [ ] Update test documentation
- [ ] Log time in test management tool
- [ ] Update task status
- [ ] Plan tomorrow's priorities

### Knowledge Sharing
**Optional**:
- Document learnings
- Update team wiki
- Share useful prompts with team

---

## 🔧 Tools Quick Access

### Most Used Prompts
1. [Functional Test Cases](../manual-qa/test-case-creation/functional-prompts.md)
2. [Selenium Quick Reference](../automation-qa/web-automation/selenium-quick-reference.md)
3. [API Testing](../automation-qa/api-automation/postman-prompts.md)
4. [Bug Reporting](../manual-qa/bug-reporting/)
5. [Exploratory Testing](../manual-qa/exploratory-testing/exploratory-testing-prompts.md)

### Cursor AI Roles (for IDE)
- [Selenium Expert](../cursor-ai/selenium-role.md)
- [Playwright Expert](../cursor-ai/playwright-role.md)
- [REST Assured Expert](../cursor-ai/rest-assured-role.md)
- [POM Expert](../cursor-ai/pom-role.md)

---

## 💡 Pro Tips

1. **Batch Similar Tasks**: Group test case creation, automation, and exploratory testing
2. **Use Quick References**: Bookmark quick reference guides for fast lookup
3. **Leverage AI Roles**: Keep Cursor AI roles open in your IDE
4. **Document as You Go**: Don't wait until end of day
5. **Automate Repetitive Tasks**: Use AI to generate boilerplate code
6. **Time-Box Exploratory**: Stick to session limits
7. **Review Daily**: Check test results every afternoon

---

## 📅 Weekly Activities

### Monday
- Review sprint goals
- Plan testing for the week
- Set up test environments

### Tuesday-Thursday
- Execute daily workflow
- Focus on test automation
- Exploratory testing sessions

### Friday
- Regression testing
- Test report generation
- Knowledge sharing
- Sprint retrospective prep

---

## 🚨 When Things Go Wrong

### Pipeline Failures
1. Check [CI/CD Integration](../automation-qa/ci-cd/) prompts
2. Debug failed tests
3. Fix and re-run

### Flaky Tests
1. Use [Test Maintenance](../ai-assisted-qa/ai-powered-test-maintenance.md)
2. Implement proper waits
3. Add retry logic

### Blocked Testing
1. Document blocker
2. Find alternative test areas
3. Use [Risk Analysis](../ai-assisted-qa/risk-analysis-prompts.md) to reprioritize

---

## 📚 Related Workflows

- [Sprint Testing Workflow](sprint-testing-workflow.md) - Sprint-specific activities
- [Release Testing Workflow](release-testing-workflow.md) - Pre-release checklist

---

**Remember**: This is a flexible guide. Adapt to your team's needs and project requirements!
