import {
  getElementWhenDisplayed,
  getTextWhenDisplayed,
} from "../helpers/app.helper";

export default class SafraPage {
  private driver: WebdriverIO.Browser;

  constructor(driver: WebdriverIO.Browser) {
    this.driver = driver;
  }

  // Safra marcada como atual
  get safraAtualElement() {
    return this.driver.$(
      '//android.widget.TextView[contains(@text, "(atual)")]'
    );
  }

  async waitForSafraAtual() {
    return await getElementWhenDisplayed(this.safraAtualElement);
  }

 async isOnSafraScreen(timeout = 1500): Promise<boolean> {
  return this.safraAtualElement.waitForExist({ timeout }).then(() => true).catch(() => false);
}

 get fecharBtn() {
  return this.driver.$(
    '//android.widget.TextView[@text="Safras"]/../preceding-sibling::android.view.ViewGroup[1]//android.widget.Button'
  );
}

async fecharSafras() {
      await this.fecharBtn.click();

}

  async getSafraAtualName() {
    const safraAtual = await this.waitForSafraAtual();
    let text = await safraAtual.getText();
    return text.replace(" (atual)", "").trim();
  }

  // Lista de safras (padViews)
  getSafraByIndex(index: number | string) {
    const position = index;
    return this.driver.$(
      `(//android.view.ViewGroup[@resource-id="padView"])[${position}]`
    );
  }

  async getSafrasCount() {
    const safras = await this.driver.$$(
      '//android.view.ViewGroup[contains(@content-desc, "20")]'
    );
    return safras.length;
  }

  getPeriodoByIndex(index: number | string) {
    const position = index;
    return this.driver.$(
      `(//android.view.ViewGroup[@resource-id="padView"])[${position}]`
    );
  }

  async waitForPeriodobyIndex(index: number | string) {
    const periodo = await this.getPeriodoByIndex(index);
    return await getElementWhenDisplayed(periodo);
  }

  async clickPeriodoByIndex(index: number | string) {
    const periodo = await this.waitForPeriodobyIndex(index);
    await periodo.click();
  }

  async clickPeriodoByName(nome: string) {
  const periodo = await this.driver.$(
    `//android.widget.TextView[@resource-id="listItemTitle" and @text="${nome}"]`
  );
  await periodo.waitForDisplayed({ timeout: 5000 });
  await periodo.click();
}


  async waitForSafraByIndex(index: number | string) {
    const safra = await this.getSafraByIndex(index);
    return await getElementWhenDisplayed(safra);
  }

  async getSafraNameByIndex(index: number | string) {
    const safra = await this.waitForSafraByIndex(index);
    const nameElement = await safra.$(
      './/android.widget.TextView[@resource-id="listItemTitle"]'
    );
    return await getTextWhenDisplayed(nameElement);
  }

  async selectSafraByIndex(index: number | string) {
    const safra = await this.waitForSafraByIndex(index);
    await safra.click();
  }

  async clickFilteredSafra(name: string) {
    const filteredSafra = await driver.$(
      `//android.view.ViewGroup[contains(@content-desc, "${name}")]`
    );
    await filteredSafra.waitForDisplayed({ timeout: 5000 });
    await filteredSafra.click();
  }

  get exibirTodasButton() {
    return this.driver.$(
      '//android.widget.Button[.//android.widget.TextView[@text="Exibir todas"]]'
    );
  }

  async clickExibirTodas() {
    const btn = await getElementWhenDisplayed(this.exibirTodasButton);
    await btn.click();
  }
}
