import { PROPRIEDADES } from "../data/propriedades";
import PropriedadePage from "../pages/PropriedadePage";
import MenuPage from "../pages/MenuPage";
import FiltroComponent from "../components/FiltroComponent";

describe("Seleção de Propriedades", () => {
  let propriedadePage: PropriedadePage;
  let menuPage: MenuPage;
  let filtroComponent: FiltroComponent;

  before(async () => {
    propriedadePage = new PropriedadePage(browser);
    menuPage = new MenuPage(browser);
    filtroComponent = new FiltroComponent(browser);
  });

  it("Deve selecionar Propriedade pela tela de Monitoria", async () => {
    await propriedadePage.selecionarPropriedadeNaMonitoria(
      PROPRIEDADES.default.name
    );
  });

  it("Deve selecionar uma Propriedade pelo menu lateral através do uso do filtro", async () => {
    await menuPage.openMenu();
    await menuPage.openSelectPropriedade();
    const propertyText = await propriedadePage.getPropriedadeNomePorIndice(5);
    await filtroComponent.search(propertyText);
    await propriedadePage.clicarPropriedadeFiltrada(propertyText);
  });
});
