import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { Homepage } from '../pages/Homepage';
import { CartPage } from '../pages/CartPage';

test('test',async({page})=>{
      //login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await page.waitForTimeout(3000);
    await login.login('Subi','Subi@004');  


    //home
    const home=new Homepage(page);
    await home.addProductToCart("Nexus 6");
    await page.waitForTimeout(3000);
    await home.gotocart();

    //cart
    const cart=new CartPage(page);
    await page.waitForTimeout(3000);
    const status=await cart.checkProducts("Nexus 6");
    await  expect.soft(status).toBe(true);   
})

