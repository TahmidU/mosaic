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
        movieReleaseDate={"01/01/2022"}
      />
    );

    expect(screen.getByText(expectedTitle)).toHaveStyle(expectedTitleStyle);
  });

  test("Review style", () => {
    const review = 5.0;
    const expectedReview = `${((review / 10) * 5).toFixed(2)}/5`;
    const expectedReviewStyle = `
        ${removeAllSpaces(lightTheme.fonts.main.regular)}
    `;

    render(
      <MovieCard
        movieTitle="Foo"
        src="https://via.placeholder.com/220x330/000000?text=FooBar"
        review={review}
        movieReleaseDate={"01/01/2022"}
      />
    );

    expect(screen.getByText(expectedReview)).toHaveStyle(expectedReviewStyle);
  });

  test("Release date style", () => {
    const expectedReleaseDate = "01/01/2022";
    const expectedReleaseDateStyle = `
          font-weight: 100;
          ${removeAllSpaces(lightTheme.fonts.tertiary.small)}
          color: ${removeAllSpaces(
            lightTheme.cAlmostBlack.alpha(0.7).toString()
          )};
    `;

    render(
      <MovieCard
        movieTitle="Foo"
        src="https://via.placeholder.com/220x330/000000?text=FooBar"
        review={5.0}
        movieReleaseDate={expectedReleaseDate}
      />
    );

    expect(screen.getByText(expectedReleaseDate)).toHaveStyle(
      expectedReleaseDateStyle
    );
  });

  test("onClick", () => {
    const expectedTitle = "NewTitle";
    const onClickMock = jest.fn();

    render(
      <MovieCard
        movieTitle={expectedTitle}
        src="https://via.placeholder.com/220x330/000000?text=FooBar"
        review={5.0}
        movieReleaseDate={"01/01/2022"}
        onClick={onClickMock}
      />
    );

    fireEvent.click(screen.getByText(expectedTitle, { selector: "span" }));
    expect(onClickMock).toBeCalledTimes(1);
  });
});
