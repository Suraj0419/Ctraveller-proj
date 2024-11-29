import { Given, Then, When } from "@wdio/cucumber-framework";
import HomePage from "../../page-objects/HomePage.ts";
import { expect } from "chai";
import LoginPage from "../../page-objects/LoginPage.ts";
import LoginHelper from "../../page-objects/LoginHelper.ts";




Given(/^Go to Ctraveller Login Page$/, async function () {
 
  await LoginPage.open("http://192.168.1.101:8087/");
 // await browser.setTimeout({implicit:15000,pageLoad:15000})
});

When(/^Login with (.*) and (.*).$/,async function(username,password){
  try{
   
    await LoginHelper.login(LoginPage.usernameInput,LoginPage.passwordInput,username,password);
    await LoginPage.submitButton.waitForDisplayed({ timeout: 1000 }); 
    await LoginPage.submitButton.waitForClickable({ timeout: 1000 }); 
    (await LoginPage.submitButton).click();
    
   
  }
  catch(err){
    console.log(`Your error message is ${err}`)
  }
    })

    Then(/^"Dashboard Demo" on home page should confirm the login functionality.$/,async function(){
     // browser.debug();
     try{
     // await browser.pause(20000);let homeHeading = await HomePage.Heading();
     await HomePage.heading.waitForDisplayed({ timeout: 10000 });
     let homeHeading = await HomePage.Heading()
      expect(homeHeading).to.equal('Dashboard Demo')
      //await browser.debug();
    
     }
     catch(err){
      console.log(err)
     }
    
      })

      