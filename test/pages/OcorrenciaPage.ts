// pages/OcorrenciaPage.ts
export default class OcorrenciaPage {
  constructor(private driver: WebdriverIO.Browser) {}

  private primeiroCheckboxFiltradoPorNome = (texto: string) =>
    this.driver.$(
      `(//android.widget.CheckBox[.//android.widget.TextView[@text="${texto}"]])[1]`
    );

  private botaoConfirmarOcorrencia(){
    return this.driver.$('//android.widget.TextView[@text=""]');
  }

  async clicarBotaoConfirmarOcorrencia(timeout: number = 3000): Promise<void> {
    const elemento = await this.botaoConfirmarOcorrencia();
    await elemento.waitForDisplayed({ timeout });
    await elemento.click();
  }

  async marcarPrimeiroCheckbox(texto: string, timeout: number = 3000): Promise<void> {
    const elemento = await this.primeiroCheckboxFiltradoPorNome(texto);
    await elemento.waitForDisplayed({ timeout });
    await elemento.click();
  }
}
