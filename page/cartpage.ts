import { Page, expect } from "@playwright/test";

export class CartPage {
    constructor(private page: Page){}

    async cartpagetitleverification(CartPageTitle: string){
        await expect(this.page.locator('.title')).toHaveText(CartPageTitle);
    }

    productverification(ProductName: string) {
        return this.page.locator('.inventory_item_name').filter({ hasText: ProductName });
    }

    async aCheckoutButton() {
        await this.page.locator('#checkout').click();
    }
}