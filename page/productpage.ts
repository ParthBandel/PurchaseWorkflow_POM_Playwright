import { test, expect, Page } from "@playwright/test"

export default class ProductPage {
    constructor(private page: Page) { }

    async ProductPageVerification(ProductPageTitle: string) {
        const title = this.page.locator('.title');
        await expect(title).toHaveText(ProductPageTitle);
    }

    AddToCartButton(productName: string) {
    return this.page
        .locator('.inventory_item')
        .filter({
            has: this.page.locator('.inventory_item_name', { hasText: productName })
        })
        .getByRole('button', { name: 'Add to cart' });
}
    ProductNameVerification(ProductName: string) {
        return this.page.locator('.inventory_item_name').filter({ hasText: ProductName });
    }
    async AddToCartFunctionality(ProductName: string) {
        await this.AddToCartButton(ProductName).click();
    }

    async VerifyCartCount(CartCount: string) {
        await expect(this.page.locator('.shopping_cart_badge')).toHaveText(CartCount);
    }

    async CheckoutButtonAction() {
        await this.page.locator('.shopping_cart_link').click();
    }
}
