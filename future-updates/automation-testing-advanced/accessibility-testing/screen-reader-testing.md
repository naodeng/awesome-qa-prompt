# Screen Reader Testing Prompts

## 1. Screen Reader Testing Strategy

```
Create a comprehensive screen reader testing strategy for:

Application: [APPLICATION_NAME]
Screen Readers to Test: [NVDA/JAWS/VOICEOVER/TALKBACK/NARRATOR]
Priority Pages: [LIST_PAGES]

Strategy should include:
1. Screen Reader Coverage
   Windows:
   - NVDA (Free) + Firefox
   - JAWS (Commercial) + Chrome
   - Narrator (Built-in) + Edge

   macOS:
   - VoiceOver + Safari

   iOS:
   - VoiceOver + Safari

   Android:
   - TalkBack + Chrome

2. Testing Scope
   - Homepage and landing pages
   - Navigation and menus
   - Forms and input fields
   - Dynamic content and interactions
   - Error messages and alerts
   - Data tables and lists
   - Modals and dialogs
   - Media players
   - Shopping cart/checkout
   - User dashboard

3. Test Environment Setup
   - OS and browser combinations
   - Screen reader versions
   - Testing devices (mobile/tablet)
   - Recording setup for evidence

4. Testing Methodology
   - Task-based scenarios
   - User journey testing
   - Content structure verification
   - Interactive element testing
   - ARIA implementation validation

Generate:
- Testing matrix (SR + Browser combinations)
- Test case templates
- Recording procedures
- Issue logging format
```

## 2. NVDA Testing Guide

```
Generate NVDA screen reader test cases:

Application: [APPLICATION_NAME]
NVDA Version: [VERSION]
Browser: Firefox

Basic NVDA Commands:
- Start NVDA: Ctrl+Alt+N
- Stop NVDA: NVDA+Q
- Stop reading: Ctrl
- Read all: NVDA+Down Arrow
- Next line: Down Arrow
- Next element: Tab
- Next heading: H
- Next link: K
- Next form field: F
- Elements list: NVDA+F7
- Toggle focus/browse mode: NVDA+Space

Test Scenarios:

1. Page Structure Navigation
   Test:
   - Press Insert+F7 for elements list
   - Navigate by headings (H key)
   - Navigate by landmarks (D key)
   - Verify heading levels announced correctly
   - Check heading hierarchy makes sense

   Verify:
   - "Heading level 1: [Page Title]"
   - "Navigation landmark"
   - "Main landmark"
   - "Banner landmark"

2. Link Navigation
   Test:
   - Press K to move through links
   - Press Insert+F7, select Links tab
   - Tab through links
   - Activate with Enter

   Verify:
   - Link text is descriptive
   - Link destination clear
   - "Link: [Link Text]" announced
   - Visited links announced differently

3. Form Interaction
   Test:
   - Tab to form fields
   - Enter forms mode (automatic)
   - Fill out form fields
   - Check error messages
   - Submit form

   Verify:
   - "Edit, [Label]" for text inputs
   - "Checkbox checked/not checked, [Label]"
   - "Radio button checked/not checked, [Label]"
   - "Combo box [Label]"
   - Required fields announced
   - Error messages announced with aria-describedby

4. Dynamic Content
   Test:
   - Trigger AJAX content updates
   - Show/hide content
   - Display notifications
   - Loading states

   Verify:
   - aria-live regions announce changes
   - "Alert: [Message]" for role="alert"
   - Loading states announced
   - New content receives focus if appropriate

5. Tables
   Test:
   - Navigate to table
   - Press Ctrl+Alt+Arrow keys to navigate cells
   - Read table headers

   Verify:
   - "Table with X rows and Y columns"
   - "Column header: [Header Text]"
   - "Row header: [Header Text]"
   - Cell content with headers

6. Images
   Test:
   - Navigate through images (G key)

   Verify:
   - "Graphic: [Alt Text]"
   - Decorative images not announced or "Graphic" only
   - Complex images have extended descriptions

Generate:
- NVDA-specific test cases
- Expected announcements
- Common issues checklist
- Best practices for NVDA compatibility
```

## 3. JAWS Testing Guide

```
Create JAWS screen reader test cases:

Application: [APPLICATION_NAME]
JAWS Version: [VERSION]
Browser: Chrome/Edge

Basic JAWS Commands:
- Stop reading: Ctrl
- Read all: Insert+Down Arrow
- Next line: Down Arrow
- Next heading: H
- Prior heading: Shift+H
- Next link: Tab or Insert+F7
- Next form field: F
- Forms list: Insert+F5
- Headings list: Insert+F6
- Links list: Insert+F7

Test Scenarios:

1. Virtual Cursor Navigation
   Test:
   - Use arrow keys to navigate
   - Use quick navigation keys (H, K, F, T, etc.)
   - Tab through interactive elements

   Verify:
   - Content read in logical order
   - Interactive elements announced correctly
   - Page structure clear
   - No skipped content

2. Forms Mode
   Test:
   - Tab to form field (enters forms mode automatically)
   - Fill out fields
   - Navigate between fields
   - Exit forms mode with Numpad Plus

   Verify:
   - "Type in text" or "Edit" for inputs
   - Field labels announced before field
   - Required status announced
   - Error messages associated with fields

3. ARIA Widgets
   Test combobox:
   - Tab to combobox
   - Arrow keys to navigate options
   - Type to filter
   - Enter to select

   Verify:
   - "Combo box [Label] collapsed"
   - "Option [X] of [Y], [Option Text]"
   - Selected option announced

   Test tabs:
   - Tab to tab list
   - Arrow keys between tabs

   Verify:
   - "Tab control"
   - "Tab [Tab Name] selected"
   - Tab panel content announced

4. Live Regions
   Test:
   - Trigger status updates
   - Display notifications
   - Show progress indicators

   Verify:
   - aria-live="polite" announced at next pause
   - aria-live="assertive" announced immediately
   - Appropriate verbosity

5. Application vs Document Mode
   Test:
   - Complex widgets (code editors, maps)
   - role="application" areas

   Verify:
   - Mode switches appropriately
   - Keyboard shortcuts work
   - Content still accessible

Generate:
- JAWS test script
- Expected speech output
- Mode switching tests
- Compatibility notes
```

## 4. VoiceOver Testing Guide (macOS/iOS)

```
Generate VoiceOver test cases:

Application: [APPLICATION_NAME]
Platform: [MACOS/IOS]

macOS VoiceOver Commands:
- Start: Cmd+F5
- VO keys: Ctrl+Option (called VO)
- Stop reading: Ctrl
- Next item: VO+Right Arrow
- Previous item: VO+Left Arrow
- Activate: VO+Space
- Rotor: VO+U
- Read all: VO+A

iOS VoiceOver Gestures:
- Swipe right: Next element
- Swipe left: Previous element
- Double tap: Activate
- Two-finger scrub: Go back
- Rotor: Rotate two fingers

Test Scenarios:

1. Web Rotor Navigation (macOS)
   Test:
   - Press VO+U to open rotor
   - Navigate by headings, links, form controls, tables, landmarks

   Verify:
   - All headings listed with levels
   - Links descriptive
   - Form controls labeled
   - Landmarks identified

2. iOS Rotor Navigation
   Test:
   - Two-finger rotation gesture
   - Select Headings, Links, Form Controls
   - Swipe up/down to navigate within category

   Verify:
   - Rotor options available
   - Navigation works smoothly
   - Content organized logically

3. Form Interaction (iOS)
   Test:
   - Swipe to form field
   - Double-tap to edit
   - Use keyboard to type
   - Swipe to next field

   Verify:
   - "Text field, [Label]"
   - Hint text announced
   - Required status announced
   - Error messages announced

4. Custom Controls
   Test:
   - Swipe to custom button/link
   - Double-tap to activate

   Verify:
   - Role announced ("Button", "Link")
   - Label announced
   - State announced if applicable (selected, expanded)

5. Grouping and Containers
   Test:
   - Navigate through content groups
   - Lists and list items

   Verify:
   - "List, X items" announced
   - "List item X of Y" announced
   - Logical grouping maintained

6. Dynamic Content Updates
   Test:
   - Trigger content changes
   - Load new content

   Verify:
   - aria-live announcements
   - "Alert: [Message]"
   - Focus management on dynamic changes

Generate:
- VoiceOver test checklist
- Platform-specific considerations
- Mobile gesture guide
- Expected announcements
```

## 5. TalkBack Testing Guide (Android)

```
Create TalkBack test cases:

Application: [APPLICATION_NAME]
Android Version: [VERSION]
Browser: Chrome

Basic TalkBack Gestures:
- Enable: Settings → Accessibility → TalkBack
- Swipe right: Next element
- Swipe left: Previous element
- Double-tap: Activate
- Swipe up then right: Navigate by headings
- Swipe down then right: Navigate by links
- Two-finger swipe: Scroll

Test Scenarios:

1. Content Navigation
   Test:
   - Swipe through content
   - Use reading controls menu
   - Navigate by headings/links/controls

   Verify:
   - Content read in order
   - Headings announced with level
   - Interactive elements identified
   - Non-interactive content readable

2. Form Controls
   Test:
   - Swipe to form field
   - Double-tap to focus
   - Type with keyboard
   - Adjust checkboxes/radio buttons

   Verify:
   - "Edit box, [Label]" for inputs
   - "Checkbox, checked/not checked, [Label]"
   - "Radio button, selected/not selected"
   - Instructions and hints announced

3. Buttons and Links
   Test:
   - Swipe to button/link
   - Double-tap to activate

   Verify:
   - "Button, [Label]"
   - "Link, [Link Text]"
   - Purpose clear from announcement
   - State changes announced

4. Complex Widgets
   Test:
   - Dropdowns/selects
   - Sliders
   - Date pickers
   - Custom controls

   Verify:
   - Widget type announced
   - Current value/state announced
   - Instructions for interaction
   - Changes announced

5. Reading Controls
   Test:
   - Local context menu (swipe up then down)
   - Adjust reading settings
   - Navigate by different elements

   Verify:
   - Granularity options available
   - Navigation methods work
   - Settings apply correctly

Generate:
- TalkBack test matrix
- Mobile-specific scenarios
- Gesture guide
- Common issues on Android
```

## 6. ARIA Implementation Testing

```
Generate ARIA testing scenarios for screen readers:

Application: [APPLICATION_NAME]
ARIA Patterns Used: [LIST_PATTERNS]

Test Scenarios:

1. ARIA Roles
   Test common roles:
   - role="button"
   - role="link"
   - role="navigation"
   - role="main"
   - role="banner"
   - role="contentinfo"
   - role="search"
   - role="complementary"

   Verify:
   - Role announced correctly
   - Semantic HTML preferred over ARIA when possible
   - Custom roles necessary and appropriate

2. ARIA States and Properties
   aria-expanded:
   ```html
   <button aria-expanded="false">Menu</button>
   ```
   Verify: "Button, Menu, collapsed" / "Button, Menu, expanded"

   aria-selected:
   ```html
   <div role="tab" aria-selected="true">Tab 1</div>
   ```
   Verify: "Tab, Tab 1, selected"

   aria-checked:
   ```html
   <div role="checkbox" aria-checked="true">Option</div>
   ```
   Verify: "Checkbox, Option, checked"

   aria-disabled:
   ```html
   <button aria-disabled="true">Submit</button>
   ```
   Verify: "Button, Submit, disabled"

   aria-hidden:
   ```html
   <div aria-hidden="true">Decorative content</div>
   ```
   Verify: Content not announced

3. ARIA Labels and Descriptions
   aria-label:
   ```html
   <button aria-label="Close dialog">X</button>
   ```
   Verify: "Button, Close dialog"

   aria-labelledby:
   ```html
   <div id="dialogTitle">Confirm Action</div>
   <div role="dialog" aria-labelledby="dialogTitle">...</div>
   ```
   Verify: Dialog announced with title

   aria-describedby:
   ```html
   <input id="email" aria-describedby="emailHelp">
   <span id="emailHelp">Must be a valid email address</span>
   ```
   Verify: Help text announced with field

4. Live Regions
   aria-live="polite":
   ```html
   <div role="status" aria-live="polite">
     Loading content...
   </div>
   ```
   Verify: Announced at next pause

   aria-live="assertive":
   ```html
   <div role="alert" aria-live="assertive">
     Error: Form submission failed
   </div>
   ```
   Verify: Announced immediately

   aria-atomic:
   ```html
   <div aria-live="polite" aria-atomic="true">
     <span>Loading</span> <span>75%</span>
   </div>
   ```
   Verify: Entire region announced vs individual changes

5. Complex ARIA Patterns
   Combobox:
   ```html
   <input role="combobox"
          aria-expanded="false"
          aria-controls="listbox1"
          aria-activedescendant="option1">
   <ul role="listbox" id="listbox1">
     <li role="option" id="option1">Option 1</li>
   </ul>
   ```
   Verify: Correct announcements, keyboard navigation

   Dialog:
   ```html
   <div role="dialog" aria-labelledby="title" aria-modal="true">
     <h2 id="title">Dialog Title</h2>
     ...
   </div>
   ```
   Verify: Focus trapped, title announced, modal behavior

Generate:
- ARIA pattern test cases
- Expected screen reader output
- Implementation examples
- Common ARIA mistakes to avoid
```

## 7. Screen Reader Testing for Single Page Applications (SPA)

```
Create SPA-specific screen reader test cases:

Application: [SPA_NAME]
Framework: [REACT/VUE/ANGULAR]

Test Scenarios:

1. Route Changes
   Test:
   - Navigate to different views/pages
   - Use browser back/forward

   Verify:
   - Page title updates (announced by SR)
   - Focus management on route change
   - Live region announces page change
   - User aware of navigation

   Implementation:
   ```javascript
   // Announce route changes
   const announceRouteChange = (newRoute) => {
     const announcement = document.getElementById('route-announcements');
     announcement.textContent = `Navigated to ${newRoute}`;
   };
   ```

   ```html
   <div id="route-announcements" role="status" aria-live="polite" aria-atomic="true" class="sr-only">
   </div>
   ```

2. Focus Management
   Test:
   - Click link to new view
   - Modal opens
   - Modal closes
   - Form submission

   Verify:
   - Focus moves to logical location
   - Focus on main heading after route change
   - Focus returns to trigger after modal close
   - Focus on first error after validation

   Implementation:
   ```javascript
   // Focus main heading on route change
   useEffect(() => {
     document.querySelector('h1').focus();
   }, [location]);
   ```

3. Loading States
   Test:
   - Trigger data fetch
   - Display loading indicator
   - Content loads

   Verify:
   - Loading state announced
   - Completion announced
   - Focus managed appropriately

   Implementation:
   ```html
   <div role="status" aria-live="polite" aria-busy={isLoading}>
     {isLoading ? 'Loading content...' : 'Content loaded'}
   </div>
   ```

4. Infinite Scroll and Lazy Loading
   Test:
   - Scroll to load more
   - Content appears

   Verify:
   - New content announced
   - User informed of loading
   - Keyboard access to new content

5. Client-Side Form Validation
   Test:
   - Submit form with errors
   - Correct errors
   - Submit successfully

   Verify:
   - Errors announced immediately
   - Error summary with links to fields
   - Success message announced

Generate:
- SPA accessibility patterns
- Focus management strategies
- Live region implementations
- Testing checklist for SPAs
```

## 8. Screen Reader Testing Documentation

```
Create screen reader testing documentation template:

Test Session:
Date: [DATE]
Tester: [NAME]
Screen Reader: [SR + VERSION]
Browser: [BROWSER + VERSION]
Operating System: [OS + VERSION]

For each page/component tested:

1. Page/Component: [NAME]
   URL: [URL or Component Name]

2. Test Scenario: [SCENARIO_DESCRIPTION]
   Steps:
   1. [STEP_1]
   2. [STEP_2]
   3. [STEP_3]

3. Expected Behavior:
   - [EXPECTED_1]
   - [EXPECTED_2]

4. Actual Behavior:
   - [ACTUAL_1]
   - [ACTUAL_2]

5. Screen Reader Output:
   "[Exact text announced by screen reader]"

6. Pass/Fail: [PASS/FAIL]

7. Issue Details (if failed):
   - Issue: [DESCRIPTION]
   - Severity: [CRITICAL/HIGH/MEDIUM/LOW]
   - WCAG Criterion: [SC_NUMBER]
   - Impact: [USER_IMPACT]
   - Screenshot/Recording: [LINK]
   - Recommendation: [FIX_SUGGESTION]

8. Notes:
   [Additional observations]

Generate:
- Test session template
- Issue tracking format
- Evidence collection guide
- Report summary template
```

## 9. Common Screen Reader Issues and Solutions

```
Document common screen reader issues:

Issue: Images without alt text
Screen Reader Output: "Image" or filename
Expected: Descriptive alt text
Solution:
```html
<img src="product.jpg" alt="Red running shoes with white laces">
<img src="decorative.jpg" alt="" role="presentation">
```

Issue: Empty links
Screen Reader Output: "Link" or no announcement
Expected: Descriptive link text
Solution:
```html
<!-- Bad -->
<a href="#">Read more</a>
<a href="#"><img src="icon.png"></a>

<!-- Good -->
<a href="#">Read more about accessibility testing</a>
<a href="#"><img src="icon.png" alt="View shopping cart"></a>
```

Issue: Missing form labels
Screen Reader Output: "Edit" or just field type
Expected: Label + field type
Solution:
```html
<label for="email">Email Address</label>
<input type="email" id="email" name="email">
```

Issue: Unclear button purpose
Screen Reader Output: "Button, X" or "Button, Submit"
Expected: Clear purpose
Solution:
```html
<!-- Bad -->
<button>X</button>
<button>Submit</button>

<!-- Good -->
<button aria-label="Close dialog">X</button>
<button>Submit registration form</button>
```

Issue: Dynamic content not announced
Screen Reader Output: Silence
Expected: Announcement of changes
Solution:
```html
<div role="status" aria-live="polite">
  {message}
</div>
```

Issue: Keyboard trap in modal
Screen Reader Output: Cannot exit modal
Expected: Can close with Escape or close button
Solution:
- Trap focus within modal
- Escape key closes modal
- Return focus to trigger

Issue: Improper heading hierarchy
Screen Reader Output: Confusing structure
Expected: H1 → H2 → H3 (logical order)
Solution: Use headings for structure, not styling

Generate:
- Issue patterns library
- Quick fix guide
- Testing shortcuts
- Common mistakes checklist
```

## 10. Screen Reader Testing Checklist

```
Create comprehensive screen reader testing checklist:

Pre-Testing Setup:
- [ ] Screen reader installed and configured
- [ ] Browser compatibility verified
- [ ] Audio output working
- [ ] Recording tools ready (if needed)
- [ ] Test environment accessible

Content Testing:
- [ ] Page title announced correctly
- [ ] Headings in logical order
- [ ] Heading levels announced
- [ ] Landmarks identified (header, nav, main, footer)
- [ ] All text content accessible
- [ ] Reading order makes sense
- [ ] Language changes identified

Images and Media:
- [ ] All images have appropriate alt text
- [ ] Decorative images have empty alt or aria-hidden
- [ ] Complex images have extended descriptions
- [ ] Icons have accessible names
- [ ] Video/audio have transcripts or captions

Links and Navigation:
- [ ] All links have descriptive text
- [ ] Link purpose clear from context
- [ ] Skip links present and functional
- [ ] Navigation consistent across pages
- [ ] Breadcrumbs accessible

Forms:
- [ ] All form fields have labels
- [ ] Required fields identified
- [ ] Error messages associated with fields
- [ ] Help text accessible
- [ ] Grouping with fieldset/legend
- [ ] Form validation announced

Interactive Elements:
- [ ] Buttons have clear purpose
- [ ] Button state changes announced
- [ ] Custom controls have proper ARIA
- [ ] Keyboard access to all functions
- [ ] Focus indicators visible

Dynamic Content:
- [ ] Live regions announce changes
- [ ] Loading states announced
- [ ] Status messages accessible
- [ ] Error/success messages announced
- [ ] Content updates don't disrupt flow

Tables:
- [ ] Tables identified as tables
- [ ] Headers properly associated
- [ ] Complex tables use additional markup
- [ ] Caption provided
- [ ] Summary if needed

Modals and Dialogs:
- [ ] Modal role announced
- [ ] Focus moves to modal on open
- [ ] Focus trapped within modal
- [ ] Modal can be dismissed
- [ ] Focus returns on close

ARIA:
- [ ] ARIA roles appropriate
- [ ] ARIA states accurate
- [ ] aria-label/aria-labelledby used correctly
- [ ] aria-describedby provides additional context
- [ ] aria-live regions work correctly
- [ ] aria-hidden used appropriately

Mobile (if applicable):
- [ ] VoiceOver/TalkBack gestures work
- [ ] Content accessible via swipe
- [ ] Zoom does not break SR
- [ ] Touch targets adequate size

Documentation:
- [ ] Test results documented
- [ ] Issues logged with severity
- [ ] Screen reader output recorded
- [ ] Recommendations provided
- [ ] Retesting plan created

Generate:
- Master testing checklist
- Per-page checklist
- Issue tracking template
- Final report format
```

## Best Practices

1. **Testing Environment**
   - Test with multiple screen readers
   - Use recommended browser pairings
   - Test on actual devices (not just emulators)
   - Keep software updated

2. **Testing Approach**
   - Test with screen reader from start
   - Don't rely solely on automated tools
   - Include real users in testing
   - Test common user journeys

3. **Documentation**
   - Record exact screen reader output
   - Include steps to reproduce
   - Provide severity ratings
   - Suggest specific fixes

4. **Continuous Testing**
   - Test during development
   - Regression testing after changes
   - Regular audits
   - Monitor for new issues

## Tools and Resources

**Screen Readers:**
- NVDA (Free, Windows)
- JAWS (Commercial, Windows)
- VoiceOver (Built-in, Mac/iOS)
- TalkBack (Built-in, Android)
- Narrator (Built-in, Windows)

**Testing Tools:**
- Screen reader extensions for dev tools
- ARIA validators
- Focus indicators tools
- Semantic structure analyzers

**Learning Resources:**
- WAI-ARIA Authoring Practices
- WebAIM Screen Reader surveys
- Deque University
- Screen reader user guides
