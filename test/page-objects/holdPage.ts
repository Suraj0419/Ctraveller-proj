class HoldTransaction {
  get routeDropdown() {
    return $('//input[@id="routeCard"]');
  }

  get holdReasonDropDown() {
    return $("#holdReason");
  }

  get submitButton() {
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
    await suggestionOption.waitForDisplayed({ timeout: 2000 })
    await suggestionOption.waitForClickable({ timeout: 2000 })
    console.log(suggestionOption)
    await suggestionOption.click();
  }

  async selectHoldReasonDropdown(holdReason: string) {
    await (await this.holdReasonDropDown).click();
    const suggestionOption = await browser.$(`//*[text()="${holdReason}"]`);
    await suggestionOption.click();
  }

  async selectDropdownForHoldRoute(holdRoute: string) {
    await (await this.routeDropdown).click();
    await (await this.routeDropdown).setValue(holdRoute);
  }

  async clickSubmitButton() {
    await this.submitButton.click();
  }

  async getValidationError() {
    const messageXPath = "//*[contains(text(), 'Hold Reason is required')]";
    return await $(messageXPath);
  }
  async getHoldValidationError() {
    const messageXPath = "//*[contains(text(), 'already is in Hold state.')]";
    return await $(messageXPath);
  }
  

  //put on Hold

  async getAlert() {
    const messageXPath = "//*[contains(text(), 'put on Hold')]";
    return await $(messageXPath);
  }



  get getProductText() {
    return $('//h4[text()="Product:"]');
  }
}
export default new HoldTransaction();
