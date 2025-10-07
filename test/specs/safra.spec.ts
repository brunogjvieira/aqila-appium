import MenuPage from "../pages/MenuPage";
import FiltroComponent from "../components/FiltroComponent";
import SafraPage from "../pages/SafraPage";

describe("Selecionar Propriedades e Safras", () => {
  let menuPage: MenuPage;
  let filtroComponent: FiltroComponent;
  let safraPage: SafraPage;

  before(async () => {
    menuPage = new MenuPage(browser);
    filtroComponent = new FiltroComponent(browser);
    safraPage = new SafraPage(browser);
  });

  it("Deve selecionar Safra pelo menu lateral através do uso do filtro", async () => {
    await menuPage.openMenu();
    await menuPage.openSelectSafra();

    const safraName = await safraPage.getSafraAtualName();
    const initialCount = await safraPage.getSafrasCount();
    expect(initialCount).toBe(5);

    await filtroComponent.search(safraName);
    await safraPage.clickFilteredSafra(safraName);
    await safraPage.clickPeriodoByIndex(2);
  });

  it("Deve verificar se tem 5 Safras ou mais ao clicar no botão 'Exibir Todas'", async () => {
    await menuPage.openMenu();
    await menuPage.openSelectSafra();

    await safraPage.clickExibirTodas();
    await driver.pause(1000); // se der flaky, trocar por um waitFor específico
    const allCount = await safraPage.getSafrasCount();
    expect(allCount).toBeGreaterThan(5);
  });
});
