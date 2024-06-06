import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run carbon-calc-web:serve',
        production: 'nx run carbon-calc-web:preview',
      },
      ciWebServerCommand: 'nx run carbon-calc-web:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
    chromeWebSecurity: false,
  },
});
