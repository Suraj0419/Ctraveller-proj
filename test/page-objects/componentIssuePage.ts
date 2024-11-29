class DataCollection {
  get routeDropdown() {
    return $('//input[@id="routeCard"]');
  }

  get IssueQtyDropdown() {
    return $("#IssueDifferenceReasonId");
  }

  submitButton() {
    return $("//button[text()='Submit']");
  }

  async getComments() {
    return await $("#Comments");
  }
  async getRouteCard() {
    return await $("#ComponentRouteCard");
  }

  async getIssueQty() {
    return await $("#IssueQty");
  }

  async getRequiredQty() {
    const requiredQtyEl = await $('//div[@role="row"][.//div[@data-field="issueControl" and .//text()="Serialized"]]//div[@data-field="qtyRequired"]/div');
   
    const requiredQty = await requiredQtyEl.getText();
    console.log(requiredQty)
    return Number(requiredQty);
  }

  async getComponentRouteCardQty() {
    return $("//input[@name='RouteCardQty']");
  }

  async getComponentQty() {
    const qty = await (await this.getComponentRouteCardQty()).getValue();
    return Number(qty);
  }

  async getDivAccordion() {
    return await $("//div[text()='Additional fields']");
  }

  async getBulkRow() {
    return await $("//div[text()='Bulk']");
  }

  async getSerializedRow() {
    return await $("//div[text()='Serialized']");
  }

  async clickBulkRow() {
    await (await this.getBulkRow()).click();
  }

  async clickSerializedRow() {
    await (await this.getSerializedRow()).click();
  }

  async enterCommentValue(comments: string) {
    await (await this.getComments()).setValue(comments);
  }
  async enterComponentRouteCardValue(comments: string) {
    await (await this.getRouteCard()).setValue(comments);
  }
  async enterIssueQty(comments: string) {
    await (await this.getIssueQty()).setValue(comments);
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

  async selectIssueQtyDropdown(issueQty: string) {
    await (await this.IssueQtyDropdown).click();
    const suggestionOption = await browser.$(`//*[text()="${issueQty}"]`);
    await suggestionOption.click();
  }

  async clickSubmitButton() {
    await this.submitButton().click();
  }

  async getAlert(msg:string) {
    const messageXPath = `//*[contains(text(),'${msg}')]`;
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
