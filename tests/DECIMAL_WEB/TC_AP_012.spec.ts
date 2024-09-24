import { Page, Locator, test, expect, } from '@playwright/test';

test('TC_AP_012 Verify the Function Filter & Search option', { tag: ["@regression_web", "@organization_management", "@function", "@TC_AP_012"] }, async ({ page }) => {

    
await page.goto('https://preprod-web.vahanacloud.com/admin-portal-test/#/login');

await page.locator('[formcontrolname="email"]').fill('rashmi.trivedi@istar-x.com');

await page.getByRole('button', {name : 'Get OTP', exact: true}).click();

await page.locator('[formcontrolname="otp"]').fill('123456');

await page.getByRole('button', {name : 'Submit', exact: true}).click();

await page.locator('//*[text()="Organization Management"]/ancestor::*[contains(@class, "section-one")]//*[text()="Function"]').click();

await expect(page.locator('[placeholder="Search Function Code"]')).toBeVisible();

await expect(page.locator('[placeholder="Search Function Name"]')).toBeVisible();

await expect(page.locator('[id="mat-select-0"]')).toBeVisible();

await expect(page.getByRole('button', {name : 'Clear Filters', exact: true})).toBeVisible();

await expect(page.getByRole('button', {name : 'Search', exact: true})).toBeVisible();


});