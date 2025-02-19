import {test,expect} from '@playwright/test'

test("Date picker",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
   // await page.fill('#datepicker','03-04-2004')

   const year='2025 '
   const month='April'
   const date='03'

    await page.click('#datepicker')
   while(true)
   {
    const current_yr= await page.locator(".ui-datepicker-year").textContent()
    const current_month= await page.locator(".ui-datepicker-month").textContent()
    if(current_month==month && current_yr==year)
    {
        break;
    }
    await page.locator("[title='Next']").click()
   }

   const dates=await page.$$("//a[@class='ui-state-default']")
   for(const dt of dates)
   {
     if(await dt.textContent()==date)
     {
        await dt.click();
        break;
     }
   }
      
    await page.waitForTimeout(5000);

})