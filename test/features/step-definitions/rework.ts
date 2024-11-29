import { Given, Then, When } from "@wdio/cucumber-framework";
import menuPage from "../../page-objects/menuPage.ts";
import { AssertionError, expect } from "chai";
import ReworkTransaction from "../../page-objects/reworkPage.ts";

Given(/^Go to Rework Transaction screen.$/, async function () {
  try {
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.reworkTransaction()).click();
  } catch (err) {
    console.log(err);
  }
});

When(
  /^Scan the route (.*) for rework transaction screen.$/,
  async function (route: string) {
    try {
      await ReworkTransaction.selectRouteDropdown(route);
      await (await ReworkTransaction.getProductText).click();
      // Retrieve the value of the input field
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(
        `Workflow is not in the first step of the workflow ${err.message}`
      );
    }
  }
);

When(
  /^Click on the (.*) in rework transaction screen.$/,
  async function (equipment: string) {
    // browser.debug();
    try {
      await ReworkTransaction.selectEquipmentDropdown(equipment);
    } catch (err) {
      throw new AssertionError(`Equipment select failed ${err.message}`);
    }
  }
);
When(
  /^Click on the (.*) in the rework screen.$/,
  async function (ReworkReason: string) {
    // browser.debug();
    try {
      await ReworkTransaction.selectReworkReason(ReworkReason);
    } catch (err) {
      throw new AssertionError(` ProcessWorkflow select failed ${err.message}`);
    }
  }
);

When(
  /^Enter the parent Route (.*) for rework transaction screen.$/,
  async function (route: string) {
    // browser.debug();
    try {
      await ReworkTransaction.selectRouteDropdownForParentRoutes(route);
      await (await ReworkTransaction.getProductText).click();
    } catch (err) {
      throw new AssertionError(` ProcessWorkflow select failed ${err.message}`);
    }
  }
);

When(
  /^Input the invalid Route (.*) for rework transaction screen.$/,
  async function (route: string) {
    // browser.debug();
    try {
      await ReworkTransaction.selectRouteDropdownForParentRoutes(route);
      await (await ReworkTransaction.getProductText).click();
    } catch (err) {
      throw new AssertionError(` ProcessWorkflow select failed ${err.message}`);
    }
  }
);
When(
  /^Select the (.*) in the rework screen.$/,
  async function (toStep: string) {
    // browser.debug();
    try {
      await ReworkTransaction.selectToReworkStepDropdown(toStep);
    } catch (err) {
      throw new AssertionError(`Equipment select failed ${err.message}`);
    }
  }
);

When(
  /^Clear the rework step if it is present.$/,
  async function () {
    // browser.debug();
    try {
      await ReworkTransaction.clearReworkStepValue();
    } catch (err) {
      throw new AssertionError(`Equipment select failed ${err.message}`);
    }
  }
);
When(/^Click on submit button in the rework screen.$/, async function () {
  // browser.debug();
  try {
    await ReworkTransaction.clickSubmitButton();
  } catch (err) {
    console.log(err);
    throw new AssertionError(`Something failed ${err.message}`);
  }
});

Then(
  /^"moved to rework step" should confirm the rework transaction.$/,
  async function () {
    try {
      const expectedResult = await (
        await ReworkTransaction.getAlert("moved to rework step")
      ).getText();
      expect(expectedResult).includes("moved to rework step");
      await ReworkTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
Then(
  /^"Rework Reason is required" error message should come up in rework screen.$/,
  async function () {
    try {
      const expectedResult = await (
        await ReworkTransaction.getAlert("Rework Reason is required")
      ).getText();
      expect(expectedResult).includes("Rework Reason is required");
      
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"Invalid RouteCard, Please scan valid RouteCard" should come as error message.$/,
  async function () {
    try {
      const expectedResult = await (
        await ReworkTransaction.getAlert("Invalid RouteCard, Please scan valid RouteCard")
      ).getText();
      expect(expectedResult).includes("Invalid RouteCard, Please scan valid RouteCard");
      await ReworkTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"Rework Step is required" should come as error message.$/,
  async function () {
    try {
      const expectedResult = await (
        await ReworkTransaction.getAlert("Rework Step is required")
      ).getText();
      expect(expectedResult).includes("Rework Step is required");
     // await ReworkTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"Rework Step is not configured" should come as error message.$/,
  async function () {
    try {
      const expectedResult = await (
        await ReworkTransaction.getAlert("Rework Step is not configured")
      ).getText();
      expect(expectedResult).includes("Rework Step is not configured");
      await ReworkTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
