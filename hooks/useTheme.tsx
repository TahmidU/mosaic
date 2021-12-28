import { ITheme, Theme } from "../types/context";

import getTheme from "../resources/themes";
import { useState } from "react";

export default function useTheme(): ITheme {
  const [currentTheme, setCurrentTheme] = useState<Theme>("light");

  return {
    toggle: () => setCurrentTheme(currentTheme === "light" ? "dark" : "light"),
    current: currentTheme,
    value: getTheme(currentTheme),
  };
}
