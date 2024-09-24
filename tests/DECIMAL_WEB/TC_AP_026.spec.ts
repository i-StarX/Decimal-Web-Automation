import { Page, Locator, test, expect, } from '@playwright/test';

test('TC_AP_026 Verify the function page action column view button is working.', { tag: ["@regression_web", "@organization_management", "@function", "@TC_AP_026"] }, async ({ page }) => {

    
await page.goto('https://preprod-web.vahanacloud.com/admin-portal-test/#/login');

await page.locator('[formcontrolname="email"]').fill('rashmi.trivedi@istar-x.com');

await page.getByRole('button', {name : 'Get OTP', exact: true}).click();

await page.locator('[formcontrolname="otp"]').fill('123456');

await page.getByRole('button', {name : 'Submit', exact: true}).click();

await page.locator('//*[text()="Organization Management"]/ancestor::*[contains(@class, "section-one")]//*[text()="Function"]').click();

await page.locator('[placeholder="Search Function Code"]').fill('HR12');

await page.getByRole('button', {name : 'Search', exact: true}).click();

await page.locator('[ng-reflect-message="View"]').click();

await expect(page.locator('//app-function-detail')).toBeVisible();


});