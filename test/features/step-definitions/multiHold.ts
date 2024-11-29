import { Given, Then, When } from "@wdio/cucumber-framework";

import menuPage from "../../page-objects/menuPage.ts";
import { AssertionError, expect } from "chai";
import MultiHoldTransaction from "../../page-objects/multiHoldPage.ts";

Given(/^Go to the Multi Hold Transaction screen.$/, async function () {
  try {
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.multiHoldTransaction()).click();
  } catch (err) {
    console.log(err);
  }
});

When(
  /^Scan the multiple (.*) for details in the Multi Hold screen.$/,
  async function (routes: string) {
    try {
      let routeArr = routes.split(",");
      for (let i = 0; i < routeArr.length; i++) {
        await MultiHoldTransaction.selectRouteDropdown(routeArr[i]);
        await (await MultiHoldTransaction.HeadingText).click();
      }
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);
//

Then(/^All the scanned route cards (.*) should display in grid.$/, async function (routes:string) {
    try{
   let length=routes.split(',').length;
    let noOfRows= await MultiHoldTransaction.getGridRows().length;
    expect(noOfRows).to.equal(length)
    }
    catch(err){
        console.log(`Your error message is ${err}`);
        throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
});

//Click on the Hold Reason <HoldReason> to multi hold the routes.

When(/^Click on the Multi Hold Reason (.*) to multi hold the routes.$/, async function (holdReason: string) {
  // browser.debug();
  try {
    await MultiHoldTransaction.selectHoldReasonDropdown(holdReason);
  } catch(err) {
    console.log('Hold failed'+err)
    throw new AssertionError(`Hold Reason select failed ${err.message}`);
  }
});
When(/^Click on the submit button in the multi hold transaction screen.$/, async function () {
  // browser.debug();
  try {
    await MultiHoldTransaction.clickSubmitButton();
  } catch (err) {
    throw new AssertionError(`Submit failed ${err.message}`);
  }
});

Then(/^"RouteCards put on hold successfully" should confirm the multi hold transaction.$/, async function () {
  try {
    const expectedResult = await (await MultiHoldTransaction.getAlert()).getText();
    console.log(expectedResult)
    expect(expectedResult).includes("RouteCards put on hold successfully");
    await MultiHoldTransaction.clickOk();
  } catch (err) {
    console.log(`Your error message is ${err}`);
    throw new AssertionError(`Transaction Failed ${err.message}`);
  }
});

Then(/^"Hold Reason is required" text should come up in the Multi Hold screen.$/, async function () {
  try {
    const expectedResult = await (await MultiHoldTransaction.getValidationError()).getText();
    console.log(expectedResult)
    expect(expectedResult).includes("Hold Reason is required");
  } catch (err) {
    console.log(`Your error message is ${err}`);
    throw new AssertionError(`Transaction Failed ${err.message}`);
  }
});

