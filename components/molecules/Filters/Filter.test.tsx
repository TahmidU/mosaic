import { cleanup, fireEvent, render, screen } from "utils/test-config";

import Filter from "./Filters";
import React from "react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import getTheme from "resources/themes";
import { removeAllSpaces } from "utils/TestUtils";

afterEach(cleanup);

describe("Filter", () => {
  const lightTheme = getTheme("light");

  test("TypeFilter, movie select type", () => {
    const router: any = {
      route: "/search",
      pathname: "/search",
      query: { type: "movie" },
      asPath: "/search",
      basePath: "/search",
    };

    const expectedSelectedStyle = `
        border-color: ${removeAllSpaces(lightTheme.cRed.alpha(0.1).toString())};
        background-color: ${removeAllSpaces(
          lightTheme.cRed.alpha(0.25).toString()
        )};
        color: ${removeAllSpaces(lightTheme.cRed.alpha(0.5).toString())};
        font-weight: bold;
        border-radius: 2rem;
        padding: 0.425rem 1rem;
    `;
    const expectedNotSelectedStyle = `
        border: 1px solid ${removeAllSpaces(
          lightTheme.cBlack.alpha(0.5).toString()
        )};
        border-radius: 2rem;
        padding: 0.425rem 1rem;
    `;

    render(
      <RouterContext.Provider value={router}>
        <Filter />
      </RouterContext.Provider>
    );

    const movieCheckbox = screen.getByTestId("MovieCheckbox");
    const tvCheckbox = screen.getByTestId("TVCheckbox");

    expect(movieCheckbox).toHaveStyle(expectedSelectedStyle);
    expect(tvCheckbox).toHaveStyle(expectedNotSelectedStyle);
  });

  test("TypeFilter, type click", () => {
    const router: any = {
      route: "/search",
      pathname: "/search",
      query: { type: "movie" },
      asPath: "/search",
      basePath: "/search",
      replace: jest.fn(),
    };

    render(
      <RouterContext.Provider value={router}>
        <Filter />
      </RouterContext.Provider>
    );

    const tvCheckbox = screen.getByTestId("TVCheckbox");

    fireEvent.click(tvCheckbox);
    expect(router.replace).toBeCalledTimes(1);
  });

  test("TypeFilter, select TV type", () => {
    const router: any = {
      route: "/search",
      pathname: "/search",
      query: { type: "tv" },
      asPath: "/search",
      basePath: "/search",
    };

    const expectedSelectedStyle = `
        border-color: ${removeAllSpaces(lightTheme.cRed.alpha(0.1).toString())};
        background-color: ${removeAllSpaces(
          lightTheme.cRed.alpha(0.25).toString()
        )};
        color: ${removeAllSpaces(lightTheme.cRed.alpha(0.5).toString())};
        font-weight: bold;
        border-radius: 2rem;
        padding: 0.425rem 1rem;
    `;
    const expectedNotSelectedStyle = `
        border: 1px solid ${removeAllSpaces(
          lightTheme.cBlack.alpha(0.5).toString()
        )};
        border-radius: 2rem;
        padding: 0.425rem 1rem;
    `;

    render(
      <RouterContext.Provider value={router}>
        <Filter />
      </RouterContext.Provider>
    );

    const movieCheckbox = screen.getByTestId("MovieCheckbox");
    const tvCheckbox = screen.getByTestId("TVCheckbox");

    expect(movieCheckbox).toHaveStyle(expectedNotSelectedStyle);
    expect(tvCheckbox).toHaveStyle(expectedSelectedStyle);
  });
});
