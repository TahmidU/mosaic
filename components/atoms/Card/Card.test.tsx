import { cleanup, render, screen } from "utils/test-config";

import Card from ".";
import React from "react";
import getTheme from "resources/themes";
import { removeAllSpaces } from "utils/TestUtils";

afterEach(cleanup);

describe("Card", () => {
  test("Card has child", () => {
    const expectedChildId = "Child";

    render(
      <Card>
        <div data-testid={expectedChildId}></div>
      </Card>
    );

    expect(screen.getByTestId(expectedChildId)).toBeDefined();
  });

  test("Card styling", () => {
    const expectedTestId = "Card";
    const expectedStyle = `
    padding: 0.25rem;
    border-radius: 1rem;
    border: 1px solid ${removeAllSpaces(
      getTheme("light").cGrey.alpha(0.1).toString()
    )};
    box-shadow: 2px 2px 8px 0px rgb(33 31 27 / 14%);
    `;

    render(
      <Card>
        <div></div>
      </Card>
    );

    expect(screen.getByTestId(expectedTestId)).toHaveStyle(expectedStyle);
  });
});
