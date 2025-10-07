import { PROPRIEDADES } from "../data/propriedades";
import PropriedadePage from "../pages/PropriedadePage";
import MenuLateralComponent from "../components/MenuLateralComponent";
import FiltroComponent from "../components/FiltroComponent";

describe("Seleção de Propriedades", () => {
  let propriedadePage: PropriedadePage;
  let menuLateralComponent: MenuLateralComponent;
  let filtroComponent: FiltroComponent;

  before(async () => {
    propriedadePage = new PropriedadePage(browser);
    menuLateralComponent = new MenuLateralComponent(browser);
    filtroComponent = new FiltroComponent(browser);
  });

  it("Deve selecionar Propriedade pela tela de Monitoria", async () => {
    await propriedadePage.selecionarPropriedadeNaMonitoria(
      PROPRIEDADES.default.name
    );
  });

  it("Deve selecionar uma Propriedade pelo menu lateral através do uso do filtro", async () => {
    await menuLateralComponent.openMenu();
    await menuLateralComponent.openSelectPropriedade();
    const propertyText = await propriedadePage.getPropriedadeNomePorIndice(5);
    await filtroComponent.search(propertyText);
    await propriedadePage.clicarPropriedadeFiltrada(propertyText);
  });
});
