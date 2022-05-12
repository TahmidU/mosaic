import * as nextImage from "next/image";

import { addDecorator } from "@storybook/react";
import getTheme from "../resources/themes";
import { withThemesProvider } from "storybook-addon-styled-component-theme";

const storyboardThemes = [getTheme("light"), getTheme("dark")];
addDecorator(withThemesProvider(storyboardThemes));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => {
    return <img {...props} />;
  },
});
