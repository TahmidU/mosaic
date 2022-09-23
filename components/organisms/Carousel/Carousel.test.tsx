import "jest-styled-components";

import * as mq from "react-responsive";

import { cleanup, fireEvent, render, screen } from "utils/test-config";

import Carousel from "./index";
import { FakeDiscoverMovie } from "resources/TestResources/DiscoverMovie";
import React from "react";
import { TextUtils } from "utils";

afterEach(cleanup);

describe("Desktop Carousel", () => {
  let useMediaQueryMock: any = null;
  let main: any = null;
  beforeAll(() => {
    useMediaQueryMock = jest.spyOn(mq, "useMediaQuery");
    useMediaQueryMock.mockReturnValue(false);

    // setup a DOM element as a render target
    main = document.createElement("main");
    const portalContainer = document.createElement("div");
    portalContainer.id = "modalPortal";
    document.body.appendChild(portalContainer);
  });

  afterAll(() => {
    useMediaQueryMock.mockRestore();
  });

  test("Title, description, and date", async () => {
    const data = FakeDiscoverMovie,
      target = data[0],
      expectedTitle = target.title,
      expectedDesc = target.overview,
      expectedDate = TextUtils.dateFormatter(target.release_date) as string;

    render(<Carousel carouselData={data} desktopDisableAutoSlide />, {
      container: document.body.appendChild(main),
    });

    await new Promise((r) => setTimeout(r, 1000));
    screen.getByText(expectedTitle);
    screen.getByText(expectedDesc);
    screen.getByText(expectedDate, { exact: false });
  });

  test("Correct number of StepStatus components", async () => {
    const data = FakeDiscoverMovie;

    render(<Carousel carouselData={data} desktopDisableAutoSlide />, {
      container: document.body.appendChild(main),
    });

    await new Promise((r) => setTimeout(r, 1000));
    expect(screen.getAllByTestId("StepStatusIndicator").length).toBe(3);
  });

  test("Change slide auto", async () => {
    const data = FakeDiscoverMovie,
      target = data[1],
      expectedTitle = target.title;

    render(<Carousel carouselData={data} desktopAutoSlideDuration={0.7} />, {
      container: document.body.appendChild(main),
    });

    await new Promise((r) => setTimeout(r, 1000));
    screen.getByText(expectedTitle);
  });

  test("Click prev from start", async () => {
    const data = FakeDiscoverMovie,
      target = data[2],
      expectedTitle = target.title;

    render(<Carousel carouselData={data} desktopDisableAutoSlide />, {
      container: document.body.appendChild(main),
    });

    fireEvent.click(screen.getByTestId("CarouselPrevBtn"));
    await new Promise((r) => setTimeout(r, 1000));
    screen.getByText(expectedTitle);
  });

  test("Click next from end", async () => {
    const data = FakeDiscoverMovie,
      target = data[0],
      expectedTitle = target.title;

    render(<Carousel carouselData={data} desktopDisableAutoSlide />, {
      container: document.body.appendChild(main),
    });

    const nextBtn = screen.getByTestId("CarouselNextBtn");
    for (let i = 0; i < data.length; i++) {
      fireEvent.click(nextBtn);
    }

    await new Promise((r) => setTimeout(r, 1000));
    screen.getByText(expectedTitle);
  });

  test("Click StepStatus to change slide", async () => {
    const data = FakeDiscoverMovie,
      target = data[1],
      expectedTitle = target.title;

    render(<Carousel carouselData={data} desktopDisableAutoSlide />, {
      container: document.body.appendChild(main),
    });

    fireEvent.click(screen.getAllByTestId("StepStatusIndicator")[1]);
    await new Promise((r) => setTimeout(r, 1000));
    screen.getByText(expectedTitle);
  });
});

describe("Mobile Carousel", () => {
  let useMediaQueryMock: any = null;
  beforeAll(() => {
    useMediaQueryMock = jest.spyOn(mq, "useMediaQuery");
    useMediaQueryMock.mockReturnValue(true);
  });

  afterAll(() => {
    useMediaQueryMock.mockRestore();
  });

  test("Mobile title, description, and date", async () => {
    const data = FakeDiscoverMovie,
      target = data[0],
      expectedTitle = target.title,
      expectedDesc = target.overview,
      expectedDate = TextUtils.dateFormatter(target.release_date) as string;

    render(<Carousel carouselData={data} />);

    await new Promise((r) => setTimeout(r, 1000));

    screen.getByText(expectedTitle);
    screen.getByText(expectedDesc);
    screen.getByText(expectedDate, { exact: false });
  });

  test("Mobile Correct number of StepStatus components", async () => {
    const data = FakeDiscoverMovie;

    render(<Carousel carouselData={data} desktopDisableAutoSlide />);

    await new Promise((r) => setTimeout(r, 1000));
    expect(screen.getAllByTestId("StepStatusIndicator").length).toBe(3);
  });

  test("Mobile Click prev from start", async () => {
    const data = FakeDiscoverMovie,
      target = data[2],
      expectedTitle = target.title;

    render(<Carousel carouselData={data} desktopDisableAutoSlide />);

    fireEvent.click(screen.getByTestId("MobileCarouselPrevBtn"));
    await new Promise((r) => setTimeout(r, 1000));
    screen.getByText(expectedTitle);
  });

  test("Mobile Click next from end", async () => {
    const data = FakeDiscoverMovie,
      target = data[0],
      expectedTitle = target.title;

    render(<Carousel carouselData={data} desktopDisableAutoSlide />);

    const nextBtn = screen.getByTestId("MobileCarouselNextBtn");
    for (let i = 0; i < data.length; i++) {
      fireEvent.click(nextBtn);
    }

    await new Promise((r) => setTimeout(r, 1000));
    screen.getByText(expectedTitle);
  });

  test("Mobile Click StepStatus to change slide", async () => {
    const data = FakeDiscoverMovie,
      target = data[1],
      expectedTitle = target.title;

    render(<Carousel carouselData={data} desktopDisableAutoSlide />);

    fireEvent.click(screen.getAllByTestId("StepStatusIndicator")[1]);
    await new Promise((r) => setTimeout(r, 1000));
    screen.getByText(expectedTitle);
  });
});
