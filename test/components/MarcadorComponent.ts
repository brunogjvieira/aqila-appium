// components/MarcadorComponent.ts
import BotoesComponent from "./BotaoComponent";
export default class MarcadorComponent {
  private driver: WebdriverIO.Browser;
  private botoes: BotoesComponent;

  constructor(driver: WebdriverIO.Browser) {
    this.driver = driver;
    this.botoes = new BotoesComponent(driver);
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

  // ——— Fluxo “tudo em um” (equivalente ao marker.helper.ts)
  async posicionarESalvar() {
    // primeiro arrasto
    await this.arrastarMapa(500, 1000, 200, 1000);
    // segundo arrasto
    await this.arrastarMapa(200, 1000, 250, 1000);
    // confirma
    await this.botoes.clicarConfirmarVisto();
  }
}
