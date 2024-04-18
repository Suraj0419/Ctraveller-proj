/**
 * import { Given } from "@wdio/cucumber-framework";
import { expect } from "chai";
//import logger from "../../helper/logger.js";
//import allure from "@wdio/allure-reporter";
import reporter from "../../helper/reporter.js";

// @ts-ignore
Given(/^As (a|an) (.*) User I login to inventory web app$/, async function(prefixTxt, userType, dataTable){
    reporter.addStep(this.testid, "info", "Login to sause demo app");
    //logger.info(`${this.testid}: Started to login sause demo app...`); //This is for console
    //allure.addStep(`${this.testid}: Started to login sause demo app...`); // this one is for allure
    //Get the testid
    //console.log(`>>>>>>>>> Given Step Test ID: ${this.testid}`);
    //Getting values from data table
    let dt = dataTable.hashes();
    //console.log(`>> The type of dt: ${typeof dt}`); //object
    //console.log(`>> The type of dt: ${dt.constructor}`); //function of array
    //console.log(`>> The value of dt: ${JSON.stringify(dt)}`);

    //console.log(`>> The UserType: ${userType}`);
    //Launch browser and Open url
    // @ts-ignore
    //console.log('Console_URL:', browser.options.sauseDemoURL);
    // @ts-ignore
    await browser.url(browser.options.sauseDemoURL);
    //await browser.setTimeout({implicit: 15000, pageLoad: 10000});

    //console.log(`Test UserName: ${process.env.TEST_PROBLEM_USERNAME}`);
    //console.log(`Test Password: ${process.env.TEST_PROBLEM_PASSOWRD}`);
    //Login to the inventory application
    try {
        //await $(`#user-name`).setValue(process.env.TEST_PROBLEM_USERNAME);
        await $(`#user-name`).setValue(dt[1].Username);
        await $(`#password`).setValue(process.env.TEST_PROBLEM_PASSOWRD);
        await $(`#login-button`).click();
    } catch (err) {
        //console.log(`Error while login. Retrying..`);
        await browser.refresh();
        await browser.pause(2000);
        await $(`#user-name`).setValue(process.env.TEST_PROBLEM_USERNAME);
        await $(`#password`).setValue(process.env.TEST_PROBLEM_PASSOWRD);
        await $(`#login-button`).click();
    }
    let title1 = await $(`.title`).getText();

    expect(title1).to.equal(`Products`);

    // /**Login with another user */
    // await browser.pause(2000);
    // await browser.reloadSession();
    // await browser.url("https://www.saucedemo.com/");
    // await browser.setTimeout({implicit: 15000, pageLoad: 10000});
    // await $(`#user-name`).setValue(`visual_user`);
    // await $(`#password`).setValue(`secret_sauce`);
    // await $(`#login-button`).click();
    // let title2 = await $(`.title`).getText();

    // expect(title2).to.equal(`Products`);
    // await browser.back();
    // await browser.pause(2000);
    // await browser.forward();
    //await browser.debug();

    //this.appid = "ABC123";
    //logger.info(`${this.testid}: Successfully logged into the sause demo app...`);
    //allure.addStep(`${this.testid}: Successfully logged into the sause demo app...`);
    //reporter.addStep(this.testid, "info", "Login is successful...");
//});


 //*/