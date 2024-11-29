import { Given, Then, When } from "@wdio/cucumber-framework";

import menuPage from "../../page-objects/menuPage.ts";
import { AssertionError, expect } from "chai";
import SplitQtyTransaction from "../../page-objects/splitQtyPage.ts";

Given(/^Go to Split Qty Transaction screen.$/, async function () {
  try {
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.splitQtyCardTransaction()).click();
  } catch (err) {
    throw new AssertionError(`Something Wrong Happened ${err.message}`);
    console.log(err);
  }
});

//Scan the <Route> for details in the Release Screen.

When(
  /^Scan the (.*) for details in the Split Qty Transaction screen.$/,
  async function (route: string) {
    try {
      await SplitQtyTransaction.selectRouteDropdown(route);
      await (await SplitQtyTransaction.getProductText).click();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

When(/^Click on the Add Row button.$/, async function () {
  // browser.debug();
  try {
    await SplitQtyTransaction.clickAddButton();

    // await browser.debug();
  } catch (err) {
    throw new AssertionError(`Submit failed ${err.message}`);
  }
});

When(/^Click on the Close Source When Empty checkbox.$/, async function () {
  // browser.debug();
  try {
    await SplitQtyTransaction.clickCloseWhenEmpyty();

    // await browser.debug();
  } catch (err) {
    throw new AssertionError(`Submit failed ${err.message}`);
  }
});
When(/^Check on the Generate Names Automatically checkbox.$/, async function () {
  // browser.debug();
  try {
    await SplitQtyTransaction.clickGenerateNameCheckBox();

    // await browser.debug();
  } catch (err) {
    throw new AssertionError(`Submit failed ${err.message}`);
  }
});
When(
  /^The parent route (.*) to split should be entered.$/,
  async function (routcard: string) {
    // browser.debug();
    try {
      await SplitQtyTransaction.selectRouteDropdownForNonValidCases(routcard);
      await (await SplitQtyTransaction.getProductText).click();

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(
  /^Enter the RouteCard (.*) in Split Qty Transaction screen.$/,
  async function (routcard: string) {
    // browser.debug();
    try {

      await SplitQtyTransaction.enterRouteCard(routcard);

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(
  /^Enter the Qty (.*) in Split Qty Transaction screen.$/,
  async function (qty: string) {
    // browser.debug();
    try {
      await SplitQtyTransaction.enterQty(qty);

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(
  /^Click on the submit button in the Split Qty Transaction screen.$/,
  async function () {
    // browser.debug();
    try {
      await SplitQtyTransaction.clickSubmitButton();
     // await SplitQtyTransaction.clickOk();

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

// Click on the submit button in the Associate Transaction.

Then(
  /^"Split successfully" should confirm the Split Qty Transaction.$/,
  async function () {
    try {
      const expectedResult = await (
        await SplitQtyTransaction.getAlert("Split successfully")
      ).getText();
      expect(expectedResult).includes("Split successfully");
      await SplitQtyTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"Grid Cannot Be Empty" should come as error alert in the screen.$/,
  async function () {
    try {
      const expectedResult = await (
        await SplitQtyTransaction.getAlert("Grid Cannot Be Empty")
      ).getText();
      expect(expectedResult).includes("Grid Cannot Be Empty");
      await SplitQtyTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"Numbering Rule is not configured." should come as validation error alert.$/,
  async function () {
    try {
      const expectedResult = await (
        await SplitQtyTransaction.getAlert(
          "Numbering Rule is not configured."
        )
      ).getText();
      expect(expectedResult).includes("Numbering Rule is not configured.");
      await SplitQtyTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);


Then(
  /^"until atleast one child is selected" should come as error alert in the screen.$/,
  async function () {
    try {
      const expectedResult = await (
        await SplitQtyTransaction.getAlert(
          "until atleast one child is selected"
        )
      ).getText();
      expect(expectedResult).includes("until atleast one child is selected");
      await SplitQtyTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"The quantity to be removed exceeds its current quantity" should come as error alert.$/,
  async function () {
    try {
      const expectedResult = await (
        await SplitQtyTransaction.getAlert(
          "The quantity to be removed exceeds its current quantity"
        )
      ).getText();
      expect(expectedResult).includes("The quantity to be removed exceeds its current quantity");
      await SplitQtyTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^(.*) should be in closed state.$/,
  async function (routcard) {
    try {
      await SplitQtyTransaction.selectRouteDropdownForNonValidCases(routcard);
      await (await SplitQtyTransaction.getProductText).click();
      const expectedResult = await (
        await SplitQtyTransaction.getAlert(
          "is in Close State."
        )
      ).getText();
      expect(expectedResult).includes("is in Close State.");
      await SplitQtyTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
