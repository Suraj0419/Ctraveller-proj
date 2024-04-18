import Page from "./page1.js";
import reporter from "../helper/reporter.js";

class HomePage extends Page {
    constructor() {
        super();
    }

    /**Page Objects */
    get userNameInputBox() {
        return $(`#user-name`);
    }
    get passwordInputBox() {
        return $(`#password`);
    }
    get loginButton() {
        return $(`#login-button`);
    }

    /**Page Action */
    async enterUserName(testid: string, username: string) {
        if (!username) throw Error(`Given username: ${username} is not valid`);
        try {
            username = username.trim();
            await this.typeInto(await this.userNameInputBox, username);
            reporter.addStep(testid, "info", `Username: ${username} entered successfully`);
        } catch (err) {
            err.message = `Error entering username: ${username}, ${err.message}`;
            throw err;
        }
    }
    async enterPassword(testid: string, password: string) {
        if (!password) throw Error(`Invalid Password...`);
        try {
            password = password.trim();
            await this.typeInto(await this.passwordInputBox, password);
            reporter.addStep(testid, "info", `Password entered successfully`);
        } catch (err) {
            err.message = `Error entering password ...!, ${err.message}`;
            throw err;
        }
    }
    async clickOnLoginButton(testid: string) {
        try {
            await this.click(await this.loginButton)
            reporter.addStep(testid, "info", `Login button clicked successfully`);
        } catch (err) {
            err.message = `Failed to click login button ...!, ${err.message}`;
            throw err;
        }
    }

    async loginToSauseApp(testId: string, username: string, password: string){
        try {
            await this.enterUserName(testId, username);
            await this.enterPassword(testId, password);
            await this.clickOnLoginButton(testId);
        } catch (err) {
            throw err;
        }
    }
}

export default new HomePage();
