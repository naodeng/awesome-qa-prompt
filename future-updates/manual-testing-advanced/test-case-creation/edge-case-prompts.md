# Edge Case Testing Prompts

## 1. Boundary Value Analysis

```
Generate edge case test cases using boundary value analysis for:

Feature: [FEATURE_NAME]
Input Fields:
- [FIELD_1]: Type: [TYPE], Range: [MIN-MAX], Format: [FORMAT]
- [FIELD_2]: Type: [TYPE], Range: [MIN-MAX], Format: [FORMAT]

Create test cases for:
- Minimum boundary values
- Maximum boundary values
- Just below minimum (invalid)
- Just above maximum (invalid)
- Exact boundary values
- Combination of boundary values across fields
```

## 2. Null and Empty Value Testing

```
Generate edge case test cases for null and empty value handling:

Feature: [FEATURE_NAME]
Fields: [LIST_ALL_FIELDS]
Required Fields: [LIST_REQUIRED_FIELDS]
Optional Fields: [LIST_OPTIONAL_FIELDS]

Create test cases for:
- Null values in required fields
- Null values in optional fields
- Empty strings vs null
- Whitespace-only values
- Zero values for numeric fields
- Empty arrays/collections
- Null object references
```

## 3. Special Character Handling

```
Create edge case test cases for special character handling:

Input Fields: [LIST_FIELDS]
Allowed Characters: [DESCRIBE_ALLOWED_CHARS]

Test with:
- SQL injection characters (', --, ;)
- XSS characters (<, >, <script>)
- Unicode characters (emoji, special symbols)
- Escape characters (\n, \t, \r)
- Path traversal characters (../, ..\)
- URL encoding characters (%20, %3C)
- Control characters
- Different language characters (Chinese, Arabic, etc.)
```

## 4. Concurrency and Race Conditions

```
Generate edge case test cases for concurrent operations:

Feature: [FEATURE_NAME]
Shared Resources: [DESCRIBE_RESOURCES]
Operations: [LIST_OPERATIONS]

Create test cases for:
- Simultaneous updates to same record
- Concurrent read and write operations
- Multiple users performing same action
- Deadlock scenarios
- Resource locking behavior
- Transaction isolation issues
- Cache invalidation during concurrent access
```

## 5. Large Data Volume Testing

```
Create edge case test cases for large data volumes:

Feature: [FEATURE_NAME]
Expected Data Volume: [NORMAL_VOLUME]

Test with:
- Maximum allowed records
- Beyond maximum limit
- Large file uploads (size limits)
- Long text strings (max length + 1)
- Large number of concurrent users
- Bulk operations at scale
- Database query performance with large datasets
- Memory consumption with large data
```

## 6. Time and Date Edge Cases

```
Generate edge case test cases for date/time handling:

Feature: [FEATURE_NAME]
Date/Time Fields: [LIST_FIELDS]
Timezone Handling: [YES/NO]

Create test cases for:
- Leap year dates (Feb 29)
- End of month dates (28, 29, 30, 31)
- Daylight saving time transitions
- Timezone conversions
- Past dates (historical)
- Future dates (far future)
- Invalid dates (Feb 30, Month 13)
- Date format variations
- Midnight and end-of-day times
- Different calendar systems
```

## 7. Network and Connectivity Edge Cases

```
Create edge case test cases for network scenarios:

Application Type: [WEB/MOBILE/DESKTOP]
Network Dependencies: [LIST_DEPENDENCIES]

Test scenarios:
- Slow network connection
- Intermittent connectivity
- Complete network loss during operation
- Timeout scenarios
- Partial data transmission
- Network switch (WiFi to cellular)
- Proxy/firewall restrictions
- DNS resolution failures
```

## 8. State Transition Edge Cases

```
Generate edge case test cases for state transitions:

Entity: [ENTITY_NAME]
States: [LIST_STATES]
Transitions: [DESCRIBE_ALLOWED_TRANSITIONS]

Create test cases for:
- Rapid state changes
- Invalid state transitions
- State rollback scenarios
- Concurrent state modifications
- State persistence failures
- Orphaned states
- Circular transition attempts
- State validation edge cases
```

## 9. Permission and Access Edge Cases

```
Create edge case test cases for authorization:

Roles: [LIST_ROLES]
Resources: [LIST_RESOURCES]
Permission Model: [DESCRIBE_MODEL]

Test scenarios:
- Expired sessions
- Revoked permissions during active session
- Role changes during active session
- Accessing resources after deletion
- Privilege escalation attempts
- Cross-tenant data access
- Shared resource conflicts
- Permission inheritance edge cases
```

## 10. File Upload/Download Edge Cases

```
Generate edge case test cases for file operations:

Feature: [UPLOAD/DOWNLOAD/BOTH]
Allowed File Types: [LIST_TYPES]
Size Limits: [SPECIFY_LIMITS]

Create test cases for:
- Zero-byte files
- Maximum size files
- Unsupported file types
- Corrupted files
- Files with no extension
- Files with multiple extensions
- Special characters in filename
- Very long filenames
- Duplicate filenames
- Virus-infected files (if scanning enabled)
- Incomplete uploads
- Simultaneous uploads
```

## 11. Calculation and Formula Edge Cases

```
Create edge case test cases for calculations:

Calculation Type: [DESCRIBE_CALCULATION]
Input Variables: [LIST_VARIABLES_AND_RANGES]
Expected Output: [DESCRIBE_OUTPUT]

Test with:
- Division by zero
- Very large numbers (overflow)
- Very small numbers (underflow)
- Negative numbers where positive expected
- Decimal precision limits
- Rounding edge cases
- Infinity and NaN values
- Percentage calculations at extremes
- Compound calculations with edge values
```

## 12. Localization and Internationalization Edge Cases

```
Generate edge case test cases for i18n/l10n:

Supported Languages: [LIST_LANGUAGES]
Supported Regions: [LIST_REGIONS]
Features Affected: [LIST_FEATURES]

Create test cases for:
- Right-to-left languages (Arabic, Hebrew)
- Languages with special characters
- Currency formatting edge cases
- Number formatting variations
- Date format differences
- Text expansion/contraction in UI
- Character encoding issues
- Locale-specific sorting
- Translation missing scenarios
```

## 13. Browser and Device Edge Cases

```
Create edge case test cases for browser/device compatibility:

Application: [APP_NAME]
Supported Platforms: [LIST_PLATFORMS]

Test scenarios:
- Oldest supported browser version
- Browser with JavaScript disabled
- Browser with cookies disabled
- Very small screen resolutions
- Very large screen resolutions
- Touch vs mouse interactions
- Browser zoom levels (50%, 200%)
- Browser back/forward button behavior
- Multiple tabs/windows
- Private/incognito mode
```

## 14. Integration Edge Cases

```
Generate edge case test cases for system integration:

Integration Type: [API/DATABASE/FILE/MESSAGE_QUEUE]
External System: [SYSTEM_NAME]
Data Exchange: [DESCRIBE_DATA_FLOW]

Create test cases for:
- External system unavailable
- Malformed responses from external system
- Unexpected data types
- Missing required fields in response
- Timeout during integration call
- Partial success scenarios
- Retry logic edge cases
- Circuit breaker activation
- Version mismatch between systems
```

## 15. Search and Filter Edge Cases

```
Create edge case test cases for search functionality:

Search Type: [BASIC/ADVANCED/FULL_TEXT]
Searchable Fields: [LIST_FIELDS]

Test scenarios:
- Empty search query
- Single character search
- Very long search query
- Special characters in search
- Search with only spaces
- Case sensitivity edge cases
- Wildcard character handling
- Boolean operator edge cases
- Search result pagination at boundaries
- No results found scenarios
- All results match scenarios
```

## Tips for Edge Case Testing

1. **Think Negatively**: Consider what could go wrong
2. **Combine Conditions**: Test multiple edge cases together
3. **Real-World Data**: Use actual production-like edge data
4. **Automate**: Edge cases are perfect for automated testing
5. **Document**: Record edge cases found in production
6. **Security Focus**: Many edge cases have security implications
7. **Performance**: Edge cases often reveal performance issues

## Common Edge Case Categories Checklist

- [ ] Boundary values (min, max, just outside)
- [ ] Null, empty, and missing data
- [ ] Special characters and encoding
- [ ] Concurrency and timing
- [ ] Large volumes and limits
- [ ] Date/time edge cases
- [ ] Network and connectivity
- [ ] State transitions
- [ ] Permissions and access
- [ ] File operations
- [ ] Calculations and formulas
- [ ] Localization
- [ ] Browser/device compatibility
- [ ] Integration points
- [ ] Search and filtering
