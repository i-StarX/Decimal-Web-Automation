import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('T3 Demo', { tag: ["@web_demo"] }, async ({ page }, testInfo) => {


    await allure.step("https://sandbox.t3workforce.com/T3/faces/T3.jspx : https://sandbox.t3workforce.com/T3/faces/T3.jspx", async () => { await page.goto('https://sandbox.t3workforce.com/T3/faces/T3.jspx'); });

    await allure.step('Enter QV1026 : QV1026', async () => { await page.locator('//*[contains(@placeholder, "User Name")]').waitFor({ state: "visible" }); await page.locator('//*[contains(@placeholder, "User Name")]').click(); await page.locator('//*[contains(@placeholder, "User Name")]').fill('QV1026'); });

    await allure.step('Enter 123 : 123', async () => { await page.locator('//*[contains(@placeholder, "Password")]').waitFor({ state: "visible" }); await page.locator('//*[contains(@placeholder, "Password")]').click(); await page.locator('//*[contains(@placeholder, "Password")]').fill('123'); });

    await allure.step("Click LOGIN : ", async () => { await page.locator('//*[text() = "LOGIN"]').waitFor({ state: "visible" }); await page.locator('//*[text() = "LOGIN"]').click(); });


});