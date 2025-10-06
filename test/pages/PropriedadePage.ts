import {
  getElementWhenDisplayed,
  getTextWhenDisplayed,
} from "../helpers/app.helper";

export default class PropriedadePage {
  private driver: WebdriverIO.Browser;

  constructor(driver: WebdriverIO.Browser) {
    this.driver = driver;
  }

get selectPropertyText() {
  return this.driver.$(
    '//android.view.ViewGroup[contains(@content-desc,"Selecione a propriedade") or contains(@content-desc,"AG")]'
  );
}


  async waitForSelectPropertyText() {
    return await getElementWhenDisplayed(this.selectPropertyText);
  }

  getProperty(index: number | string) {
    return this.driver.$(
      `(//android.view.ViewGroup[@resource-id="padView"])[${index}]`
    );
  }

  async waitForProperty(index: number | string) {
    const element = await this.getProperty(index);
    return await getElementWhenDisplayed(element);
  }

  async clickFilteredProperty(propertyText: string) {
    const filteredProperty = await this.driver.$(
      `(//android.view.ViewGroup[@resource-id="padView"]//android.widget.TextView[@text="${propertyText}"])`
    );
    await filteredProperty.waitForDisplayed({ timeout: 5000 });
    await filteredProperty.click();
  }

  async getPropertyName(index: number | string) {
    const property = await this.getProperty(index);
    const nameElement = await property.$(
      './/android.widget.TextView[@resource-id="listItemTitle"]'
    );
    return await nameElement.getText();
  }

  async selectPropertyByMonitoryScreen(nome: string) {
    // espera o botão "Selecione a propriedade"
    const element = await this.waitForSelectPropertyText();
    await element.click();

   const property = await this.driver.$(
    `//android.widget.TextView[@resource-id="listItemTitle" and @text="${nome}"]`
  );
  await property.waitForDisplayed({ timeout: 5000 });
  await property.click();
  }
}
