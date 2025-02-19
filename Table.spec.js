const {test,expect} = require('@playwright/test')

test("handling table",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
     
    const table=await page.locator('#productTable')

    const columns=await table.locator('thead tr th')
    console.log(await columns.count())
     expect(await columns.count()).toBe(4)

    const rows=await table.locator('tbody tr');
    console.log(await rows.count());
    expect(await rows.count()).toBe(5);

    const mrow = rows.filter({
        has:page.locator('td'),
        hasText:'Smartwatch'
     })

    await mrow.locator('input').check()


   await selectProduct(rows,page,'radio')
   await selectProduct(rows,page,'phone')
   await selectProduct(rows,page,'airpods')

  for(let i=0;i<await rows.count();i++)
  {
         const row=rows.nth(i);
          const tds=row.locator('td')
         for(let j=0;j<await tds.count()-1;j++)
         {
             console.log(await tds.nth(j).textContent())
         }
  }


      
})

async function selectProduct(rows,page,name){
   const mrow= rows.filter({
        has:page.locator('td'),
        hasText:name
     })
}