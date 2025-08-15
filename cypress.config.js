const { defineConfig } = require("cypress");
const fs = require("fs");

module.exports = defineConfig({
  video: true, // enable video recording
  videoUploadOnPasses: false, // optional: skip upload for passing tests
  e2e: {
    setupNodeEvents(on, config) {
      // Enable cypress-grep plugin for tagging tests
      require("cypress-grep/src/plugin")(config);

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
    grepFilterSpecs: true,   // runs only matching specs
    grepOmitFiltered: true,  // hides filtered-out tests
    grepUntagged: false,     // don't run untagged tests unless specified
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true, // takes screenshot on test failures
    trashAssetsBeforeRuns: true
  },
});
