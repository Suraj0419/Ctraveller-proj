import { Given, Then, When } from "@wdio/cucumber-framework";

import menuPage from "../../page-objects/menuPage.ts";
import { AssertionError, expect } from "chai";
import ComponentRemoveTrtansaction from "../../page-objects/componentRemovePage.ts";

Given(/^Go to Component Remove Transaction screen.$/, async function () {
  try {
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.componentRemoveTransaction()).click();
  } catch (err) {
    throw new AssertionError(`Something Wrong Happened ${err.message}`);
    console.log(err);
  }
});

//Scan the <Route> for details in the Release Screen.
//Scan the <Route> for details in Component Issue screen.

When(
  /^Scan the (.*) for details in Component Remove screen.$/,
  async function (route: string) {
    try {
      await ComponentRemoveTrtansaction.selectRouteDropdown(route);
      await (await ComponentRemoveTrtansaction.getProductText).click();
      await browser.pause(1000);
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

When(
  /^Select a row in the grid with Issue Control as bulk in Component Remove Screen.$/,
  async function () {
    // browser.debug();
    try {
      await ComponentRemoveTrtansaction.clickBulkRow();

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(
  /^Enter the Issue Qty (.*) in the Component Remove screen.$/,
  async function (removeIssueQty: string) {
    // browser.debug();
    try {
      await ComponentRemoveTrtansaction.enterRemoveIssueQty(removeIssueQty);
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(
  /^Click on the Removal Reason (.*) in in the Component Remove screen.$/,
  async function (reason: string) {
    // browser.debug();
    try {
      await ComponentRemoveTrtansaction.selectRemoveReasonDropdown(reason);

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);
When(
  /^Click on the Remove Difference Reason (.*) in in the Component Remove screen.$/,
  async function (reason: string) {
    // browser.debug();
    try {
      await ComponentRemoveTrtansaction.selectRemoveIssueDifferenceDropdown(
        reason
      );

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);
When(
  /^Click on submit button in the Component Remove screen.$/,
  async function () {
    // browser.debug();
    try {
      await ComponentRemoveTrtansaction.clickSubmitButton();

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

Then(
  /^"Component Removed" should confirm the Component Remove transaction.$/,
  async function () {
    try {
      const expectedResult = await (
        await ComponentRemoveTrtansaction.getAlert()
      ).getText();
      expect(expectedResult).includes("Component Removed");
      await ComponentRemoveTrtansaction.clickOk();
      //await browser.debug();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"Remove Difference Reason is required." should come as validation error.$/,
  async function () {
    try {
      const expectedResult = await (
        await ComponentRemoveTrtansaction.getAlert1()
      ).getText();
      expect(expectedResult).includes("Remove Difference Reason is required.");
      await ComponentRemoveTrtansaction.clickOk();
      //await browser.debug();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"Removing more qty than issued is not allowed." should come as validation error.$/,
  async function () {
    try {
      const expectedResult = await (
        await ComponentRemoveTrtansaction.getAlert2()
      ).getText();
      expect(expectedResult).includes("Removing more qty than issued is not allowed.");
      //await browser.debug();
      await ComponentRemoveTrtansaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);





