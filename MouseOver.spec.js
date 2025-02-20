import{test,expect} from '@playwright/test';

test('Mouse hover',async({page})=>{
   await page.goto('https://demo.opencart.com/');
   const desktop =await page.locator("//a[normalize-space()='Desktops']")
   await desktop.hover();

   const macbook=await page.locator("//a[normalize-space()='Mac (1)']")
   await macbook.hover();
   await page.waitForTimeout(5000)
})