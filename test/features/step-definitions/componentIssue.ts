import { Given, Then, When } from "@wdio/cucumber-framework";

import menuPage from "../../page-objects/menuPage.ts";
import { AssertionError, expect } from "chai";
import ComponentIssueTransaction from "../../page-objects/componentIssuePage.ts";

Given(/^Go to Component Issue screen.$/, async function () {
  try {
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.componentIssueTransaction()).click();
  } catch (err) {
    throw new AssertionError(`Something Wrong Happened ${err.message}`);
    console.log(err);
  }
});

//Scan the <Route> for details in the Release Screen.
//Scan the <Route> for details in Component Issue screen.
//Enter the invalid <Route> for details in Component Issue screen.

When(
  /^Enter the invalid (.*) for details in Component Issue screen.$/,
  async function (route: string) {
    try {
      await ComponentIssueTransaction.selectRouteDropdownForNonValidCases(route);
      await (await ComponentIssueTransaction.getProductText).click();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);
When(
  /^Scan the (.*) for details in Component Issue screen.$/,
  async function (route: string) {
    try {
      await ComponentIssueTransaction.selectRouteDropdown(route);
      await (await ComponentIssueTransaction.getProductText).click();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

When(
  /^Enter the Bulk Component RouteCard (.*) input in the Component Issue screen.$/,
  async function (componentRouteCard: string) {
    // browser.debug();
    try {
      await ComponentIssueTransaction.enterComponentRouteCardValue(
        componentRouteCard
      );
      await (await ComponentIssueTransaction.getProductText).click();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);
When(
  /^Enter the Serialized Component RouteCard (.*) input in the Component Issue screen.$/,
  async function (componentRouteCard: string) {
    // browser.debug();
    try {
      await ComponentIssueTransaction.enterComponentRouteCardValue(
        componentRouteCard
      );
      await (await ComponentIssueTransaction.getProductText).click();
      await browser.pause(2000);
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(
  /^Select the row in the grid with Issue Control as bulk.$/,
  async function () {
    // browser.debug();
    try {
      await ComponentIssueTransaction.clickBulkRow();

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);
When(
  /^Select the row in the grid with Issue Control as Serialized.$/,
  async function () {
    // browser.debug();
    try {
      await ComponentIssueTransaction.clickSerializedRow();

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(/^Enter the Issue Qty (.*) in Component Issue screen.$/, async function (issueQty: string) {
  // browser.debug();
  try {
    await ComponentIssueTransaction.enterIssueQty(issueQty);
  } catch (err) {
    throw new AssertionError(`Submit failed ${err.message}`);
  }
});

When(
  /^Click on the Issue Difference Reason (.*) in in the Component Issue screen.$/,
  async function (reason:string) {
    // browser.debug();
    try {
      await ComponentIssueTransaction.selectIssueQtyDropdown(reason);

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);
When(
  /^Click on submit button in the Component Issue screen.$/,
  async function () {
    // browser.debug();
    try {
      await ComponentIssueTransaction.clickSubmitButton();

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

Then(
  /^"Component issued" should confirm the Component Issue transaction.$/,
  async function () {
    try {
      const expectedResult = await (
        await ComponentIssueTransaction.getAlert('Component issued')
      ).getText();
      expect(expectedResult).includes("Component issued");
      //await browser.debug();
      await ComponentIssueTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
//Required Qty should be equal to Component Route Card Qty.

Then(
  /^Required Qty should be equal to Component Route Card Qty.$/,
  async function () {
    try {
      const requiredQty=await ComponentIssueTransaction.getRequiredQty();
      const routeCardQty=await ComponentIssueTransaction.getComponentQty();
      console.log(requiredQty);
      console.log(routeCardQty)
      expect(requiredQty).equal(routeCardQty);
      //await browser.debug();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
// "A Substitute Reason is required for Component Product" should come as Validation error.

Then(
  /^"A Substitute Reason is required for Component Product" should come as Validation error.$/,
  async function () {
    try {
      const expectedResult = await (
        await ComponentIssueTransaction.getAlert('A Substitute Reason is required for Component Product')
      ).getText();
      expect(expectedResult).includes("A Substitute Reason is required for Component Product");
      await ComponentIssueTransaction.clickOk();
      //await browser.debug();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
//"Issue Difference Reason is required." should come as error.

Then(
  /^"Issue Difference Reason is required." should come as error.$/,
  async function () {
    try {
      const expectedResult = await (
        await ComponentIssueTransaction.getAlert('Issue Difference Reason is required.')
      ).getText();
      expect(expectedResult).includes("Issue Difference Reason is required.");
      await ComponentIssueTransaction.clickOk();
      //await browser.debug();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"is in Hold State." should come as validation error in Component Issue screen.$/,
  async function () {
    try {
      const expectedResult = await (
        await ComponentIssueTransaction.getAlert('is in Hold State.')
      ).getText();
      expect(expectedResult).includes("is in Hold State.");
      //await browser.debug();
      await ComponentIssueTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

//"is in Closed state." should come as validation error in Component Issue screen.

//"is in Hold State." should come as validation error in Component Issue screen.


Then(
  /^"is in Closed state." should come as validation error in Component Issue screen.$/,
  async function () {
    try {
      const expectedResult = await (
        await ComponentIssueTransaction.getAlert('is in Closed state.')
      ).getText();
      expect(expectedResult).includes("is in Closed state.");
      await ComponentIssueTransaction.clickOk();
      //await browser.debug();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

//"Exceeds its Current Qty." should come as error in the Component Issue Screen.

Then(
  /^"Exceeds its Current Qty." should come as error in the Component Issue Screen.$/,
  async function () {
    try {
      const expectedResult = await (
        await ComponentIssueTransaction.getAlert('Exceeds its Current Qty.')
      ).getText();
      expect(expectedResult).includes("Exceeds its Current Qty.");
      await ComponentIssueTransaction.clickOk();
      //await browser.debug();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
