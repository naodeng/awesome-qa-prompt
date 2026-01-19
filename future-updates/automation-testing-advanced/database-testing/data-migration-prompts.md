# Data Migration Testing Prompts

## 1. Comprehensive Migration Test Plan

```
Create a comprehensive test plan for data migration:

Project: [PROJECT_NAME]
Source System: [SOURCE_DB/APPLICATION]
Target System: [TARGET_DB/APPLICATION]
Data Volume: [NUMBER] records across [NUMBER] tables
Migration Type: [BIG_BANG/PHASED/PARALLEL/TRICKLE]
Migration Window: [TIMEFRAME]

Test plan should include:
1. Pre-Migration Testing
   - Source data profiling and quality assessment
   - Data volume and complexity analysis
   - Dependency mapping
   - Backup verification

2. Migration Execution Testing
   - ETL process validation
   - Data transformation accuracy
   - Error handling and logging
   - Performance benchmarks
   - Rollback procedures

3. Post-Migration Testing
   - Data completeness verification
   - Data accuracy validation
   - Referential integrity checks
   - Application integration testing
   - Performance comparison

4. Test Data Strategy
   - Full dataset vs sample testing
   - Edge case scenarios
   - Null and empty value handling
   - Special characters and encoding

5. Success Criteria
   - Acceptable error rate: [PERCENTAGE]
   - Performance degradation limit: [PERCENTAGE]
   - Data loss tolerance: [THRESHOLD]
   - Rollback time limit: [TIMEFRAME]

Provide:
- Detailed test cases
- Test data requirements
- Entry/exit criteria
- Risk mitigation strategies
```

## 2. Data Profiling and Quality Assessment

```
Generate data profiling queries for migration readiness:

Source Database: [DATABASE_NAME]
Tables to Migrate: [LIST_TABLES]

Create profiling queries to analyze:
1. Data Completeness
   - NULL value counts per column
   - Empty string counts
   - Missing required field analysis
   - Optional field population rates

2. Data Accuracy
   - Invalid email formats
   - Invalid phone number formats
   - Out-of-range dates
   - Negative values in amount fields
   - Invalid foreign key references

3. Data Consistency
   - Duplicate records detection
   - Data type mismatches
   - Format inconsistencies
   - Orphaned records
   - Circular references

4. Data Volume Analysis
   - Record counts per table
   - Data size per table
   - Growth trends
   - Largest records identification

5. Data Distribution
   - Value frequency analysis
   - Date range distribution
   - Categorical data distribution
   - Outlier detection

Example queries:
-- Check for NULL values
SELECT
  COUNT(*) as total_records,
  COUNT(column1) as column1_populated,
  COUNT(*) - COUNT(column1) as column1_nulls,
  ROUND((COUNT(column1) * 100.0 / COUNT(*)), 2) as column1_completeness_pct
FROM [TABLE_NAME];

-- Identify duplicates
SELECT [KEY_COLUMNS], COUNT(*) as duplicate_count
FROM [TABLE_NAME]
GROUP BY [KEY_COLUMNS]
HAVING COUNT(*) > 1;

Generate similar queries for all critical data quality checks.
```

## 3. ETL Process Testing

```
Create test cases for ETL (Extract, Transform, Load) process:

ETL Tool: [TOOL_NAME] (Informatica/Talend/Azure Data Factory/AWS Glue)
Source: [SOURCE_DETAILS]
Target: [TARGET_DETAILS]

Test scenarios:
1. Extract Phase Testing
   - Full extraction accuracy
   - Incremental extraction logic
   - Change data capture (CDC)
   - Extraction performance
   - Source system impact
   - Connection handling and retries
   - Timeout scenarios

2. Transform Phase Testing
   - Data type conversions
     * String to date/timestamp
     * Numeric precision changes
     * Character encoding (UTF-8, ASCII)

   - Business rule transformations
     * [RULE_1]: [DESCRIPTION]
     * [RULE_2]: [DESCRIPTION]

   - Data cleansing
     * Trim whitespace
     * Standardize formats
     * Remove special characters
     * Case normalization

   - Data enrichment
     * Lookups
     * Calculations
     * Concatenations
     * Conditional logic

   - Aggregations
     * Sum, Average, Count
     * Group by operations
     * Pivot transformations

3. Load Phase Testing
   - Initial load
   - Incremental updates
   - Bulk insert performance
   - Transaction handling
   - Constraint validation during load
   - Error record handling
   - Duplicate detection and resolution

4. Error Handling
   - Invalid data format handling
   - Constraint violation handling
   - Connection failure recovery
   - Partial load recovery
   - Error logging and notification
   - Quarantine/reject record management

5. Performance Testing
   - Processing speed (records/second)
   - Resource utilization (CPU, Memory, I/O)
   - Scalability with data volume
   - Parallel processing effectiveness
   - Network throughput

Generate:
- ETL test data scenarios
- Validation queries for each phase
- Performance benchmarks
- Error simulation scenarios
- Expected outcomes
```

## 4. Schema Mapping Validation

```
Create test cases to validate schema mapping:

Source Schema: [SOURCE_SCHEMA]
Target Schema: [TARGET_SCHEMA]

Mapping Details:
Source Table: [SOURCE_TABLE]
Target Table: [TARGET_TABLE]

Column Mappings:
- [SOURCE_COL_1] ([TYPE]) → [TARGET_COL_1] ([TYPE])
- [SOURCE_COL_2] ([TYPE]) → [TARGET_COL_2] ([TYPE])

Test cases:
1. Direct Mapping Validation
   - One-to-one field mapping
   - Data type compatibility
   - Length and precision preservation
   - NULL handling
   - Default value mapping

2. Complex Mapping Validation
   - Multiple source columns to one target
   - One source column to multiple targets
   - Derived/calculated fields
   - Conditional mappings
   - Lookup table joins

3. Data Type Conversion Testing
   Test scenarios:
   - VARCHAR to CHAR (truncation risk)
   - INT to BIGINT (range expansion)
   - DATE to DATETIME (precision change)
   - FLOAT to DECIMAL (precision issues)
   - VARCHAR to JSON (structure validation)

4. Special Cases
   - Unmapped source columns (to be dropped)
   - New target columns (default values)
   - Column name changes
   - Table splitting/merging
   - Hierarchy flattening/nesting

Generate:
- Mapping verification queries
- Data sample comparisons
- Type conversion test cases
- Edge case scenarios
```

## 5. Data Reconciliation Testing

```
Generate data reconciliation scripts for:

Source: [SOURCE_SYSTEM]
Target: [TARGET_SYSTEM]
Reconciliation Approach: [AUTOMATED/MANUAL/HYBRID]

Reconciliation tests:
1. Record Count Validation
   - Total record count per table
   - Record count by date ranges
   - Record count by categories
   - Record count by status

   Source Query:
   SELECT COUNT(*) FROM [SOURCE_TABLE] WHERE [CONDITIONS];

   Target Query:
   SELECT COUNT(*) FROM [TARGET_TABLE] WHERE [CONDITIONS];

2. Data Checksum Validation
   - Generate checksums for data blocks
   - Compare source and target checksums
   - Identify mismatched records

   Example:
   SELECT
     [KEY_COLUMN],
     CHECKSUM([COL1], [COL2], [COL3]) as record_checksum
   FROM [TABLE]
   ORDER BY [KEY_COLUMN];

3. Sample Data Validation
   - Random sample selection (e.g., 1000 records)
   - Field-by-field comparison
   - Identify discrepancies
   - Statistical validation

4. Aggregate Validation
   - Sum of amount fields
   - Count by categories
   - Min/max values
   - Average calculations

   Source:
   SELECT
     COUNT(*) as record_count,
     SUM(amount) as total_amount,
     AVG(amount) as avg_amount,
     MIN(created_date) as earliest_date,
     MAX(created_date) as latest_date
   FROM [SOURCE_TABLE];

5. Business Rule Validation
   - Validate business-specific rules
   - Cross-table relationship checks
   - Calculated field validation
   - Status transitions

6. Anomaly Detection
   - Unexpected NULL values
   - Out-of-range values
   - Duplicate keys
   - Orphaned records
   - Invalid references

Generate:
- Automated reconciliation scripts
- Discrepancy reports
- Match/mismatch statistics
- Drill-down queries for investigation
```

## 6. Incremental Migration Testing

```
Create test cases for incremental migration:

Migration Strategy: [TRICKLE/PHASED]
Incremental Logic: [DATE_BASED/ID_BASED/STATUS_BASED]
Frequency: [HOURLY/DAILY/WEEKLY]

Test scenarios:
1. Initial Load Testing
   - Baseline data migration
   - High watermark establishment
   - Checkpoint creation
   - Validation of initial state

2. Delta Detection
   - New record identification
   - Updated record detection
   - Deleted record handling
   - Change tracking accuracy

3. Incremental Load Testing
   - Delta extraction
   - Incremental transformation
   - Merge/upsert logic
   - Conflict resolution
   - Idempotency testing

4. Checkpoint Management
   - Checkpoint save mechanism
   - Checkpoint restore on failure
   - Multiple checkpoint handling
   - Checkpoint cleanup

5. Overlap and Gap Testing
   - No data loss between runs
   - No duplicate processing
   - Proper handling of concurrent changes
   - Out-of-order event handling

6. Performance Testing
   - Delta processing time
   - Impact on source system
   - Target system load
   - Resource utilization trends

Example high watermark query:
SELECT MAX(updated_timestamp) as last_processed
FROM [TRACKING_TABLE]
WHERE migration_run_id = [LAST_RUN_ID];

Example delta extraction:
SELECT *
FROM [SOURCE_TABLE]
WHERE updated_timestamp > [LAST_WATERMARK]
AND updated_timestamp <= [CURRENT_WATERMARK];

Generate:
- Incremental migration scripts
- Delta validation queries
- Gap analysis procedures
- Performance monitoring queries
```

## 7. Rollback and Recovery Testing

```
Create rollback test scenarios for migration:

Migration: [MIGRATION_NAME]
Rollback Strategy: [FULL_RESTORE/INCREMENTAL_REVERSE/PARALLEL_CUTOVER]
Maximum Rollback Time: [TIMEFRAME]

Test cases:
1. Pre-Rollback Preparation
   - Backup verification
   - System state snapshot
   - Dependency documentation
   - Communication plan

2. Rollback Execution
   - Stop new writes to target
   - Restore source system (if modified)
   - Point target back to source
   - Application configuration rollback
   - DNS/routing changes
   - Cache clearing

3. Partial Rollback Scenarios
   - Rollback specific tables
   - Rollback specific data ranges
   - Selective record rollback
   - Transaction-level rollback

4. Data Inconsistency Resolution
   - Records created during migration
   - Updates made post-migration
   - Conflict resolution strategy
   - Manual intervention requirements

5. Rollback Validation
   - System functionality verification
   - Data integrity checks
   - Performance validation
   - User acceptance testing

6. Recovery from Failed Rollback
   - Secondary rollback procedures
   - Data recovery techniques
   - Emergency contacts and escalation
   - Disaster recovery plan activation

7. Post-Rollback Analysis
   - Root cause identification
   - Data loss assessment
   - Corrective action items
   - Re-migration planning

Generate:
- Rollback runbook
- Rollback scripts
- Validation checklists
- Decision tree for rollback triggers
- Communication templates
```

## 8. Performance Impact Testing

```
Create performance test cases for migration:

Current System Performance:
- Average response time: [TIME]
- Throughput: [TRANSACTIONS/SEC]
- Concurrent users: [NUMBER]

Acceptable Degradation: [PERCENTAGE]

Test scenarios:
1. Source System Impact During Migration
   - Read query performance
   - Write operation performance
   - Concurrent user capacity
   - Resource utilization
   - Lock contention
   - Replication lag

2. Target System Performance
   - Baseline performance before migration
   - Performance during data load
   - Performance immediately after migration
   - Performance after index rebuild
   - Performance after statistics update

3. Application Performance
   - Page load times
   - API response times
   - Report generation times
   - Batch job performance
   - Search functionality

4. Network Performance
   - Bandwidth utilization
   - Latency measurements
   - Packet loss
   - Connection pooling effectiveness

5. End-to-End Transaction Testing
   Test critical user journeys:
   - [USER_JOURNEY_1]
   - [USER_JOURNEY_2]

   Measure:
   - Transaction completion time
   - Error rates
   - User experience metrics

6. Long-term Performance
   - Performance after 1 day
   - Performance after 1 week
   - Performance after 1 month
   - Performance degradation trends

Generate:
- Performance test scripts
- Monitoring queries
- Baseline vs post-migration comparison
- Performance degradation alerts
```

## 9. Application Integration Testing

```
Create integration test cases post-migration:

Application: [APPLICATION_NAME]
Database: [DATABASE_NAME]
Integration Points: [LIST_INTEGRATIONS]

Test scenarios:
1. CRUD Operations Testing
   - Create new records
   - Read/retrieve records
   - Update existing records
   - Delete records
   - Verify data persistence

2. Business Workflow Testing
   Test critical workflows:
   - [WORKFLOW_1]: [DESCRIPTION]
   - [WORKFLOW_2]: [DESCRIPTION]

   For each workflow verify:
   - Successful completion
   - Data accuracy
   - Transaction integrity
   - Error handling

3. Reporting and Analytics
   - Standard reports generation
   - Custom reports
   - Dashboard data accuracy
   - Data aggregation accuracy
   - Historical data access

4. Batch Jobs and Scheduled Tasks
   - ETL jobs
   - Data synchronization jobs
   - Cleanup routines
   - Archive processes
   - Report generation jobs

5. API Testing
   - REST API endpoints
   - SOAP services
   - GraphQL queries
   - Webhook integrations
   - Response format validation

6. Third-Party Integrations
   - External system connections
   - Data exchange accuracy
   - API compatibility
   - Authentication/authorization

7. Error Scenarios
   - Database connection failures
   - Timeout handling
   - Constraint violation handling
   - Concurrent update conflicts
   - Transaction rollback scenarios

Generate:
- Integration test suite
- API test scripts
- End-to-end workflow tests
- Error simulation scenarios
```

## 10. Zero-Downtime Migration Testing

```
Create test plan for zero-downtime migration:

Strategy: [BLUE_GREEN/ROLLING/CANARY]
Cutover Method: [DNS_SWITCH/LOAD_BALANCER/APPLICATION_CONFIG]

Test scenarios:
1. Dual-Write Phase Testing
   - Write to both old and new database
   - Verify data consistency
   - Performance impact measurement
   - Conflict resolution
   - Write failure handling

2. Synchronization Testing
   - Real-time sync accuracy
   - Sync lag monitoring
   - Bidirectional sync (if applicable)
   - Data conflict resolution
   - Sync failure recovery

3. Gradual Cutover Testing
   - Route [X]% traffic to new system
   - Monitor for errors
   - Compare results with old system
   - Gradual increase of traffic
   - Full cutover validation

4. Rollback Testing (Live)
   - Instant rollback to old system
   - Data consistency during rollback
   - Zero data loss verification
   - Service continuity

5. Read Replica Testing
   - Read from new database
   - Write to old database
   - Compare read results
   - Performance comparison
   - Consistency validation

6. Shadow Mode Testing
   - Duplicate traffic to new system
   - Compare results (no user impact)
   - Performance analysis
   - Error rate comparison
   - Data accuracy validation

Generate:
- Dual-write implementation tests
- Traffic routing tests
- Monitoring and alerting setup
- Rollback automation scripts
- Cutover decision criteria
```

## Best Practices

1. **Testing Environment**
   - Use production-like test environment
   - Match production data volumes
   - Simulate production load
   - Test with realistic network conditions

2. **Test Data Strategy**
   - Mask sensitive data
   - Include edge cases
   - Test with full dataset and samples
   - Maintain test data version control

3. **Automation**
   - Automate reconciliation checks
   - Automated regression testing
   - Automated performance monitoring
   - Continuous validation

4. **Documentation**
   - Document all test cases
   - Track defects and resolutions
   - Maintain test execution logs
   - Create knowledge base

5. **Risk Management**
   - Identify high-risk tables/data
   - Prioritize critical data
   - Have rollback plans ready
   - Establish go/no-go criteria

## Tools and Frameworks

- **Data Comparison Tools**: Redgate SQL Compare, Quest Toad Data Compare
- **ETL Testing**: QuerySurge, iCEDQ, Informatica Data Validation
- **Performance Testing**: Apache JMeter, Gatling, LoadRunner
- **Automation**: Selenium, Python scripts, PowerShell
- **Monitoring**: Datadog, New Relic, Prometheus
- **Data Quality**: Talend Data Quality, Informatica Data Quality

## Migration Testing Checklist

- [ ] Source data profiling completed
- [ ] Test environment setup and validated
- [ ] Schema mapping documented and reviewed
- [ ] ETL scripts developed and unit tested
- [ ] Test data prepared and masked
- [ ] Reconciliation scripts developed
- [ ] Performance baseline established
- [ ] Integration tests created
- [ ] Rollback procedures documented and tested
- [ ] Stakeholder sign-off obtained
- [ ] Production migration dry-run completed
- [ ] Monitoring and alerts configured
- [ ] Support team trained
- [ ] Post-migration validation plan ready
