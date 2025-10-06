export default class MarcadorPage {
  private driver: WebdriverIO.Browser;

  constructor(driver: WebdriverIO.Browser) {
    this.driver = driver;
  }

  // Botões
  get btnCancelar() {
    return this.driver.$('//android.widget.TextView[@text="Cancelar"]');
  }

  get btnConfirmar() {
    return this.driver.$('//android.widget.TextView[@text=""]');
  }

  // Ações
  async clicarCancelar() {
    await this.btnCancelar.click();
  }

  async clicarConfirmar() {
    await this.btnConfirmar.click();
  }

  async arrastarMapa(startX: number, startY: number, endX: number, endY: number) {
    await this.driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: startX, y: startY },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 100 },
          { type: "pointerMove", duration: 300, x: endX, y: endY },
          { type: "pointerUp", button: 0 }
        ]
      }
    ]);
    await this.driver.releaseActions();
  }
}
