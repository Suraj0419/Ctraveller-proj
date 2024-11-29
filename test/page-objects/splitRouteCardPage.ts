class SplitRouteCard {
    get routeDropdown() {
     return  $('//input[@id="routeCard"]');
   }
 
   submitButton() {
     return $('[type="submit"]');
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


   async clickSubmitButton() {
     await this.submitButton().click();
   }


   async getAlert(msg) {
    const messageXPath = `//*[contains(text(),'${msg}')]`
    return await $(messageXPath);
  }
 
  async getCheckbox(routeCard:string) {
    console.log(routeCard)
    const routeCheckBox = `//div[contains(@class, 'MuiDataGrid-cell') and text()='${routeCard}']`
   // console.log(routeCheckBox)
      const check= await $(routeCheckBox)
      console.log(check);
      await check.waitForDisplayed({timeout:5000})
     await check.waitForClickable({timeout:5000});
       (await (await check.parentElement()).previousElement()).click();
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
 export default new SplitRouteCard();
 