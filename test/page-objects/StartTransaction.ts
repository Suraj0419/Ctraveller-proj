class StartTransactionPage {
  getStartTransactionMenu() {
    return $('//*[@id="root"]/div/div/main/div[2]/div[1]/ul/li[1]/div/span');
  }

  getStartTransactionHeading() {
    return $('//h1[text()="Start Transaction"]');
  }

  getTransactionModal() {
    return $(".swal2-popup .swal2-modal .swal2-icon-success .swal2-show");
    // return $('/html/body/div[2]')
  }

  getSweetAlertInput() {
    return $("#swal2-html-container");
  }

  getSuccessButton() {
    return $(".swal2-confirm .swal2-styled");
  }
  get routeCardInput() {
    return $("#RouteCard");
  }
  get startQtyInput() {
    return $("#StartQty");
  }
  get startReasonDropdown() {
    return $("#StartReasonName");
  }

  get ChooseDateButton() {
    return $$('[aria-label="Choose date"]')[0]
  }


  getDepartmentDropdown() {
    return $("#StartDepartmentName");
  }

  getLevelDropDown() {
    return $("#Level");
  }
  get productionOrderDropdown() {
    return $("#ProductionOrder");
  }
  get productDropdown() {
    return $("#Product");
  }
  get customerDropdown() {
    return $("#Customer");
  }
  get factoryDropdown() {
    return $("#Factory");
  }
  get processFlowDropdown() {
    return $("#Processflow");
  }
  get locationDropdown() {
    return $("#Location");
  }
  get uomDropdown() {
    return $("#UOM");
  }
  get supplierItemDropdown() {
    return $("#SupplierItem");
  }
  get dueDateInput() {
    //return $('#:rr:');
    return $$('[placeholder="DD/MM/YYYY hh:mm:ss"]')[0];
  }
  get expirationDateInput() {
    return $$('[placeholder="DD/MM/YYYY hh:mm:ss"]')[1];
  }
  get submitButton() {
    return $('[type="submit"]');
  }
  get resetButton() {
    return $('[type="reset"]');
  }

  async clickSubmitButton() {
    await this.submitButton.click();
  }

  async clickResetButton() {
    await this.resetButton.click();
  }

  async enterRouteCard(routeCard) {
    await this.routeCardInput.setValue(routeCard);
  }

  async enterStartQty(startQty) {
    await this.startQtyInput.setValue(startQty);
  }

  async enterDepartment(department: string) {
    (await this.getDepartmentDropdown()).click();
    // (await this.getDepartmentDropdown()).selectByVisibleText(department);
    const suggestionOption = await browser.$(`//*[text()="${department}"]`);
    await suggestionOption.click();
    //(await this.getDepartmentDropdown()).setValue(department)
  }

  async enterLevel(level: string) {
    (await this.getLevelDropDown()).click();
    const suggestionOption = await browser.$(`//*[text()="${level}"]`);
    await suggestionOption.click();
  }

  async selectStartReason(reason: string) {
    (await this.startReasonDropdown).click();
    const suggestionOption = await browser.$(`//*[text()="${reason}"]`);
    await suggestionOption.click();
  }

  async selectProductionOrder(productionOrder: string) {
    await this.productionOrderDropdown.click();
    const suggestionOption = await browser.$(
      `//*[text()="${productionOrder}"]`
    );
    await suggestionOption.click();
  }

  async selectProductDropdown(product) {
    (await this.productDropdown).click();
    const suggestionOption = await browser.$(`//*[text()="${product}"]`);
    await suggestionOption.click();
  }

  async selectCustomerDropDown(customer: string) {
    await (await this.customerDropdown).click();
    const suggestionOption = await browser.$(`//*[text()="${customer}"]`);
    await suggestionOption.click();
  }

  async selectFactoryDropdown(factory: string) {
    await (await this.factoryDropdown).click();
    const suggestionOption = await browser.$(`//*[text()="${factory}"]`);
    await suggestionOption.click();
  }

  async selectProcessFlowDropdown(factory: string) {
    await (await this.processFlowDropdown).click();
    const suggestionOption = await browser.$(`//*[text()="${factory}"]`);
    await suggestionOption.click();
  }

  async selectLocationDropdown(location) {
    await (await this.locationDropdown).click();
    const suggestionOption = await browser.$(`//*[text()="${location}"]`);
    await suggestionOption.click();
  }

  async selectSupplierDropdown(supplier: string) {
    await (await this.supplierItemDropdown).click();
    const suggestionOption = await browser.$(`//*[text()="${supplier}"]`);
    await suggestionOption.click();
  }

  async selectUOMDropdown(uom: string) {
    await (await this.uomDropdown).click();
    const suggestionOption = await browser.$(`//*[text()="${uom}"]`);
    await suggestionOption.click();
  }

  convertDateToTimeStamp(dateString: string) {
    const [datePart, timePart] = dateString.split(" ");
    const [day, month, year] = datePart.split("/");
    const [hours, minutes, seconds] = timePart.split(":");
    const dateObject = new Date(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes), Number(seconds));
    return dateObject.getTime();
  }
  async enterDueDate(dueDate: string) {
    (await this.ChooseDateButton).click();
    const dataStamp = this.convertDateToTimeStamp(dueDate);
    const timestampString = dataStamp.toString();

    const dueDateCal = $(
      `//button[@role='gridcell' and @data-timestamp='${timestampString}']`
    );
    await dueDateCal.click();
    (await this.CalendarOkButton()).click()
  }
  async enterExpirationDate(expirationDate: string) {
    (await this.ChooseDateButton).click();
    const dataStamp = this.convertDateToTimeStamp(expirationDate);
    const timestampString = dataStamp.toString();
    const expDateCal = $(`//button[@role='gridcell' and @data-timestamp='${timestampString}']`);
    await expDateCal.click();
    (await this.CalendarOkButton()).click()
    //  (await this.expirationDateInput).setValue(expirationDate);
  }

  async getAlert() {
    const messageXPath = "//*[contains(text(), 'started successfully')]";
    return await $(messageXPath);
  }

  async okButton() {
    return $('//button[text()="Ok"]');
  }

  async CalendarOkButton(){
   return $('//button[text()="OK"]')
  }

  // Implement methods for other fields as needed
}

export default new StartTransactionPage();
