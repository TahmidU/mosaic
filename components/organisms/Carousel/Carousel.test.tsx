import "jest-styled-components";

import { cleanup, fireEvent, render, screen } from "utils/test-config";

import Carousel from "./Carousel";
import { FakeDiscoverMovie } from "resources/TestResources/DiscoverMovie";
import React from "react";
import { TextUtils } from "utils";

afterEach(cleanup);

describe("Carousel", () => {
  test("Title, description, and date", () => {
    // Given
    const data = FakeDiscoverMovie,
      target = data[0],
      expectedTitle = target.title,
      expectedDesc = target.overview,
      expectedDate = TextUtils.dateFormatter(target.release_date) as string;

    // When
    render(
      <Carousel
        carouselData={data}
        page={0}
        direction={0}
        handlePageDirectionChange={() => {}}
        handlePageChange={() => {}}
        disableAutoSlide
      />
    );

    // Then
    screen.getByText(expectedTitle);
    screen.getByText(expectedDesc);
    screen.getByText(expectedDate, { exact: false });
  });

  test("Correct number of StepStatus components", () => {
    // Given
    const data = FakeDiscoverMovie;

    // When
    render(
      <Carousel
        carouselData={data}
        page={0}
        direction={0}
        handlePageDirectionChange={() => {}}
        handlePageChange={() => {}}
        disableAutoSlide
      />
    );

    // Then
    expect(screen.getAllByTestId("StepStatusIndicator").length).toBe(3);
  });

  /*
  test("Change slide", async () => {
    // Given
    const data = FakeDiscoverMovie,
      target = data[1],
      expectedTitle = target.title;

    // When
    const { getByTestId, getByText } = render(
      <Carousel carouselData={data} localImages disableAutoSlide />
    );

    // Then
    fireEvent.click(getByTestId("CarouselNextBtn"));

    await new Promise((r) => setTimeout(r, 1000));

    getByText(expectedTitle);
  });

  test("Change slide auto", async () => {
    // Given
    const data = FakeDiscoverMovie,
      target = data[1],
      expectedTitle = target.title;

    // When Then
    const { getByText } = render(
      <Carousel
        carouselData={data}
        localImages
        autoSlideDuration={1}
        autoSlideCallback={() => {
          getByText(expectedTitle);
        }}
      />
    );

    await new Promise((r) => setTimeout(r, 1000));
  });

  test("Click prev from start", async () => {
    // Given
    const data = FakeDiscoverMovie,
      target = data[2],
      expectedTitle = target.title;

    // When
    const { getByTestId, getByText } = render(
      <Carousel carouselData={data} localImages disableAutoSlide />
    );

    // Then
    fireEvent.click(getByTestId("CarouselPrevBtn"));

    await new Promise((r) => setTimeout(r, 1000));

    getByText(expectedTitle);
  });

  test("Click next from end", async () => {
    // Given
    const data = FakeDiscoverMovie,
      target = data[0],
      expectedTitle = target.title;

    // When
    const { getByTestId, getByText } = render(
      <Carousel
        carouselData={data}
        localImages
        disableAutoSlide
        startPage={2}
      />
    );

    // Then
    fireEvent.click(getByTestId("CarouselNextBtn"));

    await new Promise((r) => setTimeout(r, 1000));

    getByText(expectedTitle);
  });

  test("Click StepStatus to change slide", async () => {
    // Given
    const data = FakeDiscoverMovie,
      target = data[1],
      expectedTitle = target.title;

    // When
    const { getByTestId, getByText, getAllByTestId } = render(
      <Carousel carouselData={data} localImages disableAutoSlide />
    );

    // Then
    fireEvent.click(getAllByTestId("StepStatusIndicator")[1]);
    await new Promise((r) => setTimeout(r, 1000));

    getByText(expectedTitle);
  });*/
});
