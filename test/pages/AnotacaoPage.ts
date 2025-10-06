export default class AnotacaoPage {
  private driver: WebdriverIO.Browser;

  constructor(driver: WebdriverIO.Browser) {
    this.driver = driver;
  }

  // 🔹 Botões principais
  get btnCancelar() {
    return this.driver.$('//android.widget.Button[@content-desc="Cancelar"]');
  }

  get tituloNovaAnotacao() {
    return this.driver.$('//android.widget.TextView[@text="Nova anotação"]');
  }

  get btnSalvar() {
    return this.driver.$('//android.widget.TextView[@text="Salvar"]'); 
    // dentro dele tem TextView "Salvar"
  }

  // 🔹 Campos fixos (labels)
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

  // 🔹 Valores dinâmicos (mais precisos)
  get valorAtividade() {
    return this.driver.$(
      '(//android.view.ViewGroup[@resource-id="padView"])[1]//android.widget.Button//android.widget.TextView[2]'
    );
  }

  async getAtividadeText() {
    return (await this.valorAtividade).getText();
  }

  get valorEstadio() {
    return this.driver.$(
      '(//android.view.ViewGroup[@resource-id="padView"])[2]//android.widget.Button//android.widget.TextView[2]'
    );
  }

  async getEstadioText() {
    return (await this.valorEstadio).getText();
  }

  get inputObservacoes() {
    return this.driver.$('//android.widget.EditText[@resource-id="RNE__Input__text-input"]');
  }

  async getObservacoesPlaceholder() {
    const input = await this.inputObservacoes;
    return input.getText();
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

  // 🔹 Ações
  async clicarCancelar() {
    await this.btnCancelar.click();
  }

  async clicarSalvar() {
    await this.btnSalvar.click();
  }

  async escreverObservacao(texto: string) {
    const input = await this.inputObservacoes;
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
}
