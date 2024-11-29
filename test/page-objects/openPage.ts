class OpenTransaction {
    get routeDropdown() {
     return  $('//input[@id="routeCard"]');
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

   async selectRouteDropdownForNonValidCases(routeCard: string) {
    await (await this.routeDropdown).click();
    await (await this.routeDropdown).setValue(routeCard);
   }


   async clickSubmitButton() {
     await this.submitButton().click();
   }


   async getAlert(msg:string) {
    const messageXPath = `//*[contains(text(),'${msg}')]`
    return await $(messageXPath)
  }
 
   
 
    get getProductText(){
     return  $('//h4[text()="Product:"]');
   }

   async okButton() {
    return await $('//button[text()="Ok"]');
  }

  async clickOk(){
    await(await this.okButton()).click();
  }
 }
 export default new OpenTransaction();
 