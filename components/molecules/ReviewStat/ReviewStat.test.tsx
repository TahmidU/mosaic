import "jest-styled-components";

import { cleanup, render } from "utils/test-config";

import React from "react";
import ReviewStat from "./ReviewStat";
import TestThemeProvider from "components/atoms/Helper/TestThemeProvider";
import getTheme from "resources/themes";
import { removeAllSpaces } from "utils/TestUtils";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("ReviewStat", () => {
  const lightTheme = getTheme("light");

  test("Review 0%", () => {
    const review = 0;

    const { getByText } = render(<ReviewStat percentage={review} />);

    getByText(`${review}%`);
  });

  test("Review 90% non-wait", () => {
    const review = 90;

    const { queryByText } = render(<ReviewStat percentage={review} />);

    expect(queryByText(`${review}%`)).toBe(null);
  });

  test("Review 90%", async () => {
    const review = 90;

    const { getByText } = render(<ReviewStat percentage={review} />);

    await new Promise((r) => setTimeout(r, 1400));
    getByText(`${review}%`);
  });

  test("Default light theme styles applied", async () => {
    const review = 10;

    const expectedStyle = `
      background-color: ${removeAllSpaces(lightTheme.almostBlack)};
      border-radius: 100%;
      border: 1px solid ${removeAllSpaces(lightTheme.almostBlack)};
    `;

    const { getByTestId } = render(<ReviewStat percentage={review} />);

    const reviewContainer = getByTestId("ReviewStatContainer");

    expect(reviewContainer).toHaveStyle(expectedStyle);
  });

  test("Snapshot", () => {
    const review = 10;

    const rendered = renderer.create(
      <TestThemeProvider>
        <ReviewStat percentage={review} />
      </TestThemeProvider>
    );
    const tree = rendered.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
