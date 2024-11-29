import {  Given, Then, When } from "@wdio/cucumber-framework";
import menuPage from "../../page-objects/menuPage.ts";
import { AssertionError, expect } from "chai";
import MoveNonStandardTransaction from "../../page-objects/moveNonStandardTransaction.ts";



Given(/^Go to Move Non Standard Transaction screen.$/, async function () {
  try {
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.moveNonStandardTransaction()).click();
  } catch (err) {
    console.log(err);
  }
});

When(
  /^Scan the route (.*) for move non standard transaction.$/,
  async function (route: string) {
    try {
      await MoveNonStandardTransaction.selectRouteDropdown(route);
      await (await MoveNonStandardTransaction.getProductText).click();
      // Retrieve the value of the input field
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(
        `Workflow is not in the first step of the workflow ${err.message}`
      );
    }
  }
);

When(/^Click on the (.*) for the route in move non standard screen.$/, async function (equipment: string) {
  // browser.debug();
  try {
    await MoveNonStandardTransaction.selectEquipmentDropdown(equipment);
  } catch (err) {
    throw new AssertionError(`Equipment select failed ${err.message}`);
  }
});
When(/^Click on the ProcessWorkflow (.*) in the move non standard screen.$/, async function (processflow: string) {
    // browser.debug();
    try {
      await MoveNonStandardTransaction.clickProcessFlowDropdown();
      //  const processFlowStrArr=processFlow.split(':');
        
       
          const processFlowStrArr=processflow.split(':');
          await MoveNonStandardTransaction.clickProductRevision(processFlowStrArr[0])
          await MoveNonStandardTransaction.clickProductInnerRevision(processflow)
    } catch (err) {
      throw new AssertionError(` ProcessWorkflow select failed ${err.message}`);
    }
  });

  When(/^Click on the (.*) processflow Step in the move non standard screen.$/, async function (toStep: string) {
    // browser.debug();
    try {
      await MoveNonStandardTransaction.selectToStepDropdown(toStep);
    } catch (err) {
      throw new AssertionError(`Equipment select failed ${err.message}`);
    }
  });
When(/^Click on submit button in the Move Non Standard screen.$/, async function () {
  // browser.debug();
  try {
    await MoveNonStandardTransaction.clickSubmitButton();
  } catch (err) {
    console.log(err);
    throw new AssertionError(`Something failed ${err.message}`);
  }
});

Then(
  /^"moved to" should confirm the transaction in the move non standard screen.$/,
  async function () {
    try {
      const expectedResult = await (
        await MoveNonStandardTransaction.getAlert('moved to')
      ).getText();
      expect(expectedResult).includes('moved to');
     await MoveNonStandardTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"is in same step as selected" should come as error alert.$/,
  async function () {
    try {
      const expectedResult = await (
        await MoveNonStandardTransaction.getAlert('is in same step as selected')
      ).getText();
      expect(expectedResult).includes('is in same step as selected');
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

When(
  /^Select (.*) in the ProcessFlow dropdown.$/,
  async function (processFlow: string) {
    try {
      await MoveNonStandardTransaction.clickProcessFlowDropdown();
    //  const processFlowStrArr=processFlow.split(':');
      
     
        const processFlowStrArr=processFlow.split(':');
        await MoveNonStandardTransaction.clickProductRevision(processFlowStrArr[0])
        await MoveNonStandardTransaction.clickProductInnerRevision(processFlow)
    
    
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something went wrong ${err.message}`);
    }
  }
);


