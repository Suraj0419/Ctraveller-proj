import { Given, Then, When } from "@wdio/cucumber-framework";

import menuPage from "../../page-objects/menuPage.ts";
import { AssertionError, expect } from "chai";
import DisassociateTransaction from "../../page-objects/disAssociatePage.ts";

Given(/^Go to the Disassociate screen.$/, async function () {
  try {
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.DissociateTransaction()).click();
  } catch (err) {
    throw new AssertionError(`Something Wrong Happened ${err.message}`);
    console.log(err);
  }
});

//Scan the <Route> for details in the Release Screen.
//In the Disassociate Transaction Scan the <Route> for details.
When(
  /^In the Disassociate Transaction Scan the (.*) for details.$/,
  async function (route: string) {
    try {
      await DisassociateTransaction.selectRouteDropdown(route);
      await (await DisassociateTransaction.getProductText).click();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

When(
  /^Enter the dissociated route (.*) for details.$/,
  async function (route: string) {
    try {
      await DisassociateTransaction.enterRouteDropdownForDissociated(route)
      await (await DisassociateTransaction.getProductText).click();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

When(
  /^Click on the header checkbox to Disassociate all the routes.$/,
  async function () {
    // browser.debug();
    try {
      await DisassociateTransaction.getHeaderCheckbox();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);
// Click on the <ChildRoute> in the dissociate grid.

When(
  /^Click on the (.*) in the dissociate grid.$/,
  async function (childRoute: string) {
    // browser.debug();
    try {
      await DisassociateTransaction.getCheckbox(childRoute);
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(
  /^Click on the submit button in the Disassociate transaction screen.$/,
  async function () {
    // browser.debug();
    try {
      await DisassociateTransaction.clickSubmitButton();

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

// Click on the submit button in the Associate Transaction.

Then(
  /^"Disassociated successfully" should confirm the Disassociate transaction.$/,
  async function () {
    try {
      const expectedResult = await (
        await DisassociateTransaction.getAlert()
      ).getText();
      expect(expectedResult).includes("Disassociated successfully");
      await DisassociateTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^Children (.*) Routecards should be displayed in the grid.$/,
  async function (routes: string) {
    try {
      const routesArr = routes.split(",");
      let isChildRoute = false;
      for (let i = 0; i < routesArr.length; i++) {
        let childRoute = await DisassociateTransaction.getRoute(routesArr[i]);
        if (routesArr.includes(childRoute)) {
          isChildRoute = true;
        } else {
          isChildRoute = false;
          break;
        }
        expect(isChildRoute).equal(true);
      }
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^Child RouteCard (.*) should not be there in the grid.$/,
  async function (route: string) {
    try {
      const routes = await DisassociateTransaction.getRoutes();
      let isChildRoutePresent = null;
      if (routes.includes(route)) {
        isChildRoutePresent = true;
      } else {
        isChildRoutePresent = false;
      }
      expect(isChildRoutePresent).equal(false);
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^The Qty for the Parent Route (.*) should be 0.$/,
  async function (route: string) {
    try {
      console.log(route);
      const qty = Number(await DisassociateTransaction.getParentQty());
      expect(qty).equal(0);
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
