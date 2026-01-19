# Defect Prediction Models Prompts

## 1. AI-Powered Defect Prediction

```
Build defect prediction model:

Data Sources:
- Historical defects
- Code metrics (complexity, churn)
- Test coverage
- Developer experience
- Code review feedback
- Static analysis results

Predictions:
- Defect-prone modules
- Severity likelihood
- Time to fix estimates
- Testing effort required

Output:
- Risk heatmap
- Recommended test focus areas
- Quality gates
```

## 2. Pattern Recognition for Bug Types

```
Train model to recognize bug patterns:

Categories:
- UI/UX issues
- Performance problems
- Security vulnerabilities
- Data integrity
- Integration failures
- Race conditions

Learn from:
- Bug descriptions
- Stack traces
- Code changes
- User reports

Predict:
- Bug type from symptoms
- Similar historical bugs
- Suggested fixes
- Prevention strategies
```

## Example: Defect Prediction Model

```python
from sklearn.ensemble import GradientBoostingClassifier
import pandas as pd

class DefectPredictor:
    def __init__(self):
        self.model = GradientBoostingClassifier()
        self.feature_columns = [
            'lines_of_code',
            'cyclomatic_complexity',
            'code_churn_last_30_days',
            'number_of_developers',
            'test_coverage_percent',
            'number_of_dependencies',
            'days_since_last_defect',
            'static_analysis_violations'
        ]
    
    def train(self, historical_data):
        X = historical_data[self.feature_columns]
        y = historical_data['has_defect']  # 0 or 1
        
        self.model.fit(X, y)
    
    def predict_defect_probability(self, file_path):
        features = self._extract_features(file_path)
        probability = self.model.predict_proba([features])[0][1]
        
        return {
            'file': file_path,
            'defect_probability': probability,
            'risk_level': self._categorize_risk(probability),
            'recommended_actions': self._get_recommendations(probability, features)
        }
    
    def _categorize_risk(self, probability):
        if probability >= 0.7:
            return 'HIGH'
        elif probability >= 0.4:
            return 'MEDIUM'
        else:
            return 'LOW'
    
    def _get_recommendations(self, probability, features):
        recommendations = []
        
        if probability >= 0.7:
            recommendations.append('Mandatory code review by senior developer')
            recommendations.append('Add comprehensive unit tests')
            recommendations.append('Increase integration test coverage')
        
        if features[1] > 10:  # High complexity
            recommendations.append('Refactor to reduce complexity')
        
        if features[4] < 70:  # Low coverage
            recommendations.append('Increase test coverage to >80%')
        
        return recommendations

# Usage
predictor = DefectPredictor()
predictor.train(historical_defect_data)

prediction = predictor.predict_defect_probability('src/payment/checkout.py')
print(f"Defect probability: {prediction['defect_probability']:.2%}")
print(f"Risk level: {prediction['risk_level']}")
print("Recommendations:")
for rec in prediction['recommended_actions']:
    print(f"  - {rec}")
```

## Best Practices

1. **Data Quality**: Clean historical data
2. **Feature Engineering**: Select relevant metrics
3. **Continuous Learning**: Retrain with new data
4. **Actionable Insights**: Provide concrete recommendations
5. **Validation**: Track prediction accuracy
```
