const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'm7rn5k',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
