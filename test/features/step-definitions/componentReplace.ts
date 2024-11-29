import { Given, Then, When } from "@wdio/cucumber-framework";

import menuPage from "../../page-objects/menuPage.ts";
import { AssertionError, expect } from "chai";
import ComponentReplaceTransaction from "../../page-objects/componentReplacePage.ts";

Given(/^Go to Component Replace screen.$/, async function () {
  try {
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.componentReplaceTransaction()).click();
  } catch (err) {
    throw new AssertionError(`Something Wrong Happened ${err.message}`);
    console.log(err);
  }
});

//Scan the <Route> for details in the Release Screen.
//Scan the <Route> for details in Component Issue screen.

When(
  /^Scan the (.*) for details in Component Replace screen.$/,
  async function (route: string) {
    try {
      await ComponentReplaceTransaction.selectRouteDropdown(route);
      await (await ComponentReplaceTransaction.getProductText).click();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

When(
  /^Select the row in the grid with Issue Control as bulk in Component Replace screen.$/,
  async function () {
    // browser.debug();
    try {
      await ComponentReplaceTransaction.clickBulkRow();

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(
  /^Enter the Replace Qty (.*) in Component Replace screen.$/,
  async function (issueQty: string) {
    // browser.debug();
    try {
      await ComponentReplaceTransaction.enterIssueQty(issueQty);
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(
  /^Enter the Bulk Component RouteCard (.*) input in the Component Replace screen.$/,
  async function (componentRouteCard: string) {
    // browser.debug();
    try {
      await ComponentReplaceTransaction.enterComponentRouteCardValue(
        componentRouteCard
      );
      await (await ComponentReplaceTransaction.getProductText).click();
      await browser.pause(1000)
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(
  /^Click on the Replace Reason (.*) in the Component Replace screen.$/,
  async function (reason: string) {
    // browser.debug();
    try {
      await ComponentReplaceTransaction.selectReplaceDropdown(reason);

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);
When(
  /^Click on submit button in the Component Replace screen.$/,
  async function () {
    // browser.debug();
    try {
      await ComponentReplaceTransaction.clickSubmitButton();

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

Then(
  /^"Component Replace Completed" should confirm the Component Replace transaction.$/,
  async function () {
    try {
      const expectedResult = await (
        await ComponentReplaceTransaction.getAlert()
      ).getText();
      expect(expectedResult).includes("Component Replace Completed");
      await ComponentReplaceTransaction.clickOk();
      //await browser.debug();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"entered does not match the selected Material requirement " should come as validation error.$/,
  async function () {
    try {
      const expectedResult = await (
        await ComponentReplaceTransaction.getAlert1()
      ).getText();
      expect(expectedResult).includes("entered does not match the selected Material requirement ");
      //await browser.debug();
      await ComponentReplaceTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

