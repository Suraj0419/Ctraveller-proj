class RouteMaintenanceTransactionPage {
  getSuccessButton() {
    return $(".swal2-confirm .swal2-styled");
  }
  get routeDropdown() {
    return $('//input[@id="routeCard"]');
  }

  async getWarningMessageElement(warning) {
    return await $(`//p[@class='errorTextColor' and text()="${warning}"]`);
}

  get productTreeDropdown() {
    return $("//div[contains(@class, 'bootstarp-demo') and contains(@class, 'react-dropdown-tree-select')]");
  }

  get openYearViewButton() {
    return $(
      "//button[contains(@class, 'MuiPickersCalendarHeader-switchViewButton')]"
    );
  }
  async clickProductDropdown() {
    console.log('Product dropdown clicked')
     await (await this.productTreeDropdown).click();
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

  async clickYearViewButton() {
    await (await this.openYearViewButton).click();
  }

  yearDifference(dateString,existingDateString) {
    // Parse the input date
    const [day, month, year, time] = dateString.split(/[\s/:]/);
   // const givenDate = new Date(`${year}-${month}-${day}T${time || "00:00:00"}`);
    let existingDate:any
    console.log(existingDateString+" existing date string")
    if(existingDateString){
      const [day, month, year, time] = existingDateString.split(/[\s/:]/);
      console.log(time)
       existingDate = new Date(`${year}-${month}-${day}`);
    }

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in years
    let yearsDifference :number;
    console.log(existingDate)
    if(existingDate){
      yearsDifference = year - existingDate.getFullYear();
    }
    else{
      yearsDifference = year - currentDate.getFullYear();
    }
    console.log(yearsDifference+" years difference")
   
    return yearsDifference;
  }

  get CalendarNextButton() {
    return $("//button[@aria-label='Next month']");
  }

  get CalendarPreviousButton() {
    return $("//button[@aria-label='Previous month']");
  }

  async clickNextCalendarButton() {
    await (await this.CalendarNextButton).click();
  }
  async clickPreviousCalendarButton() {
    await (await this.CalendarPreviousButton).click();
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

  getMonth(dateString) {
    const [day, month, year, time] = dateString.split(/[\s/:]/);
    const givenDate = new Date(`${year}-${month}-${day}T${time || "00:00:00"}`);
    console.log(givenDate)

    return month;
  }

  getYear(dateString) {
    const [day, month, year, time] = dateString.split(/[\s/:]/);
    // const givenDate = new Date(`${year}-${month}-${day}T${time || "00:00:00"}`);
    console.log(year);

    return year;
  }

  getMonthDifference(dateString,existingDateString) {
    // Split the input date string into date and time parts
    const [datePart, timePart] = dateString.split(" ")

    // Split the date part into day, month, and year
    const [day, month, year] = datePart.split("/").map(Number);
    let existingDate:any;
    const time = timePart || "00:00:00";
    console.log(datePart+ " date part");
    console.log(month);
    let existingMonth=0;
    if(existingDateString){
      const [datePart, timePart] = existingDateString.split(" ")
      const timePeriod = timePart || "00:00:00";
      const [day, month, year] = existingDateString.split("/").map(Number);
      existingMonth=month;
      existingDate = `${year}-${String(month).padStart(2,"0" )}-${String(day).padStart(2, "0")}T${timePeriod}`;
    }

    // Use the time part if available, otherwise default to "00:00:00"

    // Construct the date string in the format "YYYY-MM-DDTHH:MM:SS"
    const formattedDateStr = `${year}-${String(month).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}T${time}`;

    // Create the Date object from the formatted string
    const givenDate = new Date(formattedDateStr);
    console.log(existingMonth+" existing month")

    const currentDate = new Date();
    let monthsDifference:number;
     if(existingDateString){
      console.log('existing date string exists')
      monthsDifference = month - existingMonth;
     }
     else{
      console.log('current date '+currentDate.getMonth())
      monthsDifference = month - (currentDate.getMonth()+1);
     }
    

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

  async selectRouteDropdown(routeCard: string) {
    await (await this.routeDropdown).click();
    await (await this.routeDropdown).setValue(routeCard);
    const suggestionOption = await $(`//*[text()="${routeCard}"]`);
    await suggestionOption.waitForDisplayed({ timeout: 35000 });
    await suggestionOption.waitForClickable({ timeout: 35000 });
    console.log(suggestionOption);
    await suggestionOption.click();
  }
  get startReasonDropdown() {
    return $("#StartReasonName");
  }

  async ChooseDateButton() {
    return await $("//label[text()='Due Date']/following-sibling::div//button[contains(@aria-label, 'Choose date')]")
}


async chooseExpButton() {
  return await $("//label[text()='Expiration Date']/following-sibling::div//button[contains(@aria-label, 'Choose date')]")
}


  async getDepartmentDropdown() {
    return await $("#DepName");
  }

  async  getClearButtonByLabel(label) {
    return await $(`//label[contains(text(), "${label}")]/following-sibling::div//button[@title="Clear" and contains(@class, "MuiAutocomplete-clearIndicator")]`);
}



  async getLevelDropDown() {
    return await $("#Levelname");
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
  async dueDateInput() {
    //return $('#:rr:');
    return await $$('[placeholder="DD/MM/YYYY hh:mm:ss"]')[0];
  }
  async expirationDateInput() {
    return await $$('[placeholder="DD/MM/YYYY hh:mm:ss"]')[1];
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

  async enterDepartment(department: string) {
    (await this.getDepartmentDropdown()).click();
    // (await this.getDepartmentDropdown()).selectByVisibleText(department);
    const suggestionOption = await browser.$(`//*[text()="${department}"]`);
    await suggestionOption.click();
    //(await this.getDepartmentDropdown()).setValue(department)
  }

  
  async clearDeparment() {
    await(await this.getDepartmentDropdown()).click();
    // (await this.getDepartmentDropdown()).selectByVisibleText(department);
     const clearArray = await browser.$$(`//button[contains(@class, 'MuiAutocomplete-clearIndicator')]`);
    await clearArray[1].click();
  }

  async clearLevel() {
   await (await this.getLevelDropDown()).click();
    // (await this.getDepartmentDropdown()).selectByVisibleText(department);
    const clearArray = await browser.$$(`//button[contains(@class, 'MuiAutocomplete-clearIndicator')]`);
    console.log(clearArray.length)
    await clearArray[2].waitForClickable({timeout:6000})
    await clearArray[2].click();
    //(await this.getDepartmentDropdown()).setValue(department)
  }

  async clearStartReason() {
   await (await this.startReasonDropdown).click();
    // (await this.getDepartmentDropdown()).selectByVisibleText(department);
    const clearArray = await browser.$$(`//button[contains(@class, 'MuiAutocomplete-clearIndicator')]`);
    await clearArray[3].click();
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

  async selectFactoryDropdown(factory: string) {
    await (await this.factoryDropdown).click();
    const suggestionOption = await browser.$(`//*[text()="${factory}"]`);
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
    await(await this.ChooseDateButton()).click();
    const existingDate=await(await this.dueDateInput()).getValue();
    const yearDifference = this.yearDifference(dueDate,existingDate);
    console.log('due date called before'+dueDate)
    
    if (yearDifference == 0) {
      const monthDifference = this.getMonthDifference(dueDate,existingDate);
      console.log(monthDifference);
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
    console.log(timestampString)
    const dueDateCal = await $(`//button[@role='gridcell' and @data-timestamp='${timestampString}']`);
    await dueDateCal.waitForClickable({timeout:5000})
    await dueDateCal.click();
    await (await this.CalendarOkButton()).click();
    console.log('due date called end'+dueDate)
  }
  async enterExpirationDate(expirationDate: string) {
   
    await (await this.chooseExpButton()).click();
    const existingDateString=await(await this.expirationDateInput()).getValue();
    console.log('expiration date start'+expirationDate)
    console.log(existingDateString+ "existing date string")
    const yearDifference = this.yearDifference(expirationDate,existingDateString);
    console.log(yearDifference+" year difference")
    
    if (yearDifference === 0) {
      const monthDifference = this.getMonthDifference(expirationDate,existingDateString);
      console.log(monthDifference+'month difference');
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
      const year = this.getYear(expirationDate);
      await (await this.selectYearButton(year)).click();
      const monthNum = this.getMonth(expirationDate);
      const month = this.getMonthName(monthNum);
      await (await this.selectMonthButton(month)).click();
    }
    const dataStamp = this.convertDateToTimeStamp(expirationDate);
    console.log(expirationDate+ " expiration date string")
    const timestampString = dataStamp.toString();
    console.log(timestampString)
    const expDateCal = await $(`//button[@role='gridcell' and @data-timestamp='${timestampString}']` );
    await expDateCal.waitForClickable({timeout:5000})
    await expDateCal.click();
    await (await this.CalendarOkButton()).click();
    console.log('expiration date end'+expirationDate)
  }

  async getAlert() {
    const messageXPath =
      "//*[contains(text(), 'RouteCard Maintenance successful')]";
    return await $(messageXPath);
  }

  async okButton() {
    return await $('//button[text()="Ok"]');
  }

  async CalendarOkButton() {
    return await $('//button[text()="OK"]');
  }

  get getProductText() {
    return $('//h4[text()="Product:"]');
  }

  // Implement methods for other fields as needed
}

export default new RouteMaintenanceTransactionPage();
