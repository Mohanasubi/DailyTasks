import {test,expect} from '@playwright/test'

 //handling input box
 test('handle inputbox',async ({page})=>{
    await page.goto('https://www.saucedemo.com/')

    await expect(await page.locator("//input[@id='user-name']")).toBeVisible();
    await expect(await page.locator("//input[@id='user-name']")).toBeVisible();
    await expect(await page.locator("//input[@id='user-name']")).toBeEditable();
    await expect(await page.locator("//input[@id='user-name']")).toBeEnabled();

    await page.fill("//input[@id='user-name']","subi")

    await page.waitForTimeout(5000)

 })


