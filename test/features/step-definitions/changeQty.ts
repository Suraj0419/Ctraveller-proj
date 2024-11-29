import { Given, Then, When } from "@wdio/cucumber-framework";

import menuPage from "../../page-objects/menuPage.ts";
import { AssertionError, expect } from "chai";
import ChangeQtyTransaction from "../../page-objects/changeQty.ts";

Given(/^Go to Change Qty transaction screen.$/, async function () {
  try {
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.changeQtyTransaction()).click();
  } catch (err) {
    throw new AssertionError(`Something Wrong Happened ${err.message}`);
    console.log(err);
  }
});

//Scan the <Route> for details in the Release Screen.

When(
  /^Scan the (.*) for details in the Change Qty screen.$/,
  async function (route: string) {
    try {
      await ChangeQtyTransaction.selectRouteDropdown(route);
      await (await ChangeQtyTransaction.getProductText).click();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

Then(
  /^(.*) should be less than or equal to qty for the route.$/,
  async function (qty: string) {
    try {
      const qtyRoute = (await ChangeQtyTransaction.QtyText());
      console.log(qtyRoute);
      expect(Number(qty)).to.lessThanOrEqual(Number(qtyRoute));
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

When(
  /^Select "Loss" as Qty Type in the Change Qty screen.$/,
  async function () {
    // browser.debug();
    try {
      await ChangeQtyTransaction.selectQtyReasonDropdown("Loss");
      console.log("hell");
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(
    /^Select "Gain" as Qty Type in the Change Qty screen.$/,
    async function () {
      // browser.debug();
      try {
        await ChangeQtyTransaction.selectQtyReasonDropdown("Gain");
        console.log("hell");
      } catch (err) {
        throw new AssertionError(`Submit failed ${err.message}`);
      }
    }
  );

  When(
    /^Select "Buy" as Qty Type in the Change Qty screen.$/,
    async function () {
      // browser.debug();
      try {
        await ChangeQtyTransaction.selectQtyReasonDropdown("Buy");
        console.log("hell");
      } catch (err) {
        throw new AssertionError(`Submit failed ${err.message}`);
      }
    }
  );
  When(
    /^Select "Adjust" as Qty Type in the Change Qty screen.$/,
    async function () {
      // browser.debug();
      try {
        await ChangeQtyTransaction.selectQtyReasonDropdown("Adjust");
        console.log("hell");
      } catch (err) {
        throw new AssertionError(`Submit failed ${err.message}`);
      }
    }
  );

  
  When(
    /^Select "Sell" as Qty Type in the Change Qty screen.$/,
    async function () {
      // browser.debug();
      try {
        await ChangeQtyTransaction.selectQtyReasonDropdown("Sell");
        console.log("hell");
      } catch (err) {
        throw new AssertionError(`Submit failed ${err.message}`);
      }
    }
  );



When(
  /^Select (.*) in the ChangeQty screen.$/,
  async function (reasonCode: string) {
    // browser.debug();
    try {
      await ChangeQtyTransaction.selectReasonCode(reasonCode);

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(
  /^Enter the (.*) in the Change Qty screen.$/,
  async function (quantity: number) {
    // browser.debug();
    try {
      await ChangeQtyTransaction.setQty(quantity);

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);
When(
  /^Click on the submit button in the Change Qty transaction screen.$/,
  async function () {
    // browser.debug();
    try {
      await ChangeQtyTransaction.clickSubmitButton();

      // await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

// Click on the submit button in the Associate Transaction.

Then(
  /^"Change Qty successful" should confirm the Change Qty transaction.$/,
  async function () {
    try {
      const expectedResult = await (
        await ChangeQtyTransaction.getAlert()
      ).getText();
      expect(expectedResult).includes("Change Qty successful");
      await ChangeQtyTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
