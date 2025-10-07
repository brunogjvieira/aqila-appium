import { getElementWhenDisplayed } from "../helpers/app.helper";

export default class MenuTalhaoComponent {
  private driver: WebdriverIO.Browser;

  constructor(driver: WebdriverIO.Browser) {
    this.driver = driver;
  }

  private get monitoramentoBtn() {
    return this.driver.$('//android.widget.Button[@content-desc="Monitoramento"]');
  }

  private get acoesBtn() {
    return this.driver.$('//android.widget.Button[@content-desc="Ações"]');
  }

  async clickMonitoramento() {
    const btn = await getElementWhenDisplayed(this.monitoramentoBtn);
    await btn.click();
  }

  async entrarMenuAcoes() {
    const btn = await getElementWhenDisplayed(this.acoesBtn);
    await btn.click();
  }
}
