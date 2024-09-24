import { Page, Locator, test, expect, } from '@playwright/test';

test('TC_AP_005 Verify the "Employee" sub-module Page is working', { tag: ["@regression_web", "@organization_management", "@employee", "@TC_AP_005"] }, async ({ page }) => {

    
await page.goto('https://preprod-web.vahanacloud.com/admin-portal-test/#/login');

await page.locator('[formcontrolname="email"]').fill('rashmi.trivedi@istar-x.com');

await page.getByRole('button', {name : 'Get OTP', exact: true}).click();

await page.locator('[formcontrolname="otp"]').fill('123456');

await page.getByRole('button', {name : 'Submit', exact: true}).click();

await expect(page.locator('//*[text()="Organization Management"]/ancestor::*[contains(@class, "section-one")]//*[text()="Employee"]')).toBeEnabled();

await page.locator('//*[text()="Organization Management"]/ancestor::*[contains(@class, "section-one")]//*[text()="Employee"]').click();


});