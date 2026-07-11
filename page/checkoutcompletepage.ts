import { Page, expect } from "@playwright/test";

export class CheckoutCompletePage{
    constructor(private page: Page){}

    async verifycompletepage(CompletePageTitle: string, CompletePageValue: string){
        await expect(this.page.locator('.title')).toHaveText(CompletePageTitle);
        await expect(this.page.locator('.complete-header')).toHaveText(CompletePageValue);
    }

}