import { Given, Then, When } from "@wdio/cucumber-framework";

import menuPage from "../../page-objects/menuPage.ts";
import closePage from "../../page-objects/closePage.ts";
import { expect } from "chai";

// Navigate to the close transaction screen
Given(/^Go to close transaction screen$/, async function () {
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.closeTransactionMenu()).click();
});

// Scan the specified route for details in the close screen
When(/^Scan the (.*) for details in the Close screen$/, async function (route: string) {
   closePage.selectRouteDropdown(route);
   await (await menuPage.closeTransactionMenu()).click();
});

// Click on the submit button in the close screen
When(/^Click on the submit button in the Close screen$/, async function () {
    await (await closePage.submitButton).click();
});

Then(/^"Closed successfully" should confirm the close transaction.$/, async function(){
    let ar = closePage.closedSuccessfully();
    expect(ar).includes("Closed successfully");
});