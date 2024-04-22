import {  Given, Then, When } from "@wdio/cucumber-framework";
import menuPage from "../../page-objects/menuPage.ts";
import { AssertionError, expect } from "chai";
import MoveNonStandardTransaction from "../../page-objects/moveNonStandardTransaction.ts";



Given(/^Go to Move Non Standard Transaction screen.$/, async function () {
  try {
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.moveNonStandardTransaction()).click();
  } catch (err) {
    console.log(err);
  }
});

When(
  /^Scan the route (.*) for move non standard transaction.$/,
  async function (route: string) {
    try {
      await MoveNonStandardTransaction.selectRouteDropdown(route);
      await (await MoveNonStandardTransaction.getProductText).click();
      // Retrieve the value of the input field
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(
        `Workflow is not in the first step of the workflow ${err.message}`
      );
    }
  }
);

When(/^Click on the (.*) for the route in move non standard screen.$/, async function (equipment: string) {
  // browser.debug();
  try {
    await MoveNonStandardTransaction.selectEquipmentDropdown(equipment);
  } catch (err) {
    throw new AssertionError(`Equipment select failed ${err.message}`);
  }
});
When(/^Click on the ProcessWorkflow (.*) in the move non standard screen.$/, async function (processflow: string) {
    // browser.debug();
    try {
      await MoveNonStandardTransaction.selectToProcessFlowDropdown(processflow);
    } catch (err) {
      throw new AssertionError(` ProcessWorkflow select failed ${err.message}`);
    }
  });

  When(/^Click on the (.*) processflow Step in the move non standard screen.$/, async function (toStep: string) {
    // browser.debug();
    try {
      await MoveNonStandardTransaction.selectToStepDropdown(toStep);
    } catch (err) {
      throw new AssertionError(`Equipment select failed ${err.message}`);
    }
  });
When(/^Click on submit button in the Move Non Standard screen.$/, async function () {
  // browser.debug();
  try {
    await MoveNonStandardTransaction.clickSubmitButton();
  } catch (err) {
    console.log(err);
    throw new AssertionError(`Something failed ${err.message}`);
  }
});

Then(
  /^"moved to" should confirm the transaction in the move non standard screen.$/,
  async function () {
    try {
      const expectedResult = await (
        await MoveNonStandardTransaction.getAlert()
      ).getText();
      expect(expectedResult).includes('moved to');
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
