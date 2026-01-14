# Playwright File Upload & Download Prompt

**Role:** QA Automation Engineer

**Objective:** Automate file uploading and downloading scenarios.

**Context:**
The testing features involve uploading a profile picture and downloading a generated PDF report.

**Requirements:**
1.  **Upload:** Use `setInputFiles` on a standard file input.
    - Handle non-standard inputs (hidden inputs) if needed/possible (event dispatching).
    - Handle "file chooser" dialogs triggered by a button click.
2.  **Download:** Use `page.waitForEvent('download')`.
    - Save the downloaded file to a specific path.
    - Verify the filename or file size.

**Expected Output:**
A test file `tests/files.spec.ts` with two tests:
1.  `test('upload file', ...)`
2.  `test('download file', ...)`
