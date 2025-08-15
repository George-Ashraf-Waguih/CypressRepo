const { defineConfig } = require("cypress");
const fs = require("fs");

module.exports = defineConfig({
  video: true, // enable video recording
  videoUploadOnPasses: false, // optional: skip upload for passing tests
  e2e: {
    setupNodeEvents(on, config) {
      // Delete video if spec passes
      on("after:spec", (spec, results) => {
        if (results && results.stats.failures === 0 && results.video) {
          fs.unlinkSync(results.video);
        }
      });

      return config;
    },
    specPattern: "cypress/e2e/**/*.js",
    baseUrl: "https://the-internet.herokuapp.com",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true, // takes screenshot on test failures
    trashAssetsBeforeRuns: true
  },
});
