import { cleanup, fireEvent, render, screen } from "utils/test-config";

import HorizontalList from "./HorizontalList";
import React from "react";
import * as useListElements from "./useListElements";

afterEach(cleanup);

/*
const slideRightMock = jest.fn();
const slideLeftMock = jest.fn();
jest.mock("./useListElements", () => ({
  __esModule: true,
  default: () => ({
    slideLeft: slideLeftMock,
    slideRight: slideRightMock,
  }),
}));*/

describe("HorizontalList", () => {
  test("Title props", () => {
    const expectedTitle = "Horizontal Title";

    render(<HorizontalList title={expectedTitle}></HorizontalList>);

    expect(screen.getByText(expectedTitle)).toBeDefined();
  });

  test("Child appearance", async () => {
    const expectedChildNames = ["Child1", "Child2", "Child3"];

    render(
      <HorizontalList title="title">
        {expectedChildNames.map((_item, index) => (
          <span key={index}>{_item}</span>
        ))}
      </HorizontalList>
    );

    await new Promise((r) => setTimeout(r, 1300));

    expectedChildNames.forEach((_value) => {
      expect(expectedChildNames.includes(_value)).toBe(true);
    });
  });

  test("Loading elements appearance", async () => {
    const expectedChildNames = ["Child1", "Child2", "Child3"];

    const LoadingElements = (props: any) => {
      return (
        <div>
          {expectedChildNames.map((_item, index) => (
            <span key={index}>{_item}</span>
          ))}
        </div>
      );
    };
    render(
      <HorizontalList
        title="title"
        loading
        loadingElements={<LoadingElements />}
      ></HorizontalList>
    );

    await new Promise((r) => setTimeout(r, 1300));

    expectedChildNames.forEach((_value) => {
      expect(expectedChildNames.includes(_value)).toBe(true);
    });
  });

  test("Next button click", async () => {
    const RightBtnTestId = "HorizontalList-RightBtn";

    const slideRightMock = jest.fn();
    jest.spyOn(useListElements, "default").mockReturnValue({
      ...jest.requireActual("./useListElements"),
      slideLeft: jest.fn(),
      slideRight: slideRightMock,
    });

    render(
      <HorizontalList title="">
        {Array.from(Array(10).keys()).map((_elm, index) => (
          <span key={index}>{index}</span>
        ))}
      </HorizontalList>
    );

    const rightBtn = screen.getByTestId(RightBtnTestId);
    fireEvent.click(rightBtn);
    expect(slideRightMock).toBeCalled();
  });

  test("Previous button click", () => {
    const LeftBtnTestId = "HorizontalList-LeftBtn";

    const slideLeftMock = jest.fn();
    jest.spyOn(useListElements, "default").mockReturnValue({
      ...jest.requireActual("./useListElements"),
      slideLeft: slideLeftMock,
      slideRight: jest.fn(),
    });

    render(
      <HorizontalList title="">
        {Array.from(Array(10).keys()).map((_elm, index) => (
          <span key={index}>{index}</span>
        ))}
      </HorizontalList>
    );

    const leftBtn = screen.getByTestId(LeftBtnTestId);
    fireEvent.click(leftBtn);
    expect(slideLeftMock).toBeCalled();
  });
});
