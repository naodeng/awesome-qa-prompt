# Postman API Testing Prompts

## 1. Postman Collection Creation

```
Create a Postman collection for:

API Name: [API_NAME]
Base URL: [BASE_URL]
Authentication: [TYPE]
Endpoints to Include:
- [ENDPOINT_1]: [METHOD] - [DESCRIPTION]
- [ENDPOINT_2]: [METHOD] - [DESCRIPTION]
- [ENDPOINT_3]: [METHOD] - [DESCRIPTION]

Include:
- Collection variables
- Environment setup
- Pre-request scripts for auth
- Test scripts for validation
- Example requests and responses
```

## 2. Postman Test Scripts

```
Generate Postman test scripts for:

Endpoint: [ENDPOINT_URL]
Method: [GET/POST/PUT/DELETE]
Expected Response: [DESCRIBE]

Create tests for:
- Status code validation
- Response time check
- Response schema validation
- Specific field validation
- Header validation
- Error handling
```

## Example Postman Test Script

```javascript
// Test status code
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Test response time
pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

// Test response body
pm.test("Response has required fields", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('id');
    pm.expect(jsonData).to.have.property('name');
    pm.expect(jsonData).to.have.property('email');
});

// Test specific values
pm.test("User status is active", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.status).to.eql("active");
});

// Save response data for next request
pm.test("Save user ID", function () {
    var jsonData = pm.response.json();
    pm.environment.set("userId", jsonData.id);
});
```

## Best Practices

1. **Collection Organization**: Group related requests
2. **Environment Variables**: Use for different environments
3. **Test Scripts**: Add comprehensive test scripts
4. **Documentation**: Document each request
5. **Data-Driven**: Use CSV/JSON for data-driven testing
6. **Newman**: Run collections via CLI
