class MoveNonStandardTransaction {
    get routeDropdown() {
     return  $('//input[@id="routeCard"]');
   }
 
  get EquipmentDropDown() {
     return $("#EqupName");
   }

   get processFlowTreeDropdown() {
    return $("//label[contains(text(), 'To Process Flow')]/following-sibling::div[contains(@class, 'react-dropdown-tree-select')]");
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

   async okButton() {
    return await $('//button[text()="Ok"]');
  }

   async clickOk(){
    await(await this.okButton()).click();
  }
 
   async getAlert(msg) {
     const messageXPath = `//*[contains(text(), '${msg}')]`
     return await $(messageXPath);
   }
 
    get getProductText(){
     return  $('//h4[text()="Product:"]');
   }

   async  productRevision(str) {
    return await $(`//label[@title="${str}"]/../i`);
  }
  async  productInnerRevision(str) {
    return await $(`//label[@title="${str}"]`);
  }
  async clickProductRevision(str){
    await(await this.productRevision(str)).click();
  }
  async clickProductInnerRevision(str){
    await(await this.productInnerRevision(str)).click();
  }

   async clickProcessFlowDropdown() {
  
    await (await this.processFlowTreeDropdown).click();
  }
 }
 export default new  MoveNonStandardTransaction();
 