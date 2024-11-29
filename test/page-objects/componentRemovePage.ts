class ComponentRemove {
  get routeDropdown() {
   return  $('//input[@id="routeCard"]');
 }

 async RemovalReasonDropdown() {
  return await $$("//input[@aria-autocomplete='list']")[1]
}

get removeDifferenceDropdown() {
  return  $('//input[@id="RemoveDifferenceReasonName"]');
}

 submitButton() {
   return $("//button[text()='Submit']");
 }
 

async getComments() {
  return await $("#Comments");
}

async getRemoveQty() {
  return await $("#QtyToRemove");
}

async getDivAccordion(){
  return await $("//div[text()='Additional fields']");
}

async getBulkRow(){
  return  await $("//div[text()='Bulk']");
}

async getSerializedRow(){
  return  await $("//div[text()='Serialized']");
}

async clickBulkRow() {
 await(await this.getBulkRow()).click();
}

async clickSerializedRow() {
  await(await this.getSerializedRow()).click();
 }



async enterCommentValue(comments:string){

  await (await this.getComments()).setValue(comments);
}

async enterRemoveIssueQty(issueQty:string){

  await (await this.getRemoveQty()).setValue(issueQty);
}

 async selectRouteDropdown(routeCard: string) {
  await (await this.routeDropdown).click();
  await (await this.routeDropdown).setValue(routeCard);
   const suggestionOption = await $(`//*[text()="${routeCard}"]`);
   await suggestionOption.waitForDisplayed({timeout:2000})
   await suggestionOption.waitForClickable({timeout:2000})
   console.log(suggestionOption)
   await suggestionOption.click();
 }

 
async selectRemoveReasonDropdown(issueQty: string) {
  await (await this.RemovalReasonDropdown()).click();
  const suggestionOption = await browser.$(`//*[text()="${issueQty}"]`);
  await suggestionOption.click();
}

async selectRemoveIssueDifferenceDropdown(issueQty: string) {
  await (await this.removeDifferenceDropdown).click();
  const suggestionOption = await browser.$(`//*[text()="${issueQty}"]`);
  await suggestionOption.click();
}


 async clickSubmitButton() {
   await this.submitButton().click();
 }

 async getAlert() {
  const messageXPath = `//*[contains(text(),'Component Removed')]`
  return await $(messageXPath);
}

async getAlert1() {
  const messageXPath = `//*[contains(text(),'Remove Difference Reason is required.')]`
  return await $(messageXPath);
}

async getAlert2() {
  const messageXPath = `//*[contains(text(),'Removing more qty than issued is not allowed.')]`
  return await $(messageXPath);
}



  get getProductText(){
   return  $('//h4[text()="Product:"]');
 }

 async okButton() {
  return await $('//button[text()="Ok"]');
}

async clickOk(){
  await(await this.okButton()).click();
}
}
export default new ComponentRemove();
