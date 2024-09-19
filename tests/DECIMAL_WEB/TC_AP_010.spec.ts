import { Page, Locator, test, expect, } from '@playwright/test';

test('TC_AP_010 Verify the "Function" page details', { tag: ["@regression_web", "@organization_management", "@function", "@TC_AP_010"] }, async ({ page }) => {

    
await page.goto('https://preprod-web.vahanacloud.com/admin-portal-test/#/login');

await page.locator('[formcontrolname="email"]').fill('rashmi.trivedi@istar-x.com');

await page.getByRole('button', {name : 'Get OTP'}).click();

await page.locator('[formcontrolname="otp"]').fill('123456');

await page.getByRole('button', {name : 'Submit'}).click();

await page.locator('//*[text()="Organization Management"]/ancestor::*[contains(@class, "section-one")]//*[text()="Function"]').click();

await expect(page.locator('//app-functions//app-model-search')).toBeVisible();

await expect(page.getByRole('button', {name : 'Add Function'})).toBeVisible();

await expect(page.getByRole('button', {name : 'Add Attribute'})).toBeVisible();

await expect(page.getByRole('button', {name : 'Approval/Rejection'})).toBeVisible();

await expect(page.locator('//mat-card/mat-card-subtitle[text()="Function List"]')).toBeVisible();


});