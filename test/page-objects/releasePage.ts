class ReleaseTransaction {
    get routeDropdown() {
     return  $('//input[@id="Routecard"]');
   }
  get releaseReasonDropdown() {
     return $("#ReleaseReason");
   }
 
   submitButton() {
     return $('[type="submit"]');
   }

   async okButton() {
    return $('//button[text()="Ok"]');
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
     console.log(suggestionOption)
     await suggestionOption.click();
   }

   async selectRouteDropdownForValidCases(routeCard: string) {
    await (await this.routeDropdown).click();
    await (await this.routeDropdown).setValue(routeCard);
   }
   async selectReleaseReasonDropdown(releaseReason: string) {
    await (await this.releaseReasonDropdown).click();
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
 
   
 
    get getProductText(){
     return  $('//h4[text()="Product:"]');
   }
 }
 export default new ReleaseTransaction();
 