import { Given, Then, When } from "@wdio/cucumber-framework";

import menuPage from "../../page-objects/menuPage.ts";
import { AssertionError, expect } from "chai";
import SplitRouteTransaction from "../../page-objects/splitRouteCardPage.ts";

Given(/^Go to Split RouteCard Transaction screen.$/, async function () {
  try {
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.splitRouteCardTransaction()).click();
  } catch (err) {
    throw new AssertionError(`Something Wrong Happened ${err.message}`);
    console.log(err);
  }
});

//Scan the <Route> for details in the Release Screen.

When(
  /^Scan the (.*) for details in the Split RouteCard Transaction screen.$/,
  async function (route: string) {
    try {
      await SplitRouteTransaction.selectRouteDropdown(route);
      await (await SplitRouteTransaction.getProductText).click();
    
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

When(
  /^Click on the checkbox to split multiple (.*).$/,
  async function (routes: string) {
    // browser.debug();
    try {
      console.log(routes);
      browser.pause(2000);
      if(routes.includes(',')){
      let routeArr = routes.split(",");
      //await browser.debug();
      for (let i = 0; i < routeArr.length; i++) {
        await SplitRouteTransaction.getCheckbox(routeArr[i]);
      }
    }
    else{
      await SplitRouteTransaction.getCheckbox(routes);
    }
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);
When(
    /^Enter the non created RouteCard (.*) in ToRouteCard input box.$/,
    async function (route: string) {
      // browser.debug();
      try {
       await SplitRouteTransaction.enterNewRoute(route);
        }
       catch (err) {
        throw new AssertionError(`Submit failed ${err.message}`);
      }
    }
  );

When(
  /^Click on the submit button in the Split RouteCard Transaction screen.$/,
  async function () {
    // browser.debug();
    try {
      await SplitRouteTransaction.clickSubmitButton();

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

// Click on the submit button in the Associate Transaction.

Then(
  /^"Split successfully" should confirm the Split RouteCard Transaction.$/,
  async function () {
    try {
      const expectedResult = await (
        await SplitRouteTransaction.getAlert('Split successfully')
      ).getText();
      expect(expectedResult).includes("Split successfully");
      await SplitRouteTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"Select atleast 1 row from" should come as error alert.$/,
  async function () {
    try {
      const expectedResult = await (
        await SplitRouteTransaction.getAlert('Select atleast 1 row from')
      ).getText();
      expect(expectedResult).includes("Select atleast 1 row from");
      await SplitRouteTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);



Then(
  /^"is mandatory" should come as error alert for the non entered routecard.$/,
  async function () {
    try {
      const expectedResult = await (
        await SplitRouteTransaction.getAlert('is mandatory')
      ).getText();
      expect(expectedResult).includes("is mandatory");
      await SplitRouteTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
