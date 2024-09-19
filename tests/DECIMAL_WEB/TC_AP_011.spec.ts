import { Page, Locator, test, expect, } from '@playwright/test';

test('TC_AP_011 Verify the Function List option', { tag: ["@regression_web", "@organization_management", "@function", "@TC_AP_011"] }, async ({ page }) => {

    
await page.goto('https://preprod-web.vahanacloud.com/admin-portal-test/#/login');

await page.locator('[formcontrolname="email"]').fill('rashmi.trivedi@istar-x.com');

await page.getByRole('button', {name : 'Get OTP'}).click();

await page.locator('[formcontrolname="otp"]').fill('123456');

await page.getByRole('button', {name : 'Submit'}).click();

await page.locator('//*[text()="Organization Management"]/ancestor::*[contains(@class, "section-one")]//*[text()="Function"]').click();

await expect(page.getByRole('columnheader', {name : 'Function Code'})).toBeVisible();

await expect(page.getByRole('columnheader', {name : 'Function Name'})).toBeVisible();

await expect(page.getByRole('columnheader', {name : 'Status'})).toBeVisible();

await expect(page.getByRole('columnheader', {name : 'Action'})).toBeVisible();


});