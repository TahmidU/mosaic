import { DefaultTheme } from "styled-components";
import { Theme } from "../types/context";

const themes: { [key: string]: Partial<DefaultTheme> } = {
  light: {
    is: "light",
    main: "white",
    text: "black",
    accent: "green",
    reverseMain: "black",
  },
};

export default function getTheme(themeSelect: Theme): DefaultTheme {
  return {
    ...themes[themeSelect],
  };
}
