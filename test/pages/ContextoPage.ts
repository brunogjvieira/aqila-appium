import { getTextWhenDisplayed } from "../helpers/app.helper";

export default class ContextoPage {
  private driver: WebdriverIO.Browser;

  constructor(driver: WebdriverIO.Browser) {
    this.driver = driver;
  }

  // Mensagem "Carregando dados de..."
  get loadingContext() {
    return this.driver.$('//android.widget.TextView[@text="Sincronização de dados"]');
  }

  async getLoadingContext(timeout = 50000) {
    return await getTextWhenDisplayed(this.loadingContext, timeout);
  }

  // Mensagem "Selecione a propriedade"
  get mainScreen() {
    return this.driver.$('//android.widget.TextView[@text="Selecione a propriedade"]');
  }

  async getMainScreen(timeout = 240000) {
    return await getTextWhenDisplayed(this.mainScreen, timeout);
  }
}
