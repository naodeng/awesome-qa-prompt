# Security Testing

English | [简体中文](./README.md)

## Module Overview

The Security Testing module provides comprehensive security testing guidance, helping testing teams identify vulnerabilities, assess security risks, and ensure applications are protected against security threats and attacks.

## Core Features

### 🔒 Security Testing Types
- **Vulnerability Assessment:** Identify security weaknesses
- **Penetration Testing:** Simulate real-world attacks
- **Security Scanning:** Automated vulnerability scanning
- **Code Review:** Security-focused code analysis

### 🎯 OWASP Top 10 Coverage
- **Injection Attacks:** SQL, NoSQL, OS command injection
- **Broken Authentication:** Authentication and session management flaws
- **Sensitive Data Exposure:** Inadequate data protection
- **XML External Entities (XXE):** XML processing vulnerabilities

### 🔍 Testing Approaches
- **Static Analysis:** Source code security analysis (SAST)
- **Dynamic Analysis:** Runtime security testing (DAST)
- **Interactive Analysis:** Combined SAST and DAST (IAST)
- **Manual Testing:** Expert-driven security assessment

### 🌐 Security Domains
- **Web Security:** XSS, CSRF, clickjacking
- **API Security:** Authentication, authorization, rate limiting
- **Mobile Security:** App security, data storage, communication
- **Network Security:** SSL/TLS, firewall, DDoS protection

## File Description

## Version Selection Guide

- `Standard-version/`: the default recommendation for most real-world use cases
- `*_Lite.md`: use when the input is limited or you want a faster output
- `*_Lean.md`: use only when a module provides a Lean variant and you want a more restrained result
- `CRISPE/RISE/ICIO/ROSES/LangGPT`: use only when you explicitly want that prompting framework


### Chinese Prompts
- **File:** `Standard-version/SecurityTestingPrompt.md`
- **Role:** Senior Security Testing Expert (10+ years experience)
- **Use Case:** Chinese project teams, security testing requirements

### English Prompts
- **File:** `Standard-version/SecurityTestingPrompt_EN.md`
- **Role:** Senior Security Testing Expert
- **Use Case:** International teams, English project environments

### Lite Version Prompts
- **File:** `Standard-version/SecurityTestingPrompt_Lite.md` / `Standard-version/SecurityTestingPrompt_Lite_EN.md`
- **Features:** Quick start, focused on core security testing concepts
- **Use Case:** Quick security assessment and basic testing

## Usage Guide

### Quick Start

1. **Select Prompt File**
   - Full Version: Comprehensive security testing strategy
   - Lite Version: Quick security assessment and validation

2. **Prepare Input Materials**
   ```
   Application Type: [Web/API/Mobile/Desktop]
   Security Requirements: [Compliance standards, security policies]
   Threat Model: [Potential threats and attack vectors]
   Test Scope: [Features and components to test]
   ```

3. **Get Security Test Plan**
   - Vulnerability assessment strategy
   - Penetration testing approach
   - Security tool recommendations
   - Remediation priorities

## Related Modules

- **[API Testing](../api-testing/README_EN.md)** - API security testing
- **[Automation Testing](../automation-testing/README_EN.md)** - Security test automation
- **[Test Strategy](../test-strategy/README_EN.md)** - Security testing strategy

## Learning Resources

### Recommended Books
- "The Web Application Hacker's Handbook"
- "OWASP Testing Guide"
- "Security Testing Handbook"

### Online Resources
- [OWASP](https://owasp.org/)
- [PortSwigger Web Security Academy](https://portswigger.net/web-security)
- [HackerOne Resources](https://www.hackerone.com/resources)

## Contribution Guide

Welcome to contribute to the Security Testing module:

1. **Share Cases:** Share security testing cases and findings
2. **Tool Reviews:** Review security testing tools
3. **Best Practices:** Share security testing best practices
4. **Vulnerability Research:** Share latest vulnerability information

## License

This module follows the MIT License. See the [LICENSE](../LICENSE) file in the project root directory for details.

---

**Secure applications, protect users!** 🔒✨
