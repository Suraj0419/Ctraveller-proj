class RouteMoveTransaction {
  get routeDropdown() {
    return $('//input[@id="Routecard"]');
  }

  get EquipmentDropDown() {
    return $("#Equipment");
  }

  get ToStepField() {
    return $("#ToStep");
  }

  ////button[@title='clear']

  get closeButton() {
    return $("button[@title='clear']");
  }

  MoveinTransaction() {
    return $('//*[text()="Move"]');
  }

  submitButton() {
    return $('[type="submit"]');
  }

  async selectRouteDropdown(routeCard: string) {
    await (await this.routeDropdown).click();
    await browser.pause(20000)
    await (await this.routeDropdown).setValue(routeCard);
    const suggestionOption = await $(`//*[text()="${routeCard}"]`);
    await suggestionOption.waitForDisplayed({ timeout: 5000 });
    await suggestionOption.waitForClickable({ timeout: 5000 });
    console.log(suggestionOption);
    await suggestionOption.click();
  }

  async dataCollectionInput(labelText){
    const inputSelector = `//label[normalize-space(text())="${labelText}"]//span[text()="*"]/ancestor::div/following-sibling::div//input[@name="${labelText}"]`;
    const inputElement = await $(inputSelector);
    return inputElement;
  }

  async accordion(){
    return await $(`//div[contains(@class, 'MuiAccordionSummary-content') and contains(@class, 'MuiAccordionSummary-contentGutters') and contains(@class, 'css-l0jafl') and text()="Data Collection"]`)
  }

  async selectEquipmentDropdown(equipment: string) {
    await (await this.EquipmentDropDown).click();
    const suggestionOption = await browser.$(`//*[text()="${equipment}"]`);
    await suggestionOption.click();
  }

  async getValue(el: WebdriverIO.Element) {
    // const el = await $("input#companyName");
    await el.click();
    const value = await el.getValue();
    //const valueLength = value.length;
    return value;
  }
  async getClearButtonByLabel(label) {
    return await $(
      `//label[contains(text(), "${label}")]/following-sibling::div//button[@title="Clear" and contains(@class, "MuiAutocomplete-clearIndicator")]`
    );
  }

  async selectToStepDropdown(toStep: string) {
    await (await this.ToStepField).click();
    const suggestionOption = await $(`//*[text()="${toStep}"]`);
    await suggestionOption.waitForDisplayed({ timeout: 2000 });
    await suggestionOption.waitForClickable({ timeout: 2000 });
    console.log(suggestionOption);
    await suggestionOption.click();
    console.log(toStep);
    return this.getValue(await this.ToStepField);
  }

  async clickOnAlternatePath(toStep) {
    await (await this.ToStepField).click();
    const btn = await this.getClearButtonByLabel("To Step");
    await btn.click();
    const suggestionOption = await $(`//*[text()="${toStep}"]`);
    await suggestionOption.waitForDisplayed({ timeout: 2000 });
    await suggestionOption.waitForClickable({ timeout: 2000 });
    console.log(suggestionOption);
    await suggestionOption.click();
    console.log(toStep);
  }

  async getStepValue() {
    const value = await (await this.ToStepField).getValue();
    return value;
  }
  async clickSubmitButton() {
    await this.submitButton().click();
  }

  async getAlert(msg) {
    const messageXPath = `//*[contains(text(), '${msg}')]`;
    return await $(messageXPath);
  }
  async getAlertForMovingToLastStep() {
    const messageXPath = `//div[@id='swal2-html-container']`;
    return await $(messageXPath);
  }

  get getProductText() {
    return $('//h4[text()="Product:"]');
  }

  async okButton() {
    return await $('//button[text()="Ok"]');
  }

  async clickOk() {
    await (await this.okButton()).click();
  }
}
export default new RouteMoveTransaction();
