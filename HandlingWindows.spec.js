const{test,expect,chromium} =require('@playwright/test')

test('handle Pages/Windows',async()=>{

   const browser = await chromium.launch()

   const context=  await browser.newContext()

  const page1 = await context.newPage()
  const page2 = await context.newPage()

  await page1.goto("https://demoblaze.com/index.html")
  await expect(page1).toHaveTitle("STORE");

  await page2.goto("https://app.hrone.cloud/app")
  await expect(page2).toHaveTitle("HROne");


})

test.only('handle multiple Pages/Windows',async()=>{

    const browser = await chromium.launch()
 
    const context=  await browser.newContext()
 
   const page1 = await context.newPage()
   await page1.goto("https://app.hrone.cloud/app")
   await expect(page1).toHaveTitle("HROne");

   const pagePromise = context.waitForEvent('page')
   await page1.locator("//span[normalize-space()='Go to calendar']").click()

   const newPage = await pagePromise;
   await expect(newPage).toHaveTitle('HROne')

   await page1.waitForTimeout(3000)
   await newPage.waitForTimeout(3000)

   await browser.close()
})