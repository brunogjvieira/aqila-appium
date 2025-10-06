import { getElementWhenDisplayed } from "../helpers/app.helper";

export default class FiltroPage {
  private driver: WebdriverIO.Browser;

  constructor(driver: WebdriverIO.Browser) {
    this.driver = driver;
  }

  get searchInput() {
    return this.driver.$(
      '//android.widget.EditText[@resource-id="RNE__Input__text-input"]'
    );
  }

  async search(text: string) {
    const input = await getElementWhenDisplayed(this.searchInput);
    await input.setValue(text);
  }

 async clickTalhao(nome: string) {
  const talhaoItem = await this.driver.$(
    `//android.widget.TextView[@resource-id="listItemTitle" and contains(@text, "${nome}")]`
  );
  await talhaoItem.waitForDisplayed({ timeout: 5000 });
  await talhaoItem.click();
}

}
