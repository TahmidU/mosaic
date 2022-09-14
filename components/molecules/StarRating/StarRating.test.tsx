import { cleanup, render, screen } from "utils/test-config";

import React from "react";
import StarRating from "./StarRating";
import getTheme from "resources/themes";
import { removeAllSpaces } from "utils/TestUtils";

afterEach(cleanup);

describe("StarRating", () => {
  const lightTheme = getTheme("light");

  test("Stars gradient and rating text", () => {
    const rating = 5.0;
    const expectedGradientId = "StarRating-StarsGradient";
    const expectedRating = `${((rating / 10) * 5).toFixed(2)}/5`;
    const expectedGradientStyle = `
        background: linear-gradient(to right,#FD1C1C ${rating}%,transparent ${rating}%);
    `;
    const expectedReviewStyle = `
        ${removeAllSpaces(lightTheme.fonts.main.regular)}
    `;

    render(<StarRating rating={5.0} />);

    expect(screen.getByTestId(expectedGradientId)).toHaveStyle(
      expectedGradientStyle
    );
    expect(screen.getByText(expectedRating)).toHaveStyle(expectedReviewStyle);
  });
});
