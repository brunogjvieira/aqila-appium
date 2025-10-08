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

describe("Validação da tela de Ocorrências", async () => {
  let menuTalhaoComponent: MenuTalhaoComponent;
  let acaoComponent: AcaoComponent;
  let filtroComponent: FiltroComponent;
  let ocorrenciaPage: OcorrenciaPage;

  before(() => {
    menuTalhaoComponent = new MenuTalhaoComponent(browser);
    acaoComponent = new AcaoComponent(browser);
    filtroComponent = new FiltroComponent(browser);
    ocorrenciaPage = new OcorrenciaPage(browser);
  });

  it("Deve exibir uma mensagem de sucesso ao criar uma nova ocorrência", async () => {
    await selecionarPropriedadeESafra();
    await selecionarTalhaoPorBusca(TALHOES.trigo);

    await menuTalhaoComponent.entrarMenuAcoes();
    await acaoComponent.abrirNovaOcorrencia();

    await filtroComponent.search(PRAGAS.default);
    await ocorrenciaPage.marcarPrimeiroCheckbox(PRAGAS.default);
    await ocorrenciaPage.clicarBotaoConfirmarOcorrencia();
  });
});
