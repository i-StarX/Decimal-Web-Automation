import { Page, Locator, test, expect, } from '@playwright/test';

test('TC_AP_035 Verify the "Function Role" page details', { tag: ["@regression_web", "@organization_management", "@function_role", "@TC_AP_035"] }, async ({ page }) => {

    
await page.goto('https://preprod-web.vahanacloud.com/admin-portal-test/#/login');

await page.locator('[formcontrolname="email"]').fill('rashmi.trivedi@istar-x.com');

await page.getByRole('button', {name : 'Get OTP', exact: true}).click();

await page.locator('[formcontrolname="otp"]').fill('123456');

await page.getByRole('button', {name : 'Submit', exact: true}).click();

await page.locator('//*[text()="Organization Management"]/ancestor::*[contains(@class, "section-one")]//*[text()="Function"]').click();

await expect(page.locator('//app-function-role//app-model-search')).toBeVisible();

await expect(page.getByRole('button', {name : 'Add Function Role', exact: true})).toBeVisible();

await expect(page.getByRole('button', {name : 'Add Attributes', exact: true})).toBeVisible();

await expect(page.getByRole('button', {name : 'Approval/Rejection', exact: true})).toBeVisible();

await expect(page.locator('//mat-card/mat-card-subtitle[text()="Function Role List"]')).toBeVisible();


});