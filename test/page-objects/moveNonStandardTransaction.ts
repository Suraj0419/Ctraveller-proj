class MoveNonStandardTransaction {
    get routeDropdown() {
     return  $('//input[@id="routeCard"]');
   }
 
  get EquipmentDropDown() {
     return $("#EqupName");
   }
 
  get ToStepField() {
     return  $("#Processflowstepname");
   }
   get ToProcessFlow() {
    return  $("#Processflowname");
  }
 
   MoveinTransaction() {
     return $('//*[text()="Move"]');
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
 
 
   async selectEquipmentDropdown(equipment: string) {
     await (await this.EquipmentDropDown).click();
     const suggestionOption = await browser.$(`//*[text()="${equipment}"]`);
     await suggestionOption.click();
   }
   
   async selectToStepDropdown(toStep: string) {
     await (await this.ToStepField).click();
     console.log(toStep);
     const suggestionOption = await browser.$(`//*[text()="${toStep}"]`);
     await suggestionOption.waitForDisplayed({timeout:2000})
     await suggestionOption.waitForClickable({timeout:2000})
     console.log(suggestionOption)
      await suggestionOption.click();
   }
   async selectToProcessFlowDropdown(ToProcessFlow: string) {
    await (await this.ToProcessFlow).click();
    const suggestionOption = await browser.$(`//*[text()="${ToProcessFlow}"]`);
    await suggestionOption.waitForDisplayed({timeout:2000})
    await suggestionOption.waitForClickable({timeout:2000})
    console.log(suggestionOption)
     await suggestionOption.click();
  }
   async clickSubmitButton() {
     await this.submitButton().click();
   }
 
   async getAlert() {
     const messageXPath = "//*[contains(text(), 'moved to')]";
     return await $(messageXPath);
   }
 
    get getProductText(){
     return  $('//h4[text()="Product:"]');
   }
 }
 export default new  MoveNonStandardTransaction();
 