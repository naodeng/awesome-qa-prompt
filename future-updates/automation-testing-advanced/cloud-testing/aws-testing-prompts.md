# AWS Testing Prompts

## 1. AWS EC2 Testing

```
Generate EC2 instance testing scenarios:

Instance Type: [T2/T3/M5/C5/R5]
OS: [AMAZON_LINUX/UBUNTU/WINDOWS]
Application: [APPLICATION_NAME]

Test scenarios:
1. Instance Provisioning
   - Launch instance with user data
   - Verify instance state (running)
   - Check instance metadata
   - Validate security group assignment
   - Verify IAM role attachment

2. Security Testing
   - Security group rules validation
   - Network ACL configuration
   - SSH/RDP key pair access
   - IMDSv2 enforcement
   - Encrypted EBS volumes

3. Performance Testing
   - CPU utilization under load
   - Memory usage monitoring
   - Network throughput testing
   - Disk I/O performance
   - Instance sizing validation

4. High Availability
   - Auto Scaling Group testing
   - Load Balancer health checks
   - Multi-AZ deployment
   - Instance recovery testing
   - Spot instance interruption handling

5. Monitoring and Logging
   - CloudWatch metrics collection
   - CloudWatch Logs integration
   - Custom metrics publication
   - Alarms and notifications
   - Systems Manager integration

Test with AWS CLI:
aws ec2 describe-instances --instance-ids i-1234567890abcdef0
aws ec2 run-instances --image-id ami-xxx --instance-type t2.micro
aws cloudwatch get-metric-statistics --namespace AWS/EC2

Generate:
- EC2 test plan
- Security validation checklist
- Performance benchmarks
- Automation scripts (Terraform/CloudFormation)
```

## 2. AWS S3 Testing

```
Create S3 bucket testing scenarios:

Bucket: [BUCKET_NAME]
Use Case: [STATIC_HOSTING/DATA_LAKE/BACKUPS]

Test scenarios:
1. Bucket Security
   - Block public access enabled
   - Bucket policies validation
   - ACL configuration
   - CORS settings
   - Versioning enabled
   - MFA Delete enabled

2. Encryption
   - Server-side encryption (SSE-S3/SSE-KMS/SSE-C)
   - Encryption in transit (HTTPS only)
   - Default encryption settings
   - KMS key rotation

3. Lifecycle Management
   - Transition rules to Glacier
   - Expiration policies
   - Incomplete multipart upload cleanup
   - Non-current version transitions

4. Performance Testing
   - Upload large files (multipart)
   - Download speed testing
   - List operations performance
   - Transfer Acceleration testing
   - CloudFront integration

5. Data Integrity
   - Object versioning testing
   - Cross-region replication
   - Same-region replication
   - Object Lock compliance
   - Checksums validation

Test with AWS CLI:
aws s3 ls s3://bucket-name
aws s3 cp file.txt s3://bucket-name/
aws s3api get-bucket-versioning --bucket bucket-name
aws s3api get-bucket-encryption --bucket bucket-name

Generate:
- S3 security checklist
- Bucket policy templates
- Lifecycle policy examples
- Replication test cases
```

## 3. AWS Lambda Testing

```
Generate Lambda function testing scenarios:

Function: [FUNCTION_NAME]
Runtime: [PYTHON/NODE/JAVA/GO]
Trigger: [API_GATEWAY/S3/DYNAMODB/SQS]

Test scenarios:
1. Function Execution
   - Cold start latency
   - Warm invocation performance
   - Timeout handling
   - Retry behavior
   - Error handling and logging

2. Integration Testing
   - API Gateway integration
   - S3 event triggers
   - DynamoDB Streams
   - SQS queue processing
   - EventBridge rules
   - Step Functions orchestration

3. Security Testing
   - IAM role permissions (least privilege)
   - VPC configuration
   - Environment variable encryption
   - Secrets Manager integration
   - Resource-based policies

4. Performance Testing
   - Concurrent execution limits
   - Memory configuration optimization
   - Execution time under load
   - Provisioned concurrency testing
   - Reserved concurrency testing

5. Error Handling
   - Exception handling
   - Dead letter queue (DLQ)
   - Destination configuration
   - Retry behavior
   - Error metrics and alarms

Test with AWS CLI and SDK:
aws lambda invoke --function-name my-function output.json
aws lambda update-function-code --function-name my-function --zip-file fileb://function.zip
aws lambda get-function-configuration --function-name my-function

Unit Testing:
```python
import boto3
import pytest
from moto import mock_lambda, mock_s3

@mock_lambda
@mock_s3
def test_lambda_function():
    # Mock AWS services
    lambda_client = boto3.client('lambda', region_name='us-east-1')

    # Create mock function
    lambda_client.create_function(
        FunctionName='test-function',
        Runtime='python3.9',
        Role='arn:aws:iam::123456789012:role/lambda-role',
        Handler='lambda_function.lambda_handler',
        Code={'ZipFile': b'fake code'}
    )

    # Test invocation
    response = lambda_client.invoke(
        FunctionName='test-function',
        InvocationType='RequestResponse'
    )

    assert response['StatusCode'] == 200
```

Generate:
- Lambda test suite
- Performance benchmarks
- IAM policy templates
- Integration test scenarios
```

## 4. AWS RDS Testing

```
Create RDS database testing scenarios:

Database: [MYSQL/POSTGRESQL/AURORA]
Deployment: [SINGLE_AZ/MULTI_AZ/AURORA_GLOBAL]

Test scenarios:
1. Database Provisioning
   - Instance creation
   - Parameter group configuration
   - Option group settings
   - Subnet group validation
   - Security group rules

2. High Availability
   - Multi-AZ failover testing
   - Read replica lag monitoring
   - Automatic backup verification
   - Point-in-time recovery
   - Snapshot restoration

3. Performance Testing
   - Query performance
   - Connection pooling
   - IOPS and throughput
   - Read replica load distribution
   - Aurora auto-scaling

4. Security Testing
   - Encryption at rest (KMS)
   - Encryption in transit (SSL/TLS)
   - IAM database authentication
   - Secrets Manager integration
   - Network isolation (VPC)
   - Security group rules

5. Backup and Recovery
   - Automated backup testing
   - Manual snapshot creation
   - Cross-region snapshot copy
   - Point-in-time recovery
   - Restore time validation

Test with AWS CLI:
aws rds describe-db-instances --db-instance-identifier mydb
aws rds create-db-snapshot --db-instance-identifier mydb --db-snapshot-identifier snapshot1
aws rds restore-db-instance-from-db-snapshot --db-instance-identifier restored --db-snapshot-identifier snapshot1

Generate:
- RDS test plan
- Failover procedures
- Backup/restore validation
- Performance benchmarks
```

## 5. AWS API Gateway Testing

```
Generate API Gateway testing scenarios:

API: [API_NAME]
Type: [REST/HTTP/WEBSOCKET]
Integration: [LAMBDA/HTTP/MOCK]

Test scenarios:
1. Endpoint Testing
   - HTTP methods (GET, POST, PUT, DELETE)
   - Request/response validation
   - Query parameters handling
   - Path parameters validation
   - Headers processing

2. Authentication and Authorization
   - API key validation
   - Lambda authorizer testing
   - Cognito User Pool integration
   - IAM authentication
   - OAuth 2.0 / JWT validation

3. Throttling and Rate Limiting
   - Usage plans and API keys
   - Throttling limits testing
   - Burst capacity testing
   - Quota limits validation
   - 429 error handling

4. Integration Testing
   - Lambda proxy integration
   - Lambda custom integration
   - HTTP proxy/integration
   - Mock integrations
   - VPC Link for private resources

5. Performance and Caching
   - Cache configuration testing
   - Cache TTL validation
   - Cache key customization
   - Response compression
   - Latency measurement

6. Error Handling
   - Gateway responses customization
   - Error mapping templates
   - CORS configuration
   - Request validation
   - Response transformation

Test with tools:
- Postman/Newman for API testing
- curl for command-line testing
- Artillery/k6 for load testing

Example with curl:
curl -X GET "https://api-id.execute-api.region.amazonaws.com/prod/resource" \
  -H "x-api-key: YOUR_API_KEY"

Generate:
- API test collection (Postman)
- Load testing scenarios
- Authentication test cases
- Error handling validation
```

## 6. AWS DynamoDB Testing

```
Create DynamoDB testing scenarios:

Table: [TABLE_NAME]
Capacity Mode: [PROVISIONED/ON_DEMAND]
Use Case: [SESSION_STORE/CACHE/TRANSACTIONAL]

Test scenarios:
1. CRUD Operations
   - PutItem with various data types
   - GetItem with partition and sort keys
   - UpdateItem with expressions
   - DeleteItem
   - BatchGetItem and BatchWriteItem
   - Query and Scan operations

2. Performance Testing
   - Read/write capacity units
   - Throughput testing
   - Auto-scaling validation
   - On-demand capacity handling
   - DAX caching layer

3. Indexing
   - Global Secondary Index (GSI) queries
   - Local Secondary Index (LSI) queries
   - Projection types testing
   - Index backfilling monitoring
   - Sparse index validation

4. Transactions
   - TransactWriteItems testing
   - TransactGetItems testing
   - Conditional expressions
   - Optimistic locking
   - Atomicity validation

5. Streams and CDC
   - DynamoDB Streams enablement
   - Stream records processing
   - Lambda trigger integration
   - Kinesis Data Streams integration
   - Change data capture scenarios

6. Backup and Recovery
   - On-demand backups
   - Point-in-time recovery (PITR)
   - Restore to new table
   - Cross-region replication (Global Tables)

Test with AWS CLI:
aws dynamodb put-item --table-name MyTable --item '{" ID": {"S": "123"}}'
aws dynamodb get-item --table-name MyTable --key '{"ID": {"S": "123"}}'
aws dynamodb query --table-name MyTable --key-condition-expression "ID = :id"

Generate:
- DynamoDB test suite
- Data modeling validation
- Performance benchmarks
- Backup/restore procedures
```

## 7. AWS CloudFormation/IaC Testing

```
Generate Infrastructure as Code testing scenarios:

Template: [CLOUDFORMATION/CDK/TERRAFORM]
Resources: [LIST_RESOURCES]

Test scenarios:
1. Template Validation
   - Syntax validation
   - cfn-lint for CloudFormation
   - terraform validate
   - Parameter validation
   - Resource dependencies

2. Stack Deployment
   - Stack creation testing
   - Update stack testing
   - Rollback scenarios
   - Change set validation
   - Drift detection

3. Resource Testing
   - All resources created successfully
   - Properties configured correctly
   - Tags applied
   - Outputs generated
   - Cross-stack references work

4. Security Testing
   - IAM roles and policies
   - Security group rules
   - Encryption settings
   - Public access blocked
   - Secrets handling

5. Cost Optimization
   - Resource sizing appropriate
   - Reserved instances utilized
   - Unused resources identified
   - Cost allocation tags

Test with tools:
- cfn-lint (CloudFormation linting)
- taskcat (multi-region testing)
- terraform plan/apply
- AWS CDK unit tests

Example CDK test:
```typescript
import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as MyStack from '../lib/my-stack';

test('S3 Bucket Created', () => {
  const app = new cdk.App();
  const stack = new MyStack.MyStack(app, 'MyTestStack');

  expectCDK(stack).to(haveResource('AWS::S3::Bucket', {
    BucketEncryption: {
      ServerSideEncryptionConfiguration: [{
        ServerSideEncryptionByDefault: {
          SSEAlgorithm: 'AES256'
        }
      }]
    }
  }));
});
```

Generate:
- IaC testing strategy
- Template validation scripts
- Multi-environment testing
- Rollback procedures
```

## 8. AWS ECS/EKS Container Testing

```
Create container orchestration testing scenarios:

Service: [ECS/EKS]
Container Image: [IMAGE_NAME]
Deployment: [FARGATE/EC2]

Test scenarios:
1. Container Deployment
   - Task definition validation
   - Service creation
   - Container health checks
   - Image pull from ECR
   - Resource allocation

2. Networking
   - VPC configuration
   - Security groups
   - Service discovery (Cloud Map)
   - Load balancer integration
   - Ingress/egress rules

3. Scaling
   - Auto-scaling policies
   - Target tracking scaling
   - Scale-out and scale-in
   - Spot instance integration (ECS)
   - Horizontal Pod Autoscaling (EKS)

4. High Availability
   - Multi-AZ deployment
   - Rolling updates
   - Blue/green deployments
   - Health check configuration
   - Failure recovery

5. Security
   - IAM task roles
   - Secrets Manager integration
   - Systems Manager Parameter Store
   - Image vulnerability scanning
   - Network policies (EKS)

6. Logging and Monitoring
   - CloudWatch Logs integration
   - Container Insights
   - Application logs
   - X-Ray tracing
   - Prometheus metrics (EKS)

Test with CLI:
ECS:
aws ecs create-cluster --cluster-name my-cluster
aws ecs run-task --cluster my-cluster --task-definition my-task

EKS:
kubectl apply -f deployment.yaml
kubectl get pods
kubectl logs pod-name

Generate:
- Container test suite
- Deployment strategies
- Scaling validation
- Security checklist
```

## 9. AWS Security Testing with AWS Tools

```
Generate AWS security testing scenarios:

Account: [ACCOUNT_ID]
Services: [LIST_SERVICES]

Test scenarios:
1. IAM Security
   - Least privilege validation
   - MFA enforcement
   - Access key rotation
   - Password policy compliance
   - Service control policies (SCPs)

2. Network Security
   - Security group audit
   - Network ACL validation
   - VPC flow logs enabled
   - GuardDuty findings
   - WAF rules testing

3. Data Protection
   - S3 bucket encryption
   - RDS encryption at rest
   - EBS volume encryption
   - KMS key policies
   - Secrets Manager usage

4. Compliance
   - AWS Config rules
   - Security Hub findings
   - Trusted Advisor checks
   - CloudTrail logging
   - Compliance frameworks (PCI, HIPAA)

5. Vulnerability Management
   - Inspector assessment
   - Systems Manager Patch Manager
   - Container image scanning
   - Lambda vulnerability scanning
   - Dependency scanning

Tools:
- AWS Security Hub
- AWS Config
- Amazon Inspector
- AWS GuardDuty
- AWS IAM Access Analyzer
- Prowler (open-source)
- ScoutSuite
- CloudMapper

Run Prowler:
./prowler -M csv,html -f us-east-1

Generate:
- Security audit report
- Compliance checklist
- Remediation playbook
- Automated scanning scripts
```

## 10. AWS Well-Architected Framework Testing

```
Create Well-Architected Framework review:

Workload: [WORKLOAD_NAME]
Pillars: [OPERATIONAL_EXCELLENCE/SECURITY/RELIABILITY/PERFORMANCE/COST]

Test scenarios for each pillar:

1. Operational Excellence
   - IaC usage (CloudFormation/Terraform)
   - CI/CD pipeline implementation
   - Monitoring and logging
   - Incident response procedures
   - Operational readiness review

2. Security
   - Identity and access management
   - Detective controls
   - Infrastructure protection
   - Data protection
   - Incident response

3. Reliability
   - Workload architecture (multi-AZ, multi-region)
   - Change management processes
   - Failure management
   - Backup and disaster recovery
   - RTO/RPO validation

4. Performance Efficiency
   - Architecture selection validation
   - Compute resource optimization
   - Storage optimization
   - Database optimization
   - Network optimization

5. Cost Optimization
   - Right-sizing analysis
   - Reserved instances/Savings Plans
   - Unused resource identification
   - Cost allocation and tracking
   - Budget alerts

Use AWS WA Tool:
- Create workload in WA Tool
- Answer questions for each pillar
- Review identified risks
- Implement improvement plans
- Track remediation progress

Generate:
- WA review report
- Risk assessment matrix
- Improvement backlog
- Cost optimization recommendations
```

## Best Practices

1. **Use AWS SDK and CLI**
   - Automate testing with boto3 (Python), AWS SDK for Java/JavaScript
   - Use AWS CLI for quick validations
   - Implement retry logic and error handling

2. **Mock AWS Services**
   - Use moto for Python tests
   - LocalStack for local development
   - AWS SAM for Lambda local testing

3. **Test in Non-Production**
   - Separate AWS accounts for environments
   - Use AWS Organizations for account management
   - Tag resources for identification

4. **Security First**
   - Test with least privilege
   - Never commit credentials
   - Use IAM roles and temporary credentials
   - Enable CloudTrail logging

5. **Cost Management**
   - Clean up test resources
   - Use resource tagging
   - Set up budget alerts
   - Monitor costs regularly

## Tools and Frameworks

- **Testing**: pytest, unittest, JUnit, Postman, Newman
- **IaC**: CloudFormation, Terraform, AWS CDK, Pulumi
- **Security**: Prowler, ScoutSuite, AWS Security Hub, CloudMapper
- **Performance**: Artillery, k6, JMeter, Locust
- **Mocking**: moto (Python), LocalStack
- **CI/CD**: AWS CodePipeline, GitHub Actions, Jenkins

## AWS Testing Checklist

- [ ] IAM roles and policies validated
- [ ] Security groups properly configured
- [ ] Encryption enabled (at rest and in transit)
- [ ] Monitoring and logging configured
- [ ] Backup and disaster recovery tested
- [ ] Auto-scaling policies validated
- [ ] High availability implemented
- [ ] Performance benchmarks established
- [ ] Cost optimization reviewed
- [ ] Compliance requirements met
- [ ] Documentation updated
- [ ] Runbooks created
