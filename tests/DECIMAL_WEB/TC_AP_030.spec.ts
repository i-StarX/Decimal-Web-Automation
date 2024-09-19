import { Page, Locator, test, expect, } from '@playwright/test';

test('TC_AP_030 Verify the function page action column edit button is working.', { tag: ["@regression_web", "@organization_management", "@function", "@TC_AP_030"] }, async ({ page }) => {

    
await page.goto('https://preprod-web.vahanacloud.com/admin-portal-test/#/login');

await page.locator('[formcontrolname="email"]').fill('rashmi.trivedi@istar-x.com');

await page.getByRole('button', {name : 'Get OTP'}).click();

await page.locator('[formcontrolname="otp"]').fill('123456');

await page.getByRole('button', {name : 'Submit'}).click();

await page.locator('//*[text()="Organization Management"]/ancestor::*[contains(@class, "section-one")]//*[text()="Function"]').click();

await page.getByRole('button', {name : 'Add Function'}).click();

await page.locator('[name="code"]').fill('TESTAUTO03');

await page.locator('[name="name"]').fill('Test Automation');

await page.getByRole('button', {name : 'Add'}).click();

await page.locator('[placeholder="Search Function Code"]').fill('TESTAUTO03');

await page.locator('[placeholder="Search Function Name"]').fill('Test Automation');

await page.getByRole('button', {name : 'Search'}).click();

await page.locator('[ng-reflect-message="Edit"]').click();

await page.locator('[ng-reflect-name="name"]').fill('Test Automation Edit Test');

await page.locator('[ng-reflect-name="description"]').fill('Edit test description field');

await page.getByRole('button', {name : 'Update'}).click();

await page.locator('[placeholder="Search Function Code"]').fill('TESTAUTO03');

await page.locator('[placeholder="Search Function Name"]').fill('Test Automation Edit Test');

await page.getByRole('button', {name : 'Search'}).click();

await expect(page.getByRole('cell', {name : 'TESTAUTO03'})).toBeVisible();

await expect(page.getByRole('cell', {name : 'Test Automation Edit Test'})).toBeVisible();


});