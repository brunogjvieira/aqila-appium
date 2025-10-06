import { TALHOES } from "../data/talhoes";
import { ANOTACOES } from "../data/anotacoes";
import FiltroPage from "../pages/FiltroPage";
import MonitoriaPage from "../pages/MonitoriaPage";
import MenuTalhaoPage from "../pages/MenuTalhaoPage";
import AcoesPage from "../pages/AcoesPage";
import AnotacaoPage from "../pages/AnotacaoPage";
import MarcadorPage from "../pages/MarcadorPage";
import ToastPage from "../pages/ToastPage";
import { marcarESalvar } from "../helpers/marker.helper";

// 🔹 importa o helper
import { setupPropriedadeSafra } from "../helpers/setup.helper";

describe("Validação da tela de Anotação", () => {
  let filterPage: FiltroPage;
  let monitoriaPage: MonitoriaPage;
  let menuTalhaoPage: MenuTalhaoPage;
  let acoesPage: AcoesPage;
  let anotacaoPage: AnotacaoPage;
  let marcadorPage: MarcadorPage;
  let toastPage: ToastPage;

  before(async () => {
    filterPage = new FiltroPage(browser);
    monitoriaPage = new MonitoriaPage();
    menuTalhaoPage = new MenuTalhaoPage(browser);
    acoesPage = new AcoesPage(browser);
    anotacaoPage = new AnotacaoPage(browser);
    marcadorPage = new MarcadorPage(browser);
    toastPage = new ToastPage(browser);
  });

  it("Deve validar e salvar uma nova anotação", async () => {
    await setupPropriedadeSafra();
    await monitoriaPage.clicarLupa();
    await filterPage.search(TALHOES.trigo);
    await filterPage.clickTalhao(TALHOES.trigo);
    await menuTalhaoPage.clickAcoes();
    await acoesPage.clickAnotacao();
    expect(await anotacaoPage.tituloNovaAnotacao.isDisplayed());
    const atividadeText = await anotacaoPage.getAtividadeText();
    expect(atividadeText).toContain(ANOTACOES.default.atividade);
    const estadioText = await anotacaoPage.getEstadioText();
    expect(estadioText).toContain(ANOTACOES.default.estadio);
    await anotacaoPage.escreverObservacao(ANOTACOES.default.observacao);
    await anotacaoPage.clicarSalvar();
    await marcarESalvar();
    expect(await toastPage.validarRegistroSalvo());
  });
});
