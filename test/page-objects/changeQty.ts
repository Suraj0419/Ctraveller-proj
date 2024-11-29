class ChangeQty {
  get routeDropdown() {
    return $('//input[@id="Routecard"]');
  }

  submitButton() {
    return $('[type="submit"]');
  }

  async selectRouteDropdown(routeCard: string) {
    await (await this.routeDropdown).click();
    await (await this.routeDropdown).setValue(routeCard);
    const suggestionOption = await $(`//*[text()="${routeCard}"]`);
    await suggestionOption.waitForDisplayed({ timeout: 2000 });
    await suggestionOption.waitForClickable({ timeout: 2000 });
    await suggestionOption.click();
  }

  get qtyReasonDropdown() {
    return $("#ChangeQtyTypeName");
  }

  get qtyInputField() {
    return $("#Qty");
  }
  get ReasonCodeDropdown() {
    return $("#ReasonCodeName");
  }
  //ReasonCodeName

  async selectQtyReasonDropdown(qtyReason: string) {
    await (await this.qtyReasonDropdown).click();
    const suggestionOption = await browser.$(`//*[text()="${qtyReason}"]`);
    await suggestionOption.click();
  }
  async selectReasonCode(reasonCode: string) {
    await (await this.ReasonCodeDropdown).click();
    const suggestionOption = await browser.$(`//*[text()="${reasonCode}"]`);
    await suggestionOption.click();
  }

  async clickSubmitButton() {
    await this.submitButton().click();
  }

  async setQty(qty) {
    await (await this.qtyInputField).setValue(qty);
  }

  async getAlert() {
    const messageXPath = "//*[contains(text(),'Change Qty successful')]";
    return await $(messageXPath);
  }

  get getProductText() {
    return $('//h4[text()="Product:"]');
  }

  async QtyText() {
    //console.log(await (await $('')).nextElement())
    const paragraphElement = $('//p[number(text()) >= -9999]');
   // const paragraphElement=((await (await headingElement).nextElement()).ELEMENT);
   // console.log(paragraphElement);
    return (await paragraphElement).getText();
  }

  async okButton() {
    return await $('//button[text()="Ok"]');
  }

  async clickOk(){
    await(await this.okButton()).click();
  }
}
export default new ChangeQty();
