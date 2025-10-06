import { getElementWhenDisplayed, getTextWhenDisplayed } from "../helpers/app.helper";

export default class LoginPage {
  private driver: WebdriverIO.Browser;

  constructor(driver: WebdriverIO.Browser) {
    this.driver = driver;
  }

get emailField() {
  return this.driver.$('(//android.widget.EditText[@resource-id="RNE__Input__text-input"])[1]');
}

  async waitForEmailField() {
    return await getElementWhenDisplayed(this.emailField, 10000);
  }

 get passwordField() {
  return this.driver.$('(//android.widget.EditText[@resource-id="RNE__Input__text-input"])[2]');
}

  async waitForPasswordField() {
    return await getElementWhenDisplayed(this.passwordField, 10000);
  }

  get loginButton() {
    return this.driver.$('android=new UiSelector().descriptionContains("Entrar")');
  }

  async isOnLoginScreen(timeout = 1500): Promise<boolean> {
  return this.loginButton.waitForExist({ timeout }).then(() => true).catch(() => false);
}

  async waitForLoginButton() {
    return await getElementWhenDisplayed(this.loginButton, 10000);
  }

  get invalidCredentialsMessage() {
    return this.driver.$('//android.widget.TextView[contains(@text, "Login")]');
  }

  // Usando helpers
  async getInvalidCredentialMessage(timeout = 5000) {
    return await getTextWhenDisplayed(this.invalidCredentialsMessage, timeout);
  }

  async clearFields() {
    const emailInput = await this.waitForEmailField();
    const passwordInput = await this.waitForPasswordField();
    await emailInput.clearValue();
    await passwordInput.clearValue();
  }

  async login(email: string, password: string) {
    const emailInput = await this.waitForEmailField();
    await emailInput.setValue(email);

    const passwordInput = await this.waitForPasswordField();
    await passwordInput.setValue(password);

    const loginBtn = await this.waitForLoginButton();
    await loginBtn.click();
  }
}
