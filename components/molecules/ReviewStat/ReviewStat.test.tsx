import { cleanup, render } from "resources/utils/test-config";

import React from "react";
import ReviewStat from "./ReviewStat";

afterEach(cleanup);

describe("ReviewStat", () => {
  test("Review 0%", () => {
    // Given When
    const review = 0;
    const { getByText } = render(<ReviewStat percentage={review} />);

    // Then
    getByText(`${review}%`);
  });

  test("Review 90% Non-wait", () => {
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
    await new Promise((r) => setTimeout(r, 2000));
    getByText(`${review}%`);
  });
});
