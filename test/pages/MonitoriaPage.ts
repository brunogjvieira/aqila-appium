// MonitoriaPage.ts
export default class MonitoriaPage {
  private get lupaBtn() {
    return $('//android.view.ViewGroup[@content-desc=""]');
  }

  private get mapaGoogle() {
    return $('~Mapa do Google');
  }

  async clicarLupa() {
    await this.lupaBtn.waitForDisplayed({ timeout: 5000 });
    await this.lupaBtn.click();
  }

  async validarMapaVisivel() {
    return this.mapaGoogle.isDisplayed().catch(() => false); 
  }
}
