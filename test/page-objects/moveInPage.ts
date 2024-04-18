class RouteMoveTransaction {
   get routeDropdown() {
    return  $('//input[@id="Routecard"]');
  }

 get EquipmentDropDown() {
    return $("#Equipment");
  }

 get ToStepField() {
    return  $("#ToStep");
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
    return await suggestionOption.getText();
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
export default new RouteMoveTransaction();
