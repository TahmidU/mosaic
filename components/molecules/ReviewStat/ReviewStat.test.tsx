import { cleanup, render } from "resources/utils/test-config";

import React from "react";
import ReviewStat from "./ReviewStat";

afterEach(cleanup);

describe("ReviewStat", () => {
  test("Review 0%", () => {
    const review = 0;
    const { getByText } = render(
      <ReviewStat percentage={review} className="" />
    );

    expect(getByText(`${review}%`)).toBeDefined();
  });
});
