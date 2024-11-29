class CombineRouteCard {
    get routeDropdown() {
     return  $('//input[@id="routeCard"]');
   }
 
   submitButton() {
     return $("//button[text()='Submit']");
   }

   closeOnEmptyCheckbox() {
    return $('//input[@type="checkbox" and @name="CloseWhenEmpty"]');
  }

   async getToRouteCard() {
    return await $("#ToRouteCard");
  }

  async enterNewRoute(route:string){
    await (await this.getToRouteCard()).setValue(route);
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

   async selectRouteDropdownForChild(routeCard: string) {
    await (await this.routeDropdown).click();
    await (await this.routeDropdown).setValue(routeCard);
  }

   async clickSubmitButton() {
     await this.submitButton().click();
   }
   async clickCloseOnEmpty() {
    await (await this.closeOnEmptyCheckbox()).click();
  }


   async getAlert() {
    const messageXPath = "//*[contains(text(),'Combined successfully')]";
    return await $(messageXPath);
  }

  async getNoChildValidationAlert() {
    const messageXPath = "//*[contains(text(),'Atleast one RouteCard has to be selected to perform Transaction.')]";
    return await $(messageXPath);
  }

  async notEligibleValidationAlert() {
    const messageXPath = "//*[contains(text(),'is not eligible for this Transaction.')]";
    return await $(messageXPath);
  }
 
  async getCheckbox(routeCard:string) {
    console.log(routeCard)
    const routeCheckBox = `//div[contains(@class, 'MuiDataGrid-cell') and text()='${routeCard}']`
   // console.log(routeCheckBox)
      const check= await $(routeCheckBox)
      console.log(check);
      await check.waitForDisplayed({timeout:5000});
    // await check.waitForClickable({timeout:5000});
       (await (await check.parentElement()).previousElement()).click();
  }

  async getComments() {
    return await $("#Comment");
  }

  async getDivAccordion() {
    return await $("//div[text()='Additional fields']");
  }

  async enterComments(comments: string) {
    await (await this.getDivAccordion()).click();
    await (await this.getComments()).setValue(comments);
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
 export default new CombineRouteCard();
 