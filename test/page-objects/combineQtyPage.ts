class CombineQty {
  get routeDropdown() {
    return $('//input[@id="routeCard"]');
  }

  submitButton() {
    return $("//button[text()='Submit']");
  }

  async inputs() {
    return await $$(
      '//div[@role="row"]//input[contains(@class, "MuiInputBase-inputSizeSmall")]'
    );
  }

  async setInputForRouteCard(routeCardName, inputValue) {
    try {
       
        const inputField = await browser.$(
            `//div[@role="row"][.//div[@data-field="routeCardName" and .//text()="${routeCardName}"]]//input[@type="text"]`
        );

        await inputField.waitForDisplayed({ timeout: 5000 });
        await inputField.clearValue();
        await inputField.setValue(inputValue);

        console.log(`Value "${inputValue}" entered for RouteCard "${routeCardName}".`);
    } catch (error) {
        console.error(`Failed to set input value for RouteCard "${routeCardName}". Error:`, error);
    }
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


  async clickSubmitButton() {
    await this.submitButton().click();
  }

  async getAlert(msg) {
    const messageXPath = `//*[contains(text(),'${msg}')]`;
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

  async getCloseIsEmptyCheckBox(index: number) {
    return await $(
      `//div[@data-rowindex='${index}']//input[@type='checkbox' and not(@tabindex)]`
    );
  }

  async getQuantity(quantity: number) {
    return await $(
      `//div[@data-rowindex='${quantity}']//input[contains(@class, 'MuiInputBase-inputSizeSmall')]`
    );
  }

  async enterQuantity(index, value: string) {
    console.log(value+" value");
    console.log(index+" index")
    await (await this.getQuantity(index)).setValue(value);
  }

  async clickIsOkCheckbox(index: number) {
    await (await this.getCloseIsEmptyCheckBox(index)).click();
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
export default new CombineQty();
