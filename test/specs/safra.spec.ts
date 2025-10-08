import MenuLateralComponent from "../components/MenuLateralComponent";
import FiltroComponent from "../components/FiltroComponent";
import SafraPage from "../pages/SafraPage";

describe("Selecionar Propriedades e Safras", () => {
  let menuLateralComponent: MenuLateralComponent;
  let filtroComponent: FiltroComponent;
  let safraPage: SafraPage;

  before(async () => {
    menuLateralComponent = new MenuLateralComponent(browser);
    filtroComponent = new FiltroComponent(browser);
    safraPage = new SafraPage(browser);
  });

  it("Deve selecionar Safra pelo menu lateral através do uso do filtro", async () => {
    await menuLateralComponent.openMenu();
    await menuLateralComponent.openSelectSafra();

    const safraName = await safraPage.getSafraAtualName();
    const initialCount = await safraPage.getSafrasCount();
    expect(initialCount).toBe(5);

    await filtroComponent.search(safraName);
    await safraPage.clickFilteredSafra(safraName);
    await safraPage.clickPeriodoByIndex(2);
  });

  it("Deve verificar se tem 5 Safras ou mais ao clicar no botão 'Exibir Todas'", async () => {
    await menuLateralComponent.openMenu();
    await menuLateralComponent.openSelectSafra();

    await safraPage.clickExibirTodas();
    await driver.pause(1000);
    const allCount = await safraPage.getSafrasCount();
    expect(allCount).toBeGreaterThan(5);
  });
});
