import PropriedadePage from "../pages/PropriedadePage";
import SafraPage from "../pages/SafraPage";
import MenuPage from "../pages/MenuPage";
import { PROPRIEDADES } from "../data/propriedades";
import { PERIODOS } from "../data/periodos";

export async function setupPropriedadeSafra() {
  const propriedadePage = new PropriedadePage(browser);
  const safraPage = new SafraPage(browser);
  const menuPage = new MenuPage(browser);

  await propriedadePage.selectPropertyByMonitoryScreen(
    PROPRIEDADES.default.name
  );

  const onSafraScreen = await safraPage.isOnSafraScreen();
  if (onSafraScreen) {
    const safraName = await safraPage.getSafraAtualName();
    await safraPage.clickFilteredSafra(safraName);
    await safraPage.clickPeriodoByName(PERIODOS.default.inverno);
  } else {
    await menuPage.openMenu();
    await menuPage.openSelectSafra();
    const safraName = await safraPage.getSafraAtualName();
    await safraPage.clickFilteredSafra(safraName);
    await safraPage.clickPeriodoByName(PERIODOS.default.inverno);
  }
}
