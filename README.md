# Playwright TypeScript - Page Object Model (POM) Automation Framework

## Overview

This project demonstrates an end-to-end automation framework built using **Playwright** with **TypeScript** following the **Page Object Model (POM)** design pattern. The framework is designed to be scalable, maintainable, and reusable for UI automation testing.

The automated scenario covers the complete purchase flow on the SauceDemo application.

## Tech Stack

* Playwright
* TypeScript
* Node.js
* Page Object Model (POM)

## Project Structure

```
project-root/
│
├── page/
│   ├── LoginPage.ts
│   ├── ProductPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   ├── CheckoutOverviewPage.ts
│   └── CheckoutCompletePage.ts
│
├── tests/
│   └── purchase.spec.ts
│
├── data/
│   └── testData.ts
│
├── playwright.config.ts
├── package.json
└── README.md
```

## Features

* Page Object Model (POM) architecture
* Reusable page classes
* Centralized test data
* Dynamic locators
* Clean and maintainable code
* End-to-end purchase flow automation
* Easy to extend for additional test scenarios

## Test Scenario

The framework automates the following workflow:

1. Navigate to the SauceDemo application.
2. Log in using valid credentials.
3. Verify the Products page.
4. Add a product to the cart.
5. Verify the cart badge count.
6. Open the shopping cart.
7. Verify the selected product in the cart.
8. Proceed to checkout.
9. Enter customer information.
10. Verify the checkout overview.
11. Complete the purchase.
12. Verify the successful order confirmation.

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running the Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/purchase.spec.ts
```

Generate and open the HTML report:

```bash
npx playwright show-report
```

## Framework Highlights

* Modular Page Object Model implementation
* Separation of test logic and page actions
* Dynamic locator strategy for reusable components
* Data-driven approach using centralized test data
* Readable and maintainable test scripts
* Suitable for enterprise-scale UI automation projects

## Future Enhancements

* Playwright Fixtures
* API Testing Integration
* Cross-browser execution
* Parallel test execution
* CI/CD integration (GitHub Actions/Jenkins)
* Environment configuration
* Retry mechanism
* Logging
* Screenshots and video recording
* Allure Reporting

## Author

**Parth Bandel**

Software QA Engineer | Manual Testing | Playwright Automation | TypeScript
