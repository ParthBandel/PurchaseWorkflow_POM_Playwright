import {Page} from "@playwright/test";

export default class LoginPage{
    constructor(private page:Page){}

    async navigateToLoginPage(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async loginmode(username: string, password: string){
       await this.page.locator('#user-name').fill(username);
        await this.page.locator('#password').fill(password);
        await this.page.locator('#login-button').click();
    }
    
}