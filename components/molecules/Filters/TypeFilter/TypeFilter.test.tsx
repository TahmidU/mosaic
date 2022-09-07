import { cleanup, fireEvent, render, screen } from "utils/test-config";

import React from "react";
import { SearchType } from "types/search";
import TypeFilter from "./TypeFilter";
import getTheme from "resources/themes";
import { removeAllSpaces } from "utils/TestUtils";

afterEach(cleanup);

describe("TypeFilter", () => {
  const lightTheme = getTheme("light");
  test("Movie selected and TV not selected", () => {
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

    render(<TypeFilter selected="movie" setType={() => {}} />);

    const movieCheckbox = screen.getByTestId("MovieCheckbox");
    const tvCheckbox = screen.getByTestId("TVCheckbox");

    expect(movieCheckbox).toHaveStyle(expectedSelectedStyle);
    expect(tvCheckbox).toHaveStyle(expectedNotSelectedStyle);
  });

  test("Movie not selected and TV selected", () => {
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

    render(<TypeFilter selected="tv" setType={() => {}} />);

    const movieCheckbox = screen.getByTestId("MovieCheckbox");
    const tvCheckbox = screen.getByTestId("TVCheckbox");

    expect(movieCheckbox).toHaveStyle(expectedNotSelectedStyle);
    expect(tvCheckbox).toHaveStyle(expectedSelectedStyle);
  });

  test("Select type", () => {
    const expectedType = "tv";
    const setTypeMock = jest.fn((type: SearchType) => {
      expect(type).toBe(expectedType);
    });

    render(<TypeFilter selected="movie" setType={setTypeMock} />);

    const tvCheckbox = screen.getByTestId("TVCheckbox");

    fireEvent.click(tvCheckbox);
  });
});
