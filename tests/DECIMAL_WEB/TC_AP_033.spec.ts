import { Page, Locator, test, expect, } from '@playwright/test';

test('TC_AP_033 Verify the delete function code data and re-use same', { tag: ["@regression_web", "@organization_management", "@function", "@TC_AP_033"] }, async ({ page }) => {

    
await page.goto('https://preprod-web.vahanacloud.com/admin-portal-test/#/login');

await page.locator('[formcontrolname="email"]').fill('rashmi.trivedi@istar-x.com');

await page.getByRole('button', {name : 'Get OTP'}).click();

await page.locator('[formcontrolname="otp"]').fill('123456');

await page.getByRole('button', {name : 'Submit'}).click();

await page.locator('//*[text()="Organization Management"]/ancestor::*[contains(@class, "section-one")]//*[text()="Function"]').click();

await page.getByRole('button', {name : 'Add Function'}).click();

await page.locator('[name="code"]').fill('TESTAUTO05');

await page.locator('[name="name"]').fill('Test Automation');

await page.getByRole('button', {name : 'Add'}).click();

await page.locator('[placeholder="Search Function Code"]').fill('TESTAUTO05');

await page.locator('[placeholder="Search Function Name"]').fill('Test Automation');

await page.getByRole('button', {name : 'Search'}).click();

await page.locator('[ng-reflect-message="Delete"]').click();

await page.getByRole('button', {name : 'Ok'}).click();

await page.locator('[placeholder="Search Function Code"]').fill('TESTAUTO05');

await page.locator('[placeholder="Search Function Name"]').fill('Test Automation');

await page.getByRole('button', {name : 'Search'}).click();

await page.getByRole('button', {name : 'Add Function'}).click();

await page.locator('[name="code"]').fill('TESTAUTO05');

await page.locator('[name="name"]').fill('Test Automation');

await page.getByRole('button', {name : 'Add'}).click();

await page.locator('[placeholder="Search Function Code"]').fill('TESTAUTO05');

await page.locator('[placeholder="Search Function Name"]').fill('Test Automation');

await page.getByRole('button', {name : 'Search'}).click();

await expect(page.getByRole('cell', {name : 'TESTAUTO05'})).toBeVisible();

await expect(page.getByRole('cell', {name : 'Test Automation'})).toBeVisible();


});