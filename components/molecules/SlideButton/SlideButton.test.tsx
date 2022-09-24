import { cleanup, fireEvent, render, screen } from "utils/test-config";

import React from "react";
import SlideButton from "./SlideButton";
import { removeAllSpaces } from "utils/TestUtils";

afterEach(cleanup);

describe("SlideButton", () => {
  test("Default variant onClick", () => {
    const onClickMock = jest.fn();
    const slideButtonId = "SlideButton";

    render(<SlideButton onClick={onClickMock} />);

    fireEvent.click(screen.getByTestId(slideButtonId));
    expect(onClickMock).toBeCalledTimes(1);
  });

  test("circleSimple variant onClick", () => {
    const onClickMock = jest.fn();
    const slideButtonId = "SlideButton";

    render(<SlideButton onClick={onClickMock} variant="circleSimpleLeft" />);

    fireEvent.click(screen.getByTestId(slideButtonId));
    expect(onClickMock).toBeCalledTimes(1);
  });

  test("transparent variant onClick", () => {
    const onClickMock = jest.fn();
    const slideButtonId = "SlideButton";

    render(<SlideButton onClick={onClickMock} variant="transparentLeft" />);

    fireEvent.click(screen.getByTestId(slideButtonId));
    expect(onClickMock).toBeCalledTimes(1);
  });

  test("simple variant onClick", () => {
    const onClickMock = jest.fn();
    const slideButtonId = "SlideButton";

    render(<SlideButton onClick={onClickMock} variant="simpleLeft" />);

    fireEvent.click(screen.getByTestId(slideButtonId));
    expect(onClickMock).toBeCalledTimes(1);
  });
});
