import { Page, expect } from "@playwright/test";

export class CheckoutOverview{
    constructor(private page: Page){}

    async verifycheckoutoverviewpage(CheckOutOverviewTitle: string){
        await expect(this.page.locator('.title')).toHaveText(CheckOutOverviewTitle);
    }

    verifycheckoutitem(ProductName: string){
        return this.page.locator('.inventory_item_name').filter({hasText: ProductName});
    }

    async finishoverview(){
        await this.page.locator('#finish').click();
    }
}