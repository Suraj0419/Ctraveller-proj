import {Given, Then } from "@wdio/cucumber-framework"
import RouteTransactionPage from "../../page-objects/RouteTransactionPage.ts";
import menuPage from "../../page-objects/menuPage.ts";
import { expect } from "chai";


const arr=[
  {
    id:1,
    transaction:'Start Transaction'
  },
  {
    id:2,
    transaction:'Move'
  },
  {
    id:3,
    transaction:'Move Non Std'
  },
  {
   id:4,
   transaction:'Hold'
  },
  {
    id:4,
    transaction:'Release'
  }
]

Given(/^Go to Tabs$/,async function(){
    // browser.debug();
    try{
    // await browser.pause(20000);let homeHeading = await HomePage.Heading();
    (await menuPage.MenuButton).click();
    (await menuPage.transactionMenuItem()).click()
    }
    catch(err){
     console.log(err)
    }
   
     })

     Then(/^Click on transaction menu and go to Route Card Start transaction screen.$/,async function(){
      // browser.debug();
      try{
       (await menuPage.transactionMenuItem()).click();
    const liArr=   await menuPage.transactionSubMenu()
    console.log(liArr);
       for(let i=0;i<arr.length;i++){
        await liArr[i].click();
        let transactionHeading=''
        if(i>=1){
        await RouteTransactionPage.Heading.waitForDisplayed({ timeout: 5000 });
         transactionHeading=await RouteTransactionPage.HeadingText
        }
        else{
          await RouteTransactionPage.Heading1.waitForDisplayed({ timeout: 5000 });
        transactionHeading = await RouteTransactionPage.HeadingText1;
        }
        expect(transactionHeading).to.equal(arr[i].transaction)
       }
     //  (await menuPage.startTransactionSubMenu()).click();
    
      
       await browser.debug(); 
      }
      catch(err){
       console.log(err)
      }
     
       })