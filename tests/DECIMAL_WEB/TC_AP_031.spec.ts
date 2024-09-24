import { Page, Locator, test, expect, } from '@playwright/test';

test('TC_AP_031 Verify the function data saved for valid data', { tag: ["@regression_web", "@organization_management", "@function", "@TC_AP_031"] }, async ({ page }) => {

    
await page.goto('https://preprod-web.vahanacloud.com/admin-portal-test/#/login');

await page.locator('[formcontrolname="email"]').fill('rashmi.trivedi@istar-x.com');

await page.getByRole('button', {name : 'Get OTP', exact: true}).click();

await page.locator('[formcontrolname="otp"]').fill('123456');

await page.getByRole('button', {name : 'Submit', exact: true}).click();

await page.locator('//*[text()="Organization Management"]/ancestor::*[contains(@class, "section-one")]//*[text()="Function"]').click();

await page.getByRole('button', {name : 'Add Function', exact: true}).click();

await page.locator('[name="code"]').fill('TESTAUTO04');

await page.locator('[name="name"]').fill('Test Automation');

await page.getByRole('button', {name : 'Add', exact: true}).click();

await page.locator('[placeholder="Search Function Code"]').fill('TESTAUTO04');

await page.locator('[placeholder="Search Function Name"]').fill('Test Automation');

await page.getByRole('button', {name : 'Search', exact: true}).click();

await expect(page.getByRole('cell', {name : 'TESTAUTO04', exact: true})).toBeVisible();

await expect(page.getByRole('cell', {name : 'Test Automation', exact: true})).toBeVisible();


});