import BotoesComponent from "../components/BotaoComponent";

export default class AnotacaoPage {
  private driver: WebdriverIO.Browser;
  private botoes: BotoesComponent;

  constructor(driver: WebdriverIO.Browser) {
    this.driver = driver;
    this.botoes = new BotoesComponent(driver);
  }

  get tituloNovaAnotacao() {
    return this.driver.$('//android.widget.TextView[@text="Nova anotação"]');
  }


  get campoAtividade() {
    return this.driver.$('//android.widget.TextView[@text="Atividade"]');
  }

  get campoEstadio() {
    return this.driver.$('//android.widget.TextView[@text="Estádio"]');
  }

  get campoObservacoes() {
    return this.driver.$('//android.widget.TextView[@text="Observações"]');
  }

  get campoCompartilhar() {
    return this.driver.$('//android.widget.TextView[@text="Compartilhar"]');
  }

  get atividadeDoTalhao() {
    return this.driver.$(
      '(//android.view.ViewGroup[@resource-id="padView"])[1]//android.widget.Button//android.widget.TextView[2]'
    );
  }

  async getAtividadeDoTalhao() {
    return (await this.atividadeDoTalhao).getText();
  }

  get estadioDoTalhao() {
    return this.driver.$(
      '(//android.view.ViewGroup[@resource-id="padView"])[2]//android.widget.Button//android.widget.TextView[2]'
    );
  }

  async getEstadioDoTalhao() {
    return (await this.estadioDoTalhao).getText();
  }

  get campoObservacao() {
    return this.driver.$('//android.widget.EditText[@resource-id="RNE__Input__text-input"]');
  }

  get switchCompartilhar() {
    return this.driver.$('//android.widget.Switch');
  }

  async isCompartilharChecked() {
    const el = await this.switchCompartilhar;
    const checked = await el.getAttribute("checked");
    return checked === "true";
  }

  // 🔹 Botões de imagem
  get btnTirarFoto() {
    return this.driver.$('//android.widget.TextView[@text="Tirar"]');
  }

  get btnSelecionarImagem() {
    return this.driver.$('//android.widget.TextView[@text="Selecionar"]');
  }

 

  async preencherObservacao(texto: string) {
    const input = await this.campoObservacao;
    await input.setValue(texto);
  }

  async alternarCompartilhar() {
    await this.switchCompartilhar.click();
  }

  async tirarFoto() {
    await this.btnTirarFoto.click();
  }

  async selecionarImagem() {
    await this.btnSelecionarImagem.click();
  }

async validarCabecalho(): Promise<boolean> {
  const titulo = await this.tituloNovaAnotacao;
  await titulo.waitForDisplayed({ timeout: 5000 });
  return titulo.isDisplayed();
}

async criarAnotacao(atividade: string, estadio: string, texto: string) {
  expect(await this.validarCabecalho()).toBe(true);
  expect(await this.getAtividadeDoTalhao()).toContain(atividade);
  expect(await this.getEstadioDoTalhao()).toContain(estadio);
  await this.preencherObservacao(texto);
  await this.botoes.clicarSalvar();
}

}
