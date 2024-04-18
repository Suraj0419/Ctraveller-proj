import {  Given, Then, When } from "@wdio/cucumber-framework";
import menuPage from "../../page-objects/menuPage.ts";
import { AssertionError, expect } from "chai";
import RouteMoveTransaction from "../../page-objects/moveInPage.ts";



Given(/^Go to Move Transaction screen.$/, async function () {
  try {
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.moveTransaction()).click();
  } catch (err) {
    console.log(err);
  }
});

Then(
  /^Verify that workflow for the (.*) is in (.*) step of the workflow.$/,
  async function (route: string, first: string) {
    try {
      await RouteMoveTransaction.selectRouteDropdown(route);
      await (await RouteMoveTransaction.getProductText).click();
      // Retrieve the value of the input field
      const inputFieldValue = await RouteMoveTransaction.selectToStepDropdown(
        first
      );
      console.log(inputFieldValue);
      expect(inputFieldValue).to.equal(first);
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(
        `Workflow is not in the first step of the workflow ${err.message}`
      );
    }
  }
);

When(/^Click on the (.*) for the route.$/, async function (equipment: string) {
  // browser.debug();
  try {
    await RouteMoveTransaction.selectEquipmentDropdown(equipment);
  } catch (err) {
    throw new AssertionError(`Equipment select failed ${err.message}`);
  }
});
When(/^Click on submit button in the Move screen.$/, async function () {
  // browser.debug();
  try {
    await RouteMoveTransaction.clickSubmitButton();
  } catch (err) {
    throw new AssertionError(`Something failed ${err.message}`);
  }
});

Then(
  /^"moved to" should confirm the transaction.$/,
  async function () {
    try {
      const expectedResult = await (
        await RouteMoveTransaction.getAlert()
      ).getText();
      expect(expectedResult).includes('moved to');
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
