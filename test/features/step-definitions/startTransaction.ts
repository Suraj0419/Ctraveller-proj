import { Given, Then, When } from "@wdio/cucumber-framework";
import menuPage from "../../page-objects/menuPage.ts";
import StartTransaction from "../../page-objects/StartTransaction.ts";
import { AssertionError, expect } from "chai";
import reporter from "../../helper/reporter.ts";




Given(/^Navigate to the Start Transaction screen.$/, async function () {
  try {
  
    (await menuPage.MenuButton).click();
    (await menuPage.transactionMenuItem()).click();
    (await StartTransaction.getStartTransactionMenu()).click();
  } catch (err) {
    console.log(err);
  }
});

When(
  /^Fill out the Start Trtansaction screen for (.*) with valid data and submit it.$/,
  async function (product:string) {
    try {
      await StartTransaction.enterRouteCard("ROUTE_"+Date.now());
      await StartTransaction.enterStartQty(2);
      await StartTransaction.enterDepartment("Department 1");
      await StartTransaction.enterLevel("Quality Control");
      await StartTransaction.selectStartReason("Engineering");
      await StartTransaction.selectProductionOrder("ASSEMBLY-001");
      await StartTransaction.selectProductDropdown(product);
      await StartTransaction.selectCustomerDropDown("Dhruv");
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

Then(
  /^I should see a success message confirming the transaction.$/,
  async function () {
    // browser.debug();
    try {
      await StartTransaction.clickSubmitButton();
      const expectedResult = await (
        await StartTransaction.getAlert()
      ).getText();
      console.log(`expected result is ${expectedResult}`);
      await (await StartTransaction.okButton()).click();
      expect(expectedResult).includes("started successfully on");
      reporter.addStep(`Test_${Date.now()}`, "info", `Transaction performed successfully`);
    
    } catch (err) {
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
