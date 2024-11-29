import { Given, Then, When } from "@wdio/cucumber-framework";
import menuPage from "../../page-objects/menuPage.ts";
import { AssertionError, expect } from "chai";
import RouteMoveTransaction from "../../page-objects/moveInPage.ts";

Given(/^Go to Move Transaction screen.$/, async function () {
  try {
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.moveTransaction()).click();
  } catch (err) {
    console.log(err);
    throw new AssertionError(`Transaction Failed ${err.message}`);
    
  }
});

Then(
  /^Verify that workflow for the (.*) is in (.*) step of the workflow.$/,
  async function (route: string, first: string) {
    try {
      await RouteMoveTransaction.selectRouteDropdown(route);
      await (await RouteMoveTransaction.getProductText).click();
     await (await RouteMoveTransaction.ToStepField).waitForDisplayed({
        timeout:9000
      })
      // Retrieve the value of the input field
      const inputFieldValue =await RouteMoveTransaction.selectToStepDropdown(first)
      console.log(inputFieldValue);
      expect(inputFieldValue).to.equal(first);
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(
        `Workflow is not in the first step of the workflow ${err.message}`
      );
    }
  }
);
When(/^Scan the (.*) in the move screen.$/, async function (route: string) {
  try {
    await RouteMoveTransaction.selectRouteDropdown(route);
    await (await RouteMoveTransaction.getProductText).click();
    await browser.pause(6000);
    const isExisting = await(await RouteMoveTransaction.accordion()).isExisting();
    if(isExisting){
    await(await RouteMoveTransaction.accordion()).click();
   const inputFields = await $$('div.Mui-expanded input[type="text"], div.Mui-expanded input[type="number"], div.Mui-expanded input[type="checkbox"]');
   console.log(inputFields.length);
    for (const field of inputFields) {
        const fieldType = await field.getAttribute('type');
        const attributeName=await field.getAttribute('name')
        console.log(fieldType);
        // Apply your logic based on fieldName or type
         //await field.clearValue();
         console.log(attributeName+" attrribute name")
         if(fieldType!=null || attributeName!=null){
        switch (fieldType) {
          case 'text':
           console.log(attributeName);
          const xpath = `//input[@name='${attributeName}']/ancestor::div[contains(@class, 'MuiFormControl-root')]/preceding-sibling::div/div[contains(@style, 'justify-content: flex-end') and contains(@style, 'padding-right: 5px')]`
        const value=await(await $(xpath)).getText();
        if(parseInt(value)){
          await field.setValue(value)
        }
        break;
          case 'checkbox':
             await field.click();
              break;
          case 'number':
            console.log(attributeName);
          const xpat = `//input[@name='${attributeName}']/ancestor::div[contains(@class, 'MuiFormControl-root')]/preceding-sibling::div/div[contains(@style, 'justify-content: flex-end') and contains(@style, 'padding-right: 5px')]`
          const val=await(await $(xpat)).getText();
          if(parseInt(val)){
            await field.setValue(val)
          }
          break;
          default:
            console.log('Error......')
              throw new Error(`Field type ${fieldType} is not handled`);
      }
    }
    }

    }
    // Retrieve the value of the input field
  } catch (err) {
    console.log(`Your error message is ${err}`);
    throw new AssertionError(
      `Workflow is not in the first step of the workflow ${err.message}`
    );
  }
});

Then(
  /^Keep moving RouteCards until "End of Processflow.Cannot move further" come as error alert for (.*).$/,
  async function (route: string) {
    try {
    let expectedResult = "";
      while (
        !expectedResult.includes("End of Processflow.Cannot move further")
      ) {
        await RouteMoveTransaction.selectRouteDropdown(route);
        await (await RouteMoveTransaction.getProductText).click();
        const isExisting = await(await RouteMoveTransaction.accordion()).isExisting();
        if(isExisting){
          await(await RouteMoveTransaction.accordion()).click();
          const inputFields = await $$('div.Mui-expanded input[type="text"], div.Mui-expanded input[type="number"], div.Mui-expanded input[type="checkbox"]');
          console.log(inputFields.length);
           for (const field of inputFields) {
               const fieldType = await field.getAttribute('type');
               const attributeName=await field.getAttribute('name')
               console.log(fieldType+" text format");
               console.log(attributeName+" attribute name format");
               // Apply your logic based on fieldName or type
                //await field.clearValue();
              if(attributeName!=null){
               switch (fieldType) {
                 case 'text':
               
                 const xpath = `//input[@name='${attributeName}']/ancestor::div[contains(@class, 'MuiFormControl-root')]/preceding-sibling::div/div[contains(@style, 'justify-content: flex-end') and contains(@style, 'padding-right: 5px')]`
               const value=await(await $(xpath)).getText();
               if(parseInt(value)){
                 await field.setValue(value)
               }
               break;
                 case 'checkbox':
                    await field.click();
                     break;
                 case 'number':
                     
                 const xpat = `//input[@name='${attributeName}']/ancestor::div[contains(@class, 'MuiFormControl-root')]/preceding-sibling::div/div[contains(@style, 'justify-content: flex-end') and contains(@style, 'padding-right: 5px')]`
                 const val=await(await $(xpat)).getText();
                 if(parseInt(val)){
                   await field.setValue(val)
                 }
                 break;
                 default:
                   console.log('Error......')
                     throw new Error(`Field type ${fieldType} is not handled`);
             }
            }
           }
    
        }
        await RouteMoveTransaction.clickSubmitButton();
        expectedResult = await (
          await RouteMoveTransaction.getAlertForMovingToLastStep()
        ).getText();
        await RouteMoveTransaction.clickOk();
      }

      expect(expectedResult).equal('End of Processflow.Cannot move further')

      // Retrieve the value of the input field
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(
        `Workflow is not in the first step of the workflow ${err.message}`
      );
    }
  }
);

When(/^Click on the Move menu in the sidebar.$/, async function () {
  try {
    await (await menuPage.moveTransaction()).click();
    //RouteCard 'ROUTE_001' started successfully on '05-04-2024' at '01:49:22 PM' by 'Amogha S'
  } catch (err) {
    console.log(`Your error message is ${err}`);
    throw new AssertionError(`Transaction Failed ${err.message}`);
  }
});

When(
  /^Click on the (.*) in the move dropdown.$/,
  async function (toStep: string) {
    try {
      await RouteMoveTransaction.selectToStepDropdown(toStep);
      //RouteCard 'ROUTE_001' started successfully on '05-04-2024' at '01:49:22 PM' by 'Amogha S'
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

When(
  /^Select the alternate path (.*) in the move dropdown.$/,
  async function (toStep: string) {
    try {
     await RouteMoveTransaction.clickOnAlternatePath(toStep)
    console.log(toStep)
      //RouteCard 'ROUTE_001' started successfully on '05-04-2024' at '01:49:22 PM' by 'Amogha S'
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

/* When(/^Click on the (.*) for the route.$/, async function (equipment: string) {
  // browser.debug();
  try {
    await RouteMoveTransaction.selectEquipmentDropdown(equipment);
  } catch (err) {
    throw new AssertionError(`Equipment select failed ${err.message}`);
    
  }
}); */
When(/^Click on submit button in the Move screen.$/, async function () {
  // browser.debug();
  try {
    await RouteMoveTransaction.clickSubmitButton();
  } catch (err) {
    console.log(err);
    throw new AssertionError(`Something failed ${err.message}`);
  }
});

Then(/^"moved to" should confirm the transaction.$/, async function () {
  try {
    const expectedResult = await (
      await RouteMoveTransaction.getAlert('moved to')
    ).getText();
    expect(expectedResult).includes("moved to");
    await RouteMoveTransaction.clickOk();
  } catch (err) {
    console.log(`Your error message is ${err}`);
    throw new AssertionError(`Transaction Failed ${err.message}`);
  }
});

//The success move message should have <ToStep> indicating that route has moved into Alternate path.

Then(
  /^The success move message should have (.*) indicating that route has moved into Alternate path.$/,
  async function (toStep) {
    try {
      const expectedResult = await (
        await RouteMoveTransaction.getAlert('moved to')
      ).getText();
      const stepStr = `'${toStep}'`;
      console.log(stepStr);
      expect(expectedResult).includes(stepStr);
      await RouteMoveTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"End of Processflow.Cannot move further" must come as error popup.$/,
  async function () {
    try {
      const expectedResult = await (
        await RouteMoveTransaction.getAlert('End of Processflow.Cannot move further')
      ).getText();
      expect(expectedResult).includes('End of Processflow.Cannot move further');
      await RouteMoveTransaction.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
//Keep moving RouteCards until "End of Processflow.Cannot move further" come as error alert.
