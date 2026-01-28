# TOP 5 Prompt Frameworks Introduction

[中文版本](./top5-frameworks-intro.md)

## 📚 Overview

This document provides detailed introductions to the **TOP 5 prompt frameworks** most commonly used and effective in QA testing scenarios. These frameworks have been validated through practice and can significantly improve the quality and efficiency of AI-assisted testing.

## 🏆 TOP 5 Framework Rankings

Based on practicality, usability, output quality, and applicability, we recommend the following TOP 5 frameworks:

1. **ROSES** - Most Complete Framework ⭐⭐⭐⭐⭐
2. **CRISPE** - Most In-Depth Framework ⭐⭐⭐⭐⭐  
3. **LangGPT** - Most Systematic Framework ⭐⭐⭐⭐
4. **ICIO** - Most Data-Driven Framework ⭐⭐⭐⭐
5. **RISE** - Most Concise Framework ⭐⭐⭐⭐

---

## 1️⃣ ROSES Framework

### 📖 Framework Overview

**Full Name**: Role Objective Scenario Expected Solution Steps

**Creator**: Community Contribution

**Core Philosophy**: Build complete testing prompts by clarifying role, objective, scenario, expected solution, and execution steps

### 🎯 Framework Structure

```markdown
Role: Specify the AI's role
Objective: State the goal to achieve
Scenario: Describe the specific testing scenario
Expected Solution: Define the desired output
Steps: Ask for specific steps needed to achieve the goal
```

### ✨ Core Advantages

| Advantage | Description |
|-----------|-------------|
| **Completeness** | Covers all key elements of testing |
| **Structured** | Clear five-step structure, easy to understand |
| **Actionable** | Clear step guidance, easy to execute |
| **Adaptable** | Suitable for various complex testing scenarios |

### 📝 Practical Examples

#### Example 1: API Performance Testing

```markdown
Role: You are a performance testing expert with 10 years of experience
Objective: Design a complete API performance testing plan
Scenario: During promotional events on an e-commerce platform, API call volume surges, requiring verification of system performance under high load
Expected Solution: Provide a complete plan including load testing, stress testing, and stability testing, with specific test metrics and pass criteria
Steps: 
1. Analyze business scenarios and user behavior patterns
2. Design load models and test data
3. Develop performance testing strategy
4. Write automated test scripts
5. Execute tests and analyze results
6. Provide performance optimization recommendations
```

#### Example 2: Security Testing

```markdown
Role: You are a senior security testing engineer, proficient in OWASP Top 10
Objective: Conduct comprehensive security testing on a web application
Scenario: A financial system requires security assessment before going live to ensure compliance with security standards
Expected Solution: Provide detailed security testing report including vulnerability discovery, risk assessment, and remediation recommendations
Steps:
1. Conduct threat modeling analysis
2. Execute automated vulnerability scanning
3. Perform manual penetration testing
4. Verify authentication and authorization mechanisms
5. Test data encryption and transmission security
6. Write security testing report
```

### 🎯 Applicable Scenarios

- ✅ Complex test project design
- ✅ Tasks requiring detailed step guidance
- ✅ Multi-phase test plans
- ✅ Team collaboration test plans

### 💡 Usage Tips

1. **Clear Role Definition**: Specify experience level and expertise
2. **Specific Scenario Description**: Provide sufficient background and constraints
3. **Clear Expected Solution**: Define output format and quality standards
4. **Actionable Steps**: Ensure each step is executable

---

## 2️⃣ CRISPE Framework

### 📖 Framework Overview

**Full Name**: Capacity and Role, Insight, Statement, Personality, Experiment

**Creator**: Matt Nigh

**Core Philosophy**: Obtain deep and diverse testing solutions through capability positioning, insight analysis, task statement, personalized style, and experimental output

### 🎯 Framework Structure

```markdown
Capacity and Role: Define AI's capabilities and role
Insight: Provide background insights and context
Statement: Clarify the task to complete
Personality: Define output style and personality
Experiment: Request multiple examples or solutions
```

### ✨ Core Advantages

| Advantage | Description |
|-----------|-------------|
| **Deep Analysis** | Emphasizes insight, provides in-depth analysis |
| **Personalization** | Supports customized output styles |
| **Diversity** | Obtains multiple solutions through experiment element |
| **Professionalism** | Emphasizes capability and professional background |

### 📝 Practical Examples

#### Example 1: Performance Bottleneck Analysis

```markdown
Capacity and Role: You are a performance optimization expert with 15 years of experience, proficient in system architecture and performance tuning
Insight: Performance bottlenecks often hide in system critical paths and require multi-dimensional analysis for accurate identification. Database queries, network latency, and code logic can all become bottleneck points
Statement: Analyze system performance test results, identify performance bottlenecks, and provide optimization solutions
Personality: Analyze with professional and rigorous attitude, provide data-supported conclusions and feasible optimization recommendations
Experiment: Provide at least 3 different performance optimization solutions, including short-term quick optimizations and long-term architectural optimizations
```

#### Example 2: Test Strategy Design

```markdown
Capacity and Role: You are a test architect skilled in designing enterprise-level testing systems
Insight: Effective test strategies need to balance test coverage, cost, and time. The test pyramid theory emphasizes many unit tests, moderate integration tests, and few UI tests
Statement: Design a complete test strategy for an e-commerce platform with microservices architecture
Personality: Plan with strategic thinking, focus on practicality and implementability
Experiment: Provide differentiated test strategies for different project phases (MVP, growth, maturity)
```

### 🎯 Applicable Scenarios

- ✅ Testing tasks requiring deep analysis
- ✅ Scenarios requiring professional insights
- ✅ Need multiple solution comparisons
- ✅ Specific output style requirements

### 💡 Usage Tips

1. **Emphasize Capability**: Clarify expertise and experience depth
2. **Provide Insights**: Share industry best practices and key considerations
3. **Personalize Output**: Specify desired expression style and professionalism
4. **Request Experiments**: Clarify number of solutions and differentiation requirements

---

## 3️⃣ LangGPT Framework

### 📖 Framework Overview

**Full Name**: LangGPT Structured Prompt Framework

**Creator**: Yunzhong Jiangshu (Liu Yuanzhong)

**Core Philosophy**: Make prompt writing as standardized and maintainable as programming through templating and structuring

### 🎯 Framework Structure

```markdown
# Role: Role Name

## Profile:
- author: Author
- version: Version
- language: Language
- description: Role description

## Goals: 
- Goal 1
- Goal 2

## Constrains:
- Constraint 1
- Constraint 2

## Skills:
- Skill 1
- Skill 2

## Workflows:
1. Workflow step 1
2. Workflow step 2

## Initialization:
Initialization prompt
```

### ✨ Core Advantages

| Advantage | Description |
|-----------|-------------|
| **Systematic** | Most complete structured framework |
| **Maintainable** | Template design, easy to update |
| **Reusable** | Supports variables and modularization |
| **Standardized** | Unified format specification |

### 📝 Practical Example

#### Example: Automation Testing Framework Designer

```markdown
# Role: Automation Testing Framework Designer

## Profile:
- author: QA Team
- version: 1.0
- language: English
- description: Focused on designing and building high-quality, maintainable automation testing frameworks

## Goals:
- Design automation testing framework suitable for project characteristics
- Provide complete framework architecture and technology selection recommendations
- Ensure framework scalability and maintainability
- Provide detailed implementation guidelines and best practices

## Constrains:
- Framework design must consider team technology stack
- Need to balance automation cost and benefits
- Follow test pyramid principles
- Ensure reasonable framework learning curve

## Skills:
- Proficient in mainstream automation testing tools (Selenium, Appium, Cypress, etc.)
- Familiar with various programming languages (Java, Python, JavaScript)
- Understand CI/CD integration and DevOps practices
- Master test framework design patterns (Page Object, Data-Driven, etc.)

## Workflows:
1. Analyze project characteristics and technology stack
2. Evaluate team capabilities and resources
3. Select appropriate testing tools and frameworks
4. Design framework architecture and directory structure
5. Define coding standards and best practices
6. Provide sample code and documentation
7. Develop implementation plan and training program

## Initialization:
Welcome! I am an Automation Testing Framework Designer. Please provide your project information, and I will design the most suitable automation testing framework for you.
```

### 🎯 Applicable Scenarios

- ✅ Long-term maintained testing frameworks
- ✅ Standardized team collaboration projects
- ✅ Reusable test template development
- ✅ Enterprise-level test system construction

### 💡 Usage Tips

1. **Version Management**: Use version field to track framework versions
2. **Modular Design**: Break complex tasks into independent Skills and Workflows
3. **Clear Constraints**: List all limitations in Constrains
4. **Friendly Initialization**: Provide clear Initialization guidance

---

## 4️⃣ ICIO Framework

### 📖 Framework Overview

**Full Name**: Instruction, Context, Input Data, Output Indicator

**Creator**: Community Contribution

**Core Philosophy**: Emphasize data flow, achieve data-driven testing through clear input/output and evaluation metrics

### 🎯 Framework Structure

```markdown
Instruction: Clear task instruction
Context: Relevant background information
Input Data: Specific input data or parameters
Output Indicator: Expected output and evaluation criteria
```

### ✨ Core Advantages

| Advantage | Description |
|-----------|-------------|
| **Data-Oriented** | Emphasizes clarity of input/output |
| **Quantifiable** | Provides clear evaluation metrics |
| **Concise & Efficient** | Simple structure, easy to use |
| **Suitable for API Testing** | Naturally fits interface testing scenarios |

### 📝 Practical Examples

#### Example 1: API Interface Testing

```markdown
Instruction: Design complete test cases for user login API
Context: RESTful API, uses JWT authentication, supports email and phone login
Input Data:
- Normal data: {"email": "user@example.com", "password": "Pass123!"}
- Boundary data: Minimum/maximum length passwords
- Exception data: Invalid email format, empty password
- Security data: SQL injection, XSS attack strings
Output Indicator:
- Successful login: Return 200 status code and valid JWT token
- Failed login: Return 401 status code and error message
- Response time: < 500ms
- Error rate: < 0.1%
```

#### Example 2: Database Performance Testing

```markdown
Instruction: Evaluate database query performance and provide optimization recommendations
Context: MySQL 8.0, order table with 10 million records, needs to support complex queries
Input Data:
- Query types: Single table query, multi-table JOIN, aggregate query
- Concurrency: 100/500/1000 concurrent users
- Data volume: Current 10 million, expected to grow to 50 million
Output Indicator:
- Query response time: P95 < 100ms, P99 < 500ms
- QPS: > 1000
- CPU usage: < 70%
- Slow query count: 0
```

### 🎯 Applicable Scenarios

- ✅ API interface testing
- ✅ Database testing
- ✅ Performance metric validation
- ✅ Data-driven testing

### 💡 Usage Tips

1. **Complete Input Data**: Cover normal, boundary, exception, security data
2. **Quantifiable Metrics**: Use specific numbers and percentages
3. **Sufficient Context**: Provide adequate technical background
4. **Clear Instructions**: Clearly state expected output format

---

## 5️⃣ RISE Framework

### 📖 Framework Overview

**Full Name**: Role, Input, Steps, Expectation

**Creator**: Community Contribution

**Core Philosophy**: Quickly build effective testing prompts with the most concise structure

### 🎯 Framework Structure

```markdown
Role: Define AI's role
Input: Provide input information
Steps: Explain execution steps
Expectation: Describe expected output
```

### ✨ Core Advantages

| Advantage | Description |
|-----------|-------------|
| **Conciseness** | Most streamlined framework structure |
| **Efficiency** | Quick to start, immediate use |
| **Flexibility** | Adapts to various quick tasks |
| **Easy to Learn** | Lowest learning cost |

### 📝 Practical Examples

#### Example 1: Quick Bug Verification

```markdown
Role: You are a test engineer
Input: User reports unable to enter password on login page in Chrome browser
Steps:
1. Open login page in Chrome browser
2. Try entering content in password field
3. Check browser console for errors
4. Verify if same issue exists in other browsers
Expectation: Provide bug reproduction steps, root cause analysis, and fix recommendations
```

#### Example 2: Simple Functional Testing

```markdown
Role: You are a functional tester
Input: Test shopping cart add product functionality
Steps:
1. Browse product list
2. Click "Add to Cart" button
3. Verify cart quantity update
4. Open cart to view product information
Expectation: List all test points and expected results, including positive and negative scenarios
```

### 🎯 Applicable Scenarios

- ✅ Urgent tasks
- ✅ Simple testing scenarios
- ✅ Quick validation
- ✅ Ad-hoc testing needs

### 💡 Usage Tips

1. **Concise Role**: Simple and clear role definition
2. **Specific Input**: Provide key input information
3. **Clear Steps**: List core execution steps
4. **Clear Expectation**: Clearly state expected output

---

## 📊 Comprehensive Framework Comparison

### Complexity Comparison

```
Simple ←―――――――――――――――――――――――――――→ Complex
RISE < ICIO < Standard < ROSES < CRISPE < LangGPT
```

### Output Quality Comparison

```
Basic ←―――――――――――――――――――――――――――→ Advanced
RISE < Standard < ICIO < LangGPT < ROSES = CRISPE
```

### Learning Curve Comparison

```
Easy ←―――――――――――――――――――――――――――→ Difficult
RISE < Standard < ICIO < ROSES < CRISPE < LangGPT
```

## 🎯 Selection Recommendation Matrix

| Need | Preferred Framework | Alternative Framework |
|------|---------------------|----------------------|
| Quick Tasks | RISE | Standard |
| Complex Projects | ROSES | CRISPE |
| Deep Analysis | CRISPE | ROSES |
| Systematic | LangGPT | ROSES |
| API Testing | ICIO | Standard |
| Security Testing | CRISPE | ROSES |
| Performance Testing | ROSES | LangGPT |
| Beginner Use | Standard | RISE |

## 📚 Recommended Learning Path

### Beginner Path (1-2 weeks)
1. Standard Framework - Master basic structure
2. RISE Framework - Learn simplified application
3. Practice: Complete 5 simple testing tasks

### Intermediate Path (1 month)
1. ICIO Framework - Understand data-driven approach
2. ROSES Framework - Master complete process
3. Practice: Complete 3 medium complexity projects

### Advanced Path (2-3 months)
1. CRISPE Framework - Deep analysis capability
2. LangGPT Framework - Systematic thinking
3. Practice: Build enterprise-level testing system

## 🔗 Related Resources

- [Framework Selection Guide](./framework-selection-guide_EN.md)
- [Detailed Framework Documentation](../prompt-frameworks/frameworks/)
- [Testing Type Application Examples](../testing-types/)

---

**Last Updated**: 2026-01-28
**Version**: v1.0
