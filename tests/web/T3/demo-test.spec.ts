import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Demo', { tag: ["@testmac123"] }, async ({ page }, testInfo) => {

    
await allure.step("Navigate to https://sandbox.t3workforce.com/T3/faces/T3.jspx : https://sandbox.t3workforce.com/T3/faces/T3.jspx", async() =>{ await page.goto('https://sandbox.t3workforce.com/T3/faces/T3.jspx');});

await allure.step("Validate visibility - User Name : ", async() =>{ await testInfo.attach('Screenshot', { body: await page.screenshot(), contentType: "image/png" }); await expect(page.locator('//*[@placeholder="User Name"]')).toBeVisible();});

await allure.step("Validate visibility - Password : ", async() =>{ await testInfo.attach('Screenshot', { body: await page.screenshot(), contentType: "image/png" }); await expect(page.locator('//*[@placeholder="Password"]')).toBeVisible();});


});