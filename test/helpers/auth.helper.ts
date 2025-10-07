import LoginPage from "../pages/LoginPage";
import ContextoPage from "../pages/ContextoPage";
import { USUARIOS } from "../data/usuarios";
import {
  handleLocationModal,
  handleNewSyncModal,
} from "../helpers/modal.helper";

export async function ensureLoggedIn(): Promise<void> {
  const loginPage = new LoginPage(browser);
  const contextoPage = new ContextoPage(browser);

  // espera até 8s pra ver se o botão/tela de login aparece
  const onLoginScreen = await loginPage.loginButton.waitForExist({ timeout: 3000 }).then(() => true).catch(() => false);

  if (onLoginScreen) {
    await loginPage.login(USUARIOS.default.email, USUARIOS.default.password);
    await contextoPage.getLoadingContext();
    await contextoPage.getMainScreen();
    await handleLocationModal(browser);
    await handleNewSyncModal(browser);
  } else {
    console.log('[auth] já está logado (login não apareceu).');
  }
}

