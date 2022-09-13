import { cleanup, fireEvent, render, screen } from "utils/test-config";

import SearchCard from "./SearchCard";
import React from "react";
import getTheme from "resources/themes";
import { removeAllSpaces } from "utils/TestUtils";

afterEach(cleanup);

describe("SearchCard", () => {
  const lightTheme = getTheme("light");
  test("Title style", () => {
    const expectedTitle = "NewTitle";
    const expectedTitleStyle = `
        font-weight: bold;
        ${removeAllSpaces(lightTheme.fonts.main.bigger)};
    `;

    render(
      <SearchCard
        title={expectedTitle}
        src="https://via.placeholder.com/220x330/000000?text=FooBar"
        rating={5.0}
        desc=""
        releaseDate={"01/01/2022"}
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
      <SearchCard
        title="Foo"
        src="https://via.placeholder.com/220x330/000000?text=FooBar"
        rating={review}
        desc=""
        releaseDate={"01/01/2022"}
      />
    );

    expect(screen.getByText(expectedReview)).toHaveStyle(expectedReviewStyle);
  });

  test("Release date style", () => {
    const expectedReleaseDate = "01/01/2022";
    const expectedReleaseDateStyle = `
        ${removeAllSpaces(lightTheme.fonts.main.regular)};
        color: ${removeAllSpaces(
          lightTheme.cAlmostBlack.alpha(0.7).toString()
        )};
        font-weight: 100;
    `;

    render(
      <SearchCard
        title="Foo"
        src="https://via.placeholder.com/220x330/000000?text=FooBar"
        rating={5.0}
        desc=""
        releaseDate={expectedReleaseDate}
      />
    );

    expect(screen.getByText(expectedReleaseDate)).toHaveStyle(
      expectedReleaseDateStyle
    );
  });

  test("Description style", () => {
    const expectedDesc = "This is a description.";

    render(
      <SearchCard
        title="Foo"
        src="https://via.placeholder.com/220x330/000000?text=FooBar"
        rating={5.0}
        desc={expectedDesc}
        releaseDate={"01/01/2022"}
      />
    );

    screen.getByText(expectedDesc);
  });
});
