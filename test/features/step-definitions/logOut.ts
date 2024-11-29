import { Given, Then, When } from "@wdio/cucumber-framework";
import HomePage from "../../page-objects/HomePage.ts";
import { AssertionError, expect } from "chai";
import LoginPage from "../../page-objects/LoginPage.ts";
import menuPage from "../../page-objects/menuPage.ts";
import LoginHelper from "../../page-objects/LoginHelper.ts";


Given(/^Go to Dashboard Page in the Ctraveller App.$/, async function () {
    await LoginPage.open("http://192.168.1.101:8087/");
    await LoginHelper.login(
      LoginPage.usernameInput,
      LoginPage.passwordInput,
      "amogha.s@dhruvts.com",
      "dts@123"
    );
    await(await LoginPage.submitButton).click()
 // await browser.pause(5000)
  // await browser.setTimeout({implicit:15000,pageLoad:15000})
});

When(/^Click on the logout button in the Ctraveller screen.$/, async function () {
    try {
      await menuPage.MenuButton.click();
      await (await menuPage.logOutMenuItem()).click();
    } catch (err) {
      throw new AssertionError(`Something Wrong Happened ${err.message}`);
      console.log(err);
    }
  });
Then(
  /^"Sign in CTraveller" heading on login page should confirm the logout functionality.$/,
  async function () {
    // browser.debug();
    try {
      // await browser.pause(20000);let homeHeading = await HomePage.Heading();
      await HomePage.heading.waitForDisplayed({ timeout: 10000 });
      let loginHeading = await (await LoginPage.getLoginText()).getText();
      expect(loginHeading).to.equal("Sign in CTraveller");
      //await browser.debug();
    } catch (err) {
      console.log(err);
    }
  }
);
