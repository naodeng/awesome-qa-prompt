# Release Testing Workflow

<div align="right"><a href="../zh/release-testing-workflow.md">简体中文</a> · <strong>English</strong></div>

## 📋 Metadata

- **Audience**: QA Engineers, Release Managers, DevOps
- **Timeline**: 1-2 weeks before release
- **Last Updated**: 2026-01-01
- **Version**: 1.0

## 🎯 Objective

Comprehensive testing workflow to ensure release quality and readiness for production deployment.

---

## 📅 Release Timeline

### T-14 Days: Release Planning

### T-7 Days: Feature Freeze & Testing Ramp-Up

### T-3 Days: Release Candidate & Final Testing

### T-1 Day: Go/No-Go Decision

### T-Day: Release Day

---

## 🎬 T-14 Days: Release Planning

### Release Kickoff Meeting

**Attendees**: Product, Engineering, QA, DevOps

**Agenda**:
- Review release scope
- Identify high-risk features
- Define quality gates
- Plan testing strategy

**Prompts to Use**:
- [Test Strategy](../../testing-types/en/test-strategy/README.md)
- [Requirements Analysis](../../testing-types/en/requirements-analysis/README.md) - Risk analysis

**Deliverables**:
- [ ] Release test plan
- [ ] Risk assessment
- [ ] Test environment plan
- [ ] Regression test scope
- [ ] Performance test plan

---

## 🏗️ T-10 to T-8 Days: Test Preparation

### Environment Setup

**Actions**:
- Set up staging environment
- Configure production-like data
- Set up monitoring and logging
- Prepare test accounts

**Prompts to Use**:
- [Automation Testing](../../testing-types/en/automation-testing/README.md) - CI/CD integration
- [Test Strategy](../../testing-types/en/test-strategy/README.md) - Test data generation

### Test Suite Preparation

**Update**:
- Regression test suite
- Performance test scripts
- Security test scenarios
- Accessibility tests

**Automation Check**:
- [ ] All critical paths automated
- [ ] Regression suite up to date
- [ ] Performance tests configured
- [ ] Visual tests baseline updated

---

## 🚀 T-7 Days: Feature Freeze & Testing Ramp-Up

### Feature Freeze

**Actions**:
- No new features after this point
- Only bug fixes allowed
- Code freeze for non-critical changes

### Comprehensive Testing Begins

#### 1. Functional Testing

**Prompts to Use**:
- [Functional Testing](../../testing-types/en/functional-testing/README.md)
- [Test Case Writing](../../testing-types/en/test-case-writing/README.md)

**Execute**:
- All new features
- Modified features
- Critical user journeys
- Integration points

#### 2. Regression Testing

**Full Regression Suite**:
- Automated regression tests
- Manual regression for critical paths
- Cross-browser testing
- Mobile testing

**Prompts to Use**:
- [AI-Assisted Testing](../../testing-types/en/ai-assisted-testing/README.md) - Intelligent test selection

#### 3. End-to-End Testing

**Prompts to Use**:
- [Functional Testing](../../testing-types/en/functional-testing/README.md) - E2E scenarios

**Test**:
- Complete user journeys
- Multi-system workflows
- Data flow validation
- Third-party integrations

---

## 🔍 T-5 to T-4 Days: Specialized Testing

### Performance Testing

**Prompts to Use**:
- [Performance Testing](../../testing-types/en/performance-testing/README.md)

**Execute**:
- Load testing (expected load)
- Stress testing (2x expected load)
- Spike testing
- Endurance testing (24+ hours)

**Metrics to Validate**:
- Response times (P95, P99)
- Throughput (requests/sec)
- Error rates
- Resource utilization

### Security Testing

**Prompts to Use**:
- [Security Testing](../../testing-types/en/security-testing/README.md)

**Execute**:
- Vulnerability scanning
- Penetration testing
- Authentication/authorization tests
- Data encryption validation
- Security headers check

### Accessibility Testing

**Prompts to Use**:
- [Accessibility Testing](../../testing-types/en/accessibility-testing/README.md)

**Execute**:
- Screen reader testing
- Keyboard navigation
- Color contrast validation
- ARIA labels verification

### Visual Testing

**Prompts to Use**:
- [Accessibility Testing](../../testing-types/en/accessibility-testing/README.md) - Visual testing

**Execute**:
- Visual regression tests
- Cross-browser visual validation
- Responsive design testing
- UI consistency checks

---

## ✅ T-3 Days: Release Candidate Testing

### Release Candidate (RC) Build

**Actions**:
- Deploy RC to staging
- Freeze all code changes
- Tag release in version control

### Smoke Testing

**Quick validation** (1-2 hours):
- Critical functionality works
- No showstopper bugs
- Deployment successful

### Final Regression

**Complete regression suite**:
- Automated tests (full suite)
- Manual critical path testing
- Exploratory testing sessions

**Prompts to Use**:
- [Manual Testing](../../testing-types/en/manual-testing/README.md) - Exploratory testing

### Bug Triage

**Priority**:
- **Critical**: Must fix before release
- **High**: Fix if possible
- **Medium/Low**: Move to next release

**Decision Matrix**:
```text
Critical Bug → Fix immediately → Retest → New RC
High Bug → Assess risk → Fix or defer
Medium/Low → Defer to next release
```

---

## 📊 T-2 Days: Quality Assessment

### Test Metrics Review

**Prompts to Use**:
- [Test Reporting](../../testing-types/en/test-reporting/README.md)
- [Test Strategy](../../testing-types/en/test-strategy/README.md) - Quality assessment

**Metrics to Review**:
- Test execution rate: ___%
- Pass rate: ___%
- Critical bugs: ___
- High priority bugs: ___
- Code coverage: ___%
- Performance benchmarks: ___

### Quality Gates

**Must Pass**:
- [ ] All critical bugs fixed
- [ ] Regression suite 100% passed
- [ ] Performance meets SLAs
- [ ] Security scan passed
- [ ] No P1/P2 bugs open
- [ ] Accessibility compliance met

### Risk Assessment

**Evaluate**:
- Known issues and workarounds
- Performance under load
- Third-party dependencies
- Rollback plan readiness

---

## 🎯 T-1 Day: Go/No-Go Decision

### Go/No-Go Meeting

**Attendees**: Product, Engineering, QA, DevOps, Leadership

**Review**:
1. Test execution summary
2. Bug status and trends
3. Performance results
4. Security assessment
5. Known issues and risks
6. Rollback plan

### Decision Criteria

**GO if**:
- ✅ All quality gates passed
- ✅ No critical bugs open
- ✅ Performance acceptable
- ✅ Team confident
- ✅ Rollback plan ready

**NO-GO if**:
- ❌ Critical bugs exist
- ❌ Quality gates failed
- ❌ Performance issues
- ❌ High risk identified
- ❌ Team not confident

### Pre-Release Checklist

- [ ] Release notes prepared
- [ ] Deployment runbook ready
- [ ] Monitoring configured
- [ ] Rollback plan tested
- [ ] Support team briefed
- [ ] Communication plan ready

---

## 🚀 T-Day: Release Day

### Pre-Deployment

**Actions** (2-4 hours before):
- Final smoke test on RC
- Verify deployment checklist
- Team on standby
- Communication channels ready

### Deployment

**Monitor**:
- Deployment progress
- Error logs
- Performance metrics
- User feedback

### Post-Deployment Validation

**Smoke Testing in Production** (30-60 min):
- [ ] Critical user journeys work
- [ ] Authentication/authorization
- [ ] Payment processing (if applicable)
- [ ] Third-party integrations
- [ ] Performance acceptable

**Monitoring** (First 24 hours):
- Error rates
- Response times
- User traffic patterns
- Support tickets

### Rollback Decision

**Rollback if**:
- Critical functionality broken
- Severe performance degradation
- Data corruption detected
- Security vulnerability exposed

---

## 📈 Post-Release (T+1 to T+7)

### Day 1: Intensive Monitoring

- Monitor all metrics
- Respond to incidents quickly
- Track user feedback
- Log any issues

### Week 1: Stabilization

- Fix any post-release bugs
- Monitor performance trends
- Gather user feedback
- Plan hotfixes if needed

### Release Retrospective

**Discuss**:
- What went well?
- What could be improved?
- Testing gaps identified?
- Process improvements?

**Prompts to Use**:
- [Test Reporting](../../testing-types/en/test-reporting/README.md)

---

## 🚨 Emergency Procedures

### Critical Bug Found

1. Assess severity and impact
2. Decide: Hotfix or Rollback
3. If hotfix: Fast-track testing
4. If rollback: Execute rollback plan

### Performance Issues

1. Identify bottleneck
2. Assess user impact
3. Implement quick fix or rollback
4. Plan permanent solution

### Security Incident

1. Immediate assessment
2. Contain the issue
3. Rollback if necessary
4. Incident response plan

---

## 📋 Release Testing Checklist

### Pre-Release

- [ ] Test plan approved
- [ ] Environments ready
- [ ] Test data prepared
- [ ] Automation updated
- [ ] Team trained

### Testing Phase

- [ ] Functional testing complete
- [ ] Regression passed
- [ ] Performance validated
- [ ] Security tested
- [ ] Accessibility checked
- [ ] Visual testing done

### Pre-Deployment

- [ ] RC tested
- [ ] Quality gates passed
- [ ] Go/No-Go decision made
- [ ] Deployment plan ready
- [ ] Rollback plan tested

### Post-Deployment

- [ ] Smoke tests passed
- [ ] Monitoring active
- [ ] Team on standby
- [ ] Communication sent

---

## 🔧 Recommended Prompts by Phase

### Planning

- [Test Strategy](../../testing-types/en/test-strategy/README.md)
- [Requirements Analysis](../../testing-types/en/requirements-analysis/README.md)

### Testing

- [Functional Testing](../../testing-types/en/functional-testing/README.md)
- [Performance Testing](../../testing-types/en/performance-testing/README.md)
- [Security Testing](../../testing-types/en/security-testing/README.md)
- [Accessibility Testing](../../testing-types/en/accessibility-testing/README.md)

### Assessment

- [Test Reporting](../../testing-types/en/test-reporting/README.md)

---

## 📚 Related Workflows

- [Daily Testing Workflow](daily-testing-workflow_EN.md) - Day-to-day activities
- [Sprint Testing Workflow](sprint-testing-workflow_EN.md) - Sprint cycle

---

**Remember**: Release quality is everyone's responsibility. When in doubt, delay the release!
