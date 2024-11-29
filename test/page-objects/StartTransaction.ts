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

  get openYearViewButton() {
    return $(
      "//button[contains(@class, 'MuiPickersCalendarHeader-switchViewButton')]"
    );
  }

  get productTreeDropdown() {
    return $("//label[contains(text(), 'Product')]/following-sibling::div[contains(@class, 'react-dropdown-tree-select')]");
  }

  get processFlowTreeDropdown() {
    return $("//label[contains(text(), 'Processflow')]/following-sibling::div[contains(@class, 'react-dropdown-tree-select')]");
  }
  async clickYearViewButton() {
  
    await (await this.openYearViewButton).click();
  }

  async clickProductDropdown() {
   console.log('Product dropdown clicked')
    await (await this.productTreeDropdown).click();
  }
  async clickProcessFlowDropdown() {
    console.log('Process flow dropdown clicked')
    await (await this.processFlowTreeDropdown).click();
  }

  async selectYearButton(year) {
    return await $(
      `//button[contains(@class, 'MuiPickersYear-yearButton') and text()='${year}']`
    );
  }
  selectMonthButton(month) {
    return $(
      `//button[contains(@class, 'MuiPickersMonth-monthButton ') and text()='${month}']`
    );
  }

  getDisabledInput() {
    return $("//input[@disabled and @type='text']");
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

  get statusDropdown() {
    return $("#combo-box-demo");
  }
  get startReasonDropdown() {
    return $("#StartReasonName");
  }

  async  productRevision(str) {
    return await $(`//label[@title="${str}"]/../i`);
  }
 
  async  productInnerRevision(str) {
    return await $(`//label[@title="${str}"]`);
  }
  async clickProductRevision(str){
    await(await this.productRevision(str)).click();
  }

  async clickOk(){
    await(await this.okButton()).click();
  }

  async clickProductInnerRevision(str){
    await(await this.productInnerRevision(str)).click();
  }


  async ChooseDateButton() {
    return await $("//label[text()='Due Date']/following-sibling::div//button[contains(@aria-label, 'Choose date')]")
}


async chooseExpButton() {
  return await $("//label[text()='Expiration Date']/following-sibling::div//button[contains(@aria-label, 'Choose date')]")
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
  //button[@aria-label='Next month']

  get CalendarNextButton() {
    return $("//button[@aria-label='Next month']");
  }

  get CalendarPreviousButton() {
    return $("//button[@aria-label='Previous month']");
  }
  get submitButton() {
    return $('[type="submit"]');
  }

  get numberingRuleChecbox() {
    return $("//input[@type='checkbox' and @id='UseNumberingRule']");
  }
  get resetButton() {
    return $('[type="reset"]');
  }

  async clickSubmitButton() {
    await this.submitButton.click();
  }

  async selectStatusDropdown(status){
    (await this.statusDropdown).click();
    // (await this.getDepartmentDropdown()).selectByVisibleText(department);
    const suggestionOption = await browser.$(`//*[text()="${status}"]`);
    await suggestionOption.click();
  }

  async clickNumberingRule() {
    await (await this.numberingRuleChecbox).click();
  }

  async clickResetButton() {
    await this.resetButton.click();
  }

  async enterRouteCard(routeCard: string) {
    console.log(routeCard);
    await this.routeCardInput.setValue(routeCard);
  }

  async enterStartQty(startQty) {
    await (await this.startQtyInput).addValue(startQty);
  }

  async getStartQty() {
    return await (await this.startQtyInput).getValue();
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
    await (await this.productDropdown).click();
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
    const reset =await $("//label[normalize-space(text())='Factory']/following-sibling::div//button[@aria-label='Clear']");
    await reset.click();
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

  async clickNextCalendarButton() {
    await browser.pause(1000);
    console.log('Next calendar button clicking');
    await (await this.CalendarNextButton).click();
    console.log('Next calendar button clicked');
  }
  async clickPreviousCalendarButton() {
    await browser.pause(1000);
    console.log('Previous calendar button clicking');
    await (await this.CalendarPreviousButton).click();
    console.log('Previous calendar button clicked');
  }

  yearDifference(dateString) {
    // Parse the input date
    const [day, month, year, time] = dateString.split(/[\s/:]/);
    console.log(day)
    console.log(month)
    console.log(year)
    console.log(time)
   
    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in years
    let yearsDifference = year - currentDate.getFullYear();
    return yearsDifference;
  }

  getYear(dateString) {
    const [day, month, year, time] = dateString.split(/[\s/:]/);
   // const givenDate = new Date(`${year}-${month}-${day}T${time || "00:00:00"}`);
    console.log(year)

    return year;
  }

  getMonth(dateString) {
    const [day, month, year, time] = dateString.split(/[\s/:]/);
    const givenDate = new Date(`${year}-${month}-${day}T${time || "00:00:00"}`);

    return month;
  }

  getMonthDifference(dateString) {
    // Split the input date string into date and time parts
    const [datePart, timePart] = dateString.split(" ");

    // Split the date part into day, month, and year
    const [day, month, year] = datePart.split("/").map(Number);

    // Use the time part if available, otherwise default to "00:00:00"
    const time = timePart || "00:00:00";

    // Construct the date string in the format "YYYY-MM-DDTHH:MM:SS"
    const formattedDateStr = `${year}-${String(month).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}T${time}`;

    // Create the Date object from the formatted string
    const givenDate = new Date(formattedDateStr);

    const currentDate = new Date();

    const monthsDifference = month - (currentDate.getMonth()+1);

    return monthsDifference;
  }

  getMonthName(monthNumber) {
    // Array of month names
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "October",
      "Nov",
      "Dec",
    ];
    if (monthNumber < 1 || monthNumber > 12) {
      throw new Error(
        "Invalid month number. Please provide a number between 1 and 12."
      );
    }
    return monthNames[monthNumber - 1];
  }

  
  convertDateToTimeStamp(dateString: string) {
    const [datePart, timePart] = dateString.split(" ");
    const [day, month, year] = datePart.split("/");
    const [hours, minutes, seconds] = timePart.split(":");
    const dateObject = new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hours),
      Number(minutes),
      Number(seconds)
    );
    return dateObject.getTime();
  }
  async enterDueDate(dueDate: string) {
    console.log('due date start')
    await(await this.ChooseDateButton()).click();
   
    const yearDifference = this.yearDifference(dueDate);
    if (yearDifference == 0) {
      const monthDifference = this.getMonthDifference(dueDate);
      console.log(monthDifference+" month difference");
      if (monthDifference != 0) {
        if (monthDifference > 0) {
          for (let i = 0; i < monthDifference; i++) {
            await this.clickNextCalendarButton();
          }
        } else {
          let absVal = Math.abs(monthDifference);
          for (let i = 0; i < absVal; i++) {
            await this.clickPreviousCalendarButton();
          }
        }
      }
    } else {
      await this.clickYearViewButton();
      const year = this.getYear(dueDate);
      await (await this.selectYearButton(year)).click();
      const monthNum = this.getMonth(dueDate);
      const month = this.getMonthName(monthNum);
      await (await this.selectMonthButton(month)).click();
    }
    const dataStamp = this.convertDateToTimeStamp(dueDate);
    const timestampString = dataStamp.toString();
    console.log(dataStamp);
    console.log(timestampString)
    const dueDateCal = await $(
      `//button[@role='gridcell' and @data-timestamp='${timestampString}']`
    );
    await dueDateCal.click();
    await (await this.CalendarOkButton()).click();
    console.log('due date ended')
  }
  async enterExpirationDate(expirationDate: string) {
    console.log('exp date started')
    await(await this.chooseExpButton()).click();
    const yearDifference=this.yearDifference(expirationDate)
    console.log(yearDifference+" year differe")
    if(yearDifference===0){
    const monthDifference = this.getMonthDifference(expirationDate);
    console.log(monthDifference+ " month difference");
    if (monthDifference != 0) {
      if (monthDifference > 0) {
        for (let i = 0; i < monthDifference; i++) {
          await this.clickNextCalendarButton();
        }
      } else {
        let absVal = Math.abs(monthDifference);
        for (let i = 0; i < absVal; i++) {
          await this.clickPreviousCalendarButton();
        }
      }

      //  (await this.expirationDateInput).setValue(expirationDate);
    }
  }
  else{
    await this.clickYearViewButton();
      const year = this.getYear(expirationDate);
      await (await this.selectYearButton(year)).click();
      const monthNum = this.getMonth(expirationDate);
      const month = this.getMonthName(monthNum);
      await (await this.selectMonthButton(month)).click();
  }
    const dataStamp = this.convertDateToTimeStamp(expirationDate);
    console.log(dataStamp)
    const timestampString = dataStamp.toString();
    const expDateCal = await $(
      `//button[@role='gridcell' and @data-timestamp='${timestampString}']`
    );
    await expDateCal.click();
    await (await this.CalendarOkButton()).click();
    console.log('exp date ended')
  }

  async getAlert(msg: string) {
    const messageXPath = `//*[contains(text(), '${msg}')]`;
    return await $(messageXPath);
  }

  async okButton() {
    return await $('//button[text()="Ok"]');
  }

  async CalendarOkButton() {
    return await $('//button[text()="OK"]');
  }

  getFirstQuotedString(str: string) {
    const match = str.match(/'([^']+)'/);
    let quotedString = null;
    if (match && match[1]) {
      const firstQuotedString = match[1];
      console.log("First quoted string:", firstQuotedString);
      quotedString = firstQuotedString;
    } else {
      console.log("No quoted string found");
    }
    return quotedString;
  }

  // Implement methods for other fields as needed
}

export default new StartTransactionPage();
