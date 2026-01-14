# API Testing Checklist Prompts

## 1. REST API Testing Checklist

```
Generate a comprehensive REST API testing checklist for:

API Name: [API_NAME]
Base URL: [URL]
Authentication: [TYPE]
Number of Endpoints: [COUNT]
API Version: [VERSION]

Create checklist covering:
- Endpoint functionality
- HTTP methods (GET, POST, PUT, DELETE, PATCH)
- Request/response validation
- Status codes
- Authentication/authorization
- Error handling
- Performance
- Security
```

## 2. API Functional Testing Checklist

```
Create an API functional testing checklist for:

Endpoint: [ENDPOINT_URL]
Method: [GET/POST/PUT/DELETE/PATCH]
Purpose: [DESCRIBE_PURPOSE]
Request Parameters: [LIST_PARAMETERS]

Include checks for:
- Valid request with all parameters
- Valid request with optional parameters only
- Missing required parameters
- Invalid parameter values
- Boundary value testing
- Response data accuracy
- Response schema validation
- Default values handling
```

## 3. API Security Testing Checklist

```
Generate an API security testing checklist for:

API: [API_NAME]
Authentication: [OAUTH/JWT/API_KEY/etc.]
Sensitive Data: [TYPES_OF_DATA]
Compliance: [STANDARDS]

Cover:
- Authentication mechanism
- Authorization rules
- Token expiration
- SQL injection attempts
- XSS attempts
- CSRF protection
- Rate limiting
- HTTPS enforcement
- Sensitive data exposure
- Input validation
```

## 4. API Performance Testing Checklist

```
Create an API performance testing checklist for:

API: [API_NAME]
SLA Requirements: [RESPONSE_TIME/THROUGHPUT]
Expected Load: [REQUESTS_PER_SECOND]
Critical Endpoints: [LIST_ENDPOINTS]

Include checks for:
- Response time under normal load
- Response time under peak load
- Throughput capacity
- Concurrent request handling
- Large payload handling
- Database query performance
- Caching effectiveness
- Resource utilization
```

## 5. API Error Handling Checklist

```
Generate an error handling checklist for:

API: [API_NAME]
Error Response Format: [JSON/XML]
Error Codes Used: [LIST_CODES]

Test:
- 400 Bad Request scenarios
- 401 Unauthorized scenarios
- 403 Forbidden scenarios
- 404 Not Found scenarios
- 500 Internal Server Error scenarios
- Error message clarity
- Error response structure
- Consistent error format
- Appropriate HTTP status codes
```

## 6. GraphQL API Testing Checklist

```
Create a GraphQL API testing checklist for:

API: [API_NAME]
Schema: [REFERENCE_TO_SCHEMA]
Queries: [NUMBER]
Mutations: [NUMBER]

Cover:
- Query execution
- Mutation execution
- Subscription testing (if applicable)
- Field selection
- Nested queries
- Query variables
- Error handling
- Schema validation
- Performance (N+1 problem)
- Introspection queries
```

## 7. API Contract Testing Checklist

```
Generate an API contract testing checklist for:

API: [API_NAME]
Contract Format: [OPENAPI/SWAGGER/etc.]
Consumer Services: [LIST_CONSUMERS]

Include checks for:
- Request schema compliance
- Response schema compliance
- Required fields present
- Data types correct
- Enum values valid
- Breaking changes detection
- Backward compatibility
- Version compatibility
```

## 8. API Integration Testing Checklist

```
Create an API integration testing checklist for:

APIs: [API_A] -> [API_B]
Integration Type: [SYNC/ASYNC]
Data Flow: [DESCRIBE_FLOW]

Test:
- End-to-end data flow
- Data transformation accuracy
- Error propagation
- Timeout handling
- Retry logic
- Idempotency
- Transaction handling
- Rollback scenarios
```

## 9. API Documentation Testing Checklist

```
Generate an API documentation testing checklist for:

API: [API_NAME]
Documentation Type: [SWAGGER/POSTMAN/etc.]
Documentation URL: [URL]

Verify:
- All endpoints documented
- Request examples accurate
- Response examples accurate
- Parameter descriptions clear
- Authentication instructions clear
- Error codes documented
- Rate limits documented
- Versioning information
- Code samples work
- Try-it-out functionality
```

## 10. API Versioning Testing Checklist

```
Create an API versioning testing checklist for:

API: [API_NAME]
Current Version: [VERSION]
Previous Versions: [LIST_VERSIONS]
Versioning Strategy: [URL/HEADER/PARAMETER]

Test:
- All versions accessible
- Version routing correct
- Backward compatibility
- Deprecated endpoint warnings
- Version-specific features
- Default version behavior
- Version migration path
```

## Comprehensive API Testing Checklist Template

```
# API Testing Checklist for [API_NAME]

## Endpoint Information
- Endpoint: [URL]
- Method: [GET/POST/PUT/DELETE/PATCH]
- Authentication: [REQUIRED/NOT_REQUIRED]
- Rate Limit: [REQUESTS_PER_MINUTE]

## Functional Testing

### Valid Requests
- [ ] Request with all valid parameters succeeds
- [ ] Request with only required parameters succeeds
- [ ] Request with optional parameters works correctly
- [ ] Response contains expected data
- [ ] Response schema matches specification
- [ ] Data types in response are correct
- [ ] Calculated fields are accurate
- [ ] Related data is included (if applicable)

### Invalid Requests
- [ ] Missing required parameters returns 400
- [ ] Invalid parameter type returns 400
- [ ] Invalid parameter value returns 400
- [ ] Out-of-range values handled correctly
- [ ] Malformed JSON/XML rejected
- [ ] Extra unexpected parameters handled
- [ ] Empty request body handled (if applicable)

### HTTP Methods
- [ ] GET retrieves data correctly
- [ ] POST creates resource correctly
- [ ] PUT updates entire resource
- [ ] PATCH updates partial resource
- [ ] DELETE removes resource
- [ ] OPTIONS returns allowed methods
- [ ] HEAD returns headers without body

### Status Codes
- [ ] 200 OK for successful GET
- [ ] 201 Created for successful POST
- [ ] 204 No Content for successful DELETE
- [ ] 400 Bad Request for invalid input
- [ ] 401 Unauthorized for missing auth
- [ ] 403 Forbidden for insufficient permissions
- [ ] 404 Not Found for non-existent resource
- [ ] 409 Conflict for duplicate resource
- [ ] 422 Unprocessable Entity for validation errors
- [ ] 429 Too Many Requests for rate limit
- [ ] 500 Internal Server Error for server issues
- [ ] 503 Service Unavailable for maintenance

## Authentication & Authorization

### Authentication
- [ ] Valid credentials accepted
- [ ] Invalid credentials rejected (401)
- [ ] Missing credentials rejected (401)
- [ ] Expired token rejected (401)
- [ ] Token refresh works correctly
- [ ] Multiple authentication methods work (if applicable)

### Authorization
- [ ] User can access allowed resources
- [ ] User cannot access forbidden resources (403)
- [ ] Role-based access control works
- [ ] Resource-level permissions enforced
- [ ] Cross-tenant access prevented

## Request Validation

### Headers
- [ ] Content-Type header validated
- [ ] Accept header respected
- [ ] Authorization header processed
- [ ] Custom headers handled
- [ ] Missing required headers rejected

### Parameters
- [ ] Query parameters parsed correctly
- [ ] Path parameters validated
- [ ] Request body validated
- [ ] Array parameters handled
- [ ] Nested objects processed
- [ ] Special characters in parameters

### Data Validation
- [ ] Required fields enforced
- [ ] Data type validation works
- [ ] Format validation (email, URL, etc.)
- [ ] Length constraints enforced
- [ ] Range validation works
- [ ] Enum values validated
- [ ] Regex pattern validation

## Response Validation

### Response Structure
- [ ] Response format correct (JSON/XML)
- [ ] Response schema valid
- [ ] Required fields present
- [ ] Data types correct
- [ ] Null values handled appropriately
- [ ] Arrays formatted correctly
- [ ] Nested objects structured properly

### Response Headers
- [ ] Content-Type header correct
- [ ] Cache headers appropriate
- [ ] CORS headers present (if needed)
- [ ] Security headers included
- [ ] Custom headers returned

### Response Data
- [ ] Data accuracy verified
- [ ] Timestamps in correct format
- [ ] IDs are unique
- [ ] Pagination works correctly
- [ ] Sorting works correctly
- [ ] Filtering works correctly
- [ ] Search functionality accurate

## Error Handling

### Error Responses
- [ ] Error response format consistent
- [ ] Error messages clear and helpful
- [ ] Error codes meaningful
- [ ] Stack traces not exposed in production
- [ ] Validation errors detailed
- [ ] Multiple errors reported together

### Edge Cases
- [ ] Empty result set handled
- [ ] Large result set handled
- [ ] Null values in response
- [ ] Special characters in data
- [ ] Unicode characters supported
- [ ] Very long strings handled

## Performance

### Response Time
- [ ] Response time within SLA
- [ ] Response time consistent
- [ ] No unnecessary delays
- [ ] Timeout configured appropriately

### Load Testing
- [ ] Handles expected concurrent requests
- [ ] Handles peak load
- [ ] Graceful degradation under stress
- [ ] Rate limiting works
- [ ] Connection pooling effective

### Optimization
- [ ] Pagination implemented
- [ ] Caching utilized
- [ ] Compression enabled
- [ ] Minimal payload size
- [ ] Efficient database queries
- [ ] No N+1 query problems

## Security

### Input Security
- [ ] SQL injection prevented
- [ ] XSS attacks prevented
- [ ] Command injection prevented
- [ ] Path traversal prevented
- [ ] XML external entity (XXE) prevented

### Data Security
- [ ] Sensitive data encrypted
- [ ] HTTPS enforced
- [ ] Passwords hashed
- [ ] PII protected
- [ ] Data sanitized in responses

### API Security
- [ ] CSRF protection implemented
- [ ] Rate limiting enforced
- [ ] API keys secure
- [ ] Tokens expire appropriately
- [ ] Audit logging enabled

## Integration

### Database
- [ ] Data persisted correctly
- [ ] Transactions handled properly
- [ ] Rollback works on error
- [ ] Data integrity maintained
- [ ] Concurrent updates handled

### External Services
- [ ] Third-party API calls work
- [ ] Timeout handling for external calls
- [ ] Retry logic implemented
- [ ] Fallback behavior defined
- [ ] Circuit breaker pattern (if applicable)

## Documentation

### API Documentation
- [ ] Endpoint documented
- [ ] Parameters documented
- [ ] Request examples provided
- [ ] Response examples provided
- [ ] Error codes documented
- [ ] Authentication documented

### Code Examples
- [ ] Code samples work
- [ ] Examples in multiple languages (if applicable)
- [ ] Postman collection available
- [ ] Swagger/OpenAPI spec accurate

## Monitoring & Logging

### Logging
- [ ] Requests logged
- [ ] Errors logged
- [ ] Performance metrics logged
- [ ] Sensitive data not logged
- [ ] Log level appropriate

### Monitoring
- [ ] Health check endpoint works
- [ ] Metrics endpoint available
- [ ] Alerting configured
- [ ] Dashboard available
```

## Best Practices

1. **Automate**: API tests are perfect for automation
2. **Test Early**: Start API testing before UI is ready
3. **Use Tools**: Leverage Postman, REST Assured, or similar
4. **Contract Testing**: Implement consumer-driven contracts
5. **Security First**: Always include security tests
6. **Performance**: Don't skip performance testing
7. **Documentation**: Keep tests in sync with documentation
8. **Version Testing**: Test all supported API versions

## Common API Issues

- Inconsistent error responses
- Missing input validation
- Poor error messages
- Inadequate authentication
- Missing rate limiting
- Slow response times
- Breaking changes without versioning
- Insufficient logging
- Missing CORS headers
- Exposing sensitive data

## Recommended Tools

- **Postman**: Manual and automated testing
- **REST Assured**: Java-based API testing
- **Karate**: BDD-style API testing
- **Newman**: Postman CLI runner
- **JMeter**: Performance testing
- **SoapUI**: SOAP and REST testing
- **Pact**: Contract testing
- **Swagger**: API documentation and testing
