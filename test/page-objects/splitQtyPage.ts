class SplitQty {
  get routeDropdown() {
    return $('//input[@id="routeCard"]');
  }

  submitButton() {
    return $('[type="submit"]');
  }

  async generateNamesCheckBox() {
    return await $("//input[@type='checkbox' and @id='generateNamesAutomatically']");
  }

  async closeWhenEmpty() {
    return await $("//input[@type='checkbox' and @id='CloseSourceRouteCardWhenEmpty']");
  }


  async inputs() {
    return await $$(
      '//div[@role="row"]//input[contains(@class, "MuiInputBase-inputSizeSmall")]'
    );
  }

  async enterQty(qty: string) {
    console.log(qty)
    const res = await this.inputs();
    await res[1].waitForEnabled();
    for(let ch of qty){
      console.log(ch);
      await res[1].addValue(ch);
      await browser.pause(500)
    }
   
  }

  async enterRouteCard(routeCard: string) {
    console.log(routeCard)
    const res = await this.inputs();
    await res[0].waitForEnabled();
    for(let ch of routeCard){
      console.log(ch);
      await res[0].addValue(ch);
      await browser.pause(500)
    }
  }

  addButton() {
    return $("//button[text()='Add']");
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

  async selectRouteDropdownForNonValidCases(routeCard: string) {
    await (await this.routeDropdown).click();
    await (await this.routeDropdown).setValue(routeCard);
  }

  async clickSubmitButton() {
    await this.submitButton().click();
  }

  async clickGenerateNameCheckBox(){
    await(await this.generateNamesCheckBox()).click()
  }
  async clickAddButton() {
    await this.addButton().click();
  }

  async clickCloseWhenEmpyty() {
    await (await this.closeWhenEmpty()).click();
  }

  async getAlert(msg) {
    const messageXPath = `//*[contains(text(),'${msg}')]`
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

  getGeneratedLot(sentence:string){
   

// Use a regular expression to match words inside single quotes
const matches = sentence.match(/'([^']+)'/g);

if (matches && matches.length >= 2) {
  // Extract the second match and remove the single quotes
  const secondWord = matches[1].replace(/'/g, '');
  console.log(secondWord);
} else {
  console.log("The sentence does not contain two words under single quotes.");
}
  }
}
export default new SplitQty();
