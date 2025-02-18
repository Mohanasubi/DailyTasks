import {test,expect} from '@playwright/test'

test('handle radiobuttons',async ({page})=>{
    await page.goto('https://ultimateqa.com/simple-html-elements-for-automation/')

    await page.locator("//input[@value='male']").check();

    await expect (await page.locator("//input[@value='male']")).toBeChecked();
    await expect(await page.locator("//input[@value='male']")).isChecked().toBeTruthy();

    await expect(await page.locator("//input[@value='female']")).isChecked().toBeFalsy();


    await page.waitForTimeout(5000)


 })