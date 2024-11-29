import {  Given, Then, When } from "@wdio/cucumber-framework";

import menuPage from "../../page-objects/menuPage.ts";
import { AssertionError, expect } from "chai";
import ReleaseTransaction from "../../page-objects/releasePage.ts";



Given(/^Go to Release Transaction screen.$/, async function () {
  try {
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.releaseTransaction()).click();
  } catch (err) {
    console.log(err);
    throw new AssertionError(`Something Wrong Happened ${err.message}`);
    
  }
});

//Scan the <Route> for details in the Release Screen.
// Scan the hold Route <Route> in the release screen.
When(/^Scan the (.*) for details in the Release Screen.$/, async function (route: string) {
  try {
    await ReleaseTransaction.selectRouteDropdown(route);
    await (await ReleaseTransaction.getProductText).click();
  } catch (err) {
    console.log(`Your error message is ${err}`);
    throw new AssertionError(`Something Wrong Happened ${err.message}`);
  }
});

When(/^Scan the hold Route (.*) in the release screen.$/, async function (route: string) {
  try {
    await ReleaseTransaction.selectRouteDropdownForValidCases(route);
    await (await ReleaseTransaction.getProductText).click();
  } catch (err) {
    console.log(`Your error message is ${err}`);
    throw new AssertionError(`Something Wrong Happened ${err.message}`);
  }
});

When(/^Enter the invalid RouteCard (.*) for details in the Release Screen.$/, async function (route: string) {
  try {
    await ReleaseTransaction.selectRouteDropdownForValidCases(route);
    await (await ReleaseTransaction.getProductText).click();
  } catch (err) {
    console.log(`Your error message is ${err}`);
    throw new AssertionError(`Something Wrong Happened ${err.message}`);
  }
});

When(/^Click on the Release Reason (.*).$/, async function (releaseReason: string) {
  // browser.debug();
  try {
    await ReleaseTransaction.selectReleaseReasonDropdown(releaseReason);
  } catch (err) {
    throw new AssertionError(`Hold Reason select failed ${err.message}`);
  }
});
When(/^Click on the submit button in the release screen.$/, async function () {
  // browser.debug();
  try {
    await ReleaseTransaction.clickSubmitButton();
  } catch (err) {
    throw new AssertionError(`Submit failed ${err.message}`);
  }
});

Then(
  /^"Released successfully" should confirm the release transaction.$/,
  async function () {
    try {
      const expectedResult = await (await ReleaseTransaction.getAlert('Released successfully')).getText();
      expect(expectedResult).includes("Released successfully");
      await ReleaseTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"Invalid RouteCard, Please scan valid RouteCard" should confirm the release transaction.$/,
  async function () {
    try {
      const expectedResult = await (await ReleaseTransaction.getAlert('Invalid RouteCard, Please scan valid RouteCard')).getText();
      expect(expectedResult).includes("Invalid RouteCard, Please scan valid RouteCard");
      await ReleaseTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
//"Release Reason is required" should come as error.


Then(
  /^"Release Reason is required" should come as error.$/,
  async function () {
    try {
      const expectedResult = await (await ReleaseTransaction.getAlert('Release Reason is required')).getText();
      expect(expectedResult).includes("Release Reason is required");
      //await ReleaseTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"is not on Hold." should come as error alert in the release screen.$/,
  async function () {
    try {
      const expectedResult = await (await ReleaseTransaction.getAlert('is not on Hold.')).getText();
      expect(expectedResult).includes("is not on Hold.");
      await ReleaseTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
