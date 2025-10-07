import { getElementWhenDisplayed } from "../helpers/app.helper";

export default class AcaoComponent {
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

  async abrirNovaAnotacao() {
    const btn = await getElementWhenDisplayed(this.anotacaoBtn);
    await btn.click();
  }

  async abrirNovaOcorrencia() {
    const btn = await getElementWhenDisplayed(this.ocorrenciaBtn);
    await btn.click();
  }

  async abrirNovaRecomendacao() {
    const btn = await getElementWhenDisplayed(this.recomendacaoBtn);
    await btn.click();
  }

  async abrirNovaAfericao() {
    const btn = await getElementWhenDisplayed(this.afericaoBtn);
    await btn.click();
  }

  async abrirNovaAplicacao() {
    const btn = await getElementWhenDisplayed(this.aplicacaoBtn);
    await btn.click();
  }

  async abrirNovoStand() {
    const btn = await getElementWhenDisplayed(this.standBtn);
    await btn.click();
  }
}
