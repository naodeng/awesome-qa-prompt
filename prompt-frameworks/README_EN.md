# TOP 5 Prompt Frameworks

This directory contains introductions and descriptions of the **TOP 5 prompt frameworks** most prioritized for QA testing scenarios.

## 📚 Framework List

### 1. ROSES
**Role Objective Scenario Expected Solution Steps**

The ROSES framework structures prompts into five core components: role, objective, scenario, expected solution, and steps. Suitable for testing scenarios that require clear role positioning and step-by-step guidance.

📄 [View ROSES Framework](./frameworks/ROSES_EN.md)

### 2. LangGPT
**LangGPT Structured Prompt Framework**

LangGPT is a comprehensive structured prompt framework that includes role, background, goals, constraints, skills, workflows, and other elements. Suitable for complex test scenario design.

📄 [View LangGPT Framework](./frameworks/LangGPT_EN.md)

### 3. ICIO
**Instruction Context Input Data Output Indicator**

The ICIO framework emphasizes five dimensions: instruction, context, input data, output, and indicators. Suitable for testing scenarios that require clear input/output and evaluation metrics.

📄 [View ICIO Framework](./frameworks/ICIO_EN.md)

### 4. CRISPE
**Capacity Role Insight Statement Personality Experiment**

The CRISPE framework includes six elements: capacity, role, insight, statement, personality, and experiment. Suitable for scenarios requiring in-depth analysis and experimental testing.

📄 [View CRISPE Framework](./frameworks/CRISPE_EN.md)

### 5. RISE
**Role Input Steps Expectation**

The RISE framework is concise and clear, containing four elements: role, input, steps, and expectation. Suitable for scenarios requiring quick prompt construction.

📄 [View RISE Framework](./frameworks/RISE_EN.md)

## 📁 Directory Structure

```
prompt-frameworks/
├── README.md              # This file (English)
├── README_EN.md           # This file (Chinese)
└── frameworks/            # TOP 5 framework introduction files
    ├── ROSES.md           # ROSES framework (Chinese)
    ├── ROSES_EN.md        # ROSES framework (English)
    ├── LangGPT.md         # LangGPT framework (Chinese)
    ├── LangGPT_EN.md      # LangGPT framework (English)
    ├── ICIO.md            # ICIO framework (Chinese)
    ├── ICIO_EN.md         # ICIO framework (English)
    ├── CRISPE.md          # CRISPE framework (Chinese)
    ├── CRISPE_EN.md       # CRISPE framework (English)
    ├── RISE.md            # RISE framework (Chinese)
    ├── RISE_EN.md         # RISE framework (English)
    ├── README.md          # Framework directory description (Chinese)
    └── README_EN.md       # Framework directory description (English)
```

## 🎯 Usage Guide

1. **Browse Framework Introductions**: View the framework introduction files in the `frameworks/` directory
2. **Choose the Appropriate Framework**: Select the most suitable framework based on test scenario characteristics
3. **View Practical Applications**: Check the `testing-types/` directory for specific application examples of each test type

## 📖 Related Resources

- **Test Type Prompts**: Check the `testing-types/` directory to learn about practical applications of each test type under different frameworks
- **Framework Versions**: Each test type provides Standard-version and TOP 5 framework versions (ROSES-version, LangGPT-version, ICIO-version, CRISPE-version, RISE-version)

---

**Last Updated**: 2025-01-26
