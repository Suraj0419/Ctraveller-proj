import { Given, Then } from "@wdio/cucumber-framework";
import { AssertionError, expect } from "chai";
import StartTransaction from "../../page-objects/StartTransaction.ts";
import { Database } from "../../database/database.ts";
import menuPage from "../../page-objects/menuPage.ts";

const dbConfig = {
  user: "sa",
  password: "dts@123",
  server: "192.168.1.101",
  database: "CTraveller",
  options: {
    encrypt: false, 
  },
};

const database = new Database(dbConfig);

Given(
  /^Perfom RouteCard Start Transaction with (.*),(.*),(.*),(.*),(.*),(.*).$/,
  async function (Route, Level, StartReason,Department, Product, ProcessFlow) {
    try {
      await menuPage.MenuButton.click();
      await (await menuPage.transactionMenuItem()).click();
      await (await StartTransaction.getStartTransactionMenu()).click();
      await StartTransaction.enterRouteCard(Route);
      await StartTransaction.enterLevel(Level);
      await StartTransaction.selectStartReason(StartReason);
      await StartTransaction.enterDepartment(Department);
      await StartTransaction.selectProductDropdown(Product);
      await StartTransaction.selectProcessFlowDropdown(ProcessFlow);
      await StartTransaction.clickSubmitButton();
    } catch (err) {
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
      console.log(err);
    }
  }
);
//RouteCardName
Then(/^Transaction should be reflected in the database for the (.*).$/, async function (route:string) {
  try {
    await database.connect();
    const query = `SELECT * FROM Routecard WHERE RouteCardName='${route}'`
    const results = await database.query(query);
    console.log(results[0]);
    expect(results.length).equal(1);
  } catch (err) {
    console.log(`Your error message is ${err}`);
    throw new AssertionError(`Transaction Failed ${err.message}`);
  } finally {
    await database.disconnect();
  }
});
