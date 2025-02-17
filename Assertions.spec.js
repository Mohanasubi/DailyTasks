/*await expect(page).toHaveURL()	Page has a URL
  await expect(page).toHaveTitle()	Page has a title
  await expect(locator).toHaveText()	Element matches text
  await expect(locator).toBeAttached()	Element is attached
await expect(locator).toBeChecked()	Checkbox is checked
await expect(locator).toBeDisabled()	Element is disabled
await expect(locator).toBeEmpty()	Container is empty
await expect(locator).toBeEnabled()	Element is enabled
await expect(locator).toBeFocused()	Element is focused
await expect(locator).toBeHidden()	Element is not visible
await expect(locator).toBeVisible()	Element is visible
await expect(locator).toContainText()	Element contains text
await expect(locator).toHaveAttribute()	Element has a DOM attribute
await expect(locator).toHaveClass()	Element has a class property
await expect(locator).toHaveValue()	Input has a value
await expect(locator).toHaveCount()	List has exact number of children
*/

import {test,expect} from '@playwright/test';

test('AssertionTest',async({page})=>{
  await page.goto('https://demo.nopcommerce.com/register');

  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

  await expect(page).toHaveTitle('nopCommerce demo store. Register');

  const checked= await page.locator('#gender-male');
  await checked.click();
  await expect(checked).toBeChecked();

  const regButton= await page.locator('#register-button')
  await expect(regButton).toHaveAttribute('type','submit');

  const enabled=await page.locator('#Password')
  await expect(enabled).toBeEnabled();

 // const disabled=await page.locator('#Password')
//  await expect(disabled).toBeDisabled();

  await expect(await page.locator('.page-title h1')).toHaveText('Register'); //exact match of elements 

  await expect(await page.locator('.page-title h1')).toContainText('Reg');//elements that contains text

  await expect(await page.locator('.page-title h1')).not.toContainText('login'); //negative assertions


  const haveValue = await page.locator('#Email').fill('test@demo.com')
  await expect(page.locator('#Email')).toHaveValue('test@demo.com')

  

 })
