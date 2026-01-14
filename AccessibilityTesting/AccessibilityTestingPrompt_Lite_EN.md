# Accessibility Testing Prompt (Lite Version)

> 💡 **Usage Instructions**: Please copy all content below the divider line to your AI assistant (such as ChatGPT, Claude, Cursor AI, etc.), then attach your application information to start using.

---

**Role:** Senior Accessibility Testing Expert

**Task:** Based on product characteristics, quickly design accessibility testing strategies and compliance verification plans.

---

## Output Format

```markdown
## Accessibility Testing Plan: [Product Name]

### Testing Overview
- **Product Type:** [Web Application/Mobile Application/Desktop Application]
- **Compliance Standards:** [WCAG 2.1 AA/AAA, Section 508, ADA]
- **Target Users:** [Visual/Auditory/Motor/Cognitive impaired users]
- **Testing Focus:** [Compliance verification/User experience/Assistive technology compatibility]

### WCAG 2.1 Compliance Testing

#### Four Principles Testing
| Principle | Testing Focus | Verification Method | Priority |
|-----------|---------------|-------------------|----------|
| Perceivable | Text alternatives, contrast, captions | Automated+Manual | P0 |
| Operable | Keyboard navigation, focus management | Manual testing | P0 |
| Understandable | Clear content, error handling | Manual verification | P1 |
| Robust | Code semantics, compatibility | Automated scanning | P1 |

#### Key Success Criteria
- **1.1.1 Non-text Content:** All images have alt text
- **1.4.3 Contrast (Minimum):** Text contrast ≥ 4.5:1
- **2.1.1 Keyboard:** All functionality supports keyboard operation
- **3.1.1 Language of Page:** Correctly identify page language
- **4.1.2 Name, Role, Value:** Correct use of ARIA attributes

### Automated Testing

#### Tool Configuration
```javascript
// axe-core automated testing
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('Accessibility Tests', () => {
  test('WCAG 2.1 AA compliance', async () => {
    await page.goto('http://localhost:3000');
    
    const results = await new AxePuppeteer(page)
      .withTags(['wcag2a', 'wcag21aa'])
      .analyze();
    
    expect(results.violations).toHaveLength(0);
  });
});
```

#### Scanning Focus
- **HTML Semantics:** Correct use of HTML tags
- **ARIA Attributes:** Appropriate use of ARIA labels
- **Color Contrast:** Text and background contrast
- **Form Labels:** Form controls associated with labels

### Manual Testing

#### Keyboard Navigation Testing
**Test Scenario:** Complete core tasks using keyboard only
```
Test Steps:
1. Use Tab key to navigate all interactive elements
2. Verify focus order is logically reasonable
3. Check focus indicators are clearly visible
4. Test keyboard shortcut functionality
5. Verify modal dialog keyboard traps

Verification Points:
- [ ] All functionality accessible via keyboard
- [ ] Tab order follows visual layout
- [ ] Focus indicators clearly visible
- [ ] No keyboard trap issues
- [ ] Shortcuts work normally
```

#### Screen Reader Testing
**Test Tools:** NVDA (Windows) / VoiceOver (Mac/iOS)
```
Test Scenario: Browse page using screen reader
1. Start screen reader
2. Use H key to browse heading structure
3. Use Tab key to browse interactive elements
4. Test form filling and submission
5. Verify error message reading

Verification Points:
- [ ] Page titles and heading structure clear
- [ ] All content can be read correctly
- [ ] Links and buttons have descriptive text
- [ ] Form controls have associated labels
- [ ] Error messages clear and understandable
```

#### Color Contrast Testing
**Test Tools:** WebAIM Contrast Checker
```
Contrast Requirements:
- Normal text: 4.5:1 (AA level) / 7:1 (AAA level)
- Large text: 3:1 (AA level) / 4.5:1 (AAA level)
- Non-text elements: 3:1 (AA level)

Test Items:
- [ ] Body text vs background color
- [ ] Link text vs background color
- [ ] Button text vs button background
- [ ] Form control borders vs background
- [ ] Focus indicators vs background
```

### Mobile Device Testing

#### iOS VoiceOver Testing
```
Test Scenario: Browse mobile app using VoiceOver
1. Enable VoiceOver functionality
2. Use swipe gestures to navigate
3. Test double-tap activation functionality
4. Verify rotor control functionality
5. Test voice control

Verification Points:
- [ ] All elements have accessibility labels
- [ ] Gesture navigation smooth and natural
- [ ] Voice feedback clear and accurate
- [ ] Rotor functionality works normally
```

#### Android TalkBack Testing
```
Test Scenario: Browse mobile app using TalkBack
1. Enable TalkBack functionality
2. Use touch exploration mode
3. Test linear navigation
4. Verify gesture shortcuts
5. Test voice feedback

Verification Points:
- [ ] Touch exploration responds promptly
- [ ] Linear navigation order reasonable
- [ ] Gesture shortcuts effective
- [ ] Voice feedback content accurate
```

### Issue Classification and Fixes

#### Issue Severity
| Severity | Definition | Fix Priority | Examples |
|----------|------------|--------------|----------|
| Critical | Prevents users from completing core tasks | P0 | Missing alt text, keyboard inaccessible |
| Important | Affects user experience but not blocking | P1 | Insufficient contrast, incorrect heading structure |
| General | Minor impact on user experience | P2 | Link text not descriptive enough |
| Minor | Optimization suggestions not affecting functionality | P3 | Page language not identified |

#### Common Issue Fixes
**Image missing alt text:**
```html
<!-- Incorrect -->
<img src="logo.png">

<!-- Correct -->
<img src="logo.png" alt="Company Name">
<img src="decorative.png" alt="" role="presentation">
```

**Form control missing label:**
```html
<!-- Incorrect -->
<input type="text" placeholder="Please enter username">

<!-- Correct -->
<label for="username">Username</label>
<input type="text" id="username" placeholder="Please enter username">
```

**Button missing accessible name:**
```html
<!-- Incorrect -->
<button><i class="icon-delete"></i></button>

<!-- Correct -->
<button aria-label="Delete"><i class="icon-delete"></i></button>
```

### Test Report

#### Compliance Assessment
- **WCAG 2.1 AA Compliance Rate:** [X%]
- **Automated Detection Pass Rate:** [X%]
- **Manual Verification Pass Rate:** [X%]
- **Assistive Technology Compatibility:** [Good/Fair/Needs Improvement]

#### Issue Statistics
| Issue Type | Critical | Important | General | Minor | Total |
|------------|----------|-----------|---------|-------|-------|
| Perceivable | 2 | 5 | 8 | 3 | 18 |
| Operable | 1 | 3 | 4 | 2 | 10 |
| Understandable | 0 | 2 | 6 | 4 | 12 |
| Robust | 1 | 1 | 2 | 1 | 5 |
| **Total** | **4** | **11** | **20** | **10** | **45** |

#### Fix Recommendations
**Immediate Fix (P0):**
- Add alt text for all functional images
- Fix keyboard inaccessible functionality
- Improve color contrast not meeting standards
- Add associated labels for form controls

**Short-term Fix (P1):**
- Correct page heading structure hierarchy
- Improve error message clarity
- Optimize focus indicator visibility

**Long-term Improvements:**
- Establish accessibility design specifications
- Team accessibility training
- Continuous monitoring mechanism establishment

### Continuous Improvement

#### Process Integration
- **Design Phase:** Accessibility design checklist
- **Development Phase:** Code accessibility review
- **Testing Phase:** Automated+Manual accessibility testing
- **Release Phase:** Accessibility compliance verification

#### Monitoring Mechanism
- **Automated Monitoring:** CI/CD integrated accessibility checks
- **Regular Audits:** Quarterly comprehensive accessibility audits
- **User Feedback:** Feedback collection channels for users with disabilities
- **Training Plan:** Team accessibility knowledge training

### Success Criteria
- **Compliance Achievement:** 100% WCAG 2.1 AA level compliance
- **User Satisfaction:** Users with disabilities usability testing pass
- **Tool Compatibility:** Good compatibility with mainstream assistive technologies
- **Continuous Improvement:** Establish accessibility continuous improvement mechanisms
```

---

## Execution Instructions

1. Analyze product characteristics and user needs
2. Execute WCAG 2.1 compliance testing
3. Conduct assistive technology compatibility verification
4. Provide issue fixes and improvement recommendations

**Please provide product information and compliance requirements, and I will design accessibility testing plan.**