

class LoginHelper {

    async login (user:any,passwordEle:any,username:string, password:string) {
      
        await user.waitForDisplayed({timeout:5000});
         await user.setValue(username);
        await passwordEle.waitForDisplayed({timeout:5000});
         await passwordEle.setValue(password);
       /*    (await this.submitBtn).waitForClickable({timeout:5000});
          (await this.submitBtn).waitForDisplayed({timeout:5000}); */
        // (await this.submitBtn).click() */
     
     }
}

export default new LoginHelper()