import { PROPRIEDADES } from "../data/propriedades";
import PropriedadePage from "../pages/PropriedadePage";
import MenuPage from "../pages/MenuPage";
import FiltroPage from "../pages/FiltroPage";

describe("Seleção de Propriedades", () => {
  let propriedadePage: PropriedadePage;
  let menuPage: MenuPage;
  let filtroPage: FiltroPage;

  before(async () => {
    propriedadePage = new PropriedadePage(browser);
    menuPage = new MenuPage(browser);
    filtroPage = new FiltroPage(browser);
  });

  it("Deve selecionar Propriedade pela tela de Monitoria", async () => {
    await propriedadePage.selectPropertyByMonitoryScreen(
      PROPRIEDADES.default.name
    );
  });

  it("Deve selecionar uma Propriedade pelo menu lateral através do uso do filtro", async () => {
    await menuPage.openMenu();
    await menuPage.openSelectPropriedade();
    const propertyText = await propriedadePage.getPropertyName(5);
    await filtroPage.search(propertyText);
    await propriedadePage.clickFilteredProperty(propertyText);
  });
});
