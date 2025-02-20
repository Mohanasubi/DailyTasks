import {test,expect} from '@playwright/test'


test('test',async({page})=>{

    await page.goto('https://demoblaze.com/index.html')
    
        await page.locator("#login2").click()
        
        await page.locator("#loginusername").fill("Subi");
    
        await page.locator("#loginpassword").fill("Subi@004")
    
        await page.locator("button[onclick='logIn()']").click()
})