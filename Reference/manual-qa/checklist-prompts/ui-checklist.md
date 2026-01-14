# UI Testing Checklist Prompts

## 1. General UI Testing Checklist

```
Generate a comprehensive UI testing checklist for:

Application: [APP_NAME]
Page/Screen: [PAGE_NAME]
UI Framework: [REACT/ANGULAR/VUE/etc.]
Browser Support: [LIST_BROWSERS]

Create checklist covering:
- Layout and responsiveness
- Navigation and links
- Forms and input validation
- Visual elements (colors, fonts, images)
- Interactive elements (buttons, dropdowns)
- Error messages and notifications
- Accessibility
- Cross-browser compatibility
```

## 2. Responsive Design Checklist

```
Create a responsive design testing checklist for:

Application: [APP_NAME]
Breakpoints: [MOBILE/TABLET/DESKTOP]
Supported Devices: [LIST_DEVICES]

Include checks for:
- Layout adaptation at each breakpoint
- Image scaling and quality
- Text readability
- Touch targets size (mobile)
- Navigation menu behavior
- Form usability on small screens
- Orientation changes (portrait/landscape)
- Content priority and hiding
```

## 3. Form Validation Checklist

```
Generate a form validation testing checklist for:

Form Name: [FORM_NAME]
Fields: [LIST_ALL_FIELDS]
Validation Rules: [DESCRIBE_RULES]

Create checklist for:
- Required field validation
- Data type validation
- Format validation (email, phone, etc.)
- Length constraints
- Special character handling
- Real-time vs submit validation
- Error message clarity
- Success confirmation
- Tab order and keyboard navigation
```

## 4. Navigation Testing Checklist

```
Create a navigation testing checklist for:

Application: [APP_NAME]
Navigation Type: [MENU/BREADCRUMB/TABS/etc.]
Number of Pages: [COUNT]

Include checks for:
- All menu items functional
- Breadcrumb accuracy
- Back/forward button behavior
- Deep linking
- Active state indication
- Keyboard navigation
- Mobile menu behavior
- Search functionality
- 404 error handling
```

## 5. Visual Design Checklist

```
Generate a visual design testing checklist for:

Application: [APP_NAME]
Design System: [IF_APPLICABLE]
Brand Guidelines: [REFERENCE]

Cover:
- Color consistency
- Typography (fonts, sizes, weights)
- Spacing and alignment
- Icons and imagery
- Button styles
- Shadows and borders
- Animations and transitions
- Loading states
- Empty states
- Dark mode (if applicable)
```

## 6. Accessibility (A11y) Checklist

```
Create an accessibility testing checklist for:

Application: [APP_NAME]
WCAG Level: [A/AA/AAA]
Target Compliance: [STANDARD]

Include checks for:
- Keyboard navigation
- Screen reader compatibility
- Color contrast ratios
- Alt text for images
- Form labels and ARIA attributes
- Focus indicators
- Skip navigation links
- Heading hierarchy
- Error identification
- Resizable text
```

## 7. Cross-Browser Compatibility Checklist

```
Generate a cross-browser testing checklist for:

Application: [APP_NAME]
Supported Browsers: [LIST_BROWSERS_AND_VERSIONS]

Test across browsers:
- Layout rendering
- CSS compatibility
- JavaScript functionality
- Form behavior
- Media playback
- File upload/download
- Local storage/cookies
- Console errors
- Performance variations
```

## 8. Interactive Elements Checklist

```
Create a checklist for testing interactive UI elements:

Application: [APP_NAME]
Interactive Elements: [BUTTONS/MODALS/DROPDOWNS/etc.]

Cover:
- Button states (default, hover, active, disabled)
- Modal open/close behavior
- Dropdown functionality
- Tooltip display
- Accordion expand/collapse
- Tab switching
- Drag and drop
- Infinite scroll
- Pagination
- Search autocomplete
```

## 9. Data Display Checklist

```
Generate a data display testing checklist for:

Application: [APP_NAME]
Data Components: [TABLES/CHARTS/LISTS/etc.]

Include checks for:
- Data accuracy
- Sorting functionality
- Filtering options
- Pagination
- Column resizing
- Row selection
- Empty state display
- Loading states
- Error states
- Export functionality
- Print layout
```

## 10. Error Handling UI Checklist

```
Create an error handling UI checklist for:

Application: [APP_NAME]
Error Types: [VALIDATION/SYSTEM/NETWORK/etc.]

Test:
- Error message clarity
- Error message placement
- Inline vs summary errors
- Error styling (color, icons)
- Error recovery options
- Network error handling
- Timeout error display
- 404/500 error pages
- Graceful degradation
```

## Comprehensive UI Testing Checklist Template

```
# UI Testing Checklist for [PAGE/FEATURE_NAME]

## Layout & Structure
- [ ] Page layout matches design specifications
- [ ] All sections properly aligned
- [ ] Consistent spacing and margins
- [ ] No overlapping elements
- [ ] Footer stays at bottom
- [ ] Header/navigation fixed (if applicable)
- [ ] Content centered/aligned correctly

## Responsive Design
- [ ] Mobile view (320px-767px)
  - [ ] Layout adapts correctly
  - [ ] All content visible
  - [ ] Touch targets adequate size (44x44px min)
  - [ ] No horizontal scrolling
- [ ] Tablet view (768px-1024px)
  - [ ] Layout adapts correctly
  - [ ] Navigation appropriate for screen size
- [ ] Desktop view (1025px+)
  - [ ] Full layout displayed
  - [ ] Proper use of screen real estate
- [ ] Orientation changes (mobile/tablet)
  - [ ] Portrait mode works correctly
  - [ ] Landscape mode works correctly

## Navigation
- [ ] All navigation links functional
- [ ] Active page highlighted
- [ ] Breadcrumbs accurate
- [ ] Back button works correctly
- [ ] Forward button works correctly
- [ ] Deep links work
- [ ] 404 page displays for invalid URLs
- [ ] Mobile menu opens/closes correctly
- [ ] Keyboard navigation works (Tab, Enter, Esc)

## Typography
- [ ] Font families correct
- [ ] Font sizes appropriate
- [ ] Font weights correct
- [ ] Line height readable
- [ ] Text color has sufficient contrast
- [ ] No text overflow or truncation
- [ ] Headings hierarchy correct (H1, H2, etc.)

## Colors & Branding
- [ ] Brand colors used correctly
- [ ] Color contrast meets WCAG standards
- [ ] Hover states visible
- [ ] Active states clear
- [ ] Disabled states distinguishable
- [ ] Error states use appropriate colors
- [ ] Success states use appropriate colors

## Images & Media
- [ ] All images load correctly
- [ ] Images have appropriate alt text
- [ ] Images scale properly
- [ ] Image quality acceptable
- [ ] Lazy loading works (if implemented)
- [ ] Placeholder images display while loading
- [ ] Videos play correctly
- [ ] Audio controls functional

## Forms
- [ ] All fields display correctly
- [ ] Labels associated with inputs
- [ ] Placeholder text helpful
- [ ] Required fields marked
- [ ] Field validation works
- [ ] Error messages clear and helpful
- [ ] Success messages display
- [ ] Submit button enabled/disabled appropriately
- [ ] Tab order logical
- [ ] Autocomplete works (if applicable)
- [ ] Date pickers functional
- [ ] File upload works

## Buttons & Links
- [ ] All buttons functional
- [ ] Button text clear
- [ ] Hover states work
- [ ] Active states work
- [ ] Disabled states clear
- [ ] Loading states display
- [ ] All links work
- [ ] External links open in new tab (if intended)
- [ ] Link colors distinguishable

## Interactive Elements
- [ ] Modals open/close correctly
- [ ] Modal backdrop prevents interaction
- [ ] Dropdowns expand/collapse
- [ ] Tooltips display on hover
- [ ] Accordions expand/collapse
- [ ] Tabs switch correctly
- [ ] Carousels/sliders work
- [ ] Drag and drop functional
- [ ] Infinite scroll works
- [ ] Pagination works

## Data Display
- [ ] Tables display correctly
- [ ] Table sorting works
- [ ] Table filtering works
- [ ] Column headers clear
- [ ] Row hover states work
- [ ] Charts render correctly
- [ ] Chart data accurate
- [ ] Lists display properly
- [ ] Empty states show when no data
- [ ] Loading states display

## Notifications & Alerts
- [ ] Success messages display
- [ ] Error messages display
- [ ] Warning messages display
- [ ] Info messages display
- [ ] Toast/snackbar notifications work
- [ ] Notification auto-dismiss (if applicable)
- [ ] Notification close button works

## Accessibility
- [ ] Keyboard navigation works throughout
- [ ] Focus indicators visible
- [ ] Screen reader compatible
- [ ] ARIA labels present
- [ ] Color not sole means of conveying info
- [ ] Text resizable to 200%
- [ ] Skip to main content link
- [ ] Form errors announced to screen readers

## Performance
- [ ] Page loads within acceptable time
- [ ] Images optimized
- [ ] No console errors
- [ ] No console warnings
- [ ] Smooth animations
- [ ] No layout shifts (CLS)
- [ ] Interactive quickly (FID)

## Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Print Layout (if applicable)
- [ ] Print stylesheet applied
- [ ] Unnecessary elements hidden
- [ ] Content fits on page
- [ ] Page breaks appropriate

## Dark Mode (if applicable)
- [ ] Dark mode toggle works
- [ ] All colors appropriate for dark mode
- [ ] Sufficient contrast in dark mode
- [ ] Images/icons visible in dark mode
```

## Best Practices

1. **Test Early**: Start UI testing as soon as components are available
2. **Use Real Devices**: Test on actual devices, not just emulators
3. **Multiple Browsers**: Don't assume cross-browser compatibility
4. **Accessibility First**: Include a11y in every UI test
5. **Document Issues**: Screenshot and describe UI bugs clearly
6. **Pixel Perfect**: Compare with design specs
7. **User Perspective**: Think like an end user
8. **Automate Visual Tests**: Use visual regression testing tools

## Common UI Issues to Watch For

- Broken layouts on different screen sizes
- Inconsistent spacing and alignment
- Poor color contrast
- Missing or broken images
- Non-functional buttons or links
- Confusing error messages
- Inaccessible forms
- Slow page load times
- Console errors
- Layout shifts during loading
