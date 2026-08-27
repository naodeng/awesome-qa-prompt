# Testing Workflows

[简体中文](../zh/README.md) | English

This directory contains practical workflow guides for using the QA Prompt Library in real-world testing scenarios.

---

## 📚 Available Workflows

### [AI Quality Analysis Workflow](ai-quality-analysis-workflow/README.md)

**Use for**: Moving from requirements analysis through test report review while preserving role separation, evidence, and Human Task decision boundaries

**Eight stages**:
- Requirements analysis → Test strategy → Test strategy review → Code review
- Test case writing → Test case review → Test report → Test report review

**Five role types**: Product, QA, UI/UX, Technical, and PM. Invoke the applicable roles independently in each stage, then use the synthesis prompt to preserve consensus, disagreements, and traceability.

**Best for**: R&D teams that need an auditable quality-analysis chain built from 43 prompts per language

---

### [Testing Prompt Router](discover-testing/README.md)

**Use for**: Choosing the right testing-type prompt or workflow prompt when the entry point is unclear

**Covers**:
- Identifying the main prompt from the user goal
- Recommending at most one auxiliary prompt
- Providing the order of use and a minimal input template
- Labeling missing information, prerequisites, and risks

**Best for**: First-time repository use, unclear task boundaries, or combining multiple prompts

---

### [Daily Testing Workflow](daily-testing-workflow.md)

**Use for**: Day-to-day testing activities

**Covers**:
- Morning routine and planning
- Test case creation
- Test automation
- Exploratory testing
- Bug reporting
- Visual and E2E testing
- End-of-day wrap-up

**Best for**: Individual QA engineers managing daily tasks

---

### [Sprint Testing Workflow](sprint-testing-workflow.md)

**Use for**: 2-week sprint cycles

**Covers**:
- Sprint planning and test strategy
- Daily testing activities throughout sprint
- Mid-sprint review
- Regression and integration testing
- Sprint review and retrospective
- Continuous activities

**Best for**: Agile/Scrum teams

---

### [Release Testing Workflow](release-testing-workflow.md)

**Use for**: Production releases

**Covers**:
- Release planning (T-14 days)
- Test preparation and execution
- Specialized testing (performance, security, accessibility)
- Release candidate testing
- Go/No-Go decision process
- Post-release monitoring and validation
- Rollback procedures

**Best for**: Release managers and QA leads

---

## 🎯 How to Use These Workflows

1. **Use the testing prompt router first** if you are not sure where to start
2. **Use AI Quality Analysis Workflow** for an eight-stage, role-based quality-analysis chain
3. **Select the appropriate workflow** based on your current testing phase
4. **Follow the timeline** and activities outlined in each workflow
5. **Use the referenced prompts** from the main library for each activity
6. **Adapt as needed** - these are templates, customize them for your team's needs

## 💡 Tips for Success

- **Start with the daily workflow** to get familiar with the prompt library
- **Integrate workflows into your existing processes** gradually
- **Share workflows with your team** for consistent testing practices
- **Provide feedback** to help improve these workflows

## 🔗 Related Resources

- [Requirements Analysis](../../testing-types/en/requirements-analysis/README.md)
- [Test Strategy](../../testing-types/en/test-strategy/README.md)
- [Test Reporting](../../testing-types/en/test-reporting/README.md)

---

**Make testing workflows more efficient and systematic!** 🔄✨
