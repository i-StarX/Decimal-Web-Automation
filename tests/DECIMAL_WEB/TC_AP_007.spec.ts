import { Page, Locator, test, expect, } from '@playwright/test';

test('TC_AP_007 Verify the "Function Role" sub-module redirection', { tag: ["@regression_web", "@organization_management", "@function_role", "@TC_AP_007"] }, async ({ page }) => {

    
await page.goto('https://preprod-web.vahanacloud.com/admin-portal-test/#/login');

await page.locator('[formcontrolname="email"]').fill('rashmi.trivedi@istar-x.com');

await page.getByRole('button', {name : 'Get OTP'}).click();

await page.locator('[formcontrolname="otp"]').fill('123456');

await page.getByRole('button', {name : 'Submit'}).click();

await page.locator('//*[text()="Organization Management"]/ancestor::*[contains(@class, "section-one")]//*[text()="Function Role"]').click();

await expect(page).toHaveURL(/\/org-management\/function-role/);


});