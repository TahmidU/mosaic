import { cleanup, fireEvent, render, screen } from "utils/test-config";

import MediaCard from "./MediaCard";
import React from "react";
import getTheme from "resources/themes";
import { removeAllSpaces } from "utils/TestUtils";

describe("MediaCard", () => {
  const lightTheme = getTheme("light");

  test("Title style", () => {
    const expectedTitle = "TestTitle";
    const expectedTitleStyle = `
        text-align: start;
        ${removeAllSpaces(lightTheme.fonts.main.bigger)}
        font-weight: bold;
    `;

    render(
      <MediaCard
        title={expectedTitle}
        src="https://via.placeholder.com/220x330/000000?text=FooBar"
      />
    );

    expect(screen.getByText(expectedTitle)).toHaveStyle(expectedTitleStyle);
  });

  test("onClick", () => {
    const expectedTitle = "Foo";
    const onClickMock = jest.fn();

    render(
      <MediaCard
        title={expectedTitle}
        src="https://via.placeholder.com/220x330/000000?text=FooBar"
        onClick={onClickMock}
      />
    );

    fireEvent.click(screen.getByText(expectedTitle, { selector: "p" }));
    expect(onClickMock).toBeCalledTimes(1);
  });
});
