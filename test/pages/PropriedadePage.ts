import { getElementWhenDisplayed } from "../helpers/app.helper";

export default class PropriedadePage {
  private driver: WebdriverIO.Browser;

  constructor(driver: WebdriverIO.Browser) {
    this.driver = driver;
  }

  get campoSelecionePropriedade() {
    return this.driver.$(
      '//android.view.ViewGroup[contains(@content-desc,"Selecione a propriedade") or contains(@content-desc,"AG")]'
    );
  }

  async aguardarCampoSelecionePropriedade() {
    return await getElementWhenDisplayed(this.campoSelecionePropriedade);
  }

  propriedadePorIndice(index: number | string) {
    return this.driver.$(
      `(//android.view.ViewGroup[@resource-id="padView"])[${index}]`
    );
  }

  async aguardarPropriedadePorIndice(index: number | string) {
    const element = await this.propriedadePorIndice(index);
    return await getElementWhenDisplayed(element);
  }

  async clicarPropriedadeFiltrada(propertyText: string) {
    const propriedadeFiltrada = await this.driver.$(
      `(//android.view.ViewGroup[@resource-id="padView"]//android.widget.TextView[@text="${propertyText}"])`
    );
    await propriedadeFiltrada.waitForDisplayed({ timeout: 5000 });
    await propriedadeFiltrada.click();
  }

  async getPropriedadeNomePorIndice(index: number | string) {
    const propriedade = await this.aguardarPropriedadePorIndice(index);
    const nomePropriedade = await propriedade.$(
      './/android.widget.TextView[@resource-id="listItemTitle"]'
    );
    return await nomePropriedade.getText();
  }

  async selecionarPropriedadeNaMonitoria(nome: string) {
    const element = await this.aguardarCampoSelecionePropriedade();
    await element.click();

    const propriedade = await this.driver.$(
      `//android.widget.TextView[@resource-id="listItemTitle" and @text="${nome}"]`
    );
    await propriedade.waitForDisplayed({ timeout: 5000 });
    await propriedade.click();
  }
}
