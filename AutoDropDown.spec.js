import {test,expect} from '@playwright/test';

test('AutodropDown',async({page})=>{
     await page.goto('https://www.redbus.in/');

     await page.locator("#src").fill('delhi');
   await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

     const cities=await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

     for(let city of cities)
     {
        const value=await city.textContent();
        console.log(value);
     }

})
