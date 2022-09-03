import { cleanup, fireEvent, render, screen } from "utils/test-config";

import Checkbox from ".";
import React from "react";
import getTheme from "resources/themes";
import { removeAllSpaces } from "utils/TestUtils";

afterEach(cleanup);

describe("Checkbox", () => {
  test("Styling change", () => {
    const lightTheme = getTheme("light");

    const expectedTestId = "Checkbox";
    const expectedStyle = `
    border-color: ${removeAllSpaces(lightTheme.cRed.alpha(0.1).toString())};
    background-color: ${removeAllSpaces(
      lightTheme.cRed.alpha(0.25).toString()
    )};
    color: ${removeAllSpaces(lightTheme.cRed.alpha(0.5).toString())};
    font-weight: bold;
    `;

    render(
      <Checkbox isSelected>
        <span>Checkbox Text</span>
      </Checkbox>
    );

    const checkbox = screen.getByTestId(expectedTestId);

    expect(checkbox).toHaveStyle(expectedStyle);
  });

  test("onClick", () => {
    const onClickMock = jest.fn();

    const expectedTestId = "Checkbox";

    render(
      <Checkbox isSelected={false} onClick={onClickMock}>
        <span>Checkbox Text</span>
      </Checkbox>
    );

    const checkbox = screen.getByTestId(expectedTestId);

    fireEvent.click(checkbox);
    expect(onClickMock).toBeCalledTimes(1);
  });
});
