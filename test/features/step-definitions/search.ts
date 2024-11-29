import { Given, Then, When } from "@wdio/cucumber-framework";
import menuPage from "../../page-objects/menuPage.ts";
import searchPage from "../../page-objects/searchPage.ts";
import { AssertionError, expect } from "chai";

Given(/^Go to Transaction sub menu.$/, async function () {
  // browser.debug();
  try {
    // await browser.pause(20000);let homeHeading = await HomePage.Heading();
    (await menuPage.MenuButton).click();
    (await menuPage.transactionMenuItem()).click();
  } catch (err) {
    console.log(err);
  }
});

When(
  /^Enter the value (.*) to Search in input box in sidebar.$/,
  async function (searchString: string) {
    // browser.debug();
    try {
      (await menuPage.transactionMenuItem()).click();
      await searchPage.enterSearchValue(searchString);
    } catch (err) {
      console.log(err);
    }
  }
);
//I should see one or more menu links matching the search <Value> value.
Then(
  /^I should see one or more menu links matching the search (.*) value.$/,
  async function (searchValue: string) {
    try {
      const expectedResult = (await searchPage.getSearchLinks(searchValue))
        .length;
      console.log(expectedResult);
      expect(expectedResult).greaterThanOrEqual(1);
    } catch (err) {
      console.log(`Your error message is ${err}`);
      throw new AssertionError(`Transaction Failed ${err.message}`);
    }
  }
);
