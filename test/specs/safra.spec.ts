import MenuPage from "../pages/MenuPage";
import FiltroPage from "../pages/FiltroPage";
import SafraPage from "../pages/SafraPage";

describe("Selecionar Propriedades e Safras", () => {
  let menuPage: MenuPage;
  let filterPage: FiltroPage;
  let safraPage: SafraPage;

  before(async () => {
    menuPage = new MenuPage(browser);
    filterPage = new FiltroPage(browser);
    safraPage = new SafraPage(browser);
  });

  it("Deve selecionar Safra pelo menu lateral através do uso do filtro", async () => {
    await menuPage.openMenu();
    await menuPage.openSelectSafra();

    const safraName = await safraPage.getSafraAtualName();
    const initialCount = await safraPage.getSafrasCount();
    expect(initialCount).toBe(5);

    await filterPage.search(safraName);
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
