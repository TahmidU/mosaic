import "jest-styled-components";

import { cleanup, render } from "resources/utils/test-config";

import Carousel from "./Carousel";
import { FakeDiscoverMovie } from "./TestResources/data";
import React from "react";
import { TextUtils } from "resources/utils";

afterEach(cleanup);

describe("Carousel", () => {
  test("First Slide Title, Description, and Date", () => {
    // Given When
    const expectedData = FakeDiscoverMovie,
      firstSlideData = expectedData[0],
      expectedTitle = firstSlideData.title,
      expectedDesc = firstSlideData.overview,
      expectedDate = TextUtils.dateFormatter(firstSlideData.release_date);

    // When
    const { getByText, getAllByTestId, getByTestId } = render(
      <Carousel carouselData={expectedData} localImages disableAutoSlide />
    );

    // Then
    getByText(expectedTitle);
    getByText(expectedDesc);
    getByText(expectedDate, { exact: false });
  });
});
