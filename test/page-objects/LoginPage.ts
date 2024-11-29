
import Page from "./Page.ts";

class Login extends Page {

  get usernameInput() { return $('#email'); }
  get passwordInput() { return $('#password'); }
  get submitButton() { return $('[type="submit"]'); }

  open(path:string){
    return super.open(path)
  }

  async getLoginText(){
    return $('//h1[text()="Sign in CTraveller"]');
  }


  async login (username:string, password:string) {

   (await this.usernameInput).waitForDisplayed({timeout:5000});
    (await this.usernameInput).setValue(username);
   (await this.passwordInput).waitForDisplayed({timeout:5000});
    (await this.submitButton).setValue(password);
  /*    (await this.submitBtn).waitForClickable({timeout:5000});
     (await this.submitBtn).waitForDisplayed({timeout:5000}); */
   // (await this.submitBtn).click() */

}



}

export default new Login();
