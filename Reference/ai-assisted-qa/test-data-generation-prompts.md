# Test Data Generation Prompts

## 1. Realistic Test Data Generation

```
Generate realistic test data for:

Data Type: [USER_PROFILES/TRANSACTIONS/PRODUCTS/etc.]
Number of Records: [COUNT]
Fields Required:
- [FIELD_1]: [TYPE_AND_CONSTRAINTS]
- [FIELD_2]: [TYPE_AND_CONSTRAINTS]
- [FIELD_3]: [TYPE_AND_CONSTRAINTS]

Requirements:
- Data should be realistic and diverse
- Follow data format rules
- Include edge cases
- Maintain referential integrity (if applicable)
```

## 2. Edge Case Test Data

```
Generate edge case test data for:

Feature: [FEATURE_NAME]
Input Fields: [LIST_FIELDS]
Constraints: [DESCRIBE_CONSTRAINTS]

Create test data for:
- Boundary values (min, max)
- Invalid data types
- Special characters
- Null/empty values
- Very long strings
- Unicode characters
- SQL injection patterns
- XSS patterns
```

## 3. Performance Test Data

```
Generate large volume test data for performance testing:

Entity: [ENTITY_NAME]
Volume: [NUMBER_OF_RECORDS]
Data Distribution: [DESCRIBE_DISTRIBUTION]
Relationships: [DESCRIBE_RELATIONSHIPS]

Include:
- Realistic data distribution
- Varied data sizes
- Related records
- Indexable fields
- Searchable content
```

## 4. Localization Test Data

```
Create test data for localization testing:

Languages: [LIST_LANGUAGES]
Data Types: [TEXT/DATES/NUMBERS/CURRENCY]
Special Cases: [RTL_LANGUAGES/SPECIAL_CHARACTERS]

Generate:
- Text in multiple languages
- Date formats for different locales
- Currency formats
- Number formats
- Address formats
- Phone number formats
```

## 5. Synthetic Data Generation

```
Generate synthetic data that mimics production data for:

Data Type: [DESCRIBE_DATA]
Volume: [SIZE]
Privacy Requirements: [GDPR/HIPAA/etc.]
Patterns to Match: [DESCRIBE_PATTERNS]

Create:
- Anonymized but realistic data
- Maintains statistical properties
- Preserves data relationships
- No real PII
- Production-like distribution
```

## Best Practices

1. **Realistic Data**: Use realistic names, addresses, emails
2. **Diversity**: Include diverse data (names, locations, etc.)
3. **Edge Cases**: Always include boundary and edge cases
4. **Privacy**: Never use real user data
5. **Consistency**: Maintain data relationships
6. **Automation**: Use tools like Faker.js, Mockaroo
7. **Version Control**: Store test data in repositories
8. **Documentation**: Document test data purpose and structure
