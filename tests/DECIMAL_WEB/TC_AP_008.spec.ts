import { Page, Locator, test, expect, } from '@playwright/test';

test('TC_AP_008 Verify the "Location" sub-module redirection', { tag: ["@organization_management", "@location", "@TC_AP_008"] }, async ({ page }) => {

    
await page.goto('https://preprod-web.vahanacloud.com/admin-portal-test/#/login');

await page.locator('[formcontrolname="email"]').fill('rashmi.trivedi@istar-x.com');

await page.getByRole('button', {name : 'Get OTP', exact: true}).click();

await page.locator('[formcontrolname="otp"]').fill('123456');

await page.getByRole('button', {name : 'Submit', exact: true}).click();

await page.locator('//*[text()="Organization Management"]/ancestor::*[contains(@class, "section-one")]//*[text()="Location"]').click();

await expect(page).toHaveURL(/\/org-management\/location/);


});