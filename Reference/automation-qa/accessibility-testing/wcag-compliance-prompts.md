# WCAG Compliance Testing Prompts

## 1. WCAG 2.1 Level A Compliance Test Plan

```
Create a comprehensive WCAG 2.1 Level A compliance test plan for:

Application: [APPLICATION_NAME]
URL: [APPLICATION_URL]
WCAG Version: [2.1/2.2]
Conformance Level: [A/AA/AAA]

Test plan should cover all Level A Success Criteria:

**Perceivable Principle:**

1.1 Text Alternatives
- 1.1.1 Non-text Content (A)
  * All images have alt text
  * Decorative images have empty alt=""
  * Functional images describe purpose
  * Complex images have long descriptions
  * Icons have accessible names

1.2 Time-based Media
- 1.2.1 Audio-only and Video-only (Prerecorded) (A)
  * Transcript provided for audio
  * Text alternative or audio description for video

- 1.2.2 Captions (Prerecorded) (A)
  * Captions for all prerecorded video with audio

- 1.2.3 Audio Description or Media Alternative (Prerecorded) (A)
  * Audio description or full text alternative

1.3 Adaptable
- 1.3.1 Info and Relationships (A)
  * Semantic HTML elements used
  * Proper heading hierarchy
  * Form labels associated
  * Tables have proper structure
  * Lists use list markup

- 1.3.2 Meaningful Sequence (A)
  * Reading order makes sense
  * Visual order matches DOM order

- 1.3.3 Sensory Characteristics (A)
  * Instructions don't rely solely on shape, size, location, sound

1.4 Distinguishable
- 1.4.1 Use of Color (A)
  * Color not the only visual means of conveying information
  * Links distinguishable without color

- 1.4.2 Audio Control (A)
  * Mechanism to pause, stop, or control volume

**Operable Principle:**

2.1 Keyboard Accessible
- 2.1.1 Keyboard (A)
  * All functionality available via keyboard
  * No keyboard trap

- 2.1.2 No Keyboard Trap (A)
  * Focus can be moved away using keyboard only

- 2.1.4 Character Key Shortcuts (A)
  * Can be turned off, remapped, or only active on focus

2.2 Enough Time
- 2.2.1 Timing Adjustable (A)
  * User can extend, adjust, or turn off time limits

- 2.2.2 Pause, Stop, Hide (A)
  * Moving, blinking, scrolling content can be paused

2.3 Seizures and Physical Reactions
- 2.3.1 Three Flashes or Below Threshold (A)
  * No content flashes more than 3 times per second

2.4 Navigable
- 2.4.1 Bypass Blocks (A)
  * Skip navigation links present

- 2.4.2 Page Titled (A)
  * Descriptive page titles

- 2.4.3 Focus Order (A)
  * Focus order preserves meaning and operability

- 2.4.4 Link Purpose (In Context) (A)
  * Link purpose clear from link text or context

**Understandable Principle:**

3.1 Readable
- 3.1.1 Language of Page (A)
  * Page language identified in HTML

3.2 Predictable
- 3.2.1 On Focus (A)
  * Focus doesn't trigger unexpected context change

- 3.2.2 On Input (A)
  * Changing settings doesn't cause unexpected context change

3.3 Input Assistance
- 3.3.1 Error Identification (A)
  * Errors are identified and described

- 3.3.2 Labels or Instructions (A)
  * Labels or instructions provided for user input

**Robust Principle:**

4.1 Compatible
- 4.1.1 Parsing (A) [Obsolete in WCAG 2.2]
  * Valid HTML markup

- 4.1.2 Name, Role, Value (A)
  * All UI components have proper name, role, state

Generate:
- Test case for each success criterion
- Testing methodology
- Assistive technology setup
- Pass/fail criteria
- Reporting template
```

## 2. WCAG 2.1 Level AA Compliance Test Plan

```
Create WCAG 2.1 Level AA compliance test plan:

Application: [APPLICATION_NAME]
Additional to Level A, test Level AA criteria:

**Perceivable:**

1.2 Time-based Media
- 1.2.4 Captions (Live) (AA)
  * Live captions for live audio content

- 1.2.5 Audio Description (Prerecorded) (AA)
  * Audio description for prerecorded video

1.3 Adaptable
- 1.3.4 Orientation (AA)
  * Content not restricted to single orientation

- 1.3.5 Identify Input Purpose (AA)
  * Autocomplete attributes for common fields

1.4 Distinguishable
- 1.4.3 Contrast (Minimum) (AA)
  * Text: 4.5:1 contrast ratio
  * Large text: 3:1 contrast ratio
  * Graphics: 3:1 for meaningful graphics

- 1.4.4 Resize Text (AA)
  * Text can be resized 200% without loss of content

- 1.4.5 Images of Text (AA)
  * Avoid images of text (with exceptions)

- 1.4.10 Reflow (AA)
  * Content reflows without horizontal scrolling at 320px

- 1.4.11 Non-text Contrast (AA)
  * 3:1 contrast for UI components and graphics

- 1.4.12 Text Spacing (AA)
  * No loss of content with increased text spacing

- 1.4.13 Content on Hover or Focus (AA)
  * Hoverable, dismissible, persistent

**Operable:**

2.4 Navigable
- 2.4.5 Multiple Ways (AA)
  * Multiple ways to locate pages (menu, search, sitemap)

- 2.4.6 Headings and Labels (AA)
  * Descriptive headings and labels

- 2.4.7 Focus Visible (AA)
  * Keyboard focus indicator visible

2.5 Input Modalities
- 2.5.1 Pointer Gestures (AA)
  * All multipoint or path-based gestures have single-pointer alternative

- 2.5.2 Pointer Cancellation (AA)
  * Actions triggered on up event, not down

- 2.5.3 Label in Name (AA)
  * Visible label is part of accessible name

- 2.5.4 Motion Actuation (AA)
  * Can operate without device motion

**Understandable:**

3.1 Readable
- 3.1.2 Language of Parts (AA)
  * Language changes identified

3.2 Predictable
- 3.2.3 Consistent Navigation (AA)
  * Navigation consistent across pages

- 3.2.4 Consistent Identification (AA)
  * Components with same functionality identified consistently

3.3 Input Assistance
- 3.3.3 Error Suggestion (AA)
  * Error correction suggestions provided

- 3.3.4 Error Prevention (Legal, Financial, Data) (AA)
  * Submissions are reversible, checked, or confirmed

**Robust:**

4.1 Compatible
- 4.1.3 Status Messages (AA)
  * Status messages announced to screen readers

Generate:
- AA-specific test cases
- Contrast checking procedures
- Responsive design tests
- ARIA implementation tests
```

## 3. Automated WCAG Testing

```
Generate automated accessibility testing scripts:

Application: [APPLICATION_NAME]
Tool: [AXE/PA11Y/LIGHTHOUSE/WAVE]

Test scenarios:
1. Axe-core Testing
   JavaScript:
   ```javascript
   const { AxePuppeteer } = require('@axe-core/puppeteer');
   const puppeteer = require('puppeteer');

   (async () => {
     const browser = await puppeteer.launch();
     const page = await browser.newPage();
     await page.goto('https://example.com');

     const results = await new AxePuppeteer(page)
       .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
       .analyze();

     console.log('Violations:', results.violations);
     await browser.close();
   })();
   ```

2. Pa11y Testing
   Command line:
   ```bash
   pa11y --standard WCAG2AA --reporter html https://example.com > report.html
   ```

   JavaScript:
   ```javascript
   const pa11y = require('pa11y');

   pa11y('https://example.com', {
     standard: 'WCAG2AA',
     runners: ['axe', 'htmlcs']
   }).then((results) => {
     console.log(results.issues);
   });
   ```

3. Lighthouse Accessibility Audit
   ```bash
   lighthouse https://example.com --only-categories=accessibility --output=html --output-path=./report.html
   ```

   Programmatic:
   ```javascript
   const lighthouse = require('lighthouse');
   const chromeLauncher = require('chrome-launcher');

   (async () => {
     const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
     const options = {
       logLevel: 'info',
       output: 'html',
       onlyCategories: ['accessibility'],
       port: chrome.port
     };
     const runnerResult = await lighthouse('https://example.com', options);
     console.log('Accessibility score:', runnerResult.lhr.categories.accessibility.score * 100);
     await chrome.kill();
   })();
   ```

4. Playwright with Axe
   ```javascript
   const { chromium } = require('playwright');
   const { injectAxe, checkA11y } = require('axe-playwright');

   (async () => {
     const browser = await chromium.launch();
     const page = await browser.newPage();
     await page.goto('https://example.com');
     await injectAxe(page);
     await checkA11y(page, null, {
       detailedReport: true,
       detailedReportOptions: {
         html: true
       }
     });
     await browser.close();
   })();
   ```

5. CI/CD Integration
   GitHub Actions:
   ```yaml
   name: Accessibility Testing
   on: [push, pull_request]
   jobs:
     a11y:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - name: Run Pa11y
           run: |
             npm install -g pa11y pa11y-ci
             pa11y-ci --sitemap https://example.com/sitemap.xml
   ```

Generate:
- Automated test suite
- CI/CD pipeline configuration
- Reporting templates
- Failure threshold settings
```

## 4. Color Contrast Testing

```
Create comprehensive color contrast testing:

Application: [APPLICATION_NAME]
Color Palette: [LIST_COLORS]

Test scenarios:
1. Text Contrast Testing
   Requirements:
   - Normal text (< 18pt or < 14pt bold): 4.5:1
   - Large text (≥ 18pt or ≥ 14pt bold): 3:1

   Test cases:
   - Body text against background
   - Heading text against background
   - Link text (default, visited, hover, focus)
   - Button text against button background
   - Form field text against field background
   - Placeholder text (must meet 4.5:1)
   - Disabled text (exempted but should be tested)
   - Error messages
   - Success messages
   - Warning messages

   Tools:
   - WebAIM Contrast Checker
   - Colour Contrast Analyser
   - Chrome DevTools
   - Browser extension: Accessibility Insights

2. Graphical Objects and UI Components
   Requirement: 3:1 contrast ratio

   Test:
   - Icons against background
   - Form field borders
   - Focus indicators
   - Active/inactive states
   - Graphs and charts
   - Data visualizations
   - Custom controls
   - Progress bars

3. Testing Methods
   Manual:
   - Color picker to get hex values
   - Use contrast calculator
   - Document foreground and background colors

   Automated:
   ```javascript
   // Using axe-core
   const results = await axe.run({
     runOnly: {
       type: 'rule',
       values: ['color-contrast']
     }
   });
   ```

   Browser DevTools:
   - Chrome: Inspect element → Styles → Color picker shows contrast ratio

4. Special Scenarios
   - Text over images
   - Text over gradients
   - Text over videos
   - Transparent overlays
   - Multiple backgrounds

5. Documentation
   For each failing item document:
   - Element location (selector or screenshot)
   - Current colors (foreground/background hex)
   - Current contrast ratio
   - Recommended colors
   - Alternative solutions

Generate:
- Contrast audit report
- Color palette recommendations
- Remediation guide
- Before/after comparisons
```

## 5. Semantic HTML and Heading Structure

```
Generate test cases for semantic HTML and heading structure:

Application: [APPLICATION_NAME]
Pages to Test: [LIST_PAGES]

Test scenarios:
1. Heading Hierarchy
   Test for:
   - H1 present on every page (ideally one)
   - Headings in logical order (no skipped levels)
   - H1 → H2 → H3 (not H1 → H3)
   - Headings describe content that follows
   - Not using headings for styling only

   Automated check:
   ```javascript
   const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
   const levels = headings.map(h => parseInt(h.tagName[1]));

   // Check for skipped levels
   for (let i = 1; i < levels.length; i++) {
     if (levels[i] - levels[i-1] > 1) {
       console.error(`Skipped heading level from H${levels[i-1]} to H${levels[i]}`);
     }
   }
   ```

2. Semantic Elements
   Check usage of:
   - <header> for site/page header
   - <nav> for navigation
   - <main> for main content (one per page)
   - <article> for independent content
   - <section> for thematic grouping
   - <aside> for sidebar content
   - <footer> for site/page footer
   - <figure> and <figcaption> for images
   - <time> for dates and times

3. Lists
   - Ordered lists (<ol>) for sequential items
   - Unordered lists (<ul>) for non-sequential items
   - Definition lists (<dl>) for term-definition pairs
   - Avoid using <div> or <span> for lists

4. Tables
   - <table> for tabular data only (not layout)
   - <th> for header cells with scope attribute
   - <caption> for table description
   - Complex tables use headers and id attributes

   Example:
   ```html
   <table>
     <caption>Sales Report</caption>
     <thead>
       <tr>
         <th scope="col">Month</th>
         <th scope="col">Revenue</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <th scope="row">January</th>
         <td>$10,000</td>
       </tr>
     </tbody>
   </table>
   ```

5. Forms
   - Proper use of <fieldset> and <legend>
   - Labels associated with inputs
   - <label for="inputId">
   - Required fields indicated
   - Input types appropriate (email, tel, date)

6. Buttons vs Links
   - <button> for actions
   - <a> for navigation
   - No "click here" links
   - Descriptive link text

Generate:
- Semantic structure audit
- Heading hierarchy report
- Element usage recommendations
- Code examples for corrections
```

## 6. Form Accessibility Testing

```
Create comprehensive form accessibility test cases:

Form: [FORM_NAME/PURPOSE]
Fields: [LIST_FORM_FIELDS]

Test scenarios:
1. Labels and Instructions
   - Every input has associated label:
     ```html
     <label for="email">Email</label>
     <input type="email" id="email" name="email">
     ```

   - Required fields clearly indicated:
     * Visual indicator (asterisk)
     * aria-required="true" or required attribute
     * Instructions before form, not just in placeholder

   - Group related fields with <fieldset> and <legend>:
     ```html
     <fieldset>
       <legend>Contact Information</legend>
       <!-- form fields -->
     </fieldset>
     ```

2. Input Purpose and Autocomplete
   - Autocomplete attributes for common fields:
     ```html
     <input type="email" name="email" autocomplete="email">
     <input type="tel" name="phone" autocomplete="tel">
     <input type="text" name="fname" autocomplete="given-name">
     ```

   - Supported values: name, email, tel, address-line1, postal-code, etc.

3. Error Identification and Correction
   - Errors clearly identified
   - Error messages associated with fields:
     ```html
     <label for="email">Email</label>
     <input type="email" id="email" aria-describedby="email-error" aria-invalid="true">
     <span id="email-error" class="error">Please enter a valid email address</span>
     ```

   - Use aria-invalid="true" for invalid fields
   - Error summary at top of form with links to fields
   - Suggestions for correction provided

4. Keyboard Accessibility
   - All form controls keyboard accessible
   - Tab order logical
   - No keyboard traps
   - Enter key submits form
   - Escape key cancels dialogs
   - Arrow keys navigate radio buttons/dropdowns

5. Focus Management
   - Visible focus indicators
   - Focus moves logically
   - Focus on first error after submission
   - Focus on modal open/close
   - Focus returns appropriately

6. ARIA for Complex Widgets
   - Comboboxes: role="combobox", aria-expanded, aria-controls
   - Datepickers: proper labeling and keyboard navigation
   - File upload: progress indicators announced
   - Multi-step forms: aria-label="Step 1 of 3"

7. Form Validation
   - Client-side validation accessible
   - Error messages announced to screen readers
   - Success confirmations announced
   - Live regions for dynamic updates:
     ```html
     <div role="alert" aria-live="assertive" aria-atomic="true">
       Form submitted successfully
     </div>
     ```

8. Help Text
   - Help text associated with fields:
     ```html
     <label for="password">Password</label>
     <input type="password" id="password" aria-describedby="password-help">
     <span id="password-help">Must be at least 8 characters</span>
     ```

Generate:
- Form accessibility checklist
- ARIA implementation examples
- Error handling patterns
- Test case matrix
```

## 7. Keyboard Navigation Testing

```
Create keyboard navigation test cases:

Application: [APPLICATION_NAME]
Interactive Components: [LIST_COMPONENTS]

Test scenarios:
1. Basic Keyboard Navigation
   - Tab: Move forward through interactive elements
   - Shift+Tab: Move backward
   - Enter: Activate buttons and links
   - Space: Activate buttons, check checkboxes
   - Escape: Close modals/dialogs
   - Arrow keys: Navigate within composite widgets

2. Focus Order
   - Focus order matches visual order
   - Focus order makes sense
   - Hidden elements not in tab order
   - Off-screen elements not in tab order
   - Tab order: header → nav → main → aside → footer

3. Skip Links
   - "Skip to main content" link present
   - Link is first focusable element
   - Link can be hidden until focused
   - Link works correctly (jumps to main)
   - Additional skip links as needed:
     * Skip to navigation
     * Skip to search

4. Focus Indicators
   - Visible focus indicator on all interactive elements
   - Sufficient contrast (3:1 minimum)
   - Not removed with CSS: outline: none
   - Custom focus styles appropriate
   - Focus indicator visible on hover and focus

5. Keyboard Traps
   - User not trapped in modal
   - Can exit modal with Escape or Close button
   - Dropdowns don't trap focus
   - Carousels don't trap focus
   - Embedded content (iframes, ads) don't trap focus

6. Custom Components
   Dropdown menu:
   - Tab opens/closes
   - Arrow keys navigate options
   - Enter/Space selects
   - Escape closes
   - Home/End jump to first/last

   Modal dialog:
   - Focus moves to modal on open
   - Focus trapped within modal
   - Escape closes modal
   - Focus returns to trigger on close

   Tabs:
   - Arrow keys navigate tabs
   - Enter/Space activates
   - Tab moves through tab panel

   Accordion:
   - Tab navigates between headers
   - Enter/Space expands/collapses
   - Arrow keys optionally navigate

7. ARIA Keyboard Patterns
   Follow WAI-ARIA Authoring Practices:
   - Combobox pattern
   - Listbox pattern
   - Menu and menubar pattern
   - Tabs pattern
   - Tree view pattern

8. Testing Checklist
   For each page/component:
   - [ ] Can access all interactive elements
   - [ ] Tab order is logical
   - [ ] Focus visible at all times
   - [ ] No keyboard traps
   - [ ] Skip links work
   - [ ] Enter/Space activate appropriately
   - [ ] Escape dismisses where expected
   - [ ] Arrow keys work in custom widgets
   - [ ] All functionality available via keyboard

Generate:
- Keyboard navigation map
- Component-specific test cases
- ARIA pattern implementations
- Focus management scripts
```

## 8. Screen Reader Compatibility Testing

```
Generate screen reader testing scenarios:

Application: [APPLICATION_NAME]
Screen Readers: [NVDA/JAWS/VOICEOVER/TALKBACK]
Browsers: [CHROME/FIREFOX/SAFARI]

Test scenarios:
1. Screen Reader Setup
   NVDA (Windows) + Firefox:
   - Download NVDA (free)
   - Start NVDA: Ctrl+Alt+N
   - Stop reading: Ctrl
   - Next element: Down arrow
   - Click: Enter

   JAWS (Windows) + Chrome:
   - Commercial software
   - Start JAWS
   - Stop reading: Ctrl
   - Next heading: H
   - Next link: Tab

   VoiceOver (Mac) + Safari:
   - Enable: Cmd+F5
   - VO keys: Ctrl+Option
   - Next element: VO+Right arrow
   - Click: VO+Space

2. Content Reading
   Test that screen reader announces:
   - Page title on load
   - Headings with level
   - Landmarks (header, nav, main, footer)
   - Links with meaningful text
   - Images with alt text
   - Form labels and instructions
   - Button text and purpose
   - Dynamic content changes

3. Navigation
   - Headings list (NVDA: Insert+F7, JAWS: Insert+F6)
   - Links list
   - Landmarks list
   - Forms mode (automatic in NVDA/JAWS)
   - Table navigation
   - Browse vs Focus mode

4. Dynamic Content
   Test with:
   - ARIA live regions:
     ```html
     <div role="status" aria-live="polite">Loading...</div>
     <div role="alert" aria-live="assertive">Error occurred</div>
     ```

   - aria-atomic="true" (announce entire region)
   - aria-relevant="additions text" (what changes to announce)
   - Loading states
   - Toast notifications
   - Form validation messages
   - Chat messages

5. Hidden Content
   - Display:none → not announced (correct)
   - Visibility:hidden → not announced (correct)
   - Off-screen with positioning → announced (usually incorrect)
   - aria-hidden="true" → not announced
   - Hidden content in collapsed sections

6. Complex Widgets
   - Comboboxes announce expanded/collapsed
   - Sliders announce value and range
   - Progress bars announce percent
   - Tabs announce selected state
   - Tree items announce expanded/collapsed
   - Modals trap screen reader focus

7. Tables
   - Table announced as table
   - Header cells announced
   - Row and column headers read with data
   - Caption announced
   - Summary provided if complex

8. Testing Checklist
   For each page:
   - [ ] Page title announced correctly
   - [ ] Heading hierarchy makes sense
   - [ ] All images have appropriate alt text
   - [ ] Links are descriptive
   - [ ] Form fields have labels
   - [ ] Error messages are announced
   - [ ] Dynamic updates are announced
   - [ ] No orphaned content
   - [ ] Landmarks properly defined
   - [ ] No redundant announcements

Generate:
- Screen reader test matrix
- ARIA implementation guide
- Common issues and fixes
- Testing scripts
```

## 9. Responsive and Mobile Accessibility

```
Create responsive accessibility test cases:

Application: [APPLICATION_NAME]
Breakpoints: [MOBILE/TABLET/DESKTOP]

Test scenarios:
1. Reflow (WCAG 2.1.4.10)
   - Content reflows at 320px width
   - No horizontal scrolling required
   - No loss of information or functionality
   - Reading order maintained

   Test:
   - Resize browser to 320px
   - Zoom to 400%
   - Check all pages and components

2. Text Spacing (WCAG 2.1.4.12)
   Override CSS with:
   ```css
   * {
     line-height: 1.5 !important;
     letter-spacing: 0.12em !important;
     word-spacing: 0.16em !important;
   }
   p {
     margin-bottom: 2em !important;
   }
   ```

   Verify:
   - No overlapping text
   - No clipped content
   - All content still readable

3. Orientation (WCAG 2.1.3.4)
   - Content works in both portrait and landscape
   - Unless specific orientation essential
   - CSS: No restrictions on orientation

4. Touch Target Size
   - Minimum 44x44 pixels (iOS guideline)
   - Minimum 48x48 pixels (Android guideline)
   - Adequate spacing between targets
   - No overlapping touch areas

   Test:
   - Buttons
   - Links
   - Form controls
   - Custom widgets
   - Menu items

5. Motion Gestures (WCAG 2.5.1)
   - Single pointer alternative for multipoint gestures
   - Alternative to path-based gestures
   - Examples:
     * Pinch to zoom → +/- buttons
     * Swipe to navigate → Next/Previous buttons
     * Draw pattern → Alternative method

6. Motion Actuation (WCAG 2.5.4)
   - Shake gestures have alternative
   - Tilt gestures have alternative
   - Motion can be disabled in settings

7. Mobile Screen Reader Testing
   iOS VoiceOver:
   - Settings → Accessibility → VoiceOver → On
   - Swipe right/left to navigate
   - Double tap to activate
   - Rotor for quick navigation

   Android TalkBack:
   - Settings → Accessibility → TalkBack → On
   - Swipe right/left to navigate
   - Double tap to activate
   - TalkBack menu for options

8. Zoom and Magnification
   - Pinch zoom functional
   - Text stays readable when zoomed
   - No viewport restrictions:
     ```html
     <!-- Bad -->
     <meta name="viewport" content="user-scalable=no">

     <!-- Good -->
     <meta name="viewport" content="width=device-width, initial-scale=1">
     ```

Generate:
- Responsive accessibility checklist
- Touch target audit
- Mobile screen reader test results
- Remediation recommendations
```

## 10. Accessibility Audit Report Template

```
Create comprehensive accessibility audit report:

Project: [PROJECT_NAME]
Audit Date: [DATE]
WCAG Version: [2.1/2.2]
Conformance Target: [A/AA/AAA]
Pages Audited: [NUMBER]

Report Structure:

1. Executive Summary
   - Overall accessibility score
   - Conformance level achieved
   - Number of issues by severity
   - Key findings
   - Recommended next steps

2. Testing Methodology
   - WCAG version and level
   - Tools used:
     * Automated: axe, Pa11y, Lighthouse
     * Manual testing performed
     * Screen readers tested
     * Devices and browsers

3. Audit Scope
   - Pages tested: [LIST]
   - User flows tested: [LIST]
   - Out of scope: [LIST]

4. Summary of Findings
   | Severity | Count | WCAG Level |
   |----------|-------|------------|
   | Critical | X     | A          |
   | High     | X     | AA         |
   | Medium   | X     | AAA        |
   | Low      | X     | Best Practice |

5. Detailed Findings
   For each issue:
   **Issue #1: Missing Alt Text on Images**
   - Severity: Critical
   - WCAG: 1.1.1 Non-text Content (Level A)
   - Success Criterion: Failed
   - Location: Homepage, Product pages (15 instances)
   - Description: Decorative and informational images missing alt text
   - Impact: Screen reader users cannot understand image content
   - Recommendation:
     ```html
     <!-- Current -->
     <img src="product.jpg">

     <!-- Fixed -->
     <img src="product.jpg" alt="Red running shoes">
     <img src="decoration.jpg" alt="" role="presentation">
     ```
   - Effort: Low (1-2 days)
   - Priority: P0 (Must fix for compliance)

6. Accessibility Score by Category
   - Perceivable: X/100
   - Operable: X/100
   - Understandable: X/100
   - Robust: X/100

7. Recommendations
   Priority 0 (Critical - Fix Immediately):
   - [List P0 issues]

   Priority 1 (High - Fix within 30 days):
   - [List P1 issues]

   Priority 2 (Medium - Fix within 90 days):
   - [List P2 issues]

   Priority 3 (Low - Nice to have):
   - [List P3 issues]

8. Remediation Roadmap
   - Sprint 1 (Weeks 1-2): P0 issues
   - Sprint 2 (Weeks 3-4): P1 issues
   - Sprint 3 (Weeks 5-8): P2 issues
   - Ongoing: P3 issues and maintenance

9. Best Practices and Recommendations
   - Integrate accessibility into design process
   - Include accessibility in definition of done
   - Automated testing in CI/CD pipeline
   - Regular accessibility audits
   - Accessibility training for team
   - User testing with people with disabilities

10. Appendices
    - Appendix A: Testing Tools and Configuration
    - Appendix B: Automated Test Results (Raw Data)
    - Appendix C: WCAG 2.1 Checklist
    - Appendix D: Screenshots and Evidence
    - Appendix E: Code Samples and Patterns

Generate:
- Executive summary
- Detailed findings report
- Remediation roadmap
- Testing evidence package
```

## Best Practices

1. **Testing Approach**
   - Combine automated and manual testing
   - Test with real assistive technology
   - Include people with disabilities in testing
   - Test across different browsers and devices

2. **Development Integration**
   - Shift-left: Test during development
   - Accessibility in design phase
   - Component library with accessibility built-in
   - Regular accessibility reviews

3. **Documentation**
   - Document accessibility features
   - Maintain VPAT (Voluntary Product Accessibility Template)
   - Keep accessibility statement updated
   - Track remediation progress

4. **Continuous Improvement**
   - Regular audits (quarterly/bi-annual)
   - Monitor for regressions
   - Stay updated with WCAG changes
   - Foster accessibility culture

## Tools

**Automated Testing:**
- axe DevTools, WAVE, Lighthouse, Pa11y

**Browser Extensions:**
- axe DevTools, Accessibility Insights, WAVE

**Screen Readers:**
- NVDA (Windows, free), JAWS (Windows, commercial), VoiceOver (Mac/iOS, built-in), TalkBack (Android, built-in)

**Color Contrast:**
- Colour Contrast Analyser, WebAIM Contrast Checker

**Code Linters:**
- eslint-plugin-jsx-a11y, axe-linter

## Accessibility Testing Checklist

- [ ] Alt text for all images
- [ ] Proper heading hierarchy
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG
- [ ] Forms properly labeled
- [ ] ARIA used correctly
- [ ] Screen reader compatible
- [ ] No keyboard traps
- [ ] Skip links present
- [ ] Responsive and mobile accessible
- [ ] Time limits adjustable
- [ ] No flashing content
- [ ] Error messages clear
- [ ] Language identified
- [ ] Consistent navigation
- [ ] Semantic HTML used
- [ ] Status messages announced
