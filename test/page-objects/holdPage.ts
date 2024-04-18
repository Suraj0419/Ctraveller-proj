class HoldTransaction {
    get routeDropdown() {
     return  $('//input[@id="routeCard"]');
   }
 
  get holdReasonDropDown() {
     return $("#holdReason");
   }
 
   submitButton() {
     return $('[type="submit"]');
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
    const messageXPath = "//*[contains(text(), 'put on Hold')]";
    return await $(messageXPath);
  }
 
   
 
    get getProductText(){
     return  $('//h4[text()="Product:"]');
   }
 }
 export default new HoldTransaction();
 