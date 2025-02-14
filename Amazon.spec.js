import {test,expect} from '@playwright/test';

test('AmazonCart',async({page})=>{
    await page.goto("https://www.amazon.in/");

    await page.selectOption('#searchDropdownBox', { label: 'Beauty' });

    await page.fill("id=twotabsearchtextbox","Hair dryer");
    await page.click('#nav-search-submit-button');

    let count=0;

    for(let i=0;i<4;i++)
     {
       const addCart= await page.locator("#a-autoid-3-announce");
       await addCart.waitFor({state:'visible'});
       await addCart.click();
       count++;
       await page.waitForSelector("id=nav-cart-count",{state:'visible'})
     }

    await page.click('.nav-cart-icon.nav-sprite');

    const Quantity=await page.locator("span[data-a-selector='value']").textContent();
    console.log(Quantity);

    await expect(Number(Quantity)).toBe(count)

    
    await page.close()


})