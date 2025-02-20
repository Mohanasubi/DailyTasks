import {test,expect} from '@playwright/test'

let page;

test.beforeAll(async({browser})=>{

    page= await browser.newPage();

    await page.goto('https://demoblaze.com/index.html')
    
        await page.locator("#login2").click()
        
        await page.locator("#loginusername").fill("Subi");
    
        await page.locator("#loginpassword").fill("Subi@004")
    
        await page.locator("button[onclick='logIn()']").click()
})

test.afterAll(async()=>{

await page.locator("#logout2").click()

})

test('home page',async()=>{
    await page.waitForSelector(".hrefch", { state: "visible" });
   const items= await page.$$(".hrefch")
    expect(items).toHaveLength(9)

})

test('Add Product', async()=> {

    //add product
     await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
     await page.locator("//a[normalize-space()='Add to cart']").click()

     //dialog box

     page.on('dialog',async dialog=>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
     })

})