import { cleanup, fireEvent, render, screen } from "utils/test-config";

import Filter from "./Filters";
import React from "react";
import { UrlObject } from "url";
import getTheme from "resources/themes";
import { removeAllSpaces } from "utils/TestUtils";
import useFilters from "./useFilters";

afterEach(cleanup);

//jest.spyOn(useFilters, "getQueryFromURL");

/*
jest.mock("./useFilters", () => {
  return {
    filters: {
      type: "movie",
    },
    setType: jest.fn(),
    getQueryFromURL: jest.fn(),
  };
});*/

describe("Filter", () => {
  const lightTheme = getTheme("light");

  test("TypeFilter, initial state", () => {
    /*jest.mock("./useFilters", () => ({
      useFilters: jest.fn(() => ({
        filters: {
          type: "movie",
        },
        setType: jest.fn(),
      })),
    }));*/

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

    render(<Filter />);

    const movieCheckbox = screen.getByTestId("MovieCheckbox");
    const tvCheckbox = screen.getByTestId("TVCheckbox");

    expect(movieCheckbox).toHaveStyle(expectedSelectedStyle);
    expect(tvCheckbox).toHaveStyle(expectedNotSelectedStyle);
  });

  test("TypeFilter, select TV type", () => {
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

    render(<Filter />);

    const movieCheckbox = screen.getByTestId("MovieCheckbox");
    const tvCheckbox = screen.getByTestId("TVCheckbox");

    fireEvent.click(tvCheckbox);
    expect(movieCheckbox).toHaveStyle(expectedNotSelectedStyle);
    expect(tvCheckbox).toHaveStyle(expectedSelectedStyle);
  });
});
