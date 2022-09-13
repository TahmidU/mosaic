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

  test("Review style", () => {
    const review = 5.0;
    const expectReview = `${((review / 10) * 5).toFixed(2)}/5`;
    const expectedReviewStyle = `
        ${removeAllSpaces(lightTheme.fonts.main.regular)}
    `;

    render(
      <MovieCard
        movieTitle="Foo"
        src="https://via.placeholder.com/220x330/000000?text=FooBar"
        review={review}
        movieReleaseDate={"2022/01/01"}
      />
    );

    expect(screen.getByText(expectReview)).toHaveStyle(expectedReviewStyle);
  });

  test("Release date style", () => {});

  test("onClick", () => {
    const expectedTitle = "NewTitle";
    const onClickMock = jest.fn();

    render(
      <MovieCard
        movieTitle={expectedTitle}
        src="https://via.placeholder.com/220x330/000000?text=FooBar"
        review={5.0}
        movieReleaseDate={"2022/01/01"}
        onClick={onClickMock}
      />
    );

    fireEvent.click(screen.getByText(expectedTitle, { selector: "span" }));
    expect(onClickMock).toBeCalledTimes(1);
  });
});