import type { ChainablePromiseElement } from "webdriverio";

export async function restartApp() {
  await browser.execute("mobile: terminateApp", {
    appId: "br.com.aqila.app",
  });
  await browser.execute("mobile: activateApp", { appId: "br.com.aqila.app" });
}

export async function getElementWhenDisplayed(
  element: ChainablePromiseElement,
  timeout = 10000
) {
  await element.waitForDisplayed({ timeout });
  return element;
}

export async function getTextWhenDisplayed(
  element: ChainablePromiseElement,
  timeout = 10000
): Promise<string> {
  const elem = await getElementWhenDisplayed(element, timeout);
  return await elem.getText();
}
