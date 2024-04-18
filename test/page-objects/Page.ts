class Page {
   async open (path:string) {
        browser.maximizeWindow();
        return await browser.url(path)
    }

    async click(ele: WebdriverIO.Element) {
        await ele.waitForClickable({ timeout: 5000 })
        if (!ele.elementId) {
            throw Error(ele.error?.message)
        }
        await ele.click()
    }
    async typeInto(ele: WebdriverIO.Element, text: string) {
        await ele.waitForDisplayed({ timeout: 5000 })
        if (!ele.elementId) {
            throw Error(ele.error?.message)
        }
        await ele.setValue(text)
    }
}

export default   Page;
