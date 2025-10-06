import { getElementWhenDisplayed } from "../helpers/app.helper";

export default class AcoesPage {
  private driver: WebdriverIO.Browser;

  constructor(driver: WebdriverIO.Browser) {
    this.driver = driver;
  }

  private get anotacaoBtn() {
    return this.driver.$('//android.widget.TextView[@text="Anotação"]');
  }

  private get ocorrenciaBtn() {
    return this.driver.$('//android.widget.TextView[@text="Ocorrência"]');
  }

  private get recomendacaoBtn() {
    return this.driver.$('//android.widget.TextView[@text="Recomendação"]');
  }

  private get afericaoBtn() {
    return this.driver.$('//android.widget.TextView[@text="Aferição"]');
  }

  private get aplicacaoBtn() {
    return this.driver.$('//android.widget.TextView[@text="Aplicação"]');
  }

  private get standBtn() {
    return this.driver.$('//android.widget.TextView[@text="Stand"]');
  }

  async clickAnotacao() {
    const btn = await getElementWhenDisplayed(this.anotacaoBtn);
    await btn.click();
  }

  async clickOcorrencia() {
    const btn = await getElementWhenDisplayed(this.ocorrenciaBtn);
    await btn.click();
  }

  async clickRecomendacao() {
    const btn = await getElementWhenDisplayed(this.recomendacaoBtn);
    await btn.click();
  }

  async clickAfericao() {
    const btn = await getElementWhenDisplayed(this.afericaoBtn);
    await btn.click();
  }

  async clickAplicacao() {
    const btn = await getElementWhenDisplayed(this.aplicacaoBtn);
    await btn.click();
  }

  async clickStand() {
    const btn = await getElementWhenDisplayed(this.standBtn);
    await btn.click();
  }
}
