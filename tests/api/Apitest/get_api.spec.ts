import { test, expect, } from '@playwright/test';

test('get api', { tag: ["@Apitest"] }, async ({ request }) => {

    await request.fetch(`https://console.vahanacloud.com/backend/api/v1/login?strategy=PASSWORD&sessionType=COOKIES`, {
        method: "GET",
        headers: {
  "Requestid": "1733265093156null",
  "Authorization": "Basic dmFoYW5hOkRlY2ltYWxAMTIz",
  "Content-Type": "application/json"
},
        
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
    });

});