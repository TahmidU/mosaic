import { cleanup, fireEvent, render, screen } from "utils/test-config";

import MovieCard from "./MovieCard";
import React from "react";
import getTheme from "resources/themes";
import { removeAllSpaces } from "utils/TestUtils";

afterEach(cleanup);

describe("MovieCard", () => {
  const lightTheme = getTheme("light");
  test("Title style", () => {
    const expectedTitle = "NewTitle";
    const expectedTitleStyle = `
        font-weight: 600;
        ${removeAllSpaces(lightTheme.fonts.tertiary.regular)}
    `;

    render(
      <MovieCard
        movieTitle={expectedTitle}
        src="https://via.placeholder.com/220x330/000000?text=FooBar"
        review={5.0}
        movieReleaseDate={"2022/01/01"}
      />
    );

    expect(screen.getByText(expectedTitle)).toHaveStyle(expectedTitleStyle);
  });

  test("Description style", () => {});

  test("Release date style", () => {});

  test("onClick", () => {});
});
