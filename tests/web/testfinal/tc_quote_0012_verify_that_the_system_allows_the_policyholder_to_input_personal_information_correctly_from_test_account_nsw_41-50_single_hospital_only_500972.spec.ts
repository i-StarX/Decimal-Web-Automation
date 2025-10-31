import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Get Quote TH', { tag: ["@testfinal"] }, async ({ page }, testInfo) => {

    

    
await allure.step("Navigate to https://www.teachershealth.com.au/live-quote-tool/ : https://www.teachershealth.com.au/live-quote-tool/", async() =>{ await page.goto('https://www.teachershealth.com.au/live-quote-tool/');});

await allure.step("Click NSW : ", async() =>{ await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/a[2]/div[1]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/a[2]/div[1]').click();});

await allure.step("Click 41-50 : ", async() =>{ await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/a[3]/div[1]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/a[3]/div[1]').click();});

await allure.step("Click Single : ", async() =>{ await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/a[1]/div[1]/span[1]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/a[1]/div[1]/span[1]').click();});

await allure.step("Click Hospital only : ", async() =>{ await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[2]/div[1]/a[3]/div[1]/span[1]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[2]/div[1]/a[3]/div[1]/span[1]').click();});

await allure.step("Click Get a quote now : ", async() =>{ await page.locator('//span[normalize-space(text())="Get a quote now"]').waitFor({state:"visible"}); await page.locator('//span[normalize-space(text())="Get a quote now"]').click();});

await allure.step("Enter Name : Test1", async() =>{ await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]').click(); await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]').pressSequentially('Test1');});

await allure.step("Enter Lastname : akshar", async() =>{ await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/input[1]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/input[1]').click(); await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/input[1]').pressSequentially('akshar');});

await allure.step("Enter Number : 412345678", async() =>{ await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/input[1]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/input[1]').click(); await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/input[1]').pressSequentially('412345678');});

await allure.step("Enter Email : test@vastix.com", async() =>{ await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/input[1]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/input[1]').click(); await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/input[1]').pressSequentially('test@vastix.com');});

await allure.step("Click has cover : Y", async() =>{ await page.locator('//*[contains(@id, "no")]').waitFor({state:"visible"}); await page.locator('//*[contains(@id, "no")]').click();});

await allure.step("Click Submit : ", async() =>{ await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[2]/div[4]/div[1]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/div[2]/div[4]/div[1]').click();});


});