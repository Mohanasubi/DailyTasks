import {test,expect} from '@playwright/test';

test("LocateMultipleElents", async({page})=> {
    await page.goto('https://demoblaze.com/index.html');
  /*  page.waitForSelector('a');
    const links= await page.$$('a');

    for(const  link of links)
    {
        const linkTest=await link.textContent();
        console.log(linkTest);
    } */
    
    await page.waitForSelector("//div[@id='tbodyid']//h4/a");

    const products = await page.$$("//div[@id='tbodyid']//h4/a");
     
    for (const product of products){
        const prodName=await product.textContent();
        console.log(prodName);
    }

})