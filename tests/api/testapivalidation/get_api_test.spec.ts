import { test, expect, } from '@playwright/test';

test('get api test', { tag: ["@testapivalidation"] }, async ({ request }) => {

    await request.fetch(`https://jsonplaceholder.typicode.com/todos/1`, {
        method: "GET",
        
        
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
    });

});