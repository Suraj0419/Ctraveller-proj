class closeTransaction {
  get routeDropdown() {
    return $('//input[@id="routeCard"]');
  }

  async selectRouteDropdown(routeCard: string) {
    await (await this.routeDropdown).click();
    await (await this.routeDropdown).setValue(routeCard);
    const suggestionOption = await $(`//*[text()="${routeCard}"]`);
    await suggestionOption.waitForDisplayed({ timeout: 2000 })
    await suggestionOption.waitForClickable({ timeout: 2000 })
    console.log(suggestionOption)
    await suggestionOption.click();
  }

  async closedSuccessfully() {
    let actualText = (await $(`//div[contains(text(), 'Closed successfully on')]`)).getText();
    return actualText;
  }

  get submitButton() {
    return $("//button[@type='submit']");
  }
}

export default new closeTransaction();