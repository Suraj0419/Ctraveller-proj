class closeTransaction {
  get routeDropdown() {
    return $('//input[@id="routeCard"]');
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

  async selectRouteDropdownForNonValidCase(routeCard: string) {
    await (await this.routeDropdown).click();
    await (await this.routeDropdown).setValue(routeCard);
  }

  async getAlert(msg) {
    const messageXPath = `//*[contains(text(), '${msg}')]`
    return await $(messageXPath);
  }

//span[@style='color:black']

async getStatusText() {
  const messageXPath = "//span[contains(@style, 'color:')]"
  return await $(messageXPath);
}


  submitButton() {
    return $('[type="submit"]');
  }

  get getProductText(){
    return  $('//h4[text()="Product:"]');
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
}

export default new closeTransaction();