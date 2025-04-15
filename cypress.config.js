const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // eventos podem ser configurados aqui se precisar
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
  },

  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",

  video: true,
  videoCompression: 32,
  videoUploadOnPasses: false, // grava vídeo apenas se o teste falhar

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
  },
});
