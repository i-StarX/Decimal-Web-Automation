import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('testfinal2', { tag: ["@testfinal2"] }, async ({ page }, testInfo) => {

    

    
await allure.step("Navigate to https://www.teachershealth.com.au/live-quote-tool/ : https://www.teachershealth.com.au/live-quote-tool/", async() =>{ await page.goto('https://www.teachershealth.com.au/live-quote-tool/');});


});