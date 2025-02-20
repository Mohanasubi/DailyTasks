 import {test,expect} from '@playwright/test'

 test('Single File',async({page})=>{
    await page.goto('https://practice.expandtesting.com/upload');

   const file= await page.locator('#fileInput')
    await file.setInputFiles('tests/test2.pdf')

    await page.locator('#fileSubmit').click();

    await page.waitForTimeout(5000)
 })

 test('Multiple file',async({page})=>{
    await page.goto('https://demo.automationtesting.in/FileUpload.html')
    await page.locator('#input-4').setInputFiles(['tests/test2.pdf'],['tests\testinput.pdf'])
    await page.locator("button[title='Upload selected files']").click();
    await page.waitForTimeout(3000)

    expect (await page.locator())

 })