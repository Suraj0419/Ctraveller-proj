import { Given, Then, When } from "@wdio/cucumber-framework";

import menuPage from "../../page-objects/menuPage.ts";
import { AssertionError, expect } from "chai";
import DataCollection from "../../page-objects/dataCollectionPage.ts";

Given(/^Go to Data Collection Transaction screen.$/, async function () {
  try {
    await menuPage.MenuButton.click();
    await (await menuPage.transactionMenuItem()).click();
    await (await menuPage.dataCollectionTransaction()).click();
  } catch (err) {
    throw new AssertionError(`Something Wrong Happened ${err.message}`);
    console.log(err);
  }
});

//Scan the <Route> for details in the Release Screen.

When(
  /^Scan the (.*) for Data Collection details in the screen.$/,
  async function (route: string) {
    try {
      await DataCollection.selectRouteDropdown(route);
      await (await DataCollection.getProductText).click();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);


When(
  /^Enter all the required dimensions for data collection.$/,
  async function () {
    try {
      const inputFields = await $$("//input[not(@id='routeCard') and not(@name='filter') and (@type='text' or @type='number' or @type='checkbox')]");
      for (const field of inputFields) {
          const fieldType = await field.getAttribute('type');
          const attributeName=await field.getAttribute('name')
          await DataCollection.clearInput(field)
  
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
                throw new Error(`Field type ${fieldType} is not handled`);
        }
      }
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);



//Fill in the dimensions without clicking isValid checkbox.

When(
  /^Fill in the dimensions without clicking isValid checkbox.$/,
  async function () {
    try {
      const inputFields = await $$("//input[not(@id='routeCard') and not(@name='filter') and (@type='text' or @type='number')]");
      for (const field of inputFields) {
          const fieldType = await field.getAttribute('type');
          const attributeName=await field.getAttribute('name')
  
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
                throw new Error(`Field type ${fieldType} is not handled`);
        }
      }
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

When(
  /^Enter the non configured Data Collection (.*) for Data Collection details in the screen.$/,
  async function (route: string) {
    try {
      await DataCollection.selectRouteDropdownForNonConfiguredDataCollection(route);
      await (await DataCollection.getProductText).click();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
    }
  }
);

When(
  /^Enter the (.*) in Length input field.$/,
  async function (length: string) {
    // browser.debug();
    try {
      await DataCollection.enterLength(length);
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(
  /^Enter the (.*) in Breadth input field.$/,
  async function (breadth: string) {
    // browser.debug();
    try {
      await DataCollection.enterBreadth(breadth);
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(
  /^Enter the (.*) in Weight input field.$/,
  async function (weight: string) {
    // browser.debug();
    try {
      await DataCollection.enterWeight(weight);
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(
  /^Enter the (.*) in Height input field.$/,
  async function (height: string) {
    // browser.debug();
    try {
      await DataCollection.enterHeight(height);
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(
  /^Click on the isValid checkbox in Data Collection screen.$/,
  async function () {
    // browser.debug();
    try {
      await DataCollection.clickCheckbox();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(
  /^Enter Comment (.*) in the data collection screen.$/,
  async function (comment: string) {
    // browser.debug();
    try {
      await DataCollection.enterComments(comment);
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);

When(
  /^Click on submit button in the Data Collection screen.$/,
  async function () {
    // browser.debug();
    try {
      await DataCollection.clickSubmitButton();

      //await browser.debug();
    } catch (err) {
      throw new AssertionError(`Submit failed ${err.message}`);
    }
  }
);
Then(
  /^"Data Collected successfully" should confirm the Data Collection transaction.$/,
  async function () {
    try {
      const expectedResult = await (await DataCollection.getAlert()).getText();
      expect(expectedResult).includes("Data Collected successfully");
      await DataCollection.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
//"Data Collection is not Configured." validation alert should come up.

Then(
  /^"Data Collection is not Configured" validation alert should come up.$/,
  async function () {
    try {
      const expectedResult = await (await DataCollection.getNotDataConfiguredErrorAlert()).getText();
      expect(expectedResult).includes("Data Collection is not Configured");
      await DataCollection.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);


Then(
  /^"is required." should be there as validation error alert in Data Collection screen.$/,
  async function () {
    try {
      const expectedResult = await (await DataCollection.getMandatoryFieldErrorAlert()).getText();
      expect(expectedResult).includes("is required.");
      await DataCollection.clickOk();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

