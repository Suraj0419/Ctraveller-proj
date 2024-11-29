class DisassociateTransaction {
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
    console.log(suggestionOption);
    await suggestionOption.click();
  }

  async enterRouteDropdownForDissociated(routeCard: string) {
    await (await this.routeDropdown).click();
    await (await this.routeDropdown).setValue(routeCard);
  }

  async clickSubmitButton() {
    await this.submitButton().click();
  }

  async getAlert() {
    const messageXPath = "//*[contains(text(),'Disassociated successfully')]";
    return await $(messageXPath);
  }

  async getCheckbox(routeCard: string) {
    console.log(routeCard);
    const routeCheckBox = `//div[contains(@class, 'MuiDataGrid-cell') and text()='${routeCard}']`;
    // console.log(routeCheckBox)
    const check = await $(routeCheckBox);
    console.log(check);
    await check.waitForDisplayed({ timeout: 5000 });
    await check.waitForClickable({ timeout: 5000 });
    (await (await check.parentElement()).previousElement()).click();
  }

  async getHeaderCheckbox() {
    const divElement = await $(
      '//div[@class="MuiDataGrid-columnHeaderTitleContainerContent"]'
    );
    console.log(divElement);
    //const check= await divElement.$('input[type="checkbox"]');
    await divElement.waitForDisplayed({ timeout: 5000 });
    await divElement.waitForClickable({ timeout: 5000 });
    await divElement.click();
  }

  get getProductText() {
    return $('//h4[text()="Product:"]');
  }

  async getRoute(routeCard: string) {
    console.log(routeCard);
    const routeBox = `//div[contains(@class, 'MuiDataGrid-cell') and @data-field='RouteCard']`;

    const route = await $(routeBox);
    return await (await route.$(".MuiDataGrid-cellContent")).getText();
  }

  async getRoutes() {
    const routeBox = `//div[contains(@class, 'MuiDataGrid-cell') and @data-field='RouteCard']`;
    let routeArr = [];
    const route = await $$(routeBox);
    for (let i = 0; i < route.length; i++) {
      let routeText = await (
        await route[i].$(".MuiDataGrid-cellContent")
      ).getText();
      routeArr.push(routeText);
    }
    return routeArr;
  }
  async getParentQty() {
    const parentQty = await $(
      "//p[string-length(translate(text(), '0123456789', '')) = 0 and string-length(text()) > 0]"
    );
    return await parentQty.getText();
  }

  async okButton() {
    return await $('//button[text()="Ok"]');
  }

  async clickOk(){
    await(await this.okButton()).click();
  }
}
export default new DisassociateTransaction();
