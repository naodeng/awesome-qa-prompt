# Functional Testing Prompts

## 1. Feature-Based Test Case Generation

```
I need to create comprehensive functional test cases for [FEATURE_NAME]. 

Feature Description: [DESCRIBE_FEATURE]
User Story: [USER_STORY]
Acceptance Criteria: [CRITERIA]

Please generate test cases covering:
- Happy path scenarios
- Alternative flows
- Input validation
- Expected outputs
- Preconditions and postconditions

Format each test case with: Test ID, Title, Preconditions, Steps, Expected Result, Priority
```

## 2. User Flow Testing

```
Generate test cases for the following user flow:
[DESCRIBE_USER_JOURNEY]

Include test cases for:
- Each step in the flow
- Navigation between steps
- Data persistence across steps
- Error handling at each stage
- Exit points and cancellation scenarios
```

## 3. CRUD Operations Testing

```
Create functional test cases for CRUD operations on [ENTITY_NAME]:

Entity Fields: [LIST_FIELDS_AND_TYPES]
Business Rules: [DESCRIBE_RULES]

Generate test cases for:
- Create: Valid/invalid data, required fields, defaults
- Read: Single record, multiple records, filtering, sorting
- Update: Partial updates, full updates, concurrent updates
- Delete: Single delete, bulk delete, soft delete, cascade effects
```

## 4. Form Validation Testing

```
Generate test cases for form validation:

Form Name: [FORM_NAME]
Fields: [LIST_ALL_FIELDS_WITH_VALIDATION_RULES]

Create test cases for:
- Required field validation
- Data type validation
- Format validation (email, phone, date, etc.)
- Length constraints
- Special character handling
- Cross-field validation
- Submit button state
```

## 5. Search Functionality Testing

```
Create test cases for search functionality:

Search Type: [BASIC/ADVANCED/FACETED]
Searchable Fields: [LIST_FIELDS]
Filters Available: [LIST_FILTERS]

Include test cases for:
- Exact match searches
- Partial match searches
- Case sensitivity
- Special characters in search
- Empty search results
- Search result sorting and pagination
- Filter combinations
```

## 6. Integration Point Testing

```
Generate functional test cases for integration between [SYSTEM_A] and [SYSTEM_B]:

Integration Type: [API/FILE_TRANSFER/DATABASE/MESSAGE_QUEUE]
Data Flow: [DESCRIBE_DATA_FLOW]
Expected Behavior: [DESCRIBE_EXPECTED_BEHAVIOR]

Cover:
- Successful data exchange
- Data transformation accuracy
- Error handling and retry logic
- Timeout scenarios
- Data validation at boundaries
```

## 7. Permission & Access Control Testing

```
Create test cases for role-based access control:

Roles: [LIST_ROLES]
Features/Modules: [LIST_FEATURES]
Permission Matrix: [DESCRIBE_WHO_CAN_DO_WHAT]

Generate test cases for:
- Each role's allowed actions
- Denied actions for each role
- Role switching scenarios
- Unauthorized access attempts
- Feature visibility based on permissions
```

## 8. Workflow State Transition Testing

```
Generate test cases for workflow state transitions:

Entity: [ENTITY_NAME]
States: [LIST_ALL_STATES]
Allowed Transitions: [DESCRIBE_STATE_MACHINE]
Business Rules: [DESCRIBE_RULES]

Create test cases for:
- Valid state transitions
- Invalid transition attempts
- State-specific actions
- Conditional transitions
- Rollback scenarios
```

## 9. Notification & Alert Testing

```
Create functional test cases for notifications:

Notification Types: [EMAIL/SMS/PUSH/IN-APP]
Trigger Events: [LIST_EVENTS]
User Preferences: [DESCRIBE_SETTINGS]

Include test cases for:
- Notification triggering
- Content accuracy
- Delivery timing
- User preference respect
- Notification history
- Opt-out functionality
```

## 10. Reporting Functionality Testing

```
Generate test cases for reporting feature:

Report Name: [REPORT_NAME]
Data Source: [DESCRIBE_SOURCE]
Filters/Parameters: [LIST_PARAMETERS]
Output Format: [PDF/EXCEL/CSV/etc.]

Cover:
- Report generation with various filters
- Data accuracy verification
- Date range handling
- Export functionality
- Empty result handling
- Large dataset performance
- Scheduled report generation
```

## Tips for Using These Prompts

1. **Be Specific**: Replace placeholders with actual feature details
2. **Provide Context**: Include relevant business rules and constraints
3. **Iterate**: Refine the AI output based on your specific needs
4. **Review**: Always validate AI-generated test cases for completeness
5. **Customize**: Adapt the format to match your organization's standards
