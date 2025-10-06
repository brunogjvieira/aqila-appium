export const config: any = {
runner: 'local',
  port: 4723,
  path: '/',

  specs: ['./test/specs/**/*.ts'],
  exclude: [],

  maxInstances: 1,
 restartSession: false,  
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Android Device', // 'appium:deviceName': 'emulator-5554',
    'appium:automationName': 'UiAutomator2',
    'appium:app': './app-staging.apk',
    'appium:autoGrantPermissions': true,
    'appium:noReset': true,   // limpa dados a cada teste
    'appium:fullReset': false, 
  }],

  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  services: ['appium'],
  framework: 'mocha',
  reporters: ['spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 240000,
  },

  before: async function () {
    const { ensureLoggedIn } = await import('./test/helpers/auth.helper');
    await ensureLoggedIn();  // roda 1x no início da suite
  },

afterTest: async function () {
  const { restartApp } = await import('./test/helpers/app.helper');
  console.log('[wdio] Reiniciando app antes do teste...');
  await restartApp();
},

  tsConfigPath: './tsconfig.e2e.json',
};

