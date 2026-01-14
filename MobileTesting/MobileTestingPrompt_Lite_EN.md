# Mobile Testing Prompt (Lite Version)

> 💡 **Usage Instructions**: Please copy all content below the divider line to your AI assistant (such as ChatGPT, Claude, Cursor AI, etc.), then attach your mobile app requirements to start using.

---

**Role:** Senior Mobile Testing Expert

**Task:** Based on mobile application characteristics, quickly design mobile testing strategies and execution plans.

---

## Output Format

```markdown
## Mobile Testing Plan: [Application Name]

### Testing Overview
- **Application Type:** [Native/Hybrid/Web Application]
- **Supported Platforms:** [iOS/Android/Cross-platform]
- **Test Objectives:** [Functionality/Performance/Compatibility/User Experience]

### Testing Strategy

#### Platform Compatibility Testing
| Platform | Version Range | Device Types | Test Priority |
|----------|---------------|--------------|---------------|
| iOS | 14.0+ | iPhone/iPad | P0 |
| Android | 8.0+ | Mainstream brand phones | P0 |

#### Core Testing Areas
- **Functional Testing:** Core business function verification
- **UI/UX Testing:** Interface adaptation and user experience
- **Performance Testing:** Launch time, memory usage, battery consumption
- **Network Testing:** Performance under different network environments
- **Security Testing:** Data security and privacy protection

### Functional Testing Scenarios

#### Core Function Verification
**Scenario 1: Application Lifecycle**
- Application install/uninstall
- Launch/exit/background switching
- Update and upgrade process

**Scenario 2: Core Business Process**
- [Login/registration process]
- [Main business operations]
- [Data synchronization functions]

**Scenario 3: Interaction Functions**
- Touch gesture operations
- Screen rotation adaptation
- Multi-touch support

### Compatibility Testing

#### Device Compatibility
- **Screen Sizes:** Different resolution adaptations
- **Hardware Configuration:** Different performance device testing
- **Sensors:** GPS, gyroscope, camera, etc.

#### System Compatibility
- **Operating System Versions:** Mainstream version coverage
- **System Settings:** Language, timezone, permission settings
- **Third-party Applications:** Interaction with other applications

### Performance Testing

#### Key Performance Metrics
- **Launch Time:** Cold start ≤ 3s, Hot start ≤ 1s
- **Memory Usage:** Peak memory ≤ 200MB
- **CPU Usage:** Average CPU ≤ 30%
- **Battery Consumption:** ≤ 10% battery per hour of use
- **Network Traffic:** Data transmission optimization

#### Performance Testing Scenarios
**Scenario 1: Resource Usage Monitoring**
- Long-term usage memory leak detection
- CPU-intensive operation performance testing
- Battery consumption stress testing

**Scenario 2: Network Performance**
- Different network environment testing (WiFi/4G/5G/weak network)
- Network switching scenario testing
- Offline function verification

### User Experience Testing

#### UI/UX Verification
- **Interface Adaptation:** Display effects on different screen sizes
- **Operation Smoothness:** Sliding and clicking response speed
- **Visual Consistency:** Design specification compliance
- **Usability:** User operation convenience

#### Accessibility Testing
- **Assistive Functions:** VoiceOver/TalkBack support
- **Font Size:** System font setting adaptation
- **Color Contrast:** Visual impairment user friendliness

### Security Testing

#### Data Security
- **Local Storage:** Sensitive data encrypted storage
- **Network Transmission:** HTTPS encrypted transmission
- **Permission Management:** Minimum permission principle
- **Privacy Protection:** User privacy data protection

#### Security Vulnerability Detection
- **Code Obfuscation:** Reverse engineering protection
- **Certificate Validation:** SSL certificate verification
- **Input Validation:** Prevent injection attacks

### Automation Testing

#### Automation Strategy
- **Tool Selection:** Appium/XCUITest/Espresso
- **Automation Scope:** Core function regression testing
- **Execution Frequency:** Daily build automatic execution

#### Automation Script Example
```java
// iOS automation testing example
@Test
public void testLogin() {
    // Launch application
    driver.launchApp();
    
    // Enter username and password
    driver.findElement(By.id("username")).sendKeys("testuser");
    driver.findElement(By.id("password")).sendKeys("password");
    
    // Click login button
    driver.findElement(By.id("loginBtn")).click();
    
    // Verify login success
    Assert.assertTrue(driver.findElement(By.id("homeTitle")).isDisplayed());
}
```

### Test Execution Plan

#### Test Phases
1. **Functional Testing:** Core function verification
2. **Compatibility Testing:** Device and system compatibility
3. **Performance Testing:** Performance metrics verification
4. **User Acceptance Testing:** Real user experience verification

#### Test Environment
- **Real Device Testing:** Mainstream device real machine verification
- **Simulator Testing:** Quick function verification
- **Cloud Testing Platform:** Large-scale compatibility testing

### Quality Standards
- **Functional Completeness:** All functions work normally
- **Performance Achievement:** Meet performance metric requirements
- **Good Compatibility:** Normal operation on mainstream devices
- **Excellent User Experience:** Smooth operation, friendly interface
- **Security and Reliability:** No security vulnerabilities and privacy leaks

### Risk Assessment
| Risk Item | Impact Level | Response Strategy |
|-----------|--------------|-------------------|
| Device fragmentation | High | Focus device coverage |
| System upgrades | Medium | Timely adaptation testing |
| Performance issues | High | Performance monitoring optimization |
| Security vulnerabilities | High | Enhanced security testing |
```

---

## Execution Instructions

1. Analyze mobile application characteristics and user groups
2. Design comprehensive mobile testing strategy
3. Configure test devices and environment
4. Execute testing and continuously optimize

**Please provide mobile application information, and I will generate mobile testing plan.**