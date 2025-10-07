export default class ToastComponent {
  private driver: WebdriverIO.Browser;

  constructor(driver: WebdriverIO.Browser) {
    this.driver = driver;
  }

 async toastSucessoGenerico(texto: string, timeout = 5000) {
  const toast = await this.driver.$(`//android.widget.TextView[@text="${texto}"]`);
  await toast.waitForDisplayed({ timeout });
  return toast.isDisplayed();
}

  // 🔹 Exemplo: você pode adicionar outras mensagens globais depois
  async toastErroGenerico(texto: string, timeout = 5000) {
    const toast = await this.driver.$(`//android.widget.TextView[contains(@text,"${texto}")]`);
    await toast.waitForDisplayed({ timeout });
    return toast.isDisplayed();
  }
}
