import { Page, Locator, test, expect, } from '@playwright/test';

test('TC_AP_029 Verify the function view page edit or delete', { tag: ["@regression_web", "@organization_management", "@function", "@TC_AP_029"] }, async ({ page }) => {

    
await page.goto('https://preprod-web.vahanacloud.com/admin-portal-test/#/login');

await page.locator('[formcontrolname="email"]').fill('rashmi.trivedi@istar-x.com');

await page.getByRole('button', {name : 'Get OTP'}).click();

await page.locator('[formcontrolname="otp"]').fill('123456');

await page.getByRole('button', {name : 'Submit'}).click();

await page.locator('//*[text()="Organization Management"]/ancestor::*[contains(@class, "section-one")]//*[text()="Function"]').click();

await page.getByRole('button', {name : 'Add Function'}).click();

await page.locator('[name="code"]').fill('TESTAUTO02');

await page.locator('[name="name"]').fill('Test Automation');

await page.getByRole('button', {name : 'Add'}).click();

await page.locator('[placeholder="Search Function Code"]').fill('TESTAUTO02');

await page.locator('[placeholder="Search Function Name"]').fill('Test Automation');

await page.getByRole('button', {name : 'Search'}).click();

await page.locator('[ng-reflect-message="View"]').click();

await page.getByRole('button', {name : 'Edit'}).click();

await page.locator('[ng-reflect-name="name"]').fill('Test Automation Edit Test');

await page.locator('[ng-reflect-name="description"]').fill('Edit test description field');

await page.getByRole('button', {name : 'Update'}).click();

await page.locator('[placeholder="Search Function Code"]').fill('TESTAUTO02');

await page.locator('[placeholder="Search Function Name"]').fill('Test Automation Edit Test');

await page.getByRole('button', {name : 'Search'}).click();

await page.locator('[ng-reflect-message="View"]').click();

await page.getByRole('button', {name : 'Delete'}).click();

await page.getByRole('button', {name : 'Ok'}).click();

await page.locator('[placeholder="Search Function Code"]').fill('TESTAUTO02');

await page.locator('[placeholder="Search Function Name"]').fill('Test Automation Edit Test');

await page.getByRole('button', {name : 'Search'}).click();


});