# Accessibility Testing

English | [简体中文](./README.md)

## Module Overview

The Accessibility Testing module provides comprehensive accessibility testing guidance, helping testing teams ensure products have good usability and inclusivity for all users (including users with disabilities), meeting international accessibility standards such as WCAG, Section 508, and ADA.

## Core Features

### ♿ Comprehensive Standards Coverage
- **WCAG 2.1/2.2:** Complete coverage of Web Content Accessibility Guidelines
- **Section 508:** U.S. Federal Government accessibility standards
- **ADA Compliance:** Americans with Disabilities Act digital accessibility requirements
- **EN 301 549:** European Union accessibility standards
- **Localized Standards:** National and regional accessibility regulations

### 🎯 Four Accessibility Principles
- **Perceivable:** Information and UI components presented in ways users can perceive
- **Operable:** UI components and navigation must be operable
- **Understandable:** Information and UI operation must be understandable
- **Robust:** Content must be robust enough to be reliably interpreted by various user agents

### 🔧 Multi-Dimensional Testing Methods
- **Automated Testing:** Using tools like axe-core, Pa11y, Lighthouse
- **Manual Testing:** Professional manual accessibility verification
- **Assistive Technology Testing:** Real environment testing with screen readers, voice control, etc.
- **User Testing:** Usability testing with real users with disabilities

### 🌐 Cross-Platform Support
- **Web Applications:** Browser compatibility and web standards
- **Mobile Applications:** iOS VoiceOver and Android TalkBack
- **Desktop Applications:** Operating system accessibility APIs
- **Hybrid Applications:** Cross-platform consistent experience

## File Description

### Chinese Prompts
- **File:** `AccessibilityTestingPrompt.md`
- **Role:** Senior Accessibility Testing Expert (10+ years experience)
- **Use Case:** Chinese project teams, accessibility compliance requirements

### English Prompts
- **File:** `AccessibilityTestingPrompt_EN.md`
- **Role:** Senior Accessibility Testing Expert
- **Use Case:** International teams, English project environments

### Lite Version Prompts
- **File:** `AccessibilityTestingPrompt_Lite.md` / `AccessibilityTestingPrompt_Lite_EN.md`
- **Features:** Quick start, focused on core points
- **Use Case:** Quick assessment and basic accessibility testing

## Usage Guide

### Quick Start

1. **Select Prompt File**
   - Full Version: In-depth accessibility testing and compliance verification
   - Lite Version: Quick accessibility assessment and basic testing

2. **Prepare Input Materials**
   ```
   Product Info: [Web/Mobile/Desktop application basic information]
   User Groups: [Target users with disabilities]
   Compliance Requirements: [Accessibility standards to meet]
   Test Scope: [Features and pages to test]
   ```

3. **Get Accessibility Test Plan**
   - Complete WCAG compliance testing strategy
   - Detailed assistive technology testing plan
   - Professional user testing design
   - Comprehensive issue remediation recommendations

### Application Scenarios

#### 1. WCAG Compliance Testing
```markdown
Test Focus: Four principles, three levels (A/AA/AAA)
Test Method: Automated scanning + Manual verification + Assistive technology testing
Tool Recommendations: axe-core, WAVE, Lighthouse
Expected Benefits: Meet regulatory requirements, avoid legal risks
```

#### 2. Screen Reader Compatibility Testing
```markdown
Test Focus: NVDA, JAWS, VoiceOver, TalkBack compatibility
Test Method: Real assistive technology environment testing
Key Verification: Semantic HTML, ARIA attributes, reading order
Expected Benefits: Visually impaired users can use product normally
```

#### 3. Keyboard Accessibility Testing
```markdown
Test Focus: Full keyboard operation, focus management, shortcuts
Test Method: Pure keyboard operation verification
Key Verification: Tab navigation, focus visibility, keyboard traps
Expected Benefits: Users with motor disabilities can operate normally
```

#### 4. Mobile Device Accessibility Testing
```markdown
Test Focus: Touch targets, gesture operations, voice control
Test Method: iOS VoiceOver and Android TalkBack testing
Key Verification: Touch target size, gesture navigation, voice feedback
Expected Benefits: Good experience for mobile users with disabilities
```

## Testing Methods

### WCAG 2.1 Testing Methods

#### Perceivable Testing
- **Text Alternatives:** All non-text content has text alternatives
- **Time-based Media:** Audio and video content has alternatives
- **Adaptable:** Content can be presented in different ways without losing information
- **Distinguishable:** Users can more easily see and hear content

#### Operable Testing
- **Keyboard Accessible:** All functionality available via keyboard
- **No Seizures:** Content does not cause seizures
- **Navigable:** Users can navigate and find content
- **Input Modalities:** Users can more easily operate through various input methods

#### Understandable Testing
- **Readable:** Text content is readable and understandable
- **Predictable:** Web pages appear and operate in predictable ways
- **Input Assistance:** Help users avoid and correct mistakes

#### Robust Testing
- **Compatible:** Content can be reliably interpreted by various user agents

### Assistive Technology Testing Methods

#### Screen Reader Testing
- **NVDA Testing:** Free screen reader for Windows
- **JAWS Testing:** Professional screen reader for Windows
- **VoiceOver Testing:** Built-in screen reader for macOS and iOS
- **TalkBack Testing:** Built-in screen reader for Android

#### Voice Control Testing
- **Dragon NaturallySpeaking:** Professional speech recognition software
- **Windows Speech Recognition:** Built-in voice control for Windows
- **Voice Control:** Voice control for macOS and iOS
- **Voice Access:** Voice access for Android

#### Alternative Input Device Testing
- **Head Tracker:** Head movement control devices
- **Eye Tracker:** Eye tracking control devices
- **Switch Control:** Single or multiple switch control
- **Touchpad Alternatives:** Various touchpad alternative devices

## Tool Recommendations

### Automated Testing Tools
- **axe-core:** Most comprehensive accessibility automation testing library
- **Pa11y:** Command-line accessibility testing tool
- **Lighthouse:** Chrome built-in accessibility audit tool
- **WAVE:** Web accessibility evaluation tool
- **Accessibility Insights:** Microsoft accessibility testing tool

### Manual Testing Tools
- **Colour Contrast Analyser:** Color contrast analysis tool
- **HeadingsMap:** Page heading structure visualization tool
- **Web Developer:** Browser developer tools extension
- **Accessibility Developer Tools:** Chrome accessibility developer tools

### Assistive Technology Simulation
- **NVDA:** Free open-source screen reader
- **VoiceOver:** Built-in screen reader for macOS and iOS
- **Chrome Vox:** Chrome browser screen reader extension
- **Windows Narrator:** Built-in screen reader for Windows

### Color and Contrast Tools
- **WebAIM Contrast Checker:** Online contrast checking tool
- **Stark:** Accessibility plugin for design tools
- **Colorblinding:** Color blindness simulation tool
- **Sim Daltonism:** macOS color blindness simulation app

## Best Practices

### 1. Design Phase
- **Inclusive Design:** Consider accessibility from design phase
- **Color Usage:** Don't rely solely on color to convey information
- **Contrast:** Ensure sufficient color contrast
- **Font Selection:** Choose readable fonts and appropriate sizes

### 2. Development Phase
- **Semantic HTML:** Use correct HTML tags
- **ARIA Attributes:** Properly use ARIA labels and attributes
- **Keyboard Support:** Ensure all functionality supports keyboard operation
- **Focus Management:** Reasonable focus order and visibility

### 3. Testing Phase
- **Automated Scanning:** Use tools for initial scanning
- **Manual Verification:** Manually verify issues automation can't detect
- **Assistive Technology Testing:** Test with real assistive technologies
- **User Testing:** Invite users with disabilities to participate in testing

### 4. Maintenance Phase
- **Continuous Monitoring:** Establish continuous accessibility monitoring
- **Regular Audits:** Conduct regular accessibility audits
- **Training:** Team accessibility knowledge training
- **Culture Building:** Build inclusive team culture

## Compliance Requirements

### WCAG 2.1 Level Requirements
- **Level A:** Minimum accessibility requirements, basic compliance
- **Level AA:** Standard accessibility requirements, legal compliance
- **Level AAA:** Highest accessibility requirements, excellent experience

### Regulatory Compliance
- **ADA Compliance:** Americans with Disabilities Act requirements
- **Section 508:** U.S. Federal Government standards
- **EN 301 549:** European Union accessibility standards
- **Local Regulations:** National and regional accessibility laws

### Industry Standards
- **ISO/IEC 40500:** International Organization for Standardization accessibility standard
- **JIS X 8341:** Japanese Industrial Standards
- **BS 8878:** British accessibility standard
- **DIN EN 301 549:** German accessibility standard

## Learning Resources

### Official Documentation
- **WCAG 2.1:** W3C official accessibility guidelines
- **WAI-ARIA:** W3C ARIA specification documentation
- **Section 508:** U.S. Government accessibility standards
- **WebAIM:** Accessibility education and resource website

### Online Courses
- **Coursera Accessibility Courses:** University-level accessibility courses
- **edX Inclusive Design:** Inclusive design specialization courses
- **Udacity Accessibility:** Front-end development accessibility courses
- **FreeCodeCamp:** Free accessibility programming tutorials

### Practice Platforms
- **WebAIM Screen Reader Testing:** Screen reader testing guide
- **Accessibility Developer Guide:** Developer accessibility guide
- **A11y Project:** Community-driven accessibility resources
- **Inclusive Design Toolkit:** Inclusive design toolkit

## Contribution Guide

Welcome to contribute to the Accessibility Testing module:

1. **Share Cases:** Share successful accessibility testing cases
2. **Improve Methods:** Supplement testing methods and best practices
3. **Tool Recommendations:** Recommend new accessibility testing tools
4. **Standards Updates:** Update latest accessibility standards information

## License

This module follows the MIT License. See the [LICENSE](../LICENSE) file in the project root directory for details.

---

**Make the digital world accessible to everyone!** ♿✨
