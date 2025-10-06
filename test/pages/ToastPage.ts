export default class MensagemPage {
  private driver: WebdriverIO.Browser;

  constructor(driver: WebdriverIO.Browser) {
    this.driver = driver;
  }

  // 🔹 Mensagem global de sucesso
  get msgRegistroSalvo() {
    return this.driver.$('//android.widget.TextView[@text="Registro salvo com sucesso."]');
  }

  async validarRegistroSalvo() {
    const msg = await this.msgRegistroSalvo;
    await msg.waitForDisplayed({ timeout: 5000 });
    return msg.isDisplayed();
  }

  // 🔹 Exemplo: você pode adicionar outras mensagens globais depois
  get msgErroGenerico() {
    return this.driver.$('//android.widget.TextView[contains(@text,"Erro")]');
  }
}
