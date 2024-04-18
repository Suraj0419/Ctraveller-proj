import {  Given, Then, When } from "@wdio/cucumber-framework";

import menuPage from "../../page-objects/menuPage.ts";
import { AssertionError, expect } from "chai";
import HoldTransaction from "../../page-objects/holdPage.ts";



Given(/^Go to Hold Transaction screen.$/, async function () {
  try {
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.holdTransaction()).click();
  } catch (err) {
    console.log(err);
  }
});

When(/^Scan the (.*) for details in the Hold screen.$/, async function (route: string) {
  try {
    await HoldTransaction.selectRouteDropdown(route);
    await (await HoldTransaction.getProductText).click();
  } catch (err) {
    console.log(`Your error message is ${err}`);
    throw new AssertionError(`Something Wrong Happened ${err.message}`);
  }
});

When(/^Click on the Hold Reason (.*).$/, async function (holdReason: string) {
  // browser.debug();
  try {
    await HoldTransaction.selectHoldReasonDropdown(holdReason);
  } catch (err) {
    throw new AssertionError(`Hold Reason select failed ${err.message}`);
  }
});
When(/^Click on the submit button in the hold screen.$/, async function () {
  // browser.debug();
  try {
    await HoldTransaction.clickSubmitButton();
  } catch (err) {
    throw new AssertionError(`Submit failed ${err.message}`);
  }
});

Then(
  /^"put on Hold" should confirm the hold transaction.$/,
  async function () {
    try {
      const expectedResult = await (await HoldTransaction.getAlert()).getText();
      expect(expectedResult).includes('put on Hold');
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
