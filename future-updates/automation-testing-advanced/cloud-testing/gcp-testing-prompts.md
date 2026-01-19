# GCP (Google Cloud Platform) Testing Prompts

## 1. Google Compute Engine (GCE) Testing

```
Generate GCE instance testing scenarios:

Machine Type: [N1/N2/E2/C2/M1]
OS: [DEBIAN/UBUNTU/CENTOS/WINDOWS]
Region: [US_CENTRAL1/EUROPE_WEST1]

Test scenarios:
1. Instance Provisioning
   - Create instance via gcloud/Console/Terraform
   - Verify instance metadata
   - Startup scripts validation
   - Service account assignment
   - Custom machine types

2. Security Testing
   - Firewall rules validation
   - VPC network configuration
   - OS Login configuration
   - Shielded VM validation
   - Confidential computing

3. High Availability
   - Instance groups (managed/unmanaged)
   - Auto-scaling policies
   - Load balancer integration
   - Multi-zone deployment
   - Health checks

4. Persistent Disks
   - Standard vs SSD persistent disks
   - Disk snapshots
   - Regional persistent disks
   - Disk encryption
   - Performance testing

Test with gcloud:
gcloud compute instances create my-instance --zone=us-central1-a --machine-type=n1-standard-1
gcloud compute instances list
gcloud compute instances describe my-instance --zone=us-central1-a

Generate:
- GCE deployment checklist
- Security hardening guide
- HA configuration
- Performance baselines
```

## 2. Google Cloud Storage Testing

```
Create Cloud Storage testing scenarios:

Bucket: [BUCKET_NAME]
Storage Class: [STANDARD/NEARLINE/COLDLINE/ARCHIVE]
Location: [REGION/MULTI_REGION]

Test scenarios:
1. Bucket Management
   - Create bucket with specific location and storage class
   - Bucket lifecycle policies
   - Versioning
   - Retention policies
   - Bucket Lock

2. Access Control
   - IAM permissions (roles and members)
   - Bucket-level vs object-level permissions
   - Signed URLs
   - Public access prevention
   - Uniform vs fine-grained access control

3. Data Protection
   - Encryption at rest (Google-managed/customer-managed)
   - Customer-managed encryption keys (CMEK)
   - Object versioning
   - Soft delete
   - Object holds

4. Performance Testing
   - Upload large files (multipart)
   - Download speed
   - Parallel uploads/downloads
   - Transfer acceleration
   - CDN integration (Cloud CDN)

5. Cross-Region Replication
   - Dual-region buckets
   - Transfer Service
   - gsutil rsync
   - Object lifecycle transitions

Test with gsutil:
gsutil mb -l us-central1 -c standard gs://my-bucket
gsutil cp file.txt gs://my-bucket/
gsutil ls gs://my-bucket
gsutil versioning set on gs://my-bucket

Generate:
- Storage test plan
- Bucket policy templates
- Performance benchmarks
- Replication scenarios
```

## 3. Google Cloud Functions Testing

```
Generate Cloud Functions testing scenarios:

Function: [FUNCTION_NAME]
Runtime: [PYTHON/NODE/GO/JAVA/.NET]
Trigger: [HTTP/PUBSUB/STORAGE/FIRESTORE]

Test scenarios:
1. Function Execution
   - Cold start latency
   - Warm invocation
   - Timeout handling (max 540s for 2nd gen)
   - Retry behavior
   - Concurrency limits

2. Triggers and Events
   - HTTP triggers
   - Pub/Sub messages
   - Cloud Storage events
   - Firestore triggers
   - Firebase triggers
   - Eventarc integration

3. Networking
   - VPC connector
   - Egress settings
   - Ingress settings
   - Private Google Access
   - Serverless VPC Access

4. Security Testing
   - IAM permissions
   - Service account configuration
   - Invoker permissions
   - Secret Manager integration
   - Environment variables

5. Performance Testing
   - Concurrent executions
   - Memory configuration (128MB - 8GB)
   - CPU allocation
   - Max instances setting
   - Min instances (for 2nd gen)

Test with gcloud:
gcloud functions deploy my-function \
  --runtime python39 \
  --trigger-http \
  --allow-unauthenticated

gcloud functions call my-function --data '{"name":"GCP"}'

Unit Testing:
```python
import functions_framework
import pytest

@pytest.fixture
def client():
    from main import hello_http
    functions_framework._http_view_func_wrapper(hello_http, None)

def test_hello_http(client):
    request = {'name': 'GCP'}
    response = hello_http(request)
    assert 'Hello GCP' in response
```

Generate:
- Function test suite
- Integration tests
- Performance benchmarks
- Error handling validation
```

## 4. Google Cloud SQL Testing

```
Create Cloud SQL testing scenarios:

Database: [MYSQL/POSTGRESQL/SQL_SERVER]
Tier: [DB_F1_MICRO/DB_N1_STANDARD_1/DB_N1_HIGHMEM_2]
Availability: [ZONAL/REGIONAL]

Test scenarios:
1. Instance Provisioning
   - Create instance
   - Configure flags
   - Set maintenance window
   - Enable backups
   - Configure high availability

2. Performance Testing
   - Query performance
   - Connection pooling
   - Read replicas
   - Query insights
   - Performance monitoring

3. High Availability
   - Regional configuration (HA)
   - Read replicas
   - Cross-region replicas
   - Automatic failover testing
   - Point-in-time recovery

4. Security Testing
   - Private IP configuration
   - SSL/TLS enforcement
   - IAM database authentication
   - Authorized networks
   - Cloud SQL Proxy
   - Customer-managed encryption keys

5. Backup and Recovery
   - Automated backups
   - On-demand backups
   - Point-in-time recovery
   - Export/import operations
   - Clone instance

Test with gcloud:
gcloud sql instances create my-instance --database-version=MYSQL_8_0 --tier=db-n1-standard-1 --region=us-central1
gcloud sql databases create my-db --instance=my-instance
gcloud sql backups create --instance=my-instance

Generate:
- Cloud SQL test plan
- HA validation
- Backup/restore procedures
- Performance benchmarks
```

## 5. Google Kubernetes Engine (GKE) Testing

```
Generate GKE testing scenarios:

Cluster: [CLUSTER_NAME]
Mode: [STANDARD/AUTOPILOT]
Release Channel: [RAPID/REGULAR/STABLE]

Test scenarios:
1. Cluster Provisioning
   - Cluster creation (zonal/regional)
   - Node pools configuration
   - Network configuration
   - Workload Identity
   - Binary Authorization

2. Application Deployment
   - Pod deployment
   - Services (LoadBalancer/NodePort/ClusterIP)
   - Ingress with Google Cloud Load Balancer
   - ConfigMaps and Secrets
   - Persistent volumes (GCE PD)

3. Scaling Testing
   - Horizontal Pod Autoscaler
   - Vertical Pod Autoscaler
   - Cluster autoscaler
   - Node auto-provisioning
   - Multi-dimensional Pod autoscaling

4. Security Testing
   - GKE security posture dashboard
   - Pod Security Policies/Standards
   - Network Policies
   - Binary Authorization
   - Workload Identity
   - GKE Sandbox (gVisor)
   - Shielded GKE nodes

5. Monitoring and Logging
   - Cloud Logging integration
   - Cloud Monitoring (metrics)
   - Cloud Trace
   - Cloud Profiler
   - GKE dashboards

Test with kubectl and gcloud:
gcloud container clusters create my-cluster --zone us-central1-a --num-nodes=3
gcloud container clusters get-credentials my-cluster --zone us-central1-a

kubectl apply -f deployment.yaml
kubectl get pods
kubectl scale deployment my-app --replicas=5

Generate:
- GKE deployment checklist
- Security baseline
- Scaling tests
- Monitoring setup
```

## 6. Google Cloud Pub/Sub Testing

```
Create Pub/Sub testing scenarios:

Topic: [TOPIC_NAME]
Subscription: [SUBSCRIPTION_NAME]
Subscription Type: [PULL/PUSH]

Test scenarios:
1. Message Publishing
   - Publish single message
   - Batch publishing
   - Message ordering
   - Message attributes
   - Publish with retry

2. Message Consumption
   - Pull subscription
   - Push subscription
   - Streaming pull
   - Acknowledgment handling
   - Nack and redelivery

3. Subscription Configuration
   - Acknowledgment deadline
   - Message retention duration
   - Dead letter topic
   - Retry policy
   - Filter messages

4. Performance Testing
   - Message throughput
   - Publish latency
   - End-to-end latency
   - Concurrent publishers/subscribers
   - Backlog management

5. Integration Testing
   - Cloud Functions triggered by Pub/Sub
   - Dataflow pipeline
   - Cloud Run service
   - Eventarc integration
   - BigQuery subscription

Test with gcloud:
gcloud pubsub topics create my-topic
gcloud pubsub subscriptions create my-subscription --topic=my-topic
gcloud pubsub topics publish my-topic --message="Hello GCP"
gcloud pubsub subscriptions pull my-subscription --auto-ack

Generate:
- Pub/Sub test scenarios
- Message flow validation
- Performance benchmarks
- Error handling tests
```

## 7. Google Cloud Run Testing

```
Generate Cloud Run testing scenarios:

Service: [SERVICE_NAME]
Image: [CONTAINER_IMAGE]
Platform: [MANAGED/GKE]

Test scenarios:
1. Service Deployment
   - Deploy container image
   - Revision management
   - Traffic splitting
   - Blue-green deployment
   - Canary deployment

2. Scaling Testing
   - Automatic scaling (0 to N)
   - Concurrency settings
   - Min/max instances
   - CPU throttling
   - Request timeout

3. Networking
   - Custom domains
   - Cloud CDN integration
   - VPC connector
   - Ingress settings (all/internal/internal-and-cloud-load-balancing)
   - Egress settings

4. Security Testing
   - IAM permissions
   - Service-to-service authentication
   - Identity Platform integration
   - Binary Authorization
   - HTTPS enforcement

5. Performance Testing
   - Cold start latency
   - Request handling
   - Concurrent requests
   - Memory and CPU allocation
   - Regional deployment

Test with gcloud:
gcloud run deploy my-service \
  --image gcr.io/my-project/my-image \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated

gcloud run services update my-service --concurrency=100
gcloud run services update-traffic my-service --to-revisions=v2=50,v1=50

Generate:
- Cloud Run test plan
- Scaling validation
- Performance benchmarks
- Security checklist
```

## 8. Google BigQuery Testing

```
Create BigQuery testing scenarios:

Dataset: [DATASET_NAME]
Table: [TABLE_NAME]
Location: [US/EU/ASIA]

Test scenarios:
1. Data Loading
   - Batch load from Cloud Storage
   - Streaming inserts
   - Load from Cloud SQL
   - External tables (federated queries)
   - Data Transfer Service

2. Query Performance
   - Standard SQL queries
   - Query optimization
   - Partitioned tables
   - Clustered tables
   - Materialized views
   - Caching behavior

3. Data Security
   - Dataset-level IAM
   - Table-level access control
   - Column-level security
   - Row-level security
   - Data masking (using views)
   - Encryption (Google-managed/customer-managed)

4. Cost Optimization
   - Query cost estimation
   - Slot usage
   - On-demand vs flat-rate pricing
   - Partition pruning
   - Clustering impact
   - BI Engine

5. Data Validation
   - Schema validation
   - Data quality checks
   - Duplicate detection
   - NULL value handling
   - Data freshness

Test with bq CLI:
bq mk my_dataset
bq load --source_format=CSV my_dataset.my_table gs://my-bucket/data.csv
bq query --use_legacy_sql=false 'SELECT * FROM my_dataset.my_table LIMIT 10'
bq show --format=prettyjson my_dataset.my_table

Generate:
- BigQuery test plan
- Query optimization guide
- Security configuration
- Cost optimization tips
```

## 9. Google Cloud Build Testing

```
Generate Cloud Build CI/CD testing scenarios:

Build Trigger: [GITHUB/CLOUD_SOURCE_REPOS/BITBUCKET]
Configuration: [CLOUDBUILD_YAML/DOCKERFILE]

Test scenarios:
1. Build Trigger Testing
   - Push to branch trigger
   - Pull request trigger
   - Tag trigger
   - Manual trigger
   - Scheduled triggers

2. Build Steps
   - Multi-stage builds
   - Custom builders
   - Parallel steps
   - Conditional execution
   - Secrets from Secret Manager

3. Testing in Pipeline
   - Unit tests
   - Integration tests
   - Container vulnerability scanning
   - Security scanning
   - Code coverage

4. Artifact Management
   - Push to Container Registry/Artifact Registry
   - Build artifacts storage
   - Binary authorization attestation

5. Deployment Testing
   - Deploy to GKE
   - Deploy to Cloud Run
   - Deploy to App Engine
   - Deploy to Compute Engine
   - Blue-green deployment

Example cloudbuild.yaml:
```yaml
steps:
  # Build
  - name: 'gcr.io/cloud-builders/docker'
    args: ['build', '-t', 'gcr.io/$PROJECT_ID/my-image:$SHORT_SHA', '.']

  # Test
  - name: 'gcr.io/$PROJECT_ID/my-image:$SHORT_SHA'
    entrypoint: 'pytest'

  # Push
  - name: 'gcr.io/cloud-builders/docker'
    args: ['push', 'gcr.io/$PROJECT_ID/my-image:$SHORT_SHA']

  # Deploy
  - name: 'gcr.io/cloud-builders/gcloud'
    args:
      - 'run'
      - 'deploy'
      - 'my-service'
      - '--image'
      - 'gcr.io/$PROJECT_ID/my-image:$SHORT_SHA'
      - '--region'
      - 'us-central1'

images:
  - 'gcr.io/$PROJECT_ID/my-image:$SHORT_SHA'
```

Generate:
- Build pipeline tests
- Deployment validation
- Rollback procedures
- Build optimization
```

## 10. Google Cloud IAM and Security Testing

```
Generate GCP security testing scenarios:

Project: [PROJECT_ID]
Organization: [ORG_ID]

Test scenarios:
1. Identity and Access Management
   - IAM roles and permissions
   - Service accounts
   - Workload Identity
   - Custom roles
   - Least privilege validation
   - Privilege escalation testing

2. Network Security
   - VPC firewall rules
   - Cloud Armor (DDoS protection)
   - Cloud IDS (Intrusion Detection)
   - Private Google Access
   - VPC Service Controls

3. Data Protection
   - Cloud KMS keys
   - Customer-managed encryption keys (CMEK)
   - Client-side encryption
   - Data Loss Prevention (DLP) API
   - Secret Manager

4. Threat Detection
   - Security Command Center
   - Event Threat Detection
   - Container Threat Detection
   - VM Threat Detection
   - Security Health Analytics

5. Compliance
   - Policy Intelligence
   - Asset Inventory
   - Access Transparency
   - VPC Service Controls
   - Assured Workloads

Tools:
- Security Command Center
- Forseti Security (open-source)
- ScoutSuite
- Cloud Asset Inventory
- Policy Intelligence

Test IAM permissions:
gcloud projects get-iam-policy [PROJECT_ID]
gcloud iam roles describe roles/viewer
gcloud projects add-iam-policy-binding [PROJECT_ID] --member=user:user@example.com --role=roles/viewer

Generate:
- Security audit report
- IAM permission matrix
- Compliance checklist
- Remediation guide
```

## 11. Google Cloud Monitoring and Logging Testing

```
Create monitoring and logging test scenarios:

Project: [PROJECT_ID]
Resources: [COMPUTE/GKE/CLOUD_RUN/FUNCTIONS]

Test scenarios:
1. Cloud Monitoring
   - Metrics collection
   - Custom metrics
   - Dashboards creation
   - Alerting policies
   - Uptime checks
   - SLO monitoring

2. Cloud Logging
   - Log ingestion
   - Log queries
   - Log-based metrics
   - Log sinks (export to BigQuery/Cloud Storage/Pub/Sub)
   - Log retention
   - Audit logs

3. Cloud Trace
   - Distributed tracing
   - Trace analysis
   - Latency reporting
   - Request details
   - Integration with applications

4. Cloud Profiler
   - CPU profiling
   - Heap profiling
   - Thread contention
   - Performance optimization

5. Error Reporting
   - Error detection
   - Error grouping
   - Error notifications
   - Resolution tracking

Test with gcloud:
gcloud logging read "resource.type=gce_instance" --limit 10
gcloud logging write my-log "This is a test message"
gcloud monitoring dashboards create --config-from-file=dashboard.yaml

Generate:
- Monitoring setup guide
- Alert policy templates
- Dashboard configurations
- Log query examples
```

## 12. Google Cloud Cost Optimization Testing

```
Create cost optimization testing scenarios:

Project: [PROJECT_ID]
Billing Account: [BILLING_ACCOUNT_ID]

Test scenarios:
1. Resource Right-Sizing
   - Compute Engine recommender
   - Idle VM detection
   - Underutilized persistent disks
   - Unattached IP addresses

2. Commitment-Based Savings
   - Committed Use Discounts (CUD)
   - Sustained Use Discounts (SUD)
   - Spot VMs usage
   - Preemptible VMs

3. Cost Control
   - Budget alerts
   - Quota management
   - Cost breakdown by service
   - Label-based cost allocation
   - Project-level budgets

4. Cost Optimization Tools
   - Recommender API
   - Active Assist
   - Billing reports
   - Cost Table in BigQuery
   - Pricing Calculator

Test with gcloud:
gcloud billing accounts list
gcloud billing projects describe [PROJECT_ID]
gcloud recommender recommendations list --project=[PROJECT_ID] --recommender=google.compute.instance.MachineTypeRecommender

Generate:
- Cost optimization report
- Savings recommendations
- Resource tagging strategy
- Budget alerts setup
```

## Best Practices

1. **Use gcloud CLI**
   - Automate with gcloud commands
   - Use service accounts for automation
   - Implement error handling and retries

2. **Infrastructure as Code**
   - Terraform for GCP
   - Cloud Deployment Manager
   - Config Connector for Kubernetes

3. **Test in Non-Production**
   - Separate projects for environments
   - Use folders and organizations
   - Apply project labels

4. **Security Best Practices**
   - Use Workload Identity
   - Store secrets in Secret Manager
   - Enable Binary Authorization
   - Regular security audits

5. **Cost Management**
   - Label all resources
   - Set up billing alerts
   - Review recommender suggestions
   - Clean up unused resources

## Tools and Frameworks

- **Testing**: Cloud Build, pytest, JUnit, Postman
- **IaC**: Terraform, Deployment Manager, Pulumi
- **Security**: Security Command Center, Forseti, ScoutSuite
- **Monitoring**: Cloud Monitoring, Cloud Logging, Cloud Trace
- **Cost**: Cost Management, Recommender, Billing Export

## GCP Testing Checklist

- [ ] IAM roles properly configured
- [ ] VPC and firewall rules validated
- [ ] Encryption enabled (at rest and in transit)
- [ ] Monitoring and logging configured
- [ ] Backup and DR procedures tested
- [ ] Auto-scaling validated
- [ ] High availability implemented
- [ ] Performance benchmarked
- [ ] Cost optimization reviewed
- [ ] Compliance requirements met
- [ ] Security posture validated
- [ ] Documentation complete
