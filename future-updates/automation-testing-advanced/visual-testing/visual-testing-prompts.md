# Automation QA - Visual Testing Prompts

## 📋 Metadata
- **Difficulty**: Intermediate
- **Estimated Time**: 20min
- **Prerequisites**: Basic understanding of visual regression testing
- **Tags**: #intermediate #visual-testing #automation #regression #ui
- **Last Updated**: 2026-01-01
- **Version**: 1.0

## 🎯 Objective
Generate visual regression testing strategies, screenshot comparison tests, and responsive design validation using tools like Percy, Applitools, or BackstopJS.

## 📝 Prompt Templates

### 1. Visual Regression Test Suite

```
Create a visual regression testing strategy for:

Application: [APPLICATION_NAME]
Pages to Test: [LIST_OF_PAGES]
Viewports: [DESKTOP/TABLET/MOBILE_SIZES]
Tool: [PERCY/APPLITOOLS/BACKSTOPJS/CHROMATIC]

Generate:
- List of visual test scenarios
- Screenshot capture points
- Baseline creation strategy
- Comparison thresholds
- CI/CD integration approach
- Test code structure

Language: [JAVASCRIPT/PYTHON/JAVA]
Framework: [PLAYWRIGHT/SELENIUM/CYPRESS]
```

### 2. Responsive Design Testing

```
Generate visual tests for responsive design:

Component/Page: [COMPONENT_NAME]
Breakpoints: [LIST_BREAKPOINTS]
Browsers: [CHROME/FIREFOX/SAFARI/EDGE]

Create tests for:
- Each breakpoint transition
- Layout shifts
- Image scaling
- Text wrapping
- Navigation changes
- Hidden/visible elements

Include assertions for:
- Element positioning
- Font sizes
- Spacing/margins
- Overflow handling
```

### 3. Cross-Browser Visual Testing

```
Create cross-browser visual comparison tests:

Feature: [FEATURE_NAME]
Browsers: [LIST_BROWSERS_AND_VERSIONS]
Operating Systems: [WINDOWS/MAC/LINUX]
Baseline Browser: [REFERENCE_BROWSER]

Generate tests for:
- Rendering differences
- Font rendering
- CSS compatibility
- Layout consistency
- Color accuracy
- Animation behavior

Tool: [BROWSERSTACK/SAUCELABS/LAMBDATEST]
```

### 4. Component Visual Testing

```
Generate visual regression tests for UI components:

Component Library: [LIBRARY_NAME]
Components to Test: [LIST_COMPONENTS]
States to Capture: [DEFAULT/HOVER/ACTIVE/DISABLED/ERROR]

For each component, create tests for:
- All visual states
- Different prop combinations
- Theme variations
- Size variants
- With/without content
- Edge cases (long text, empty state)

Tool: [STORYBOOK/CHROMATIC/PERCY]
```

### 5. Screenshot Comparison Script

```
Create automated screenshot comparison code:

Tool: [BACKSTOPJS/PIXELMATCH/RESEMBLEJS]
Language: [JAVASCRIPT/PYTHON]
Scenarios: [LIST_SCENARIOS]

Generate code for:
- Baseline capture
- Test screenshot capture
- Pixel-by-pixel comparison
- Difference highlighting
- Threshold configuration
- Report generation
- Failure handling

Include:
- Setup configuration
- Test scenarios
- Comparison logic
- Reporting format
```

### 6. Visual Testing CI/CD Pipeline

```
Create CI/CD pipeline configuration for visual testing:

CI Platform: [JENKINS/GITHUB_ACTIONS/GITLAB_CI/CIRCLE_CI]
Visual Tool: [PERCY/APPLITOOLS/CHROMATIC]
Trigger: [ON_PR/ON_COMMIT/SCHEDULED]

Generate pipeline that:
- Runs visual tests automatically
- Compares against baseline
- Fails build on visual changes
- Requires manual approval for intentional changes
- Uploads results/artifacts
- Notifies team of failures

Include:
- Pipeline configuration file
- Environment setup
- Test execution steps
- Approval workflow
```

## 🔧 Customization Guide

### Placeholders Explained

- **[APPLICATION_NAME]**: Your application or website name
  - Example: `E-commerce checkout flow`
  - Tips: Be specific about the area being tested

- **[VIEWPORTS]**: Screen sizes to test
  - Example: `1920x1080, 1366x768, 768x1024, 375x667`
  - Tips: Include common desktop, tablet, and mobile sizes

- **[TOOL]**: Visual testing tool to use
  - Example: `Percy`, `Applitools Eyes`, `BackstopJS`
  - Tips: Choose based on your tech stack and budget

- **[BREAKPOINTS]**: Responsive design breakpoints
  - Example: `320px, 768px, 1024px, 1440px`
  - Tips: Match your CSS breakpoints

- **[COMPARISON_THRESHOLD]**: Acceptable difference percentage
  - Example: `0.1%` for strict, `1%` for lenient
  - Tips: Adjust based on acceptable visual changes

## 💡 Example Usage

### Scenario
Need to implement visual regression testing for a redesigned dashboard using Percy and Playwright.

### Filled Prompt
```
Create a visual regression testing strategy for:

Application: Admin Dashboard Redesign
Pages to Test: Dashboard Home, Analytics, User Management, Settings
Viewports: 1920x1080, 1366x768, 768x1024, 375x667
Tool: Percy with Playwright

Generate:
- List of visual test scenarios
- Screenshot capture points
- Baseline creation strategy
- Comparison thresholds
- CI/CD integration approach
- Test code structure

Language: TypeScript
Framework: Playwright
```

### Expected AI Response
```typescript
// percy-visual-tests.spec.ts
import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';

const VIEWPORTS = [
  { width: 1920, height: 1080, name: 'desktop-xl' },
  { width: 1366, height: 768, name: 'desktop' },
  { width: 768, height: 1024, name: 'tablet' },
  { width: 375, height: 667, name: 'mobile' }
];

const PAGES = [
  { url: '/dashboard', name: 'Dashboard Home' },
  { url: '/analytics', name: 'Analytics' },
  { url: '/users', name: 'User Management' },
  { url: '/settings', name: 'Settings' }
];

test.describe('Visual Regression Tests', () => {
  for (const viewport of VIEWPORTS) {
    test.describe(`${viewport.name} viewport`, () => {
      test.use({ viewport: { width: viewport.width, height: viewport.height } });

      for (const page of PAGES) {
        test(`${page.name} - ${viewport.name}`, async ({ page: playwright }) => {
          // Navigate to page
          await playwright.goto(page.url);
          
          // Wait for page to be fully loaded
          await playwright.waitForLoadState('networkidle');
          
          // Take Percy snapshot
          await percySnapshot(playwright, `${page.name} - ${viewport.name}`, {
            widths: [viewport.width],
            minHeight: viewport.height
          });
        });
      }
    });
  }
});

// Percy configuration (.percy.yml)
/*
version: 2
snapshot:
  widths:
    - 375
    - 768
    - 1366
    - 1920
  min-height: 1024
  percy-css: |
    .dynamic-content { display: none; }
    .timestamp { visibility: hidden; }
*/
```

## ✅ Expected Output

The AI should provide:
1. **Complete test code** ready to run
2. **Configuration files** for visual testing tools
3. **Viewport strategies** for responsive testing
4. **CI/CD integration** scripts
5. **Baseline management** approach

**Quality Indicators**:
- [ ] Tests cover all critical pages/components
- [ ] Multiple viewports are tested
- [ ] Dynamic content is handled
- [ ] Thresholds are configurable
- [ ] CI/CD integration is included

## 🔗 Related Prompts

- [Playwright Automation](../playwright-automation/) - For Playwright test framework
- [Cypress Tests](../test-script-generation/) - For Cypress visual testing
- [Responsive Testing](../../manual-qa/checklist-prompts/) - For manual responsive checks
- [Accessibility Testing](../accessibility-testing/) - For visual accessibility

## 📚 Additional Resources

- [Percy Documentation](https://docs.percy.io/) - Visual testing platform
- [Applitools Tutorial](https://applitools.com/tutorials/) - AI-powered visual testing
- [BackstopJS Guide](https://github.com/garris/BackstopJS) - Open-source visual regression
- [Chromatic Docs](https://www.chromatic.com/docs/) - Storybook visual testing
- [Visual Testing Best Practices](https://www.browserstack.com/guide/visual-regression-testing)

## 💭 Tips for Best Results

1. **Stabilize Dynamic Content**: Hide timestamps, random data, animations
2. **Use Appropriate Thresholds**: Balance between catching real issues and false positives
3. **Test Critical Paths**: Focus on user-facing pages and components
4. **Maintain Baselines**: Update baselines when intentional changes are made
5. **Integrate Early**: Add visual tests to CI/CD from the start

## 🐛 Troubleshooting

**Issue**: Too many false positives
- **Solution**: Increase comparison threshold, hide dynamic elements, use Percy CSS

**Issue**: Tests are slow
- **Solution**: Parallelize tests, reduce number of viewports, use cloud services

**Issue**: Baseline drift
- **Solution**: Implement baseline approval workflow, version control baselines

**Issue**: Flaky tests
- **Solution**: Add proper waits, stabilize animations, use deterministic data

---

**Note**: Visual testing complements functional testing. Always validate both visual appearance and functionality.
