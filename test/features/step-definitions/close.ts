import { Given, Then, When } from "@wdio/cucumber-framework";

import menuPage from "../../page-objects/menuPage.ts";
import closePage from "../../page-objects/closePage.ts";
import { AssertionError, expect } from "chai";

// Navigate to the close transaction screen
Given(/^Go to close transaction screen.$/, async function () {
  try {
    await browser.pause(1000);
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.closeTransactionMenu()).click();
  } catch (err) {
    throw new AssertionError(`Something Wrong Happened ${err.message}`);
  }
});

// Scan the specified route for details in the close screen
When(
  /^Scan the (.*) for details in the Close screen.$/,
  async function (route: string) {
    try {
      await closePage.selectRouteDropdown(route);
      await (await closePage.getProductText).click();
      await browser.pause(7000);
    } catch (err) {
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

When(
  /^Enter the closed route (.*) in the close transaction screen.$/,
  async function (route: string) {
    try {
      await closePage.selectRouteDropdownForNonValidCase(route);
      await (await closePage.getProductText).click();
    } catch (err) {
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

When(
  /^Enter the parent Route (.*) in the close screen.$/,
  async function (route: string) {
    try {
      //  await closePage.clickOk();
      await closePage.selectRouteDropdownForNonValidCase(route);
      await (await closePage.getProductText).click();
      await browser.pause(5000);
    } catch (err) {
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

//Scan the parent Route <ParentRoute> in the screen.

// Click on the submit button in the close screen
When(/^Click on the submit button in the Close screen.$/, async function () {
  try {
    await closePage.clickSubmitButton();
    //await closePage.clickOk();
  } catch (err) {
    throw new AssertionError(`Something Wrong Happened ${err.message}`);
  }
});

Then(
  /^"Closed successfully" should confirm the close transaction.$/,
  async function () {
    try {
      let msg = await (
        await closePage.getAlert("Closed successfully")
      ).getText();
      expect(msg).includes("Closed successfully");
      await closePage.clickOk();
    } catch (err) {
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

Then(
  /^"is already in Closed state." should come as error.$/,
  async function () {
    try {
      let msg = await (
        await closePage.getAlert("is already in Closed state.")
      ).getText();
      expect(msg).includes("is already in Closed state.");
      await closePage.clickOk();
    } catch (err) {
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);
//Verify whether the child routes <ChildRoutes> are closed or not.
Then(
  /^Verify whether the child routes (.*) are closed or not.$/,
  async function (routes: string) {
    try {

      await closePage.clickOk();
      let isClose = false;

      if (routes.includes(",")) {
        console.log("hghhhhh");
        const routeArr = routes.split(",");

        for (let i = 0; i < routeArr.length; i++) {
          await closePage.selectRouteDropdownForNonValidCase(routeArr[i]);
          await (await closePage.getProductText).click();
          const expectedResult = await (
            await closePage.getAlert("is already in Closed state.")
          ).getText();
          await closePage.clickOk();
          if (expectedResult.includes("is already in Closed state.")) {
            isClose = true;
          } else {
            isClose = false;
          
            break;
          }
        }
      } else {
        console.log("hhhhhh");
        await closePage.selectRouteDropdownForNonValidCase(routes);
        await (await closePage.getProductText).click();
        const expectedResult = await (
          await closePage.getAlert("is already in Closed state.")
        ).getText();
        if (expectedResult.includes("is already in Closed state.")) {
          isClose = true;  
          

        } else {
          isClose = false;
          
        }
        await closePage.clickOk();
      }

      expect(isClose).to.equal(true);
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

Then(
  /^Status for the ParentRoute route should come as Active indicating parent route is Active.$/,
  async function () {
    try {
      let status = await (await closePage.getStatusText()).getText();
      expect(status).equal("Active");
    } catch (err) {
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);
