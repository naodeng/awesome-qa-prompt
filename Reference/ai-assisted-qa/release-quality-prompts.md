# Release Quality Assessment Prompts

## 1. Go/No-Go Decision Support

```
Help me assess release readiness for:

Release Version: [VERSION]
Release Date: [DATE]
Test Coverage: [PERCENTAGE]
Open Defects: [COUNT_BY_SEVERITY]
Test Execution: [PASS_RATE]
Known Issues: [DESCRIBE]

Provide:
- Risk assessment
- Quality metrics analysis
- Go/No-Go recommendation
- Mitigation strategies for identified risks
- Conditions for go-live
```

## 2. Release Quality Metrics Analysis

```
Analyze release quality metrics for:

Metrics:
- Test Coverage: [PERCENTAGE]
- Defect Density: [NUMBER]
- Test Pass Rate: [PERCENTAGE]
- Automation Coverage: [PERCENTAGE]
- Code Coverage: [PERCENTAGE]
- Performance Benchmarks: [METRICS]

Provide:
- Metrics interpretation
- Comparison to targets
- Areas of concern
- Quality trends
- Recommendations
```

## 3. Post-Release Quality Assessment

```
Assess post-release quality for:

Release: [VERSION]
Release Date: [DATE]
Production Issues: [COUNT_AND_SEVERITY]
User Feedback: [SUMMARY]
Performance Metrics: [DATA]

Analyze:
- Release success criteria
- Production incident analysis
- User satisfaction
- Performance in production
- Lessons learned
- Improvements for next release
```

## Best Practices

1. **Data-Driven**: Base decisions on metrics
2. **Risk-Based**: Assess risks objectively
3. **Stakeholder Input**: Get input from all stakeholders
4. **Clear Criteria**: Define go/no-go criteria upfront
5. **Documentation**: Document decision rationale
6. **Continuous Improvement**: Learn from each release
