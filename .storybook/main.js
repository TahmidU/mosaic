const path = require("path");

module.exports = {
  staticDirs: ["../public"],
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-styled-component-theme/dist/preset",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.module.rules.push({
      resolve: {
        alias: {
          atoms: path.resolve(__dirname, "../components/atoms"),
          molecules: path.resolve(__dirname, "../components/molecules"),
          organisms: path.resolve(__dirname, "../components/organisms"),
          pages: path.resolve(__dirname, "../components/pages"),
          context: path.resolve(__dirname, "../context"),
          hooks: path.resolve(__dirname, "../hooks"),
          icons: path.resolve(__dirname, "../icons"),
          resources: path.resolve(__dirname, "../resources"),
          translations: path.resolve(__dirname, "../translations"),
          types: path.resolve(__dirname, "../types"),
        },
      },
    });
    return config;
  },
};
