# Playwright Test Script Generation Prompts

## 1. Basic Playwright Test

```
Generate a Playwright test script for:

Language: [TYPESCRIPT/JAVASCRIPT/PYTHON/C#]
Browser: [CHROMIUM/FIREFOX/WEBKIT]
Test Scenario: [DESCRIBE_SCENARIO]

Include:
- Test setup and teardown
- Page navigation
- Element interactions
- Assertions
- Auto-waiting (Playwright's built-in)
- Screenshots/videos on failure
```

## 2. Playwright Page Object Model

```
Create a Playwright test using Page Object Model for:

Page: [PAGE_NAME]
URL: [PAGE_URL]
Elements: [LIST_ELEMENTS]
Actions: [LIST_ACTIONS]

Generate:
- Page class with locators
- Page methods for actions
- Test file using the page class
- Proper TypeScript types (if TypeScript)
```

## 3. Playwright API Testing

```
Generate Playwright API test for:

API Endpoint: [URL]
Method: [GET/POST/PUT/DELETE]
Request Body: [IF_APPLICABLE]
Expected Response: [DESCRIBE]

Include:
- API context setup
- Request with headers
- Response validation
- Status code assertion
- Response body validation
```

## 4. Playwright Visual Regression Test

```
Create a Playwright visual regression test for:

Pages to Test: [LIST_PAGES]
Viewports: [DESKTOP/MOBILE/TABLET]
Comparison Tool: [BUILT-IN/PERCY/etc.]

Generate:
- Screenshot capture
- Visual comparison
- Threshold configuration
- Multiple viewport testing
```

## 5. Playwright Mobile Emulation

```
Generate Playwright test with mobile emulation for:

Device: [IPHONE_12/PIXEL_5/etc.]
Test Scenario: [SCENARIO]
Orientation: [PORTRAIT/LANDSCAPE]

Include:
- Device emulation setup
- Touch gestures
- Viewport configuration
- User agent setting
```

## Playwright Test Template (TypeScript)

```typescript
import { test, expect, Page } from '@playwright/test';

test.describe('[TEST_SUITE_NAME]', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to the application
    await page.goto('[URL]');
  });

  test('[TEST_NAME]', async ({ page }) => {
    // Interact with elements
    await page.click('[SELECTOR]');
    await page.fill('[INPUT_SELECTOR]', '[TEST_DATA]');
    
    // Wait for navigation or element
    await page.waitForSelector('[SELECTOR]');
    
    // Assertions
    await expect(page.locator('[SELECTOR]')).toBeVisible();
    await expect(page.locator('[SELECTOR]')).toHaveText('[EXPECTED_TEXT]');
    
    // Screenshot
    await page.screenshot({ path: 'screenshot.png' });
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});
```

## Playwright Page Object Template

```typescript
import { Page, Locator } from '@playwright/test';

export class [PAGE_NAME]Page {
  readonly page: Page;
  readonly [elementName]: Locator;
  readonly [elementName]: Locator;

  constructor(page: Page) {
    this.page = page;
    this.[elementName] = page.locator('[SELECTOR]');
    this.[elementName] = page.locator('[SELECTOR]');
  }

  async goto() {
    await this.page.goto('[URL]');
  }

  async [actionMethod]([parameters]) {
    await this.[elementName].click();
  }

  async fill[FieldName](text: string) {
    await this.[elementName].fill(text);
  }

  async get[ElementName]Text(): Promise<string> {
    return await this.[elementName].textContent() || '';
  }
}
```

## Best Practices

1. **Auto-waiting**: Playwright waits automatically, no explicit waits needed
2. **Strict Mode**: Use strict locators to avoid ambiguity
3. **Codegen**: Use `playwright codegen` to generate tests
4. **Trace Viewer**: Enable trace for debugging
5. **Parallel Testing**: Tests run in parallel by default
6. **Multiple Browsers**: Test across Chromium, Firefox, WebKit
7. **API Testing**: Use Playwright for API testing too
8. **Screenshots/Videos**: Capture on failure automatically
