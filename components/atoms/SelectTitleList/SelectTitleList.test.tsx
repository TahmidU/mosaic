import { cleanup, fireEvent, render, screen } from "utils/test-config";

import React from "react";
import SelectTitleList from "./SelectTitleList";
import getTheme from "resources/themes";
import { removeAllSpaces } from "utils/TestUtils";

afterEach(cleanup);

describe("SelectTitleList", () => {
  test("Title selection", () => {
    const expectedTitles = ["Popular", "Latest", "Upcoming"];
    const expectedSelectedTitle = expectedTitles[1];

    let titleResult = "";
    const onChangeMock = jest.fn((selected: string) => {
      titleResult = selected;
    });
    const setSelectedIndexMock = jest.fn();

    render(
      <SelectTitleList
        options={expectedTitles}
        selectedIndex={0}
        onChange={onChangeMock}
        setSelectedIndex={setSelectedIndexMock}
      />
    );

    const targetTitleElm = screen.getByText(expectedSelectedTitle);

    fireEvent.click(targetTitleElm);
    expect(setSelectedIndexMock).toBeCalledTimes(1);
    expect(titleResult).toBe(expectedSelectedTitle);
  });

  test("Correct styling", () => {
    const titles = ["Popular", "Latest", "Upcoming"];

    render(
      <SelectTitleList
        options={titles}
        selectedIndex={0}
        onChange={() => {}}
        setSelectedIndex={() => {}}
      />
    );

    expect(screen.getByText(titles[1])).toHaveStyle(`
    color: ${removeAllSpaces(getTheme("light").text)};
`);
    expect(screen.getByText(titles[0])).toHaveStyle(`
color: ${removeAllSpaces(getTheme("light").cRed.alpha(0.65).toString())};
`);
  });
});
