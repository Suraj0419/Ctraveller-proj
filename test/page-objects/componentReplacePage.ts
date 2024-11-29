class ComponentReplace {
  get routeDropdown() {
    return $('//input[@id="routeCard"]');
  }

  get replaceReasonDropdown() {
    return $("#ReplaceReasonName");
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
  async enterIssueQty(replaceQty: string) {
    console.log(replaceQty);
    await (await this.getIssueQty()).setValue(replaceQty);
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

  async selectReplaceDropdown(issueQty: string) {
    await (await this.replaceReasonDropdown).click();
    const suggestionOption = await browser.$(`//*[text()="${issueQty}"]`);
    await suggestionOption.click();
  }

  async clickSubmitButton() {
    await this.submitButton().click();
  }

  async getAlert() {
    const messageXPath = "//*[contains(text(),'Component Replace Completed')]";
    return await $(messageXPath);
  }

  async getAlert1() {
    const messageXPath = "//*[contains(text(),'entered does not match the selected Material requirement ')]";
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
export default new ComponentReplace();
