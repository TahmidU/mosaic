import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "cb3yfm",
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
