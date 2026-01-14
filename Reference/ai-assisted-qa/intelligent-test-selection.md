# Intelligent Test Selection Prompts

## 1. Risk-Based Test Selection

```
Design AI-powered test selection system:

Inputs:
- Code changes (Git diff)  
- Historical test results
- Code coverage data
- Defect density per module
- Recent production issues

Output:
- Prioritized test list
- Risk score per test
- Recommended test subset
- Execution time estimate

Strategy:
- Run high-risk tests first
- Skip low-impact tests
- Predict failure probability
- Optimize for time/coverage balance
```

## 2. Predictive Test Failure Analysis

```
Build ML model to predict test failures:

Training Data:
- Historical test results
- Code complexity metrics
- Developer activity
- Time of day patterns
- Environment variables

Features:
- Test flakiness score
- Failure prediction confidence
- Root cause categorization
- Similar failure grouping

Use for:
- Pre-run failure prediction
- Resource allocation
- Notification prioritization
```

## Example: ML-Based Test Selector

```python
import sklearn
from sklearn.ensemble import RandomForestClassifier
import git

class IntelligentTestSelector:
    def __init__(self, repo_path):
        self.repo = git.Repo(repo_path)
        self.model = self._load_model()
        self.test_history = self._load_history()
    
    def select_tests(self, changed_files, max_duration_minutes=30):
        # Get all available tests
        all_tests = self._get_all_tests()
        
        # Calculate risk score for each test
        test_scores = []
        for test in all_tests:
            features = self._extract_features(test, changed_files)
            risk_score = self.model.predict_proba([features])[0][1]
            
            test_scores.append({
                'name': test.name,
                'risk_score': risk_score,
                'duration': test.avg_duration,
                'last_failure': test.last_failure_date
            })
        
        # Sort by risk score (descending)
        test_scores.sort(key=lambda x: x['risk_score'], reverse=True)
        
        # Select tests within time budget
        selected = []
        total_time = 0
        
        for test in test_scores:
            if total_time + test['duration'] <= max_duration_minutes * 60:
                selected.append(test)
                total_time += test['duration']
        
        return selected
    
    def _extract_features(self, test, changed_files):
        return [
            len(set(test.covered_files) & set(changed_files)),  # Overlap
            test.failure_rate_last_30_days,
            test.avg_duration,
            test.code_complexity,
            test.days_since_last_change,
            len(test.dependencies)
        ]
    
    def _get_impact_analysis(self, changed_files):
        # Analyze which tests are affected by code changes
        affected_tests = {}
        
        for file in changed_files:
            # Find tests that cover this file
            tests = self._find_tests_covering_file(file)
            
            for test in tests:
                if test not in affected_tests:
                    affected_tests[test] = {
                        'impact_score': 0,
                        'affected_files': []
                    }
                
                affected_tests[test]['impact_score'] += 1
                affected_tests[test]['affected_files'].append(file)
        
        return affected_tests
```

## Best Practices

1. **Baseline**: Always run smoke tests
2. **Feedback Loop**: Update model with results
3. **Override**: Allow manual test selection
4. **Transparency**: Show selection reasoning
5. **Metrics**: Track selection effectiveness
```
