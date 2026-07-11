import { Page, expect } from "@playwright/test";
export class CheckoutPage {
    constructor(private page: Page){}

    async verifythecheckoutpage(CheckoutPageTitle: string){
       await expect(this.page.locator(".title")).toHaveText(CheckoutPageTitle);
    }

    async adddetails(firstname: string, lastname: string, zipcode: string){
        await this.page.locator('#first-name').fill(firstname);
        await this.page.locator('#last-name').fill(lastname);
        await this.page.locator('#postal-code').fill(zipcode);
    }

    async clickonContinuebutton(){
        await this.page.locator('#continue').click();
    }

}