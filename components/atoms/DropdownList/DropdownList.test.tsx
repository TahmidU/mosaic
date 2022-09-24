import { cleanup, fireEvent, render, screen } from "utils/test-config";

import DropdownList from ".";
import React from "react";

afterEach(cleanup);

describe("DropdownList", () => {
  test("Option selection", () => {
    const initialSelectedIndex = 0;
    const setSelectedIndexMock = jest.fn();

    const expectedTestId = "DropdownList";
    const expectedOptions = ["Op1", "Op2"];

    let selectedResult = "";
    const onChange = (selected: string) => {
      selectedResult = selected;
    };

    render(
      <DropdownList
        options={expectedOptions}
        selectedIndex={initialSelectedIndex}
        setSelectedIndex={setSelectedIndexMock}
        onChange={onChange}
      />
    );

    const dropdown = screen.getByTestId(expectedTestId);

    expect(
      screen.getByText(expectedOptions[0], { selector: "p" })
    ).toBeDefined();
    fireEvent.click(dropdown);

    const clickOption = screen.getByText(expectedOptions[1], {
      selector: "button",
    });
    expect(clickOption).toBeDefined();
    fireEvent.click(clickOption);
    expect(setSelectedIndexMock).toBeCalledTimes(1);

    expect(selectedResult).toBe(expectedOptions[1]);
  });
});
