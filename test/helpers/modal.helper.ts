import type { Browser } from "webdriverio";
export async function handleLocationModal(driver: Browser, timeout = 10000) {
  try {
    const popupOK = await driver.$('//android.widget.TextView[@text="OK"]');
    await popupOK.waitForDisplayed({ timeout });
    await popupOK.click();
    return;
  } catch {}
}

export async function handleNewSyncModal(
  driver: Browser,
  timeout = 4000
) {
  try {
   const popupOk = await driver.$('//android.widget.TextView[@text="Ok"]');
  await driver.pause(10000)
await popupOk.waitForDisplayed({ timeout });
await popupOk.click();
  } catch {}
}
