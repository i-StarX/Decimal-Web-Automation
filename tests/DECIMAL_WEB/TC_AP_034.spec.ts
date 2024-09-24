import { Page, Locator, test, expect, } from '@playwright/test';

test('TC_AP_034 Verify the user create data with existing function code', { tag: ["@regression_web", "@organization_management", "@function", "@TC_AP_034"] }, async ({ page }) => {

    
await page.goto('https://preprod-web.vahanacloud.com/admin-portal-test/#/login');

await page.locator('[formcontrolname="email"]').fill('rashmi.trivedi@istar-x.com');

await page.getByRole('button', {name : 'Get OTP', exact: true}).click();

await page.locator('[formcontrolname="otp"]').fill('123456');

await page.getByRole('button', {name : 'Submit', exact: true}).click();

await page.locator('//*[text()="Organization Management"]/ancestor::*[contains(@class, "section-one")]//*[text()="Function"]').click();

await page.getByRole('button', {name : 'Add Function', exact: true}).click();

await page.locator('[name="code"]').fill('TESTAUTO06');

await page.locator('[name="name"]').fill('Test Automation');

await page.waitForTimeout(3000);

await page.getByRole('button', {name : 'Add', exact: true}).click();

await expect(page.locator('//snack-bar-container//simple-snack-bar/span[contains(text(),"Resource already Exist")]')).toBeVisible();


});