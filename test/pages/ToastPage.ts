export default class MensagemPage {
  private driver: WebdriverIO.Browser;

  constructor(driver: WebdriverIO.Browser) {
    this.driver = driver;
  }

  // 🔹 Mensagem global de sucesso
  get toastRegistroSalvo() {
    return this.driver.$('//android.widget.TextView[@text="Registro salvo com sucesso."]');
  }

  async isRegistroSalvoVisivel() {
    const toast = await this.toastRegistroSalvo;
    await toast.waitForDisplayed({ timeout: 5000 });
    return toast.isDisplayed();
  }

  // 🔹 Exemplo: você pode adicionar outras mensagens globais depois
  get toastErroGenerico() {
    return this.driver.$('//android.widget.TextView[contains(@text,"Erro")]');
  }
}
