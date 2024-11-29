import { Given, Then, When } from "@wdio/cucumber-framework";
import menuPage from "../../page-objects/menuPage.ts";
import StartTransaction from "../../page-objects/StartTransaction.ts";
import { AssertionError, expect } from "chai";
import reporter from "../../helper/reporter.ts";

Given(/^Navigate to the Start Transaction screen.$/, async function () {
  try {
  //  await browser.pause(30000)
    await (await menuPage.MenuButton).click();
 //   await browser.pause(9000)
    await (await menuPage.transactionMenuItem()).click();
 //   await browser.pause(9000)
    await (await StartTransaction.getStartTransactionMenu()).click();
  //  await browser.pause(15000)
  } catch (err) {
    console.log(`Your error message is ${err}`);
    throw new AssertionError(`Transaction Failed ${err.message}`);
  }
});

When(
  /^Enter (.*) routecard in the route card name input.$/,
  async function (route: string) {
    try {
      await StartTransaction.clickResetButton();
      await StartTransaction.enterRouteCard(route);
      //RouteCard 'ROUTE_001' started successfully on '05-04-2024' at '01:49:22 PM' by 'Amogha S'
    } catch (err) {
     
      console.log(`Your error message is ${err}`);
    throw new AssertionError(`Something went wrong ${err.message}`);
    }
  }
);

When(
  /^Select (.*) in the Department dropdown.$/,
  async function (department: string) {
    try {
      await StartTransaction.enterDepartment(department);
      //RouteCard 'ROUTE_001' started successfully on '05-04-2024' at '01:49:22 PM' by 'Amogha S'
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something went wrong ${err.message}`);
    }
  }
);
When(
  /^Select (.*) in the StartReason dropdown.$/,
  async function (startReason: string) {
    try {
      await StartTransaction.selectStartReason(startReason);
      //RouteCard 'ROUTE_001' started successfully on '05-04-2024' at '01:49:22 PM' by 'Amogha S'
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something went wrong ${err.message}`);
    }
  }
);

When(/^Select (.*) in the level dropdown.$/, async function (level: string) {
  try {
    await StartTransaction.enterLevel(level);
    //RouteCard 'ROUTE_001' started successfully on '05-04-2024' at '01:49:22 PM' by 'Amogha S'
  } catch (err) {
    console.log(`Your error message is ${err}`);
    throw new AssertionError(`Something went wrong ${err.message}`);
  }
});

When(
  /^Select (.*) in the product dropdown.$/,
  async function (product: string) {
    try {
      await StartTransaction.clickProductDropdown();
      console.log('product dropdown clicked')
      const productStrArr=product.split(':');
      await StartTransaction.clickProductRevision(productStrArr[0])
      await StartTransaction.clickProductInnerRevision(product)
      //RouteCard 'ROUTE_001' started successfully on '05-04-2024' at '01:49:22 PM' by 'Amogha S'
      
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something went wrong ${err.message}`);
    }
  }
);




When(
  /^Select (.*) in the Processflow dropdown.$/,
  async function (processFlow: string) {
    try {
    //  await browser.debug();
      console.log("Before clicking ProcessFlow dropdown");
      await StartTransaction.clickProcessFlowDropdown();
      console.log("After clicking ProcessFlow dropdown");
        const processFlowStrArr=processFlow.split(':');
      
        await StartTransaction.clickProductRevision(processFlowStrArr[0])
        console.log(`Before clicking product inner revision: ${processFlow}`);
        await StartTransaction.clickProductInnerRevision(processFlow);
        console.log(`After clicking product inner revision: ${processFlow}`);
        console.log("2");
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something went wrong ${err.message}`);
    }
  }
);
When(
  /^Select (.*) in the production order dropdown.$/,
  async function (productionOrder: string) {
    try {
      await StartTransaction.selectProductionOrder(productionOrder);
      await browser.pause(5000);
      //RouteCard 'ROUTE_001' started successfully on '05-04-2024' at '01:49:22 PM' by 'Amogha S'
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something went wrong ${err.message}`);
    }
  }
);
When(
  /^In the Route Start Transaction screen press on the submit button.$/,
  async function () {
    try {
      await StartTransaction.clickSubmitButton();
    //  await (await StartTransaction.okButton()).click();
      //RouteCard 'ROUTE_001' started successfully on '05-04-2024' at '01:49:22 PM' by 'Amogha S'
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something went wrong ${err.message}`);
    }
  }
);
When(
  /^Click on the submit button in the Route Start Transaction screen.$/,
  async function () {
    try {
      await StartTransaction.clickSubmitButton();
      //RouteCard 'ROUTE_001' started successfully on '05-04-2024' at '01:49:22 PM' by 'Amogha S'
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something went wrong ${err.message}`);
    }
  }
);

When(
  /^Click on the numbering rule checkbox in the route start screen.$/,
  async function () {
    try {
      await StartTransaction.clickNumberingRule();
      //RouteCard 'ROUTE_001' started successfully on '05-04-2024' at '01:49:22 PM' by 'Amogha S'
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something went wrong ${err.message}`);
    }
  }
);

When(
  /^Fill out the Start Trtansaction screen for (.*) with valid data and submit it.$/,
  async function (product: string) {
    try {
      await StartTransaction.enterRouteCard("ROUTE_" + Date.now());
      await StartTransaction.enterStartQty(2);
      await StartTransaction.enterDepartment("Department 1");
      await StartTransaction.enterLevel("Quality Control");
      await StartTransaction.selectStartReason("Engineering");
      await StartTransaction.selectProductionOrder("ASSEMBLY-001");
      await StartTransaction.selectProductDropdown(product);
      await StartTransaction.selectCustomerDropDown("Dhruv1");
      await StartTransaction.selectFactoryDropdown("FactoryA");
      await StartTransaction.selectProcessFlowDropdown("Collection:A");
      await StartTransaction.selectLocationDropdown("LocationA");
      await StartTransaction.selectUOMDropdown("EACH");
      await StartTransaction.selectSupplierDropdown("Bottels");
      await StartTransaction.enterDueDate("15/04/2024 00:00:00");
      await StartTransaction.enterExpirationDate("30/04/2024 00:00:00");

      //RouteCard 'ROUTE_001' started successfully on '05-04-2024' at '01:49:22 PM' by 'Amogha S'
    } catch (err) {
      console.log(`Your error message is ${err}`);
    }
  }
);
//Select <Factory> in the factory dropdown.

When(
  /^Select (.*) in the factory dropdown.$/,
  async function (factory: string) {
    try {
      console.log(factory)
    
      await StartTransaction.selectFactoryDropdown(factory);
      console.log('gggggggg')
     // await browser.debug();
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something went wrong ${err.message}`);
    }
  }
);

//Select <Customer> in the customer dropdown.

When(
  /^Select (.*) in the customer dropdown.$/,
  async function (customer: string) {
    try {
      await StartTransaction.selectCustomerDropDown(customer);
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something went wrong ${err.message}`);
    }
  }
);
When(
  /^Select (.*) in the location dropdown.$/,
  async function (location: string) {
    try {
      await StartTransaction.selectLocationDropdown(location);
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something went wrong ${err.message}`);
    }
  }
);

When(
  /^Select (.*) in the Supplier item dropdown.$/,
  async function (supplier: string) {
    try {
      await StartTransaction.selectSupplierDropdown(supplier);
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something went wrong ${err.message}`);
    }
  }
);
When(
  /^Enter the UOM (.*) field  in Route Start Transaction screen.$/,
  async function (uom: string) {
    try {
      await StartTransaction.selectUOMDropdown(uom);
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something went wrong ${err.message}`);
    }
  }
);

When(
  /^Enter (.*) routecard in the qty input control.$/,
  async function (qty: string) {
    try {
      const num=Number(qty);
      await StartTransaction.enterStartQty(num);
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something went wrong ${err.message}`);
    }
  }
);

When(
  /^Enter the ExpirationDate (.*) field  in Route Start Transaction screen.$/,
  async function (expDate: string) {
    try {
      await StartTransaction.enterExpirationDate(expDate);
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something went wrong ${err.message}`);
    }
  }
);

When(
  /^Enter the Duedate (.*) field  in Route Start Transaction screen.$/,
  async function (dueDate: string) {
    try {
      await StartTransaction.enterDueDate(dueDate);
      await browser.pause(2000);
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Something went wrong ${err.message}`);
    }
  }
);

//Enter <qty> routecard in the qty input control.

Then(
  /^I should see a success message confirming the transaction.$/,
  async function () {
    // browser.debug();
    try {
      await StartTransaction.clickSubmitButton();
      const expectedResult = await (
        await StartTransaction.getAlert("started successfully on")
      ).getText();
      console.log(`expected result is ${expectedResult}`);
     
      expect(expectedResult).includes("started successfully on");
      await StartTransaction.clickOk();
      reporter.addStep(
        `Test_${Date.now()}`,
        "info",
        `Transaction performed successfully`
      );
    } catch (err) {
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

//"started successfully" message should  confirm the start transaction.

Then(
  /^"started successfully" message should  confirm the start transaction.$/,
  async function () {
    // browser.debug();
    try {
      const expectedResult = await (
        await StartTransaction.getAlert("started successfully")
      ).getText();
      console.log(`expected result is ${expectedResult}`);
    
      expect(expectedResult).includes("started successfully on");
      await StartTransaction.clickOk();
    } catch (err) {
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"Processflow not configured to start RouteCard." message should come as error alert.$/,
  async function () {
    // browser.debug();
    try {
      const expectedResult = await (
        await StartTransaction.getAlert(
          "Processflow not configured to start RouteCard."
        )
      ).getText();
      console.log(`expected result is ${expectedResult}`);
      expect(expectedResult).includes(
        "Processflow not configured to start RouteCard."
      ); 
      await StartTransaction.clickOk();

    } catch (err) {
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
//"RouteCard already exists." message should  come as error.
Then(
  /^"Product is not configured in selected Production Order." message should come as error.$/,
  async function () {
    // browser.debug();
    try {
      const expectedResult = await (
        await StartTransaction.getAlert("Product is not configured in selected Production Order.")
      ).getText();
      console.log(`expected result is ${expectedResult}`);
      expect(expectedResult).includes("Product is not configured in selected Production Order.");
      await StartTransaction.clickOk();
    } catch (err) {
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"RouteCard already exists." message should  come as error.$/,
  async function () {
    // browser.debug();
    try {
      const expectedResult = await (
        await StartTransaction.getAlert("RouteCard already exists.")
      ).getText();
      console.log(`expected result is ${expectedResult}`);
      expect(expectedResult).includes("RouteCard already exists.");
      await StartTransaction.clickOk();
    } catch (err) {
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"Processflow not configured to start RouteCard." message should come as error.$/,
  async function () {
    // browser.debug();
    try {
      const expectedResult = await (
        await StartTransaction.getAlert(
          "Processflow not configured to start RouteCard."
        )
      ).getText();
      console.log(`expected result is ${expectedResult}`);
      expect(expectedResult).includes(
        "Processflow not configured to start RouteCard."
      );
      await StartTransaction.clickOk();
    } catch (err) {
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

// "Numbering Rule is not configured." message should come as error.

Then(
  /^"Numbering Rule is not configured." message should come as error.$/,
  async function () {
    // browser.debug();
    try {
      const expectedResult = await (
        await StartTransaction.getAlert("Numbering Rule is not configured.")
      ).getText();
      console.log(`expected result is ${expectedResult}`);
      expect(expectedResult).includes("Numbering Rule is not configured.");
      await StartTransaction.clickOk();
    } catch (err) {
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(/^The input routecard should be disabled.$/, async function () {
  // browser.debug();
  try {
    let isDisabled = false;
    if (StartTransaction.getDisabledInput()) {
      isDisabled = true;
    } else {
      isDisabled = false;
    }
    expect(isDisabled).equal(true);
  } catch (err) {
    throw new AssertionError(`Transaction Failed ${err.message}`);
  }
});

Then(/^The success message should show autogenerated lot.$/, async function () {
  // browser.debug();
  try {
    const expectedResult = await (
      await StartTransaction.getAlert("started successfully on")
    ).getText();
    console.log(`expected result is ${expectedResult}`);
    const lot = StartTransaction.getFirstQuotedString(expectedResult);
    expect(lot.length).greaterThanOrEqual(1);
    await StartTransaction.clickOk();
  } catch (err) {
    throw new AssertionError(`Transaction Failed ${err.message}`);
  }
});

//"Please select valid Production Order" message should come as error.
Then(
  /^"Please select active Product" message should come as error.$/,
  async function () {
    // browser.debug();
    try {
      const expectedResult = await (
        await StartTransaction.getAlert(
          "Please select active Product"
        )
      ).getText();
      console.log(`expected result is ${expectedResult}`);
      expect(expectedResult).includes(
        "Please select active Product"
      )
      await StartTransaction.clickOk();
    } catch (err) {
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"is Completed.Please select valid Production Order" message should come as error.$/,
  async function () {
    // browser.debug();
    try {
      const expectedResult = await (
        await StartTransaction.getAlert(
          "Please select valid Production Order"
        )
      ).getText();
      console.log(`expected result is ${expectedResult}`);
      console.log(expectedResult.includes('is Completed. Please select valid Production Order'));
     // await (await StartTransaction.okButton()).click();
      expect(expectedResult).includes( "is Completed. Please select valid Production Order");
      await StartTransaction.clickOk();
    } catch (err) {
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
//"is Cancelled. Please select valid Production Order" should come as error popup.


Then(
  /^"is Cancelled. Please select valid Production Order" should come as error popup.$/,
  async function () {
    // browser.debug();
    try {
      const expectedResult = await (
        await StartTransaction.getAlert(
          "Please select valid Production Order"
        )
      ).getText();
      console.log(`expected result is ${expectedResult}`);
      console.log(expectedResult.includes('is Cancelled. Please select valid Production Order'));
     // await (await StartTransaction.okButton()).click();
      expect(expectedResult).includes( "is Cancelled. Please select valid Production Order");
      await StartTransaction.clickOk();
    } catch (err) {
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
//"Please select active Processflow" should come as error popup.

Then(
  /^"Please select active Processflow" should come as error popup.$/,
  async function () {
    // browser.debug();
    try {
      const expectedResult = await (
        await StartTransaction.getAlert(
          "Please select active Processflow"
        )
      ).getText();
      console.log(`expected result is ${expectedResult}`);
    
     // await (await StartTransaction.okButton()).click();
      expect(expectedResult).includes("Please select active Processflow");
      await StartTransaction.clickOk();
    } catch (err) {
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"Due Date cannot be greater than Expiration Date" message should come as error.$/,
  async function () {
    // browser.debug();
    try {
      const expectedResult = await (
        await StartTransaction.getAlert(
          "Due Date cannot be greater than Expiration Date"
        )
      ).getText();
      console.log(`expected result is ${expectedResult}`);
    
     // await (await StartTransaction.okButton()).click();
      expect(expectedResult).includes("Due Date cannot be greater than Expiration Date");
      await StartTransaction.clickOk();
    } catch (err) {
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

//"Qty cannot be negative" message should  come as error.

Then(
  /^The Invalid QTy which is in special charcaters should not be reflected in the input textbox.$/,
  async function () {
    // browser.debug();
    let input= await StartTransaction.getStartQty();
    expect(input).equal('')
    try {
    } catch (err) {
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"Invalid Due Date." message should come as error.$/,
  async function () {
    // browser.debug();
    try {
      const expectedResult = await (
        await StartTransaction.getAlert(
          "Invalid Due Date."
        )
      ).getText();
      console.log(`expected result is ${expectedResult}`);
    
     // await (await StartTransaction.okButton()).click();
      expect(expectedResult).includes("Invalid Due Date.");
      await StartTransaction.clickOk();
    } catch (err) {
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

Then(
  /^"Invalid Expiration Date." message should come as error.$/,
  async function () {
    // browser.debug();
    try {
      const expectedResult = await (
        await StartTransaction.getAlert(
          "Invalid Expiration Date."
        )
      ).getText();
      console.log(`expected result is ${expectedResult}`);
    
     // await (await StartTransaction.okButton()).click();
      expect(expectedResult).includes("Invalid Expiration Date.");
      await StartTransaction.clickOk();
    } catch (err) {
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);

