import { cleanup, fireEvent, render, screen } from "utils/test-config";

import React from "react";
import SelectTitleList from "./SelectTitleList";
import getTheme from "resources/themes";
import { removeAllSpaces } from "utils/TestUtils";

afterEach(cleanup);

describe("SelectTitleList", () => {
  const lightTheme = getTheme("light");

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

    const expectedLatestTitleStyle = `color: ${removeAllSpaces(
      lightTheme.text
    )};`;
    const expectedPopularTitleStyle = `color: ${removeAllSpaces(
      lightTheme.cRed.alpha(0.65).toString()
    )};`;

    render(
      <SelectTitleList
        options={titles}
        selectedIndex={0}
        onChange={() => {}}
        setSelectedIndex={() => {}}
      />
    );

    expect(screen.getByText(titles[1])).toHaveStyle(expectedLatestTitleStyle);
    expect(screen.getByText(titles[0])).toHaveStyle(expectedPopularTitleStyle);
  });
});
