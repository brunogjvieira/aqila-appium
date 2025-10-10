import {
  selecionarPropriedadeESafra,
  selecionarTalhaoPorBusca,
} from "../helpers/setup.helper";
import { TALHOES } from "../data/talhoes";
import MenuTalhaoComponent from "../components/MenuTalhaoComponent";
import AcaoComponent from "../components/AcaoComponent";
import FiltroComponent from "../components/FiltroComponent";
import { PRAGAS } from "../data/praga";
import OcorrenciaPage from "../pages/OcorrenciaPage";
import BotaoComponent from "../components/BotaoComponent";
import { PLANTIO } from "../data/plantio";
import MarcadorComponent from "../components/MarcadorComponent";
import ToastComponent from "../components/ToastComponent";
import { TOASTS } from "../data/toast";

describe("Validação da tela de Ocorrências", async () => {
  let menuTalhaoComponent: MenuTalhaoComponent;
  let acaoComponent: AcaoComponent;
  let filtroComponent: FiltroComponent;
  let ocorrenciaPage: OcorrenciaPage;
  let botaoComponent: BotaoComponent;
  let marcadorComponent: MarcadorComponent;
  let toastComponent: ToastComponent;
  before(() => {
    menuTalhaoComponent = new MenuTalhaoComponent(browser);
    acaoComponent = new AcaoComponent(browser);
    filtroComponent = new FiltroComponent(browser);
    ocorrenciaPage = new OcorrenciaPage(browser);
    botaoComponent = new BotaoComponent(browser);
    marcadorComponent = new MarcadorComponent(browser);
    toastComponent = new ToastComponent(browser);
  });

  it("Deve exibir uma mensagem de sucesso ao criar uma nova ocorrência", async () => {
    await selecionarPropriedadeESafra();
    await selecionarTalhaoPorBusca(TALHOES.trigo);

    await menuTalhaoComponent.entrarMenuAcoes();
    await acaoComponent.abrirNovaOcorrencia();

    await filtroComponent.search(PRAGAS.invasora.nome);
    await ocorrenciaPage.marcarPrimeiroCheckbox(PRAGAS.invasora.nome);
    await ocorrenciaPage.clicarBotaoConfirmarOcorrencia();
    await ocorrenciaPage.validarPragaSelecionada(PRAGAS.invasora.nome)
    await ocorrenciaPage.preencherNumeroPlantas(PRAGAS.invasora.quantidade);

    await botaoComponent.clicarBotaoProximoPasso();
    await ocorrenciaPage.verificarAtividadeNome(PLANTIO.atividade)
    // fazer funcao abaixo que engloba os 3
    await ocorrenciaPage.modalSelecionarEstadio();
    await ocorrenciaPage.selecionarEstadio(PLANTIO.estadio);
    await ocorrenciaPage.escreverObservacao(PLANTIO.observacao);
    await botaoComponent.clicarSalvar();
    await marcadorComponent.posicionarESalvar();
    await toastComponent.toastSucessoGenerico(TOASTS.sucesso.registroSalvo);
  });
});
