// import { Then } from "@wdio/cucumber-framework";
// import { expect } from "chai";
// import logger from "../../helper/logger.ts";
// import reporter from "../../helper/reporter.js";

// // @ts-ignore
// Then(
//   /^Inventory page (.*)\s? list (.*) products$/,
//   async function (negativeCheck, noOfProducs) {
//     logger.info(`${this.testid}: Checking the product list...`);

//     //Fail the test intentionally
//     //throw Error(`>>> Failed`);
//     //console.log(`>>>>>>>>> Given Step Test ID shared with Then Step: ${this.testid}`);
//     //console.log(`>>>>>>>>>>THE APP ID IS: ${this.appid}`);
//     try {
//       //console.log(wdio); //reference error

//       if (!noOfProducs) throw Error(`Invalid product count: ${noOfProducs}`);
//       let eleArr = await $$(`.inventory_item_name`);

//       try {
//         expect(eleArr.length).to.equal(parseInt(noOfProducs));
//       } catch (err) {
//         reporter.addStep(this.testid, "error", "Known Issue - Product Count Mismatch", true, "JIRA#30056", 'Critical');
//       }
//     } catch (err) {
//       console.log(`>> The type of err : ${typeof err}`);
//       console.log(`>> The name property : ${err.name}`);
//       console.log(`>> The message property : ${err.message}`);
//       err.message = `${this.testid}: Failed when comparing product count, ${err.message}`;
//       throw err; // Fail the test and stops the test execution
//       //logger.error(err.message); // this simply prints error message and continue with test execution
//     }
//   }
// );

// /**
//  * Steps
//  * 1. Get price list
//  * 2. Convert string into number
//  * 3. Assert if any value is <=0
//  */
// Then(/^Validate all products have valid price$/, async function () {
//   logger.info(`${this.testid}: Checking the product price...`);
//   //1. Get price list
//   let priceList = await $$(`.inventory_item_price`);
//   let priceArr = [];
//   for (let i = 0; i < priceList.length; i++) {
//     let price = await priceList[i].getText();
//     priceArr.push(price);
//   }
//   //console.log(`>> Price with $: ${priceArr}`);

//   //2. Convert String into number
//   //let actualPrice = priceArr.map(ele => parseInt(ele.replace("$", "")));
//   // + ==> Uninary plus it gives value as it is including floating precision.
//   let actualPrice = priceArr.map((ele) => +ele.replace("$", ""));
//   //console.log(`>> Price in number: ${actualPrice}`);

//   //3. Assert if any value is <=0
//   for (let price of actualPrice) {
//     expect(price).to.be.greaterThan(0, `Product price is not valid: ${price}`);
//   }
// });
