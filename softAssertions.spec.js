import {test,expect} from '@playwright/test';

test('AssertionTest',async({page})=>{
  await page.goto('https://demo.nopcommerce.com/register');

  await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register');

  await expect.soft(page).toHaveTitle('nopCommerce demo store. Register');

   await page.locator('#Email').fill('test@demo.com')
  await expect.soft(page.locator('#Email')).toHaveValue('test@demo.com')


})