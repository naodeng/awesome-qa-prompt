# Cypress Test Script Generation Prompts

## 1. Basic Cypress Test

```
Generate a Cypress test script for:

Test Scenario: [DESCRIBE_SCENARIO]
Application URL: [URL]
Test Steps: [LIST_STEPS]

Include:
- Test structure with describe/it blocks
- Element interactions
- Assertions
- Cypress commands
- Custom commands (if needed)
```

## 2. Cypress API Testing

```
Create Cypress API test for:

API Endpoint: [URL]
Method: [GET/POST/PUT/DELETE]
Request Body: [IF_APPLICABLE]
Expected Response: [DESCRIBE]

Generate:
- cy.request() usage
- Response validation
- Status code checks
- Response body assertions
- Header validation
```

## 3. Cypress Custom Commands

```
Generate Cypress custom commands for:

Commands Needed:
- [COMMAND_1]: [DESCRIPTION]
- [COMMAND_2]: [DESCRIPTION]

Create:
- Custom command definitions
- Usage examples
- TypeScript declarations (if applicable)
```

## Cypress Test Template

```javascript
describe('[TEST_SUITE_NAME]', () => {
  
  beforeEach(() => {
    cy.visit('[URL]');
  });

  it('[TEST_NAME]', () => {
    // Interact with elements
    cy.get('[SELECTOR]').click();
    cy.get('[INPUT_SELECTOR]').type('[TEST_DATA]');
    
    // Assertions
    cy.get('[SELECTOR]').should('be.visible');
    cy.get('[SELECTOR]').should('have.text', '[EXPECTED_TEXT]');
    
    // Wait for element
    cy.get('[SELECTOR]', { timeout: 10000 }).should('exist');
  });
});
```

## Best Practices

1. **Automatic Waiting**: Cypress waits automatically
2. **Time Travel**: Use Cypress Test Runner for debugging
3. **Network Stubbing**: Use cy.intercept() for API mocking
4. **Custom Commands**: Create reusable commands
5. **Fixtures**: Use fixtures for test data
6. **Screenshots/Videos**: Automatic on failure
