import PropriedadePage from "../pages/PropriedadePage";
import SafraPage from "../pages/SafraPage";
import MenuPage from "../pages/MenuPage";
import MonitoriaPage from "../pages/MonitoriaPage";
import FiltroComponent from "../components/FiltroComponent";
import { PROPRIEDADES } from "../data/propriedades";
import { PERIODOS } from "../data/periodos";

export async function selecionarPropriedadeESafra() {
  const propriedadePage = new PropriedadePage(browser);
  const safraPage = new SafraPage(browser);
  const menuPage = new MenuPage(browser);

  await propriedadePage.selecionarPropriedadeNaMonitoria(PROPRIEDADES.default.name);

  const onSafraScreen = await safraPage.isOnSafraScreen();
  const selecionarSafraEPeriodo = async () => {
    const safraName = await safraPage.getSafraAtualName();
    await safraPage.clickFilteredSafra(safraName);
    await safraPage.clickPeriodoByName(PERIODOS.default.inverno);
  };

  if (onSafraScreen) {
    await selecionarSafraEPeriodo();
  } else {
    await menuPage.openMenu();
    await menuPage.openSelectSafra();
    await selecionarSafraEPeriodo();
  }
}


export async function selecionarTalhaoPorBusca(nomeTalhao: string) {
  const monitoriaPage = new MonitoriaPage();
  const filtroComponent = new FiltroComponent(browser);

  await monitoriaPage.clicarLupa();
  await filtroComponent.search(nomeTalhao);
  await filtroComponent.clickTalhao(nomeTalhao);
}