# TOP 5 Prompt Frameworks - Detailed Introduction

This directory contains detailed introductions and examples of the **TOP 5 prompt frameworks** prioritized for QA testing scenarios.

## 📋 Framework List

### 1. ROSES
**Role Objective Scenario Expected Solution Steps**

The ROSES framework structures prompts into five core components, suitable for testing scenarios that require clear role positioning and step-by-step guidance.

📄 [View ROSES Framework](./ROSES_EN.md)

**Core Elements:**
- **Role**: Specify the AI's role positioning
- **Objective**: Clearly define the goal or task to be achieved
- **Scenario**: Provide relevant background information and context
- **Expected Solution**: Describe the expected solution or outcome
- **Steps**: Specific steps needed to implement the solution

### 2. LangGPT
**LangGPT Structured Prompt Framework**

LangGPT is a comprehensive structured prompt framework suitable for complex test scenario design.

📄 [View LangGPT Framework](./LangGPT_EN.md)

**Core Elements:**
- **Role**: AI role definition
- **Profile**: Role background and capability description
- **Goals**: Clear goals and tasks
- **Constraints**: Limitations and rules
- **Skills**: Required skills and capabilities
- **Workflows**: Execution steps and processes
- **Initialization**: Initial setup and preparation

### 3. ICIO
**Instruction Context Input Data Output Indicator**

The ICIO framework emphasizes five dimensions: instruction, context, input data, output, and indicators. Suitable for testing scenarios that require clear input/output and evaluation metrics.

📄 [View ICIO Framework](./ICIO_EN.md)

**Core Elements:**
- **Instruction**: Clear instructions and task requirements
- **Context**: Relevant background information and environment
- **Input Data**: Required input data and information
- **Output**: Expected output format and content
- **Indicator**: Standards for evaluation and verification

### 4. CRISPE
**Capacity Role Insight Statement Personality Experiment**

The CRISPE framework includes six elements: capacity, role, insight, statement, personality, and experiment. Suitable for scenarios requiring in-depth analysis and experimental testing.

📄 [View CRISPE Framework](./CRISPE_EN.md)

**Core Elements:**
- **Capacity**: AI's capabilities and expertise
- **Role**: Role positioning and identity
- **Insight**: Deep understanding and analysis
- **Statement**: Clear statements and requirements
- **Personality**: Expression style and personality traits
- **Experiment**: Experimental methods and attempts

### 5. RISE
**Role Input Steps Expectation**

The RISE framework is concise and clear, containing four elements: role, input, steps, and expectation. Suitable for scenarios requiring quick prompt construction.

📄 [View RISE Framework](./RISE_EN.md)

**Core Elements:**
- **Role**: AI's role positioning
- **Input**: Input information and data
- **Steps**: Execution steps and processes
- **Expectation**: Expected results and output

## 🎯 How to Choose a Framework

### By Complexity
- **Simple and Quick**: RISE (4 elements)
- **Medium Complexity**: ICIO, CRISPE (5-6 elements)
- **Comprehensive and Detailed**: ROSES, LangGPT (5+ elements)

### By Scenario
- **Role-playing and Step Guidance**: ROSES, RISE
- **Complex Scenario Design**: LangGPT
- **Clear Input/Output**: ICIO
- **In-depth Analysis and Experimentation**: CRISPE

### Recommended Usage
Based on QA testing scenario practices, the **ROSES framework** performs best because it:
- Clearly defines role positioning
- Clearly states goals and tasks
- Provides scenario background
- Gives task completion steps
- Provides excellent guidance for test scenario design

## 📖 Practical Applications

Each framework has practical application examples in various test types under the `testing-types/` directory:

- **Standard-version/** - Standard version prompts
- **ROSES-version/** - ROSES framework version (Full/Lite, Chinese/English)
- **LangGPT-version/** - LangGPT framework version (Full/Lite, Chinese/English)
- **ICIO-version/** - ICIO framework version (Full/Lite, Chinese/English)
- **CRISPE-version/** - CRISPE framework version (Full/Lite, Chinese/English)
- **RISE-version/** - RISE framework version (Full/Lite, Chinese/English)

## 📚 References

- [Prompt Engineering](https://zhuanlan.zhihu.com/p/714268516)
- [OpenAI Prompt Engineering](https://zhuanlan.zhihu.com/p/718936272)
- [Ten Prompt Frameworks for Creating Quality Prompts](https://juejin.cn/post/7287412759050289212)

---

**Last Updated**: 2025-01-26
