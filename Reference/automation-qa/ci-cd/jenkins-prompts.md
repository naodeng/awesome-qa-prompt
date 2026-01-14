# Jenkins Pipeline Prompts

## 1. Declarative Pipeline for Testing

```
Create a Jenkins declarative pipeline for:

Project: [PROJECT_NAME]
Test Framework: [FRAMEWORK]
Build Tool: [MAVEN/GRADLE/NPM]
Environment: [DOCKER/VM]

Include:
- Agent configuration
- Environment variables
- Build stage
- Test stage
- Report generation
- Notifications
```

## Example Jenkins Pipeline

```groovy
pipeline {
    agent any
    
    environment {
        TEST_ENV = 'staging'
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/user/repo.git'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Generate Report') {
            steps {
                publishHTML([
                    reportDir: 'test-results',
                    reportFiles: 'index.html',
                    reportName: 'Test Report'
                ])
            }
        }
    }
    
    post {
        always {
            junit 'test-results/**/*.xml'
        }
        failure {
            emailext (
                subject: "Build Failed: ${env.JOB_NAME}",
                body: "Build failed. Check console output.",
                to: 'team@example.com'
            )
        }
    }
}
```

## Best Practices

1. **Declarative Syntax**: Use declarative over scripted
2. **Parallel Execution**: Run tests in parallel
3. **Docker Agents**: Use Docker for consistency
4. **Credentials**: Use Jenkins credentials store
5. **Post Actions**: Handle success/failure scenarios
