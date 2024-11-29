class AssociateTransaction {
  get routeDropdown() {
    return $('//input[@id="Routecard"]');
  }

  get fiftyOption() {
    return $("//div[@role='combobox' and contains(@class, 'MuiSelect-select') and contains(@class, 'MuiTablePagination-select') and contains(@class, 'MuiSelect-standard') and contains(@class, 'MuiInputBase-input') and contains(@class, 'css-1cccqvr')]" );
  }

  get paginationDropdown(){
    return $("//div[@role='combobox' and @class='MuiSelect-select MuiTablePagination-select MuiSelect-standard MuiInputBase-input css-1cccqvr']")
  }

  async paginationClick(){
    await(await this.paginationDropdown).click();
  }

  submitButton() {
    return $('[type="submit"]');
  }

  async fiftyOptionClick() {
    await (await this.fiftyOption).click();
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

  async selectRouteDropdownForValidCases(routeCard: string) {
    await (await this.routeDropdown).click();
    await (await this.routeDropdown).setValue(routeCard);
  }

  async clickSubmitButton() {
    await this.submitButton().click();
  }

  async getAlert(msg: string) {
    const messageXPath = `//*[contains(text(),'${msg}')]`;
    return await $(messageXPath);
  }

  async getCheckbox(routeCard: string) {
    console.log(routeCard);
    const routeCheckBox = `//div[@class='MuiDataGrid-cellContent' and text()='${routeCard}']/parent::div/preceding-sibling::div[contains(@class, 'MuiDataGrid-cellCheckbox')]//input[@type='checkbox']`;
    console.log(routeCheckBox);
    const check = await $(routeCheckBox);
    await check.click();
  }
  async getQty(routeCard: string) {
    console.log(routeCard);
    const routeCheckBox = `//div[contains(@class, 'MuiDataGrid-cell') and text()='${routeCard}']`;
    // console.log(routeCheckBox)
    const check = await $(routeCheckBox);
    console.log(check);
    let isClicking = await check.isClickable();
    if (isClicking) {
      const nextElement = await (await check.parentElement()).nextElement();
      return await (await nextElement.$(".MuiDataGrid-cellContent")).getText();
    } else return "";
  }

  async getParentQty() {
    const parentQty = await $(
      "//p[string-length(translate(text(), '0123456789', '')) = 0 and string-length(text()) > 0]"
    );
    return await parentQty.getText();
  }

  get getProductText() {
    return $('//h4[text()="Product:"]');
  }

  async okButton() {
    return $('//button[text()="Ok"]');
  }

  async clickOkButton() {
    await (await this.okButton()).click();
  }
}
export default new AssociateTransaction();
