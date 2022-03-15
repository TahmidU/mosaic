import "jest-styled-components";

import { cleanup, render } from "resources/utils/test-config";

import React from "react";
import ReviewStat from "./ReviewStat";
import TestThemeProvider from "components/atoms/TestThemeProvider";
import getTheme from "resources/themes";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("ReviewStat", () => {
  test("Review 0%", () => {
    // Given When
    const review = 0;
    const { getByText } = render(<ReviewStat percentage={review} />);

    // Then
    getByText(`${review}%`);
  });

  test("Review 90% non-wait", () => {
    // Given When
    const review = 90;
    const { queryByText } = render(<ReviewStat percentage={review} />);

    // Then
    expect(queryByText(`${review}%`)).toBe(null);
  });

  test("Review 90%", async () => {
    // Given When
    const review = 90;
    const { getByText } = render(<ReviewStat percentage={review} />);

    // Then
    await new Promise((r) => setTimeout(r, 1400));
    getByText(`${review}%`);
  });

  test("Default light theme styles applied", async () => {
    // Given
    const lightTheme = getTheme("light");
    const review = 10;

    // When
    const { getByTestId } = render(<ReviewStat percentage={review} />);

    // Then
    expect(getByTestId("ReviewStatContainer")).toHaveStyleRule(
      "background-color",
      lightTheme.almostBlack
    );
    expect(getByTestId("ReviewStatContainer")).toHaveStyleRule(
      "border-radius",
      "100%"
    );
    expect(getByTestId("ReviewStatContainer")).toHaveStyleRule(
      "border",
      `1px solid ${lightTheme.almostBlack}`
    );
  });

  test("Snapshot", () => {
    // Given
    const review = 10;

    // When
    const rendered = renderer.create(
      <TestThemeProvider>
        <ReviewStat percentage={review} />
      </TestThemeProvider>
    );
    const tree = rendered.toJSON();

    // Then
    expect(tree).toMatchSnapshot();
  });
});
