import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('get quote', { tag: ["@testfinal1"] }, async ({ page }, testInfo) => {




    await allure.step("Navigate to https://www.teachershealth.com.au/live-quote-tool/ : https://www.teachershealth.com.au/live-quote-tool/", async () => { await page.goto('https://www.teachershealth.com.au/live-quote-tool/'); });

    await allure.step("Click NSW : ", async () => { await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/a[2]/div[1]').waitFor({ state: "visible" }); await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/a[2]/div[1]').click(); });

    await allure.step("Click 31-40 : ", async () => { await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/a[2]/div[1]/span[1]').waitFor({ state: "visible" }); await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/a[2]/div[1]/span[1]').click(); });

    await allure.step("Click couple : ", async () => { await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/a[2]/div[1]/span[1]').waitFor({ state: "visible" }); await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/a[2]/div[1]/span[1]').click(); });

    await allure.step("Click Extras only : ", async () => { await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[2]/div[1]/a[4]/div[1]/span[1]').waitFor({ state: "visible" }); await page.locator('xpath=/html[1]/body[1]/div[2]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[2]/div[1]/a[4]/div[1]/span[1]').click(); });

    await allure.step("Click Get a quote now : ", async () => { await page.locator('//span[normalize-space(text())="Get a quote now"]').waitFor({ state: "visible" }); await page.locator('//span[normalize-space(text())="Get a quote now"]').click(); });

});