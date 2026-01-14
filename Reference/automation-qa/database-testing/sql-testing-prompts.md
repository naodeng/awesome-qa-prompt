# SQL Database Testing Prompts

## 1. SQL Test Script Generation

```
Generate SQL test scripts for the following database schema:

Database: [DATABASE_NAME]
Tables:
- [TABLE_1] with columns: [COLUMNS]
- [TABLE_2] with columns: [COLUMNS]
- [TABLE_3] with columns: [COLUMNS]

Create test scripts to verify:
1. Data integrity constraints (primary keys, foreign keys, unique constraints)
2. CRUD operations (Create, Read, Update, Delete)
3. Stored procedures: [LIST_PROCEDURES]
4. Database triggers: [LIST_TRIGGERS]
5. Complex queries and joins
6. Transaction handling (COMMIT, ROLLBACK)
7. Data validation rules
8. Index performance

Include:
- Setup scripts (test data insertion)
- Actual test queries
- Expected results
- Teardown scripts (cleanup)
- Assertion methods
```

## 2. Database Schema Validation

```
Create a comprehensive test plan for validating the following database schema:

Schema: [SCHEMA_NAME]
Requirements: [BUSINESS_REQUIREMENTS]

Test coverage should include:
1. Table structure validation
   - Column names, data types, nullable constraints
   - Default values and auto-increment settings
   - Collation and character sets

2. Relationship validation
   - Primary key constraints
   - Foreign key relationships and cascading rules
   - Unique constraints
   - Check constraints

3. Index validation
   - Primary indexes
   - Secondary indexes
   - Composite indexes
   - Index performance benchmarks

4. Permissions and security
   - User roles and privileges
   - Row-level security
   - Column-level permissions

Generate SQL queries to validate each aspect above.
```

## 3. Stored Procedure Testing

```
Generate test cases for the following stored procedure:

Procedure Name: [PROCEDURE_NAME]
Parameters:
- [PARAM_1]: [TYPE] - [DESCRIPTION]
- [PARAM_2]: [TYPE] - [DESCRIPTION]

Business Logic: [DESCRIBE_LOGIC]

Create test scenarios for:
1. Valid input parameters (positive testing)
2. Invalid/null parameters (negative testing)
3. Boundary value testing
4. Error handling and exception scenarios
5. Transaction rollback scenarios
6. Performance under load
7. Concurrent execution testing

Include:
- Test data setup
- Procedure execution commands
- Expected output validation
- Error message verification
- Performance benchmarks
```

## 4. Data Integrity Testing

```
Create data integrity test cases for:

Database: [DATABASE_NAME]
Critical Tables: [LIST_TABLES]

Test scenarios:
1. Referential Integrity
   - Verify foreign key constraints prevent orphaned records
   - Test cascade delete/update behaviors
   - Validate parent-child relationships

2. Entity Integrity
   - Verify primary keys are unique and not null
   - Test duplicate prevention mechanisms
   - Validate unique constraints

3. Domain Integrity
   - Test data type constraints
   - Verify check constraints
   - Validate default values
   - Test NOT NULL constraints

4. User-Defined Integrity
   - Business rule validation
   - Trigger functionality
   - Custom constraint validation

Generate SQL test scripts for each scenario with setup, execution, and validation steps.
```

## 5. SQL Injection Testing

```
Generate SQL injection test cases for the application:

Application: [APP_NAME]
Database: [DATABASE_TYPE] (MySQL/PostgreSQL/SQL Server/Oracle)
Input Fields:
- [FIELD_1]: [DESCRIPTION]
- [FIELD_2]: [DESCRIPTION]

Create test cases using:
1. Classic SQL Injection
   - ' OR '1'='1
   - ' OR '1'='1' --
   - ' OR '1'='1' /*
   - admin' --
   - admin' #

2. Union-Based Injection
   - ' UNION SELECT NULL--
   - ' UNION SELECT username, password FROM users--

3. Boolean-Based Blind Injection
   - ' AND 1=1--
   - ' AND 1=2--

4. Time-Based Blind Injection
   - '; WAITFOR DELAY '00:00:05'--
   - ' OR SLEEP(5)--

5. Second-Order Injection
6. Stored Procedure Injection
7. Out-of-Band Injection

Include:
- Test input
- Expected secure behavior
- Vulnerability indicators
- Remediation recommendations
```

## 6. Database Performance Testing

```
Create performance test scenarios for:

Database: [DATABASE_NAME]
Expected Load: [CONCURRENT_USERS] concurrent users
Critical Queries: [LIST_QUERIES]

Test scenarios:
1. Query Execution Time
   - Simple SELECT queries
   - Complex JOIN queries
   - Subqueries and nested queries
   - Aggregation queries (GROUP BY, COUNT, SUM)

2. Index Performance
   - Queries with indexes vs without
   - Index fragmentation impact
   - Covering index effectiveness

3. Concurrent Operations
   - Multiple simultaneous reads
   - Read-write conflicts
   - Deadlock scenarios
   - Lock contention

4. Bulk Operations
   - Bulk INSERT performance
   - Bulk UPDATE performance
   - Bulk DELETE performance
   - TRUNCATE vs DELETE

5. Connection Pooling
   - Connection acquisition time
   - Connection pool exhaustion
   - Idle connection cleanup

Generate:
- JMeter/Gatling test scripts for database operations
- SQL benchmark queries
- Performance baseline metrics
- Performance degradation scenarios
```

## 7. Database Migration Testing

```
Create test cases for database migration from:
Source: [SOURCE_DB] version [VERSION]
Target: [TARGET_DB] version [VERSION]

Migration Type: [UPGRADE/MIGRATION/REPLICATION]

Test coverage:
1. Pre-Migration Validation
   - Source database backup verification
   - Data count and checksums
   - Schema documentation
   - Dependency mapping

2. Migration Execution
   - Schema migration success
   - Data migration completeness
   - Referential integrity maintenance
   - Index recreation
   - Stored procedure/function migration

3. Post-Migration Validation
   - Row count comparison
   - Data integrity verification
   - Performance comparison
   - Application compatibility testing
   - Rollback procedure validation

4. Data Validation Queries
   - Generate SQL queries to compare:
     * Record counts by table
     * Data checksums
     * Min/max/avg values for numeric columns
     * NULL value counts
     * Unique value counts

Include SQL scripts for each validation step.
```

## 8. Transaction Testing

```
Generate test cases for database transaction handling:

Application: [APP_NAME]
Database: [DATABASE_TYPE]
Isolation Level: [READ_COMMITTED/REPEATABLE_READ/SERIALIZABLE]

Test scenarios:
1. ACID Properties
   - Atomicity: All-or-nothing execution
   - Consistency: Data integrity maintained
   - Isolation: Concurrent transaction handling
   - Durability: Committed data persistence

2. Transaction Scenarios
   - Successful commit
   - Explicit rollback
   - Automatic rollback on error
   - Savepoint usage
   - Nested transactions

3. Concurrency Issues
   - Dirty reads
   - Non-repeatable reads
   - Phantom reads
   - Lost updates
   - Write-write conflicts

4. Deadlock Testing
   - Simulate deadlock conditions
   - Verify deadlock detection
   - Test deadlock resolution
   - Validate retry mechanisms

Include:
- SQL transaction scripts
- Multiple concurrent session scripts
- Expected outcomes
- Error handling verification
```

## 9. Database Backup and Recovery Testing

```
Create test cases for backup and recovery procedures:

Database: [DATABASE_NAME]
Backup Strategy: [FULL/INCREMENTAL/DIFFERENTIAL]
Recovery Point Objective (RPO): [TIME]
Recovery Time Objective (RTO): [TIME]

Test scenarios:
1. Backup Procedures
   - Full backup execution
   - Incremental backup execution
   - Backup integrity verification
   - Backup compression testing
   - Backup encryption validation

2. Recovery Procedures
   - Full restore from backup
   - Point-in-time recovery
   - Table-level recovery
   - Transaction log replay
   - Recovery to alternate location

3. Disaster Recovery
   - Complete database loss scenario
   - Corrupted data recovery
   - Accidental deletion recovery
   - Ransomware recovery simulation

4. Validation Steps
   - Data completeness verification
   - Data integrity checks
   - Application functionality testing
   - Performance after recovery

Generate:
- Backup scripts with verification
- Restore procedures
- Validation SQL queries
- RTO/RPO measurement methods
```

## 10. Database Monitoring and Alerting

```
Create automated database monitoring test cases:

Database: [DATABASE_NAME]
Monitoring Tool: [TOOL_NAME]

Monitoring scenarios:
1. Health Metrics
   - Database availability (uptime)
   - Connection pool status
   - Active connections count
   - Blocked queries
   - Long-running queries

2. Performance Metrics
   - Query response time
   - Transactions per second (TPS)
   - Cache hit ratio
   - Buffer pool usage
   - Disk I/O statistics

3. Resource Utilization
   - CPU usage
   - Memory consumption
   - Disk space usage
   - Network throughput
   - Table size growth

4. Error Monitoring
   - Failed login attempts
   - Deadlock occurrences
   - Constraint violations
   - Replication lag
   - Backup failures

5. Alert Thresholds
   - CPU > [THRESHOLD]%
   - Disk space < [THRESHOLD]%
   - Query time > [THRESHOLD] seconds
   - Connection count > [THRESHOLD]
   - Error rate > [THRESHOLD]

Generate:
- Monitoring SQL queries
- Alert configuration
- Dashboard metrics
- Automated test scripts for alert triggering
```

## Best Practices

1. **Test Data Management**
   - Use dedicated test databases
   - Implement data masking for sensitive information
   - Create reusable test data sets
   - Automate test data generation

2. **Test Isolation**
   - Each test should be independent
   - Use transactions for test cleanup
   - Implement setup and teardown procedures
   - Avoid shared test data

3. **Performance Considerations**
   - Test on production-like data volumes
   - Include index optimization tests
   - Monitor query execution plans
   - Test with realistic concurrent loads

4. **Security Testing**
   - Test authentication and authorization
   - Verify encryption at rest
   - Validate connection security (SSL/TLS)
   - Test SQL injection prevention

5. **Documentation**
   - Document test data requirements
   - Maintain expected results
   - Record database versions tested
   - Track schema change history

## Tools and Frameworks

- **DbUnit**: Database testing framework for Java
- **SQLAlchemy**: Python SQL toolkit with testing capabilities
- **Testcontainers**: Containerized database testing
- **Flyway/Liquibase**: Database migration and version control
- **JMeter**: Database performance testing
- **SQL Server Data Tools (SSDT)**: SQL Server unit testing
- **pgTAP**: PostgreSQL unit testing framework
- **MySQL Test Framework**: Built-in MySQL testing tools

## Example Test Script Template

```sql
-- Test: Verify foreign key constraint enforcement
-- Setup
BEGIN TRANSACTION;

-- Create test data
INSERT INTO parent_table (id, name) VALUES (1, 'Test Parent');

-- Test Case 1: Valid foreign key
INSERT INTO child_table (id, parent_id, name)
VALUES (1, 1, 'Valid Child');
-- Expected: Success

-- Test Case 2: Invalid foreign key
BEGIN TRY
    INSERT INTO child_table (id, parent_id, name)
    VALUES (2, 999, 'Invalid Child');
    -- Expected: Should fail with foreign key violation
    PRINT 'FAIL: Foreign key constraint not enforced';
END TRY
BEGIN CATCH
    IF ERROR_NUMBER() = 547 -- FK violation error
        PRINT 'PASS: Foreign key constraint enforced';
    ELSE
        PRINT 'FAIL: Unexpected error';
END CATCH

-- Cleanup
ROLLBACK TRANSACTION;
```
