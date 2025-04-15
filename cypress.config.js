const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Configurações dos testes e2e
    setupNodeEvents(on, config) {
      // Ativa o plugin do cypress-mochawesome-reporter
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
  },

  // Pastas de artefatos
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',

  // Configurações de vídeo
  video: true,
  videoCompression: 32,
  videoUploadOnPasses: false, // Só faz upload se o teste falhar

  // Reporter mochawesome integrado ao GitHub Actions
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/html',
    overwrite: false,
    html: true,
    json: true,
  },
});
