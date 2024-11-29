class MultiHold {
    get routeDropdown() {
     return  $('//input[@id="routeCard"]');
   }
 
  get holdReasonDropDown() {
     return $("#HoldReason");
   }

   getGridRows(){
    return $$("//div[@role='row']");
   }
 
   submitButton() {
     return $('[type="submit"]');
   }
   async okButton() {
    return await $('//button[text()="Ok"]');
  }

   async clickOk(){
    await(await this.okButton()).click();
  }
 
   async selectRouteDropdown(routeCard: string) {
    await (await this.routeDropdown).click();
    await (await this.routeDropdown).setValue(routeCard);
     const suggestionOption = await $(`//*[text()="${routeCard}"]`);
     await suggestionOption.waitForDisplayed({timeout:2000})
     await suggestionOption.waitForClickable({timeout:2000})
    // console.log(suggestionOption)
     await suggestionOption.click();
   }

   async selectHoldReasonDropdown(holdReason: string) {
    await (await this.holdReasonDropDown).click();
    const suggestionOption = await browser.$(`//*[text()="${holdReason}"]`);
    await suggestionOption.click();
  }

   async clickSubmitButton() {
     await this.submitButton().click();
   }

   //put on Hold

   async getAlert() {
    const messageXPath = "//*[contains(text(), 'RouteCards put on hold successfully')]";
    return await $(messageXPath);
  }

  async getValidationError() {
    const messageXPath = "//*[contains(text(), 'Hold Reason is required')]";
    return await $(messageXPath);
  }
 
   
 
    get HeadingText(){
     return  $('//h2[text()="Multi Hold"]');
   }
 }
 export default new MultiHold();
 