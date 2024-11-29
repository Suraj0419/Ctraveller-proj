import { Given, Then, When } from "@wdio/cucumber-framework";

import menuPage from "../../page-objects/menuPage.ts";
import { AssertionError, expect } from "chai";
import MultiReleaseTransaction from "../../page-objects/multiReleasePage.ts";

Given(/^Go to the Multi Release transaction screen.$/, async function () {
  try {
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.multiReleaseTransaction()).click();
  } catch (err) {
    console.log(err);
  }
});

When(
  /^In the multi release screen Scan the multiple (.*) for details.$/,
  async function (routes: string) {
    try {
      let routeArr = routes.split(",");
      for (let i = 0; i < routeArr.length; i++) {
        await MultiReleaseTransaction.selectRouteDropdown(routeArr[i]);
        await (await MultiReleaseTransaction.HeadingText).click();
      }
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);
//

Then(/^In the multi release screen All the scanned route cards (.*) should display in grid.$/, async function (routes:string) {
    try{
   let length=routes.split(',').length;
   console.log(length+" length");
    let noOfRows= (await MultiReleaseTransaction.getGridRows()).length;
    console.log(noOfRows+"noRows");
    expect(noOfRows).to.equal(length)
    }
    catch(err){
        console.log(`Your error message is ${err}`);
        throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
});

//Click on the Hold Reason <HoldReason> to multi hold the routes.

When(/^Click on the Multi Release Reason (.*) to multi release the routes.$/, async function (holdReason: string) {
  // browser.debug();
  try {
    await MultiReleaseTransaction.selectReleaseReasonDropdown(holdReason);
  } catch(err) {
    console.log('Hold failed'+err)
    throw new AssertionError(`Hold Reason select failed ${err.message}`);
  }
});
When(/^Click on the submit button in the multi release transaction screen.$/, async function () {
  // browser.debug();
  try {
    await MultiReleaseTransaction.clickSubmitButton();
  } catch (err) {
    throw new AssertionError(`Submit failed ${err.message}`);
  }
});

Then(/^"released successfully" should confirm the multi release transaction.$/, async function () {
  try {
    const expectedResult = await (await MultiReleaseTransaction.getAlert('released successfully')).getText();
    console.log(expectedResult)
    expect(expectedResult).includes("released successfully");
    await MultiReleaseTransaction.clickOk();
  } catch (err) {
    console.log(`Your error message is ${err}`);
    throw new AssertionError(`Transaction Failed ${err.message}`);
  }
});

//"Release Reason is required" text should come up in the Multi Release screen.
//"Release Reason is required" text should come up in the Multi Release screen.
Then(/^"Release Reason is required" text should come up in the Multi Release screen.$/, async function () {
  try {
    const expectedResult = await(await MultiReleaseTransaction.getAlert('Release Reason is required')).getText()
    console.log(expectedResult)
    expect(expectedResult).includes("Release Reason is required");
  } catch (err) {
    console.log(`Your error message is ${err}`);
    throw new AssertionError(`Transaction Failed ${err.message}`);
  }
});
