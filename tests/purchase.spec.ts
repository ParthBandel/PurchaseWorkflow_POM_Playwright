import test from "@playwright/test";
import { expect } from "@playwright/test";
import LoginPage from "../page/loginpage";
import ProductPage from "../page/productpage";
import { CheckoutPage } from "../page/checkoutpage";
import { CartPage } from "../page/cartpage";
import { CheckoutOverview } from "../page/checkoutoverviewpage";
import { CheckoutCompletePage } from "../page/checkoutcompletepage";
import { testData } from "../data/testdata";

test.use({
  viewport: {
    width: 1366,
    height: 768,
  }
});

test
('Purchase Product', async({page})=>{
    const login = new LoginPage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);
    const checkoutoverview = new CheckoutOverview(page);
    const checkoutcomplete = new CheckoutCompletePage(page);

    //Navigate and Login
    await login.navigateToLoginPage();
    await login.loginmode(testData.username, testData.password);

    //Product Page
    await product.ProductPageVerification(testData.ProductPageTitle);
    await expect(product.ProductNameVerification(testData.ProductName)).toBeVisible();
    await product.AddToCartFunctionality(testData.ProductName);
    await product.VerifyCartCount(testData.CartCount);
    await product.CheckoutButtonAction();

    //Cart Page
    await cart.cartpagetitleverification(testData.CartPageTitle);
    await expect(cart.productverification(testData.ProductName)).toBeVisible();
    await cart.aCheckoutButton();

    //Checkout Page
    await checkout.verifythecheckoutpage(testData.CheckoutPageTitle);
    await checkout.adddetails(testData.firstname, testData.lastname, testData.zipcode);
    await checkout.clickonContinuebutton();

    //Checkout Overview
    await checkoutoverview.verifycheckoutoverviewpage(testData.CheckOutOverviewTitle);
    await expect(checkoutoverview.verifycheckoutitem(testData.ProductName)).toBeVisible();
    await checkoutoverview.finishoverview();

    //Checkout Complete
    await checkoutcomplete.verifycompletepage(testData.CompletePageTitle, testData.CompletePageValue);
})