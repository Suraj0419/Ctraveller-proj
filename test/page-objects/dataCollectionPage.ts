class DataCollection {
  get routeDropdown() {
    return $('//input[@id="routeCard"]');
  }

  submitButton() {
    return $("//button[text()='Submit']");
  }
  checkbox() {
    return $("//input[@id='IsValid']");
  }

  async getLength() {
    return await $("#Length");
  }

  

  async getBreadth() {
    return await $("#width");
  }

  async getComments() {
    return await $("#Comments");
  }

  async getHeight() {
    return await $("#height");
  }

  async getWeight() {
    return await $("#weight");
  }

  async clearInput(el:WebdriverIO.Element) {
   // const el = await $("input#companyName");
    await el.click();
    const value = await el.getValue();
    const valueLength = value.length;
    for (let i = 0; i < valueLength; i++) {
      await el.addValue("\uE003");
    }
  }

  async getDivAccordion() {
    return await $("//div[text()='Additional fields']");
  }

  async enterComments(comments: string) {
    await (await this.getDivAccordion()).click();
    await (await this.getComments()).setValue(comments);
  }

  async enterHeight(height: string) {
    await (this.clearInput(await this.getHeight()))
    await (await this.getHeight()).setValue(height);
  }
  async enterLength(length: string) {
   await (this.clearInput(await this.getLength()));
    await (await this.getLength()).setValue(length);
  }
  async enterWeight(weight: string) {
   await(this.clearInput(await this.getWeight()));
    console.log(weight)
    await (await this.getWeight()).setValue(weight);
  }
  async enterBreadth(breadth: string) {
    await (this.clearInput(await this.getBreadth()));
    await (await this.getBreadth()).setValue(breadth);
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

  async selectRouteDropdownForNonConfiguredDataCollection(routeCard: string) {
    await (await this.routeDropdown).click();
    await (await this.routeDropdown).setValue(routeCard);
  }

  async clickSubmitButton() {
    await this.submitButton().click();
  }

  async clickCheckbox() {
    await this.checkbox().click();
  }

  async getAlert() {
    const messageXPath = "//*[contains(text(),'Data Collected successfully')]";
    return await $(messageXPath);
  }

  async getNotDataConfiguredErrorAlert() {
    const messageXPath =
      "//*[contains(text(),'Data Collection is not Configured.')]";
    return await $(messageXPath);
  }
  //Data Point Weight is required.

  async getMandatoryFieldErrorAlert() {
    const messageXPath =
      "//*[contains(text(),'is required.')]";
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
export default new DataCollection();
