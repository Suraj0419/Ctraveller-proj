import { Given, Then, When } from "@wdio/cucumber-framework";

import menuPage from "../../page-objects/menuPage.ts";
import { AssertionError, expect } from "chai";
import CombineQtyTransaction from "../../page-objects/combineQtyPage.ts";

Given(/^Go to Combine Qty transaction screen.$/, async function () {
  try {
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.combineQtyTransaction()).click();
  } catch (err) {
    throw new AssertionError(`Something Wrong Happened ${err.message}`);
    console.log(err);
  }
});

//Scan the <Route> for details in the Release Screen.

When(
  /^Scan the (.*) for details in the Combine Qty transaction screen.$/,
  async function (route: string) {
    try {
      await CombineQtyTransaction.selectRouteDropdown(route);
      await (await CombineQtyTransaction.getProductText).click();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

When(
  /^Click on the checkbox for the (.*) in the Combine Qty transaction screen.$/,
  async function (routes: string) {
    // browser.debug();
    try {
      console.log(routes);
      browser.pause(2000);
      if (routes.includes(",")) {
        let routeArr = routes.split(",");
        //await browser.debug();
        for (let i = 0; i < routeArr.length; i++) {
          await CombineQtyTransaction.getCheckbox(routeArr[i]);
        }
      } else {
        await CombineQtyTransaction.getCheckbox(routes);
      }
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);
//Enter the quantity <Qty> in the combine qty grid for routecards <RouteCards>.
When(
  /^Enter the quantity (.*) in the combine qty grid for routecards (.*).$/,
  async function (qty: string, routes: string) {
    // browser.debug();
    try {
      console.log(routes);
      browser.pause(2000);
      if (routes.includes(",")) {
        let routeArr = routes.split(",");
        let qtyArr = qty.split(",");
        //await browser.debug();
        console.log(routeArr.length+" length");
        for (let i = 0; i < routeArr.length; i++) {
          if(!qty.includes(',')){
            await CombineQtyTransaction.setInputForRouteCard(routeArr[i],qty)
          }
          else{
            await CombineQtyTransaction.setInputForRouteCard(routeArr[i],qtyArr[i])
          }
        
        }
      } else {
        await CombineQtyTransaction.setInputForRouteCard(routes,qty);
      }
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(
  /^Click on close when empty checkbox in the combine qty grid for for routecards (.*).$/,
  async function (routes: string) {
    // browser.debug();
    try {
      console.log(routes);
      browser.pause(2000);
      if (routes.includes(",")) {
        let routeArr = routes.split(",");
        //await browser.debug();
        for (let i = 0; i < routeArr.length; i++) {
          await CombineQtyTransaction.clickIsOkCheckbox(i);
        }
      } else {
        await CombineQtyTransaction.clickIsOkCheckbox(0);
      }
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(
  /^Click on the submit button in the Combine Qty Transaction.$/,
  async function () {
    // browser.debug();
    try {
      await CombineQtyTransaction.clickSubmitButton();
     // await CombineQtyTransaction.clickOk();

      // await browser.debug();
    } catch (err) {
      console.log(err);
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

// Click on the submit button in the Associate Transaction.
//"At least one entry should be defined" should come as error alert.

Then(
  /^"At least one entry should be defined" should come as error alert.$/,
  async function () {
    try {
      const expectedResult = await (
        await CombineQtyTransaction.getAlert(
          "At least one entry should be defined"
        )
      ).getText();
      expect(expectedResult).includes("At least one entry should be defined");
      await CombineQtyTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
Then(
  /^"Qty to Combine is cannot be greater" should come as error.$/,
  async function () {
    try {
      const expectedResult = await (
        await CombineQtyTransaction.getAlert(
          "Qty to Combine is cannot be greater"
        )
      ).getText();
      expect(expectedResult).includes("Qty to Combine is cannot be greater");
      await CombineQtyTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"Some quantity must be specified" should come as error.$/,
  async function () {
    try {
      const expectedResult = await (
        await CombineQtyTransaction.getAlert(
          "Some quantity must be specified"
        )
      ).getText();
      expect(expectedResult).includes("Some quantity must be specified");
      await CombineQtyTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
//Combined successfully
Then(
  /^"Combined successfully" should confirm the Combine Qty Transaction.$/,
  async function () {
    try {
      const expectedResult = await (
        await CombineQtyTransaction.getAlert(
          "Combined successfully"
        )
      ).getText();
      expect(expectedResult).includes("Combined successfully");
      await CombineQtyTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
//is in Close State." should come as error alert for child RouteCards <RouteCards> in the combine qty screen.
Then(
  /^"is in Close State." should come as error alert for child RouteCards (.*) in the combine qty screen.$/,
  async function (routes: string) {
    try {
      let isClose = false;

      if (routes.includes(",")) {
        console.log('hghhhhh')
        const routeArr = routes.split(",");
       
        for (let i = 0; i < routeArr.length; i++) {

          await CombineQtyTransaction.selectRouteDropdown(routeArr[i]);
          await (await CombineQtyTransaction.getProductText).click();
          const expectedResult = await (
            await CombineQtyTransaction.getAlert("is in Close State.")
          ).getText();
          if (expectedResult.includes("is in Close State.")) {
            isClose = true;
          } else {
            isClose = false;
            break;
          }
          await CombineQtyTransaction.clickOk();
        }
      } else {
        console.log('hhhhhh')
        await CombineQtyTransaction.selectRouteDropdown(routes);
        await (await CombineQtyTransaction.getProductText).click();
        const expectedResult = await (
          await CombineQtyTransaction.getAlert("is in Close State.")
        ).getText();
        if (expectedResult.includes("is in Close State.")) {
          isClose = true;
        } else {
          isClose = false;
        }
        await CombineQtyTransaction.clickOk();
      }

      expect(isClose).to.equal(true);
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);
