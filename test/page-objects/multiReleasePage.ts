class MultiRelease {
    //routeCard
    get routeDropdown() {
     return  $('//input[@id="routeCard"]');
   }
 
  get releaseReasonDropDown() {
     return $("#ReleaseReason");
   }

   async getGridRows(){
    return await $$('//div[@role="row"]');
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

   async selectReleaseReasonDropdown(releaseReason: string) {
    await (await this.releaseReasonDropDown).click();
    const suggestionOption = await browser.$(`//*[text()="${releaseReason}"]`);
    await suggestionOption.click();
  }

   async clickSubmitButton() {
     await this.submitButton().click();
   }
  
   //put on Hold

   async getAlert(msg) {
    const messageXPath = `//*[contains(text(), '${msg}')]`
    return await $(messageXPath);
  }
    get HeadingText(){
     return  $('//h2[text()="Multi Release"]');
   }
 }
 export default new MultiRelease();
 