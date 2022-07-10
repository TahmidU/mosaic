import { IUseTheme, Theme } from "../types/context";

import getTheme from "../resources/themes";
import { useState } from "react";

export default function useTheme(): IUseTheme {
  const [currentTheme, setCurrentTheme] = useState<Theme>("light");

  return {
    toggle: () => setCurrentTheme(currentTheme === "light" ? "dark" : "light"),
    current: currentTheme,
    value: getTheme(currentTheme),
  };
}
