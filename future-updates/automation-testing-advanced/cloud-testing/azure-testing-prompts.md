# Azure Testing Prompts

## 1. Azure Virtual Machines Testing

```
Generate Azure VM testing scenarios:

VM Size: [B_SERIES/D_SERIES/F_SERIES]
OS: [WINDOWS_SERVER/UBUNTU/RHEL]
Region: [REGION_NAME]

Test scenarios:
1. VM Provisioning
   - Create VM via Portal/CLI/ARM template
   - Verify VM state and properties
   - Validate network configuration
   - Check disk attachment
   - Verify extensions installed

2. Security Testing
   - Network Security Groups (NSG) rules
   - Azure Bastion connection
   - Just-in-Time VM Access
   - Disk encryption (Azure Disk Encryption)
   - Managed identity assignment

3. High Availability
   - Availability Sets testing
   - Availability Zones deployment
   - VM Scale Sets auto-scaling
   - Load Balancer integration
   - Azure Site Recovery

4. Backup and Recovery
   - Azure Backup configuration
   - Backup policy validation
   - Restore VM testing
   - Snapshot creation
   - Disaster recovery drills

Test with Azure CLI:
az vm create --resource-group myRG --name myVM --image UbuntuLTS
az vm list --resource-group myRG
az vm start --resource-group myRG --name myVM

Generate:
- VM deployment checklist
- Security hardening guide
- DR runbook
- Performance baselines
```

## 2. Azure App Service Testing

```
Create Azure App Service testing scenarios:

App Type: [WEB_APP/API_APP/FUNCTION_APP]
Runtime: [.NET/NODE/PYTHON/JAVA]
Pricing Tier: [FREE/BASIC/STANDARD/PREMIUM]

Test scenarios:
1. Deployment Testing
   - Deploy via Git, GitHub Actions, Azure DevOps
   - Deployment slots (staging, production)
   - Slot swap testing
   - Blue-green deployment
   - Container deployment

2. Scaling and Performance
   - Scale up (vertical)
   - Scale out (horizontal/auto-scale)
   - Load testing with Azure Load Testing
   - Application Insights monitoring
   - Response time validation

3. Security Testing
   - Authentication (Azure AD, social logins)
   - Authorization rules
   - TLS/SSL certificates
   - Custom domains
   - App Service Environment isolation

4. Networking
   - VNet integration
   - Private endpoints
   - Hybrid connections
   - Service endpoints
   - IP restrictions

5. Monitoring and Diagnostics
   - Application Insights telemetry
   - Log Stream
   - Diagnostic logs
   - Metrics and alerts
   - Health checks

Test with Azure CLI:
az webapp create --resource-group myRG --plan myPlan --name myApp
az webapp deployment source config --name myApp --resource-group myRG --repo-url https://github.com/user/repo
az webapp log tail --name myApp --resource-group myRG

Generate:
- App Service test plan
- Deployment pipeline validation
- Performance benchmarks
- Security configuration checklist
```

## 3. Azure Functions Testing

```
Generate Azure Functions testing scenarios:

Function: [HTTP_TRIGGER/TIMER_TRIGGER/BLOB_TRIGGER]
Runtime: [.NET/NODE/PYTHON/JAVA/POWERSHELL]
Plan: [CONSUMPTION/PREMIUM/DEDICATED]

Test scenarios:
1. Function Execution
   - Cold start latency
   - Execution time testing
   - Timeout handling
   - Retry policies
   - Durable Functions orchestration

2. Triggers and Bindings
   - HTTP trigger testing
   - Timer trigger validation
   - Blob storage trigger
   - Queue trigger
   - Event Hub/Event Grid
   - Cosmos DB binding

3. Integration Testing
   - API Management integration
   - Logic Apps workflow
   - Event Grid subscriptions
   - Service Bus messaging
   - SignalR real-time communication

4. Performance Testing
   - Concurrent execution
   - Scaling behavior
   - Premium plan performance
   - VNet integration impact
   - Private endpoints latency

Test locally with Azure Functions Core Tools:
func start
func new --template "HTTP trigger" --name MyFunction

Test with Postman/curl:
curl -X POST http://localhost:7071/api/MyFunction -d '{"name":"Azure"}'

Unit Testing:
```csharp
[Fact]
public async Task TestHttpTrigger()
{
    var request = new DefaultHttpRequest(new DefaultHttpContext());
    var logger = NullLoggerFactory.Instance.CreateLogger("Test");

    var response = await MyFunction.Run(request, logger);

    Assert.Equal(200, ((ObjectResult)response).StatusCode);
}
```

Generate:
- Function test suite
- Integration test scenarios
- Performance benchmarks
- Error handling validation
```

## 4. Azure SQL Database Testing

```
Create Azure SQL Database testing scenarios:

Database: [SINGLE/ELASTIC_POOL/MANAGED_INSTANCE]
Tier: [BASIC/STANDARD/PREMIUM/HYPERSCALE]

Test scenarios:
1. Database Provisioning
   - Create database
   - Configure DTU/vCore
   - Set collation
   - Configure backup retention
   - Geo-replication setup

2. Performance Testing
   - Query performance
   - Index optimization
   - Query Store analysis
   - Automatic tuning validation
   - Connection pooling

3. High Availability
   - Active geo-replication
   - Auto-failover groups
   - Read scale-out testing
   - Zone redundancy
   - Business continuity validation

4. Security Testing
   - Transparent Data Encryption (TDE)
   - Always Encrypted columns
   - Dynamic data masking
   - Row-level security
   - Azure AD authentication
   - Firewall rules

5. Backup and Recovery
   - Automated backups
   - Point-in-time restore
   - Long-term retention
   - Geo-restore testing
   - Database copy

Test with Azure CLI:
az sql server create --name myserver --resource-group myRG
az sql db create --name mydb --server myserver --resource-group myRG
az sql db show-connection-string --name mydb --server myserver

Generate:
- Database test plan
- Security checklist
- Failover procedures
- Performance tuning guide
```

## 5. Azure Storage Testing

```
Generate Azure Storage testing scenarios:

Storage Type: [BLOB/FILE/QUEUE/TABLE]
Redundancy: [LRS/GRS/RA_GRS/ZRS]

Test scenarios:
1. Blob Storage Testing
   - Upload/download performance
   - Block blobs vs Page blobs vs Append blobs
   - Blob tiers (Hot/Cool/Archive)
   - Blob versioning
   - Soft delete testing
   - Static website hosting

2. Access Control
   - Shared Access Signatures (SAS)
   - Stored access policies
   - Azure AD authentication
   - Anonymous public access
   - Role-based access control (RBAC)

3. Data Protection
   - Encryption at rest
   - Encryption in transit
   - Customer-managed keys (CMK)
   - Immutable storage
   - Legal hold

4. Performance Testing
   - Large file uploads
   - Concurrent operations
   - CDN integration
   - Bandwidth throttling
   - Latency measurements

5. Lifecycle Management
   - Lifecycle policies
   - Tier transitions
   - Deletion policies
   - Snapshot management

Test with Azure CLI:
az storage account create --name mystorageaccount --resource-group myRG
az storage blob upload --account-name mystorageaccount --container-name mycontainer --file myfile.txt
az storage blob list --account-name mystorageaccount --container-name mycontainer

Generate:
- Storage test scenarios
- Access policy templates
- Performance benchmarks
- Lifecycle policy examples
```

## 6. Azure Kubernetes Service (AKS) Testing

```
Create AKS testing scenarios:

Cluster: [CLUSTER_NAME]
Node Pool: [SYSTEM/USER]
Network Plugin: [KUBENET/AZURE_CNI]

Test scenarios:
1. Cluster Provisioning
   - Cluster creation
   - Node pool configuration
   - Networking setup
   - Azure AD integration
   - Azure Policy addon

2. Application Deployment
   - Pod deployment
   - Service exposure (LoadBalancer/ClusterIP)
   - Ingress controller setup
   - ConfigMaps and Secrets
   - Persistent volumes

3. Scaling Testing
   - Horizontal Pod Autoscaler (HPA)
   - Vertical Pod Autoscaler (VPA)
   - Cluster autoscaler
   - Node pool scaling
   - Multi-zone deployment

4. Security Testing
   - Pod security policies
   - Network policies
   - Azure Key Vault integration
   - Container scanning (Azure Container Registry)
   - Azure Policy compliance

5. Monitoring and Logging
   - Container Insights
   - Prometheus and Grafana
   - Log Analytics integration
   - Application Insights
   - Alerting rules

Test with kubectl:
kubectl apply -f deployment.yaml
kubectl get pods
kubectl scale deployment myapp --replicas=5
kubectl autoscale deployment myapp --cpu-percent=50 --min=1 --max=10

Generate:
- AKS deployment checklist
- Security baseline
- Scaling validation tests
- Monitoring setup guide
```

## 7. Azure DevOps Pipeline Testing

```
Generate Azure DevOps CI/CD testing scenarios:

Pipeline: [BUILD/RELEASE/MULTI-STAGE]
Repository: [AZURE_REPOS/GITHUB]

Test scenarios:
1. Build Pipeline Testing
   - Source control integration
   - Build triggers (CI)
   - Build agents (Microsoft-hosted/Self-hosted)
   - Parallel jobs
   - Build artifacts

2. Testing in Pipeline
   - Unit tests execution
   - Code coverage
   - Integration tests
   - Load tests with Azure Load Testing
   - Security scanning (WhiteSource, SonarQube)

3. Release Pipeline Testing
   - Deployment stages
   - Approval gates
   - Environment-specific variables
   - Deployment slots
   - Rollback procedures

4. Infrastructure as Code
   - ARM templates validation
   - Bicep deployment
   - Terraform integration
   - Deployment what-if analysis

Example azure-pipelines.yml:
```yaml
trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

stages:
  - stage: Build
    jobs:
      - job: BuildJob
        steps:
          - task: DotNetCoreCLI@2
            inputs:
              command: 'build'

  - stage: Test
    jobs:
      - job: TestJob
        steps:
          - task: DotNetCoreCLI@2
            inputs:
              command: 'test'

  - stage: Deploy
    jobs:
      - deployment: DeployJob
        environment: 'production'
        strategy:
          runOnce:
            deploy:
              steps:
                - task: AzureWebApp@1
                  inputs:
                    azureSubscription: 'MySubscription'
                    appName: 'mywebapp'
```

Generate:
- Pipeline test scenarios
- Deployment validation
- Approval workflow tests
- Rollback procedures
```

## 8. Azure Cosmos DB Testing

```
Create Cosmos DB testing scenarios:

API: [SQL/MONGODB/CASSANDRA/GREMLIN/TABLE]
Consistency Level: [STRONG/BOUNDED/SESSION/CONSISTENT_PREFIX/EVENTUAL]

Test scenarios:
1. Database Operations
   - Create database and containers
   - CRUD operations
   - Query performance
   - Stored procedures
   - Triggers and UDFs

2. Partition Strategy Testing
   - Partition key selection validation
   - Hot partition detection
   - Cross-partition queries
   - Partition key changes

3. Performance Testing
   - Request Units (RU) consumption
   - Throughput provisioning
   - Auto-scale validation
   - Latency measurements
   - Indexing policy optimization

4. Global Distribution
   - Multi-region writes
   - Read replica configuration
   - Consistency level testing
   - Conflict resolution
   - Failover testing

5. Backup and Recovery
   - Continuous backup
   - Point-in-time restore
   - Periodic backup
   - Restore to different account

Test with Azure CLI:
az cosmosdb create --name mycosmosdb --resource-group myRG
az cosmosdb sql database create --account-name mycosmosdb --name mydb --resource-group myRG
az cosmosdb sql container create --account-name mycosmosdb --database-name mydb --name mycontainer --partition-key-path "/id"

Generate:
- Cosmos DB test plan
- Partition strategy validation
- Performance benchmarks
- Disaster recovery procedures
```

## 9. Azure Security Testing

```
Generate Azure security testing scenarios:

Subscription: [SUBSCRIPTION_ID]
Resources: [LIST_RESOURCES]

Test scenarios:
1. Identity and Access
   - Azure AD configuration
   - Conditional Access policies
   - MFA enforcement
   - Privileged Identity Management (PIM)
   - Service principals and managed identities

2. Network Security
   - NSG rules audit
   - Azure Firewall configuration
   - DDoS Protection
   - Web Application Firewall (WAF)
   - Private Link and Private Endpoints

3. Data Protection
   - Azure Key Vault usage
   - Encryption at rest
   - TLS/SSL certificates
   - Disk encryption
   - Transparent Data Encryption (TDE)

4. Threat Protection
   - Microsoft Defender for Cloud
   - Security alerts
   - Vulnerability assessment
   - Just-in-Time VM access
   - Adaptive application controls

5. Compliance
   - Azure Policy compliance
   - Regulatory compliance dashboard
   - Security benchmarks (CIS, NIST)
   - Audit logs (Azure Monitor)
   - Compliance Manager

Tools:
- Microsoft Defender for Cloud
- Azure Policy
- Azure Security Benchmark
- ScoutSuite (open-source)
- Prowler for Azure

Generate:
- Security audit report
- Compliance checklist
- Remediation playbook
- Policy assignments
```

## 10. Azure Cost Optimization Testing

```
Create cost optimization testing scenarios:

Subscription: [SUBSCRIPTION_ID]
Workload: [WORKLOAD_NAME]

Test scenarios:
1. Resource Right-Sizing
   - VM size recommendations
   - Database tier optimization
   - App Service plan sizing
   - Storage tier selection

2. Commitment-Based Savings
   - Reserved Instances analysis
   - Azure Hybrid Benefit usage
   - Savings Plans evaluation
   - Dev/Test pricing

3. Unused Resources
   - Unattached disks
   - Unused public IPs
   - Idle VMs
   - Empty resource groups
   - Orphaned snapshots

4. Cost Management
   - Budgets and alerts
   - Cost allocation tags
   - Departmental chargebacks
   - Resource group budgets
   - Cost anomaly detection

5. Optimization Tools
   - Azure Advisor recommendations
   - Cost Management + Billing
   - Azure Pricing Calculator
   - Total Cost of Ownership (TCO) calculator

Test with Azure CLI:
az consumption usage list --start-date 2024-01-01 --end-date 2024-01-31
az advisor recommendation list --category Cost

Generate:
- Cost optimization report
- Savings recommendations
- Resource tagging strategy
- Budget alerts configuration
```

## Best Practices

1. **Use Azure CLI and PowerShell**
   - Automate with Azure CLI
   - Use PowerShell for Windows environments
   - Implement error handling

2. **Test in Non-Production**
   - Separate subscriptions for environments
   - Use management groups
   - Apply resource locks

3. **Infrastructure as Code**
   - ARM templates or Bicep
   - Terraform for multi-cloud
   - Version control all templates

4. **Security First**
   - Use managed identities
   - Azure Key Vault for secrets
   - Enable Azure Policy
   - Regular security audits

5. **Cost Management**
   - Tag all resources
   - Set up budgets
   - Review Advisor recommendations
   - Clean up test resources

## Tools and Frameworks

- **Testing**: Azure DevTest Labs, Postman, JMeter
- **IaC**: ARM Templates, Bicep, Terraform, Pulumi
- **Security**: Microsoft Defender for Cloud, ScoutSuite
- **Monitoring**: Azure Monitor, Application Insights
- **Cost**: Azure Cost Management, Azure Advisor

## Azure Testing Checklist

- [ ] Azure AD and RBAC configured
- [ ] Network security groups validated
- [ ] Encryption enabled
- [ ] Monitoring and alerting configured
- [ ] Backup and DR tested
- [ ] Auto-scaling validated
- [ ] High availability implemented
- [ ] Performance benchmarked
- [ ] Cost optimization reviewed
- [ ] Compliance requirements met
- [ ] Documentation complete
