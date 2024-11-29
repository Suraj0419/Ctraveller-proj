import { Given, Then, When } from "@wdio/cucumber-framework";

import menuPage from "../../page-objects/menuPage.ts";
import { AssertionError, expect } from "chai";
import CombineRouteTransaction from "../../page-objects/combineRoutePage.ts";

Given(/^Go to Combine RouteCard Transaction screen.$/, async function () {
  try {
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.combineRouteCardTransaction()).click();
  } catch (err) {
    throw new AssertionError(`Something Wrong Happened ${err.message}`);
    console.log(err);
  }
});

//Scan the <Route> for details in the Release Screen.

When(
  /^Scan the (.*) for details in the Combine RouteCard Transaction screen.$/,
  async function (route: string) {
    try {
      await CombineRouteTransaction.selectRouteDropdown(route);
      await (await CombineRouteTransaction.getProductText).click();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

When(
  /^Click on the checkbox to Combine multiple (.*).$/,
  async function (routes: string) {
    // browser.debug();
    try {
      console.log(routes);
      browser.pause(2000);
      let routeArr = routes.split(",");
      //await browser.debug();
      for (let i = 0; i < routeArr.length; i++) {
        await CombineRouteTransaction.getCheckbox(routeArr[i]);
      }
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(
  /^Enter Comment (.*) in the Combine Qty screen.$/,
  async function (comment: string) {
    // browser.debug();
    try {
      await CombineRouteTransaction.enterComments(comment);
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(/^Click on Close When Empty checkbox.$/, async function () {
  // browser.debug();
  try {
    await CombineRouteTransaction.clickCloseOnEmpty();

    // await browser.debug();
  } catch (err) {
    throw new AssertionError(`Submit failed ${err.message}`);
  }
});

When(
  /^Click on the submit button in the Combine RouteCard Transaction screen.$/,
  async function () {
    // browser.debug();
    try {
      await CombineRouteTransaction.clickSubmitButton();

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);
When(
  /^Enter the child route (.*) for details in the Combine RouteCard Transaction screen.$/,
  async function (route: string) {
    // browser.debug();
    try {
      await CombineRouteTransaction.selectRouteDropdownForChild(route);
      (await CombineRouteTransaction.getProductText).click();

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

// Click on the submit button in the Associate Transaction.

Then(
  /^"Combined successfully" should confirm the Combine RouteCard Transaction.$/,
  async function () {
    try {
      const expectedResult = await (
        await CombineRouteTransaction.getAlert()
      ).getText();
      expect(expectedResult).includes("Combined successfully");
      await CombineRouteTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
Then(
  /^"Atleast one RouteCard has to be selected to perform Transaction." should come as validation error.$/,
  async function () {
    try {
      const expectedResult = await (
        await CombineRouteTransaction.getNoChildValidationAlert()
      ).getText();
      expect(expectedResult).includes(
        "Atleast one RouteCard has to be selected to perform Transaction."
      );
      await CombineRouteTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
Then(
  /^"not eligible for this Transaction." should come as validation error alert.$/,
  async function () {
    try {
      const expectedResult = await (
        await CombineRouteTransaction.notEligibleValidationAlert()
      ).getText();
      expect(expectedResult).includes(
        "not eligible for this Transaction."
      );
      await CombineRouteTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
