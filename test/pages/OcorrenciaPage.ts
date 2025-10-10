// pages/OcorrenciaPage.ts
export default class OcorrenciaPage {
  constructor(private driver: WebdriverIO.Browser) {}

  private primeiroCheckboxFiltradoPorNome = (texto: string) =>
    this.driver.$(
      `(//android.widget.CheckBox[.//android.widget.TextView[@text="${texto}"]])[1]`
    );

  private botaoConfirmarOcorrencia() {
    return this.driver.$('//android.widget.TextView[@text=""]');
  }

  private nomeDaPragaSelecionada = (nomePraga: string) => {
    return this.driver.$(`//android.widget.TextView[@text="${nomePraga}"]`);
  };

  private campoNumeroPlantas = () =>
    this.driver.$(
      `//android.widget.TextView[@resource-id="listItemTitle" and @text="Nº plantas"]` +
      `/following-sibling::android.view.ViewGroup[1]//android.widget.EditText[@resource-id="RNE__Input__text-input"]`
    );

  private atividadeNome = (atividadeNome: string) => {
    return this.driver.$(`//android.widget.TextView[@text="${atividadeNome}"]`);
  }

  private botaoEstadio = () =>
    this.driver.$('(//android.widget.TextView[@text=""])[2]'
    );

  private estadioNome = (estadioNome: string) => {
    return this.driver.$(`(//android.widget.TextView[@text="${estadioNome}"])[2]`)
  }

  private observacaoCampo = () => {
    return this.driver.$('//android.widget.EditText[@text="Observações"]');
  }

  async escreverObservacao(texto: string): Promise<void> {
    const el = await this.observacaoCampo();
    await el.clearValue();
    await el.setValue(texto);
  }

async selecionarEstadio(estadioNome: string, timeout = 2000): Promise<void> {
    const elemento = await this.estadioNome(estadioNome);
    await elemento.waitForDisplayed({ timeout });
    await elemento.click();
  }
  
async modalSelecionarEstadio(): Promise<void> {
    const el = await this.botaoEstadio();
    await el.click();
  }


  async verificarAtividadeNome(atividadeNome: string, timeout = 1000): Promise<boolean> {
    const elemento = await this.atividadeNome(atividadeNome);
    return elemento.waitForDisplayed({ timeout });
  }

  async preencherNumeroPlantas(valor: number | string): Promise<void> {
    const el = await this.campoNumeroPlantas();

    await el.clearValue();
    await el.setValue(String(valor));
}

  async validarPragaSelecionada(
    nomePraga: string,
    timeout: number = 1000
  ): Promise<boolean> {
    const elemento = await this.nomeDaPragaSelecionada(nomePraga);
    return elemento.waitForDisplayed({ timeout });
  }

  async clicarBotaoConfirmarOcorrencia(timeout: number = 3000): Promise<void> {
    const elemento = await this.botaoConfirmarOcorrencia();
    await elemento.waitForDisplayed({ timeout });
    await elemento.click();
  }

  async marcarPrimeiroCheckbox(
    texto: string,
    timeout: number = 3000
  ): Promise<void> {
    const elemento = await this.primeiroCheckboxFiltradoPorNome(texto);
    await elemento.waitForDisplayed({ timeout });
    await elemento.click();
  }
}
