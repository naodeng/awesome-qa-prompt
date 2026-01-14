# NoSQL Database Testing Prompts

## 1. MongoDB Testing - Document Validation

```
Generate test cases for MongoDB collections:

Database: [DATABASE_NAME]
Collections:
- [COLLECTION_1]: [SCHEMA_DESCRIPTION]
- [COLLECTION_2]: [SCHEMA_DESCRIPTION]

Test coverage:
1. Document Structure Validation
   - Required fields presence
   - Data type validation
   - Nested document structure
   - Array field validation
   - Field value constraints

2. Schema Validation Rules
   Test the following validation schema:
   {
     "validator": {
       "$jsonSchema": {
         "required": [REQUIRED_FIELDS],
         "properties": {
           [FIELD_NAME]: {
             "bsonType": [TYPE],
             "description": [DESCRIPTION]
           }
         }
       }
     }
   }

3. Index Testing
   - Single field indexes
   - Compound indexes
   - Text search indexes
   - Geospatial indexes
   - TTL indexes

Generate:
- MongoDB test scripts using JavaScript
- Validation test cases
- Index performance comparisons
- Query optimization tests
```

## 2. MongoDB CRUD Operations Testing

```
Create comprehensive CRUD test cases for:

Collection: [COLLECTION_NAME]
Expected Document Structure: [SCHEMA]

Test scenarios:
1. Create (Insert) Operations
   - insertOne() with valid document
   - insertMany() with multiple documents
   - Insert with duplicate _id (should fail)
   - Insert with missing required fields
   - Bulk insert performance
   - Insert with nested documents
   - Insert with arrays

2. Read (Query) Operations
   - find() with various filters
   - findOne() with specific criteria
   - Query with comparison operators ($gt, $lt, $gte, $lte, $ne)
   - Query with logical operators ($and, $or, $not, $nor)
   - Query with element operators ($exists, $type)
   - Query with array operators ($all, $elemMatch, $size)
   - Projection queries
   - Sorting and limiting results
   - Pagination with skip() and limit()

3. Update Operations
   - updateOne() with $set operator
   - updateMany() with filters
   - Update with $inc, $mul operators
   - Update with $push, $pull for arrays
   - Update with $addToSet
   - Upsert operations
   - Replace entire document
   - Update nested fields

4. Delete Operations
   - deleteOne() with filter
   - deleteMany() with criteria
   - Delete with complex filters
   - Verify referential integrity after deletion

Include:
- Test data setup scripts
- Actual MongoDB commands
- Expected results
- Assertion methods
- Performance benchmarks
```

## 3. MongoDB Aggregation Pipeline Testing

```
Generate test cases for MongoDB aggregation pipelines:

Collection: [COLLECTION_NAME]
Business Requirements: [REQUIREMENTS]

Test the following aggregation stages:
1. $match - Filtering documents
2. $group - Grouping and aggregation
3. $project - Field transformation
4. $sort - Sorting results
5. $limit and $skip - Pagination
6. $lookup - Joining collections
7. $unwind - Deconstructing arrays
8. $addFields - Adding computed fields
9. $facet - Multi-faceted aggregations
10. $bucket - Bucketing operations

For the aggregation pipeline:
[PASTE_AGGREGATION_PIPELINE]

Create test cases to verify:
- Correct data filtering
- Accurate aggregation calculations (count, sum, avg, min, max)
- Proper sorting and ordering
- Join accuracy with $lookup
- Performance with large datasets
- Memory usage optimization
- Index utilization

Include:
- Sample input documents
- Expected output
- Performance benchmarks
- Alternative pipeline optimizations
```

## 4. Redis Testing - Cache Operations

```
Generate test cases for Redis cache implementation:

Application: [APP_NAME]
Redis Version: [VERSION]
Cache Strategy: [CACHE_ASIDE/WRITE_THROUGH/WRITE_BEHIND]

Test scenarios:
1. Basic Operations
   - SET key value with TTL
   - GET key
   - DEL key
   - EXISTS key
   - EXPIRE key seconds
   - TTL key

2. String Operations
   - APPEND key value
   - INCR/DECR for counters
   - MGET/MSET for multiple keys
   - STRLEN key

3. Hash Operations
   - HSET key field value
   - HGET key field
   - HMSET/HMGET for multiple fields
   - HGETALL key
   - HDEL key field

4. List Operations
   - LPUSH/RPUSH for queue implementation
   - LPOP/RPOP for dequeue
   - LRANGE for retrieving list items
   - LLEN for list length

5. Set Operations
   - SADD for adding members
   - SMEMBERS for retrieving all members
   - SISMEMBER for membership testing
   - SUNION/SINTER/SDIFF for set operations

6. Sorted Set Operations
   - ZADD for adding scored members
   - ZRANGE/ZREVRANGE for range queries
   - ZSCORE for retrieving scores
   - ZRANK for ranking

7. Cache-Specific Testing
   - Cache hit rate
   - Cache miss handling
   - Cache eviction policies (LRU, LFU)
   - Cache warming
   - Cache invalidation
   - Stale data prevention

Generate:
- Redis CLI test commands
- Application integration tests
- Performance benchmarks
- Cache effectiveness metrics
```

## 5. Cassandra Testing - Distributed Database

```
Create test cases for Apache Cassandra cluster:

Cluster: [CLUSTER_NAME]
Keyspace: [KEYSPACE_NAME]
Replication Strategy: [SIMPLE/NETWORK_TOPOLOGY]
Replication Factor: [NUMBER]

Test scenarios:
1. CQL Query Testing
   - CREATE KEYSPACE
   - CREATE TABLE with primary key
   - INSERT statements
   - SELECT with WHERE clause
   - UPDATE statements
   - DELETE statements
   - BATCH operations

2. Data Modeling Validation
   - Partition key effectiveness
   - Clustering column ordering
   - Secondary index usage
   - Materialized views
   - Denormalization strategies

3. Consistency Testing
   - Write with consistency level ONE/QUORUM/ALL
   - Read with consistency level ONE/QUORUM/ALL
   - Eventual consistency scenarios
   - Read repair mechanism
   - Hinted handoff

4. Cluster Operations
   - Node addition/removal
   - Data rebalancing
   - Repair operations
   - Backup and restore
   - Snapshot management

5. Performance Testing
   - Write throughput
   - Read latency
   - Partition size impact
   - Query performance with different consistency levels
   - Compaction strategy effectiveness

6. Failure Scenarios
   - Single node failure
   - Multiple node failures
   - Network partition tolerance
   - Write availability during failures
   - Read availability during failures

Generate:
- CQL test scripts
- Consistency verification methods
- Performance benchmarks
- Failure recovery procedures
```

## 6. DynamoDB Testing - AWS NoSQL

```
Create comprehensive test cases for Amazon DynamoDB:

Table: [TABLE_NAME]
Partition Key: [KEY]
Sort Key: [KEY] (optional)
GSI/LSI: [INDEX_SPECIFICATIONS]

Test scenarios:
1. Basic Operations
   - PutItem with valid/invalid attributes
   - GetItem with partition key and sort key
   - UpdateItem with update expressions
   - DeleteItem
   - BatchGetItem for multiple items
   - BatchWriteItem for bulk operations

2. Query and Scan Operations
   - Query with partition key
   - Query with partition key and sort key condition
   - Query with filter expressions
   - Scan entire table
   - Scan with filters
   - Parallel scan operations

3. Index Testing
   - Global Secondary Index (GSI) queries
   - Local Secondary Index (LSI) queries
   - Index projection types (KEYS_ONLY, INCLUDE, ALL)
   - Sparse index testing

4. Capacity and Throughput
   - Provisioned capacity testing
   - On-demand capacity behavior
   - Throttling scenarios
   - Burst capacity utilization
   - Auto-scaling validation

5. DynamoDB Streams
   - Stream record validation
   - Lambda trigger testing
   - Change data capture (CDC)
   - Stream processing latency

6. Conditional Operations
   - Conditional writes
   - Optimistic locking
   - Atomic counters
   - Transaction support (TransactWriteItems, TransactGetItems)

7. Best Practices Validation
   - Hot partition detection
   - Access pattern optimization
   - Item size limitations (400KB)
   - Attribute name compression
   - Time series data patterns

Generate:
- AWS SDK test code (JavaScript/Python/Java)
- CloudWatch metrics validation
- Cost optimization tests
- Error handling scenarios
```

## 7. Elasticsearch Testing - Search and Analytics

```
Generate test cases for Elasticsearch cluster:

Index: [INDEX_NAME]
Mapping: [MAPPING_DEFINITION]
Use Case: [SEARCH/ANALYTICS/LOGGING]

Test scenarios:
1. Index Operations
   - Create index with settings and mappings
   - Index documents (single and bulk)
   - Update documents
   - Delete documents
   - Reindex operations

2. Search Queries
   - Match queries
   - Term queries
   - Range queries
   - Bool queries (must, should, must_not, filter)
   - Wildcard and regex queries
   - Fuzzy queries for typo tolerance
   - Prefix queries

3. Full-Text Search
   - Relevance scoring
   - Multi-field search
   - Phrase matching
   - Highlighting
   - Suggestions and autocomplete

4. Aggregations
   - Metric aggregations (avg, sum, min, max, stats)
   - Bucket aggregations (terms, histogram, date_histogram)
   - Pipeline aggregations
   - Nested aggregations

5. Performance Testing
   - Index throughput
   - Search latency
   - Bulk indexing performance
   - Shard allocation
   - Cache effectiveness

6. Cluster Health
   - Cluster status (green, yellow, red)
   - Shard allocation
   - Node availability
   - Index recovery
   - Snapshot and restore

Generate:
- Elasticsearch DSL queries
- Index performance benchmarks
- Search relevance tests
- Cluster monitoring scripts
```

## 8. Neo4j Graph Database Testing

```
Create test cases for Neo4j graph database:

Database: [DATABASE_NAME]
Node Labels: [LIST_LABELS]
Relationship Types: [LIST_RELATIONSHIPS]

Test scenarios:
1. Node Operations
   - CREATE nodes with properties
   - MATCH nodes by label and properties
   - UPDATE node properties
   - DELETE nodes (with/without relationships)
   - Merge operations

2. Relationship Testing
   - CREATE relationships between nodes
   - MATCH patterns with relationships
   - Relationship properties
   - Bidirectional relationships
   - Multiple relationships between same nodes

3. Cypher Query Testing
   - Pattern matching
   - Path queries (shortest path, all paths)
   - Variable length relationships
   - WHERE clause filtering
   - RETURN with aggregations
   - WITH clause for query chaining
   - UNWIND for list processing

4. Graph Algorithms
   - Pathfinding (shortest path, all shortest paths)
   - Centrality (degree, betweenness, closeness)
   - Community detection
   - Similarity algorithms
   - Link prediction

5. Performance Testing
   - Query execution plans (PROFILE, EXPLAIN)
   - Index usage (node property indexes, full-text indexes)
   - Constraint enforcement (uniqueness, existence)
   - Large graph traversal performance

6. Data Integrity
   - Constraint validation
   - Uniqueness constraints
   - Node key constraints
   - Relationship existence

Generate:
- Cypher query test scripts
- Graph traversal performance tests
- Data model validation
- Index effectiveness tests
```

## 9. NoSQL Performance Benchmarking

```
Create performance benchmark tests for:

Database Type: [MONGODB/CASSANDRA/REDIS/DYNAMODB]
Dataset Size: [NUMBER] documents/records
Operation Mix: [READ_PERCENTAGE]% reads, [WRITE_PERCENTAGE]% writes

Benchmark scenarios:
1. Throughput Testing
   - Writes per second
   - Reads per second
   - Mixed workload throughput
   - Batch operation throughput

2. Latency Testing
   - P50, P95, P99 percentiles
   - Average response time
   - Maximum latency
   - Latency under load

3. Scalability Testing
   - Horizontal scaling (add nodes)
   - Vertical scaling (increase resources)
   - Data volume impact
   - Concurrent user scaling

4. Comparison Benchmarks
   - NoSQL vs SQL for specific use case
   - Different NoSQL databases
   - Different consistency levels
   - Different access patterns

Tools to use:
- YCSB (Yahoo! Cloud Serving Benchmark)
- JMeter with appropriate plugins
- Custom benchmark scripts
- Database-specific tools

Generate:
- Benchmark test configuration
- Workload definitions
- Metrics collection scripts
- Result analysis and reporting
```

## 10. NoSQL Data Migration Testing

```
Create test cases for data migration:

Source: [SOURCE_DATABASE]
Target: [TARGET_NOSQL_DATABASE]
Data Volume: [SIZE]
Migration Strategy: [ETL/STREAMING/HYBRID]

Test scenarios:
1. Pre-Migration Validation
   - Source data profiling
   - Data volume assessment
   - Schema mapping verification
   - Data type compatibility
   - Relationship mapping

2. Migration Execution
   - Data extraction completeness
   - Transformation accuracy
   - Loading performance
   - Error handling
   - Checkpoint and resume capability

3. Post-Migration Validation
   - Record count comparison
   - Data sampling validation
   - Key-value pair verification
   - Relationship integrity
   - Index rebuild verification

4. Application Testing
   - Read operation compatibility
   - Write operation compatibility
   - Query performance comparison
   - Error handling
   - Rollback procedures

5. Data Synchronization (if applicable)
   - Real-time sync accuracy
   - Sync lag monitoring
   - Conflict resolution
   - Bidirectional sync testing

Generate:
- Migration scripts
- Validation queries for both databases
- Comparison reports
- Rollback procedures
- Performance impact analysis
```

## Best Practices

1. **Test Data Generation**
   - Use realistic data volumes
   - Include edge cases (empty arrays, null values, large strings)
   - Generate varied data distributions
   - Test with production-like data patterns

2. **NoSQL-Specific Considerations**
   - Test eventual consistency scenarios
   - Verify data denormalization
   - Test partition key distribution
   - Validate schema flexibility

3. **Performance Testing**
   - Test at scale (millions of documents)
   - Monitor memory usage
   - Test concurrent access patterns
   - Benchmark different query strategies

4. **Error Handling**
   - Network partition scenarios
   - Node failure handling
   - Write conflicts
   - Timeout scenarios
   - Connection pool exhaustion

5. **Security Testing**
   - Authentication mechanisms
   - Authorization rules
   - Encryption at rest
   - Encryption in transit
   - Audit logging

## Tools and Frameworks

- **NoSQLUnit**: NoSQL database testing framework
- **Testcontainers**: Containerized database testing
- **MongoDB Node.js Driver**: With testing utilities
- **Redis Mock**: In-memory Redis for testing
- **Cassandra Unit**: Unit testing for Cassandra
- **LocalStack**: AWS service emulation including DynamoDB
- **Embedded Elasticsearch**: For integration testing
- **Neo4j Test Harness**: Embedded Neo4j for testing

## Example Test Script (MongoDB with Jest)

```javascript
const { MongoClient } = require('mongodb');

describe('MongoDB User Collection Tests', () => {
  let client;
  let db;
  let usersCollection;

  beforeAll(async () => {
    client = await MongoClient.connect('mongodb://localhost:27017');
    db = client.db('test_db');
    usersCollection = db.collection('users');
  });

  afterAll(async () => {
    await db.dropDatabase();
    await client.close();
  });

  beforeEach(async () => {
    await usersCollection.deleteMany({});
  });

  test('should insert a user document', async () => {
    const user = {
      name: 'John Doe',
      email: 'john@example.com',
      age: 30
    };

    const result = await usersCollection.insertOne(user);
    expect(result.insertedId).toBeDefined();

    const insertedUser = await usersCollection.findOne({ _id: result.insertedId });
    expect(insertedUser.name).toBe('John Doe');
    expect(insertedUser.email).toBe('john@example.com');
  });

  test('should find users by age range', async () => {
    await usersCollection.insertMany([
      { name: 'User1', age: 25 },
      { name: 'User2', age: 35 },
      { name: 'User3', age: 45 }
    ]);

    const users = await usersCollection
      .find({ age: { $gte: 30, $lte: 40 } })
      .toArray();

    expect(users.length).toBe(1);
    expect(users[0].name).toBe('User2');
  });

  test('should update user email', async () => {
    const insertResult = await usersCollection.insertOne({
      name: 'Jane Doe',
      email: 'jane@example.com'
    });

    await usersCollection.updateOne(
      { _id: insertResult.insertedId },
      { $set: { email: 'jane.doe@example.com' } }
    );

    const updatedUser = await usersCollection.findOne({ _id: insertResult.insertedId });
    expect(updatedUser.email).toBe('jane.doe@example.com');
  });
});
```
