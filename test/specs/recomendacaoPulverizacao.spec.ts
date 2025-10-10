import { selecionarPropriedadeESafra, selecionarTalhaoPorBusca } from "../helpers/setup.helper";
import { TALHOES } from "../data/talhoes";

describe("Recomendação de Pulverização", () => {

  it("Deve exibir uma mensagem de sucesso ao criar uma nova recomendação", async () => {
    await selecionarPropriedadeESafra();
    await selecionarTalhaoPorBusca(TALHOES.trigo);
  });
});
