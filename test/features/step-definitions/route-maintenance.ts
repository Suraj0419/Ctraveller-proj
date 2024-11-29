import { Given, Then, When } from "@wdio/cucumber-framework";
import menuPage from "../../page-objects/menuPage.ts";
import RouteCardTransaction from "../../page-objects/routeMaintenanceTransactionPage.ts";
import { AssertionError, expect } from "chai";
import routeMaintenanceTransactionPage from "../../page-objects/routeMaintenanceTransactionPage.ts";

Given(
  /^Navigate to the RouteCard Maintenance Transaction screen.$/,
  async function () {
    try {
      await (await menuPage.MenuButton).click();
      await (await menuPage.transactionMenuItem()).click();
      await (await menuPage.routeCardMaintenanceTransaction()).click();
    } catch (err) {
      console.log(err);
    }
  }
);

Then(
  /^Scan the (.*) for details in the Maintenance Transaction screen.$/,
  async function (route: string) {
    try {
      // await browser.pause(20000)
      await RouteCardTransaction.selectRouteDropdown(route);
      await (await RouteCardTransaction.getProductText).click();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

When(
  /^Select the Department (.*) field in the Maintenance transaction screen.$/,
  async function (department: string) {
    // browser.debug();
    try {
      await RouteCardTransaction.enterDepartment(department);
    } catch (err) {
      throw new AssertionError(`Hold Reason select failed ${err.message}`);
    }
  }
);

When(
  /^Select the Level (.*) field  in the the Maintenance transaction screen.$/,
  async function (level: string) {
    // browser.debug();
    try {
      await RouteCardTransaction.enterLevel(level);
    } catch (err) {
      throw new AssertionError(`Hold Reason select failed ${err.message}`);
    }
  }
);
When(
  /^Select the Start Reason (.*) field  in the the Maintenance transaction screen.$/,
  async function (startReason: string) {
    // browser.debug();
    try {
      await RouteCardTransaction.selectStartReason(startReason);
    } catch (err) {
      throw new AssertionError(`Hold Reason select failed ${err.message}`);
    }
  }
);

When(
  /^Select the Production Order (.*) field  in the the Maintenance transaction screen.$/,
  async function (productionOrder: string) {
    // browser.debug();
    try {
      await RouteCardTransaction.selectProductionOrder(productionOrder);
    } catch (err) {
      throw new AssertionError(`Hold Reason select failed ${err.message}`);
    }
  }
);
When(
  /^Select the Factory (.*) field  in the the Maintenance transaction screen.$/,
  async function (factory: string) {
    // browser.debug();
    try {
      await RouteCardTransaction.selectFactoryDropdown(factory);
    } catch (err) {
      throw new AssertionError(`Hold Reason select failed ${err.message}`);
    }
  }
);

When(
  /^Select the Product (.*) field  in the the Maintenance transaction screen.$/,
  async function (product: string) {
    // browser.debug();
    try {
      const productStrArr = product.split(":");
      await RouteCardTransaction.clickProductDropdown();
      await RouteCardTransaction.clickProductRevision(productStrArr[0]);
      await RouteCardTransaction.clickProductInnerRevision(product);
    } catch (err) {
      throw new AssertionError(`Hold Reason select failed ${err.message}`);
    }
  }
);

When(
  /^Select the UOM (.*) field  in the the Maintenance transaction screen.$/,
  async function (uom: string) {
    // browser.debug();
    try {
      await RouteCardTransaction.selectUOMDropdown(uom);
    } catch (err) {
      throw new AssertionError(`Hold Reason select failed ${err.message}`);
    }
  }
);

When(
  /^Select the Duedate (.*) field  in the the Maintenance transaction screen.$/,
  async function (dueDate: string) {
    // browser.debug();
    try {
      await RouteCardTransaction.enterDueDate(dueDate);
      await browser.pause(2000);
    } catch (err) {
      throw new AssertionError(`Hold Reason select failed ${err.message}`);
    }
  }
);

When(
  /^Clear the Level field  in the the Maintenance transaction screen.$/,
  async function () {
    // browser.debug();
    try {
      await(await RouteCardTransaction.getLevelDropDown()).click();
    const btn=  await RouteCardTransaction.getClearButtonByLabel('Level');
    await btn.click();
    } catch (err) {
      throw new AssertionError(`error ${err.message}`);
    }
  }
);
When(
  /^Clear the Start Reason field  in the the Maintenance transaction screen.$/,
  async function () {
    // browser.debug();
    try {
      await(await RouteCardTransaction.startReasonDropdown).click();
      const btn=  await RouteCardTransaction.getClearButtonByLabel('Start Reason');
      await btn.click();
    } catch (err) {
      throw new AssertionError(`Hold Reason select failed ${err.message}`);
    }
  }
);

When(
  /^Clear the Department field in the Maintenance transaction screen.$/,
  async function () {
    // browser.debug();
    try {
      await RouteCardTransaction.clearDeparment();
    } catch (err) {
      throw new AssertionError(`Hold Reason select failed ${err.message}`);
    }
  }
);

// When  Clear the Level field  in the the Maintenance transaction screen.
// When  Clear the Start Reason field  in the the Maintenance transaction screen.

When(
  /^Select the ExpirationDate (.*) field  in the the Maintenance transaction screen.$/,
  async function (expDate: string) {
    // browser.debug();
    try {
      await RouteCardTransaction.enterExpirationDate(expDate);
      //await browser.debug();
    } catch (err) {
      throw new AssertionError(`Hold Reason select failed ${err.message}`);
    }
  }
);

When(
  /^Click on the submit button in Route Maintenance Transaction screen.$/,
  async function () {
    await RouteCardTransaction.clickSubmitButton();
  }
);
Then(
  /^"RouteCard Maintenance successful" message should  confirming the route maintenance transaction.$/,
  async function () {
    try {
      const expectedResult = await (
        await RouteCardTransaction.getAlert()
      ).getText();
      expect(expectedResult).includes("RouteCard Maintenance successful");
      await RouteCardTransaction.clickOk();
      
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  "the following warning messages should be displayed:",
  async function (dataTable) {
    const warnings = dataTable.raw().flat();
    for (const warning of warnings) {
      console.log(warning)
      const warningElement =
        await routeMaintenanceTransactionPage.getWarningMessageElement(warning);
      expect(await warningElement.isDisplayed()).to.be.true;
    }
  }
);
