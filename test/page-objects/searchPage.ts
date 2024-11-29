class SearchTransaction {
  async getSearchValue() {
    return await $('//input[@id="filter"]');
  }

  async enterSearchValue(searchValue: string) {
    console.log(await (await this.getSearchValue()).isEnabled());
    console.log(await (await this.getSearchValue()).isClickable());
    await (await this.getSearchValue()).waitForEnabled({ timeout: 7000 });
    await (await this.getSearchValue()).scrollIntoView();
    await (await this.getSearchValue()).clearValue();
    await (await this.getSearchValue()).setValue(searchValue);
  }

  async getSearchLinks(searchString: string) {
    return await $$(`//span[contains(text(),${searchString})]`);
  }
}
export default new SearchTransaction();
