import { TALHOES } from "../data/talhoes";
import { ANOTACOES } from "../data/anotacoes";
import MenuTalhaoComponent from "../components/MenuTalhaoComponent";
import AcaoComponent from "../components/AcaoComponent";
import BotaoComponent from "../components/BotaoComponent";
import AnotacaoPage from "../pages/AnotacaoPage";
import ToastComponent from "../components/ToastComponent";
import MarcadorComponent from "../components/marcadorComponent";
import {
  selecionarPropriedadeESafra,
  selecionarTalhaoPorBusca,
} from "../helpers/setup.helper";

describe("Validação da tela de Anotação", () => {
  let menuTalhaoComponent: MenuTalhaoComponent;
  let acaoComponent: AcaoComponent;
  let anotacaoPage: AnotacaoPage;
  let toastComponent: ToastComponent;
  let botaoComponent: BotaoComponent;
  let marcadorComponent: MarcadorComponent;
  before(async () => {
    menuTalhaoComponent = new MenuTalhaoComponent(browser);
    acaoComponent = new AcaoComponent(browser);
    anotacaoPage = new AnotacaoPage(browser);
    toastComponent = new ToastComponent(browser);
    botaoComponent = new BotaoComponent(browser);
    marcadorComponent = new MarcadorComponent(browser);
  });

  it("Deve abrir e salvar uma nova anotação em um talhão com atividade Trigo", async () => {
    await selecionarPropriedadeESafra();
    await selecionarTalhaoPorBusca(TALHOES.trigo);

    await menuTalhaoComponent.entrarMenuAcoes();
    await acaoComponent.abrirNovaAnotacao();

    await anotacaoPage.criarAnotacao(
      ANOTACOES.default.atividade,
      ANOTACOES.default.estadio,
      ANOTACOES.default.observacao
    );

    await marcadorComponent.posicionarESalvar();
    expect(await toastComponent.toastSucessoGenerico("Registro salvo com sucesso.")).toBe(true);
  });
});
