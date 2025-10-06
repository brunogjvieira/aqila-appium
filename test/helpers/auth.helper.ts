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

  const onLoginScreen = await loginPage.isOnLoginScreen();

  if (onLoginScreen) {
    await loginPage.login(USUARIOS.default.email, USUARIOS.default.password);
    await contextoPage.getLoadingContext();
    await contextoPage.getMainScreen();

    await handleLocationModal(browser);
    await handleNewSyncModal(browser);
  } else {
  }
}
