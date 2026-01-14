# Keyboard Navigation Testing Prompts

## 1. Comprehensive Keyboard Navigation Test Plan

```
Create keyboard navigation test plan for:

Application: [APPLICATION_NAME]
Pages to Test: [LIST_PAGES]
Interactive Components: [LIST_COMPONENTS]

Test plan should cover:

1. Basic Keyboard Navigation
   - Tab key functionality
   - Shift+Tab reverse navigation
   - Enter key activation
   - Spacebar functionality
   - Escape key behavior
   - Arrow key navigation

2. Focus Management
   - Focus order logical
   - Focus indicators visible
   - No keyboard traps
   - Focus states clear
   - Skip links present

3. Custom Components
   - Dropdowns and menus
   - Modal dialogs
   - Carousels and sliders
   - Tabs and accordions
   - Autocomplete widgets
   - Custom controls

4. Forms
   - Field navigation
   - Error handling
   - Submission process
   - Validation feedback

5. Success Criteria (WCAG 2.1)
   - 2.1.1 Keyboard (Level A)
   - 2.1.2 No Keyboard Trap (Level A)
   - 2.1.4 Character Key Shortcuts (Level A)
   - 2.4.3 Focus Order (Level A)
   - 2.4.7 Focus Visible (Level AA)
   - 3.2.1 On Focus (Level A)

Generate:
- Test case matrix
- Component-specific tests
- Expected behaviors
- Pass/fail criteria
```

## 2. Basic Keyboard Navigation Tests

```
Generate basic keyboard navigation test cases:

Page: [PAGE_NAME]

Test Scenarios:

1. Tab Key Navigation
   Test:
   - Press Tab to move forward through focusable elements
   - Navigate entire page using only Tab
   - Ensure all interactive elements are reachable

   Verify:
   - Focus moves in logical order
   - Focus visible on every element
   - No elements skipped
   - Matches visual flow (left-to-right, top-to-bottom)

   Expected Tab Order:
   1. Skip to main content link
   2. Logo (if linked)
   3. Primary navigation links
   4. Search field (if present)
   5. Main content links/buttons
   6. Sidebar links (if present)
   7. Footer links

2. Shift+Tab Navigation
   Test:
   - Press Shift+Tab to move backward
   - Navigate from end to beginning

   Verify:
   - Reverse order works correctly
   - Same elements reached
   - Focus indicators visible

3. Enter Key
   Test on:
   - Links: Should follow link
   - Buttons: Should activate button
   - Submit buttons: Should submit form
   - Checkboxes: Should toggle (some browsers)

   Verify:
   - Activates focused element
   - Performs expected action
   - No unexpected behavior

4. Spacebar
   Test on:
   - Buttons: Should activate
   - Checkboxes: Should toggle
   - Radio buttons: Should select
   - Scrollable areas: Should scroll

   Verify:
   - Correct activation
   - State changes reflected
   - Visual feedback provided

5. Escape Key
   Test on:
   - Modal dialogs: Should close
   - Dropdowns: Should close
   - Autocomplete: Should close suggestions
   - Overlays: Should dismiss

   Verify:
   - Dismisses overlay/dialog
   - Focus returns appropriately
   - No side effects

6. Arrow Keys
   Test on:
   - Radio button groups: Navigate options
   - Dropdown lists: Navigate options
   - Sliders: Increase/decrease value
   - Tabs: Navigate between tabs
   - Menus: Navigate menu items

   Verify:
   - Navigation works smoothly
   - Selected option indicated
   - Wrapping behavior appropriate

Generate:
- Step-by-step test cases
- Expected outcomes
- Browser-specific notes
- Failure examples
```

## 3. Focus Indicator Testing

```
Create focus indicator test cases:

Application: [APPLICATION_NAME]
Focus Style: [DESCRIBE_CURRENT_STYLE]

Test Scenarios:

1. Focus Visibility (WCAG 2.4.7 Level AA)
   Test on all interactive elements:
   - Links
   - Buttons
   - Form inputs
   - Select dropdowns
   - Checkboxes and radio buttons
   - Custom controls
   - Menu items
   - Tab controls

   Requirements:
   - Visible focus indicator present
   - Minimum contrast ratio 3:1 against background
   - Indicator at least 2px outline or equivalent

   Test:
   - Tab to each element
   - Verify focus indicator visible
   - Check contrast with color picker

2. Focus Styles Should Not Be Removed
   Check CSS for:
   ```css
   /* Bad - Never do this */
   *:focus {
     outline: none;
   }

   /* Good - Enhanced focus style */
   *:focus {
     outline: 3px solid #0066CC;
     outline-offset: 2px;
   }
   ```

   Verify:
   - Default outline not removed without replacement
   - Custom focus styles meet requirements
   - Consistent across browsers

3. Custom Focus Indicators
   Test custom implementations:
   ```css
   .button:focus {
     box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.5);
     outline: none;
   }
   ```

   Verify:
   - Visible on all backgrounds
   - Sufficient contrast
   - Works in high contrast mode
   - Not hidden by other elements

4. Focus vs Hover States
   Test:
   - Hover over element (mouse)
   - Tab to element (keyboard)

   Verify:
   - Different visual indicators
   - Both clearly visible
   - Don't overlap confusingly

5. Focus in Complex Components
   Test focus in:
   - Modal dialogs (focus outline visible)
   - Dropdown menus (focused option clear)
   - Carousels (focused slide/button clear)
   - Data tables (focused cell visible)

6. Browser and OS Variations
   Test in:
   - Chrome
   - Firefox
   - Safari
   - Edge
   - Windows High Contrast Mode
   - macOS Increase Contrast mode

   Verify:
   - Focus indicators work in all browsers
   - High contrast modes don't hide indicators
   - Native controls maintain visibility

Generate:
- Focus indicator audit
- Contrast measurements
- Browser compatibility matrix
- CSS recommendations
```

## 4. Skip Link Testing

```
Generate skip link test cases:

Page: [PAGE_NAME]

Test Scenarios:

1. Skip to Main Content Link
   Implementation:
   ```html
   <a href="#main" class="skip-link">Skip to main content</a>

   <main id="main" tabindex="-1">
     <!-- Page content -->
   </main>
   ```

   Test:
   - Load page
   - Press Tab once
   - Verify skip link visible
   - Press Enter
   - Verify focus moves to main content

   Verify:
   - Skip link is first focusable element
   - Link visible when focused (may be hidden otherwise)
   - Target has tabindex="-1" for Firefox compatibility
   - Focus moves correctly

2. Visual Presentation
   CSS:
   ```css
   .skip-link {
     position: absolute;
     top: -40px;
     left: 0;
     background: #000;
     color: #fff;
     padding: 8px;
     z-index: 100;
   }

   .skip-link:focus {
     top: 0;
   }
   ```

   Test:
   - Link hidden by default
   - Visible on focus
   - Readable and styled
   - High contrast sufficient

3. Multiple Skip Links
   If page is complex:
   ```html
   <a href="#nav">Skip to navigation</a>
   <a href="#main">Skip to main content</a>
   <a href="#search">Skip to search</a>
   ```

   Verify:
   - All skip links functional
   - Order makes sense
   - Labels descriptive

4. Skip Link Alternatives
   Test:
   - ARIA landmarks (regions)
   - Heading navigation
   - Screen reader shortcuts

   Verify:
   - Multiple navigation methods available
   - Skip links most efficient for keyboard users

Generate:
- Skip link implementation guide
- Testing checklist
- Browser compatibility notes
- Best practices
```

## 5. Form Navigation Testing

```
Create form navigation test cases:

Form: [FORM_NAME]
Fields: [LIST_FIELDS]

Test Scenarios:

1. Tab Order Through Form
   Test:
   - Tab through all form fields
   - Verify order matches visual layout
   - Check field grouping logical

   Expected order:
   - First name → Last name → Email → Phone → etc.

   Verify:
   - No skipped fields
   - Logical flow
   - Related fields grouped

2. Field Labels
   Test:
   - Tab to each field
   - Verify label announced by screen reader
   - Check label association

   Implementation:
   ```html
   <label for="email">Email Address</label>
   <input type="email" id="email" name="email">
   ```

   Verify:
   - Every input has label
   - Association works (<label for="id">)
   - Placeholder not sole label

3. Required Fields
   Test:
   - Tab to required field
   - Check visual indicator (asterisk)
   - Check aria-required or required attribute

   Implementation:
   ```html
   <label for="email">Email Address <span aria-label="required">*</span></label>
   <input type="email" id="email" required>
   ```

   Verify:
   - Required status clear
   - Announced by screen readers
   - Consistent indication method

4. Keyboard Input
   Test in each field type:
   - Text input: Type freely
   - Number: Arrow keys adjust
   - Date: Keyboard input works
   - Select: Arrow keys navigate
   - Checkbox: Spacebar toggles
   - Radio: Arrow keys switch

   Verify:
   - Standard keyboard conventions
   - No unexpected behavior
   - Input methods intuitive

5. Error Handling
   Test:
   - Submit form with errors
   - Tab to first error
   - Read error message
   - Correct error
   - Submit successfully

   Implementation:
   ```html
   <label for="email">Email</label>
   <input type="email" id="email" aria-describedby="email-error" aria-invalid="true">
   <span id="email-error" class="error">Please enter a valid email</span>
   ```

   Verify:
   - Focus moves to first error
   - Error message associated with field
   - aria-invalid="true" on invalid fields
   - Can navigate between errors easily

6. Form Submission
   Test:
   - Fill out form
   - Tab to submit button
   - Press Enter or Space
   - Verify submission

   Also test:
   - Enter key in text field submits
   - Loading state keyboard accessible
   - Success message announced
   - Focus management after submit

Generate:
- Form testing checklist
- Field-by-field test cases
- Error scenario tests
- Submission workflow tests
```

## 6. Modal Dialog Keyboard Navigation

```
Generate modal dialog test cases:

Component: Modal Dialog
Trigger: [BUTTON/LINK_TEXT]

Test Scenarios:

1. Opening Modal
   Test:
   - Tab to modal trigger
   - Press Enter or Space
   - Modal opens

   Verify:
   - Focus moves into modal immediately
   - Focus on first focusable element (close button or heading)
   - Background content becomes inert
   - Screen reader announces modal

2. Focus Trap
   Test:
   - Tab through all modal elements
   - At last element, Tab wraps to first
   - Shift+Tab from first wraps to last
   - Cannot Tab to background content

   Implementation:
   ```javascript
   const modal = document.querySelector('[role="dialog"]');
   const focusableElements = modal.querySelectorAll(
     'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
   );
   const firstFocusable = focusableElements[0];
   const lastFocusable = focusableElements[focusableElements.length - 1];

   modal.addEventListener('keydown', (e) => {
     if (e.key === 'Tab') {
       if (e.shiftKey && document.activeElement === firstFocusable) {
         e.preventDefault();
         lastFocusable.focus();
       } else if (!e.shiftKey && document.activeElement === lastFocusable) {
         e.preventDefault();
         firstFocusable.focus();
       }
     }
   });
   ```

   Verify:
   - Focus trapped within modal
   - Cannot access background
   - Tab cycles through modal only

3. Closing Modal
   Test methods:
   - Escape key
   - Close button (X)
   - Cancel/Close button
   - Background click (optional)

   Verify:
   - All close methods work with keyboard
   - Escape key closes modal
   - Focus returns to trigger element

4. Modal Content Navigation
   Test:
   - Tab through form fields
   - Navigate to buttons
   - Access all content
   - Scrollable content accessible

   Verify:
   - All content keyboard accessible
   - Long content can be scrolled with keyboard
   - No hidden focusable elements

5. ARIA Implementation
   ```html
   <div role="dialog" aria-modal="true" aria-labelledby="modal-title">
     <h2 id="modal-title">Dialog Title</h2>
     <!-- Dialog content -->
     <button aria-label="Close dialog">X</button>
   </div>
   ```

   Verify:
   - role="dialog"
   - aria-modal="true"
   - aria-labelledby or aria-label
   - Close button labeled

Generate:
- Modal testing checklist
- Focus trap implementation
- Close behavior tests
- ARIA requirements
```

## 7. Dropdown Menu Keyboard Navigation

```
Create dropdown menu test cases:

Component: Dropdown Menu
Menu Type: [NAVIGATION/SELECT/COMBOBOX]

Test Scenarios:

1. Opening Menu
   Test:
   - Tab to menu button
   - Press Enter or Space to open
   - Or Down Arrow to open and move to first item

   Verify:
   - Menu opens
   - Focus moves to first menu item
   - aria-expanded changes to "true"

2. Arrow Key Navigation
   Test:
   - Down Arrow: Move to next item
   - Up Arrow: Move to previous item
   - Home: Jump to first item
   - End: Jump to last item
   - Letter keys: Jump to item starting with letter

   Verify:
   - Navigation smooth
   - Focus visible on current item
   - Wrapping behavior (optional)

3. Selection
   Test:
   - Navigate to item
   - Press Enter to select
   - Menu closes
   - Focus returns to button

   Verify:
   - Item selected
   - Menu dismissed
   - Focus managed correctly
   - Selection reflected in UI

4. Closing Menu
   Test:
   - Escape key
   - Tab key (closes and moves to next element)
   - Click outside (with mouse)

   Verify:
   - Menu closes appropriately
   - Focus returns to button (Escape)
   - Focus moves forward (Tab)

5. ARIA Pattern for Menu Button
   ```html
   <button aria-haspopup="true" aria-expanded="false" id="menubutton">
     Options
   </button>
   <ul role="menu" aria-labelledby="menubutton">
     <li role="menuitem">Option 1</li>
     <li role="menuitem">Option 2</li>
     <li role="menuitem">Option 3</li>
   </ul>
   ```

   Verify:
   - aria-haspopup="true" or "menu"
   - aria-expanded toggles
   - role="menu" on container
   - role="menuitem" on items

6. Combobox Pattern (Select with Autocomplete)
   ```html
   <input role="combobox"
          aria-expanded="false"
          aria-controls="listbox"
          aria-autocomplete="list">
   <ul role="listbox" id="listbox">
     <li role="option">Option 1</li>
   </ul>
   ```

   Test:
   - Type to filter
   - Arrow keys to navigate
   - Enter to select
   - Escape to close

   Verify:
   - Filtering works
   - Keyboard navigation smooth
   - Selection mechanism clear

Generate:
- Menu pattern test cases
- Keyboard interaction matrix
- ARIA requirements
- Implementation examples
```

## 8. Tab Interface Keyboard Navigation

```
Generate tab interface test cases:

Component: Tabs
Number of Tabs: [NUMBER]

Test Scenarios:

1. Tab Activation
   Method 1 - Automatic (Selection follows focus):
   - Tab to tab list
   - Arrow keys select and show panel
   - Tab moves to panel

   Method 2 - Manual (Separate selection from focus):
   - Tab to tab list
   - Arrow keys move focus
   - Enter/Space activates tab
   - Tab moves to panel

   Choose based on content complexity

2. Arrow Key Navigation
   Test:
   - Right Arrow: Next tab (or Down)
   - Left Arrow: Previous tab (or Up)
   - Home: First tab
   - End: Last tab

   Verify:
   - Navigation cycles through tabs
   - Wrapping behavior (last to first)
   - Disabled tabs handled

3. Tab Panel Access
   Test:
   - Activate tab
   - Press Tab
   - Focus moves to panel content
   - Can navigate within panel
   - Tab moves out of panel

   Verify:
   - Logical tab order
   - Panel content accessible
   - Can exit panel easily

4. ARIA Implementation
   ```html
   <div role="tablist">
     <button role="tab" aria-selected="true" aria-controls="panel1" id="tab1">
       Tab 1
     </button>
     <button role="tab" aria-selected="false" aria-controls="panel2" id="tab2">
       Tab 2
     </button>
   </div>
   <div role="tabpanel" id="panel1" aria-labelledby="tab1" tabindex="0">
     Panel 1 content
   </div>
   <div role="tabpanel" id="panel2" aria-labelledby="tab2" tabindex="0" hidden>
     Panel 2 content
   </div>
   ```

   Verify:
   - role="tablist" on container
   - role="tab" on tabs
   - role="tabpanel" on panels
   - aria-selected on active tab
   - aria-controls associates tab with panel
   - aria-labelledby associates panel with tab

5. Disabled Tabs
   Test:
   - Navigate to disabled tab
   - Arrow key skips over it

   Verify:
   - Cannot activate disabled tab
   - Still discoverable (not hidden)
   - Visual and programmatic indication

Generate:
- Tab interface test plan
- Activation method comparison
- ARIA implementation guide
- Keyboard interaction patterns
```

## 9. Custom Component Keyboard Testing

```
Create keyboard tests for custom components:

Component: [COMPONENT_NAME]
Type: [SLIDER/CAROUSEL/DATEPICKER/TREE/etc.]

General Test Approach:

1. Identify Expected Behavior
   - What keyboard interactions should work?
   - Follow WAI-ARIA Authoring Practices Guide
   - Document expected key mappings

2. Slider Component
   Test:
   - Tab to slider
   - Arrow keys: Increase/decrease (Up/Right, Down/Left)
   - Page Up/Down: Larger increments
   - Home: Minimum value
   - End: Maximum value

   Verify:
   - Value changes with keys
   - Value announced
   - Visual feedback
   - Constraints respected (min/max/step)

   ARIA:
   ```html
   <div role="slider"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Volume"
        tabindex="0">
   </div>
   ```

3. Carousel Component
   Test:
   - Tab to carousel
   - Arrow keys: Navigate slides (or Left/Right buttons)
   - Automatic rotation: Pauses on focus
   - Controls: Play/Pause button

   Verify:
   - All slides reachable
   - Can pause rotation
   - Focus indicators visible
   - Slide content accessible

4. Datepicker Component
   Test:
   - Tab to input field
   - Enter or Space opens calendar
   - Arrow keys navigate dates
   - Page Up/Down: Change month
   - Home/End: First/last day of month
   - Enter selects date
   - Escape closes calendar

   Verify:
   - Calendar keyboard navigable
   - Date selection works
   - Input field editable
   - Format validation

5. Tree View Component
   Test:
   - Up/Down Arrow: Navigate items
   - Right Arrow: Expand node
   - Left Arrow: Collapse node
   - Enter/Space: Activate item
   - Home: First item
   - End: Last visible item

   Verify:
   - Navigation hierarchical
   - Expand/collapse works
   - Current item clear
   - aria-expanded accurate

6. Autocomplete Component
   Test:
   - Type in input
   - Down Arrow: Open suggestions, move to first
   - Up/Down Arrow: Navigate suggestions
   - Enter: Select suggestion
   - Escape: Close suggestions
   - Continue typing: Updates suggestions

   Verify:
   - Suggestions appear
   - Navigation smooth
   - Selection works
   - Can dismiss suggestions

Generate:
- Component-specific test cases
- Expected keyboard mappings
- ARIA requirements
- Implementation examples
```

## 10. Keyboard Navigation Testing Checklist

```
Create comprehensive keyboard navigation checklist:

Page/Component: [NAME]
Tested by: [TESTER]
Date: [DATE]

General Navigation:
- [ ] All interactive elements reachable with Tab
- [ ] Tab order matches visual order
- [ ] Shift+Tab reverse navigation works
- [ ] No keyboard traps
- [ ] Skip links present and functional
- [ ] Focus visible on all elements
- [ ] Focus not hidden behind elements
- [ ] Focus indicators meet 3:1 contrast
- [ ] No outline:none without replacement

Links and Buttons:
- [ ] Enter activates links and buttons
- [ ] Space activates buttons
- [ ] Link purpose clear
- [ ] Button labels descriptive

Forms:
- [ ] All fields keyboard accessible
- [ ] Labels associated with fields
- [ ] Required fields indicated
- [ ] Error messages accessible
- [ ] Validation doesn't trap keyboard
- [ ] Submit button accessible
- [ ] Enter submits form
- [ ] Can navigate between fields

Menus and Dropdowns:
- [ ] Enter/Space opens menu
- [ ] Arrow keys navigate items
- [ ] Enter selects item
- [ ] Escape closes menu
- [ ] Focus returns appropriately

Modals and Dialogs:
- [ ] Focus moves to modal on open
- [ ] Focus trapped within modal
- [ ] Escape closes modal
- [ ] Focus returns to trigger on close
- [ ] Close button keyboard accessible

Custom Components:
- [ ] Follow ARIA authoring practices
- [ ] Arrow keys work as expected
- [ ] Home/End work if applicable
- [ ] Page Up/Down work if applicable
- [ ] Letter keys work if applicable
- [ ] State changes announced

Dynamic Content:
- [ ] New content keyboard accessible
- [ ] Focus managed on updates
- [ ] Infinite scroll doesn't trap
- [ ] Loading states announced

Media:
- [ ] Video/audio player controls accessible
- [ ] Can play/pause with keyboard
- [ ] Volume control accessible
- [ ] Captions can be toggled

Data Tables:
- [ ] Can navigate within table
- [ ] Headers associated with cells
- [ ] Sorting keyboard accessible

Mobile/Touch:
- [ ] Swipe gestures have keyboard alternative
- [ ] Touch targets 44x44px minimum
- [ ] No keyboard on touch devices works

Browser Compatibility:
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Tested in Edge
- [ ] Works in high contrast mode

Documentation:
- [ ] Issues logged with severity
- [ ] Screenshots/videos captured
- [ ] Recommendations provided
- [ ] Retesting plan created

Generate:
- Master checklist
- Component-specific checklists
- Issue tracking template
- Testing report format
```

## Best Practices

1. **Testing Approach**
   - Test with keyboard only (unplug mouse)
   - Test as early as possible
   - Test with screen reader for full picture
   - Include users with disabilities

2. **Common Patterns**
   - Follow WAI-ARIA Authoring Practices
   - Use semantic HTML first
   - Add ARIA only when necessary
   - Test in multiple browsers

3. **Focus Management**
   - Always show focus indicator
   - Manage focus on dynamic changes
   - Return focus appropriately
   - Don't move focus unexpectedly

4. **Documentation**
   - Document expected keyboard interactions
   - Provide keyboard shortcuts guide
   - Include in design system
   - Update as patterns evolve

## Tools and Resources

**Testing Tools:**
- Keyboard only (primary method)
- Browser Developer Tools (inspect focus)
- Accessibility Insights (flow visualization)
- axe DevTools (keyboard checks)

**Resources:**
- WAI-ARIA Authoring Practices Guide
- WCAG 2.1 Guidelines
- WebAIM Keyboard Accessibility
- Inclusive Components patterns

**Automation:**
- Playwright/Puppeteer for keyboard testing
- Axe-core for automated checks
- pa11y for CI/CD integration
