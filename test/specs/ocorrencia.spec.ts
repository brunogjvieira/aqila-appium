import {
  selecionarPropriedadeESafra,
  selecionarTalhaoPorBusca,
} from "../helpers/setup.helper";
import { TALHOES } from "../data/talhoes";
import MenuTalhaoComponent from "../components/MenuTalhaoComponent";
import AcaoComponent from "../components/AcaoComponent";

describe("Validação da tela de Ocorrências", async () => {
  let menuTalhaoComponent: MenuTalhaoComponent;
  let acaoComponent: AcaoComponent;

  before(() => {
    menuTalhaoComponent = new MenuTalhaoComponent(browser);
    acaoComponent = new AcaoComponent(browser);
  });

  it("Deve exibir uma mensagem de sucesso ao criar uma nova ocorrência", async () => {
    await selecionarPropriedadeESafra();
    await selecionarTalhaoPorBusca(TALHOES.trigo);

    await menuTalhaoComponent.entrarMenuAcoes();
    await acaoComponent.abrirNovaOcorrencia();
  });
});
