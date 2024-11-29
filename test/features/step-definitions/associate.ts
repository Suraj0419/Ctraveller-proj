import { Given, Then, When } from "@wdio/cucumber-framework";

import menuPage from "../../page-objects/menuPage.ts";
import { AssertionError, expect } from "chai";
import AssociateTransaction from "../../page-objects/associatePage.ts";


let childQty=0;
let previousParentQty=0;
Given(/^Go to Associate transaction screen.$/, async function () {
  try {
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.associateTransaction()).click();
  } catch (err) {
    throw new AssertionError(`Something Wrong Happened ${err.message}`);
    console.log(err);
  }
});

//Scan the <Route> for details in the Release Screen.

When(
  /^Scan the (.*) for details in the Associate Transaction.$/,
  async function (route: string) {
    try {
      await AssociateTransaction.selectRouteDropdown(route);
      await (await AssociateTransaction.getProductText).click();
      await browser.pause(2000)
    //  await AssociateTransaction.paginationClick();
    //  await AssociateTransaction.fiftyOptionClick();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

When(
  /^Enter the parent (.*) in Associate screen.$/,
  async function (route: string) {
    try {
      await AssociateTransaction.selectRouteDropdown(route);
      await (await AssociateTransaction.getProductText).click();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

When(
  /^Click on the checkbox for the multiple elgible (.*).$/,
  async function (routes: string) {
    // browser.debug();
    try {
      console.log(routes);
      if(routes.includes(',')){
      let routeArr = routes.split(",");
      //await browser.debug();
      for (let i = 0; i < routeArr.length; i++) {
        await AssociateTransaction.getCheckbox(routeArr[i]);
        const qty = Number(await AssociateTransaction.getQty(routeArr[i]));
        console.log(qty);
        childQty = childQty + qty;
      }
    }
    else{
      await AssociateTransaction.getCheckbox(routes);
      console.log(routes)
        const qty = Number(await AssociateTransaction.getQty(routes));
        console.log(qty);
        childQty = childQty + qty;
    }
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(
  /^Click on the submit button in the Associate Transaction.$/,
  async function () {
    // browser.debug();
    try {
      previousParentQty = Number(await AssociateTransaction.getParentQty());
      await AssociateTransaction.clickSubmitButton();
     // await AssociateTransaction.clickOkButton();

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

// Click on the submit button in the Associate Transaction.

Then(
  /^"Associated successfully" should confirm the Associate transaction.$/,
  async function () {
    try {
      const expectedResult = await (
        await AssociateTransaction.getAlert("Associated successfully")
      ).getText();
      expect(expectedResult).includes("Associated successfully");
      await AssociateTransaction.clickOkButton();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
Then(
  /^"must have children or no quantity" should come as error.$/,
  async function () {
    try {
      const expectedResult = await (
        await AssociateTransaction.getAlert("must have children or no quantity")
      ).getText();
      expect(expectedResult).includes("must have children or no quantity");
      await AssociateTransaction.clickOkButton();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

When(
  /^Enter the routes to be associated (.*) with non zero Qty for details in the Associate Transaction.$/,
  async function (route: string) {
    try {
      await AssociateTransaction.selectRouteDropdownForValidCases(route);
      await (await AssociateTransaction.getProductText).click();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);
//Enter the <Route> with non zero Qty for details in the Associate Transaction.
Then(
  /^"must have children or no quantity" should come as error in associate screen.$/,
  async function () {
    try {
      const expectedResult = await (
        await AssociateTransaction.getAlert("must have children or no quantity")
      ).getText();
      expect(expectedResult).includes("must have children or no quantity");
      await AssociateTransaction.clickOkButton();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    
    }
  }
);

Then(
  /^"At least one entry should be selected in the grid" should come as error in the screen.$/,
  async function () {
    try {
      const expectedResult = await (
        await AssociateTransaction.getAlert(
          "At least one entry should be selected in the grid"
        )
      ).getText();
      expect(expectedResult).includes(
        "At least one entry should be selected in the grid"
      );
      await AssociateTransaction.clickOkButton();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^The Parent Qty should match with the combined qty of child (.*).$/,
  async function (routes) {
    try {
      console.log(routes);
      const parentQty = Number(await AssociateTransaction.getParentQty())
      expect(parentQty-previousParentQty).equal(childQty);
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
