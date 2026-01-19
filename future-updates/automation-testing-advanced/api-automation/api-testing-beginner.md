# API Testing - Beginner Guide

## 📋 Metadata
- **Difficulty**: Beginner
- **Estimated Time**: 10min
- **Prerequisites**: Basic understanding of HTTP and APIs
- **Tags**: #beginner #api #postman #rest #getting-started
- **Last Updated**: 2026-01-01
- **Version**: 1.0

## 🎯 Objective
Learn to create simple API tests using Postman with step-by-step guidance for beginners new to API testing.

## 📝 Prompt Templates

### 1. Simple GET Request Test

```
I'm new to API testing. Help me create a basic GET request test:

API Endpoint: [YOUR_GET_ENDPOINT]
Example: https://api.example.com/users

I want to test:
- The request returns successfully (200 OK)
- The response contains data
- The response time is reasonable

Please provide:
- Step-by-step Postman setup
- Simple test scripts with explanations
- What each part of the test does
```

### 2. POST Request with Body

```
Help me create a POST request test for beginners:

Endpoint: [YOUR_POST_ENDPOINT]
What it does: [DESCRIBE_WHAT_IT_CREATES]
Example data to send:
{
  "field1": "value1",
  "field2": "value2"
}

I need to learn:
- How to set up the request body
- How to send the request
- How to check if it worked
- What a successful response looks like

Explain each step clearly.
```

### 3. Basic Authentication Test

```
I need to test an API that requires a login token. Help me understand:

API: [API_NAME]
Login endpoint: [LOGIN_URL]
Protected endpoint: [PROTECTED_URL]

Teach me:
- How to get the authentication token
- Where to put the token in requests
- How to test if authentication works
- What happens if the token is wrong

Use simple language and examples.
```

## 🔧 Customization Guide

### Placeholders Explained

- **[YOUR_GET_ENDPOINT]**: The URL you want to test
  - Example: `https://jsonplaceholder.typicode.com/users/1`
  - Tips: Start with public test APIs to practice

- **[YOUR_POST_ENDPOINT]**: Where you send data
  - Example: `https://jsonplaceholder.typicode.com/posts`
  - Tips: Use test APIs that don't require authentication first

## 💡 Example Usage

### Scenario
You're new to API testing and want to test a simple user API.

### Filled Prompt
```
I'm new to API testing. Help me create a basic GET request test:

API Endpoint: https://jsonplaceholder.typicode.com/users/1

I want to test:
- The request returns successfully (200 OK)
- The response contains data
- The response time is reasonable

Please provide:
- Step-by-step Postman setup
- Simple test scripts with explanations
- What each part of the test does
```

### Expected AI Response
```
# Testing Your First API with Postman

## Step 1: Set Up the Request
1. Open Postman
2. Click "New" → "HTTP Request"
3. Set method to "GET" (from dropdown)
4. Enter URL: https://jsonplaceholder.typicode.com/users/1
5. Click "Send"

## Step 2: Understand the Response
You should see:
- Status: 200 OK (means success!)
- Response body with user data
- Response time (should be under 1000ms)

## Step 3: Add Automated Tests
Click the "Tests" tab and add this code:

// Test 1: Check if status code is 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
// This checks if the server responded with "OK"

// Test 2: Check if response has data
pm.test("Response has user data", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('id');
    pm.expect(jsonData).to.have.property('name');
});
// This checks if the response includes user information

// Test 3: Check response time
pm.test("Response time is less than 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});
// This checks if the API responds quickly

## Step 4: Run the Tests
1. Click "Send" again
2. Look at the "Test Results" tab
3. You should see 3 green checkmarks ✓

## What Each Test Does:
- **Test 1**: Makes sure the API is working (200 = success)
- **Test 2**: Checks that we got actual user data back
- **Test 3**: Ensures the API is fast enough

## Next Steps:
Try changing the user ID in the URL (users/2, users/3) and run the tests again!
```

## ✅ Expected Output

The AI should provide:
1. **Clear step-by-step instructions**
2. **Simple code with explanations**
3. **What to expect at each step**
4. **Beginner-friendly language**
5. **Next steps to practice**

**Quality Indicators**:
- [ ] Instructions are easy to follow
- [ ] Code is explained line-by-line
- [ ] No jargon without explanation
- [ ] Includes screenshots or visual descriptions
- [ ] Encourages practice

## 🔗 Related Prompts

- [Postman Intermediate](postman-prompts.md) - Next level API testing
- [REST Assured Beginner](rest-assured-beginner.md) - Code-based API testing
- [API Testing Checklist](../../manual-qa/checklist-prompts/) - What to test

## 📚 Additional Resources

- [Postman Learning Center](https://learning.postman.com/) - Official tutorials
- [HTTP Status Codes](https://httpstatuses.com/) - What each code means
- [JSON Placeholder](https://jsonplaceholder.typicode.com/) - Free test API
- [REST API Tutorial](https://restfulapi.net/) - Learn REST basics

## 💭 Tips for Beginners

1. **Start Simple**: Test one thing at a time
2. **Use Test APIs**: Practice with public APIs first
3. **Read Responses**: Understand what the API returns
4. **Ask Questions**: Every expert was once a beginner
5. **Practice Daily**: Try testing different APIs

## 🐛 Common Beginner Mistakes

**Mistake**: Forgetting to click "Send"
- **Fix**: Always click "Send" to run the request

**Mistake**: Wrong HTTP method (GET vs POST)
- **Fix**: Check API documentation for correct method

**Mistake**: Typos in URL
- **Fix**: Copy-paste URLs to avoid mistakes

**Mistake**: Not saving your work
- **Fix**: Save requests in Postman collections

---

**Remember**: Everyone starts somewhere. Take your time and practice with simple APIs first!
