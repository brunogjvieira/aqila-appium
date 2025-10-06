import MarcadorPage from "../pages/MarcadorPage";

export async function marcarESalvar() {
  const marcador = new MarcadorPage(browser);

  // primeiro arrasto
  await marcador.arrastarMapa(500, 1000, 200, 1000);

  // segundo arrasto
  await marcador.arrastarMapa(200, 1000, 250, 1000);

  // confirma marcador
  await marcador.clicarConfirmar();
}
