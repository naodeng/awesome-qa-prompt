# AI-Assisted Risk Analysis Prompts

## 1. Feature Risk Prediction

```
Analyze potential risks for this new feature using historical data:

Feature: [FEATURE_NAME]
Description: [FEATURE_DESCRIPTION]
Technology Stack: [TECHNOLOGIES]
Team Experience: [EXPERIENCE_LEVEL]
Timeline: [DURATION]
Dependencies: [LIST_DEPENDENCIES]

Historical Context:
- Similar features in the past: [DESCRIBE]
- Past issues encountered: [DESCRIBE]
- Team velocity: [METRICS]

Predict:
- Likelihood of delays
- Technical risks
- Integration challenges
- Quality risks
- Recommended mitigation strategies
```

## 2. Defect Prediction

```
Based on code changes and historical defect patterns, predict defect-prone areas:

Code Changes:
- Files modified: [LIST_FILES]
- Lines of code changed: [NUMBER]
- Complexity metrics: [CYCLOMATIC_COMPLEXITY]
- Code churn: [FREQUENCY_OF_CHANGES]

Historical Data:
- Defect density in similar modules: [METRICS]
- Common failure patterns: [PATTERNS]
- Developer experience: [LEVEL]

Predict:
- High-risk areas requiring extra testing
- Likely defect types
- Recommended test coverage
- Focus areas for code review
```

## 3. Release Risk Assessment

```
Assess release risk using multiple data points:

Release Information:
- Version: [VERSION]
- Changes: [MAJOR/MINOR/PATCH]
- Test coverage: [PERCENTAGE]
- Automation coverage: [PERCENTAGE]
- Code coverage: [PERCENTAGE]

Quality Metrics:
- Open defects: [COUNT_BY_SEVERITY]
- Test pass rate: [PERCENTAGE]
- Performance benchmarks: [METRICS]
- Security scan results: [FINDINGS]

Historical Data:
- Previous release issues: [DESCRIBE]
- Production incidents: [FREQUENCY]
- Rollback history: [INSTANCES]

Provide:
- Overall risk score (1-10)
- Risk breakdown by category
- Go/No-Go recommendation
- Mitigation strategies
- Monitoring recommendations
```

## Best Practices

1. **Data-Driven**: Use historical data and metrics
2. **Machine Learning**: Leverage ML models for predictions
3. **Continuous Learning**: Update models with new data
4. **Multiple Factors**: Consider various risk indicators
5. **Actionable Insights**: Provide specific recommendations
6. **Transparency**: Explain reasoning behind predictions
