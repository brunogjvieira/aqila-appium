import { getElementWhenDisplayed } from "../helpers/app.helper";

export default class MenuLateralComponent {
  private driver: WebdriverIO.Browser;

  constructor(driver: WebdriverIO.Browser) {
    this.driver = driver;
  }

  get menuButton() {
    return this.driver.$(
      '//android.widget.Button[.//android.widget.TextView[@text=""]]'
    );
  }

  async openMenu() {
    const button = await getElementWhenDisplayed(this.menuButton);
    await button.click();
  }

  get selectPropriedadeOption() {
    return this.driver.$(
       '//android.view.ViewGroup[contains(@content-desc, "Propriedade")]'
    );
  }

  get selectSafraOption() {
    return this.driver.$(
       '(//android.view.ViewGroup[@clickable="true" and contains(@content-desc, "")])[2]'
    );
  }

  async openSelectSafra(){
    const option = await getElementWhenDisplayed(this.selectSafraOption)
    await option.click()
  }

  async openSelectPropriedade() {
    const option = await getElementWhenDisplayed(this.selectPropriedadeOption);
    await option.click();
  }

  // ➕ depois pode adicionar: openSafra(), openConfig(), etc
}
