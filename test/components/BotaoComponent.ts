export default class BotoesComponent {
  private driver: WebdriverIO.Browser;

  constructor(driver: WebdriverIO.Browser) {
    this.driver = driver;
  }

  // --- Botões textuais
  get botaoSalvarTexto() {
    return this.driver.$('//android.widget.TextView[@text="Salvar"]'); 
  }

  get botaoCancelarTexto() {
    return this.driver.$('//android.widget.TextView[@text="Cancelar"]');
  }

  get botaoFecharX() {
    return this.driver.$('//android.widget.Button[@content-desc="Fechar" or @content-desc="Cancelar"]');
  }

  get botaoConfirmarVisto() {
    return this.driver.$('//android.widget.TextView[@text=""]');
  }

  get botaoProximoPasso() {
    return this.driver.$('//android.widget.Button[@content-desc=""]');
  }

  async clicarBotaoProximoPasso(){
    await this.botaoProximoPasso.click();
  }

  async clicarSalvar() {
    await this.botaoSalvarTexto.waitForDisplayed({ timeout: 5000 });
    await this.botaoSalvarTexto.click();
  }

  async clicarCancelarTexto() {
    await this.botaoCancelarTexto.waitForDisplayed({ timeout: 5000 });
    await this.botaoCancelarTexto.click();
  }

  async clicarFecharX() {
    await this.botaoFecharX.waitForDisplayed({ timeout: 5000 });
    await this.botaoFecharX.click();
  }

  async clicarConfirmarVisto() {
    await this.botaoConfirmarVisto.waitForDisplayed({ timeout: 5000 });
    await this.botaoConfirmarVisto.click();
  }
}
