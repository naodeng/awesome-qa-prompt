# CI/CD Pipeline Prompts

## 1. Azure DevOps Pipeline

```yaml
trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '18.x'
  
- script: npm ci
  displayName: 'Install dependencies'

- script: npm test
  displayName: 'Run tests'

- task: PublishTestResults@2
  inputs:
    testResultsFormat: 'JUnit'
    testResultsFiles: '**/test-results.xml'
```

## 2. GitLab CI/CD

```yaml
stages:
  - test

test:
  stage: test
  image: node:18
  script:
    - npm ci
    - npm test
  artifacts:
    reports:
      junit: test-results.xml
```

## Best Practices

1. **Version Control**: Store pipelines in repo
2. **Environment Separation**: Use different environments
3. **Secrets Management**: Use secure variables
4. **Caching**: Cache dependencies
5. **Notifications**: Alert on failures
