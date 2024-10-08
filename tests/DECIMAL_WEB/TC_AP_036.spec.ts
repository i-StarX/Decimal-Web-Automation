import { Page, Locator, test, expect, } from '@playwright/test';

test('TC_AP_036 Verify the Function Role List option', { tag: ["@regression_web", "@organization_management", "@function_role", "@TC_AP_036"] }, async ({ page }) => {

    
await page.goto('https://preprod-web.vahanacloud.com/admin-portal-test/#/login');

await page.locator('[formcontrolname="email"]').fill('rashmi.trivedi@istar-x.com');

await page.getByRole('button', {name : 'Get OTP', exact: true}).click();

await page.locator('[formcontrolname="otp"]').fill('123456');

await page.getByRole('button', {name : 'Submit', exact: true}).click();

await page.locator('//*[text()="Organization Management"]/ancestor::*[contains(@class, "section-one")]//*[text()="Function"]').click();

await expect(page.getByRole('columnheader', {name : 'Function Code', exact: true})).toBeVisible();

await expect(page.getByRole('columnheader', {name : 'Function Name', exact: true})).toBeVisible();

await expect(page.getByRole('columnheader', {name : 'Status', exact: true})).toBeVisible();

await expect(page.getByRole('columnheader', {name : 'Action', exact: true})).toBeVisible();


});