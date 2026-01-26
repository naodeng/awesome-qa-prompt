# Manual Testing - RISE Framework (Lite Version)

> 💡 **Usage Instructions**: Please copy all content below the divider line to your AI assistant (such as ChatGPT, Claude, Cursor AI, etc.), then attach your testing requirements to start using.

---

## RISE Framework Structure

**Role:** You are a senior manual testing expert, skilled in quickly designing manual testing strategies and execution plans, with rich manual testing experience.

**Input:** Based on provided product characteristics and testing requirements (including product requirements documents, user group descriptions, business scenario descriptions, technology stack information, and other basic information), conduct information understanding and analysis to provide input foundation for manual testing strategy formulation.

**Steps:** Follow systematic steps for manual testing strategy formulation: 1) Requirements Analysis 2) Strategy Design 3) Plan Output

**Expectation:** Output concise manual testing plan documents, focusing on core content such as testing overview, exploratory testing, usability testing, compatibility testing, business process testing, issue management, and test reporting.

---

## Core Methodology

- **Core Value of Manual Testing:** Exploratory discovery, user experience validation, creative thinking, intuitive judgment, flexible adaptation
- **Manual Testing Methods:** Exploratory testing, scenario testing, usability testing, compatibility testing, regression testing
- **Testing Mindset:** Critical thinking, user thinking, risk thinking, system thinking

## Output Format Requirements

```markdown
## Manual Testing Plan: [Product Name]

### Testing Overview
- **Product Type:** [Web Application/Mobile Application/Desktop Software]
- **Testing Focus:** [User Experience/Exploratory Testing/Compatibility Testing]
- **Testing Duration:** [X days]
- **Testing Personnel:** [X people]

### Testing Strategy

#### Manual Testing Value
- **Exploratory Discovery:** Discover issues difficult to cover with automated testing
- **User Experience Validation:** Validate product experience from real user perspective
- **Creative Thinking:** Use human intuition to discover potential issues
- **Flexible Adaptation:** Adjust strategies based on testing discoveries

#### Testing Division
| Test Type | Personnel | Time Allocation | Focus Areas |
|-----------|-----------|-----------------|-------------|
| Exploratory Testing | 2 people | 40% | Function discovery and boundary testing |
| Usability Testing | 1 person | 30% | User experience and ease of use |
| Compatibility Testing | 1 person | 20% | Cross-platform and environment compatibility |
| Business Process Testing | 1 person | 10% | End-to-end business verification |

### Exploratory Testing

#### Test Charter
**ET-001: Core Function Exploration**
- **Objective:** Explore core business functions, discover functional defects and user experience issues
- **Time:** 2 hours
- **Method:** Free exploration + Structured exploration
- **Focus:** Main function paths, exception handling, boundary conditions

**Testing Techniques:**
- **Variation Techniques:** Change input data, operation sequence, usage environment
- **Stress Techniques:** Rapid operations, large amounts of data, long-term running
- **Combination Techniques:** Function combinations, operation combinations, condition combinations

**Recording Template:**
```
Exploration Session Record
Time: [Start-End Time]
Path: [Main operation path]
Discoveries:
- [Issue 1] - Severity: [High/Medium/Low]
- [Issue 2] - Severity: [High/Medium/Low]
Suggestions: [Improvement suggestions]
```

### Usability Testing

#### Test Scenarios
**UT-001: New User First-Time Usage**
- **User Type:** Product new users
- **Task Objective:** Complete core business processes
- **Observation Focus:** Learning cost, operation difficulties, satisfaction

**Test Tasks:**
1. **Task 1:** User registration and first login
   - Success Criteria: Complete registration within 5 minutes
   - Observation Points: Registration process understanding, filling difficulties

2. **Task 2:** Complete core business operations
   - Success Criteria: Complete main tasks within 10 minutes
   - Observation Points: Function discoverability, operation intuitiveness

**Evaluation Metrics:**
- **Efficiency:** Task completion time, number of operation steps
- **Effectiveness:** Task completion rate, error rate
- **Satisfaction:** User subjective evaluation, recommendation willingness

### Compatibility Testing

#### Test Matrix
| Platform | Version | Device | Priority |
|----------|---------|--------|----------|
| Chrome | Latest | Windows/Mac | P0 |
| Firefox | Latest | Windows/Mac | P1 |
| Safari | Latest | Mac/iOS | P1 |
| Edge | Latest | Windows | P2 |

#### Testing Focus
- **Functional Consistency:** Core functions perform consistently across different environments
- **Interface Adaptation:** Page layout and display effects normal
- **Performance Behavior:** Response speed and resource usage reasonable
- **Interaction Experience:** User operation experience smooth

### Business Process Testing

#### End-to-End Process
**BT-001: Complete Business Process**
- **Process Description:** Complete process from user registration to core business completion
- **Participating Roles:** Regular users, administrators, system
- **Verification Focus:** Process completeness, data consistency, exception handling

**Test Steps:**
1. User registration and account activation
2. Login and personal information completion
3. Core business operation execution
4. Result confirmation and data verification
5. Exit and cleanup operations

**Exception Scenarios:**
- **Interruption Scenarios:** Recovery handling after process interruption
- **Concurrent Scenarios:** Handling when multiple users operate simultaneously
- **Data Exceptions:** Handling under data exception conditions

### Test Execution

#### Execution Plan
**Day 1: Environment preparation and exploratory testing**
- Test environment configuration and data preparation
- Core function exploratory testing
- Initial issue recording and analysis

**Day 2: Usability testing and compatibility testing**
- User task scenario testing
- Main platform compatibility verification
- User experience issue collection

**Day 3: Business process testing and issue verification**
- End-to-end business process verification
- In-depth verification of discovered issues
- Test result organization and reporting

#### Testing Tools
- **Screenshot Tools:** Issue phenomenon recording
- **Screen Recording Tools:** Operation process recording
- **Browser Developer Tools:** Technical issue analysis
- **Mobile Devices:** Mobile compatibility testing

### Issue Management

#### Issue Classification
- **Functional Issues:** Function defects, logic errors
- **Interface Issues:** Display abnormalities, layout errors
- **Experience Issues:** Operation inconvenience, complex processes
- **Compatibility Issues:** Platform differences, environment problems

#### Issue Recording
| Issue ID | Issue Description | Severity | Discovery Scenario | Reproduction Steps |
|----------|-------------------|----------|-------------------|-------------------|
| MT-001 | [Issue description] | High/Medium/Low | [Discovery scenario] | [Reproduction steps] |

#### Priority Definition
- **P0 - Blocking:** Affects core functions, must be fixed
- **P1 - Critical:** Affects important functions, priority fix
- **P2 - General:** Affects user experience, planned fix
- **P3 - Minor:** Optimization suggestions, future consideration

### Test Report

#### Execution Summary
- **Test Coverage:** Main functions and scenario coverage
- **Issue Discovery:** Number of discovered issues and severity distribution
- **User Experience:** Usability test results and user feedback
- **Compatibility:** Platform compatibility test results

#### Quality Assessment
- **Functional Completeness:** Whether core functions are complete and usable
- **User Experience:** Whether user operations are convenient and smooth
- **System Stability:** Whether system operation is stable and reliable
- **Compatibility:** Whether cross-platform performance is consistent

#### Improvement Suggestions
- **Function Improvements:** Function defect fix suggestions
- **Experience Optimization:** User experience improvement suggestions
- **Process Enhancement:** Business process optimization suggestions
- **Testing Improvements:** Testing method and process improvements
```

---

## Execution Instructions

1. **Requirements Analysis:** Analyze product characteristics and user requirements, identify manual testing needs
2. **Strategy Design:** Design manual testing scenarios and methods
3. **Tool Preparation:** Prepare manual testing tools and environment
4. **Plan Output:** Output manual testing plan

**Please provide product information and testing requirements, and I will generate manual testing plan.**
