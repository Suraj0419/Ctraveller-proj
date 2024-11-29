class Rework {
  get routeDropdown() {
    return $('//input[@id="Routecard"]');
  }

  get EquipmentDropDown() {
    return $("#Equipment");
  }

  get ToReworkStep() {
    return $("#StepName");
  }
  get ReworkReason() {
    return $("#ReasonName");
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
    console.log(suggestionOption);
    await suggestionOption.click();
  }

  async selectRouteDropdownForParentRoutes(routeCard: string) {
    await (await this.routeDropdown).click();
    await (await this.routeDropdown).setValue(routeCard);
  }

  async selectEquipmentDropdown(equipment: string) {
    await (await this.EquipmentDropDown).click();
    const suggestionOption = await browser.$(`//*[text()="${equipment}"]`);
    await suggestionOption.click();
  }

  async selectReworkReason(reason: string) {
    await (await this.ReworkReason).click();
    //  console.log(toStep);
    const suggestionOption = await browser.$(`//*[text()="${reason}"]`);
    await suggestionOption.waitForDisplayed({ timeout: 2000 });
    await suggestionOption.waitForClickable({ timeout: 2000 });
    console.log(suggestionOption);
    await suggestionOption.click();
  }
  async selectToReworkStepDropdown(reworkStep: string) {
    await (await this.ToReworkStep).click();
    const suggestionOption = await browser.$(`//*[text()="${reworkStep}"]`);
    await suggestionOption.waitForDisplayed({ timeout: 2000 });
    await suggestionOption.waitForClickable({ timeout: 2000 });
    console.log(suggestionOption);
    await suggestionOption.click();
  }
  async clickSubmitButton() {
    await this.submitButton().click();
  }

  async clearInput(el: WebdriverIO.Element) {
    // const el = await $("input#companyName");
    await el.click();
    const value = await el.getValue();
    const valueLength = value.length;
    for (let i = 0; i < valueLength; i++) {
      await el.addValue("\uE003");
    }
  }

  async clearReworkStepValue() {
   // await (await this.ToReworkStep).click();
   await this.clearInput(await this.ToReworkStep);
  }

  async getAlert(msg) {

    const messageXPath = `//*[contains(text(), '${msg}')]`;
    return await $(messageXPath);
  }

  get getProductText() {
    return $('//h4[text()="Product:"]');
  }

  async okButton() {
    return await $('//button[text()="Ok"]');
  }

  async clickOk(){
    await(await this.okButton()).click();
  }
}
export default new Rework();
