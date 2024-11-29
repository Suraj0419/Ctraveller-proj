import { Given, Then, When } from "@wdio/cucumber-framework";

import menuPage from "../../page-objects/menuPage.ts";
import { AssertionError, expect } from "chai";
import OpenTransaction from "../../page-objects/openPage.ts";

Given(/^Go to Open Transaction screen.$/, async function () {
  try {
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.openTransaction()).click();
  } catch (err) {

    console.log(err);
    throw new AssertionError(`Something Wrong Happened ${err.message}`);
  }
});

//Scan the <Route> for details in the Release Screen.

When(
  /^Scan the closed (.*) in the open screen.$/,
  async function (route: string) {
    try {
      await OpenTransaction.selectRouteDropdown(route);
      await (await OpenTransaction.getProductText).click();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

When(
  /^Enter the open (.*) in the open screen.$/,
  async function (route: string) {
    try {
      await OpenTransaction.selectRouteDropdownForNonValidCases(route);
      await (await OpenTransaction.getProductText).click();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

When(
  /^Scan the parent Route (.*) in the screen.$/,
  async function (route: string) {
    try {
      await OpenTransaction.selectRouteDropdownForNonValidCases(route);
      await (await OpenTransaction.getProductText).click();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);
//Verify whether the child routes <ChildRoutes> are open or not.
Then(
  /^Verify whether the child routes (.*) are open or not.$/,
  async function (routes: string) {
    try {
      let isOpen = false;

      if (routes.includes(",")) {
        console.log('hghhhhh')
        const routeArr = routes.split(",");
       
        for (let i = 0; i < routeArr.length; i++) {

          await OpenTransaction.selectRouteDropdownForNonValidCases(routeArr[i]);
          await (await OpenTransaction.getProductText).click();
          const expectedResult = await (
            await OpenTransaction.getAlert("is already in Open State")
          ).getText();
          if (expectedResult.includes("is already in Open State")) {
            isOpen = true;
          } else {
            isOpen = false;
            break;
          }
          await OpenTransaction.clickOk();
        }
      } else {
        console.log('hhhhhh')
        await OpenTransaction.selectRouteDropdownForNonValidCases(routes);
        await (await OpenTransaction.getProductText).click();
        const expectedResult = await (
          await OpenTransaction.getAlert("is already in Open State")
        ).getText();
        if (expectedResult.includes("is already in Open State")) {
          isOpen = true;
        } else {
          isOpen = false;
        }
        await OpenTransaction.clickOk();
      }

      expect(isOpen).to.equal(true);
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

When(
  /^Enter the hold (.*) in the open screen.$/,
  async function (route: string) {
    try {
      await OpenTransaction.selectRouteDropdownForNonValidCases(route);
      await (await OpenTransaction.getProductText).click();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

When(/^In the open screen click on the submit button.$/, async function () {
  // browser.debug();
  try {
    await OpenTransaction.clickSubmitButton();
    //await OpenTransaction.clickOk();
  } catch (err) {
    throw new AssertionError(`Submit failed ${err.message}`);
  }
});

Then(
  /^"Opened successfully" should confirm the open transaction.$/,
  async function () {
    try {
      const expectedResult = await (
        await OpenTransaction.getAlert("Opened successfully")
      ).getText();
      expect(expectedResult).includes("Opened successfully");
      await OpenTransaction.clickOk();
     
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"is already in Open State" should come as error message.$/,
  async function () {
    try {
      const expectedResult = await (
        await OpenTransaction.getAlert("is already in Open State")
      ).getText();
      expect(expectedResult).includes("is already in Open State");
      await OpenTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(/^"is in Hold State" should come as error message.$/, async function () {
  try {
    const expectedResult = await (
      await OpenTransaction.getAlert("is in Hold State")
    ).getText();
    expect(expectedResult).includes("is in Hold State");
    await OpenTransaction.clickOk();
  } catch (err) {
    console.log(`Your error message is ${err}`);
    throw new AssertionError(`Transaction Failed ${err.message}`);
  }
});

Then(
  /^"is already in Open State" should come as error message verifying that parent route is open.$/,
  async function () {
    try {
      const expectedResult = await (
        await OpenTransaction.getAlert("is already in Open State")
      ).getText();
      expect(expectedResult).includes("is already in Open State");
      await OpenTransaction.clickOk();
      
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
