import {test,expect} from '@playwright/test';

test('AmazonCart',async({page})=>{
    await page.goto("https://www.amazon.in/");

   const dropdown= await page.locator("//select[@id='searchDropdownBox']")
    await dropdown.waitFor({ state: "visible" });
    
    
    await dropdown.selectOption({label:'Amazon Fresh Meat'})

  // await page.waitForTimeout(5000);

  const options=await page.locator("#searchDropdownBox option")
  await expect(options).toHaveCount(46);  //Approach1

  const options1=await page.$$("#searchDropdownBox option")
  console.log(options1.length);    //Approach2
  await expect(options1.length).toBe(46);

   const content=await page.locator("#searchDropdownBox").textContent()
   await expect(content.includes('Beauty')).toBeTruthy();

   const optionss=await page.$$('#searchDropdownBox')
   let status=false;

   for(const option of optionss)
   {

    console.log(await option.textContent());
    let value=await option.textContent();
    if(value.includes('Beauty'))
    {
        status=true;
        break;
    }
   
    expect(status).toBeTruthy();
   }
})       